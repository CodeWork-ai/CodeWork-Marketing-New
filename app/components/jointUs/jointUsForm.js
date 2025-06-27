"use client";
import React, { useState, useRef } from "react";
import { FiUploadCloud, FiFile, FiCheckCircle, FiX } from "react-icons/fi";

const JoinUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    experience: "",
    contact: "",
    resume: null, // Updated to handle file upload
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    setFileError("");
    if (!file) return;
    
    if (file.type === "application/pdf") {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result.split(",")[1]; // Extract base64 content
        setFormData({ ...formData, resume: base64 });
      };
      reader.readAsDataURL(file);
    } else {
      setFileError("Please upload a valid PDF file.");
      setFileName("");
      setFormData({ ...formData, resume: null });
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const onButtonClick = () => {
    fileInputRef.current.click();
  };

  const removeFile = () => {
    setFileName("");
    setFormData({ ...formData, resume: null });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch(
        `https://prod-api.codework.ai/api/v1/marketing_site/add_candidate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send candidate details.");
      }

      const data = await response.json();
      setResponseMessage(data.message);
      setFormData({
        name: "",
        email: "",
        designation: "",
        experience: "",
        contact: "",
        resume: null,
      });
      setFileName("");
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset file input
      }
    } catch (error) {
      setResponseMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between bg-gradient-to-b from-[#FBF8E6] to-[#ebf9ff] text-gray-800 p-8 md:p-16 space-y-8 md:space-y-2">
      {/* Left Section */}
      <div className="flex-1 space-y-4 mr-5">
        <h2 className="text-4xl font-bold">Apply Now</h2>
        <p>
          We are dedicated to leveraging advanced AI, ML, and Data Science to
          transform your business. Let's collaborate to craft your success story
          and showcase the potential of AI in driving sustainable growth.
        </p>
      </div>

      {/* Right Section: Form */}
      <div
        className="relative flex flex-col bg-white overflow-hidden rounded-lg md:shadow-xl"
        color={["#109eeb", "#109eeb", "#109eeb"]}
      >
        <form
          onSubmit={handleSubmit}
          className="flex-1 lg:w-[500px] xl:w-[700px] p-6 rounded-md shadow-md space-y-6"
        >
          {/* Name */}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name *"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-800 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-800 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Designation */}
          <input
            type="text"
            id="designation"
            name="designation"
            placeholder="Designation *"
            required
            value={formData.designation}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-800 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Experience */}
          <input
            type="text"
            id="experience"
            name="experience"
            placeholder="Experience *"
            required
            value={formData.experience}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-800 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Contact */}
          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="Contact *"
            required
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-800 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Resume - Enhanced File Upload */}
          <div className="space-y-2">
            <label
              htmlFor="resume"
              className="block text-base font-medium text-gray-700"
            >
              Attach Resume / CV *
            </label>
            
            <div 
              className={`relative border-2 border-dashed rounded-lg p-6 ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} ${fileName ? 'bg-gray-50' : ''} transition-all duration-200 ease-in-out`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="resume"
                name="resume"
                ref={fileInputRef}
                accept="application/pdf"
                required={!formData.resume}
                onChange={handleFileChange}
                className="hidden"
              />
              
              {!fileName ? (
                <div className="flex flex-col items-center justify-center space-y-3">
                  <FiUploadCloud className="w-10 h-10 text-blue-500" />
                  <div className="text-center">
                    <p className="text-gray-700 font-medium">Drag & drop your resume here</p>
                    <p className="text-sm text-gray-500">or</p>
                  </div>
                  <button
                    type="button"
                    onClick={onButtonClick}
                    className="px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition-colors duration-200 font-medium text-sm"
                  >
                    Browse Files
                  </button>
                  <p className="text-xs text-gray-500 mt-2">Supports PDF files only</p>
                </div>
              ) : (
                <div className="flex items-center justify-between bg-white p-3 rounded-md border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-md">
                      <FiFile className="text-blue-600 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 truncate max-w-[200px]">{fileName}</p>
                      <p className="text-xs text-green-600 flex items-center">
                        <FiCheckCircle className="mr-1" /> Ready to upload
                      </p>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    onClick={removeFile}
                    className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
            
            {fileError && (
              <p className="text-red-500 text-sm mt-1">{fileError}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-400 to-cyan-400 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-[1.02]"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {responseMessage && (
            <p className="mt-6 text-center text-sm text-gray-800">
              {responseMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default JoinUsForm;
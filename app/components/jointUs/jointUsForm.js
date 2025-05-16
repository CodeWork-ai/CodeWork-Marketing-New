"use client";
import React, { useState } from "react";
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result.split(",")[1]; // Extract base64 content
        setFormData({ ...formData, resume: base64 });
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid PDF file.");
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
      document.getElementById("resume").value = ""; // Reset file input
    } catch (error) {
      setResponseMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between bg-gradient-to-b from-[#fffdf0] to-[#ebf9ff] text-gray-800 p-8 md:p-16 space-y-8 md:space-y-2">
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
        className="relative flex flex-col bg-white  overflow-hidden rounded-lg md:shadow-xl"
        color={["#109eeb", "#109eeb", "#109eeb"]}
      >
        <form
          onSubmit={handleSubmit}
          className="flex-1  lg:w-[500px] xl:w-[700px]  p-6 rounded-md shadow-md space-y-6"
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
            className="w-full px-4 py-2  text-gray-800 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-4 py-2  text-gray-800 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-4 py-2  text-gray-800 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-4 py-2  text-gray-800 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Resume */}
          <input
            type="file"
            id="resume"
            name="resume"
            accept="application/pdf"
            required
            onChange={handleFileChange}
            className="py-2  text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

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

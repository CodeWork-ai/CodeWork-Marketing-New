'use client';
import React, { useState } from 'react';

const InternshipForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        designation: '',
        experience: '',
        contact: '',
        resume: null, // Handle file upload as base64
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            const reader = new FileReader();
            reader.onload = () => {
                const base64 = reader.result.split(',')[1]; // Extract base64 content
                setFormData({ ...formData, resume: base64 });
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload a valid PDF file.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage('');

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/marketing_site/add_internship_profile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send candidate details.');
            }

            const data = await response.json();
            setResponseMessage(data.message);
            setFormData({
                name: '',
                email: '',
                designation: '',
                experience: '',
                contact: '',
                resume: null,
            });
            document.getElementById('resume').value = ''; // Reset file input
        } catch (error) {
            setResponseMessage('Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row justify-between bg-gradient-to-b from-[#ffebfd] to-[#ebf9ff] text-gray-800 p-8 md:p-16 space-y-8 md:space-y-2">
            {/* Left Section */}
            <div className="flex-1 space-y-4 mr-5">
                <h2 className="text-3xl font-bold text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600">Apply Now</h2>
                <p className="text-lg">
                    We are committed to empowering the next generation of innovators through hands-on experience in AI, ML, and Data Science. Join our internship program to gain real-world skills, work on impactful projects, and build a strong foundation for your future career in technology.
                </p>
                <p className="text-lg">
                    If you’re interested, we’d love to hear from you!
                </p>
                <p className="text-lg">
                    Let’s make this an unforgettable journey together. Apply now and kickstart your career!
                </p>
            </div>

            {/* Right Section: Form */}
            <div className="flex flex-col bg-gray-100 bg-opacity-5 p-6 rounded-md shadow-md space-y-6 lg:w-[500px] xl:w-[700px]">
                <form onSubmit={handleSubmit} className="flex-1 space-y-4">
                    {/* Name */}
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name *"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
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
                        className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
                    />

                    {/* Designation */}
                    <input
                        type="text"
                        id="designation"
                        name="designation"
                        placeholder="Area of Interest *"
                        required
                        value={formData.designation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
                    />

                    {/* Experience */}
                    <input
                        type="text"
                        id="experience"
                        name="experience"
                        placeholder="Experience if any *"
                        required
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
                    />

                    {/* Contact */}
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        placeholder="Phone Number *"
                        required
                        value={formData.contact}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
                    />

                    {/* Resume */}
                    <div>
                        <div>
                            <label className="font-semibold">Attach Resume / CV</label>
                        </div>
                        <input
                            type="file"
                            id="resume"
                            name="resume"
                            accept="application/pdf"
                            required
                            onChange={handleFileChange}
                            className="py-2 bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold px-6 py-3 rounded-md transition duration-300 hover:from-cyan-400 hover:to-purple-500"
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>

                    {responseMessage && (
                        <p className="mt-6 text-center text-sm text-green-500">{responseMessage}</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default InternshipForm;

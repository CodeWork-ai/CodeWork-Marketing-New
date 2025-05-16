"use client";
import React, { useState } from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";

const WeListening = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    try {
      const response = await fetch('https://prod-api.codework.ai/api/v1/marketing_site/add_contact_details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send contact details.');
      }

      const data = await response.json();
      setResponseMessage(data.message || 'Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setResponseMessage('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EFF8FF] flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 bg-transparent">

        {/* Left Text Section */}
        <div className="flex flex-col justify-center">
          <RiDoubleQuotesL className="text-3xl sm:text-4xl md:text-5xl text-blue-800 font-bold mb-4" />
          <p className="text-lg leading-relaxed text-gray-700">
          we empower businesses with cutting-edge technology, 
            expert talent, and essential tools to thrive in the digital era. 
            Reach out to us today!
          </p>
        </div>

        {/* Right Form Section */}
        <div className="rounded-3xl p-[1px] bg-gradient-to-r from-blue-300 to-purple-300">
          <div className="bg-white rounded-3xl p-8">
            <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-6 text-center">We&apos;re Listening</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 text-gray-700">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="mb-4 text-gray-700">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="mb-4 text-gray-700">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="mb-6 text-gray-700">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="5"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>

              {responseMessage && (
                <p className="text-center text-sm mb-4 text-gray-600">{responseMessage}</p>
              )}

              <button
                type="submit "
                disabled={loading}
                className="block mx-auto bg-gradient-to-r from-cyan-300 to-purple-400 text-white font-semibold px-16 py-2 rounded-full shadow hover:opacity-90 transition-opacity"
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WeListening;

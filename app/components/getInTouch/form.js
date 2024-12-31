'use client'
import React, { useState } from 'react';
import ShineBorder from '../../../components/ui/shine-border';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage('');

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/marketing_site/add_contact_details`, {
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
            setResponseMessage(data.message);
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
        <div className="flex flex-col lg:flex-row justify-between bg-black bg-opacity-40 text-white p-2 md:p-16 space-y-8 md:space-y-2">
            {/* Left Section */}
            <div className="flex-1 space-y-4 mr-5">
                <h2 className="text-2xl font-bold text-gray-300">At CodeWork</h2>
                <p className="text-gray-400">
                    We are dedicated to leveraging advanced AI, ML, and Data Science to transform your business. Let's collaborate to craft your success story and showcase the potential of AI in driving sustainable growth.
                </p>
            </div>

            {/* Right Section: Form */}
            <ShineBorder className="relative flex flex-col bg-black bg-opacity-50 overflow-hidden rounded-lg md:shadow-xl"
                color={["#1dcaf5", "#f04f57"]}>
                <form
                    onSubmit={handleSubmit}
                    className="flex-1 bg-black lg:w-[500px] xl:w-[700px] bg-opacity-5 p-1 lg:p-6 rounded-md shadow-md space-y-6"
                >
                    {/* First and Last Name */}
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name *"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-black bg-opacity-5 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full px-4 py-2 bg-black bg-opacity-5 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Company */}
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-black bg-opacity-5 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Phone */}
                    <textarea
                        type="textarea"
                        id="message"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        rows={5}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-black bg-opacity-5 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition duration-300"
                        disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                        {responseMessage && (
                            <p className="mt-6 text-center text-sm text-gray-400">{responseMessage}</p>
                        )}
                </form>
            </ShineBorder>
        </div>
    );
};

export default ContactForm;

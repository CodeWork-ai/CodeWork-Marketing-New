'use client'
import React, { useState } from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { CoolMode } from "../../../components/ui/cool-mode";

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email) {
      setIsLoading(true);

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/marketing_site/subscription_email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage(data.detail || 'Thanks for subscribing!');
          setEmail("")
        } else {
          setMessage(data.detail || 'An error occurred. Please try again.');
        }
      } catch (error) {
        setMessage('Network error. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    } else {
      setMessage('Please fill out both fields.');
    }
  };


  return (
    <div className="">
      <h3 className="text-lg font-semibold mb-4 text-gray-200">Subscribe to Our Newsletter</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* <div>
          <label className="block text-gray-400 text-sm lg:text-base 2xl:text-lg font-medium mb-1" htmlFor="email">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}
        <div>
          <label className="block text-gray-400 text-sm lg:text-base 2xl:text-lg font-medium mb-1" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="subscribe"
            checked={isSubscribed}
            onChange={handleCheckboxChange}
            className="text-blue-500 focus:ring-blue-500"
          />
          <label htmlFor="subscribe" className="text-sm text-gray-400">
            Yes, subscribe me to your newsletter.
          </label>
        </div> */}
        <CoolMode>
          <button
            type="submit"
            className="w-full bg-[#fd6262] text-black py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </CoolMode>
        {message && (
          <p className="text-center text-sm mt-4 text-gray-400">{message}</p>
        )}
      </form>
    </div>
  );
};

export default NewsletterForm;


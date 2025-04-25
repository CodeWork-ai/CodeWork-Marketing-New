"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const accordionData = [
  {
    title: 'AI consulting services :',
    content: (
      <p className="text-[#5C5C5C] text-sm leading-relaxed">
        Get expert guidance to streamline your digital transformation journey.
        We help businesses innovate with strategic technology solutions.
      </p>
    )
  },
  {
    title: 'IT Staffing solutions :',
    content: (
      <p className="text-[#5C5C5C] text-sm leading-relaxed">
        We provide skilled IT professionals to meet your project needs. Our
        staffing solutions ensure you have the right talent at the right time.
      </p>
    )
  },
  {
    title: 'Software Development :',
    content: (
      <p className="text-[#5C5C5C] text-sm leading-relaxed">
        We provide skilled IT professionals to meet your project needs. Our
        staffing solutions ensure you have the right talent at the right time.
      </p>
    )
  },
  {
    title: 'AI in Healthcare :',
    content: (
      <p className="text-[#5C5C5C] text-sm leading-relaxed">
        We provide skilled IT professionals to meet your project needs. Our
        staffing solutions ensure you have the right talent at the right time.
      </p>
    )
  },
  {
    title: 'Cybersecurity Services :',
    content: (
      <p className="text-[#5C5C5C] text-sm leading-relaxed">
        We provide skilled IT professionals to meet your project needs. Our
        staffing solutions ensure you have the right talent at the right time.
      </p>
    )
  },
  {
    title: 'Finance Technology Solutions :',
    content: (
      <p className="text-[#5C5C5C] text-sm leading-relaxed">
        We provide skilled IT professionals to meet your project needs. Our
        staffing solutions ensure you have the right talent at the right time.
      </p>
    )
  },
  {
    title: 'E-commerce Solutions :',
    content: (
      <p className="text-[#5C5C5C] text-sm leading-relaxed">
        We provide skilled IT professionals to meet your project needs. Our
        staffing solutions ensure you have the right talent at the right time.
      </p>
    )
  },
  {
    title: 'Smart Recommendation Systems :',
    content: (
      <p className="text-[#5C5C5C] text-sm leading-relaxed">
        We provide skilled IT professionals to meet your project needs. Our
        staffing solutions ensure you have the right talent at the right time.
      </p>
    )
  }
];

const ContactLanding = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggle = (idx) => setActiveIndex(activeIndex === idx ? -1 : idx);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    referral: '',
    agreement: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'phone' && !/^\d*$/.test(value)) return; // Only allow numbers

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.referral) newErrors.referral = 'This field is required';
    if (!formData.agreement) newErrors.agreement = 'You must agree to proceed';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully:', formData);
    }
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-10">
      {/* Logo Section */}
      <div className="absolute pt-6 left-4">
        <Link href="/">
          <img
            src="/cw-logo.svg"
            alt="Company Logo"
            className="w-32 sm:w-36 md:w-40 h-auto cursor-pointer"
          />
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10 pt-36 pb-10">
        {/* Form Section */}
        <div className="flex-1 bg-white p-6 sm:p-8 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
          <h2 className="text-[#00ACA9] font-semibold text-2xl mb-6">
            REQUEST A DEMO
          </h2>
          <form className="flex text-gray-900 flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <div className="flex-1 flex flex-col">
                <label className="text-sm mb-2">First Name *</label>
                <input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="p-3 text-sm border border-[#00ACA9] rounded-lg placeholder-[#00ACA9] outline-none"
                  placeholder="Enter First Name"
                />
                {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName}</span>}
              </div>
              <div className="flex-1 flex flex-col">
                <label className="text-sm mb-2">Last Name *</label>
                <input
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="p-3 text-sm border border-[#00ACA9] rounded-lg placeholder-[#00ACA9] outline-none"
                  placeholder="Enter Last Name"
                />
                {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName}</span>}
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-2">Business Email Id *</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 text-sm border border-[#00ACA9] rounded-lg placeholder-[#00ACA9] outline-none"
                placeholder="Enter Mail Id"
              />
              {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-2">Phone Number *</label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 text-sm border border-[#00ACA9] rounded-lg placeholder-[#00ACA9] outline-none"
                placeholder="Enter Phone Number"
              />
              {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-2">How did you hear about Codework? *</label>
              <input
                name="referral"
                type="text"
                value={formData.referral}
                onChange={handleChange}
                className="p-3 text-sm border border-[#00ACA9] rounded-lg placeholder-[#00ACA9] outline-none"
                placeholder="Message"
              />
              {errors.referral && <span className="text-red-500 text-xs mt-1">{errors.referral}</span>}
            </div>

            <div className="flex items-start space-x-2 text-xs text-[#5C5C5C]">
              <input
                name="agreement"
                type="checkbox"
                checked={formData.agreement}
                onChange={handleChange}
                className="mt-1"
              />
              <label>
                Allow Codework to contact me for scheduling and marketing as per the{' '}
                <a href="#" className="text-[#00838D] underline">Privacy Policy</a>.
              </label>
            </div>
            {errors.agreement && <span className="text-red-500 text-xs">{errors.agreement}</span>}

            <button
              type="submit"
              className="w-full mt-4 py-3.5 text-base font-medium bg-[#00ACA9] text-white rounded-lg hover:opacity-90 transition"
            >
              Get a Demo Free
            </button>
          </form>
        </div>

        {/* Accordion Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-black mb-6">
            Codework AI for Service Professionals
          </h1>
          {accordionData.map((item, idx) => (
            <div key={idx} className="border border-[#00ACA9] rounded-lg mb-3 overflow-hidden">
              <div
                className={`flex justify-between items-center px-4 py-3 cursor-pointer text-base font-medium ${
                  activeIndex === idx ? 'bg-[#00ACA9] text-white' : 'bg-white text-[#00ACA9]'
                }`}
                onClick={() => toggle(idx)}
              >
                <div>{item.title}</div>
                {activeIndex === idx ? (
                  <HiChevronUp className="text-xl" />
                ) : (
                  <HiChevronDown className="text-xl" />
                )}
              </div>
              {activeIndex === idx && item.content && (
                <div className="p-4 bg-white">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLanding;

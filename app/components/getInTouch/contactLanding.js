"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const accordionData = [
  {
    title: "AI consulting services:",
    content: (
      <p className="text-[#5C5C5C] text-sm leading-relaxed">
        Get expert guidance to streamline your digital transformation journey.
        We help businesses innovate with strategic technology solutions.
      </p>
    ),
  },
  {
    title: "IT Staffing solutions:",
    content: (
      <p className="text-[#5C5C5C] text-sm leading-relaxed">
        We provide skilled IT professionals to meet your project needs. Our
        staffing solutions ensure you have the right talent at the right time.
      </p>
    ),
  },
  {
    title: "Software Development:",
    content: (
      <p className="text-[#5C5C5C] text-sm leading-relaxed">
        From web and mobile apps to full-stack enterprise systems, our
        engineers build scalable, maintainable software tailored to your
        requirements.
      </p>
    ),
  },
  {
    title: "AI in Healthcare:",
    content: (
      <p className="text-[#5C5C5C] text-sm leading-relaxed">
        Leverage AI for better diagnostics, patient monitoring, and
        personalized care. We help healthcare providers deploy safe,
        compliant ML solutions.
      </p>
    ),
  },
  {
    title: "Cybersecurity Services:",
    content: (
      <p className="text-[#5C5C5C] text-sm leading-relaxed">
        Protect your assets with our vulnerability assessments, penetration
        testing, and ongoing security monitoring services.
      </p>
    ),
  },
  {
    title: "Finance Technology Solutions:",
    content: (
      <p className="text-[#5C5C5C] text-sm leading-relaxed">
        Build secure, high-performance fintech platforms, from trading
        applications to regulatory compliance tooling.
      </p>
    ),
  },
  {
    title: "E-commerce Solutions:",
    content: (
      <p className="text-[#5C5C5C] text-sm leading-relaxed">
        Our team delivers custom e-commerce stores, payment integrations, and
        scalable architectures to grow your online business.
      </p>
    ),
  },
  {
    title: "Smart Recommendation Systems:",
    content: (
      <p className="text-[#5C5C5C] text-sm leading-relaxed">
        Personalize user experiences with ML-driven recommendations for
        content, products, or services.
      </p>
    ),
  },
];

const ContactLanding = () => {
  // ─── Form State ─────────────────────────────────────────────────────────
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    referral: "",
    agreement: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // ─── Accordion State ─────────────────────────────────────────────────────
  const [activeIndex, setActiveIndex] = useState(0);
  const toggle = (idx) => setActiveIndex(activeIndex === idx ? -1 : idx);

  // ─── Handlers ────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "mobile" && !/^\d*$/.test(value)) return; // digits only
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = "First name is required";
    if (!formData.last_name) newErrors.last_name = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.mobile) newErrors.mobile = "mobile number is required";
    if (!formData.referral) newErrors.referral = "This field is required";
    if (!formData.agreement) newErrors.agreement = "You must agree to proceed";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setResponseMessage("");

    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/marketing_site/add_demo_contact`;
    console.log("Submitting to:", url);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // parse JSON to extract server message
      const result = await res.json();

      if (!res.ok) {
        setResponseMessage(result.message || "Failed to send contact details.");
      } else {
        setResponseMessage(result.message || "Thank you! We’ll be in touch.");
        // reset form on success
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          mobile: "",
          referral: "",
          agreement: false,
        });
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setResponseMessage(
        err.message || "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-10">
      {/* Logo */}
      <div className="absolute pt-6 left-4">
        <Link href="/">
          <img
            src="/logo.svg"
            alt="Company Logo"
            className="w-32 sm:w-36 md:w-40 h-auto cursor-pointer"
          />
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 pt-36 pb-10">
        {/* ─── Form Section ───────────────────────────────────────────────── */}
        <div className="flex-1 bg-white p-6 sm:p-8 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
          <h2 className="text-[#2c44ba] font-semibold text-2xl mb-6">
            REQUEST A DEMO
          </h2>

          <form onSubmit={handleSubmit} className="flex  text-black flex-col space-y-4">
            {/* Name Fields */}
            <div className="flex flex-col  sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              {["first_name", "last_name"].map((field) => (
                <div className="flex-1" key={field}>
                  <label className="text-sm mb-2 block">
                    {field === "first_name" ? "First Name *" : "Last Name *"}
                  </label>
                  <input
                    name={field}
                    type="text"
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-3 text-sm border border-[#2c44ba] rounded-lg placeholder-[#2c44ba] outline-none"
                    placeholder={`Enter ${
                      field === "first_name" ? "First" : "Last"
                    } Name`}
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors[field]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Email */}
            <div>
              <label className="text-sm mb-2 block">Business Email Id *</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 text-sm border border-[#2c44ba] rounded-lg placeholder-[#2c44ba] outline-none"
                placeholder="Enter Email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* mobile */}
            <div>
              <label className="text-sm mb-2 block">mobile Number *</label>
              <input
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-3 text-sm border border-[#2c44ba] rounded-lg placeholder-[#2c44ba] outline-none"
                placeholder="Enter mobile Number"
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
              )}
            </div>

            {/* Referral */}
            <div>
              <label className="text-sm mb-2 block">
                How did you hear about Codework? *
              </label>
              <input
                name="referral"
                type="text"
                value={formData.referral}
                onChange={handleChange}
                className="w-full p-3 text-sm border border-[#2c44ba] rounded-lg placeholder-[#2c44ba] outline-none"
                placeholder="Message"
              />
              {errors.referral && (
                <p className="text-red-500 text-xs mt-1">{errors.referral}</p>
              )}
            </div>

            {/* Agreement */}
            <div className="flex items-start space-x-2 text-xs text-[#5C5C5C]">
              <input
                name="agreement"
                type="checkbox"
                checked={formData.agreement}
                onChange={handleChange}
                className="mt-1"
              />
              <label>
                Allow Codework to contact me for scheduling and marketing per the{" "}
                <a href="#" className="text-[#2c44ba] underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
            {errors.agreement && (
              <p className="text-red-500 text-xs">{errors.agreement}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-4 py-3.5 text-base font-medium rounded-lg transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#2c44ba] text-white hover:opacity-90"
              }`}
            >
              {loading ? "Submitting…" : "Submit"}
            </button>

            {/* Response Message */}
            {responseMessage && (
              <p className="mt-4 text-center text-sm text-[#2c44ba]">
                {responseMessage}
              </p>
            )}
          </form>
        </div>

        {/* ─── Accordion Section ──────────────────────────────────────────────── */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-black -m-3 mb-6">
            Codework AI for Service Professionals
          </h1>
          {accordionData.map((item, idx) => (
            <div
              key={idx}
              className="border border-[#2c44ba] rounded-lg mb-3 overflow-hidden"
            >
              <div
                onClick={() => toggle(idx)}
                className={`flex justify-between items-center px-4 py-3 cursor-pointer text-base font-medium ${
                  activeIndex === idx
                    ? "bg-[#2c44ba] text-white"
                    : "bg-white text-[#2c44ba]"
                }`}
              >
                <span>{item.title}</span>
                {activeIndex === idx ? (
                  <HiChevronUp className="text-xl" />
                ) : (
                  <HiChevronDown className="text-xl" />
                )}
              </div>
              {activeIndex === idx && (
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

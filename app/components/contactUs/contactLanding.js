"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import {
  FaRobot,
  FaUsers,
  FaLaptopCode,
  FaHospitalUser,
  FaShieldAlt,
  FaMoneyBillWave,
  FaShoppingCart,
  FaLightbulb,
} from "react-icons/fa";

const accordionData = [
  {
    title: "AI in Digital Marketing Services:",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
      Drive smarter campaigns with AI-powered insights and personalization.
      </p>
    ),
    icon: FaRobot,
  },
  {
    title: "AI in Cybersecurity:",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
       Strengthen defenses with intelligent threat detection and prevention.
      </p>
    ),
    icon: FaUsers,
  },
  {
    title: "AI Implementation:",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
       Seamlessly integrate AI solutions tailored to your business needs.
      </p>
    ),
    icon: FaLaptopCode,
  },
  {
    title: "AI Automation",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
       Streamline processes and boost efficiency with intelligent automation.
      </p>
    ),
    icon: FaHospitalUser,
  },
  {
    title: "Agentic AI:",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        Power intelligent systems that self-learn, adapt, and act independently.
      </p>
    ),
    icon: FaShieldAlt,
  },
  {
    title: "Cloud Computing:",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
       Scalable, secure, and reliable cloud solutions for every business need.
      </p>
    ),
    icon: FaMoneyBillWave,
  },
  {
    title: "DevOps Solutions:",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        Accelerate development and deployment with seamless DevOps practices.
      </p>
    ),
    icon: FaShoppingCart,
  },
  {
    title: "AI-Driven Custom Software Development:",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
       Build tailored applications powered by artificial intelligence.
      </p>
    ),
    icon: FaLightbulb,
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
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
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

      const result = await res.json();

      if (!res.ok) {
        setResponseMessage(result.message || "Failed to send contact details.");
      } else {
        setResponseMessage(result.message || "Thank you! We'll be in touch.");
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
    <div className="bg-primary relative py-10 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full animate-blob"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-secondary/15 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/10 rounded-full animate-blob animation-delay-1000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-56 left-1/4 w-4 h-4 bg-secondary/80 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-3000"></div>
      </div>

      <div className="flex flex-col lg:flex-row px-7 gap-10 pt-36 pb-10 relative z-10">
        {/* ─── Enhanced Form Section ───────────────────────────────────────────────── */}
        <div className="flex-1 bg-primary/30 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 animate-slide-up">
          {/* Enhanced Header */}
          <div className="mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-4">
              <span className="text-secondary text-xs font-medium">
                — Get Started —
              </span>
            </div>
            <h2 className="text-white font-bold text-3xl mb-2">
              <span className="text-white">REQUEST A </span>
              <span className="text-secondary">DEMO</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-transparent rounded-full"></div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex text-white flex-col space-y-6"
          >
            {/* Enhanced Name Fields */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              {["first_name", "last_name"].map((field) => (
                <div className="flex-1" key={field}>
                  <label className="text-sm mb-2 block text-white/90 font-medium">
                    {field === "first_name" ? "First Name *" : "Last Name *"}
                  </label>
                  <input
                    name={field}
                    type="text"
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-4 text-sm bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl placeholder-white/50 outline-none focus:border-secondary focus:bg-white/10 transition-all duration-300"
                    placeholder={`Enter ${
                      field === "first_name" ? "First" : "Last"
                    } Name`}
                  />
                  {errors[field] && (
                    <p className="text-red-400 text-xs mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Enhanced Email */}
            <div>
              <label className="text-sm mb-2 block text-white/90 font-medium">
                Business Email Id *
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 text-sm bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl placeholder-white/50 outline-none focus:border-secondary focus:bg-white/10 transition-all duration-300"
                placeholder="Enter Email"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Enhanced Mobile */}
            <div>
              <label className="text-sm mb-2 block text-white/90 font-medium">
                Mobile Number *
              </label>
              <input
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-4 text-sm bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl placeholder-white/50 outline-none focus:border-secondary focus:bg-white/10 transition-all duration-300"
                placeholder="Enter Mobile Number"
              />
              {errors.mobile && (
                <p className="text-red-400 text-xs mt-1">{errors.mobile}</p>
              )}
            </div>

            {/* Enhanced Referral */}
            <div>
              <label className="text-sm mb-2 block text-white/90 font-medium">
                How did you hear about Codework? *
              </label>
              <input
                name="referral"
                type="text"
                value={formData.referral}
                onChange={handleChange}
                className="w-full p-4 text-sm bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl placeholder-white/50 outline-none focus:border-secondary focus:bg-white/10 transition-all duration-300"
                placeholder="Message"
              />
              {errors.referral && (
                <p className="text-red-400 text-xs mt-1">{errors.referral}</p>
              )}
            </div>

            {/* Enhanced Agreement */}
            <div className="flex items-start space-x-3 text-xs text-white/80">
              <input
                name="agreement"
                type="checkbox"
                checked={formData.agreement}
                onChange={handleChange}
                className="mt-1 accent-secondary"
              />
              <label className="leading-relaxed">
                Allow Codework to contact me for scheduling and marketing per
                the{" "}
                <a
                  href="/privacy-policy"
                  className="text-secondary underline hover:text-secondary/80 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>
            {errors.agreement && (
              <p className="text-red-400 text-xs">{errors.agreement}</p>
            )}

            {/* Enhanced Submit Button with Increased Width */}
            <button
              type="submit"
              disabled={loading}
              className={`cursor-pointer relative bg-white/10 py-3 rounded-full min-w-[9.5rem] min-h-[2.92rem] max-w-lg mx-auto flex items-center justify-start shadow-[inset_1px_2px_5px_#00000080] overflow-hidden group ${
                loading
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-secondary transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"
              }`}
            >
              {/* Animated Background Bar */}
              <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
                <div className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] bg-secondary h-full rounded-full"></div>

                {/* Icon Circle */}
                <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-secondary transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-primary">
                  <div className="size-[0.8rem] text-primary group-hover:text-secondary group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      height="100%"
                      width="100%"
                    >
                      <path
                        fill="currentColor"
                        d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Button Text */}
              <div className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-primary text-white relative z-10">
                {loading ? "Submitting…" : "Submit Request"}
              </div>
            </button>

            {/* Enhanced Response Message */}
            {responseMessage && (
              <div className="mt-4 p-4 bg-secondary/10 backdrop-blur-sm border border-secondary/30 rounded-xl">
                <p className="text-center text-sm text-secondary font-medium">
                  {responseMessage}
                </p>
              </div>
            )}
          </form>
        </div>

        {/* ─── Enhanced Accordion Section ──────────────────────────────────────────────── */}
        <div className="flex-1 animate-slide-up animation-delay-200">
          {/* Enhanced Header */}
          <div className="mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-4">
              <span className="text-secondary text-xs font-medium">
                — Our Services —
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              <span className="text-white">Codework AI for </span>
              <span className="text-secondary">Service Professionals</span>
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-transparent rounded-full"></div>
          </div>

          {/* Enhanced Accordion Items with React Icons */}
          <div className="space-y-4">
            {accordionData.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-primary/40 hover:border-secondary/30 transition-all duration-300 animate-card-float"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div
                    onClick={() => toggle(idx)}
                    className={`flex justify-between items-center px-6 py-4 cursor-pointer text-base font-semibold transition-all duration-300 ${
                      activeIndex === idx
                        ? "bg-gradient-to-r from-secondary to-secondary/80 text-primary"
                        : "text-white hover:text-secondary"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <IconComponent className="text-xl" />
                      <span>{item.title}</span>
                    </div>
                    <div
                      className={`transform transition-transform duration-300 ${
                        activeIndex === idx ? "rotate-180" : ""
                      }`}
                    >
                      <HiChevronDown className="text-xl" />
                    </div>
                  </div>

                  {/* Accordion Content with Animation */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeIndex === idx
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 bg-white/5 backdrop-blur-sm border-t border-white/10">
                      {item.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-64 h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardFloat {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .animate-card-float {
          animation: cardFloat 0.6s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ContactLanding;

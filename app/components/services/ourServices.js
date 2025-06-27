"use client";
import React from "react";
import Link from "next/link";
import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaMobile,
  FaGlobe,
  FaUsers,
  FaLock,
  FaArrowRight,
  FaBullhorn,
} from "react-icons/fa";
import { BiSync } from "react-icons/bi";
import MobileOurServices from "./mobileOurServices";
import { useEffect, useState } from "react";

const OurServices = () => {
  const services = [
    {
      title: "AI Model Training",
      description: "Advanced machine learning solutions and AI model development for your business needs.",
      icon: FaBrain,
      link: "/ai-model-training",
      image: "/servicesCard/6.jpg" 
    },
    {
      title: "Software Development", 
      description: "Custom software solutions tailored to streamline your business processes.",
      icon: FaCode,
      link: "/software-development-service",
      image: "/servicesCard/2.jpg"
    },
    {
      title: "Custom Development",
      description: "Bespoke development solutions designed specifically for your unique requirements.",
      icon: FaDatabase,
      link: "/custom-software-development",
      image: "/servicesCard/7.jpg"
    },
    { 
      title: "DevOps Solutions", 
      description: "Streamlined deployment and integration processes for efficient development cycles.",
      icon: BiSync, 
      link: "/devops-solutions",
      image: "/servicesCard/9.jpg"
    },
    { 
      title: "Cloud Computing", 
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      icon: FaCloud, 
      link: "/cloud-computing",
      image: "/servicesCard/3.jpg"
    },
    { 
      title: "Cyber Security", 
      description: "Comprehensive security solutions to protect your digital assets and data.",
      icon: FaShieldAlt, 
      link: "/cybersecurity-service",
      image: "/servicesCard/8.jpg"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: FaMobile,
      link: "/mobile-software-development",
      image: "/servicesCard/5.jpg"
    },
    { 
      title: "Web Designing", 
      description: "Modern, responsive web designs that deliver exceptional user experiences.",
      icon: FaGlobe, 
      link: "/web-design-service",
      image: "/servicesCard/1.jpg"
    },
    {
      title: "IT Staff Augmentation",
      description: "Skilled IT professionals to enhance your team's capabilities and capacity.",
      icon: FaUsers,
      link: "/it-staff-service",
      image: "/servicesCard/10.jpg"
    },
    {
      title: "Penetration Testing",
      description: "Comprehensive security testing to identify and resolve vulnerabilities.",
      icon: FaLock,
      link: "/penetration-testing-service",
      image: "/servicesCard/4.jpg"
    },
    {
      title: "Digital Marketing Services",
      description: "Codework offers tailored Digital Marketing boost conversions.",
      icon: FaBullhorn,
      link: "/digital-marketing-services",
      image: "/servicesCard/11.jpg"
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    // Function to update window width
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 768); // 768px is the md breakpoint in Tailwind
    };

    // Add event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      // Initial check
      handleResize();
    }

    // Cleanup
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* Mobile view */}
      {isMobile ? (
        <MobileOurServices />
      ) : (
        /* Desktop and tablet view */
        <div className="bg-gradient-to-b from-[#FBF8E6] to-[#EBF9FF] text-white py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center text-black mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">Our Services</h2>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
                With Codework, adopting technology means embracing innovation with
                a personal touch. Commitment to excellence ensures that every
                project is delivered with precision and care, making us a trusted
                partner in the digital journey.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative mb-10 sm:mb-12 md:mb-16 transition-all duration-300 hover:transform hover:translate-y-[-5px]"
                >
                  {/* Image Section */}
                  <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 rounded-lg"
                    />

                    {/* Icon Overlay */}
                    <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-white rounded-full p-1.5 sm:p-2 md:p-3 shadow-md">
                      {React.createElement(service.icon, {
                        className: "text-base sm:text-lg md:text-xl lg:text-2xl text-blue-600",
                      })}
                    </div>
                  </div>

                  {/* Content Overlay - Half on image, half below */}
                  <div className="absolute -bottom-6 sm:-bottom-7 md:-bottom-8 left-1 right-1 sm:left-2 sm:right-2 md:left-4 md:right-4 bg-white rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 mx-1 sm:mx-2 shadow-lg z-10">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 text-center relative overflow-hidden">
                      <span className="relative z-10">{service.title}</span>
                      {/* Highlight animation background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out opacity-60 rounded"></div>
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 md:mb-4 leading-relaxed text-center line-clamp-3">
                      {service.description}
                    </p>
                    
                    {/* Readmore Button */}
                    <div className="text-center">
                      <Link href={service.link || "#"}>
                        <div className="inline-flex items-center text-cyan-600 text-sm sm:text-base font-medium hover:text-cyan-700 transition-colors duration-200 group-hover:translate-x-1 transform">
                          <span>Readmore</span>
                          <FaArrowRight className="ml-1.5 sm:ml-2 text-xs sm:text-sm" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decoration */}
          <div className="absolute bottom-0 right-0 opacity-20 hidden sm:block">
            <img src="/straightLine.svg" alt="Straight Line Decoration" className="max-w-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default OurServices;
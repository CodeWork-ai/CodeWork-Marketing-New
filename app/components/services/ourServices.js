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
} from "react-icons/fa";
import { BiSync } from "react-icons/bi";
import MobileOurServices from "./mobileOurServices";

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
      icon: FaLock,
      link: "/digital-marketing-services",
      image: "/servicesCard/11.jpg"
    },
  ];

  return (
    <div>
      {/* Mobile only */}
      <div className="flex md:hidden">
        <MobileOurServices />
      </div>

      {/* Desktop version */}
      <div className="hidden md:block  bg-gradient-to-b from-[#FBF8E6] to-[#EBF9FF] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center text-black mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-gray-800 text-lg max-w-4xl mx-auto leading-relaxed">
              With Codework, adopting technology means embracing innovation with
              a personal touch. Commitment to excellence ensures that every
              project is delivered with precision and care, making us a trusted
              partner in the digital journey.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative mb-16"
              >
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden rounded-lg   transition-all duration-300 transform hover:scale-105">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 rounded-lg"
                  />

                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-md">
                    {React.createElement(service.icon, {
                      className: "text-2xl text-blue-600",
                    })}
                  </div>
                </div>

                {/* Content Overlay - Half on image, half below */}
                <div className="absolute -bottom-8 left-4 right-4 bg-white rounded-lg p-6 mx-2 shadow-lg z-10">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center relative overflow-hidden">
                    <span className="relative z-10">{service.title}</span>
                    {/* Highlight animation background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out opacity-60 rounded"></div>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">
                    {service.description}
                  </p>
                  
                  {/* Readmore Button */}
                  <div className="text-center">
                    <Link href={service.link || "#"}>
                      <div className="inline-flex items-center text-cyan-600 font-medium hover:text-cyan-700 transition-colors duration-200 group-hover:translate-x-1 transform">
                        <span>Readmore</span>
                        <FaArrowRight className="ml-2 text-sm" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decoration - if you still want to keep it */}
        <div className="absolute bottom-0 right-0 opacity-20">
          <img src="/straightLine.svg" alt="Straight Line Decoration" />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
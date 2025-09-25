"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DevopsSolutionsLanding = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);

  const services = [
    { title: "AI Model Training", link: "/ai-model-training" },
    { 
      title: "AI Driven Custom Software Development", 
      link: "/custom-software-development",
    },
    { 
      title: "AI Automation", 
      link: "/ai-automation",
    },
    { 
      title: "Cloud Computing", 
      link: "/cloud-computing",
    },
    {
      title: "DevOps Solutions",
      link: "/devops-solutions",
    },
    { 
      title: "Agentic AI", 
      link: "/agentic-ai",
    },
    {
      title: "AI Implementation",
      link: "/ai-implementation" 
    },
    { title: "AI in Cyber Security", link: "/cybersecurity-service" },
    { title: "IT Staff Augmentation", link: "/it-staff-service" },
    { title: "AI in Digital Marketing Services", link: "/digital-marketing-services" },
          { title: "Professional Annotation Services", link: "/annotation-services" },

  ];

  // Function to check if link is active
  const isActiveLink = (linkPath) => {
    return pathname === linkPath;
  };

  // Check if any dropdown item is active
  const isDropdownActive = (service) => {
    if (!service.dropdown) return false;
    return service.dropdown.some(item => pathname === item.link) || pathname === service.link;
  };

  // Toggle dropdown
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <section className="relative w-full min-h-screen bg-primary overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full"></div>
        <div className="absolute top-1/3 right-24 w-24 h-24 bg-secondary/15 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full"></div>
        <div className="absolute top-2/3 right-1/3 w-32 h-32 bg-secondary/12 rounded-full"></div>
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-28 left-16 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
        <div className="absolute bottom-56 left-1/4 w-3 h-3 bg-secondary/80 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-4 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
          
          {/* Left Side - Main Content (Takes 2 columns) */}
          <div className="lg:col-span-2 text-left">
            {/* Section Badge */}
            <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm text-secondary px-6 py-3 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
              DevOps Solutions & Services
            </div>

            <div className="heading-container mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Scalable <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">DevOps Solutions</span> for Accelerated Software Delivery
              </h1>
              
              {/* Decorative underline */}
              <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mb-8"></div>
            </div>

            <div className="paragraph-container mb-8 max-w-3xl">
              <p className="text-lg text-white/90 leading-relaxed pl-4 border-l-4 border-secondary/40">
                The core of <span className="text-secondary font-medium">Codework</span> is creating seamless DevOps pipelines that accelerate software delivery and enhance operational efficiency. Every solution is crafted to bridge development and operations teams while ensuring continuous integration and deployment. Whether implementing CI/CD pipelines, container orchestration, or infrastructure automation, expert DevOps engineers ensure scalable and reliable solutions that drive business agility.
              </p>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-secondary mb-4">Transform your software delivery with modern DevOps practices that ensure reliability and speed.</h3>
              </div>
            </div>
          </div>

          {/* Right Side - Services Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-primary/70 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 sticky top-8">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></div>
                <h3 className="text-xl font-bold text-white">Our Services</h3>
              </div>
              
              <div className="space-y-2">
                {services.map((service, index) => (
                  <div key={index}>
                    {/* Main Service Item */}
                    <div 
                      className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 border-l-4 group relative overflow-hidden ${
                        isActiveLink(service.link) || isDropdownActive(service)
                          ? 'bg-secondary/20 text-secondary border-secondary font-bold shadow-lg backdrop-blur-sm'
                          : 'text-white/80 hover:text-white hover:bg-white/10 border-transparent hover:border-secondary/50 hover:shadow-md'
                      }`}
                    >
                      {/* Hover background effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10 flex items-center justify-between">
                        <Link href={service.link} className="flex-1">
                          <span>{service.title}</span>
                        </Link>
                        
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            isActiveLink(service.link) || isDropdownActive(service)
                              ? 'bg-secondary animate-pulse' 
                              : 'bg-white/30 group-hover:bg-secondary/60'
                          }`}></div>
                          
                          {/* Dropdown Arrow */}
                          {service.dropdown && (
                            <button 
                              onClick={(e) => {
                                e.preventDefault();
                                toggleDropdown(index);
                              }}
                              className="p-1"
                            >
                              <svg 
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  openDropdown === index ? 'rotate-180' : ''
                                } ${
                                  isDropdownActive(service) ? 'text-secondary' : 'text-white/60'
                                }`} 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Dropdown Items */}
                    {service.dropdown && (
                      <div className={`overflow-hidden transition-all duration-300 ${
                        openDropdown === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="ml-4 mt-2 space-y-1 border-l-2 border-secondary/20 pl-4">
                          {service.dropdown.map((dropdownItem, dropIndex) => (
                            <Link 
                              key={dropIndex}
                              href={dropdownItem.link}
                              className={`block px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                                isActiveLink(dropdownItem.link)
                                  ? 'bg-secondary/15 text-secondary border-l-2 border-secondary'
                                  : 'text-white/70 hover:text-secondary hover:bg-white/5'
                              }`}
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom decoration in services card */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center text-white/60 text-xs">
                  <div className="w-1 h-1 bg-secondary rounded-full mr-2"></div>
                  <span>Navigate through our services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-40 h-20 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
          50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default DevopsSolutionsLanding;

"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomSoftwareLanding = () => {
  const pathname = usePathname();

  const services = [
    { title: "AI Model Training", link: "/ai-model-training" },
    { title: "Software Development", link: "/software-development-service" },
    { title: "Custom Development", link: "/custom-software-development" },
    { title: "DevOps Solutions", link: "/devops-solutions" },
    { title: "Cloud Computing", link: "/cloud-computing" },
    { title: "Cyber Security", link: "/cybersecurity-service" },
    { title: "Mobile Development", link: "/mobile-software-development" },
    { title: "Web Designing", link: "/web-design-service" },
    { title: "IT Staff Augmentation", link: "/it-staff-service" },
    { title: "Penetration Testing", link: "/penetration-testing-service" },
    { title: "Digital Marketing Services", link: "/digital-marketing-services" },
  ];

  const isActiveLink = (linkPath) => {
    return pathname === linkPath;
  };

  return (
    <section className="relative w-full min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 md:w-40 md:h-40 bg-secondary/20 rounded-full"></div>
        <div className="absolute top-60 right-32 w-24 h-24 md:w-32 md:h-32 bg-secondary/15 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-36 h-36 md:w-48 md:h-48 bg-secondary/25 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 md:w-24 md:h-24 bg-secondary/10 rounded-full"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full"></div>
        <div className="absolute top-48 right-20 w-1 h-1 md:w-2 md:h-2 bg-white/60 rounded-full"></div>
        <div className="absolute bottom-56 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-secondary/80 rounded-full"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 md:w-2 md:h-2 bg-white/40 rounded-full"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Enhanced Content (8 columns) */}
          <div className="lg:col-span-8 text-center lg:text-left">
            {/* Section Badge */}
            <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-6 md:mb-8">
              <span className="text-secondary text-sm font-medium">— Custom Software Development —</span>
            </div>

            {/* Enhanced Heading */}
            <div className="heading-container mb-8 md:mb-10">
              <h1 className="text-5xl font-bold text-white leading-tight mb-6">
                <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                  Scalable
                </span>{" "}
                and Tailored Software for Business Growth
              </h1>
              
              {/* Decorative underline */}
              <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto lg:mx-0"></div>
            </div>

            {/* Enhanced Paragraph */}
            <div className="paragraph-container mb-8 md:mb-10 max-w-4xl mx-auto lg:mx-0">
              <div className="relative">
                <div className="absolute -left-3 md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full hidden lg:block"></div>
                <p className="text-lg text-white/90 leading-relaxed lg:pl-8 font-light">
                  Codework.ai specializes in <span className="text-secondary font-medium">custom software development</span>, delivering solutions that align with specific business objectives. Whether it's an <span className="text-secondary font-medium">enterprise application</span>, a web platform, or a mobile app, every software solution aims to deliver efficiency, <span className="text-secondary font-medium">seamless user experience</span>, and business scalability.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Services (4 columns) */}
          <div className="lg:col-span-4">
            <div className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 shadow-2xl shadow-secondary/25 relative">
              

              {/* Services Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
                Our <span className="text-secondary">Services</span>
              </h3>
              
              {/* Services List */}
              <div className="space-y-2 max-h-80 overflow-y-auto custom-scrollbar">
                {services.map((service, index) => (
                  <Link 
                    key={index}
                    href={service.link}
                    className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 border-l-4 group ${
                      isActiveLink(service.link)
                        ? 'bg-secondary/20 text-secondary border-secondary font-semibold shadow-lg backdrop-blur-sm'
                        : 'text-white/80 hover:text-secondary hover:bg-secondary/10 border-transparent hover:border-secondary/50 backdrop-blur-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service.title}
                      </span>
                      <svg 
                        className={`w-4 h-4 transition-all duration-300 ${
                          isActiveLink(service.link) 
                            ? 'text-secondary rotate-0' 
                            : 'text-white/40 group-hover:text-secondary group-hover:rotate-12'
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Custom CSS for Scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(5, 12, 37, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(29, 223, 234, 0.6);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(29, 223, 234, 0.8);
        }
      `}</style>
    </section>
  );
};

export default CustomSoftwareLanding;

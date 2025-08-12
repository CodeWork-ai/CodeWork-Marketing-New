"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ItStaffLanding = () => {
  const pathname = usePathname(); // Get current pathname

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

  // Function to check if link is active
  const isActiveLink = (linkPath) => {
    return pathname === linkPath;
  };

  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-[#F6F5FF]">
      {/* Background Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/landing.mp4" type="video/mp4" />
        </video> */}
        {/* Dark overlay for better text visibility */}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-[90%] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          
          {/* Left Side - Original Content (Takes 2 columns) */}
          <div className="lg:col-span-2 text-left text-gray-800">
            <div className="heading-container pt-16 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold">
                Managed Services - Simplifying IT for Business Growth
              </h1>
            </div>

            <div className="paragraph-container mb-8 max-w-2xl">
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg leading-relaxed text-gray-800">
                Managed Services involve outsourcing key IT functions to a specialized third-party provider who ensures continuous management, monitoring, and maintenance of your systems. It allows businesses to concentrate on growth while leaving technical operations in expert hands.
                Key Components of Managed Services:
              </p>
            </div>
          </div>

          {/* Right Side - Services with Active Highlighting */}
          <div className="lg:col-span-1 pt-16 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28">
            <div className="p-6 ml-auto max-w-xs">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Our Services</h3>
              
              <div className="space-y-1">
                {services.map((service, index) => (
                  <Link 
                    key={index}
                    href={service.link}
                    className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 border-l-4 ${
                      isActiveLink(service.link)
                        ? 'bg-blue-100 text-blue-700 border-blue-500 font-semibold shadow-sm'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 border-transparent hover:border-blue-500'
                    }`}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItStaffLanding;

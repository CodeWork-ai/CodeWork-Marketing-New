"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AnnotationLanding = () => {
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
    { title: "Professional Annotation Services", link: "/annotation-services" },
  ];

  const isActiveLink = (linkPath) => pathname === linkPath;
  const isDropdownActive = (service) => service.dropdown && (service.link === pathname || service.dropdown.some(item => item.link === pathname));
  const toggleDropdown = (i) => setOpenDropdown(openDropdown === i ? null : i);

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
          {/* Left Side */}
          <div className="lg:col-span-2 text-left">
            {/* Section Badge */}
            <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm text-secondary px-6 py-3 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
              AI & Machine Learning
            </div>
            <div className="heading-container mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
                <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">Professional Annotation Services</span> for AI and Machine Learning
              </h1>
              {/* Decorative underline */}
              <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mb-8"></div>
            </div>
            <div className="paragraph-container mb-8 max-w-3xl">
              <p className="text-lg text-white/90 leading-relaxed pl-4 border-l-4 border-secondary/40">
                Data is the foundation of every successful AI and machine learning model. Without properly labelled data, even the most advanced algorithms fail to perform effectively. At Codework, we specialize in providing Annotation Services that transform raw, unstructured information into structured datasets ready for AI training. Our services are designed to deliver accuracy, scalability, and reliability for businesses across different industries.
              </p>
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">Why Annotation is Important</h2>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  Annotation is the key enabler of artificial intelligence. AI systems learn from data, and without correctly labelled datasets, they cannot recognize patterns or make accurate predictions. Whether it is detecting objects in images, analysing customer reviews, or converting speech to text, annotation provides the ground truth that trains machine learning models.
                </p>
                <p className="text-lg text-white/90 leading-relaxed mb-4">Some major reasons why annotation is important:</p>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-secondary">Enhances AI Accuracy</strong> – Properly annotated data improves the quality of predictions and decisions made by AI.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-secondary">Supports Industry Growth</strong> – From healthcare to retail, annotation drives innovation in real-world applications.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-secondary">Speeds Up AI Adoption</strong> – Well-prepared data reduces errors and makes AI deployment faster.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-secondary">Customizable for Every Use Case</strong> – Annotation adapts to any domain, ensuring industry-specific solutions.</span>
                  </li>
                </ul>
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
                          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isActiveLink(service.link) || isDropdownActive(service) ? 'bg-secondary animate-pulse' : 'bg-white/30 group-hover:bg-secondary/60'}`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
        .animate-pulse { animation: pulse 2s infinite; }
        @keyframes bounce {
          0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1);}
          50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1);}
        }
        .animate-bounce { animation: bounce 1s infinite; }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0;}
        }
        .animate-ping { animation: ping 1s cubic-bezier(0,0,0.2,1) infinite; }
      `}</style>
    </section>
  );
};

export default AnnotationLanding;

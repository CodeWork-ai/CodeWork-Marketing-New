"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { 
  FaRocket, 
  FaCogs, 
  FaCheckCircle, 
  FaIndustry, 
  FaLightbulb, 
  FaGem,
  FaBolt,
  FaChartLine,
  FaUsers,
  FaClock,
  FaDollarSign,
  FaPlay,
  FaInfoCircle,
  FaStar,
  FaAward
} from 'react-icons/fa';

const AIAutomationPage = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);

  const services = [
    { title: "AI Model Training", link: "/ai-model-training" },
    { title: "AI Driven Custom Software Development", link: "/custom-software-development" },
    { title: "AI Automation", link: "/ai-automation" },
    { title: "Cloud Computing", link: "/cloud-computing" },
    { title: "DevOps Solutions", link: "/devops-solutions" },
    { title: "Agentic AI", link: "/agentic-ai" },
    { title: "AI Implementation", link: "/ai-implementation" },
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
    <div className="bg-primary min-h-screen">
      {/* Landing Section - Exactly like AiModelLanding */}
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
                AI Automation Solutions
              </div>

              <div className="heading-container mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Transform Your Business with <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">AI Automation</span>
                </h1>
                
                {/* Decorative underline */}
                <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mb-8"></div>
              </div>

              <div className="paragraph-container mb-8 max-w-3xl">
                <p className="text-lg text-white/90 leading-relaxed pl-4 border-l-4 border-secondary/40">
                  We believe that the use of AI in the automation of tasks should not just be a time saver but should also make us smarter and more productive. The main idea behind <span className="text-secondary font-medium">AI Automation</span> is not simply substituting human tasks but rather providing businesses with the ability of smart systems that are capable of thinking, learning, and adapting.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-secondary mb-4">Codework AI Automation - the place where smartness meets effectiveness.</h3>
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
                          </div>
                        </div>
                      </div>
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
      </section>

      {/* Comprehensive Centered Content Section */}
      <section className="relative bg-primary overflow-hidden py-20 px-4 sm:px-6 lg:px-20">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-secondary/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-tr from-cyan-400/15 to-secondary/15 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-2xl animate-ping"></div>
        </div>

        {/* Floating Dots */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-24 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
          <div className="absolute bottom-64 right-32 w-4 h-4 bg-secondary/80 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-cyan-400/60 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Centered Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm text-secondary px-8 py-4 rounded-full text-sm font-medium mb-8 group hover:bg-secondary/10 transition-all duration-300">
              <FaLightbulb className="w-4 h-4 mr-3 animate-pulse group-hover:scale-125 transition-transform duration-300" />
              Comprehensive AI Automation Solutions
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Smart <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">AI Automation</span>
            </h2>
            <h3 className="text-2xl sm:text-3xl font-light text-white/80 leading-relaxed mb-8">
              for Every Business Process
            </h3>
            
            {/* Enhanced decorative underline */}
            <div className="flex items-center justify-center space-x-2 mb-12">
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-cyan-400 rounded-full shadow-lg"></div>
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"></div>
            </div>

            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-16">
              Experience the future of business automation with our comprehensive AI solutions that streamline operations, reduce costs, and drive innovation across every aspect of your organization.
            </p>
          </div>

          {/* Centered Image Section */}
          <div className="flex justify-center mb-20">
            <div className="relative group max-w-2xl">
              {/* Multi-layer Glow Effects */}
              <div className="absolute -inset-8 bg-gradient-to-r from-secondary/40 via-cyan-400/30 to-secondary/40 rounded-3xl blur-3xl group-hover:blur-4xl transition-all duration-700 animate-pulse"></div>
              <div className="absolute -inset-6 bg-gradient-to-br from-cyan-400/30 to-secondary/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-cyan-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-primary/80 via-primary/60 to-primary/80 backdrop-blur-xl rounded-3xl border-2 border-white/30 p-12 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-4">
                
                {/* Floating Elements Around Image */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-secondary to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500 flex items-center justify-center shadow-xl">
                  <FaRocket className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -top-4 -right-8 w-10 h-10 bg-gradient-to-br from-cyan-400 to-secondary rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700 flex items-center justify-center shadow-lg">
                  <FaBolt className="w-5 h-5 text-primary" />
                </div>
                <div className="absolute -bottom-6 -left-4 w-14 h-14 bg-gradient-to-br from-secondary/90 to-cyan-400/90 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-600 flex items-center justify-center shadow-2xl">
                  <FaCogs className="w-7 h-7 text-primary" />
                </div>
                <div className="absolute -bottom-4 -right-6 w-8 h-8 bg-gradient-to-br from-cyan-400/80 to-secondary/80 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-800 flex items-center justify-center shadow-lg">
                  <FaGem className="w-4 h-4 text-primary" />
                </div>
                
                {/* Main Image */}
                <Image
                  src="/blog/blog18.jpg"
                  alt="AI Automation Illustration"
                  width={800}
                  height={600}
                  className="w-full h-auto mx-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Enhanced Corner Elements */}
                <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-secondary/70 rounded-tl-3xl group-hover:border-secondary group-hover:scale-110 transition-all duration-300"></div>
                <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-secondary/70 rounded-br-3xl group-hover:border-secondary group-hover:scale-110 transition-all duration-300"></div>
                
                {/* Tech Circuit Animation */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
                    <path d="M100 100 L200 100 L200 200 L300 200" stroke="currentColor" strokeWidth="2" className="text-secondary animate-pulse" />
                    <path d="M500 400 L600 400 L600 500 L700 500" stroke="currentColor" strokeWidth="2" className="text-cyan-400 animate-pulse" style={{animationDelay: '1s'}} />
                    <path d="M150 300 L250 300 L250 350 L350 350" stroke="currentColor" strokeWidth="1" className="text-secondary/70 animate-pulse" style={{animationDelay: '2s'}} />
                    <circle cx="200" cy="200" r="4" fill="currentColor" className="text-secondary animate-pulse" />
                    <circle cx="600" cy="400" r="4" fill="currentColor" className="text-cyan-400 animate-pulse" />
                    <circle cx="350" cy="350" r="3" fill="currentColor" className="text-secondary/70 animate-pulse" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid - Centered Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            
            {/* Feature 1 - Streamlined Operations */}
            <div className="group relative bg-primary/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-primary/50 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-secondary/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaBolt className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4 group-hover:text-cyan-400 transition-colors duration-300">Streamlined Operations</h3>
                <p className="text-white/90 leading-relaxed">
                  Through our AI software solutions, we help organizations streamline their operations, reducing errors and saving time, allowing teams to focus on innovation and growth.
                </p>
              </div>
            </div>

            {/* Feature 2 - Complete Business Process Automation */}
            <div className="group relative bg-primary/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-primary/50 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-secondary/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaCogs className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4 group-hover:text-cyan-400 transition-colors duration-300">Complete Process Automation</h3>
                <p className="text-white/90 leading-relaxed">
                  We handle AI automation for entire business processes, including workflow automation, smart chatbots, predictive systems, and intelligent data pipelines.
                </p>
              </div>
            </div>

            {/* Feature 3 - Seamless Integration */}
            <div className="group relative bg-primary/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-primary/50 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-secondary/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaCheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4 group-hover:text-cyan-400 transition-colors duration-300">Seamless Integration</h3>
                <p className="text-white/90 leading-relaxed">
                  Our solutions integrate seamlessly into current business environments, eliminating bottlenecks and ensuring maximum efficiency with steady performance.
                </p>
              </div>
            </div>

            {/* Feature 4 - Industry-Specific Solutions */}
            <div className="group relative bg-primary/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-primary/50 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-secondary/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaIndustry className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4 group-hover:text-cyan-400 transition-colors duration-300">Industry-Specific Solutions</h3>
                <p className="text-white/90 leading-relaxed">
                  We create tailored automation solutions combining human knowledge with AI technology, designed specifically for your industry, customers, and goals.
                </p>
              </div>
            </div>

            {/* Feature 5 - Digital Transformation */}
            <div className="group relative bg-primary/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-primary/50 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-secondary/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaRocket className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4 group-hover:text-cyan-400 transition-colors duration-300">Digital Transformation</h3>
                <p className="text-white/90 leading-relaxed">
                  Whether attracting new customers, streamlining workflows, or driving digital transformation, Codework ensures your automation works for you.
                </p>
              </div>
            </div>

            {/* Feature 6 - Complete Business Benefits */}
            <div className="group relative bg-primary/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-primary/50 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-secondary/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaGem className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4 group-hover:text-cyan-400 transition-colors duration-300">Complete Business Benefits</h3>
                <p className="text-white/90 leading-relaxed">
                  Experience efficiency, agility, accuracy, and scalability with 24/7 support, instant reports, and automatic approvals through intelligent automation.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section - Centered */}
          <div className="bg-gradient-to-br from-primary/50 to-primary/30 backdrop-blur-xl rounded-3xl border border-white/20 p-12 mb-16 shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Proven Results</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-secondary to-cyan-400 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="flex items-center justify-center mb-4">
                  <FaChartLine className="text-4xl text-secondary group-hover:text-cyan-400 transition-colors duration-300 group-hover:scale-110" />
                </div>
                <div className="text-5xl font-bold text-secondary group-hover:text-cyan-400 transition-colors duration-300 mb-2">98%</div>
                <div className="text-lg text-white/80 group-hover:text-white transition-colors duration-300">Efficiency Increase</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center mb-4">
                  <FaClock className="text-4xl text-secondary group-hover:text-cyan-400 transition-colors duration-300 group-hover:scale-110" />
                </div>
                <div className="text-5xl font-bold text-secondary group-hover:text-cyan-400 transition-colors duration-300 mb-2">24/7</div>
                <div className="text-lg text-white/80 group-hover:text-white transition-colors duration-300">Automated Support</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center mb-4">
                  <FaDollarSign className="text-4xl text-secondary group-hover:text-cyan-400 transition-colors duration-300 group-hover:scale-110" />
                </div>
                <div className="text-5xl font-bold text-secondary group-hover:text-cyan-400 transition-colors duration-300 mb-2">50%</div>
                <div className="text-lg text-white/80 group-hover:text-white transition-colors duration-300">Cost Reduction</div>
              </div>
            </div>
          </div>

          {/* CTA Section - Centered with Links */}
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Primary CTA Button - Get Started with AI Automation */}
              <Link href="/contact-ai-solutions" className="group relative">
                <button className="px-12 py-6 bg-gradient-to-r from-secondary via-cyan-400 to-secondary text-primary font-bold text-lg rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-secondary/50 transition-all duration-500 hover:-translate-y-2">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-secondary to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <span className="relative flex items-center">
                    <FaPlay className="mr-4 group-hover:scale-110 transition-transform duration-300" />
                    Get Started with AI Automation
                    <FaRocket className="inline-block ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
              </Link>

              {/* Secondary CTA Button - Learn More About Our Solutions */}
              <Link href="/industries-you-must-know" className="group">
                <button className="px-12 py-6 border-2 border-secondary/50 text-secondary font-bold text-lg rounded-2xl hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-secondary/25">
                  <span className="flex items-center">
                    <FaInfoCircle className="mr-4 group-hover:rotate-12 transition-transform duration-300" />
                    Learn More About Our Solutions
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Final Company Message - Centered */}
          <div className="relative bg-gradient-to-br from-secondary/20 to-cyan-400/20 backdrop-blur-xl rounded-3xl border border-secondary/30 p-12 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-cyan-400/10 rounded-3xl blur"></div>
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-cyan-400 rounded-full flex items-center justify-center shadow-xl">
                  <FaAward className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-4xl font-bold text-secondary">Codework Advantage</h4>
              </div>
              <p className="text-xl text-white/95 leading-relaxed font-medium max-w-4xl mx-auto">
                At Codework we are the change makers by mixing technical skills with practical applications. Our goal is to aid companies in utilizing AI and automation to the maximum extent to maintain their edge in a swiftly changing digital environment.
              </p>
              
              <div className="flex items-center justify-center space-x-8 mt-8">
                <div className="flex items-center space-x-2">
                  <FaStar className="text-secondary" />
                  <span className="text-white/80">Innovation Leader</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaUsers className="text-secondary" />
                  <span className="text-white/80">Expert Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaGem className="text-secondary" />
                  <span className="text-white/80">Premium Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Decoration */}
        <div className="absolute bottom-0 left-0 opacity-20">
          <div className="w-60 h-32 bg-gradient-to-r from-secondary/40 via-cyan-400/20 to-transparent rounded-tr-3xl"></div>
        </div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-10 right-10 opacity-30">
          <div className="w-32 h-32 bg-gradient-to-br from-secondary/30 to-cyan-400/30 rounded-full blur-xl animate-pulse"></div>
        </div>
      </section>

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
    </div>
  );
};

export default AIAutomationPage;

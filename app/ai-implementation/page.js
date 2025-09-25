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
  FaAward,
  FaBrain,
  FaDatabase,
  FaCode,
  FaRobot,
  FaComments,
  FaCloud,
  FaSync,
  FaShieldAlt
} from 'react-icons/fa';

const AIImplementationPage = () => {
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
                AI Implementation Services
              </div>

              <div className="heading-container mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Strategic <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">AI Implementation</span> for Business Success
                </h1>
                
                {/* Decorative underline */}
                <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mb-8"></div>
              </div>

              <div className="paragraph-container mb-8 max-w-3xl">
                <p className="text-lg text-white/90 leading-relaxed pl-4 border-l-4 border-secondary/40">
                  We offer extensive <span className="text-secondary font-medium">AI Implementation services</span> that consist of helping businesses tap into the real potential of Artificial Intelligence. Our solutions are meant to take the whole journey from the strategy to the deployment, creating a smooth integration of AI with your systems that results in the saving of time and resources, innovation, and growth that can be measured in your line of business.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-secondary mb-4">Transform Your Business with AI - Collaborate with Codework for efficient and sustainable AI solutions.</h3>
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

      {/* Enhanced AI Power Section */}
      <section className="relative bg-primary overflow-hidden py-20 px-4 sm:px-6 lg:px-20">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-secondary/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-tr from-cyan-400/15 to-secondary/15 rounded-full blur-3xl animate-bounce"></div>
        </div>

        {/* Floating Dots */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-24 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
          <div className="absolute bottom-64 right-32 w-4 h-4 bg-secondary/80 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Side - Enhanced Content */}
            <div className="text-white space-y-10">
              {/* Enhanced Section Badge */}
              <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm text-secondary px-8 py-4 rounded-full text-sm font-medium group hover:bg-secondary/10 transition-all duration-300">
                <FaBrain className="w-4 h-4 mr-3 animate-pulse group-hover:scale-125 transition-transform duration-300" />
                The Power of AI Implementation
              </div>

              {/* Enhanced Main Heading */}
              <div>
                <h2 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
                  AI is <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">Core to Modern</span> Business Transformation
                </h2>
                {/* Enhanced decorative underline */}
                <div className="flex items-center space-x-2 mb-8">
                  <div className="w-24 h-1 bg-gradient-to-r from-secondary to-cyan-400 rounded-full shadow-lg"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"></div>
                </div>
              </div>

              {/* Enhanced Content Cards */}
              <div className="space-y-8">
                <div className="group relative bg-primary/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-primary/50 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/20">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-secondary to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FaRocket className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-secondary mb-3 group-hover:text-cyan-400 transition-colors duration-300">Modern Business Core</h3>
                      <p className="text-white/90 leading-relaxed">
                        AI is no longer simply a futuristic concept—it is at the core of present business transformation. Proper AI implementation enables organizations to free up staff from trivial tasks, unveil hidden business potential, and provide personalized user experiences.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-primary/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-primary/50 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/20">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-secondary to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FaBolt className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-secondary mb-3 group-hover:text-cyan-400 transition-colors duration-300">Smart Decision Making</h3>
                      <p className="text-white/90 leading-relaxed">
                        Experience smarter decision-making powered by real-time data, optimized workflows that eliminate human errors, and intelligent systems that adapt to your business needs. The expertise of <span className="text-secondary font-medium">Codework</span> is your gateway to AI's transformative power.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Right Side - Image */}
            <div className="relative flex items-center justify-center">
              <div className="relative group">
                {/* Multi-layer Glow Effects */}
                <div className="absolute -inset-6 bg-gradient-to-r from-secondary/40 via-cyan-400/30 to-secondary/40 rounded-3xl blur-3xl group-hover:blur-4xl transition-all duration-700 animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/30 to-secondary/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                
                {/* Enhanced Image container */}
                <div className="relative bg-gradient-to-br from-primary/80 via-primary/60 to-primary/80 backdrop-blur-xl rounded-3xl border-2 border-white/30 p-10 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-4">
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-secondary to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500 flex items-center justify-center shadow-xl">
                    <FaBrain className="w-5 h-5 text-primary" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-secondary rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-700 flex items-center justify-center shadow-2xl">
                    <FaGem className="w-6 h-6 text-primary" />
                  </div>

                  <Image
                    src="/blog/blog21.jpg"
                    alt="AI Implementation Illustration"
                    width={600}
                    height={500}
                    className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Enhanced corner elements */}
                  <div className="absolute top-8 left-8 w-12 h-12 border-t-4 border-l-4 border-secondary/70 rounded-tl-3xl group-hover:border-secondary group-hover:scale-110 transition-all duration-300"></div>
                  <div className="absolute bottom-8 right-8 w-12 h-12 border-b-4 border-r-4 border-secondary/70 rounded-br-3xl group-hover:border-secondary group-hover:scale-110 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced AI Implementation Services Section */}
      <section className="relative bg-primary overflow-hidden py-20 px-4 sm:px-6 lg:px-20">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full"></div>
          <div className="absolute bottom-40 right-20 w-32 h-32 bg-secondary/15 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm text-secondary px-8 py-4 rounded-full text-sm font-medium mb-8 group hover:bg-secondary/10 transition-all duration-300">
              <FaLightbulb className="w-4 h-4 mr-3 animate-pulse group-hover:scale-125 transition-transform duration-300" />
              Comprehensive AI Implementation Services
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
              End-to-End <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">AI Solutions</span>
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-12">
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-cyan-400 rounded-full shadow-lg"></div>
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            
            {/* AI Strategy & Roadmap */}
            <div className="group bg-primary/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-primary/50 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaBrain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-cyan-400 transition-colors duration-300">AI Strategy & Roadmap</h3>
                <p className="text-white/90 leading-relaxed">Just-for-you schedules that show the alignment of AI utilization with examination/investigation goals of a business.</p>
              </div>
            </div>

            {/* Data Preparation & Integration */}
            <div className="group bg-primary/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-primary/50 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaDatabase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-cyan-400 transition-colors duration-300">Data Preparation & Integration</h3>
                <p className="text-white/90 leading-relaxed">Taking steps such as data organizing, data cleaning, and connecting data to make a company ready for the use of AI.</p>
              </div>
            </div>

            {/* Custom AI Model Development */}
            <div className="group bg-primary/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-primary/50 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaCode className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-cyan-400 transition-colors duration-300">Custom AI Model Development</h3>
                <p className="text-white/90 leading-relaxed">Manufacturing of machine learning and deep learning models that are country-specific and even sector-specific.</p>
              </div>
            </div>

            {/* Process Automation with AI */}
            <div className="group bg-primary/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-primary/50 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaRobot className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-cyan-400 transition-colors duration-300">Process Automation with AI</h3>
                <p className="text-white/90 leading-relaxed">Over the simplifying of the organization's operations, the marketing part has been the most widely used by AI people.</p>
              </div>
            </div>

            {/* Natural Language Processing (NLP) */}
            <div className="group bg-primary/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-primary/50 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaComments className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-cyan-400 transition-colors duration-300">Natural Language Processing (NLP)</h3>
                <p className="text-white/90 leading-relaxed">Technology-driven software robots, virtual helper, logic of the sense of the text.</p>
              </div>
            </div>

            {/* AI-Powered Analytics */}
            <div className="group bg-primary/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-primary/50 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaChartLine className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-cyan-400 transition-colors duration-300">AI-Powered Analytics</h3>
                <p className="text-white/90 leading-relaxed">The process of turning data into supported actions with foresight and predictive analytics.</p>
              </div>
            </div>

            {/* Cloud and On-Premises Deployment */}
            <div className="group bg-primary/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-primary/50 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaCloud className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-cyan-400 transition-colors duration-300">Cloud and On-Premises Deployment</h3>
                <p className="text-white/90 leading-relaxed">You oversee the implementation, and it is up to you to decide whether it is done over the internet or through your physical infrastructure.</p>
              </div>
            </div>

            {/* Continuous AI Support and Optimization */}
            <div className="group bg-primary/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-primary/50 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaSync className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-cyan-400 transition-colors duration-300">Continuous AI Support and Optimization</h3>
                <p className="text-white/90 leading-relaxed">The whole team is actively involved in constantly keeping the AI functioning properly, training, and updating.</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-br from-primary/50 to-primary/30 backdrop-blur-xl rounded-3xl border border-white/20 p-12 mb-16 shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Proven AI Implementation Results</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-secondary to-cyan-400 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="flex items-center justify-center mb-4">
                  <FaRocket className="text-4xl text-secondary group-hover:text-cyan-400 transition-colors duration-300 group-hover:scale-110" />
                </div>
                <div className="text-5xl font-bold text-secondary group-hover:text-cyan-400 transition-colors duration-300 mb-2">95%</div>
                <div className="text-lg text-white/80 group-hover:text-white transition-colors duration-300">Success Rate</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center mb-4">
                  <FaClock className="text-4xl text-secondary group-hover:text-cyan-400 transition-colors duration-300 group-hover:scale-110" />
                </div>
                <div className="text-5xl font-bold text-secondary group-hover:text-cyan-400 transition-colors duration-300 mb-2">60%</div>
                <div className="text-lg text-white/80 group-hover:text-white transition-colors duration-300">Faster Deployment</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center mb-4">
                  <FaShieldAlt className="text-4xl text-secondary group-hover:text-cyan-400 transition-colors duration-300 group-hover:scale-110" />
                </div>
                <div className="text-5xl font-bold text-secondary group-hover:text-cyan-400 transition-colors duration-300 mb-2">100%</div>
                <div className="text-lg text-white/80 group-hover:text-white transition-colors duration-300">Security Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Transform Your Business CTA Section with Links */}
      <section className="relative bg-primary overflow-hidden py-20 px-4 sm:px-6 lg:px-20">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-48 h-48 bg-secondary/25 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/15 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Section Badge */}
          <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm text-secondary px-8 py-4 rounded-full text-sm font-medium mb-8 group hover:bg-secondary/10 transition-all duration-300">
            <FaAward className="w-4 h-4 mr-3 animate-pulse group-hover:scale-125 transition-transform duration-300" />
            Transform Your Business with AI
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-8">
            <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">AI Implementation Services</span> by Codework
          </h2>

          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-cyan-400 rounded-full shadow-lg"></div>
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"></div>
          </div>

          <p className="text-xl text-white/90 leading-relaxed mb-16 max-w-3xl mx-auto">
            AI Implementation services by Codework empower businesses to stay ahead of the curve by installing smart systems that are not only scalable but also adaptable. We facilitate the change for you from the very first step of your AI journey to the upgradation of your existing solutions without any hassle or security concerns.
          </p>

          {/* Enhanced CTA Buttons with Links */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            {/* Primary CTA Button */}
            <Link href="/contact-ai-solutions" className="group relative">
              <button className="px-12 py-6 bg-gradient-to-r from-secondary via-cyan-400 to-secondary text-primary font-bold text-lg rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-secondary/50 transition-all duration-500 hover:-translate-y-2">
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-secondary to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  <FaPlay className="mr-4 group-hover:scale-110 transition-transform duration-300" />
                  Start Your AI Implementation
                  <FaRocket className="inline-block ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </Link>

            {/* Secondary CTA Button */}
            <Link href="/contact-ai-solutions" className="group">
              <button className="px-12 py-6 border-2 border-secondary/50 text-secondary font-bold text-lg rounded-2xl hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-secondary/25">
                <span className="flex items-center">
                  <FaInfoCircle className="mr-4 group-hover:rotate-12 transition-transform duration-300" />
                  Schedule a Consultation
                </span>
              </button>
            </Link>
          </div>

          <p className="text-secondary font-semibold text-lg mb-8">
            Collaborate with Codework for efficient and sustainable AI solutions that keep your business safe from obsolescence.
          </p>

          {/* Company Values */}
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
              <FaShieldAlt className="text-secondary" />
              <span className="text-white/80">Secure Implementation</span>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="absolute bottom-0 left-0 opacity-20">
          <div className="w-60 h-32 bg-gradient-to-r from-secondary/40 via-cyan-400/20 to-transparent rounded-tr-3xl"></div>
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

export default AIImplementationPage;

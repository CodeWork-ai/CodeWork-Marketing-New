"use client";
import React from 'react';
import { 
  FaGraduationCap, 
  FaRobot, 
  FaCertificate, 
  FaCalendarAlt, 
  FaClock, 
  FaMapMarkerAlt,
  FaUserGraduate,
  FaCode,
  FaBrain,
  FaUsers,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
  FaFire
} from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
import { HiAcademicCap } from 'react-icons/hi';

const AiWorkshop = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/80 to-primary/60 py-8 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-secondary/60 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-secondary/80 rounded-full blur-xl animate-ping"></div>
      </div>

      <div className="max-w-5xl mx-auto bg-gradient-to-br from-secondary/10 to-primary/5 rounded-3xl shadow-2xl overflow-hidden relative z-10 border-2 border-secondary/30">
        
        {/* Enhanced Header Section */}
        <div className="bg-gradient-to-r from-primary via-primary/95 to-secondary p-10 text-white relative overflow-hidden">
          {/* Background decorative robot */}
          <div className="absolute top-0 right-0 opacity-10 transform rotate-12">
            <FaRobot size={350} className="text-primary" />
          </div>
          
          {/* Floating sparkles */}
          <div className="absolute top-8 left-1/4 opacity-40">
            <IoSparkles size={20} className="text-secondary animate-pulse" />
          </div>
          <div className="absolute bottom-8 right-1/4 opacity-40">
            <IoSparkles size={24} className="text-secondary animate-bounce" />
          </div>
          <div className="absolute top-1/3 left-3/4 opacity-40">
            <IoSparkles size={18} className="text-secondary animate-ping" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-8">
              <div className="bg-secondary/20 p-4 rounded-3xl backdrop-blur-sm border border-secondary/40 shadow-xl">
                <HiAcademicCap size={56} className="text-secondary drop-shadow-lg" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-black mb-3 tracking-tight text-secondary">
                  AI WORKSHOP
                </h1>
                <div className="flex items-center gap-3">
                  <IoSparkles className="text-Exciting text-secondary Updates Coming Soon! animate-pulse" size={24} />
                  <span className="text-2xl italic font-light text-white">for Emerging Graduates</span>
                  <IoSparkles className="text-secondary animate-pulse" size={24} />
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl">
              <p className="text-xl leading-relaxed opacity-90 font-medium text-white">
                This workshop offers emerging graduates valuable industry insights into <span className="text-secondary font-bold">Artificial Intelligence</span>, 
                helping them understand how AI shapes corporate roles and career paths. Gain a clear perspective 
                on the expectations, skills, and opportunities in today's <span className="text-secondary font-bold">AI-driven workplace</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="p-10">
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Free Registration */}
            <div className="group bg-gradient-to-br from-secondary/20 to-secondary/10 p-8 rounded-3xl border-2 border-secondary/40 hover:border-secondary/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="flex items-center gap-6 mb-4">
                <div className="bg-gradient-to-br from-secondary to-secondary/80 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaCheckCircle size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-secondary mb-1">NO REGISTRATION FEE</h3>
                  <p className="text-3xl font-black text-white tracking-tight">100% FREE</p>
                </div>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-secondary to-secondary/60 rounded-full"></div>
            </div>

            {/* Certificate */}
            <div className="group border-cyan-700 bg-gradient-to-br from-primary/20 to-primary/10 p-8 rounded-3xl border-2 border-primary/40 hover:border-primary/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
              <div className="flex items-center gap-6 mb-4">
                <div className="bg-gradient-to-br from-primary to-primary/80 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 ">
                  <FaCertificate size={32} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-secondary mb-1">PARTICIPATION CERTIFICATE</h3>
                  <p className="text-xl font-bold text-white">FOR ALL ATTENDEES</p>
                </div>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
            </div>
          </div>

          {/* Enhanced Event Details */}
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-3xl text-white mb-10 shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/30 to-transparent"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-center mb-8 text-secondary drop-shadow-lg flex items-center justify-center gap-3">
                <FaCalendarAlt className="text-secondary" />
                <h2 className="text-2xl text-white font-black">EVENT DETAILS</h2>
                <FaClock className="text-secondary" />
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group flex items-center gap-6 bg-primary/20 p-6 rounded-2xl backdrop-blur-sm border border-secondary/30 hover:bg-primary/30 transition-all duration-300">
                  <div className="bg-secondary/30 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <FaCalendarAlt size={28} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-1 text-secondary">MONDAY</h4>
                    <p className="text-2xl font-black text-white">15.09.2025</p>
                  </div>
                </div>

                <div className="group flex items-center gap-6 bg-primary/20 p-6 rounded-2xl backdrop-blur-sm border border-secondary/30 hover:bg-primary/30 transition-all duration-300">
                  <div className="bg-secondary/30 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <FaClock size={28} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-1 text-secondary">TIME</h4>
                    <p className="text-2xl font-black text-white">10:00 AM - 12:00 PM</p>
                  </div>
                </div>

                <div className="group flex items-center gap-6 bg-primary/20 p-6 rounded-2xl backdrop-blur-sm border border-secondary/30 hover:bg-primary/30 transition-all duration-300">
                  <div className="bg-secondary/30 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt size={28} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-1 text-secondary">VENUE</h4>
                    <p className="text-lg font-bold text-white">CODEWORK- CHENNAI</p>
                    <p className="text-sm font-medium text-white/80">CAMPUS- PADUR, OMR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Registration Section */}
          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-10 rounded-3xl border-2 border-secondary/30 shadow-xl">
            <h3 className="text-3xl font-black text-secondary text-center mb-8 flex items-center justify-center gap-3">
              <FaStar className="text-secondary animate-bounce" />
             <h1 className='text-white'>REGISTRATIONS OPEN FOR</h1> 
              <FaStar className="text-secondary animate-bounce" />
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="space-y-4">
                <div className="group flex items-center gap-4 bg-secondary/20 p-6 rounded-2xl shadow-lg border-l-4 border-secondary hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-primary/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <FaUserGraduate className="text-secondary" size={24} />
                  </div>
                  <span className="font-bold text-white">PRE-FINAL YEAR & FINAL YEAR STUDENTS</span>
                </div>
                
                <div className="group flex items-center gap-4 bg-primary/20 p-6 rounded-2xl shadow-lg border-l-4 border-secondary hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-secondary/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <FaCode className="text-secondary" size={24} />
                  </div>
                  <span className="font-bold text-white">PURSUING <span className="text-secondary">BCA, MCA, BE, B.TECH, M.E, M.TECH</span></span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="group flex items-center gap-4 bg-secondary/20 p-6 rounded-2xl shadow-lg border-l-4 border-secondary hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-primary/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <FaBrain className="text-secondary" size={24} />
                  </div>
                  <span className="font-bold text-white"><span className="text-secondary">AI ENTHUSIASTS</span>, RECENT GRADUATES</span>
                </div>
                
                <div className="group flex items-center gap-4 bg-primary/20 p-6 rounded-2xl shadow-lg border-l-4 border-secondary hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-secondary/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <FaUsers className="text-secondary" size={24} />
                  </div>
                  <span className="font-bold text-white"><span className="text-secondary">IT JOBSEEKERS</span> & FRESHERS</span>
                </div>
              </div>
            </div>

            {/* Registration Info */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-2xl shadow-xl border-2 border-secondary/30">
                <div className="bg-secondary/30 p-3 rounded-xl">
                  <FaFire size={32} className="text-secondary animate-pulse" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-black text-secondary mb-1">LIMITED SEATS AVAILABLE!</p>
                  <p className="text-lg text-white font-medium">Register now to secure your spot</p>
                </div>
              </div>
            </div>

            {/* Enhanced Call to Action - Smaller Size */}
            <div className="text-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSe9WMf0oble-PcEn0Tp34pY6Kd9z2hyiapzZjykJenm79Bkug/viewform?usp=send_form"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="group relative bg-gradient-to-r from-secondary via-secondary/90 to-primary hover:from-primary hover:to-secondary text-primary font-black py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-110 transition-all duration-500 border-2 border-primary/30 hover:border-secondary/50 overflow-hidden">
                  {/* Button background animation */}
                  <span className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  
                  {/* Ripple effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-secondary/50 to-sedondary/70 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-30"></span>
                  
                  {/* Button content */}
                  <span className="relative flex items-center gap-3">
                    <h3 className='text-white'>Register Now - FREE!</h3>
                    <FaArrowRight className="group-hover:translate-x-2 text-white  transition-transform duration-300" />
                  </span>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-secondary/50 to-primary/50 rounded-full opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500"></div>
                </button>
              </a>
              
              {/* Additional incentive text */}
              <p className="mt-6 text-white font-bold text-lg flex items-center justify-center gap-2">
                <FaFire className="text-secondary animate-bounce" />
                <span className="text-white">Limited Seats</span> | 
                <FaCertificate className="text-secondary" />
                <span className="text-white">Certificate Guaranteed</span> | 
                <FaCheckCircle className="text-secondary animate-pulse" />
                <span className="text-white">100% Free</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiWorkshop;

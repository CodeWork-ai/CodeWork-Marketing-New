import React from 'react';
import { FaArrowRight, FaRocket, FaBriefcase } from 'react-icons/fa';

const CareerPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
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

      <div className="container mx-auto text-center px-4 md:px-6 lg:px-8 relative z-10">
        {/* Call to Action Section */}
        <section className="max-w-5xl mx-auto">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-8 md:mb-10">
            <span className="text-secondary text-sm font-medium">— Take Action —</span>
          </div>

          {/* Enhanced Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
            Ready to Take the <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">Next Step?</span>
          </h2>

          {/* Decorative Line */}
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto mb-8 md:mb-10"></div>

          {/* Enhanced Description */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="relative">
              <div className="absolute -left-3 md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full hidden lg:block"></div>
              <p className="text-lg sm:text-lg md:text-xl lg:text-xl text-white/90 leading-relaxed lg:pl-8 font-light">
                Explore our open positions and find the role that's right for you.
                <br />
                Let's <span className="text-secondary font-medium">build the future</span> together.
              </p>
            </div>
          </div>

          {/* Enhanced Button Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
            {/* Apply for Jobs Button */}
            <a
              href="/join-our-team"
              className="group relative flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-xl bg-gradient-to-r from-secondary to-secondary/80 text-primary font-bold text-lg md:text-xl transition-all duration-300 hover:from-secondary/90 hover:to-secondary hover:shadow-2xl hover:shadow-secondary/25 transform hover:scale-105 overflow-hidden min-w-[240px] justify-center"
            >
              <div className="w-7 h-7 bg-primary/20 rounded-full flex items-center justify-center mr-1">
                <FaBriefcase className="w-5 h-5" />
              </div>
              <span className="relative z-10">Apply for Jobs</span>
              <FaArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-300" />
              
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </a>

            {/* Apply for Internships Button */}
            <a
              href="/internship"
              className="group relative flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-xl bg-transparent border-2 border-secondary text-secondary font-bold text-lg md:text-xl transition-all duration-300 hover:bg-secondary hover:text-primary backdrop-blur-sm hover:shadow-2xl hover:shadow-secondary/25 transform hover:scale-105 min-w-[240px] justify-center"
            >
              <div className="w-7 h-7 bg-secondary/20 rounded-full flex items-center justify-center mr-1 group-hover:bg-primary/20 transition-colors duration-300">
                <FaRocket className="w-5 h-5" />
              </div>
              <span>Apply for Internships</span>
              <FaArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-300" />
            </a>
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 md:mt-32 mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaBriefcase className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                Full-time Positions
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Join our permanent team and grow your career with us
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaRocket className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                Internship Program
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Start your journey with hands-on experience and mentorship
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 group md:col-span-1 col-span-1">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <div className="w-2 h-2 bg-secondary rounded-full ml-1"></div>
                <div className="w-2 h-2 bg-secondary rounded-full ml-1"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                Remote Work
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Work from anywhere with flexible arrangements
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Left Bottom Decoration */}
      <div className="absolute bottom-0 left-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-r from-secondary/30 to-transparent rounded-tr-full"></div>
      </div>
    </div>
  );
};

export default CareerPage;

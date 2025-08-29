"use client";
import React from "react";

const WhyJoinCodework = () => {
  const reasons = [
    {
      title: "Passionate Team",
      description: "Work with a team of passionate and talented professionals.",
      image: "/Whychooseus/team1.jpg"
    },
    {
      title: "Innovation Culture", 
      description: "Enjoy a culture that fosters innovation and growth.",
      image: "/Whychooseus/team2.jpg"
    },
    {
      title: "Continuous Learning",
      description: "Access opportunities for continuous learning and development.",
      image: "/Whychooseus/team3.jpg"
    },
    {
      title: "Mission Driven",
      description: "Be part of a mission-driven organization shaping tomorrow.",
      image: "/Whychooseus/team4.jpg"
    }
  ];

  return (
    <section className="relative w-full bg-primary py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 md:w-40 md:h-40 bg-secondary/20 rounded-full"></div>
        <div className="absolute top-60 right-32 w-24 h-24 md:w-32 md:h-32 bg-secondary/15 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-36 h-36 md:w-48 md:h-48 bg-secondary/25 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 md:w-24 md:h-24 bg-secondary/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-6 md:mb-8">
            <span className="text-secondary text-sm font-medium">— Join Our Team —</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
            <span className="text-white">Why Choose </span>
            <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
              Us?
            </span>
          </h1>
          
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto mb-8"></div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto">
            Discover what makes <span className="text-secondary font-medium">Codework</span> the perfect place for your career growth
          </p>
        </div>

        {/* Expandable Image Gallery */}
        <div className="flex items-center gap-2 h-[300px] sm:h-[350px] md:h-[400px] w-full max-w-5xl mt-10 mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-full duration-500 hover:w-full cursor-pointer"
            >
              {/* Background Image */}
              <img 
                className="h-full w-full object-cover object-center" 
                src={reason.image}
                alt={reason.title}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                {/* Title - Always visible */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 transform transition-all duration-500 group-hover:translate-y-0">
                  {reason.title}
                </h3>
                
                {/* Description - Shows on hover */}
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  {reason.description}
                </p>
                
                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-secondary/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statistics */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">4</div>
              <div className="text-white/70 text-xs md:text-sm">Key Benefits</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-white/70 text-xs md:text-sm">Team Members</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">Remote</div>
              <div className="text-white/70 text-xs md:text-sm">Work Options</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">Growth</div>
              <div className="text-white/70 text-xs md:text-sm">Opportunities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Google Fonts Import */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default WhyJoinCodework;

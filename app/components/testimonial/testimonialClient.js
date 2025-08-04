import React from "react";
import Image from "next/image";

const TestimonialClient = () => {
  return (
    <div className="bg-primary relative overflow-hidden px-6 py-20 space-y-32">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-secondary/15 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/10 rounded-full"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-3 h-3 bg-secondary rounded-full"></div>
        <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full"></div>
        <div className="absolute bottom-56 left-1/4 w-4 h-4 bg-secondary/80 rounded-full"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/40 rounded-full"></div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-20 relative z-10">
        <div className="inline-flex items-center px-6 py-3 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-8">
          <span className="text-secondary text-sm font-medium">— Client Success Stories —</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-white">What Our </span>
          <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
            Clients Say
          </span>
        </h2>
        
        <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto"></div>
      </div>

      {/* First Testimonial (Left Image) */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto relative z-10">
        {/* Left Image Container */}
        <div className="relative flex items-center justify-center group">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-secondary/50 rounded-full blur-3xl scale-110 opacity-60"></div>
          
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-2xl shadow-secondary/25">
            <img
              src="/testimonial/CLient1.svg"
              alt="WebSignX"
              className="h-[300px] w-auto"
            />
            
            {/* Corner Decorations */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-lg"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-lg"></div>
          </div>
        </div>

        {/* Right Testimonial Box */}
        <div className="bg-primary/30 backdrop-blur-xl border border-white/10 text-white p-8 rounded-3xl shadow-2xl max-w-2xl hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 relative">
          {/* Quote Icon */}
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>

          {/* Star Rating */}
          <div className="flex space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-lg leading-relaxed text-white/90 mb-6 italic">
            "The Codework team demonstrated exceptional expertise by collaborating
            in developing our ticket booking application project. Their attention
            to detail, seamless integration of features, and commitment to meeting
            deadlines made this project a success. We are thoroughly impressed with
            their technical proficiency and look forward to future collaborations."
          </p>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center text-primary font-bold text-lg">
              J
            </div>
            <div>
              <p className="font-bold text-secondary text-lg">Johnson R</p>
              <p className="text-white/70 text-sm">
                Delivery Manager – WebSignX Technologies
              </p>
            </div>
          </div>

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        </div>
      </div>

      {/* Second Testimonial (Right Image) */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto relative z-10">
        {/* Left Testimonial Box */}
        <div className="bg-primary/30 backdrop-blur-xl border border-white/10 text-white p-8 rounded-3xl shadow-2xl max-w-2xl hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 relative">
          {/* Quote Icon */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>

          {/* Star Rating */}
          <div className="flex space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-lg leading-relaxed text-white/90 mb-6 italic">
            "It's rare to find partners who go above and beyond their scope of work.
            Your proactive thinking and self-initiative in providing insightful ideas
            have truly elevated our product to new heights. The innovative
            contributions you've made, coupled with your commitment to understanding
            our vision, have played a pivotal role in shaping the product into what
            it is today."
          </p>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center text-primary font-bold text-lg">
              B
            </div>
            <div>
              <p className="font-bold text-secondary text-lg">Bikram Bakshi</p>
              <p className="text-white/70 text-sm">Entrepreneur & Tech Innovator</p>
            </div>
          </div>

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        </div>

        {/* Right Image Container */}
        <div className="relative flex items-center justify-center group">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-secondary/50 rounded-full blur-3xl scale-110 opacity-60"></div>
          
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-2xl shadow-secondary/25">
            <img
              src="/testimonial/CLient2.svg"
              alt="Client Image"
              className="h-[300px] w-auto"
            />
            
            {/* Corner Decorations */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-lg"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-lg"></div>
          </div>
        </div>
      </div>

      {/* Third Testimonial (Left Image) */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto relative z-10">
        {/* Left Image Container */}
        <div className="relative flex items-center justify-center group">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-secondary/50 rounded-full blur-3xl scale-110 opacity-60"></div>
          
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-2xl shadow-secondary/25">
            <img
              src="/testimonial/CLient3.svg"
              alt="WebSignX"
              className="h-[300px] w-auto"
            />
            
            {/* Corner Decorations */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-lg"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-lg"></div>
          </div>
        </div>

        {/* Right Testimonial Box */}
        <div className="bg-primary/30 backdrop-blur-xl border border-white/10 text-white p-8 rounded-3xl shadow-2xl max-w-2xl hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 relative">
          {/* Quote Icon */}
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>

          {/* Star Rating */}
          <div className="flex space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-lg leading-relaxed text-white/90 mb-6 italic">
            "We are extremely pleased with the Codework team's exceptional work in developing our website. Their technical expertise, attention to detail, and seamless execution exceeded our expectations. From design to functionality, they ensured that every aspect was well-integrated and user-friendly. Their commitment to meeting deadlines and delivering high-quality results made this project a great success. We look forward to collaborating with them again on future projects."
          </p>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center text-primary font-bold text-lg">
              J
            </div>
            <div>
              <p className="font-bold text-secondary text-lg">Johnson R</p>
              <p className="text-white/70 text-sm">
                Entrepreneur & Tech Innovator
              </p>
            </div>
          </div>

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-64 h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>
    </div>
  );
};

export default TestimonialClient;

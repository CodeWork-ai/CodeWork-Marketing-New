"use client";
import React from "react";

const TestimonialLanding = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-primary overflow-hidden">
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

      {/* Main Content Container */}
      <div className="relative z-10 w-[80%] mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content Section */}
        <div className="w-full md:w-2/3 text-left">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-secondary text-sm font-medium">— Client Voices —</span>
          </div>

          {/* Enhanced Heading */}
          <div className="heading-container mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-white">Client </span>
              <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                Testimonials
              </span>
            </h1>
            
            {/* Decorative underline */}
            <div className="w-28 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-4"></div>
          </div>

          {/* Enhanced Paragraph */}
          <div className="paragraph-container mb-12">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full"></div>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-relaxed text-white/90 pl-6 font-light">
                Hear from our clients! Discover how our services have made a <span className="text-secondary font-medium">lasting impact</span>. 
                Their words inspire us to keep delivering <span className="text-secondary font-medium">exceptional results</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Right Visual Section - New Design */}
        <div className="w-full md:w-1/3 flex justify-center items-center mt-10 md:mt-0 md:pl-8 lg:pl-16">
          <div className="relative">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-secondary/50 rounded-full blur-3xl scale-110"></div>
            
            {/* Main Container - Circular Review Display */}
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 bg-primary/20 backdrop-blur-xl border border-white/20 rounded-full overflow-hidden shadow-2xl shadow-secondary/25">
              
              {/* Center Circle with Rating */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex flex-col items-center justify-center shadow-xl">
                  <div className="text-primary text-3xl font-bold">5.0</div>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-primary text-xs font-medium mt-1">Rating</div>
                </div>
              </div>

              {/* Orbiting Review Elements */}
              <div className="absolute inset-0">
                {/* Review Element 1 */}
                <div className="absolute w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-secondary/30 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2" 
                     style={{ top: '20%', left: '80%' }}>
                  <div className="w-8 h-8 bg-secondary/60 rounded-full flex items-center justify-center text-primary text-xs font-bold">
                    A
                  </div>
                </div>

                {/* Review Element 2 */}
                <div className="absolute w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-secondary/30 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2" 
                     style={{ top: '80%', left: '20%' }}>
                  <div className="w-8 h-8 bg-secondary/60 rounded-full flex items-center justify-center text-primary text-xs font-bold">
                    B
                  </div>
                </div>

                {/* Review Element 3 */}
                <div className="absolute w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-secondary/30 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2" 
                     style={{ top: '50%', left: '10%' }}>
                  <div className="w-8 h-8 bg-secondary/60 rounded-full flex items-center justify-center text-primary text-xs font-bold">
                    C
                  </div>
                </div>

                {/* Review Element 4 */}
                <div className="absolute w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-secondary/30 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2" 
                     style={{ top: '30%', left: '15%' }}>
                  <div className="w-8 h-8 bg-secondary/60 rounded-full flex items-center justify-center text-primary text-xs font-bold">
                    D
                  </div>
                </div>

                {/* Review Element 5 */}
                <div className="absolute w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-secondary/30 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2" 
                     style={{ top: '70%', left: '85%' }}>
                  <div className="w-8 h-8 bg-secondary/60 rounded-full flex items-center justify-center text-primary text-xs font-bold">
                    E
                  </div>
                </div>

                {/* Review Element 6 */}
                <div className="absolute w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-secondary/30 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2" 
                     style={{ top: '15%', left: '50%' }}>
                  <div className="w-8 h-8 bg-secondary/60 rounded-full flex items-center justify-center text-primary text-xs font-bold">
                    F
                  </div>
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 300 300">
                  <circle cx="150" cy="150" r="100" fill="none" stroke="rgba(29, 223, 234, 0.2)" strokeWidth="1" strokeDasharray="5,5" />
                  <circle cx="150" cy="150" r="120" fill="none" stroke="rgba(29, 223, 234, 0.1)" strokeWidth="1" strokeDasharray="3,7" />
                </svg>
              </div>

              {/* Corner Decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-lg"></div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -right-3 bg-secondary/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                <span className="text-primary font-bold text-xs">Trusted</span>
              </div>
            </div>

            {/* Floating Review Snippets */}
            <div className="absolute -top-4 -left-8 bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-secondary/20 max-w-32">
              <div className="text-xs text-white/80">"Amazing service!"</div>
              <div className="flex space-x-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-secondary rounded-full"></div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-4 -right-8 bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-secondary/20 max-w-36">
              <div className="text-xs text-white/80">"Exceeded expectations"</div>
              <div className="flex space-x-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-secondary rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Statistics */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-secondary">100+</div>
          <div className="text-white/70 text-sm">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-secondary">98%</div>
          <div className="text-white/70 text-sm">Satisfaction</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-secondary">5.0</div>
          <div className="text-white/70 text-sm">Average Rating</div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-64 h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>
    </section>
  );
};

export default TestimonialLanding;

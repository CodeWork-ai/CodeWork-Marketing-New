import React from "react";

const WhyChooseUs = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
        * {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
      
      <section className="bg-primary relative pt-28 py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full animate-blob"></div>
          <div className="absolute top-60 right-32 w-32 h-32 bg-secondary/15 rounded-full animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-16 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
          <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-56 left-1/4 w-4 h-4 bg-secondary/80 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-3000"></div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* Enhanced Header Section */}
          <div className="text-center mb-16">
            {/* Section Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-6">
              <span className="text-secondary text-sm font-medium">— Our Advantages —</span>
            </div>

            {/* Enhanced Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-white">Why </span>
              <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                Choose
              </span>
              <span className="text-white"> Us?</span>
            </h2>

            {/* Subtitle */}
            <p className="text-white/90 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover the advantages that make <span className="text-secondary font-medium">Codework</span> your trusted partner for AI-powered solutions
            </p>
          </div>
          
          {/* Enhanced Expandable Image Cards Container */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4 max-w-7xl mx-auto">
            {/* Card 1 - Punctual Deliveries */}
            <div className="relative group flex-grow transition-all w-full lg:w-80 h-[400px] duration-500 hover:w-full cursor-pointer">
              <img 
                className="h-full w-full object-cover object-center rounded-2xl"
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&h=400&auto=format&fit=crop"
                alt="Punctual Deliveries" 
              />
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              
              {/* Glowing Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-secondary/50 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="transform transition-all duration-500 group-hover:translate-y-[-20px]">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors duration-300">
                    <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-secondary transition-colors duration-300">
                    Punctual Deliveries
                  </h3>
                  <div className="overflow-hidden">
                    <p className="text-sm text-white/80 leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      Codework completes projects on time, ensuring smooth operations and consistent progress for your business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Transparent Pricing */}
            <div className="relative group flex-grow transition-all w-full lg:w-80 h-[400px] duration-500 hover:w-full cursor-pointer">
              <img 
                className="h-full w-full object-cover object-center rounded-2xl"
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&h=400&auto=format&fit=crop"
                alt="Transparent Pricing" 
              />
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              
              {/* Glowing Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-secondary/50 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="transform transition-all duration-500 group-hover:translate-y-[-20px]">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors duration-300">
                    <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-secondary transition-colors duration-300">
                    Transparent Pricing
                  </h3>
                  <div className="overflow-hidden">
                    <p className="text-sm text-white/80 leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      With no hidden charges, every project is handled clearly and honestly with full cost transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Support You Can Count On */}
            <div className="relative group flex-grow transition-all w-full lg:w-80 h-[400px] duration-500 hover:w-full cursor-pointer">
              <img 
                className="h-full w-full object-cover object-center rounded-2xl"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&h=400&auto=format&fit=crop"
                alt="Support You Can Count On" 
              />
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              
              {/* Glowing Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-secondary/50 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="transform transition-all duration-500 group-hover:translate-y-[-20px]">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors duration-300">
                    <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-secondary transition-colors duration-300">
                    Reliable Support
                  </h3>
                  <div className="overflow-hidden">
                    <p className="text-sm text-white/80 leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      Our dedicated team provides exceptional assistance and support every step of your project journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Benefits Section */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                <div className="text-white/80">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;

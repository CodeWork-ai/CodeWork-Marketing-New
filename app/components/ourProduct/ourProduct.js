import React from "react";

const OurProduct = () => {
  return (
    <div className="relative min-h-screen bg-primary overflow-hidden py-16 md:py-20 lg:py-24">
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

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-6 md:mb-8">
            <span className="text-secondary text-sm font-medium">— Our Products —</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight px-4">
            Our <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">Products</span>
          </h1>
          
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto mb-6 md:mb-8"></div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light px-4">
            Innovative <span className="text-secondary font-medium">AI-powered solutions</span> designed to transform industries and improve lives.
          </p>
        </div>

        {/* First Row - Product Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16 mb-12 md:mb-16 lg:mb-20">
          
          {/* Card 1 - Hyperflex AI */}
          <div className="relative group cursor-pointer overflow-hidden w-full max-w-sm bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 shadow-2xl shadow-secondary/25">
            
            {/* Product Label */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-28 h-14 backdrop-blur-sm rounded-2xl p-1 shadow-lg border border-white/20">
                <img
                  src="/Hyperflx.svg"
                  alt="Hyperflex AI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-t-3xl">
              <img
                src="/CaseStudies/hyperfleex.jpg"
                alt="Hyperflex AI"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary via-primary/95 to-transparent">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                  Hyperflex AI
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  AI-Powered Search Engine for Education
                </p>
                <a
                  href="/hyperflex-ai"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300 text-sm font-medium opacity-0 group-hover:opacity-100 delay-200"
                >
                  Explore Product
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
          </div>

          {/* Card 2 - Radi Insight 3D */}
          <div className="relative group cursor-pointer overflow-hidden w-full max-w-sm bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 shadow-2xl shadow-secondary/25">
            
            {/* Product Label */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-28 h-14 backdrop-blur-sm p-1 rounded-2xl shadow-lg border border-white/20">
                <img
                  src="/RadiInsight.svg"
                  alt="Radi Insight Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-t-3xl">
              <img
                src="/CaseStudies/scans.jpg"
                alt="Radi Insight 3D"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary via-primary/95 to-transparent">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                  Radi Insight 3D
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  AI & 3D Modeling for Colon Cancer Detection
                </p>
                <a
                  href="/radi-insight-3D"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300 text-sm font-medium opacity-0 group-hover:opacity-100 delay-200"
                >
                  Explore Product
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
          </div>

          {/* Card 3 - Radi Insight Scan */}
          <div className="relative group cursor-pointer overflow-hidden w-full max-w-sm bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 shadow-2xl shadow-secondary/25">
            
            {/* Product Label */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-28 h-14 backdrop-blur-sm p-1 rounded-2xl shadow-lg border border-white/20">
                <img
                  src="/RadiInsightscan.svg"
                  alt="Radi Insight Scan"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-t-3xl">
              <img
                src="/CaseStudies/colonScan.jpg"
                alt="Radi Insight Scan"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary via-primary/95 to-transparent">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                  Radi Insight Scan
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Making Medical Reports More Accessible.
                </p>
                <a
                  href="/radi-insight-scan"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300 text-sm font-medium opacity-0 group-hover:opacity-100 delay-200"
                >
                  Explore Product
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
          </div>
          
        </div>

        {/* Second Row - Product Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16 mb-12 md:mb-16 lg:mb-20">
          
          {/* Card 1 - WorkLogix */}
          <div className="relative group cursor-pointer overflow-hidden w-full max-w-sm bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 shadow-2xl shadow-secondary/25">
            
            {/* Product Label */}
           <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
  <div className="w-28 h-14 backdrop-blur-sm rounded-2xl p-1 shadow-lg border border-white/20 flex items-center justify-center">
    <p className="font-bold text-base bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent tracking-wide">
      Work Logix
    </p>
  </div>
</div>


            {/* Main Image */}
            <div className="relative overflow-hidden rounded-t-3xl">
              <img
                src="/CaseStudies/worklogix.jpg"
                alt="WorkLogix"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary via-primary/95 to-transparent">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                  WorkLogix
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Smarter Task and Team Management
                </p>
                <a
                  href="/worklogix-ai"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300 text-sm font-medium opacity-0 group-hover:opacity-100 delay-200"
                >
                  Explore Product
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
          </div>

          {/* Card 2 - HireLens */}
          <div className="relative group cursor-pointer overflow-hidden w-full max-w-sm bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 shadow-2xl shadow-secondary/25">
            
            {/* Product Label */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
  <div className="w-28 h-14 backdrop-blur-sm rounded-2xl p-1 shadow-lg border border-white/20 flex items-center justify-center">
    <p className="font-bold text-base bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent tracking-wide">
      HireLens
    </p>
  </div>
</div>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-t-3xl">
              <img
                src="/CaseStudies/Hirelanss.jpg"
                alt="HireLens"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary via-primary/95 to-transparent">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                  HireLens
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Secure Online Interview and Exam Proctoring 
                </p>
                <a
                  href="/hirelense-ai"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300 text-sm font-medium opacity-0 group-hover:opacity-100 delay-200"
                >
                  Explore Product
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
          </div>

          {/* Card 3 - Hirelysze */}
          <div className="relative group cursor-pointer overflow-hidden w-full max-w-sm bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 shadow-2xl shadow-secondary/25">
            
            {/* Product Label */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
  <div className="w-28 h-14 backdrop-blur-sm rounded-2xl p-1 shadow-lg border border-white/20 flex items-center justify-center">
    <p className="font-bold text-base bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent tracking-wide">
      Hirelysze
    </p>
  </div>
</div>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-t-3xl">
              <img
                src="/CaseStudies/Hires.jpg"
                alt="Hirelysze"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary via-primary/95 to-transparent">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                  Hirelysze
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Intelligent AI Interview Platform
                </p>
                <a
                  href="/hirelyszs-ai"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300 text-sm font-medium opacity-0 group-hover:opacity-100 delay-200"
                >
                  Explore Product
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
          </div>
          
        </div>

        {/* Third Row - Single Product Card (Centered on Left) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-start gap-8 lg:gap-12 xl:gap-16">
          
          {/* Card 1 - Additional Product */}
          <div className="relative group cursor-pointer overflow-hidden w-full max-w-sm bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 shadow-2xl shadow-secondary/25">
            
            {/* Product Label */}
             <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
  <div className="w-28 h-14 backdrop-blur-sm rounded-2xl p-1 shadow-lg border border-white/20 flex items-center justify-center">
    <p className="font-bold text-base bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent tracking-wide">
      Edubot
    </p>
  </div>
</div>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-t-3xl">
              <img
                src="/CaseStudies/Edus.jpg"
                alt="Product Image"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary via-primary/95 to-transparent">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                  Edubot
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                   AI Powered Smart Learning Assistant
                </p>
                <a
                  href="/edubot-ai"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300 text-sm font-medium opacity-0 group-hover:opacity-100 delay-200"
                >
                  Explore Product
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
          </div>
          
        </div>
      </div>

      {/* Enhanced Top Decoration */}
      <div className="absolute top-0 left-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-r from-secondary/30 to-transparent rounded-br-full"></div>   
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>
    </div>
  );
};

export default OurProduct;

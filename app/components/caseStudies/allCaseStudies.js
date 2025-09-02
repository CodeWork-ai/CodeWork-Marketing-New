"use client";
import React, { useState } from 'react';

const caseStudies = [
  {
    id: 1,
    title: 'AI-Powered PDF Translator',
    description: 'Revolutionizing Multilingual Document Processing.',
    imageUrl: '/CaseStudies/AI-Poweredpdf.jpg',
    link: '/ai-powered-pdf-translator',
  },
  {
    id: 2,
    title: 'Web data extraction',
    description: 'Get the Data Your Business Needs.',
    imageUrl: '/CaseStudies/webscrapingh.jpg',
    link: '/web-scraping-services',
  },
  {
    id: 3,
    title: 'Text Analytics',
    description: 'Transforming Caregiver Communication with Text Analytics.',
    imageUrl: '/CaseStudies/textanla.jpg',
    link: '/text-analytics',
  },
  {
    id: 4,
    title: 'Signature Recognition System',
    description: 'Advanced Handwritten Signature Recognition System.',
    imageUrl: '/CaseStudies/signaturess.jpg',
    link: '/signature-recognition-system',
  },
];

const AllCaseStudies = () => {
  const [showAll, setShowAll] = useState(false);

  // decide how many to render
  const visibleStudies = showAll ? caseStudies : caseStudies.slice(0, 4);

  return (
    <div className="bg-primary mx-auto px-4 sm:px-6 md:px-24 py-12 sm:py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full animate-blob"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-secondary/15 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/10 rounded-full animate-blob animation-delay-1000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-56 left-1/4 w-4 h-4 bg-secondary/80 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-3000"></div>
      </div>

      {/* Enhanced Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-6 animate-fade-in">
          <span className="text-secondary text-sm font-medium">— Case Studies —</span>
        </div>
        
        <h2 className="text-4xl font-bold mb-6 animate-slide-up">
          <span className="text-white">Our Success </span>
          <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
            Stories
          </span>
        </h2>
        
        <div className="relative animate-slide-up animation-delay-200">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-16 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></div>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Discover how we've transformed challenges into <span className="text-secondary font-medium">innovative solutions</span>
          </p>
        </div>
      </div>

      {/* Enhanced Case Studies Grid - Simplified */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 relative z-10">
        {visibleStudies.map(({ id, title, description, imageUrl, link }, index) => (
          <div
            key={id}
            className="group bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/25 animate-card-float"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Simplified Image Container - NO ICONS OR BADGES */}
            <div className="relative overflow-hidden">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>

            {/* Enhanced Content */}
            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl text-white font-bold mb-3 group-hover:text-secondary transition-colors duration-300">
                {title}
              </h3>
              
              <p className="text-white/80 text-sm sm:text-base mb-6 leading-relaxed">
                {description}
              </p>
              
              {/* Smaller, Different Style Read More Link */}
              <a
                href={link}
                className="inline-flex items-center text-secondary hover:text-white text-sm font-semibold border border-secondary/50 hover:border-secondary hover:bg-secondary/10 px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm group/btn"
              >
                <span>Read More</span>
                <svg 
                  className="ml-2 w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Card bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

      {/* Enhanced Toggle Button */}
      {/* <div className="mt-12 text-center relative z-10 animate-slide-up animation-delay-800">
        <button
          onClick={() => setShowAll(!showAll)}
          className="relative bg-primary/30 backdrop-blur-xl border-2 border-secondary/30 text-secondary font-bold px-8 py-4 rounded-full hover:bg-primary/40 hover:border-secondary hover:shadow-lg hover:shadow-secondary/25 transform hover:scale-105 transition-all duration-300 overflow-hidden group"
        >
          <span className="relative z-10 flex items-center">
            {showAll ? (
              <>
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                Show Less
              </>
            ) : (
              <>
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                View All Case Studies
              </>
            )}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        </button>
      </div> */}

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 relative z-10 animate-slide-up animation-delay-1000">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 group text-center">
          <div className="text-3xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
          <div className="text-white/80 text-sm">Successful Projects</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 group text-center">
          <div className="text-3xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
          <div className="text-white/80 text-sm">Client Satisfaction</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 group text-center">
          <div className="text-3xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
          <div className="text-white/80 text-sm">Support</div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-64 h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
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

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardFloat {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .animate-card-float {
          animation: cardFloat 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default AllCaseStudies;

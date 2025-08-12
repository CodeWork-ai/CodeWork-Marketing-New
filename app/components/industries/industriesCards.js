"use client";
import Link from "next/link";
import React from "react";

const IndustriesCards = () => {
  const cardData = [
    {
      title: "Healthcare",
      img: "/Industires/healthcare.jpg",
      description:
        "Our AI-powered healthcare solutions revolutionize diagnostics with precision and speed, enabling personalized treatment plans tailored to each patient.",
      link: "/ai-in-healthcare-you-must-know",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 6h5v2h2V6h1V4H4zM4 10h5v2h2v-2h1V8H4zM4 14h5v2h2v-2h1v-2H4z" />
        </svg>
      ),
    },
    {
      title: "Education",
      img: "/Industires/education.jpg",
      description:
        "Explore unique insights into how AI in education empowers and transforms student learning experiences for a brighter future.",
      link: "/unique-ai-in-education",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
        </svg>
      ),
    },
    {
      title: "E-commerce",
      img: "/Industires/ecommerce.jpg",
      description:
        "Discover the secrets of integrating AI in e-commerce and unlock remarkable success for your business with our expert strategies.",
      link: "/ai-in-ecommerce",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      ),
    },
    {
      title: "Finance",
      img: "/Industires/finance.jpg",
      description:
        "Find out how new AI technologies in finance are empowering decisions and paving the way for a brighter, more efficient financial future.",
      link: "/new-ai-in-finance",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
        </svg>
      ),
    },
    {
      title: "Data Security",
      img: "/Industires/datascurity.jpg",
      description:
        "AI in data security refers to the use of artificial intelligence to detect, prevent, and respond to cybersecurity threats by analyzing patterns.",
      link: "/ai-in-data-security",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18,8h-1V6c0-2.76-2.24-5-5-5S7,3.24,7,6v2H6c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V10C20,8.9,19.1,8,18,8z M12,17c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,17,12,17z M15.1,8H8.9V6c0-1.71,1.39-3.1,3.1-3.1s3.1,1.39,3.1,3.1V8z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-primary relative overflow-hidden px-4 py-20">
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

      {/* Header Section */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center px-6 py-3 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-8">
          <span className="text-secondary text-sm font-medium">
            — AI Solutions by Industry —
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-white">Transforming </span>
          <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
            Industries
          </span>
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto mb-8"></div>

        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Discover how our AI solutions are revolutionizing different sectors
          with cutting-edge technology and innovative approaches.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="group bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/25 w-full max-w-sm h-full flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Industry Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-secondary/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg text-primary">
                  {card.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300 leading-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                  {card.description}
                </p>

                {/* Read More Button */}
                <div className="mt-auto">
                  <Link
                    href={card.link}
                    className="group 
      relative bg-neutral-800 h-16 w-64 border text-left p-3 
      text-white text-base font-bold rounded-lg overflow-hidden underline underline-offset-2 
      hover:border-cyan-300 hover:text-white hover:underline-offset-4 hover:decoration-2
      before:absolute before:w-12 before:h-12 before:content-[''] before:right-1 before:top-1 before:z-10 before:bg-primary before:rounded-full before:blur-lg
      after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-cyan-300 after:right-8 after:top-3 after:rounded-full after:blur-lg 
      duration-500 before:duration-500 after:duration-500 
      group-hover:before:duration-500 group-hover:after:duration-500
      hover:before:[box-shadow:_20px_20px_20px_30px_#3b82f6] hover:before:-bottom-8 hover:before:right-12
      hover:after:-right-8
      origin-left"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              {/* Card bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Statistics */}
      <div className="mt-20 text-center relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-secondary mb-1">5+</div>
            <div className="text-white/70 text-xs">Industries</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-secondary mb-1">50+</div>
            <div className="text-white/70 text-xs">Projects</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-secondary mb-1">100%</div>
            <div className="text-white/70 text-xs">Success Rate</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
            <div className="text-white/70 text-xs">Support</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 col-span-2 md:col-span-1">
            <div className="text-2xl font-bold text-secondary mb-1">AI</div>
            <div className="text-white/70 text-xs">Powered</div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-64 h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Line clamp CSS */}
      <style jsx>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default IndustriesCards;

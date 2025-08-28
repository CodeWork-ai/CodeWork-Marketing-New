"use client";
import React, { useState, useEffect } from "react";
import { 
  FaPalette,     // ✅ For UI/UX Design
  FaCode,        // ✅ For Custom Website Design
  FaShoppingCart, // ✅ For E-Commerce Website Development
  FaMobile,      // ✅ For Responsive Web Design
  FaRocket,      // ✅ For Landing Page & Conversion Optimization
  FaSync,        // ✅ For Website Redesign & Revamp
  FaDesktop      // ✅ For Web Application Interface Design
} from 'react-icons/fa';

export default function WebDesign() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [isHovered, setIsHovered] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  const cards = [
    {
      title: "UI/UX Design",
      text: `A strong focus on user experience (UX) and user interface (UI) design ensures intuitive, engaging, and high-converting websites.`,
      Icon: FaPalette,
      gradient: "from-secondary/80 to-secondary/60",
    },
    {
      title: "Custom Website Design",
      text: `Tailored website solutions cater to diverse industries, maintaining brand consistency and business goals.`,
      Icon: FaCode,
      gradient: "from-secondary/70 to-secondary/50",
    },
    {
      title: "E-Commerce Website Development",
      text: `Conversion-driven e-commerce platforms integrate secure payment gateways, user-friendly navigation, and dynamic product displays for seamless shopping experiences.`,
      Icon: FaShoppingCart,
      gradient: "from-secondary/60 to-secondary/40",
    },
    {
      title: "Responsive Web Design",
      text: `Optimized layouts guarantee flawless performance on desktops, tablets, and mobile devices, ensuring a uniform browsing experience.`,
      Icon: FaMobile,
      gradient: "from-secondary/80 to-secondary/60",
    },
    {
      title: "Landing Page & Conversion Optimization",
      text: `A high-performing landing page helps to enhance lead generation, sales, and overall engagement.`,
      Icon: FaRocket,
      gradient: "from-secondary/70 to-secondary/50",
    },
    {
      title: "Website Redesign & Revamp",
      text: `A fresh and modern approach transforms outdated websites, improving aesthetics, functionality, and performance.`,
      Icon: FaSync,
      gradient: "from-secondary/90 to-secondary/70",
    },
    {
      title: "Web Application Interface Design",
      text: `Scalable and intuitive interface designs provide a seamless user experience for SaaS platforms, dashboards, and interactive applications.`,
      Icon: FaDesktop,
      gradient: "from-secondary/85 to-secondary/65",
    },
  ];

  // Update windowWidth on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % cards.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));

  // Autoplay: advance every 4s when not hovered
  useEffect(() => {
    if (!isHovered) {
      const id = setInterval(nextSlide, 4000);
      return () => clearInterval(id);
    }
  }, [isHovered]);

  // Determine cards per view and paging
  const getCardsPerView = () => {
    if (windowWidth >= 1280) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  };
  const cardsPerView = getCardsPerView();
  const slideCount = Math.ceil(cards.length / cardsPerView);
  const currentPage = Math.floor(currentIndex / cardsPerView);

  // Set hasHydrated to true after the first render
  useEffect(() => {
    setHasHydrated(true);
  }, []);

  return (
    <div className="relative bg-primary min-h-screen overflow-hidden py-20 px-4 sm:px-6 lg:px-20">
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm text-secondary px-6 py-3 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
            Web Design Services
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Comprehensive <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">Web Design</span> Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel strip */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
            }}
          >
            {cards.map((card, idx) => {
              // Make cards 2,4,6 (i.e. idx 1,3,5) smaller:
              const isSmall = (idx + 1) % 2 === 0;
              const transformClasses = isSmall
                ? "scale-90 translate-y-4"
                : "scale-100";

              const { Icon } = card;

              return (
                <div
                  key={`${card.title}-${idx}`}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
                >
                  <div
                    className={`bg-primary/70 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden h-full transition-all duration-500 hover:bg-primary/80 hover:-translate-y-2 hover:shadow-3xl transform ${transformClasses} group`}
                  >
                    {/* Header with React icon and gradient */}
                    <div className={`bg-gradient-to-r ${card.gradient} p-8 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      <div className="relative z-10 flex items-center">
                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                          <Icon className="text-2xl text-primary" />
                        </div>
                        <h3 className="text-primary text-xl font-bold leading-tight flex-1">
                          {card.title}
                        </h3>
                      </div>
                      {/* Decorative corner elements */}
                      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-2xl"></div>
                    </div>

                    {/* Body */}
                    <div className="p-8 text-white/90 text-sm leading-relaxed flex-1 relative">
                      <p className="group-hover:text-white transition-colors duration-300">
                        {card.text}
                      </p>
                      
                      {/* Progress indicator */}
                      <div className="mt-6 flex items-center">
                        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-secondary to-secondary/80 rounded-full transition-all duration-1000"
                            style={{ width: `${((idx + 1) / cards.length) * 100}%` }}
                          ></div>
                        </div>
                        <span className="ml-3 text-secondary font-bold text-xs">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Decorative bottom corner */}
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-secondary/30 rounded-bl-2xl"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-8 mt-12">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-secondary/80 shadow-xl flex items-center justify-center text-primary hover:scale-110 hover:shadow-secondary/25 transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:-translate-x-1 transition-transform duration-300"
            >
              <path
                d="M15 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dots */}
          {hasHydrated && (
            <div className="flex gap-3">
              {Array.from({ length: slideCount }).map((_, page) => (
                <button
                  key={page}
                  onClick={() => setCurrentIndex(page * cardsPerView)}
                  className={`rounded-full transition-all duration-300 ${
                    page === currentPage
                      ? "bg-secondary w-8 h-3 shadow-lg"
                      : "bg-white/30 w-3 h-3 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${page + 1}`}
                />
              ))}
            </div>
          )}

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-secondary/80 shadow-xl flex items-center justify-center text-primary hover:scale-110 hover:shadow-secondary/25 transition-all duration-300 group"
            aria-label="Next slide"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-40 h-20 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}

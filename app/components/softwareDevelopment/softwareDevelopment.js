"use client";
import React, { useState, useEffect } from "react";

export default function SoftwareDevelopment() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [isHovered, setIsHovered] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false); // Track hydration state

  const cards = [
    {
      title: "Custom Software Development",
      text: `Fully tailored software solutions align with business goals, streamline operations,
             and boost efficiency. Scalable architectures ensure adaptability as businesses grow,
             incorporating seamless system integration for optimized performance.`,
    },
    {
      title: "Web Application Development",
      text: `Secure and high-performance web applications are developed using modern frameworks
             like React, Angular, and Vue.js. Whether creating interactive web platforms or
             enterprise-grade solutions, web development services focus on delivering intuitive
             user experiences and seamless functionality.`,
    },
    {
      title: "Mobile App Development",
      text: `Native and cross-platform mobile applications for iOS and Android ensure optimal
             performance, engaging design, and smooth user interaction. Technologies such as
             Flutter, React Native, Swift, and Kotlin power mobile app development to enhance
             accessibility and usability.`,
    },
    {
      title: "AI-Driven Software Solutions",
      text: `Integrating artificial intelligence enhances automation, data analysis, and user interactions. Machine learning, natural language processing, and predictive analytics drive decision-making, improving operational efficiency and customer experience.`,
    },
    {
      title: "Cloud-Based Solutions",
      text: `Cloud-native applications maximize scalability, security, and efficiency. With AWS, Azure, and Google Cloud expertise, cloud-based solutions ensure high availability, secure data storage, and optimal performance for enterprises and startups.`,
    },
    {
      title: "API Development & System Integration",
      text: `Robust API development and seamless system integration enable businesses to connect multiple platforms and enhance functionality. Secure APIs facilitate efficient data exchange and improve interoperability across software ecosystems.`,
    },
    {
      title: "Software Modernization & Maintenance",
      text: `Legacy systems are upgraded with modern technologies to enhance performance, security, and user experience. Continuous software maintenance and support ensure reliability, enabling businesses to stay competitive in the ever-evolving digital landscape.`,
    },
  ];

  // Update windowWidth on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );

  // Autoplay: advance every 2s when not hovered
  useEffect(() => {
    if (!isHovered) {
      const id = setInterval(nextSlide, 2000);
      return () => clearInterval(id);
    }
  }, [isHovered]);

  // Determine cards per view and paging - Updated for better responsiveness
  const getCardsPerView = () => {
    if (windowWidth >= 1280) return 3; // xl: 3 cards
    if (windowWidth >= 1024) return 2; // lg: 2 cards
    if (windowWidth >= 640) return 2;  // sm: 2 cards
    return 1; // mobile: 1 card
  };
  const cardsPerView = getCardsPerView();
  const slideCount = Math.ceil(cards.length / cardsPerView);
  const currentPage = Math.floor(currentIndex / cardsPerView);

  // Set hasHydrated to true after the first render
  useEffect(() => {
    setHasHydrated(true);
  }, []);

  return (
    <div className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#FBF8E6] to-[#f5fdff] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <h2 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        Comprehensive Software Development Solutions
      </h2>

      <div className="max-w-7xl mx-auto">
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel strip */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / cardsPerView
              }%)`,
            }}
          >
            {cards.map((card, idx) => {
              // Make cards 2,4,6 (i.e. idx 1,3,5) smaller:
              const isSmall = (idx + 1) % 2 === 0;
              const transformClasses = isSmall
                ? "sm:scale-90 sm:translate-y-4" // Only apply scaling on sm+ screens
                : "sm:scale-105";

              return (
                <div
                  key={`${card.title}-${idx}`}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/2 xl:w-1/3 px-2 sm:px-3 md:px-4"
                >
                  <div
                    className={`bg-white rounded-xl sm:rounded-2xl shadow-md flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-lg transform ${transformClasses}`}
                  >
                    {/* Header with straight bottom edge */}
                    <div className="bg-gradient-to-r from-purple-400 to-blue-300 p-4 sm:p-6 md:p-8 border-b-2 sm:border-b-4 border-white">
                      <h3 className="text-gray-800 text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 leading-tight">
                        {card.title}
                      </h3>
                    </div>

                    {/* Body */}
                    <div className="p-4 sm:p-5 md:p-6 text-gray-700 text-xs sm:text-sm md:text-sm leading-relaxed flex-1">
                      <p>{card.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrows + Pagination Dots */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-300 shadow-md flex items-center justify-center text-white hover:opacity-90 transition-all"
            aria-label="Previous slide"
          >
            <svg
              width="18"
              height="18"
              className="sm:w-5 sm:h-5 md:w-6 md:h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
            <div className="flex gap-1 sm:gap-2">
              {Array.from({ length: slideCount }).map((_, page) => (
                <button
                  key={page}
                  onClick={() => setCurrentIndex(page * cardsPerView)}
                  className={`rounded-full transition-all ${
                    page === currentPage
                      ? "bg-blue-500 w-4 h-2 sm:w-5 sm:h-2 md:w-6 md:h-3"
                      : "bg-gray-300 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3"
                  }`}
                  aria-label={`Go to slide ${page + 1}`}
                />
              ))}
            </div>
          )}

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-300 shadow-md flex items-center justify-center text-white hover:opacity-90 transition-all"
            aria-label="Next slide"
          >
            <svg
              width="18"
              height="18"
              className="sm:w-5 sm:h-5 md:w-6 md:h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
    </div>
  );
}
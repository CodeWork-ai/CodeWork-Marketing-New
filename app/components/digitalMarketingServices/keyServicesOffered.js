"use client";
import React, { useState, useEffect } from "react";

export default function KeyServicesOffered() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [isHovered, setIsHovered] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false); // New state to track hydration

  const cards = [
  {
    title: "Search Engine Optimization (SEO)",
    text: `Enhancing a company's search engine visibility through website traffic is called SEO. It involves keyword research, content creation and optimization, technical audits, and link-building strategies that ensure consistent traffic flows and higher rankings within search engines.`,
  },
  {
    title: "Social Media Marketing (SEM)",
    text: `Social media campaigns are crafted for platforms like Instagram, LinkedIn, Facebook, and Twitter. This service helps build a strong brand image while boosting audience engagement and increasing follower numbers.`,
  },
  {
    title: "Pay-per-click (PPC)",
    text: `PPC enables instant website traffic through targeted ads on platforms like Google Ads. Campaigns are designed to deliver high ROI by reaching the right audience at the right time with compelling, customized messages.`,
  },
  {
    title: "Email Marketing",
    text: `Email campaigns are used to nurture leads, highlight new offers, and support customer retention. Through segmentation and personalized content, messages remain relevant, leading to higher open and click-through rates.`,
  },
  {
    title: "Content Marketing",
    text: `High-value blog posts, social media updates, and video content inform and engage the audience. Consistently sharing valuable resources helps establish authority in the market and fosters long-term trust.`,
  },
  {
    title: "Our Commitment",
    text: `Focused on delivering value-driven outcomes through innovative tools, Codework's digital marketing services stand out in the industry. Every strategy aiming at creating brand awareness, lead generation, or boosting sales is done with utmost precision and clear intention showing how each step is purpose-driven.`,
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
    <div className="relative py-20 bg-gradient-to-br from-[#FBF8E6] to-[#f5fdff] px-16">
      <h2 className="text-black text-3xl font-semibold text-center mb-12">
        Key Services Offered:
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
                ? "scale-90 translate-y-4"
                : "scale-105";

              return (
                <div
                  key={`${card.title}-${idx}`}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
                >
                  <div
                    className={`bg-white rounded-2xl shadow-md flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-lg transform ${transformClasses}`}
                  >
                    {/* Header with straight bottom edge */}
                    <div className="bg-gradient-to-r from-purple-400 to-blue-300 p-8 border-b-4 border-white">
                      <h3 className="text-gray-800 text-xl font-semibold mb-2">
                        {card.title}
                      </h3>
                    </div>

                    {/* Body */}
                    <div className="p-6 text-gray-700 text-sm leading-relaxed flex-1">
                      <p>{card.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrows + Pagination Dots */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-300 shadow-md flex items-center justify-center text-white hover:opacity-90 transition-all"
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
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
            <div className="flex gap-2">
              {Array.from({ length: slideCount }).map((_, page) => (
                <button
                  key={page}
                  onClick={() => setCurrentIndex(page * cardsPerView)}
                  className={`rounded-full transition-all ${
                    page === currentPage
                      ? "bg-blue-500 w-6 h-3"
                      : "bg-gray-300 w-3 h-3"
                  }`}
                  aria-label={`Go to slide ${page + 1}`}
                />
              ))}
            </div>
          )}

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-300 shadow-md flex items-center justify-center text-white hover:opacity-90 transition-all"
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
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

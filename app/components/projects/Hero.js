"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate blur for the background
  const backgroundStyle = {
    backgroundImage: "url('/01.avif')", // Replace with your image URL
    filter: `blur(${Math.min(scrollY / 100, 10)}px)`, // Blur effect
    transform: `translateY(${scrollY / 2}px)`, // Parallax effect
    transition: "filter 0.1s ease-out, transform 0.1s ease-out", // Smooth transitions
    willChange: "filter, transform", // Hint browser to optimize these properties
  };

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between text-white min-h-screen px-6 lg:px-20 py-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={backgroundStyle}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Left Side: Heading */}
        <div className="flex-1 text-center lg:text-left lg:pr-12 mt-20 md:mt-32 lg:mt-0">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight tracking-wide">
            <span className="text-white">Revolutionize</span>
            <br />
            <span className="text-white">Your World</span>

          </h1>

          {/* Animated Subtext */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mt-6 italic animate-fade-in">
            Empowering businesses through AI, Machine Learning, and beyond.
          </p>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 text-center lg:text-left lg:pl-12 mt-10 lg:mt-0">
          {/* Subtitle */}
          <h2 className="text-lg md:text-xl lg:text-2xl uppercase tracking-wide mb-4 text-[#FF035B]">
            Discover the Future
            <span className="block mx-auto lg:mx-0 w-16 h-1 bg-[#FF035B] mt-2"></span>
          </h2>

          {/* Description */}
          <p className="text-sm md:text-lg lg:text-xl leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0 text-gray-200">
            Welcome to CodeWork, where we specialize in harnessing the transformative
            power of Artificial Intelligence, Machine Learning, Deep Learning, Data Science,
            and Open Source Intelligence.
          </p>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-6">
            <button className="px-8 py-3 bg-[#FF035B] text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-transform duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-4">
        <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-orange-500 animate-bounce delay-150"></div>
        <div className="w-4 h-4 rounded-full bg-yellow-500 animate-bounce delay-300"></div>
      </div>

      {/* Floating Glow Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-30 blur-lg animate-pulse"></div>
      <div className="absolute top-32 right-10 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-30 blur-lg animate-pulse"></div>
    </section>
  );
}

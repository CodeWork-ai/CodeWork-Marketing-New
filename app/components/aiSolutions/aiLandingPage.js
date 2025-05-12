"use client";
import React from "react";
import Image from "next/image";

const AiLandingPage = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-[#F6F5FF]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/landing.mp4" type="video/mp4" />
        </video> */}
        {/* Dark overlay for better text visibility */}
      </div>

      {/* Content Container - Updated width to 80% */}
      <div className="relative z-10 w-[80%] mx-auto px-4 text-left text-gray-800">
        {/* Heading Container */}
        <div className="heading-container mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold">
            Empowering Innovation with AI and
            <br />
            <span className="mt-2 inline-block"> Advanced Technologies</span>
          </h1>
        </div>

        {/* Paragraph Container */}
        <div className="paragraph-container mb-8">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed text-gray-800">
         we are driven by a passion for delivering intelligent,
            future-ready solutions powered by Artificial Intelligence and
            advanced technologies. Our expertise spans across key areas that
            help businesses innovate, grow, and stay ahead in the fast-evolving
            digital landscape. From AI consulting to Predictive Analytics, we
            bring the right mix of technology and strategy to solve real-world
            challenges.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiLandingPage;

"use client";
import React from "react";

const Education = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between py-16 px-8 bg-primary overflow-hidden font-sans">
      
      {/* Background Decorative Circles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full"></div>
        <div className="absolute top-1/3 right-24 w-24 h-24 bg-secondary/15 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full"></div>
      </div>

      {/* Floating Small Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-28 left-16 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
        <div className="absolute bottom-56 left-1/4 w-3 h-3 bg-secondary/80 rounded-full animate-ping"></div>
      </div>

      {/* Text Column */}
      <div className="relative w-full md:w-1/2 pr-0 md:pr-8 text-white z-10">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Education:{" "}
          <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
            Adaptive AI Learning and
          </span>
          <br />
          Blockchain Certification
        </h2>
        <p className="text-lg leading-relaxed text-white/90">
          Transforming education, our adaptive AI platforms create personalized learning journeys for every student, matching content to individual learning styles. This interactive approach fosters engagement and retention, making education accessible and enjoyable. With blockchain-backed certifications, academic credentials are secure, tamper-proof, and easily verifiable, building trust in institutions. We empower learners and educators alike by promoting transparency and innovation in education.
        </p>
      </div>

      {/* Image Column */}
      <div className="relative w-full md:w-1/2 h-[300px] mt-12 md:mt-0 z-10">
        <div className="absolute top-0 left-[10%] w-[70%] overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="/Industires/education.png"
            alt="AI-driven education interface"
            className="block w-full h-auto object-cover"
          />
          {/* Overlay with primary color at low opacity */}
          <div className="absolute inset-0 bg-primary opacity-30 rounded-3xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Education;

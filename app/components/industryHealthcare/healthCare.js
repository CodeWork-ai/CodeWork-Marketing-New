"use client";
import React from "react";

const HealthCare = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between md:py-9 px-8 bg-primary overflow-hidden font-sans">
      
      {/* Background Decorative Circles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full" />
        <div className="absolute top-1/3 right-24 w-24 h-24 bg-secondary/15 rounded-full" />
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full" />
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-28 left-16 w-2 h-2 bg-secondary rounded-full animate-pulse" />
        <div className="absolute top-2/3 right-20 w-2 h-2 bg-white/60 rounded-full animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-secondary/80 rounded-full animate-ping" />
      </div>

      {/* Text Column */}
      <div className="relative w-full md:w-1/2 text-white pr-0 md:pr-8 z-10">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Healthcare:{" "}
          <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
            AI-Driven Diagnostics
          </span>
          <br />
          and Better Record-Keeping
        </h2>
        <p className="text-lg leading-relaxed mb-4 text-white/90">
          Our cutting-edge healthcare tools are designed to help doctors detect
          illnesses earlier and with greater precision. By analyzing medical
          data, our systems help suggest the best treatment plans based on each
          patient’s history and condition.
        </p>
        <p className="mb-4 text-white/85">
          We streamline hospital record management with AI, efficiently
          organizing and safeguarding Electronic Health Records (EHR). It
          ensures doctors have fast, secure access to patient information
          whenever needed. It means less paperwork, faster service, and more
          time focused on patient care.
        </p>
        <p className="mb-4 pt-8 text-white/85">
          These technologies enhance the efficiency of clinics and hospitals by
          minimizing delays, streamlining routine tasks, and enabling doctors to
          dedicate more time to patient care. It’s about using the power of
          intelligent tools to improve real lives, from quicker check-ups to
          better long-term health.
        </p>
        <p className="mb-0 text-white/90 font-medium">
          We provide healthcare professionals with solutions that make an
          impact—straightforward, secure, and efficient.
        </p>
      </div>

     <div className="relative w-full md:w-1/2 h-[300px]">
  {/* Main image */}
  <img
    src="/Industires/healthcare.png"
    alt="Healthcare AI"
    className="relative z-10 block w-full h-auto"
  />
</div>

    </section>
  );
};

export default HealthCare;

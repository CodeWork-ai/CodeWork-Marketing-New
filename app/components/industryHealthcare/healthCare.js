// src/components/HealthCare.jsx
import React from "react";

const HealthCare = () => {
  return (
    <section className="flex items-center justify-between py-16 px-8 bg-white font-sans">
      {/* TEXT COLUMN */}
      <div className="w-1/2 text-gray-800 pr-8">
        <h2 className="text-[2rem] leading-[1.2] font-bold text-[#0A1E2D] mb-4">
          Healthcare: <span>AI-Driven Diagnostics</span>
          <br />
          and Better Record-Keeping
        </h2>
        <p className="text-base leading-relaxed text-[#354052]">
          Our cutting-edge healthcare tools are designed to help doctors detect
          illnesses earlier and with greater precision. By analyzing medical
          data, our systems help suggest the best treatment plans based on each
          patient’s history and condition.
        </p>
        <p>
          We streamline hospital record management with AI, efficiently
          organizing and safeguarding Electronic Health Records (EHR). It
          ensures doctors have fast, secure access to patient information
          whenever needed. It means less paperwork, faster service, and more
          time focused on patient care.
        </p>
        <p  className="pt-12"> 
          These technologies enhance the efficiency of clinics and hospitals by
          minimizing delays, streamlining routine tasks, and enabling doctors to
          dedicate more time to patient care. It’s about using the power of
          intelligent tools to improve real lives, from quicker check-ups to
          better long-term health.{" "}
        </p>
        <p>
          We provide healthcare professionals with solutions that make an
          impact—straightforward, secure, and efficient.
        </p>
      </div>

      {/* IMAGE COLUMN */}
      <div className="relative w-1/2 h-[300px]">
        {/* Main (larger) image */}
        <div className="absolute top-0 left-[10%] w-[70%] overflow-hidden">
          <img
            src="/Industires/healthcare.png"
            alt="AI-driven diagnostics interface"
            className="block w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HealthCare;

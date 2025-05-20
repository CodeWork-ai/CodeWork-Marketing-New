// src/components/HealthCare.jsx
import React from "react";

const Finance = () => {
  return (
    <section className="flex items-center justify-between py-16 px-8 bg-white font-sans">
      {/* TEXT COLUMN */}
      <div className="w-1/2 pr-8">
        <h2 className="text-[2rem] leading-[1.2] font-bold text-[#0A1E2D] mb-4">
          Finance: <span>AI-Powered Fraud Detection</span>
          <br />
          and Risk Analysis{" "}
        </h2>
        <p className="text-base leading-relaxed text-[#354052]">
          Revolutionizing financial systems, our AI solutions provide accurate
          fraud detection, credit risk analysis, and streamlined payment
          processes. These innovations enhance operational efficiency, minimize
          risks, and boost customer trust. By automating complex financial
          tasks, we save time and ensure precision, supporting smarter financial
          decisions. Our technology fosters a secure, efficient, and reliable
          financial ecosystem.
        </p>
      </div>

      {/* IMAGE COLUMN */}
      <div className="relative w-1/2 h-[300px]">
        {/* Main (larger) image */}
        <div className="absolute top-0 left-[10%] w-[70%] overflow-hidden">
          <img
            src="/Industires/Finance.png"
            alt="AI-driven diagnostics interface"
            className="block w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Finance;

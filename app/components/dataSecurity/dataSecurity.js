// src/components/HealthCare.jsx
import React from "react";

const DataSecurity = () => {
  return (
    <section className="flex items-center justify-between py-16 px-8 bg-white font-sans">
      {/* TEXT COLUMN */}
      <div className="w-1/2 pr-8">
        <h2 className="text-[2rem] leading-[1.2] font-bold text-[#0A1E2D] mb-4">
        Data Security:<span>Advanced Threat Detection and</span>
          <br />
          Decentralized Protection{" "}
        </h2>
        <p className="text-base leading-relaxed text-[#354052]">
        Protect sensitive information with our advanced anomaly detection and decentralized security protocols. Our technology proactively identifies threats, ensuring robust data protection. By employing encryption and decentralized methods, we safeguard your information from breaches and cyberattacks. With our solutions, businesses can confidently manage data, maintaining compliance and building user trust.
        </p>
      </div>

      {/* IMAGE COLUMN */}
      <div className="relative w-1/2 h-[300px]">
        {/* Main (larger) image */}
        <div className="absolute top-0 left-[10%] w-[70%] overflow-hidden">
          <img
            src="/Industires/dataSecurity.png"
            alt="AI-driven diagnostics interface"
            className="block w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default DataSecurity;

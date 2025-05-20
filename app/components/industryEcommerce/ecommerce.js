// src/components/HealthCare.jsx
import React from "react";

const Ecommerce = () => {
  return (
    <section className="flex items-center justify-between py-16 px-8 bg-white font-sans">
      {/* TEXT COLUMN */}
      <div className="w-1/2 pr-8">
        <h2 className="text-[2rem] leading-[1.2] font-bold text-[#0A1E2D] mb-4">
          E-commerce: <span>Predictive Analytics for</span>
          <br />
          Smarter Shopping{" "}
        </h2>
        <p className="text-base leading-relaxed text-[#354052]">
          Redefine the online shopping experience with our predictive analytics
          solutions. We deliver personalized product recommendations that
          increase customer satisfaction and drive sales. Our secure payment
          gateways ensure seamless transactions, building trust with shoppers.
          By analysing customer behaviour, we create intuitive, tailored
          experiences that keep buyers coming back. Businesses benefit from
          higher conversion rates, w
        </p>
      </div>

      {/* IMAGE COLUMN */}
      <div className="relative w-1/2 h-[300px]">
        {/* Main (larger) image */}
        <div className="absolute top-0 left-[10%] w-[70%] border-4 border-transparent overflow-hidden">
          <img
            src="/Industires/ecommerce.png"
            alt="AI-driven diagnostics interface"
            className="block w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Ecommerce;

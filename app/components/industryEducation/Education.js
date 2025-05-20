// src/components/HealthCare.jsx
import React from "react";

const Education = () => {
  return (
    <section className="flex items-center justify-between py-16 px-8 bg-white font-sans">
      {/* TEXT COLUMN */}
      <div className="w-1/2 pr-8">
        <h2 className="text-[2rem] leading-[1.2] font-bold text-[#0A1E2D] mb-4">
          Education: <span>Adaptive AI Learning and</span>
          <br />
          Blockchain Certification{" "}
        </h2>
        <p className="text-base leading-relaxed text-[#354052]">
          Transforming education, our adaptive AI platforms create personalized
          learning journeys for every student, matching content to individual
          learning styles. This interactive approach fosters engagement and
          retention, making education accessible and enjoyable. With
          blockchain-backed certifications, academic credentials are secure,
          tamper-proof, and easily verifiable, building trust in institutions.
          We empower learners and educators alike by promoting transparency and
          innovation in education.
        </p>
      </div>

      {/* IMAGE COLUMN */}
      <div className="relative w-1/2 h-[300px]">
        {/* Main (larger) image */}
        <div className="absolute top-0 left-[10%] w-[70%] overflow-hidden">
          <img
            src="/Industires/education.png"
            alt="AI-driven diagnostics interface"
            className="block w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;

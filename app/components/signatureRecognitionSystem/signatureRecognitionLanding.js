import React from "react";

const SignatureRecognitionLanding = () => {
  return (
    <section className="bg-gradient-to-b w-full  py-36">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Text Card with Gradient */}
        <div className="md:w-5/12 bg-gradient-to-br from-[#FBF8E6] to-[#f5fdff] p-6 pb-4 rounded-2xl text-gray-800 z-20 -mr-28 md:-mr-32 self-end">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Advanced Handwritten Signature Recognition System
          </h2>
          <p className="text-sm md:text-base w-[90%] leading-relaxed">
            The Handwritten Signature Recognition System is an innovative
            solution tailored for verifying handwritten signatures through
            sophisticated techniques like template matching and correlation.
            Employing advanced image processing methods, this system ensures
            accurate authentication by comparing input signatures with a
            comprehensive database of existing samples. It is particularly
            suited for form validation and scenarios requiring low-security
            verification.
          </p>
        </div>

        {/* Full-cover Image */}
        <div className="md:w-1/2 h-80 md:h-auto overflow-hidden rounded-2xl shadow-lg z-10">
          <img
            src="/CaseStudies/SignatureRecognition.jpg"
            alt="YourBank team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SignatureRecognitionLanding;

import React from "react";
function SignatureOverView() {
  return (
    <div className="container mx-auto px-16 py-12">
      {/* Top headline + intro */}
      <h2 className="text-3xl font-bold text-gray-800">Challenges Addressed</h2>
      <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl">
        Manual signature validation often leads to inefficiencies and errors.
        This system addresses these challenges by automating the process,
        thereby improving accuracy and reducing delays in document
        authentication.{" "}
      </p>

      {/* Illustration */}
      <div className="mt-8 flex space-x-36">
  <img
    src="/CaseStudies/signature.jpg"
    alt="Person translating a PDF on their laptop"
    className="w-[400px] h-[300px]"
  />
  <img
    src="/CaseStudies/sign.jpg"
    alt="Description of the second image"
    className="w-[400px] h-[300px]"
  />
</div>

      {/* Two-column feature blocks */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Strategic Response */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            Problem-Solving Capabilities{" "}
          </h3>
          <p className="text-gray-600 pt-7">
            By eliminating the limitations of manual validation, the system
            enhances operational efficiency in verification tasks. With the
            future integration of AI, it can support real-time validation for a
            variety of sectors.
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Key Features</h3>
          <p className="text-gray-600 pt-7">
            This system uses OpenCV for precise template matching, ensuring
            effective recognition. It applies correlation-based matching by
            computing a normalized correlation coefficient to determine
            authentication accuracy. A structured signature dataset further
            enhances its recognition reliability. Designed primarily for
            validation purposes, this system holds potential for enhancement
            through integration with machine learning models for improved
            adaptability.
          </p> <br />
          <p className="text-gray-600 pt-4"> Radi Insight Scan transforms healthcare by fostering transparency and empowering patients to confidently take charge of their health.
          </p>
        </div>
      </div>

    </div>
  );
}

export default SignatureOverView;

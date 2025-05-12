import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhyJoinCodework = () => {
  return (
    <section className="bg-gradient-to-b from-[#fbe6f8] to-[#c1eafc] pt-28 py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="container mx-auto flex pl-10 flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section */}
        <div className="md:w-1/2 ml-0 md:-ml-6 lg:ml-6 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Why Choose Us?
          </h2>

          {/* Card 1 */}
          <div className="group relative bg-white border-[2px] border-[#75def9] border-t-0 border-l-0 rounded-tl-2xl rounded-tr-[200px] rounded-bl-2xl rounded-br-2xl p-4 sm:p-6 mb-4 shadow-md w-full max-w-md md:max-w-lg min-h-[100px] ml-[-10px] md:ml-[-20px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#7C9AEF] hover:to-[#79D0FD]">
            <div className="flex items-start gap-9">
              <span className="mt-1 inline-block text-blue-500 transition-colors duration-300 group-hover:text-white">
                <FaCheckCircle size={24} />
              </span>
              <div>
                <p className="text-sm w-full text-gray-600">
                Work with a team of passionate and talented professionals.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white border-[2px] border-[#75def9] border-t-0 border-l-0 rounded-tl-2xl rounded-tr-[200px] rounded-bl-2xl rounded-br-2xl p-4 sm:p-6 mb-4 shadow-md w-full max-w-md md:max-w-lg min-h-[100px] ml-[-10px] md:ml-[-20px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#7C9AEF] hover:to-[#79D0FD]">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-block text-blue-500 transition-colors duration-300 group-hover:text-white">
                <FaCheckCircle size={24} />
              </span>
              <div>
                <p className="text-sm w-full text-gray-600">
                Enjoy a culture that fosters innovation and growth.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white border-[2px] border-[#75def9] border-t-0 border-l-0 rounded-tl-2xl rounded-tr-[200px] rounded-bl-2xl rounded-br-2xl p-4 sm:p-6 mb-4 shadow-md w-full max-w-md md:max-w-lg min-h-[100px] ml-[-10px] md:ml-[-20px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#7C9AEF] hover:to-[#79D0FD]">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-block text-blue-500 transition-colors duration-300 group-hover:text-white">
                <FaCheckCircle size={24} />
              </span>
              <div>
                <p className="text-sm w-full text-gray-600">
                Access opportunities for continuous learning and development.
                </p>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="group relative bg-white border-[2px] border-[#75def9] border-t-0 border-l-0 rounded-tl-2xl rounded-tr-[200px] rounded-bl-2xl rounded-br-2xl p-4 sm:p-6 mb-4 shadow-md w-full max-w-md md:max-w-lg min-h-[100px] ml-[-10px] md:ml-[-20px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#7C9AEF] hover:to-[#79D0FD]">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-block text-blue-500 transition-colors duration-300 group-hover:text-white">
                <FaCheckCircle size={24} />
              </span>
              <div>
                <p className="text-sm w-full text-gray-600">
                Be part of a mission-driven organization shaping tomorrow.                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/2 pt-0 flex justify-end">
          <div className="relative w-full h-[500px]">
            <img
              src="/whyJoinCodework.svg" // Update this path to match your image location
              alt="Join Codework Team"
              className="w-full h-full object-contain rounded-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinCodework;

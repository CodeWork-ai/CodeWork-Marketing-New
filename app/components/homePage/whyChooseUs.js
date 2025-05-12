import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MapDemo } from "./mapDemo";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F6F5FF] pt-28 py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
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
                <h3 className="text-lg font-semibold text-black mb-1">Punctual Deliveries</h3>
                <p className="text-sm w-full text-gray-600">
                  Codework completes projects on time, ensuring smooth operations and consistent progress.
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
                <h3 className="text-lg font-semibold text-black mb-1">Transparent Pricing</h3>
                <p className="text-sm w-full text-gray-600">
                  Transparent Pricing: With no hidden charges, every project is handled clearly and honestly.
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
                <h3 className="text-lg font-semibold text-black w-3/4 mb-1">Support You Can Count On</h3>
                <p className="text-sm w-full text-gray-600">
                  Our friendly team is dedicated to providing exceptional assistance every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section: World Map */}
        <div className="w-full pt-0 flex justify-end">
          <MapDemo />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

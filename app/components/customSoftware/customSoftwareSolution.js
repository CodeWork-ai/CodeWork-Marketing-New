import React from "react";
import ShineBorder from "../../../components/ui/shine-border";
import { IoIosCheckbox } from "react-icons/io";

const CustomSoftwareSolution = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-4xl w-full">
      <ShineBorder
  className="pt-6 sm:pt-8 md:pt-12 mt-8 sm:mt-12 md:mt-16 bg-black text-white py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-16 lg:px-32 
             w-full sm:w-[800px] md:w-[1200px] h-[380px] sm:h-[480px] md:h-[576px] rounded-tr-[100px] sm:rounded-tr-[200px] md:rounded-tr-[530px] 
             rounded-br-[100px] sm:rounded-br-[200px] md:rounded-br-[530px] relative overflow-hidden ml-[-20px] sm:ml-[-200px] md:ml-[-320px]"
             color={["#1dcaf5", "#f04f57"]}
             borderRadius="0 100px 100px 0"  
             style={{
               borderRadius: "0 100px 100px 0", /* Mobile default (right-side rounding) */
               ["@media (min-width: 768px)"]: { /* md: breakpoint */
                 borderRadius: "0 530px 530px 0", /* Medium screens and above */
               },
             }}
>
  {/* Title Section */}
  <div className="relative w-full mt-2 sm:mt-0"> {/* Added mt-2 for mobile */}
    <h2 className="text-white text-sm sm:text-lg md:text-2xl font-semibold flex items-center">
      <span
        className="inline-block w-1 sm:w-2 h-6 sm:h-8 md:h-10 bg-gradient-to-b to-blue-500 from-pink-500 
                   mr-2 sm:mr-3 md:mr-4 rounded-tr-md rounded-br-md"
      ></span>
      Why Choose Custom Software Development?
    </h2>
    <p className="text-gray-300  w-full sm:w-[70%] mt-1 sm:mt-2 text-xs sm:text-base">
      Off-the-shelf software often lacks the flexibility to meet unique business needs. A custom solution provides:
    </p>

    <div className="flex justify-start w-full">
      {/* New Section Matching Image Layout */}
      <div className="space-y-3 sm:space-y-4 md:space-y-6 mt-4 sm:mt-6 md:mt-9">
        {[
          {
            title: "Personalized Functionality",
            description: "Tailored to specific workflows and operations.",
          },
          {
            title: "Scalability & Adaptability",
            description: "Grows with business expansion.",
          },
          {
            title: "Seamless Integration",
            description: "Works effortlessly with existing systems.",
          },
          {
            title: "Advanced Security",
            description: "Implements industry-leading security standards.",
          },
          {
            title: "Competitive Edge",
            description: "Offers exclusive features to enhance market positioning.",
          },
        ].map((item, index) => (
          <div key={index} className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
            <div className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 flex items-center justify-center text-base sm:text-lg md:text-xl">
              <IoIosCheckbox className="text-[#F62A5A] w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
            </div>
            <div>
              <h3 className="text-[10px] sm:text-sm md:text-lg font-semibold text-[#1dcaf5]">
                {item.title}
              </h3>
              <p className="text-gray-300 text-[9px] sm:text-xs md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</ShineBorder>
        {/* Title Section */}
<h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold pt-8 sm:pt-16 md:pt-32 ml-4 sm:-ml-24 md:-ml-48 flex items-center justify-start">
  <span className="inline-block w-3 sm:w-3 h-10 sm:h-10 md:h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-2 sm:mr-4 rounded-tr-md rounded-br-md"></span>
  Core Custom Software Development Services
</h2>

<ShineBorder
  className="w-full sm:w-[800px] md:w-[1200px] h-[390px] sm:h-[456px] md:h-[556px] bg-black relative ml-[20px] sm:ml-2 overflow-hidden flex flex-col mt-8 sm:mt-16 md:mt-32 rounded-tl-[100px] sm:rounded-tl-[200px] md:rounded-tl-[530px] rounded-bl-[100px] sm:rounded-bl-[200px] md:rounded-bl-[530px]"
  color={["#1dcaf5", "#f04f57"]}
  style={{
    borderRadius: "100px 0 0 100px", /* Mobile default (left-side rounding) */
    ["@media (min-width: 640px)"]: { /* sm: breakpoint */
      borderRadius: "200px 0 0 200px", /* Small screens */
    },
    ["@media (min-width: 768px)"]: { /* md: breakpoint */
      borderRadius: "530px 0 0 530px", /* Medium screens and above */
    },
  }}
>
  <div className="pt-9 sm:pt-14 md:pt-16 text-white py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-32 w-full flex flex-col text-left">
    <div className="relative z-10 w-full mt-2 sm:mt-0"> {/* Added mt-2 for mobile */}
      {/* Section 1 */}
      <div className="mb-3 sm:mb-4 md:mb-6">
        <h3 className="text-xs sm:text-base md:text-lg font-semibold pt-6 sm:pt-12 md:pt-16 pb-1">
        Web & Mobile App Development
        </h3>
        <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-1 sm:mt-2 text-[10px] sm:text-sm md:text-base">
        Designing high-performance web and mobile applications optimized for user engagement and functionality.
        </p>
      </div>
      {/* Section 2 */}
      <div>
        <h3 className="text-xs sm:text-base md:text-lg font-semibold pb-1">
        Enterprise Software Solutions
        </h3>
        <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-1 sm:mt-2 text-[10px] sm:text-sm md:text-base">
        Developing CRM, ERP, and HRM systems to streamline operations and boost productivity.
        </p>
      </div>
      {/* Section 3 */}
      <div>
        <h3 className="text-xs sm:text-base md:text-lg font-semibold pt-5 pb-1">
        AI-Driven Software Development
        </h3>
        <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-1 sm:mt-2 text-[10px] sm:text-sm md:text-base">
        Integrating machine learning and predictive analytics to automate processes and enhance decision-making.
        </p>
      </div>
    </div>
  </div>
</ShineBorder>
<ShineBorder
  className="pt-6 sm:pt-8 md:pt-12 mt-8 sm:mt-16 md:mt-32 bg-black text-white py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-32 w-full sm:w-[800px] md:w-[1200px] h-[300px] sm:h-[390px] md:h-[396px] 
          rounded-tr-[100px] sm:rounded-tr-[200px] md:rounded-tr-[530px] rounded-br-[100px] sm:rounded-br-[200px] md:rounded-br-[530px] relative overflow-hidden ml-[-20px] sm:ml-[-200px] md:ml-[-320px]"
          color={["#1dcaf5", "#f04f57"]}
          borderRadius="0 100px 100px 0"  
          style={{
            borderRadius: "0 100px 100px 0", /* Mobile default (right-side rounding) */
            ["@media (min-width: 768px)"]: { /* md: breakpoint */
              borderRadius: "0 530px 530px 0", /* Medium screens and above */
            },
          }}
>
  <div className="relative z-10 mt-2 sm:mt-0"> {/* Added mt-2 for mobile */}
    {/* Section 1 */}
    <div className="mb-3 sm:mb-4 md:mb-6">
      <h3 className="text-sm sm:text-base md:text-lg font-semibold pt-6 sm:pt-12 md:pt-16 pb-1">
      API & System Integration      </h3>
      <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
      Building secure APIs for seamless data exchange across business platforms.
      </p>
    </div>
    {/* Section 2 */}
    <div>
      <h3 className="text-sm sm:text-base md:text-lg font-semibold pb-1">
      Legacy System Modernization      </h3>
      <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
      Upgrading outdated systems with cloud-based and AI-powered technologies for improved performance.
      </p>
    </div>
  </div>
</ShineBorder>
      </div>
    </div>
  );
};

export default CustomSoftwareSolution;
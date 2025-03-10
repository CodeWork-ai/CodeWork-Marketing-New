import React from "react";
import ShineBorder from "../../../components/ui/shine-border";
import { IoIosCheckbox } from "react-icons/io";

const ItStaffAugmentation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-4xl w-full">
      <ShineBorder
  className="pt-8 sm:pt-12 mt-12 sm:mt-16 bg-black text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 
            w-full sm:w-[1200px] h-[500px] sm:h-[546px] rounded-tr-[100px] sm:rounded-tr-[530px] 
            rounded-br-[100px] sm:rounded-br-[530px] relative overflow-hidden ml-[-20px] sm:ml-[-320px]"
  color={["#1dcaf5", "#f04f57"]}
  borderRadius="0 100px 100px 0"  
  style={{
    borderRadius: "0 100px 100px 0", /* Mobile default (right-side rounding) */
    ["@media (min-width: 640px)"]: { /* sm: breakpoint */
      borderRadius: "0 530px 530px 0", /* Small screens and above */
    },
  }}
>
  {/* Title Section */}
  <div className="relative w-full mt-2 sm:mt-0"> {/* Added mt-2 for mobile */}
    <h2 className="text-white text-lg sm:text-2xl font-semibold flex items-center">
      <span
        className="inline-block w-2 h-8 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 
          mr-3 sm:mr-4 rounded-tr-md rounded-br-md"
      ></span>
Why IT Staff Augmentation is the Right Choice    </h2>
  </div>

  <div className="flex justify-start w-full">
    {/* New Section Matching Image Layout */}
    <div className="space-y-4 sm:space-y-6 mt-9 sm:mt-9">
      {[
        {
          title: "Access to Skilled IT Professionals",
          description: "A streamlined hiring process eliminates lengthy recruitment timelines.",
        },
        {
          title: "Cost-Effective Scaling",
          description: "Reducing hiring costs while maintaining project flexibility optimizes budget efficiency.",
        },
        {
          title: "Accelerated Project Delivery",
          description: "Expert professionals enhance development cycles and ensure timely execution.",
        },
        {
          title: "Seamless Integration",
          description: "Augmented teams align with existing workflows and tools for smooth collaboration.",
        },
        {
          title: "Full Transparency & Control",
          description: "Direct oversight of the extended workforce enhances accountability.",
        },
      ].map((item, index) => (
        <div key={index} className="flex items-start space-x-3 sm:space-x-4">
          <div className="w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center text-lg sm:text-xl">
            <IoIosCheckbox className="text-[#F62A5A] w-5 sm:w-6 h-5 sm:h-6" />
          </div>
          <div>
            <h3 className="text-sm sm:text-lg font-semibold text-[#1dcaf5]">
              {item.title}
            </h3>
            <p className="text-gray-300 text-xs sm:text-base">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</ShineBorder>
        
        {/* Title Section */}
<h2 className="text-white text-lg sm:text-2xl font-semibold pt-16 sm:pt-32 ml-12 sm:-ml-48 flex items-center justify-start">
  <span className="inline-block w-2 h-8 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-3 sm:mr-4 rounded-tr-md rounded-br-md"></span>
  Comprehensive IT Staff Augmentation Services
</h2>
        <ShineBorder
  className="w-full sm:w-[1200px] h-[480px] sm:h-[556px] bg-black relative ml-[20px] sm:ml-2 overflow-hidden flex flex-col mt-16 sm:mt-32 rounded-tl-[100px] sm:rounded-tl-[530px] rounded-bl-[100px] sm:rounded-bl-[530px]"
  color={["#1dcaf5", "#f04f57"]}
  borderRadius="100px 0 0 100px"  
  style={{
    borderRadius: "100px 0 0 100px", /* Mobile default (left-side rounding) */
    ["@media (min-width: 640px)"]: { /* sm: breakpoint */
      borderRadius: "530px 0 0 530px", /* Small screens and above */
    },
  }}
>
  <div className="pt-8 sm:pt-12 text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 w-full flex flex-col text-left">
    <div className="relative z-10 w-full mt-2 sm:mt-0"> {/* Added mt-2 for mobile */}
      {/* Section 1 */}
      <div className="mb-6">
        <h3 className="text-sm sm:text-lg font-semibold pt-12 sm:pt-16 pb-1">
        Dedicated IT Specialists
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
        Certified professionals in software development, cloud computing, AI/ML, cybersecurity, DevOps, and other domains strengthen technical expertise.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h3 className="text-sm sm:text-lg font-semibold pb-1">
        Short-Term & Long-Term Augmentation
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
        Flexible staffing solutions cater to both short-term project-based requirements and long-term business goals.
        </p>
      </div>
      {/* Section 3 */}
      <div className="mt-6">
        <h3 className="text-sm sm:text-lg font-semibold pb-1">
        Onshore, Offshore & Hybrid Models
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
        Tailored staffing models, including on-site, remote, and hybrid setups, enhance operational efficiency.
        </p>
      </div>
    </div>
  </div>
</ShineBorder>

<ShineBorder
  className="pt-8 sm:pt-12 mt-16 sm:mt-32 bg-black text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 w-full sm:w-[1200px] h-[350px] sm:h-[426px] 
          rounded-tr-[100px] sm:rounded-tr-[530px] rounded-br-[100px] sm:rounded-br-[530px] relative overflow-hidden ml-[-20px] sm:ml-[-320px]"
  color={["#1dcaf5", "#f04f57"]}
  borderRadius="0 100px 100px 0" 
  style={{
    borderRadius: "0 100px 100px 0", /* Mobile default (right-side rounding) */
    ["@media (min-width: 640px)"]: { /* sm: breakpoint */
      borderRadius: "0 530px 530px 0", /* Small screens and above */
    },
  }}
>
  <div className="relative z-10 mt-2 sm:mt-0"> {/* Added mt-2 for mobile */}
    {/* Section 1 */}
    <div className="mb-6">
      <h3 className="text-sm sm:text-lg font-semibold pt-12 sm:pt-16 pb-1">
      Rapid Team Expansion
      </h3>
      <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
      Quickly scaling up IT teams ensures projects remain on track without unnecessary delays.
      </p>
    </div>

    {/* Section 2 */}
    <div>
      <h3 className="text-sm sm:text-lg font-semibold pb-1">
      Full-Stack Development Teams
      </h3>
      <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
      Comprehensive tech teams include front-end and back-end developers, QA testers, UI/UX designers, and cloud engineers.
      </p>
    </div>
  </div>
</ShineBorder>

<ShineBorder
  className="w-full sm:w-[1200px] h-[350px] sm:h-[456px] bg-black relative ml-[20px] sm:ml-2 overflow-hidden flex flex-col mt-16 sm:mt-32 rounded-tl-[100px] sm:rounded-tl-[530px] rounded-bl-[100px] sm:rounded-bl-[530px]"
  color={["#1dcaf5", "#f04f57"]}
  borderRadius="100px 0 0 100px"  
  style={{
    borderRadius: "100px 0 0 100px", /* Mobile default (left-side rounding) */
    ["@media (min-width: 640px)"]: { /* sm: breakpoint */
      borderRadius: "530px 0 0 530px", /* Small screens and above */
    },
  }}
>
  <div className="pt-8 sm:pt-12 text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 w-full flex flex-col text-left">
    <div className="relative z-10 w-full mt-2 sm:mt-0"> {/* Added mt-2 for mobile */}
      {/* Section 1 */}
      <div className="mb-6">
        <h3 className="text-sm sm:text-lg font-semibold pt-12 sm:pt-16 pb-1">
        Cybersecurity & Compliance Experts
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
        Certified professionals specializing in data protection, threat mitigation, and regulatory compliance strengthen security frameworks.

        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h3 className="text-sm sm:text-lg font-semibold pb-1">
        AI, Data Science & Cloud Engineers
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
        Access to AI, machine learning, big data, and cloud computing specialists drives business innovation.
        </p>
      </div>
    </div>
  </div>
</ShineBorder>
        {/* Title Section */}
<h2 className="text-white text-lg sm:text-2xl font-semibold mb-16 sm:mb-20 pt-12 sm:pt-16 ml-12 sm:-ml-48 flex items-center justify-start">
  <span className="inline-block w-2 h-8 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-3 sm:mr-4 rounded-tr-md rounded-br-md"></span>
  Streamlined Mobile App Development Process
</h2>
      </div>
    </div>
  );
};

export default ItStaffAugmentation;
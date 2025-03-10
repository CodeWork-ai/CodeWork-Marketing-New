import ShineBorder from "@/components/ui/shine-border";
import React from "react";

const MobileAppDevelopment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Title Section */}
        <h2 className="text-white text-2xl font-semibold mb-6 md:-ml-48 flex items-center justify-start">
          <span className="inline-block w-2 h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-4 rounded-tr-md rounded-br-md"></span>
          Comprehensive Mobile App Development Services
        </h2>

        <ShineBorder
  className="pt-12 mt-16 bg-black text-white py-8 px-8 md:px-32 w-full md:w-[1200px] h-[360px] md:h-[350px] 
          rounded-tr-[100px] md:rounded-tr-[530px] rounded-br-[100px] md:rounded-br-[530px] relative overflow-hidden ml-[-40px] md:ml-[-320px]"
          color={["#1dcaf5", "#f04f57"]}
          borderRadius="0 100px 100px 0"  
          style={{
            borderRadius: "0 100px 100px 0", /* Mobile default (right-side rounding) */
            ["@media (min-width: 768px)"]: { /* md: breakpoint */
              borderRadius: "0 530px 530px 0", /* Medium screens and above */
            },
          }}
>
  <div className="relative z-10 mt-2 md:mt-0">
    {/* Section 1 */}
    <div className="mb-6">
      <h3 className="text-sm md:text-lg font-semibold pt-5 pb-1">
      Native App Development
      </h3>
      <div className="relative w-full md:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full md:w-[70%] mt-2 text-xs md:text-base">
      Custom-built iOS (Swift) and Android (Kotlin) applications ensure superior performance, security, and platform-specific optimization.
      </p>
    </div>
    {/* Section 2 */}
    <div>
      <h3 className="text-sm md:text-lg font-semibold pb-1">
      Cross-Platform App Development
      </h3>
      <div className="relative w-full md:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full md:w-[70%] mt-2 text-xs md:text-base">
      Leverage Flutter and React Native to develop high-quality apps that function across multiple devices while reducing costs and time to market.
      </p>
    </div>
  </div>
</ShineBorder>
<ShineBorder
  className="w-full md:w-[1200px] h-[510px] md:h-[566px] bg-black relative ml-[30px] md:ml-2 overflow-hidden flex flex-col mt-32 rounded-tl-[100px] md:rounded-tl-[530px] rounded-bl-[100px] md:rounded-bl-[530px]"
  color={["#1dcaf5", "#f04f57"]}
  style={{
    borderRadius: "100px 0 0 100px", /* Mobile default (left-side rounding) */
    ["@media (min-width: 768px)"]: { /* md: breakpoint */
      borderRadius: "530px 0 0 530px", /* Medium screens and above */
    },
  }}
>
  <div className="pt-2 sm:pt-9 text-white py-8 px-8 md:px-32 w-full flex flex-col text-left">
    <div className="relative z-10 w-full mt-2 md:mt-0">
      {/* Section 1 */}
      <div className="mb-6">
        <h3 className="text-sm md:text-lg font-semibold pt-16 pb-1">
        Enterprise Mobile Applications
        </h3>
        <div className="relative w-full md:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full md:w-[70%] mt-2 text-xs md:text-base">
        Feature-rich enterprise solutions integrate with CRM, ERP, and cloud-based systems, streamlining business processes and enhancing internal communication.
        </p>
      </div>
      {/* Section 2 */}
      <div>
        <h3 className="text-sm md:text-lg font-semibold pb-1">
        AI-Powered Mobile Apps
        </h3>
        <div className="relative w-full md:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full md:w-[70%] mt-2 text-xs md:text-base">
        Incorporate machine learning, chatbots, predictive analytics, and NLP to create intelligent applications that deliver data-driven insights and automation.
        </p>
      </div>
      {/* Section 3 */}
      <div>
        <h3 className="text-sm md:text-lg font-semibold pt-8 pb-1">
        Mobile UI/UX Design
        </h3>
        <div className="relative w-full md:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full md:w-[70%] mt-2 text-xs md:text-base">
        A user-centric design approach ensures intuitive navigation, high engagement, and optimal user retention across all digital platforms.        </p>
      </div>
    </div>
  </div>
</ShineBorder>
<ShineBorder
  className="pt-12 mt-16 bg-black text-white py-8 px-8 md:px-32 w-full md:w-[1200px] h-[350px] md:h-[326px] 
          rounded-tr-[100px] md:rounded-tr-[530px] rounded-br-[100px] md:rounded-br-[530px] relative overflow-hidden ml-[-40px] md:ml-[-320px]"
  color={["#1dcaf5", "#f04f57"]}
  style={{
    borderRadius: "0 100px 100px 0", /* Mobile default (right-side rounding) */
    ["@media (min-width: 768px)"]: { /* md: breakpoint */
      borderRadius: "0 530px 530px 0", /* Medium screens and above */
    },
  }}
>
  <div className="relative z-10 mt-2 md:mt-0">
    {/* Section 1 */}
    <div className="mb-6">
      <h3 className="text-sm md:text-lg font-semibold pt-4 pb-1">
      Progressive Web Apps (PWAs)
      </h3>
      <div className="relative w-full md:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full md:w-[70%] mt-2 text-xs md:text-base">
      Responsive, fast-loading PWAs offer an app-like experience directly from the browser, with offline capabilities and push notifications for enhanced accessibility.
      </p>
    </div>
    {/* Section 2 */}
    <div>
      <h3 className="text-sm md:text-lg font-semibold pb-1">
      App Maintenance & Optimization
      </h3>
      <div className="relative w-full md:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full md:w-[70%] mt-2 text-xs md:text-base">
      Regular updates, security enhancements, and performance optimizations ensure the long-term stability and functionality of mobile applications.
      </p>
    </div>
  </div>
</ShineBorder>
        {/* Title Section */}
        <h2 className="text-white text-2xl font-semibold mb-20  mt-8 pt-10 md:-ml-48 flex items-center justify-start">
          <span className="inline-block w-2 h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-4 rounded-tr-md rounded-br-md"></span>
          Streamlined Mobile App Development Process
        </h2>
      </div>  
    </div>
  );
};

export default MobileAppDevelopment;
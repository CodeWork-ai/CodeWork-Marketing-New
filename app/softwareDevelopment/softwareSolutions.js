import ShineBorder from "@/components/ui/shine-border";
import React from "react";

const SoftwareSolution = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-4xl w-full">
        {/* Title Section */}
<h2 className="text-white text-lg sm:text-lg md:text-2xl font-semibold mb-4 sm:mb-6 ml-4 sm:-ml-24 md:-ml-48 flex items-center justify-start">
  <span className="inline-block w-2 h-9 sm:w-2 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-2 sm:mr-4 rounded-tr-md rounded-br-md"></span>
  Comprehensive Software Development Solutions
</h2>

<ShineBorder
  className="pt-6 sm:pt-10 mt-8 sm:mt-16 bg-black text-white py-6 sm:py-8 px-4 sm:px-8 md:px-32 w-full sm:w-[800px] md:w-[1200px] h-[350px] sm:h-[360px] md:h-[356px] 
          rounded-tr-[100px] sm:rounded-tr-[400px] md:rounded-tr-[530px] rounded-br-[100px] sm:rounded-br-[400px] md:rounded-br-[530px] relative overflow-hidden ml-[-20px] sm:ml-[-200px] md:ml-[-320px]"
          color={["#1dcaf5", "#f04f57"]}
          borderRadius="0 100px 100px 0"  
          style={{
            borderRadius: "0 100px 100px 0", /* Mobile default (right-side rounding) */
            ["@media (min-width: 768px)"]: { /* md: breakpoint */
              borderRadius: "0 530px 530px 0", /* Medium screens and above */
            },
          }}
>
  <div className="relative z-10 mt-2 sm:mt-0">
    {/* Section 1 */}
    <div className="mb-4 sm:mb-6">
      <h3 className="text-sm sm:text-base font-semibold pt-6 sm:pt-12 pb-1">
      Custom Software Development

      </h3>
      <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-sm">
      Fully tailored software solutions are designed to align with business goals, streamline operations, and enhance overall efficiency. Scalable architectures ensure adaptability as businesses grow, incorporating seamless system integration for optimized performance.
      </p>
    </div>
    {/* Section 2 */}
    <div>
      <h3 className="text-sm sm:text-base font-semibold pb-1">
      Web Application Development      </h3>
      <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-sm">
      Secure and high-performance web applications are developed using modern frameworks like React, Angular, and Vue.js. Whether creating interactive web platforms or enterprise-grade solutions, web development services focus on delivering intuitive user experiences and seamless functionality.
      </p>
    </div>
  </div>
</ShineBorder>

<ShineBorder
  className="w-full sm:w-[800px] md:w-[1200px] h-[350px] sm:h-[360px] md:h-[376px] bg-black relative ml-[20px] sm:ml-2 overflow-hidden flex flex-col mt-8 sm:mt-16 md:mt-32 rounded-tl-[100px] sm:rounded-tl-[400px] md:rounded-tl-[530px] rounded-bl-[100px] sm:rounded-bl-[400px] md:rounded-bl-[530px]"
  color={["#1dcaf5", "#f04f57"]}
  style={{
    borderRadius: "100px 0 0 100px", /* Mobile default (left-side rounding) */
    ["@media (min-width: 640px)"]: { /* sm: breakpoint */
      borderRadius: "400px 0 0 400px", /* Small screens */
    },
    ["@media (min-width: 768px)"]: { /* md: breakpoint */
      borderRadius: "530px 0 0 530px", /* Medium screens and above */
    },
  }}
>
  <div className="pt-6 sm:pt-10 text-white py-6 sm:py-8 px-4 sm:px-8 md:px-32 w-full flex flex-col text-left">
    <div className="relative z-10 w-full mt-2 sm:mt-0"> {/* Added mt-2 for mobile */}
      {/* Section 1 */}
      <div className="mb-4 sm:mb-6">
        <h3 className="text-sm sm:text-base font-semibold pt-6 sm:pt-12 pb-1">
        Mobile App Development
        </h3>
        <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-sm">
        Native and cross-platform mobile applications for iOS and Android ensure optimal performance, engaging design, and smooth user interaction. Technologies such as Flutter, React Native, Swift, and Kotlin power mobile app development to enhance accessibility and usability.
        </p>
      </div>
      {/* Section 2 */}
      <div>
        <h3 className="text-sm sm:text-base font-semibold pb-1">
        AI-Driven Software Solutions
        </h3>
        <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-sm">
        Integrating artificial intelligence enhances automation, data analysis, and user interactions. Machine learning, natural language processing, and predictive analytics drive smarter decision-making, improving operational efficiency and customer experience. </p>
      </div>
    </div>
  </div>
</ShineBorder>
<ShineBorder
  className="pt-6 sm:pt-10 mt-8 sm:mt-16 md:mt-32 bg-black text-white py-6 sm:py-8 px-4 sm:px-8 md:px-32 w-full sm:w-[800px] md:w-[1200px] h-[450px] sm:h-[400px] md:h-[456px] 
          rounded-tr-[100px] sm:rounded-tr-[400px] md:rounded-tr-[530px] rounded-br-[100px] sm:rounded-br-[400px] md:rounded-br-[530px] relative overflow-hidden ml-[-20px] sm:ml-[-200px] md:ml-[-320px] mb-8 sm:mb-12"
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
    <div className="mb-4 sm:mb-6">
      <h3 className="text-sm sm:text-base font-semibold pt-6 sm:pt-12 pb-1">
      Cloud-Based Solutions      </h3>
      <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-sm">
      Cloud-native applications maximize scalability, security, and efficiency. With expertise in AWS, Azure, and Google Cloud, cloud-based solutions ensure high availability, secure data storage, and optimal performance for enterprises and startups.
      </p>
    </div>
    {/* Section 2 */}
    <div>
      <h3 className="text-sm sm:text-base font-semibold pb-1">
      API Development & System Integration
      </h3>
      <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-sm">
      Robust API development and seamless system integration enable businesses to connect multiple platforms and enhance functionality. Secure APIs facilitate efficient data exchange and improve interoperability across software ecosystems.
      </p>
    </div>
    {/* Section 3 */}
    <div>
      <h3 className="text-sm sm:text-base font-semibold pt-2 sm:pt-4 pb-1">
      Software Modernization & Maintenance
      </h3>
      <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-sm">
      Legacy systems are upgraded with modern technologies to enhance performance, security, and user experience. Continuous software maintenance and support ensure reliability, enabling businesses to stay competitive in the ever-evolving digital landscape.
      </p>
    </div>
  </div>
</ShineBorder>
         {/* Title Section */}
<h2 className="text-white text-lg sm:text-lg md:text-2xl font-semibold mb-4 sm:mb-6 ml-4 sm:-ml-24 md:-ml-48 flex items-center justify-start">
  <span className="inline-block w-2 h-9 sm:w-2 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-2 sm:mr-4 rounded-tr-md rounded-br-md"></span>
  Agile Software Development Process
</h2>
      </div>
    </div>
  );
};

export default SoftwareSolution;
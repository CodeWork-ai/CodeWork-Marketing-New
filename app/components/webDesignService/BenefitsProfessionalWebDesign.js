import React from "react";
import ShineBorder from "../../../components/ui/shine-border";
import { IoIosCheckbox } from "react-icons/io";

const BenefitsProfessionalWebDesign = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-4xl w-full">
      <ShineBorder
  className="pt-8 sm:pt-12 mt-12 sm:mt-16 bg-black text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 
            w-full sm:w-[1200px] h-[570px] sm:h-[556px] rounded-tr-[100px] sm:rounded-tr-[430px] 
            rounded-br-[100px] sm:rounded-br-[430px] relative overflow-hidden ml-[-20px] sm:ml-[-320px]"
  color={["#1dcaf5", "#f04f57"]}
  borderRadius="0 100px 100px 0" 
  style={{
    borderRadius: "0 100px 100px 0", /* Mobile default (right-side rounding) */
    ["@media (min-width: 640px)"]: { /* sm: breakpoint */
      borderRadius: "0 430px 430px 0", /* Small screens and above */
    },
  }}
>
  {/* Title Section with slightly more top margin on mobile */}
  <div className="relative w-full mt-12 sm:mt-0">
    <h2 className="text-white text-lg sm:text-2xl font-semibold flex items-center">
      <span
        className="inline-block w-2 h-8 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 
                  mr-3 sm:mr-4 rounded-tr-md rounded-br-md"
      ></span>
     Benefits of Professional Web Design

    </h2>
  </div>
  <p className="text-gray-300 -ml-0 sm:-ml-20 md:-ml-40 w-full sm:w-[70%] mt-1 sm:mt-2 text-xs sm:text-base">
  A well-designed website serves as the first impression of a brand, influencing customer trust and engagement. Investing in professional web design offers
  </p>
  <div className="flex justify-start w-full">
    {/* New Section Matching Image Layout */}
    <div className="space-y-4 sm:space-y-6 mt-5 sm:mt-5">
      {[
        {
          title: "Modern & Aesthetic Layouts",
          description:
            "Sleek, visually appealing designs aligned with brand identity.",
        },
        {
          title: "Responsive & Mobile-Optimized Experience",
          description:
            "Seamless functionality across all devices for improved accessibility.",
        },
        {
          title: "SEO-Optimized Structure",
          description:
            "Enhanced search engine rankings and online visibility.",
        },
        {
          title: "Fast & Secure Performance",
          description: "Optimized speed, security, and reliability.",
        },
        {
          title: "User-Centered Interface",
          description:
            "Intuitive navigation and engaging elements to improve conversions.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-start space-x-3 sm:space-x-4"  
        >
          <div className="w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center text-lg sm:text-xl">
            <IoIosCheckbox className="text-[#F62A5A] w-5 sm:w-6 h-5 sm:h-6" />
          </div>
          <div>
            <h3 className="text-sm sm:text-lg font-semibold text-[#1dcaf5]">
              {item.title}
            </h3>
            <p className="text-gray-300 text-xs sm:text-base">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</ShineBorder>
        {/* Title Section */}
        <h2 className="text-white text-xl sm:text-2xl font-semibold pt-12 sm:pt-32 -ml-0 sm:-ml-48 flex items-center justify-start">
          <span className="inline-block w-2 h-8 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-3 sm:mr-4 rounded-tr-md rounded-br-md"></span>
          Comprehensive Web Design Services 
        </h2>
        <ShineBorder
  className="w-full sm:w-[1200px] h-[550px] sm:h-[556px] bg-black relative ml-[30px] sm:ml-2 overflow-hidden flex flex-col mt-12 sm:mt-32 rounded-tl-[100px] sm:rounded-tl-[530px] rounded-bl-[100px] sm:rounded-bl-[530px]"
  color={["#1dcaf5", "#f04f57"]}
  borderRadius="100px 0 0 100px"  
  style={{
    borderRadius: "100px 0 0 100px", /* Mobile default (left-side rounding) */
    ["@media (min-width: 640px)"]: { /* sm: breakpoint */
      borderRadius: "530px 0 0 530px", /* Small screens and above */
    },
  }}
>
  <div className="pt-8 sm:pt-12 text-white py-6 sm:py-8 px-4 sm:px-32 w-full flex flex-col text-left">
    <div className="relative z-10 w-full mt-2 sm:mt-0">
      {/* Section 1 */}
      <div className="mb-6">
        <h3 className="text-base sm:text-lg font-semibold pt-8 sm:pt-16 pb-1">
          UI/UX Design
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-sm sm:text-base">
          A strong focus on user experience (UX) and user interface (UI)
          design ensures intuitive, engaging, and high-converting
          websites.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold pb-1">
          Custom Website Design
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-sm sm:text-base">
          Tailored website solutions cater to diverse industries,
          maintaining brand consistency and business goals.
        </p>
      </div>
      {/* Section 3 */}
      <div>
        <h3 className="text-base sm:text-lg mt-5 font-semibold pb-1">
          E-Commerce Website Development
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-sm sm:text-base">
          Conversion-driven e-commerce platforms integrate secure
          payment gateways, user-friendly navigation, and dynamic
          product displays for seamless shopping experiences.
        </p>
      </div>
    </div>
  </div>
</ShineBorder>

<ShineBorder
  className="pt-8 sm:pt-12 mt-12 sm:mt-32 bg-black text-white py-6 sm:py-8 px-4 sm:px-32 w-full sm:w-[1200px] h-[350px] sm:h-[456px] 
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
      <h3 className="text-base sm:text-lg font-semibold pt-8 sm:pt-16 pb-1">
        Responsive Web Design
      </h3>
      <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-sm sm:text-base">
        Optimized layouts guarantee flawless performance on desktops, tablets, and mobile devices, 
        ensuring a uniform browsing experience.
      </p>
    </div>

    {/* Section 2 */}
    <div>
      <h3 className="text-base sm:text-lg font-semibold pb-1">
        Landing Page & Conversion Optimization
      </h3>
      <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-sm sm:text-base">
        High-performing landing pages are crafted to enhance lead generation, sales, and overall engagement.
      </p>
    </div>
  </div>
</ShineBorder>

<ShineBorder
  className="w-full sm:w-[1200px] h-[380px] sm:h-[456px] bg-black relative ml-[20px] sm:ml-2 overflow-hidden flex flex-col mt-12 sm:mt-32 rounded-tl-[100px] sm:rounded-tl-[530px] rounded-bl-[100px] sm:rounded-bl-[530px]"
  color={["#1dcaf5", "#f04f57"]}
  borderRadius="100px 0 0 100px"  
  style={{
    borderRadius: "100px 0 0 100px", /* Mobile default (left-side rounding) */
    ["@media (min-width: 640px)"]: { /* sm: breakpoint */
      borderRadius: "530px 0 0 530px", /* Small screens and above */
    },
  }}
>
  <div className="pt-8 sm:pt-12 text-white py-6 sm:py-8 px-4 sm:px-32 w-full flex flex-col text-left">
    <div className="relative z-10 w-full mt-2 sm:mt-0"> {/* Added mt-2 for mobile */}
      {/* Section 1 */}
      <div className="mb-6">
        <h3 className="text-base sm:text-lg font-semibold pt-8 sm:pt-16 pb-1">
          Website Redesign & Revamp
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-sm sm:text-base">
          A fresh and modern approach transforms outdated websites, improving aesthetics, functionality, and performance.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold pb-1">
          Web Application Interface Design
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-sm sm:text-base">
          For SaaS platforms, dashboards, and interactive applications, scalable and intuitive interface designs 
          provide a seamless user experience.
        </p>
      </div>
    </div>
  </div>
</ShineBorder>

        {/* Title Section */}
        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-12 sm:mb-20 pt-12 sm:pt-16 -ml-0 sm:-ml-48 flex items-center justify-start">
          <span className="inline-block w-2 h-8 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-3 sm:mr-4 rounded-tr-md rounded-br-md"></span>
          Strategic Web Design Process
        </h2>
      </div>
    </div>
  );
};

export default BenefitsProfessionalWebDesign;

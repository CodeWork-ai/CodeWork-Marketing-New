import React from "react";
import ShineBorder from "../../../components/ui/shine-border";
import { IoIosCheckbox } from "react-icons/io";

const DevopsSolutions = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-4xl w-full">
        {/* Black Container 1 with ShineBorder */}
       <ShineBorder
         className="pt-8 sm:pt-12 mt-12 sm:mt-16 bg-black text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 
                   w-full sm:w-[1200px] h-[480px] sm:h-[546px] rounded-tr-[100px] sm:rounded-tr-[530px] 
                   rounded-br-[100px] sm:rounded-br-[530px] relative overflow-hidden ml-[-20px] sm:ml-[-320px]"
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
           <h2 className="text-white text-lg sm:text-2xl font-semibold flex items-center">
             <span
               className="inline-block w-2 h-8 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 
                 mr-3 sm:mr-4 rounded-tr-md rounded-br-md"
             ></span>
           Why Cybersecurity is Essential?
           </h2>
         </div>
       
         <div className="flex justify-start w-full">
           {/* New Section Matching Image Layout */}
           <div className="space-y-4 sm:space-y-6 mt-9 sm:mt-9">
             {[
               {
                 title: "Prevent Data Breaches",
                 description: "Keep sensitive business and customer data secure.",
               },
               {
                 title: " Reduce Financial Losses",
                 description: "Minimize the impact of cyber threats and system downtime.",
               },
               {
                 title: "Ensure Regulatory Compliance",
                 description: "Adhere to industry standards like GDPR, HIPAA, SOC 2, and ISO 27001.",
               },
               {
                 title: "Enhance Business Reputation",
                 description: "Build trust with strong security measures.",
               },
               {
                 title: "Stay Ahead of Cyber Threats",
                 description: "Defend against hackers, malware, ransomware, and phishing attacks.",
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
<h2 className="text-white text-lg sm:text-2xl font-semibold pt-16 sm:pt-32 ml-12 sm:ml-0 
  flex items-center justify-start">
  <span className="inline-block w-2 h-8 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 
    mr-3 sm:mr-4 rounded-tr-md rounded-br-md"></span>
Comprehensive Cybersecurity Services</h2>

       {/* Black Container 2 with ShineBorder */}
<ShineBorder
  className="w-full sm:w-[1200px] h-[380px] sm:h-[376px] bg-black relative ml-[20px] sm:ml-2 overflow-hidden 
    flex flex-col mt-16 sm:mt-32 rounded-tl-[100px] sm:rounded-tl-[530px] 
    rounded-bl-[100px] sm:rounded-bl-[530px]"
  color={["#1dcaf5", "#f04f57"]}
  style={{
    borderRadius: "100px 0 0 100px", /* Mobile default (left-side rounding) */
    ["@media (min-width: 640px)"]: { /* sm: breakpoint */
      borderRadius: "530px 0 0 530px", /* Small screens and above */
    },
  }}
>
  <div className="pt-8 sm:pt-12 text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 w-full 
    flex flex-col text-left">
    <div className="relative z-10 w-full">
      {/* Section 1 */}
      <div className="mb-6">
        <h3 className="text-sm sm:text-lg font-semibold pt-12 sm:pt-9 pb-1">
        Cyber Risk Assessment & Security Audits
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
        Identify vulnerabilities and strengthen cybersecurity strategies with a detailed security assessment.
        </p>
      </div>
      {/* Section 2 */}
      <div>
        <h3 className="text-sm sm:text-lg font-semibold pb-1">
        Network Security & Firewall Protection
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
        Protect business networks with next-gen firewalls, intrusion detection systems, and advanced threat prevention.
        </p>
      </div>
    </div>
  </div>
</ShineBorder>

        {/* Black Container 3 with ShineBorder */}
<ShineBorder
  className="pt-8 sm:pt-12 mt-16 sm:mt-32 bg-black text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 
    w-full sm:w-[1200px] h-[300px] sm:h-[356px] rounded-tr-[100px] sm:rounded-tr-[530px] 
    rounded-br-[100px] sm:rounded-br-[530px] relative overflow-hidden ml-[-20px] sm:ml-[-320px]"
    color={["#1dcaf5", "#f04f57"]}
  borderRadius="0 100px 100px 0"  
  style={{
    borderRadius: "0 100px 100px 0", /* Mobile default (right-side rounding) */
    ["@media (min-width: 768px)"]: { /* md: breakpoint */
      borderRadius: "0 530px 530px 0", /* Medium screens and above */
    },
  }}
>
  <div className="relative z-10">
    {/* Section 1 */}
    <div className="mb-6">
      <h3 className="text-sm sm:text-lg font-semibold pt-12 sm:pt-12 pb-1">
        Cloud Security Solutions
      </h3>
      <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
        Secure cloud environments using data encryption, access control, and continuous cloud security monitoring.
      </p>
    </div>
    {/* Section 2 */}
    <div>
      <h3 className="text-sm sm:text-lg font-semibold pb-1">
        Endpoint Security & Threat Detection
      </h3>
      <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
        Safeguard devices from malware, phishing, and cyber threats with real-time detection.
      </p>
    </div>
  </div>
</ShineBorder>

       {/* Black Container 4 with ShineBorder */}
<ShineBorder
  className="w-full sm:w-[1200px] h-[300px] sm:h-[356px] bg-black relative ml-[20px] sm:ml-2 overflow-hidden 
    flex flex-col mt-16 sm:mt-32 rounded-tl-[100px] sm:rounded-tl-[530px] 
    rounded-bl-[100px] sm:rounded-bl-[530px]"
  color={["#1dcaf5", "#f04f57"]}
  style={{
    borderRadius: "100px 0 0 100px", /* Mobile default (left-side rounding) */
    ["@media (min-width: 640px)"]: { /* sm: breakpoint */
      borderRadius: "530px 0 0 530px", /* Small screens and above */
    },
  }}
>
  <div className="pt-2 sm:pt-2 text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 w-full 
    flex flex-col text-left">
    <div className="relative z-10 w-full">
      {/* Section 1 */}
      <div className="mb-6">
        <h3 className="text-sm sm:text-lg font-semibold pt-12 sm:pt-12 pb-1">
          Penetration Testing & Ethical Hacking
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
          Conduct real-world cyberattack simulations to uncover vulnerabilities and strengthen security measures.
        </p>
      </div>
      {/* Section 2 */}
      <div>
        <h3 className="text-sm sm:text-lg font-semibold pb-1">
          Data Encryption & Secure Access Management
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
          Ensure only authorized personnel access sensitive data, applications, and IT infrastructure.
        </p>
      </div>
    </div>
  </div>
</ShineBorder>
       {/* Black Container 3 with ShineBorder (Repeated) */}
<ShineBorder
  className="pt-6 sm:pt-6 mt-16 sm:mt-32 bg-black text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 
    w-full sm:w-[1200px] h-[300px] sm:h-[326px] rounded-tr-[100px] sm:rounded-tr-[530px] 
    rounded-br-[100px] sm:rounded-br-[530px] relative overflow-hidden ml-[-20px] sm:ml-[-320px]"
    color={["#1dcaf5", "#f04f57"]}
    borderRadius="0 100px 100px 0"  
    style={{
      borderRadius: "0 100px 100px 0", /* Mobile default (right-side rounding) */
      ["@media (min-width: 768px)"]: { /* md: breakpoint */
        borderRadius: "0 530px 530px 0", /* Medium screens and above */
      },
    }}
>
  <div className="relative z-10">
    {/* Section 1 */}
    <div className="mb-6">
      <h3 className="text-sm sm:text-lg font-semibold pt-6 sm:pt-8 pb-1">
        Ransomware Protection & Incident Response
      </h3>
      <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
        Detect ransomware threats early and implement incident response strategies to mitigate risks.
      </p>
    </div>
    {/* Section 2 */}
    <div>
      <h3 className="text-sm sm:text-lg font-semibold pb-1">
        Compliance & Regulatory Advisory
      </h3>
      <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
        Stay aligned with data protection laws and avoid penalties with expert compliance solutions.
      </p>
    </div>
  </div>
</ShineBorder>

        {/* Black Container 4 with ShineBorder (Repeated) */}
<ShineBorder
  className="w-full sm:w-[1200px] h-[310px] sm:h-[330px] bg-black relative ml-[20px] sm:ml-2 overflow-hidden 
    flex flex-col mt-14 sm:mt-32 rounded-tl-[100px] sm:rounded-tl-[530px] 
    rounded-bl-[100px] sm:rounded-bl-[530px]"
  color={["#1dcaf5", "#f04f57"]}
  style={{
    borderRadius: "100px 0 0 100px", /* Mobile default (left-side rounding) */
    ["@media (min-width: 640px)"]: { /* sm: breakpoint */
      borderRadius: "530px 0 0 530px", /* Small screens and above */
    },
  }}
>
  <div className="pt-4 sm:pt-4 text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 w-full 
    flex flex-col text-left">
    <div className="relative z-10 w-full">
      {/* Section 1 */}
      <div className="mb-6">
        <h3 className="text-sm sm:text-lg font-semibold pt-12 sm:pt-11 pb-1">
          Security Awareness Training
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
          Educate employees on cybersecurity best practices to reduce risks caused by human errors.
        </p>
      </div>
      {/* Section 2 */}
      <div>
        <h3 className="text-sm sm:text-lg font-semibold pb-1">
          24/7 Security Monitoring & Threat Intelligence
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
          Continuous monitoring and real-time threat intelligence for proactive cyber defense.
        </p>
      </div>
    </div>
  </div>
</ShineBorder>

        {/* Title Section */}
<h2 className="text-white text-lg sm:text-2xl font-semibold mb-16 sm:mb-20 pt-12 sm:pt-16 
  ml-12 sm:-ml-48 flex items-center justify-start">
  <span className="inline-block w-2 h-8 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 
    mr-3 sm:mr-4 rounded-tr-md rounded-br-md"></span>
  Strategic Cybersecurity Approach
</h2>
      </div>
    </div>
  );
};

export default DevopsSolutions;
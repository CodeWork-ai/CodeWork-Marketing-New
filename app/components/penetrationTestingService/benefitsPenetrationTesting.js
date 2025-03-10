import React from "react";
import ShineBorder from "../../../components/ui/shine-border";
import { IoIosCheckbox } from "react-icons/io";
const BenefitsPenetrationTesting = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-4xl">
        {/* Black Container 1 with ShineBorder */}
        <ShineBorder
          className="pt-8 sm:pt-12 mt-8 sm:mt-16 bg-black text-white py-6 sm:py-8 px-4 sm:px-32 w-full sm:w-[1200px] h-[250px] 
    sm:h-[286px] rounded-tr-[100px] sm:rounded-tr-[530px] rounded-br-[100px] sm:rounded-br-[530px] relative overflow-hidden 
    ml-[-20px] sm:ml-[-320px]"
          color={["#1dcaf5", "#f04f57"]}
          style={{
            borderRadius:
              "0 100px 100px 0" /* Mobile default (right-side rounding) */,
            ["@media (min-width: 640px)"]: {
              /* sm: breakpoint */  
              borderRadius: "0 530px 530px 0" /* Small screens and above */,
            },
          }}
        >
          <h2 className="text-white text-lg sm:text-2xl font-semibold -ml-16 sm:-ml-96 pt-4 flex items-center justify-start">
  <span className="inline-block w-2 h-8 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-3 sm:mr-4 rounded-tr-md rounded-br-md"></span>
  What is Penetration Testing?
</h2>
          <div className="mb-6">
            <div className="relative w-full sm:w-[450px] overflow-hidden">
              <div
                className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
              ></div>
            </div>
            <p className="text-gray-300 w-full sm:w-[70%] pl-0 sm:pl-12 pt-6 sm:pt-8 mt-2 text-xs sm:text-base">
              Penetration testing, or ethical hacking, involves controlled
              cybersecurity assessments designed to identify and remediate
              security gaps. By simulating real-world threats, organizations can
              prevent cyberattacks and ensure compliance with industry standards
              such as GDPR, HIPAA, ISO 27001, and SOC 2.
            </p>
          </div>
        </ShineBorder>

       {/* Black Container 2 with ShineBorder */}
<ShineBorder
  className="w-full sm:w-[1200px] h-[450px] sm:h-[556px] bg-black relative ml-[20px] sm:ml-2 overflow-hidden 
    flex flex-col mt-8 sm:mt-32 rounded-tl-[100px] sm:rounded-tl-[530px] rounded-bl-[100px] sm:rounded-bl-[530px]"
  color={["#1dcaf5", "#f04f57"]}
  style={{
    borderRadius: "100px 0 0 100px", /* Mobile default (left-side rounding) */
    ["@media (min-width: 640px)"]: { /* sm: breakpoint */
      borderRadius: "530px 0 0 530px", /* Small screens and above */
    },
  }}
>
  <div className="relative pt-8 sm:pt-14 w-full">
    <h2 className="absolute left-0 sm:left-[-10px] text-white text-lg sm:text-2xl pl-4 sm:pl-72 font-semibold flex items-center">
      <span className="inline-block w-2 h-8 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-3 sm:mr-4 rounded-tr-md rounded-br-md"></span>
      Benefits of Penetration Testing
    </h2>
  </div>
  <div className="flex justify-start pl-4 sm:pl-80 pt-16 sm:pt-20 w-full">
    <div className="space-y-4 sm:space-y-6">
      {[
        {
          title: "Detect Security Weaknesses",
          description: "Uncover network, application, and cloud infrastructure vulnerabilities.",
        },
        {
          title: "SPrevent Cyberattacks",
          description: "Address security flaws before they lead to data breaches.",
        },
        {
          title: "Ensure Regulatory Compliance",
          description: "Meet security and data protection requirements.",
        },
        {
          title: "Enhance Incident Response",
          description: "Strengthen detection and response capabilities.",
        },
        {
          title: "Protect Brand Reputation",
          description: "Prevent costly security incidents that could impact customer trust.",
        },
      ].map((item, index) => (
        <div key={index} className="flex items-start space-x-3 sm:space-x-4">
          <div className="w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center">
            <IoIosCheckbox className="text-[#f04f57] w-5 sm:w-6 h-5 sm:h-6" />
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
        <div className="relative pt-16 sm:pt-32 w-full">
          <h2 className="absolute text-white text-lg sm:text-2xl -ml-0 sm:-ml-52 font-semibold flex items-center">
            <span className="inline-block w-2 h-8 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-3 sm:mr-4 rounded-tr-md rounded-br-md"></span>
            Comprehensive Penetration Testing Services
          </h2>
        </div>

        {/* Black Container 3 with ShineBorder */}
        <ShineBorder
          className="pt-8 sm:pt-12 mt-24 sm:mt-32 bg-black text-white py-6 sm:py-8 px-4 sm:px-32 w-full sm:w-[1200px] h-[400px] 
    sm:h-[516px] rounded-tr-[100px] sm:rounded-tr-[530px] rounded-br-[100px] sm:rounded-br-[530px] relative overflow-hidden 
    ml-[-20px] sm:ml-[-320px]"
          color={["#1dcaf5", "#f04f57"]}
          borderRadius="0 100px 100px 0"
          style={{
            borderRadius:
              "0 100px 100px 0" /* Mobile default (right-side rounding) */,
            ["@media (min-width: 768px)"]: {
              /* md: breakpoint */
              borderRadius: "0 530px 530px 0" /* Medium screens and above */,
            },
          }}
        >
          <div className="relative z-10">
            <div className="mb-6">
              <h3 className="text-sm sm:text-lg font-semibold pt-12 sm:pt-16 pb-1">
                Network Penetration Testing
              </h3>
              <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
                <div
                  className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
                ></div>
              </div>
              <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
                Internal and external networks, firewalls, and servers undergo
                rigorous security assessments to detect unauthorized access
                risks.
              </p>
            </div>
            <div>
              <h3 className="text-sm sm:text-lg font-semibold pb-1">
                Web Application Penetration Testing
              </h3>
              <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
                <div
                  className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
                ></div>
              </div>
              <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
                Web applications are tested for vulnerabilities such as SQL
                injection, cross-site scripting (XSS), and authentication flaws,
                ensuring robust security.
              </p>
            </div>
            <div>
              <h3 className="text-sm sm:text-lg pt-8 font-semibold pb-1">
                Cloud Security Testing
              </h3>
              <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
                <div
                  className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
                ></div>
              </div>
              <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
                Security evaluations for AWS, Azure, Google Cloud, and hybrid
                environments help identify misconfigurations and potential
                threats.
              </p>
            </div>
          </div>
        </ShineBorder>
        {/* Black Container 4 with Shine godzBorder */}
        <ShineBorder
          className="w-full sm:w-[1200px] h-[350px] sm:h-[410px] bg-black relative ml-[20px] sm:ml-2 overflow-hidden 
    flex flex-col mt-8 sm:mt-32 rounded-tl-[100px] sm:rounded-tl-[530px] rounded-bl-[100px] sm:rounded-bl-[530px]"
          color={["#1dcaf5", "#f04f57"]}
          style={{
            borderRadius:
              "100px 0 0 100px" /* Mobile default (left-side rounding) */,
            ["@media (min-width: 640px)"]: {
              /* sm: breakpoint */
              borderRadius: "530px 0 0 530px" /* Small screens and above */,
            },
          }}
        >
          <div className="pt-8 sm:pt-12 text-white py-6 sm:py-8 px-4 sm:px-32 w-full flex flex-col text-left">
            <div className="relative z-10 w-full">
              <div className="mb-6">
                <h3 className="text-sm sm:text-lg font-semibold pt-12 sm:pt-16 pb-1">
                  API & Mobile App Security Testing
                </h3>
                <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
                  <div
                    className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
                      animate-[shine_2s_linear_infinite]"
                  ></div>
                </div>
                <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
                  Mobile applications and APIs are analyzed to detect security
                  weaknesses that may expose sensitive data.
                </p>
              </div>
              <div>
                <h3 className="text-sm sm:text-lg font-semibold pb-1">
                  Wireless Network Security Testing
                </h3>
                <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
                  <div
                    className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
                      animate-[shine_2s_linear_infinite]"
                  ></div>
                </div>
                <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
                  Wi-Fi security assessments identify weak encryption, rogue
                  access points, and unauthorized access threats.
                </p>
              </div>
            </div>
          </div>
        </ShineBorder>

        {/* Black Container 5 with ShineBorder */}
        <ShineBorder
          className="pt-16 sm:pt-12 mt-8 sm:mt-32 bg-black text-white py-6 sm:py-8 px-4 sm:px-32 w-full sm:w-[1200px] h-[350px] 
    sm:h-[456px] rounded-tr-[100px] sm:rounded-tr-[530px] rounded-br-[100px] sm:rounded-br-[530px] relative overflow-hidden 
    ml-[-20px] sm:ml-[-320px]"
          color={["#1dcaf5", "#f04f57"]}
          borderRadius="0 100px 100px 0"
          style={{
            borderRadius:
              "0 100px 100px 0" /* Mobile default (right-side rounding) */,
            ["@media (min-width: 768px)"]: {
              /* md: breakpoint */
              borderRadius: "0 530px 530px 0" /* Medium screens and above */,
            },
          }}
        >
          <div className="relative z-10">
            <div className="mb-6">
              <h3 className="text-sm sm:text-lg font-semibold pt-12 sm:pt-16 pb-1">
                Continuous Learning and Improvement
              </h3>
              <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
                <div
                  className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
                ></div>
              </div>
              <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
                AI is ever-evolving. We integrate feedback loops, retrain models
                with new data, and implement adaptive learning strategies to
                ensure your AI solutions remain relevant and effective.
              </p>
            </div>
            <div>
              <h3 className="text-sm sm:text-lg font-semibold pb-1">
                Business Impact and Insights
              </h3>
              <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
                <div
                  className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
                ></div>
              </div>
              <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
                Our AI-driven solutions are designed to provide actionable
                insights. We analyze model performance, extract key trends, and
                enable data-driven decision-making for sustained business
                success.
              </p>
            </div>
          </div>
        </ShineBorder>
        {/* Title Section */}
        <h2 className="text-white text-lg sm:text-2xl font-semibold mb-8 sm:mb-12 pt-16 sm:pt-40 -ml-0 sm:-ml-48 flex items-center justify-start">
          <span className="inline-block w-2 h-8 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-3 sm:mr-4 rounded-tr-md rounded-br-md"></span>
          Penetration Testing Methodology
        </h2>
      </div>
    </div>
  );
};

export default BenefitsPenetrationTesting;

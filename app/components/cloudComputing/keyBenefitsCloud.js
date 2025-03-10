import React from "react";
import ShineBorder from "../../../components/ui/shine-border";
import { IoIosCheckbox } from "react-icons/io";

const KeyBenefitsCloud = () => {
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
             Key Benefits of Cloud Migration
            </h2>
          </div>
          <p className="text-gray-300 -ml-0 sm:-ml-20 md:-ml-40 w-full sm:w-[70%] mt-1 sm:mt-2 text-xs sm:text-base">
          Migrating to the cloud enables businesses to achieve greater agility, security, and cost savings while improving collaboration and performance.
          </p>
          <div className="flex justify-start w-full">
            {/* New Section Matching Image Layout */}
            <div className="space-y-4 sm:space-y-6 mt-5 sm:mt-5">
              {[
                {
                  title: "Scalability & Flexibility",
                  description:
                    "Expand resources on demand without large upfront costs.",
                },
                {
                  title: "Enhanced Security",
                  description:
                    "Secure data with advanced encryption and compliance.",
                },
                {
                  title: "Optimized Performance",
                  description:
                    "Achieve better speed, reliability, and uptime.",
                },
                {
                  title: "Cost-Effectiveness",
                  description: "Minimize IT infrastructure expenses with a pay-as-you-go model.",
                },
                {
                  title: "Seamless Collaboration",
                  description:
                    "Access data and applications remotely, ensuring operational continuity.",
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
<h2 className="text-white text-lg sm:text-2xl font-semibold pt-16 sm:pt-32 ml-12 sm:-ml-48 flex items-center justify-start">
  <span className="inline-block w-2 h-8 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 mr-3 sm:mr-4 rounded-tr-md rounded-br-md"></span>
  Cloud Computing Services
</h2>

        <ShineBorder
          className="w-full sm:w-[1200px] h-[320px] sm:h-[356px] bg-black relative ml-[20px] sm:ml-2 overflow-hidden flex flex-col mt-8 sm:mt-12 rounded-tl-[100px] sm:rounded-tl-[530px] rounded-bl-[100px] sm:rounded-bl-[530px]"
          color={["#1dcaf5", "#f04f57"]}
          borderRadius="530px 0 0 530px"
          style={{
            borderRadius:
              "100px 0 0 100px" /* Mobile default (left-side rounding) */,
            ["@media (min-width: 640px)"]: {
              /* sm: breakpoint */
              borderRadius:
                "530px 0 0 530px" /* Desktop (left-side rounding) */,
            },
          }}
        >
          <div className="pt-8 sm:pt-12 text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 w-full flex flex-col text-left">
            <div className="relative z-10 w-full mt-2 sm:mt-0">
              {" "}
              {/* Added mt-2 for mobile */}
              {/* Section 1 */}
              <div className="mb-6">
                <h3 className="text-sm sm:text-lg font-semibold pt-12 sm:pt-16 pb-1">
                Cloud Strategy & Consulting
                </h3>
                <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
                  <div
                    className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
                  ></div>
                </div>
                <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
                Tailored cloud roadmaps for seamless adoption, scalability, and cost efficiency.
                </p>
              </div>
              {/* Section 2 */}
              <div>
                <h3 className="text-sm sm:text-lg font-semibold pb-1">
                Cloud Migration Services
                </h3>
                <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
                  <div
                    className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
                  ></div>
                </div>
                <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
                Secure migration of applications, databases, and infrastructure with minimal downtime.
                </p>
              </div>
            </div>
          </div>
        </ShineBorder>

        <ShineBorder
          className="pt-8 sm:pt-12 mt-16 sm:mt-32 bg-black text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 w-full sm:w-[1200px] h-[350px] sm:h-[356px] 
          rounded-tr-[100px] sm:rounded-tr-[530px] rounded-br-[100px] sm:rounded-br-[530px] relative overflow-hidden ml-[-20px] sm:ml-[-320px]"
          color={["#1dcaf5", "#f04f57"]}
          borderRadius="0 100px 100px 0"
          style={{
            borderRadius:
              "0 100px 100px 0" /* Mobile default (right-side rounding) */,
            ["@media (min-width: 640px)"]: {
              /* sm: breakpoint */
              borderRadius:
                "0 530px 530px 0" /* Desktop (right-side rounding) */,
            },
          }}
        >
          <div className="relative z-10 mt-2 sm:mt-0">
            {" "}
            {/* Added mt-2 for mobile */}
            {/* Section 1 */}
            <div className="mb-6">
              <h3 className="text-sm sm:text-lg font-semibold pt-12 sm:pt-16 pb-1">
              Multi-Cloud & Hybrid Cloud Solutions
              </h3>
              <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
                <div
                  className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
                ></div>
              </div>
              <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
              Integration of AWS, Azure, Google Cloud, and private cloud environments for optimized performance.

              </p>
            </div>
            {/* Section 2 */}
            <div>
              <h3 className="text-sm sm:text-lg font-semibold pb-1">
              Serverless Computing & Cloud-Native Development
              </h3>
              <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
                <div
                  className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
                ></div>
              </div>
              <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
              Developing scalable applications without infrastructure management to reduce complexity and costs.
              </p>
            </div>
          </div>
        </ShineBorder>

        <ShineBorder
          className="w-full sm:w-[1200px] h-[370px] sm:h-[386px] bg-black relative ml-[20px] sm:ml-2 overflow-hidden flex flex-col mt-16 sm:mt-32 rounded-tl-[100px] sm:rounded-tl-[530px] rounded-bl-[100px] sm:rounded-bl-[530px]"
          color={["#1dcaf5", "#f04f57"]}
          borderRadius="100px 0 0 100px"
          style={{
            borderRadius:
              "100px 0 0 100px" /* Mobile default (left-side rounding) */,
            ["@media (min-width: 640px)"]: {
              /* sm: breakpoint */
              borderRadius:
                "530px 0 0 530px" /* Desktop (left-side rounding) */,
            },
          }}
        >
          <div className="pt-8 sm:pt-12 text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 w-full flex flex-col text-left">
            <div className="relative z-10 w-full mt-2 sm:mt-0">
              {" "}
              {/* Added mt-2 for mobile */}
              {/* Section 1 */}
              <div className="mb-6">
                <h3 className="text-sm sm:text-lg font-semibold pt-8 sm:pt-8 pb-1">
                AI & Big Data in the Cloud
                </h3>
                <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
                  <div
                    className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
                  ></div>
                </div>
                <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
                Leveraging AI, machine learning, and big data analytics for real-time business insights.
                </p>
              </div>
              {/* Section 2 */}
              <div>
                <h3 className="text-sm sm:text-lg font-semibold pb-1">
                Cloud Security & Compliance
                </h3>
                <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
                  <div
                    className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
                  ></div>
                </div>
                <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
                Robust security measures ensuring compliance with GDPR, HIPAA, SOC 2, and other standards.
                </p>
              </div>
            </div>
          </div>
        </ShineBorder>

        <ShineBorder
  className="pt-8 sm:pt-12 mt-16 sm:mt-32 bg-black text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 w-full sm:w-[1200px] h-[320px] sm:h-[356px] 
          rounded-tr-[100px] sm:rounded-tr-[530px] rounded-br-[100px] sm:rounded-br-[530px] relative overflow-hidden ml-[-20px] sm:ml-[-320px]"
  color={["#1dcaf5", "#f04f57"]}
  borderRadius="0 100px 100px 0"  
  style={{
    borderRadius: "0 100px 100px 0", /* Mobile default (right-side rounding) */
    ["@media (min-width: 640px)"]: { /* sm: breakpoint */
      borderRadius: "0 530px 530px 0", /* Desktop (right-side rounding) */
    },
  }}
>
  <div className="relative z-10 mt-2 sm:mt-0"> {/* Added mt-2 for mobile */}
    {/* Section 1 */}
    <div className="mb-6">
      <h3 className="text-sm sm:text-lg font-semibold pt-12 sm:pt-16 pb-1">
      Cloud DevOps & Automation
      </h3>
      <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
      Automating operations with CI/CD pipelines and Infrastructure as Code (IaC) for enhanced efficiency.
      </p>
    </div>

    {/* Section 2 */}
    <div>
      <h3 className="text-sm sm:text-lg font-semibold pb-1">
      Disaster Recovery & Backup Solutions
      </h3>
      <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
      Ensuring business continuity with automated backups and failover strategies.
      </p>
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

export default KeyBenefitsCloud;

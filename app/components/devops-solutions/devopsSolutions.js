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
    w-full sm:w-[1200px] h-[480px] sm:h-[556px] rounded-tr-[100px] sm:rounded-tr-[530px] 
    rounded-br-[100px] sm:rounded-br-[530px] relative overflow-hidden ml-[-20px] sm:ml-[-320px]"
  color={["#1dcaf5", "#f04f57"]}
  style={{
    borderRadius: "0 100px 100px 0", /* Mobile default (right-side rounding) */
    ["@media (min-width: 640px)"]: { /* sm: breakpoint */
      borderRadius: "0 530px 530px 0", /* Small screens and above */
    },
  }}
>
  {/* Title Section */}
  <div className="relative w-full">
    <h2 className="text-white text-lg sm:text-2xl font-semibold flex items-center">
      <span className="inline-block w-2 h-8 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 
        mr-3 sm:mr-4 rounded-tr-md rounded-br-md"></span>
      Key Benefits of DevOps Solutions

    </h2>
  </div>

  <div className="flex justify-start w-full">
    {/* New Section Matching Image Layout */}
    <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-16">
      {[
        {
          title: "Faster Time-to-Market",
          description: "Accelerates software development and deployment.",
        },
        {
          title: "Enhanced Collaboration",
          description: "Ensures seamless communication between development and operations teams.",
        },
        {
          title: "Automated Workflows",
          description: "Reduces manual tasks and minimizes human errors.",
        },
        {
          title: "Scalability & Flexibility",
          description: "Optimizes infrastructure for cloud-native and hybrid environments.",
        },
        {
          title: "Advanced Security & Compliance",
          description: "Embeds security best practices throughout the development lifecycle.",
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
<h2 className="text-white text-lg sm:text-2xl font-semibold pt-16 sm:pt-32 ml-12 sm:-ml-48 
  flex items-center justify-start">
  <span className="inline-block w-2 h-8 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 
    mr-3 sm:mr-4 rounded-tr-md rounded-br-md"></span>
  Comprehensive DevOps Services
</h2>

{/* Black Container 2 with ShineBorder */}
<ShineBorder
  className="w-full sm:w-[1200px] h-[350px] sm:h-[416px] bg-black relative ml-[20px] sm:ml-2 overflow-hidden 
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
  <div className="pt-4 sm:pt-9 text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 w-full 
    flex flex-col text-left">
    <div className="relative z-10 w-full">
      {/* Section 1 */}
      <div className="mb-6">
        <h3 className="text-sm sm:text-lg font-semibold pt-9 sm:pt-11 pb-1">
        CI/CD Pipeline Implementation

        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
        Robust Continuous Integration and Continuous Deployment (CI/CD) pipelines streamline software releases, mitigate risks, and enable seamless updates.        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h3 className="text-sm sm:text-lg font-semibold pb-1">
        Cloud Infrastructure Automation
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
        Automated infrastructure is created using AWS, Azure, and Google Cloud with Infrastructure as Code (IaC) tools like Terraform and Ansible.        </p>
      </div>
    </div>
  </div>
</ShineBorder>
       {/* Black Container 3 with ShineBorder */}
<ShineBorder
  className="pt-8 sm:pt-12 mt-16 sm:mt-32 bg-black text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 
    w-full sm:w-[1200px] h-[350px] sm:h-[386px] rounded-tr-[100px] sm:rounded-tr-[530px] 
    rounded-br-[100px] sm:rounded-br-[530px] relative overflow-hidden ml-[-20px] sm:ml-[-320px]"
  color={["#1dcaf5", "#f04f57"]}
  style={{
    borderRadius: "0 100px 100px 0", /* Mobile default (right-side rounding) */
    ["@media (min-width: 640px)"]: { /* sm: breakpoint */
      borderRadius: "0 530px 530px 0", /* Small screens and above */
    },
  }}
>
  <div className="relative z-10">
    {/* Section 1 */}
    <div className="mb-6">
      <h3 className="text-sm sm:text-lg font-semibold pt-12 sm:pt-16 pb-1">
      Containerization & Kubernetes Orchestration
      </h3>
      <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
      Application deployment is simplified with Docker containers and Kubernetes clusters, ensuring consistency and scalability.
      </p>
    </div>

    {/* Section 2 */}
    <div>
      <h3 className="text-sm sm:text-lg font-semibold pb-1">
      Configuration Management
      </h3>
      <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
      Automated system configurations using Ansible, Chef, and Puppet ensure uniformity across multiple environments. 
      </p>
    </div>
  </div>
</ShineBorder>
       {/* Black Container 4 with ShineBorder */}
<ShineBorder
  className="w-full sm:w-[1200px] h-[350px] sm:h-[436px] bg-black relative ml-[20px] sm:ml-2 overflow-hidden 
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
  <div className="pt-4 sm:pt-11 text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 w-full 
    flex flex-col text-left">
    <div className="relative z-10 w-full">
      {/* Section 1 */}
      <div className="mb-6">
        <h3 className="text-sm sm:text-lg font-semibold pt-12 sm:pt-16 pb-1">
          Monitoring & Logging
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
          Real-time monitoring and log analysis with Prometheus, Grafana, and ELK Stack proactively detect and resolve performance issues.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h3 className="text-sm sm:text-lg font-semibold pb-1">
          Security & Compliance Integration (DevSecOps)
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
          Security is embedded throughout the software development lifecycle with automated security testing, vulnerability scanning, and compliance monitoring.
        </p>
      </div>
    </div>
  </div>
</ShineBorder>

        {/* Black Container 3 with ShineBorder */}
<ShineBorder
  className="pt-8 sm:pt-12 mt-16 sm:mt-32 bg-black text-white py-6 sm:py-8 px-8 sm:px-16 md:px-32 
    w-full sm:w-[1200px] h-[310px] sm:h-[406px] rounded-tr-[100px] sm:rounded-tr-[530px] 
    rounded-br-[100px] sm:rounded-br-[530px] relative overflow-hidden ml-[-20px] sm:ml-[-320px]"
  color={["#1dcaf5", "#f04f57"]}
  style={{
    borderRadius: "0 100px 100px 0", /* Mobile default (right-side rounding) */
    ["@media (min-width: 640px)"]: { /* sm: breakpoint */
      borderRadius: "0 530px 530px 0", /* Small screens and above */
    },
  }}
>
  <div className="relative z-10">
    {/* Section 1 */}
    <div className="mb-6">
      <h3 className="text-sm sm:text-lg font-semibold pt-9 sm:pt-12 pb-1">
        Microservices & Serverless Architecture
      </h3>
      <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
        Modernizing applications with microservices and serverless computing enhances scalability and cost efficiency.
      </p>
    </div>

    {/* Section 2 */}
    <div>
      <h3 className="text-sm sm:text-lg font-semibold pb-1">
        Automated Testing & Quality Assurance
      </h3>
      <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
            animate-[shine_2s_linear_infinite]"
        ></div>
      </div>
      <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
        Automated testing frameworks improve software quality, detect bugs early, and maintain 
        high-performance applications.
      </p>
    </div>
  </div>
</ShineBorder>
{/* Black Container 4 with ShineBorder */}
<ShineBorder
  className="w-full sm:w-[1200px] h-[350px] sm:h-[416px] bg-black relative ml-[20px] sm:ml-2 overflow-hidden 
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
        <h3 className="text-sm sm:text-lg font-semibold pt-12 sm:pt-16 pb-1">
          IT Infrastructure Optimization
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
          System performance is enhanced while reducing downtime and optimizing resource utilization with cloud and on-premises solutions.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h3 className="text-sm sm:text-lg font-semibold pb-1">
          DevOps Consulting & Strategy
        </h3>
        <div className="relative w-full sm:w-[450px] h-[1px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
              animate-[shine_2s_linear_infinite]"
          ></div>
        </div>
        <p className="text-gray-300 w-full sm:w-[70%] mt-2 text-xs sm:text-base">
          Expert guidance on DevOps best practices, tools, and tailored implementation strategies for business needs.
        </p>
      </div>
    </div>
  </div>
</ShineBorder>

{/* Title Section */}
<h2 className="text-white text-lg sm:text-2xl font-semibold mb-9 sm:mb-11 pt-20 sm:pt-20 
  ml-12 sm:-ml-48 flex items-center justify-start">
  <span className="inline-block w-2 h-8 sm:h-10 bg-gradient-to-b to-blue-500 from-pink-500 
    mr-3 sm:mr-4 rounded-tr-md rounded-br-md"></span>
  DevOps Implementation Approach
</h2>
</div>
    </div>
  );
};

export default DevopsSolutions;
import React from "react";
import { ShineBorderDemo } from "./borderShineCard";
import { FaCloud, FaBolt, FaCogs, FaSmile } from 'react-icons/fa';

const AiSolutionsSection = () => {
  const services = [
    {
      title: "AI-Powered Cloud Analytics",
      description:
        "Our cloud analytics modernization services are driven by AI, ensuring that businesses have access to real-time, actionable insights to optimize their operations and drive innovation.",
      icon: <FaCloud className="text-blue-500 text-2xl" />,
      desktop_icon: <FaCloud className="w-10 h-10 text-red-400" />,
    },
    {
      title: "Accelerated Data Science Solutions",
      description:
        "Our data science acceleration services equip businesses with the tools and capabilities to uncover valuable insights from their data, empowering them to stay ahead in a rapidly evolving market.",
      icon: <FaBolt className="text-yellow-500 text-2xl" />,
      desktop_icon: <FaBolt className="w-10 h-10 text-red-400" />,
    },
    {
      title: "Customized AI Applications",
      description:
        "We specialize in developing versatile AI applications tailored to meet the unique needs of businesses, enhancing their operational efficiency and customer experience.",
      icon: <FaCogs className="text-green-500 text-2xl" />,
      desktop_icon: <FaCogs className="w-10 h-10 text-red-400" />,
    },
    {
      title: "Enhanced Customer Engagement through AI",
      description:
        "Our comprehensive AI-driven customer experience services enable businesses to deliver personalized experiences, driving customer satisfaction and loyalty.",
      icon: <FaSmile className="text-purple-500 text-2xl" />,
      desktop_icon: <FaSmile className="w-10 h-10 text-red-400" />,
    },
  ];
  return (
    <div>
      <div className="hidden md:flex w-full h-[1000px] px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 pt-52 overflow-visible">
        <div className="flex items-center justify-center px-10 lg:px-20 w-5/12 border border-gray-600 bg-black bg-opacity-30">
          <div className="space-y-10">
            <h2 className="text-2xl lg:text-3xl 2xl:text-4xl text-gray-300">
              Unleash the Power of Data for Business Growth
            </h2>
            <h3 className="text-lg lg:text-xl 2xl:text-2xl text-gray-500">
              Our advanced AI and ML solutions empower businesses to harness the potential of their data, enabling them to make informed decisions and achieve sustainable growth in a competitive market landscape.
            </h3>
          </div>
        </div>
        <div className=" flex items-center justify-center w-7/12 border border-l-0 border-gray-600 bg-gray-950 bg-opacity-30 px-5 lg:px-10 xl:px-20">
          <div className="flex w-full items-center justify-center md:space-x-2 lg:space-x-5">
            <div className="w-1/2 pb-44 space-y-10">
              {/* card1 */}
              {/* <div className="h-[400px] max-w-[250px] bottom-10 rounded-lg bg-gray-950 bg-opacity-95 border-gray-400">

            </div> */}
              <ShineBorderDemo item={services[0]}/>
              {/* card2 */}
              <ShineBorderDemo item={services[1]}/>
            </div>
            <div className="w-1/2 pt-44 space-y-10">
              {/* card3 */}
              <ShineBorderDemo item={services[2]}/>
              {/* card4 */}
              <ShineBorderDemo item={services[3]}/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 pt-0">
        <div>
        <div className="flex items-center justify-center px-10 lg:px-20 py-5 border border-gray-600 bg-gray-950 bg-opacity-70">
          <div className="space-y-5">
            <h2 className="text-xl text-gray-200 text-center">
              Unleash the Power of Data for Business Growth
            </h2>
            <h3 className="text-base text-gray-400 text-center">
              Our advanced AI and ML solutions empower businesses to harness the potential of their data, enabling them to make informed decisions and achieve sustainable growth in a competitive market landscape.
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="shadow-md rounded-lg p-4 flex items-start gap-4 bg-gray-950 bg-opacity-70"
            >
              <div>{service.icon}</div>
              <div>
                <h2 className="text-lg font-semibold">{service.title}</h2>
                <p className="text-gray-400 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default AiSolutionsSection;

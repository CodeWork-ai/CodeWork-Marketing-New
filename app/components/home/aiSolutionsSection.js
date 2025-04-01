import React from "react";
import { ShineBorderDemo } from "./borderShineCard";
import { FaBrain, FaBolt, FaDatabase, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";

const AiSolutionsSection = () => {
  const services = [
    {
      title: "AI Consulting",
      description:
        "Our AI consulting services provide tailored solutions to drive innovation and efficiency, empowering businesses to stay ahead in a competitive landscape.",
      icon: <FaBrain className="text-blue-500 text-2xl" />,
      desktop_icon: <FaBrain className="w-10 h-10 text-[#FF035B]" />,
    },
    {
      title: "Machine Learning",
      description:
        "With Machine Learning expertise, Codework offers predictive insights and automation for businesses, unlocking data-driven growth opportunities.",
      icon: <FaBolt className="text-yellow-500 text-2xl" />,
      desktop_icon: <FaBolt className="w-10 h-10 text-[#FF035B]" />,
    },
    {
      title: "Data Engineering",
      description:
        "Our Data Engineering approach ensure robust data infrastructure and efficient processing, enabling seamless scalability and informed decision-making.",
      icon: <FaDatabase className="text-green-500 text-2xl" />,
      desktop_icon: <FaDatabase className="w-10 h-10 text-[#FF035B]" />,
    },
    {
      title: "Cyber Security",
      description:
        "Protect digital assets with Codework's comprehensive Cyber Security solutions, ensuring unparalleled protection.",
      icon: <FaShieldAlt className="text-purple-500 text-2xl" />,
      desktop_icon: <FaShieldAlt className="w-10 h-10 text-[#FF035B]" />,
    },
  ];
  
  return (
    <div>
      <div className="hidden md:flex w-full h-[1000px] px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 pt-52 overflow-visible">
        <div className="flex items-center justify-center px-10 lg:px-20 w-5/12 border border-gray-600 bg-black bg-opacity-30">
          <div className="space-y-10">
            <h2 className="text-2xl lg:text-3xl 2xl:text-4xl text-gray-200">
              Areas of Excellence
            </h2>
            <h3 className="text-lg lg:text-xl 2xl:text-2xl text-gray-200">
              At Codework, we bring innovation to life through our AI consulting, Generative AI, Machine Learning, NLP, Deep Learning, Neural Networks, Data Engineering, Cyber Security, Predictive Analytics, and AI-chatbots. Our team is passionate about crafting intelligent solutions to help businesses grow, improve efficiency, and stay ahead in today’s tech-driven world. Trust us to deliver excellence.
            </h3>
            <div className="">
              <div className="hidden md:flex space-x-5">
                <Link href="empowering-innovation-ai-advanced-technologies">
                  <button className="bg-[#FF035B] hover:bg-opacity-80 text-black hover:text-white font-medium rounded-sm px-2 py-1 md:px-3 md:py-2 xl:px-5 xl:py-3 text-sm md:text-sm xl:text-base 2xl:text-lg">
                    Discover More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center w-7/12 border border-l-0 border-gray-600 bg-gray-950 bg-opacity-30 px-5 lg:px-10 xl:px-20">
          <div className="flex w-full items-center justify-center md:space-x-2 lg:space-x-5">
            <div className="w-1/2 pb-44 space-y-10">
              {/* card1 */}
              {/* <div className="h-[400px] max-w-[250px] bottom-10 rounded-lg bg-gray-950 bg-opacity-95 border-gray-400">

            </div> */}
              <ShineBorderDemo item={services[0]} />
              {/* card2 */}
              <ShineBorderDemo item={services[1]} />
            </div>
            <div className="w-1/2 pt-44 space-y-10">
              {/* card3 */}
              <ShineBorderDemo item={services[2]} />
              {/* card4 */}
              <ShineBorderDemo item={services[3]} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 pt-0">
        <div>
          <div className="flex items-center justify-center px-5 py-5 border border-gray-600 bg-gray-950 bg-opacity-70">
            <div className="space-y-5">
              <h2 className="text-xl text-gray-200 text-center">
                  Areas of Excellence
              </h2>
              <h3 className="text-base text-gray-200 text-center">
                  At Codework, we bring innovation to life through our AI consulting, Generative AI, Machine Learning, NLP, Deep Learning, Neural Networks, Data Engineering, Cyber Security, Predictive Analytics, and AI-chatbots. Our team is passionate about crafting intelligent solutions to help businesses grow, improve efficiency, and stay ahead in today’s tech-driven world. Trust us to deliver excellence.
              </h3>
              <div className="md:hidden w-full space-y-4">
                <div className="w-full">
                  <Link href="/empowering-innovation-ai-advanced-technologies">
                    <button className="bg-[#FF035B] hover:bg-opacity-80 text-black hover:text-white w-full py-2">
                      Discover More
                    </button>
                  </Link>
                </div>
              </div>
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
                  <p className="text-gray-200 mt-2">{service.description}</p>
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

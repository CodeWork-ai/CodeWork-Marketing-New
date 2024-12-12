import React from "react";
import { FaCloud, FaLayerGroup, FaCube, FaUsers } from "react-icons/fa";

const features = [
    {
        icon: <FaCloud />,
        title: "AI-Powered Data Analytics",
        description:
            "We leverage advanced AI, machine learning, and data science to transform raw data into actionable insights. Our solutions enable organizations to make informed decisions, optimize operations, and drive sustainable growth. Our expertise in cloud analytics modernization allows businesses to harness the power of data in the digital age.",
        desktop_icon: <FaCloud className="w-16 h-16 text-red-400" />,
    },
    {
        icon: <FaLayerGroup />,
        title: "Machine Learning for Data Optimization",
        description:
            "Our machine learning techniques accelerate data science processes, unlocking the potential of data for predictive modeling, pattern recognition, and anomaly detection. By harnessing the power of machine learning, businesses can gain valuable insights from their data, driving innovation and competitive advantage.",
        desktop_icon: <FaLayerGroup className="w-16 h-16 text-red-400" />,
    },
    {
        icon: <FaCube />,
        title: "AI-Driven Application Enhancement",
        description:
            "Our AI-driven application enhancement services empower businesses to build versatile, intelligent applications that adapt to dynamic market demands. We utilize advanced AI technologies to enhance user experiences, automate processes, and drive innovation across various industries.",
        desktop_icon: <FaCube className="w-16 h-16 text-red-400" />,
    },
    {
        icon: <FaUsers />,
        title: "Personalized Customer Engagement",
        description:
            "We specialize in delivering full-cycle customer engagement solutions powered by AI. Our personalized approach enables businesses to create meaningful interactions, build customer loyalty, and drive revenue growth. By leveraging AI, we help organizations transform their customer experience strategies.",
        desktop_icon: <FaUsers className="w-16 h-16 text-red-400" />,
    },
];

const FeatureGrid = () => {
    return (
        <div className="px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 2xl:40 bg-black bg-opacity-30">
            <div className="flex md:hidden">
                <div className="grid md:grid-cols-2 gap-8 text-white">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start space-y-4 p-4 bg-black bg-opacity-50 rounded-lg shadow-lg"
                        >
                            <div className="text-4xl text-[#fd6262]">{feature.icon}</div>
                            <h3 className="text-xl font-bold">{feature.title}</h3>
                            <p className="text-sm text-gray-300">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden md:flex w-full">
                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="w-full flex border border-gray-600 h-[320px] lg:h-[240px] ">
                            <div className="W-1/2 border border-transparent border-r-gray-600 px-16 flex items-center">{feature.desktop_icon}</div>
                            <div className="w-1/2 p-2 pl-16 flex items-center">
                                <div className="">
                                    <h3 className="text-lg lg:text-xl font-bold mb-1 text-gray-300">{feature.title}</h3>
                                    <p className="text-sm lg:text-base text-gray-400 leading-7">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureGrid;

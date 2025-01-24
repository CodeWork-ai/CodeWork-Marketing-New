import React from "react";
import { FaBrain, FaMagic, FaChartLine, FaCommentDots, FaDatabase, FaShieldAlt, FaChartPie, FaRobot,  FaLock  } from 'react-icons/fa';

const features = [
    {
        icon: <FaBrain />,
        title: "AI Consulting",
        description:
            "Our AI consulting services are designed to deliver tailor-made solutions that align with your business goals. We help organizations identify opportunities for automation, efficiency, and growth by seamlessly integrating AI into their workflows. From ideation to execution, we ensure you unlock the full potential of AI.",
        desktop_icon: <FaBrain className="w-16 h-16 text-red-400" />,
    },
    {
        icon: <FaMagic />,
        title: "Generative AI",
        description:
            "Creativity meets technology with our Generative AI solutions. Whether it’s content generation, design assistance, or product innovation, we enable businesses to boost productivity and creativity. Our AI-powered tools help streamline workflows and bring new ideas to life effortlessly.",
        desktop_icon: <FaMagic className="w-16 h-16 text-red-400" />,
    },
    {
        icon: <FaChartLine />,
        title: "Machine Learning",
        description:
            "With Machine Learning, Codework empowers businesses with predictive insights and smarter automation. Leveraging advanced frameworks like PyTorch, Keras, and TensorFlow, we help analyze data, uncover patterns, and enable data-driven decisions. Our solutions allow businesses to stay one step ahead of market demands and drive innovation.",
        desktop_icon: <FaChartLine className="w-16 h-16 text-red-400" />,
    },
    {
        icon: <FaCommentDots />,
        title: "Natural Language Processing (NLP)",
        description:
            "Shape Communication is key, and our NLP solutions make it smarter. We harness the power of advanced language processing to help businesses improve text analysis, automate customer support, and extract meaningful insights from unstructured data.",
        desktop_icon: <FaCommentDots className="w-16 h-16 text-red-400" />,
    },
    {
        icon: <FaDatabase />,
        title: "Data Engineering",
        description:
            "A robust data infrastructure is the backbone of any business. Our Data Engineering services ensure your data is well-organized, easily accessible, and efficiently processed, giving you the foundation to scale and innovate.",
        desktop_icon: <FaDatabase className="w-16 h-16 text-red-400" />,
    },
    {
        icon: <FaShieldAlt />,
        title: "Cyber Security",
        description:
            "Protecting digital assets is critical in today’s connected world. Codework’s cybersecurity solutions leverage advanced technologies, including XGBoost, to analyze threats, detect vulnerabilities, and provide comprehensive protection for your systems, data, and infrastructure. We ensure safety, trust, and resilience for your business in an ever-evolving digital landscape.",
        desktop_icon: <FaShieldAlt className="w-16 h-16 text-red-400" />,
    },
    {
        icon: <FaLock />,
        title: "Penetration Testing",
        description:
            "Identify vulnerabilities before attackers do with our comprehensive penetration testing services. Our experts simulate real-world attacks to evaluate your systems' security, providing actionable insights to fortify your defenses and ensure compliance with industry standards.",
        desktop_icon: <FaLock className="w-16 h-16 text-red-400" />,
    },
    {
        icon: <FaChartPie />,
        title: "Predictive Analytics",
        description:
            "Stay ahead of the curve with Predictive Analytics. We use AI-driven forecasting models to analyse trends, predict outcomes, and deliver actionable insights that enable businesses to plan smarter and perform better.",
        desktop_icon: <FaChartPie className="w-16 h-16 text-red-400" />,
    },
    {
        icon: <FaRobot />,
        title: "AI-Chatbots",
        description:
            "Enhance customer engagement with our intelligent AI chatbots. Codework’s chatbots provide real-time responses, improve user satisfaction, and streamline communication across platforms.",
        desktop_icon: <FaRobot className="w-16 h-16 text-red-400" />,
    },
];


const ExpertiseGrid = () => {
    return (
        <div className="px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 2xl:40 bg-black bg-opacity-30">
            <div className="flex md:hidden">
                <div className="grid md:grid-cols-2 gap-8 text-white">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start space-y-4 p-4 bg-black bg-opacity-50 rounded-lg shadow-lg"
                        >
                            <div className="text-4xl text-[#FF035B]">{feature.icon}</div>
                            <h3 className="text-xl font-bold">{feature.title}</h3>
                            <p className="text-sm text-gray-200">{feature.description}</p>
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
                                    <h3 className="text-lg lg:text-xl font-bold mb-1 text-gray-200">{feature.title}</h3>
                                    <p className="text-sm lg:text-base text-gray-200 leading-7">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExpertiseGrid;

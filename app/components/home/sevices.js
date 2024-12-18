"use client";
import React from "react";
import { FaBrain, FaCode, FaCogs, FaMobileAlt, FaGlobe, FaCloud } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const features = [
    {
        icon: <FaBrain className="text-red-500 text-2xl" />,
        title: "AI Model Training",
        description:
            "We excel in AI model training, optimizing machine learning models for impactful results.",
        desktop_icon: <FaBrain className="w-9 h-9 text-gradient-to-r from-red-500 to-cyan-500" />,
    },
    {
        icon: <FaCode className="text-red-500 text-2xl" />,
        title: "Software Development",
        description:
            "Discover innovative software development solutions at Codework, driving digital transformation.",
        desktop_icon: <FaCode className="w-9 h-9 text-gradient-to-r from-red-500 to-cyan-500" />,
    },
    {
        icon: <FaCogs className="text-red-500 text-2xl" />,
        title: "Custom Software Development",
        description:
            "Unlock personalization with custom software development service.",
        desktop_icon: <FaCogs className="w-9 h-9 text-gradient-to-r from-red-500 to-cyan-500" />,
    },
    {
        icon: <FaMobileAlt className="text-red-500 text-2xl" />,
        title: "Mobile Software Development (iOS/Android)",
        description:
            "We create intuitive iOS and Android apps to boost user engagement.",
        desktop_icon: <FaMobileAlt className="w-9 h-9 text-gradient-to-r from-red-500 to-cyan-500" />,
    },
    {
        icon: <FaGlobe className="text-red-500 text-2xl" />,
        title: "Web Designing",
        description:
            "Transform online presence with Codework's stunning and user-friendly web designing services.",
        desktop_icon: <FaGlobe className="w-9 h-9 text-gradient-to-r from-red-500 to-cyan-500" />,
    },
    {
        icon: <FaCloud className="text-red-500 text-2xl" />,
        title: "Cloud Computing",
        description:
            "Leverage advanced cloud computing solutions from Codework for secure and scalable operations.",
        desktop_icon: <FaCloud className="w-9 h-9 text-gradient-to-r from-red-500 to-cyan-500" />,
    },
];

const ServiceGrid = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false }); // Rotate only when in view

    return (
        <div className="bg-black bg-opacity-0">
            <div className="flex md:hidden">
                <div className="grid md:grid-cols-2 gap-2 text-white">
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
            <div className="hidden md:flex w-full h-full">
                <div className="h-full space-y-1 md:space-y-7 2xl:space-y-8 md:p-2 lg:p-5">
                    {features.map((feature, index) => (
                        <div key={index} className="w-full flex" ref={ref}>
                            <div className="W-2/8 flex items-start text-[#fd6262]">
                                <motion.div
                                    animate={isInView ? { rotate: 340 } : { rotate: 20 }}
                                    transition={{ duration: 2 }}
                                >
                                    {feature.desktop_icon}
                                </motion.div>
                            </div>
                            <div className="w-6/8 pl-4 2xl:pl-8 flex items-start">
                                <div className="">
                                    <h3 className="text-base lg:text-lg mb-1 text-gray-300">{feature.title}</h3>
                                    <p className="text-sm lg:text-base text-gray-400">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceGrid;


"use client";

import React, { useState, useRef } from "react";
import { FaHospital, FaChalkboardTeacher, FaShoppingCart, FaChartLine, FaShieldAlt, FaBitcoin, FaRobot } from 'react-icons/fa';
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../../../components/ui/animated-beam";

const Circle = React.forwardRef(({ className, children, onMouseEnter, onMouseLeave }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 md:size-28 items-center justify-center rounded-full border-2 border-gray-600 bg-black bg-opacity-40 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className
            )}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
    const containerRef = useRef(null);
    const divRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const iconDetails = [
        {
            ref: divRefs[0],
            icon: <FaHospital className="text-red-400 w-10 h-10" />, // Healthcare Icon
            title: "Healthcare",
            description: "We elevate patient care with AI-driven diagnostics, personalized treatments, and secure management of Electronic Health Records (EHR).",
        },
        {
            ref: divRefs[1],
            icon: <FaChalkboardTeacher className="text-blue-400 w-10 h-10" />, // Education Icon
            title: "Education",
            description: "We personalize learning experiences with adaptive AI platforms and ensure secure academic credentials using blockchain certification.",
        },
        {
            ref: divRefs[2],
            icon: <FaShoppingCart className="text-green-400 w-10 h-10" />, // E-commerce Icon
            title: "E-commerce",
            description: "We redefine online shopping with predictive analytics for smarter recommendations and secure, seamless transactions.",
        },
        {
            ref: divRefs[3],
            icon: <FaRobot className="text-purple-400 w-10 h-10" />,
            title: "AI innovations and applications",
            description: "Cutting-edge AI solutions to accelerate various industries by driving automation, enhancing intelligence systems, and transforming operational efficiency.",
        },
        {
            ref: divRefs[4],
            icon: <FaChartLine className="text-yellow-400 w-10 h-10" />, // Finance Icon
            title: "Finance",
            description: "We enhance financial systems with AI-powered fraud detection, credit risk analysis, and streamlined payment processes.",
        },
        {
            ref: divRefs[5],
            icon: <FaShieldAlt className="text-indigo-400 w-10 h-10" />, // Data Security Icon
            title: "Data Security",
            description: "We protect sensitive information with advanced anomaly detection and robust, decentralized security protocols.",
        },
        {
            ref: divRefs[6],
            icon: <FaBitcoin className="text-orange-400 w-10 h-10" />, // Supply Chain Icon
            title: "Supply Chain",
            description: "We optimize operations and boost transparency with smart contract-enabled systems for seamless supply chain management.",
        },
    ];
    

    // const iconDetails = [
    //     {
    //         ref: divRefs[0],
    //         icon: <FaHospital className="text-red-400 w-10 h-10" />,
    //         title: "Healthcare",
    //         description: "We elevate patient care with AI-driven diagnostics, personalized treatments, and secure management of Electronic Health Records (EHR). ",
    //     },
    //     {
    //         ref: divRefs[1],
    //         icon: <FaChalkboardTeacher className="text-blue-400 w-10 h-10" />,
    //         title: "Education",
    //         description: "We personalize learning experiences with adaptive AI platforms and ensure secure academic credentials using blockchain certification. ",
    //     },
    //     {
    //         ref: divRefs[2],
    //         icon: <FaShoppingCart className="text-green-400 w-10 h-10" />,
    //         title: "AI in e-commerce, personalized shopping",
    //         description: "Predictive analytics, secure online transactions. Transform online shopping experiences with AI-powered product recommendations and blockchain-secured transactions. ",
    //     },
        

    //     {
    //         ref: divRefs[4],
    //         icon: <FaShieldAlt className="text-indigo-400 w-10 h-10" />,
    //         title: "AI in cybersecurity, threat detection",
    //         description: " Blockchain security, anomaly detection. Protect your data with AI-powered threat detection and blockchain-based security protocols. ",
    //     },
    //     {
    //         ref: divRefs[5],
    //         icon: <FaBitcoin className="text-orange-400 w-10 h-10" />,
    //         title: "Blockchain technology, decentralized systems",
    //         description: "Smart contracts, blockchain for supply chain. Optimize operations with transparent, secure, and decentralized blockchain solutions. ",
    //     },
    //     {
    //         ref: divRefs[6],
    //         icon: <FaChartLine className="text-yellow-400 w-10 h-10" />,
    //         title: "AI in finance, fraud detection",
    //         description: " Algorithmic trading, secure payment systems. Streamline financial operations with AI algorithms for fraud detection, credit risk analysis, and more. ",
    //     },

    // ];
    return (
        <div className="py-10 bg-white bg-opacity-5">
            <div className="flex items-center justify-center">
                <div className="px-10 md:px-52 md:mt-20">
                    <h2 className="text-center text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-gray-300 font-bold mb-3">Where do we Excel?</h2>
                    <h3 className="text-center text-sm md:text-base lg:text-xl 2xl:text-2xl text-gray-400">Explore how we leverage innovative AI and blockchain technologies to reshape key sectors, drive efficiency, and unlock new possibilities. </h3>
                </div>
            </div>
            <div
                className="relative flex h-[500px] md:h-[700px] w-full items-top justify-end overflow-hidden rounded-lg md:shadow-xl py-14 md:py-14 px-10 md:px-44"
                ref={containerRef}
            >
                <div>
                </div>
                <div className="flex size-full flex-col items-stretch justify-between gap-10">
                    {iconDetails.slice(0, 2).map((detail, index) => (
                        <div className="flex flex-row items-center justify-between" key={index}>
                            <Circle
                                ref={detail.ref}
                                onMouseEnter={() => setHoveredIcon(detail)}
                                onMouseLeave={() => setHoveredIcon(null)}
                            >
                                {detail.icon}
                            </Circle>
                        </div>
                    ))}
                    <div className="flex flex-row items-center justify-between">
                        {iconDetails.slice(2, 5).map((detail, index) => (
                            <Circle
                                ref={detail.ref}
                                key={index}
                                onMouseEnter={() => setHoveredIcon(detail)}
                                onMouseLeave={() => setHoveredIcon(null)}
                            >
                                {detail.icon}
                            </Circle>
                        ))}
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        {iconDetails.slice(5).map((detail, index) => (
                            <Circle
                                ref={detail.ref}
                                key={index}
                                onMouseEnter={() => setHoveredIcon(detail)}
                                onMouseLeave={() => setHoveredIcon(null)}
                            >
                                {detail.icon}
                            </Circle>
                        ))}
                    </div>
                </div>

                {hoveredIcon && (
                    <div
                        className="absolute
           z-20 bg-black w-[180px] h-[180px] md:w-[300px] md:h-[300px] bg-opacity-40 p-4 rounded shadow-lg mr-0 md:mr-20"
                    //   style={hoveredIcon.title == "PDF Docs" ? {
                    //     top: hoveredIcon.ref.current?.getBoundingClientRect()?.top - containerRef.current?.getBoundingClientRect()?.top + 20,
                    //     left: hoveredIcon.ref.current?.getBoundingClientRect()?.left - containerRef.current?.getBoundingClientRect()?.left + 100,
                    //   }:{
                    //     top: hoveredIcon.ref.current?.getBoundingClientRect()?.top - containerRef.current?.getBoundingClientRect()?.top + 20,
                    //     right: hoveredIcon.ref.current?.getBoundingClientRect()?.right - containerRef.current?.getBoundingClientRect()?.right + 100,
                    //   }}
                    >
                        <h3 className="text-lg md:text-xl md:font-bold text-gray-200 mb-2 md:mb-5">{hoveredIcon.title}</h3>
                        <p className="hidden md:flex text-sm md:text-base text-gray-400">{hoveredIcon.description}</p>
                    </div>
                )}

                {iconDetails.map((fromDetail, index) => (
                    <AnimatedBeam
                        key={index}
                        containerRef={containerRef}
                        fromRef={fromDetail.ref}
                        toRef={iconDetails[3].ref} // All beams point to the central icon
                    />
                ))}
            </div>
        </div>
    );
}

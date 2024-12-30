"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ServiceGrid from "./sevices";

const ExploreAiPoweredSolutions = () => {
    const [zoomScale, setZoomScale] = useState(1);

    // Update zoom scale based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            const newScale = 1 + Math.min(offset * 0.0001, 0.2); // Zoom cap at 10%
            setZoomScale(newScale);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full h-full md:flex px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 pt-10 md:pt-10">
            {/* Left Section with Tilted Background Image and Text */}
            <div className="md:w-6/12 h-[600px] md:h-[700px] relative overflow-hidden border border-gray-700 bg-black bg-opacity-70">
                {/* Tilted Image */}
                <div className="relative w-full h-full md:h-[700px]">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 w-full h-full"
                        style={{
                            backgroundImage: "url(/bg3.avif)", // Replace with your image path
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            transform: `scale(${zoomScale})`, // Dynamic zoom effect
                            filter: "blur(0px)", // Subtle blur effect
                            transition: "transform 0.1s ease-out", // Smooth transition
                        }}
                    ></div>

                    {/* Centered Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="space-y-5 lg:space-y-10 py-5">
                            <h2 className="text-gray-100 text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-center px-4">
                                What do we Offer?
                            </h2>
                            <h3 className="leading-5 md:leading-7 lg:leading-9 text-base lg:text-base 2xl:text-lg text-gray-300 text-center px-3 md:px-10">
                                Codework redefines possibilities with cutting-edge AI services designed to empower businesses in the digital era. From AI model training that enhances system intelligence to custom software development tailored to unique needs, excellence is delivered at every step. Expertise spans mobile software development for iOS and Android, web designing to create stunning digital experiences, and cloud computing solutions for seamless scalability and security. With Codework, adopting technology means embracing innovation with a personal touch.
                            </h3>
                            <div className="flex w-full md:w-auto items-center justify-center px-4">
                                <Link href="/service" className="w-full md:w-auto">
                                    <button className="bg-[#fd6262] w-full md:w-auto hover:bg-red-400 text-black hover:text-white font-medium rounded-sm px-2 py-2 md:px-3 md:py-2 xl:px-5 xl:py-3 hover:bg-opacity-50 text:sm lg:text-base 2xl:text-lg">
                                        Explore Our Services
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="md:w-6/12 flex items-center justify-center border text-xl md:text-lg text-gray-400 border-gray-700 bg-black bg-opacity-40">
                <ServiceGrid/>
            </div>
        </div>
    );
};

export default ExploreAiPoweredSolutions;

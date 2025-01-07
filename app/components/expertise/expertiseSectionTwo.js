"use client";
import React, { useState, useEffect } from "react";

const ExpertiseSectionTwo = () => {
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
        <div className="w-full md:flex px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 bg-black bg-opacity-30">
            {/* Left Section with Tilted Background Image and Text */}
            <div className="md:w-6/12 h-[250px] md:h-[400px] relative overflow-hidden border border-gray-700 bg-black bg-opacity-90">
                {/* Tilted Image */}
                <div className="relative w-full h-full md:h-[400px] bg-black bg-opacity-30">
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
                        <h3 className="text-gray-200 text-2xl lg:text-3xl 2xl:text-4xl md:text-4xl font-thin text-center px-4">
                            Driving Innovation, Efficiency, and Growth with Excellence
                        </h3>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="md:w-6/12 flex items-center border h-full md:h-[400px] text-xl md:text-lg text-gray-200 border-gray-700 bg-black bg-opacity-5 px-5 lg:px-20 2xl:px-44">
                <div className="py-5">
                    <h3 className="leading-9 text-base lg:text-base 2xl:text-lg text-gray-200">
                        At Codework, our Areas of Excellence represent more than just capabilities – they are the foundation of your business's innovation, efficiency, and growth. By combining advanced AI technologies, human-centric solutions, and a relentless drive for excellence, we empower you to confidently embrace the future.
                    </h3>
                    {/* <div className="pt-5">
                        <div className="">
                            <Link href="/solution">
                                <button className="bg-[#FF035B] hover:bg-red-400 text-black hover:text-white font-medium rounded-sm px-2 py-1 md:px-3 md:py-2 xl:px-5 xl:py-3 hover:bg-opacity-50 text:sm lg:text-base 2xl:text-lg">
                                    Explore Our Services
                                </button>
                            </Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ExpertiseSectionTwo;
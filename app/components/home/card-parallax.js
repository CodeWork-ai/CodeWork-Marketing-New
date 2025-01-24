"use client";

import React, { useRef, useEffect } from "react";
import { FaHospital, FaChalkboardTeacher, FaShoppingCart, FaChartLine, FaShieldAlt, FaBitcoin, FaRobot } from 'react-icons/fa';
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const CardParallaxComponent = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const projects = [
    {
      title: "Healthcare",
      description:
        "We elevate patient care with AI-driven diagnostics and secure management of Electronic Health Records (EHR).",
      icon: <FaHospital className="text-red-400 w-32 h-32" />,
    },
    {
      title: "Education",
      description:
        "We personalize learning experiences with adaptive AI platforms and blockchain certification.",
      icon: <FaChalkboardTeacher className="text-blue-400 w-32 h-32" />, 
    },
    {
      title: "E-commerce",
      description:
        "We redefine online shopping with predictive analytics for smarter recommendations.",
      icon: <FaShoppingCart className="text-green-400 w-32 h-32" />,
    },
    {
      title: "Finance",
      description:
        "We enhance financial systems with AI-powered fraud detection and credit risk analysis.",
      icon: <FaChartLine className="text-yellow-400 w-32 h-32" />, 
    },
    {
      title: "Data Security",
      description:
        "We protect sensitive information with advanced anomaly detection and robust, decentralized security protocols.",
      icon: <FaShieldAlt className="text-indigo-400 w-32 h-32" />, 
    },
    {
      title: "Supply Chain",
      description: "We optimize operations and boost transparency with smart contract-enabled systems for seamless supply chain management.",
      icon: <FaBitcoin className="text-orange-400 w-32 h-32" />, 
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 pt-10 md:pt-10 items-start">
        {/* Left side (sticky) */}
        <div className="w-full sm:w-[50%] sticky top-0 h-auto sm:h-screen flex items-center justify-center p-4">
          <div className="border border-gray-700 w-full sm:w-[500px] h-[500px] p-10 rounded-2xl">
            <h3 className="text-2xl sm:text-4xl">AI innovations and applications</h3>
            <p className="text-lg sm:text-xl mt-5">
              Cutting-edge AI solutions to accelerate various industries by driving
              automation, enhancing intelligence systems, and transforming operational
              efficiency.
            </p>
            <div className="flex justify-center items-center mt-10">
              <FaRobot className="text-purple-400 w-32 h-32 sm:w-40 sm:h-40" />
            </div>
          </div>
        </div>

        {/* Right side (scrolling cards) */}
        <div className="relative w-full sm:w-[50%] h-full" ref={container}>
          {projects.map((project, index) => {
            const targetScale = 1 - (projects.length - index) * 0;
            const range = [index * 0.25, 1];
            const scale = useTransform(scrollYProgress, range, [1, targetScale]);

            const imageScale = useTransform(
              useScroll({ target: container, offset: ["start end", "start start"] }).scrollYProgress,
              [0, 1],
              [2, 1]
            );

            return (
              <div
                key={index}
                className="cardContainer h-auto sm:h-screen flex items-center justify-center sticky top-[-70px] sm:top-[-100px]"
              >
                <motion.div
                  className="card flex flex-col relative h-auto sm:h-[360px] rounded-3xl p-12 border border-gray-700 bg-black"
                  style={{
                    scale,
                    top: `calc(${index * 25}px)`,
                  }}
                >
                  <h2 className="text-center m-0 text-2xl sm:text-4xl">{project.title}</h2>
                  <div className="flex flex-col sm:flex-row h-full mt-8 sm:gap-12">
                    <div className="desc w-full sm:w-[40%] relative top-[10%]">
                      <p className="text-lg sm:text-xl first-letter:text-2xl">
                        {project.description}
                      </p>
                    </div>
                    <div className="imgContainer relative w-full sm:w-[60%] h-full rounded-3xl overflow-hidden">
                      <motion.div style={{ scale: imageScale }} className="w-full h-full flex justify-center items-center">
                        {project.icon}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardParallaxComponent;
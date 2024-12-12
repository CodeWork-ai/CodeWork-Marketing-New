"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Colowatch Project",
    description:
      "Advances colon cancer detection through 3D modeling, AI, and machine learning. Ensures non-invasive, cost-effective diagnostics while improving patient comfort.",
    image: "colowatch.png",
    points: [
      "Creates detailed 3D intestine models from CT scans for enhanced visualization.",
      "Uses AI algorithms to detect tumors and anomalies precisely.",
      "Utilizes machine learning to improve detection accuracy through data analysis.",
      "Provides interactive tools for clinicians to manipulate 3D models.",
      "Reduces the need for invasive diagnostic procedures with early detection.",
    ],
  },
  {
    id: 2,
    title: "Text Analytics Project",
    description:
      "Leverages speech-to-text analytics, NLP, and sentiment analysis to improve caregiver communication strategies and service quality.",
    image: "text-analytics.png",
    points: [
      "Accurately transcribes audio recordings using speech-to-text technology.",
      "Applies NLP for understanding conversation context and semantics.",
      "Uses sentiment analysis to identify caregiver emotions and improvement areas.",
      "Highlights trends in caregiver feedback for strategy optimization.",
      "Generates visualized reports to interpret sentiment trends and insights.",
    ],
  },
  {
    id: 3,
    title: "Insight Scan Project",
    description:
      "Enhances radiology report comprehension by embedding educational definitions with NLP and deep learning, empowering patients without altering original content.",
    image: "insight-scan.png",
    points: [
      "Identifies medical terms and provides clear definitions using NLP.",
      "Employs deep learning for contextual understanding and report classification.",
      "Supports multilingual access for diverse patient populations.",
      "Includes visual aids like diagrams for simplified anatomical explanations.",
      "Evolves with patient feedback to ensure user-friendly, accurate information.",
    ],
  },
];

export default function HighlightSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const activeProject = projects[activeIndex];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 overflow-hidden">
      {/* Text Content */}
      <motion.div
        className="lg:w-1/2 z-10 space-y-8 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#fd6262] to-[#ADD8E6] bg-clip-text text-transparent">
          {activeProject.title}
        </h2>
        <p className="text-lg lg:text-xl text-[#ADD8E6]">
          {activeProject.description}
        </p>
        <ul className="space-y-4 text-white">
          {activeProject.points.map((point, index) => (
            <motion.li
              key={index}
              className="flex items-start text-lg group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <span className="mr-3 text-[#fd6262] text-2xl transform group-hover:scale-125 transition-all duration-300">
                ✔️
              </span>
              <p className="text-[#ADD8E6]">{point}</p>
            </motion.li>
          ))}
        </ul>
        <motion.button
          className="px-8 py-3 bg-[#fd6262] text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-[0_0_20px_#fd6262] hover:scale-110 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Learn More
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="lg:w-1/2 relative flex justify-center items-center z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Main Circle */}
        <motion.div
          className="relative w-96 h-96 rounded-full overflow-hidden shadow-lg bg-gray-800"
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <img
            src={activeProject.image}
            alt={activeProject.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Orbiting Circles */}
        <div className="absolute w-full h-full flex justify-center items-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => setActiveIndex(index)}
              className={`absolute w-16 h-16 rounded-full border-4 ${
                index === activeIndex
                  ? "border-[#fd6262] shadow-lg"
                  : "border-[#ADD8E6]"
              } cursor-pointer`}
              style={{
                transform: `rotate(${index * 120}deg) translate(14rem) rotate(-${index * 120}deg)`,
              }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full rounded-full object-cover hover:shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-pink-500 to-red-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-500 to-teal-500 opacity-20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

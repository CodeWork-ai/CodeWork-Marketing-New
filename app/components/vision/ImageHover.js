"use client";

import React from "react";
import { motion } from "framer-motion";

const ImageHoverCards = () => {
    const cards = [
        {
          title: "What Drives Our Vision?",
          description:
            "Pioneering Innovation At Codework, innovation is our guiding principle. We aim to harness the latest advancements in Full Stack Development, Cloud Computing, and AI-powered technologies to design solutions that meet the evolving needs of businesses.",
          image: "/bg3.avif",
          type: "Vision Statement", // Updated type to match the content
        },
        {
          title: "Our Mission in Action",
          description:
            "To realize our vision, Codework is committed to: Delivering bespoke web and mobile development services tailored to diverse industries. Offering scalable and secure Cloud Computing and DevOps Engineering solutions.",
          image: "/bg3.avif",
          type: "Mission Statement", // Updated type to match the content
        },
        {
          title: "Visionaries and Innovators",
          description:
            "Our leadership team is composed of forward-thinking individuals who shape our strategic direction and ensure we stay ahead of industry trends.",
          image: "/bg3.avif",
          type: "Leadership Insights", // Updated type to reflect leadership context
        },
        {
          title: "Technology Experts",
          description:
            "From Full Stack Developers to Cloud Computing specialists, our technical team leverages expertise in the latest technologies to create scalable and secure solutions tailored to client needs.",
          image: "/bg3.avif",
          type: "Technical Expertise", // Updated type to highlight technical focus
        },
        {
          title: "Creative Problem-Solvers",
          description:
            "Our engineers and designers bring creative ideas to life, solving complex challenges with innovative, user-friendly solutions.",
          image: "/bg3.avif",
          type: "Creative Solutions", // Updated type to emphasize creativity
        },
        {
          title: "Client-Centric Professionals",
          description:
            "At the heart of our team are professionals who prioritize client success, ensuring every project is aligned with your goals and delivers measurable impact.",
          image: "/bg3.avif",
          type: "Client Focus", // Updated type to reflect client-centric nature
        },
      ];      
  return (
    <div
      className="grid gap-8 p-8 mx-auto"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
        maxWidth: "1200px",
        justifyItems: "center",
        // Removed backgroundImage and set transparent background
        backgroundColor: "transparent", // Ensures no visible background layer
      }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="relative w-80 h-96 overflow-hidden rounded-lg shadow-lg cursor-pointer group"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `url(${card.image})`,
            }}
            whileHover={{
              filter: "blur(10px) brightness(0.8)",
              transition: { duration: 0.5 },
            }}
          ></motion.div>

          {/* Static Title */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-300"
          >
            <h2 className="text-xl font-bold text-white text-center">
              {card.title}
            </h2>
          </motion.div>

          {/* Animated Glow Border */}
          <motion.div
            className="absolute inset-0 w-full h-full border-4 rounded-lg opacity-0 group-hover:opacity-100 group-hover:border-blue-500 animate-pulse"
            whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
          ></motion.div>

          {/* Content Overlay */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-transparent via-black to-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 z-20"
            initial={{ y: 30 }}
            animate={{
              y: 0,
              transition: { duration: 0.5, delay: 0.1 },
            }}
          >
            <h4 className="text-sm font-semibold text-blue-400 uppercase mb-2 tracking-wide">
              {card.type}
            </h4>
            <motion.h2
              className="text-2xl font-bold text-white text-center mb-4"
              whileHover={{
                scale: 1.1,
                color: "#ff6363",
                transition: { duration: 0.3 },
              }}
            >
              {card.title}
            </motion.h2>
            <p className="text-sm text-gray-300 text-center">
              {card.description}
            </p>
          </motion.div>

          {/* Floating Effect */}
          <motion.div
            className="absolute -top-4 -right-4 bg-red-400 rounded-full w-16 h-16 opacity-70 group-hover:scale-150 group-hover:opacity-30"
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.5,
              opacity: 0.5,
              transition: { duration: 0.5 },
            }}
          ></motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageHoverCards;

"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-6 lg:px-20 py-12"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span>Discover</span> the Power of Insights
        </motion.h1>

        {/* Subtitle */}
        <p className="text-lg lg:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
          Dive into the latest tutorials, trends, and stories that define the tech landscape.
        </p>

        {/* Search Bar */}
        <motion.div
          className="mt-8 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full p-4 rounded-full text-gray-800 shadow-md focus:ring-4 focus:ring-red-400 transition focus:outline-none"
            />
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 shadow-lg transition">
              Search
            </button>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Bottom Left Circle */}
          <motion.div
            className="absolute bottom-10 left-10 w-20 h-20 bg-red-500 rounded-full opacity-20 animate-pulse"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          ></motion.div>

          {/* Top Right Circle */}
          <motion.div
            className="absolute top-10 right-10 w-16 h-16 bg-gray-200 rounded-full opacity-10 animate-pulse"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}

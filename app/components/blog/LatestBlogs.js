"use client";

import { motion } from "framer-motion";

export default function LatestBlogs() {
  const blogs = [
    {
      title: "Exploring Open Source Intelligence",
      date: "June 1, 2023",
      description: "Learn how to harness open source intelligence for competitive advantage.",
      image: "/images.jpg",
    },
    {
      title: "How to Get Started with React",
      date: "May 15, 2023",
      description: "A step-by-step guide to help you start building modern web apps with React.",
      image: "/images.jpg",
    },
    {
      title: "10 Tips for Data Science Beginners",
      date: "April 30, 2023",
      description: "Essential tips to kickstart your journey into data science.",
      image: "/images.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Latest Blogs
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
          <div className="space-y-16">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Marker */}
                <div className="hidden lg:flex lg:w-8 lg:h-8 rounded-full bg-red-500 border-4 border-gray-900"></div>

                {/* Blog Content */}
                <div className="lg:w-1/2 px-4 sm:px-6 lg:px-8 py-6 text-center lg:text-left">
                  <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 hover:text-red-400 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {blog.description}
                  </p>
                  <a
                    href="#"
                    className="text-red-500 font-medium hover:text-red-600 transition-all"
                  >
                    Read More →
                  </a>
                </div>

                {/* Blog Image */}
                <div className="lg:w-1/2 w-full h-48 sm:h-64 lg:h-64 overflow-hidden relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

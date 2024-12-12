"use client";

import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

// Blog Card Component (Reusable)
const BlogCard = memo(({ blog, index, onSelect }) => (
  <motion.div
    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2 cursor-pointer"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    onClick={onSelect}
  >
    <div className="relative h-64 overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2 hover:text-red-400 transition-colors">
        {blog.title}
      </h3>
      <p className="text-gray-400 text-sm md:text-base mb-4 line-clamp-2">
        {blog.description}
      </p>
      <span className="text-red-500 font-medium hover:text-red-600 transition">
        Read More →
      </span>
    </div>
  </motion.div>
));

// Main Component
export default function FeaturedBlogs() {
  const blogs = [
    {
      title: "The Rise of AI in Everyday Life",
      description:
        "Discover how AI is transforming industries and becoming part of our daily routines.",
      image: "/images.jpg",
      tags: ["AI", "Technology", "Innovation"],
      content: `
        Artificial Intelligence is no longer just a buzzword. From smart assistants like Alexa to AI-powered healthcare solutions, it's reshaping our world.
        Learn how AI is seamlessly integrating into everyday life and transforming the way we live and work  Artificial Intelligence is no longer just a buzzword. From smart assistants like Alexa to AI-powered healthcare solutions, it's reshaping our world.
        Learn how AI is seamlessly integrating into everyday life and transforming the way we live and work Artificial Intelligence is no longer just a buzzword. From smart assistants like Alexa to AI-powered healthcare solutions, it's reshaping our world.
        Learn how AI is seamlessly integrating into everyday life and transforming the way we live and work Artificial Intelligence is no longer just a buzzword. From smart assistants like Alexa to AI-powered healthcare solutions, it's reshaping our world.
        Learn how AI is seamlessly integrating into everyday life and transforming the way we live and work Artificial Intelligence is no longer just a buzzword. From smart assistants like Alexa to AI-powered healthcare solutions, it's reshaping our world.
        Learn how AI is seamlessly integrating into everyday life and transforming the way we live and work Artificial Intelligence is no longer just a buzzword. From smart assistants like Alexa to AI-powered healthcare solutions, it's reshaping our world.
        Learn how AI is seamlessly integrating into everyday life and transforming the way we live and work Artificial Intelligence is no longer just a buzzword. From smart assistants like Alexa to AI-powered healthcare solutions, it's reshaping our world.
        Learn how AI is seamlessly integrating into everyday life and transforming the way we live and work.
      `,
      images: ["/images.jpg", "/images.jpg", "/images.jpg"],
    },
    {
      title: "Top 10 Web Development Trends",
      description: "Stay ahead of the curve with the latest trends in web development.",
      image: "/images.jpg",
      tags: ["Web Development", "Trends", "Future"],
      content: `
        Web development is evolving rapidly. Technologies like WebAssembly, Progressive Web Apps, and serverless architectures are defining the future.
        Discover the top trends that will shape the web development landscape in the coming years.
      `,
      images: ["/web1.jpg", "/web2.jpg", "/web3.jpg"],
    },
    {
      title: "Introduction to Machine Learning",
      description: "A beginner's guide to understanding the basics of machine learning.",
      image: "/images.jpg",
      tags: ["Machine Learning", "Beginners", "AI"],
      content: `
        Machine Learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed.
        This beginner's guide explores the core concepts and applications of machine learning.
      `,
      images: ["/ml1.jpg", "/ml2.jpg", "/ml3.jpg"],
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleNextImage = () => {
    setCarouselIndex((prevIndex) =>
      (prevIndex + 1) % selectedBlog.images.length
    );
  };

  const handlePrevImage = () => {
    setCarouselIndex((prevIndex) =>
      (prevIndex - 1 + selectedBlog.images.length) % selectedBlog.images.length
    );
  };

  const shareOnLinkedIn = (title, url = "https://yourwebsite.com") => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${encodeURIComponent(
      title
    )}`;
    window.open(linkedInUrl, "_blank");
  };

  const shareOnTwitter = (title, url = "https://yourwebsite.com") => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${url}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100">
      {/* Section Title */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-4xl lg:text-5xl font-extrabold">Featured Blogs</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore curated insights, trends, and technologies shaping tomorrow.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            blog={blog}
            index={index}
            onSelect={() => {
              setSelectedBlog(blog);
              setCarouselIndex(0); // Reset carousel
            }}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedBlog(null)}
        >
          <motion.div
            className="bg-gray-900 rounded-xl shadow-lg w-full max-w-5xl lg:max-w-6xl h-[90%] lg:h-[85%] flex flex-col lg:flex-row overflow-hidden"
            style={{
              maxHeight: "95%", // Compact view on mobile
            }}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 bg-gray-800 text-gray-400 p-2 rounded-full hover:bg-gray-700 hover:text-white transition-all z-10"
              onClick={() => setSelectedBlog(null)}
            >
              <span className="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
        
            {/* Carousel Section */}
            <div
              className="lg:w-1/2 flex-shrink-0 relative bg-black flex items-center justify-center"
              style={{
                height: "auto",
                aspectRatio: "16/9", // Adjust based on your image aspect ratio
              }}
            >
              <motion.img
                key={carouselIndex}
                src={selectedBlog.images[carouselIndex]}
                alt={`Carousel ${carouselIndex}`}
                className="w-full h-full object-contain" // Ensures no cropping and fits dynamically
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              {/* Navigation Buttons */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow hover:bg-gray-700 transition-all"
                onClick={handlePrevImage}
              >
                ◀
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow hover:bg-gray-700 transition-all"
                onClick={handleNextImage}
              >
                ▶
              </button>
            </div>
        
            {/* Content Section */}
            <div
              className="lg:w-1/2 h-full flex flex-col p-6 overflow-hidden"
              style={{
                maxHeight: "100%",
              }}
            >
              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                {/* Blog Title */}
                <h2 className="text-3xl font-bold text-white mb-4">{selectedBlog.title}</h2>
        
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedBlog.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-sm font-medium shadow hover:scale-110 transition-transform"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
        
                {/* Blog Content */}
                <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                  {selectedBlog.content}
                </p>
              </div>
        
              {/* Footer Section */}
              <div className="mt-4 flex flex-col lg:flex-row items-center justify-between gap-4 border-t border-gray-700 pt-4">
                <span className="text-gray-400 text-sm text-center lg:text-left">
                  Scroll for more content
                </span>
                <div className="flex gap-4">
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-500 transition-all"
                    onClick={() => shareOnLinkedIn(selectedBlog.title)}
                  >
                    <FaLinkedin size={20} /> LinkedIn
                  </button>
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-full shadow hover:bg-blue-300 transition-all"
                    onClick={() => shareOnTwitter(selectedBlog.title)}
                  >
                    <FaTwitter size={20} /> Twitter
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        
        )}
      </AnimatePresence>
    </section>
  );
}

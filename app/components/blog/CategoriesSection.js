"use client";

import { motion } from "framer-motion";

export default function CategoriesSection() {
  const categories = ["AI", "Machine Learning", "Web Development", "Data Science", "Tech News"];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-100 mb-12">
          Explore by Category
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <motion.a
              key={index}
              href="#"
              className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

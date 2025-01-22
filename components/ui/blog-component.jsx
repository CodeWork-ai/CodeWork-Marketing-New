"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';

const BlogComponent = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch from your API
        const response = await fetch("https://prod-api.codework.ai/api/v1/blog/list_user_blog");
        const data = await response.json();

        // Flatten the array of blog objects
        const flattenedBlogs = data.flatMap((user) => user.blog || []);
        setBlogs(flattenedBlogs);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchBlogs();
  }, []);

  // Show only the first 4 blogs
  const firstFourBlogs = blogs.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Blogs</h2>

      {/* Grid container for blog cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {firstFourBlogs.map((blog, index) => (
          <div
            key={index}
            className={`
              group relative w-full h-[300px]
              rounded-md overflow-hidden
              shadow-lg
              /* Card container */
            `}
          >
            {/* Background image layer (simulating :before) */}
            <div
              className={`
                absolute inset-0
                bg-center bg-cover
                transition-transform
                duration-[800ms] ease-out
                group-hover:translate-y-[-4%]
              `}
              style={{
                backgroundImage: blog.image
                  ? `url('data:image/png;base64,${blog.image}')`
                  : "url('/placeholder.jpg')", // fallback if no blog.image
              }}
            />

            {/* Gradient overlay layer (simulating :after) */}
            <div
              className={`
                absolute inset-0
                h-[200%]
                bg-gradient-to-b from-transparent to-black
                pointer-events-none
                transform -translate-y-1/2
                transition-transform
                duration-[600ms] ease-out
                group-hover:translate-y-[-50%]
              `}
            />

            {/* 
              Content container:
              By default, it's shifted so that only the title area is visible at bottom.
              On hover, it slides fully upward to reveal description + button.
            */}
            <div
              className={`
                absolute left-0 w-full
                bottom-0 pb-4 px-4
                transform
                translate-y-[calc(100%-3rem)]
                group-hover:translate-y-0
                transition-transform
                duration-[600ms] ease-out
                z-10
                flex flex-col items-center
                text-white
              `}
            >
              {/* Title (visible in normal mode at bottom) */}
              <h3
                className="
                  text-xl font-bold
                  mb-2
                  transition-transform duration-[600ms] ease-out
                  group-hover:translate-y-[-1rem]
                "
              >
                {blog.title}
              </h3>

              {/* Description (hidden initially, appears on hover) */}
              <p
                className="
                  text-base italic leading-snug
                  opacity-0 translate-y-4
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-[600ms] ease-out
                "
              >
                {blog.description}
              </p>

              {/* "View Blog" button (hidden initially, appears on hover) */}
              <button
                className="
                  mt-4 px-4 py-2 bg-black text-white
                  text-sm uppercase font-bold tracking-wide
                  opacity-0 translate-y-4
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-[600ms] ease-out
                "
                onClick={() => {
                  // Your "View Blog" logic here
                }}
              >
                View Blog
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* "View More Blogs" button (only if more than 4) */}
      {blogs.length > 4 && (
        <div className="flex justify-end mt-6">
          <Link
            href='/blog-lists'
            className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            View More Blogs
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogComponent;

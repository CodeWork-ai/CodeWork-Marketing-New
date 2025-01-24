"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { IoArrowForward } from "react-icons/io5";

const BlogComponent = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch from your API
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/list_blogs_history`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();

        // Flatten the array of blog objects
        const flattenedBlogs = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));;
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
    <div className="container mx-auto px-4 py-40 lg:py-8">
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
                backgroundImage: blog?.blog?.find(section => section?.image && section.image !== "")?.image
                    ? `url('data:image/png;base64,${blog.blog.find(section => section?.image && section.image !== "").image}')`
                    : "url('/ecommerce.png')", // Fallback if no image
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
                translate-y-[calc(100%-4rem)]
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
                  mb-10
                  transition-transform duration-[600ms] ease-out
                  group-hover:translate-y-[-1rem]
                "
              >
                {blog.title}
              </h3>

              {/* "View Blog" button (hidden initially, appears on hover) */}
              <button
                className="bg-[#FF035B] hover:bg-opacity-80 text-black hover:text-white font-medium rounded-sm px-2 py-1 md:px-3 md:py-2 xl:px-5 xl:py-3 text-sm md:text-sm xl:text-base 2xl:text-lg"
                onClick={() => router.push(`/blog/${blog.id}`)}
              >
                View Blog
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <Link href='/blog-lists'>
          <button
            className="bg-gray-800 text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
            type="button"
          >
            <div
              className="bg-[#FF035B] rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
            >
              <IoArrowForward size={25} color="#000000" />
            </div>
            <p className="text-white translate-x-2">For More</p> {/* Center the text */}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogComponent;

"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoIosArrowDroprightCircle } from "react-icons/io";

// 1) SkeletonCard placeholder
const SkeletonCard = ({ reversed = false }) => (
  <div
    className={`
      flex
      ${reversed ? "flex-row-reverse" : "flex-row"}
      w-full h-[300px]
      rounded-lg overflow-hidden
      animate-pulse
    `}
  >
    {/* image placeholder */}
    <div className="w-1/2 h-full bg-gray-300" />
    {/* text placeholder */}
    <div className="w-1/2 h-full flex flex-col justify-between p-6 space-y-4">
      <div className="space-y-2">
        <div className="h-6 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-300 rounded" />
        <div className="h-4 bg-gray-300 rounded w-5/6" />
        <div className="h-4 bg-gray-300 rounded w-2/3" />
      </div>
      <div className="h-8 bg-gray-300 rounded w-1/3" />
    </div>
  </div>
);

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
         "https://prod-api.codework.ai/api/v1/blog/list_blogs_history"
      );
      const data = await res.json();
      const flattened = data.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setAllBlogs(flattened);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="bg-gradient-to-b from-[#FBF8E6] to-[#EBF9FF] pt-64 p-9">
          <section className="grid grid-cols-1 gap-24">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonCard key={i} reversed={i % 2 === 1} />
            ))}
          </section>
        </div>
      ) : allBlogs.length === 0 ? (
        <div className="flex h-screen w-full items-center justify-center">
          <p className="text-xl text-black">No blogs available!</p>
        </div>
      ) : (
        <div className="bg-gradient-to-b from-[#FBF8E6] to-[#EBF9FF] pt-64 p-9">
          <section className="grid grid-cols-1 gap-24">
            {allBlogs.map((blog, index) => {
              const isReversed = index % 2 === 1;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={blog.id}
                  className={`
                    flex
                    ${isReversed ? "flex-row-reverse" : "flex-row"}
                    w-full h-[300px]
                    rounded-lg overflow-hidden
                  `}
                >
                  {/* Image side */}
                  <div className="w-1/2 h-full">
                    <div
                      className={`
                        w-full h-full
                        bg-cover bg-center
                        ${isEven
                          ? "rounded-tl-[150px] rounded-bl-[150px] rounded-tr-[150px] border-cyan-400 border-b-[5px] border-r-[5px]"
                          : "rounded-tl-[150px] rounded-tr-[150px] rounded-br-[150px] border-cyan-400 border-b-[5px] border-l-[5px]"}
                      `}
                      style={{
                        backgroundImage: blog?.blog[0]?.image
                          ? `url('data:image/png;base64,${blog.blog[0].image}')`
                          : "url('/ecommerce.png')",
                      }}
                    />
                  </div>

                  {/* Text side */}
                  <div className="w-1/2 h-full flex flex-col justify-between p-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-black">
                        {blog.title || "Untitled Blog"}
                      </h3>
                      <p className="text-sm text-black leading-relaxed mb-4">
                        {blog.blog[0].description.length > 250
                          ? blog.blog[0].description.slice(0, 250) + "..."
                          : blog.blog[0].description}
                      </p>
                      <button
                        className="
                          mt-1
                          bg-gradient-to-r from-purple-300 to-cyan-300
                          hover:from-purple-400 hover:to-cyan-500
                          text-gray-900 font-medium
                          rounded-full px-6 py-2 text-xs
                          transition-all duration-200
                        "
                        onClick={() => router.push(`/blog/${blog.id}`)}
                      >
                        Read More
                      </button>
                      <p className="text-xs text-black mt-4">
                        By {blog.name} –{" "}
                        {new Date(blog.created_at).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      )}
    </>
  );
};

export default Blogs;

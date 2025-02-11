"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Blogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/list_blogs_history`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            // Flatten out the blog arrays from each user
            const flattened = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
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

    // Separate the first blog as "featured" and the rest as "others"
    const [featuredBlog, ...otherBlogs] = allBlogs;

    const Spinner = ({ size = '5', color = 'red-500' }) => {
        return (
          <div className="flex items-center justify-center">
            <div
            className={`w-${size} h-${size} border-4 border-${color} border-solid rounded-full border-t-transparent animate-spin`}
            ></div>
          </div>
        );
    };

    return (
        <>
            {isLoading ? (
                <div className="flex h-screen w-full items-center justify-center">
                    <Spinner size="10" color="white" />
                </div>
            ): allBlogs.length === 0 ? (
                <div className="flex h-screen w-full items-center justify-center">
                    <p className="text-xl text-white">No blogs available!</p>
                </div>
            ) : (
                <div className="text-white px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 font-sans">
                    <section className="relative w-full h-[500px] mb-12 rounded-md overflow-hidden shadow-lg">
                        {/* Background image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: featuredBlog?.blog[0]?.image
                                    ? `url('data:image/png;base64,${featuredBlog?.blog[0]?.image}')`
                                    : "url('/ecommerce.png')", // Fallback if no image
                            }}
                        />
                        {/* Dark overlay for text contrast */}
                        <div className="absolute inset-0 bg-black bg-opacity-70" />

                        {/* Text content (overlaid) */}
                        <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                                {featuredBlog?.title || "Untitled Blog"}
                            </h2>
                            <p className="max-w-2xl text-base md:text-lg leading-relaxed mb-6">
                                {/* {featuredBlog?.description || "No description available."} */}
                                {featuredBlog?.blog[0]?.description.length > 100
                                    ? `${featuredBlog?.blog[0]?.description.slice(0, 100)}...`
                                    : featuredBlog?.blog[0]?.description}
                            </p>
                            <button
                                className="bg-[#FF035B] hover:bg-opacity-80 text-black hover:text-white font-medium rounded-sm px-2 py-1 md:px-3 md:py-2 xl:px-5 xl:py-3 text-sm md:text-sm xl:text-base 2xl:text-lg"
                                onClick={() => router.push(`/blog/${featuredBlog.id}`)}
                            >
                                View Blog
                            </button>
                        </div>
                    </section>

                    {/* 2) OTHER BLOGS IN A VERTICAL “ALTERNATING” LAYOUT */}
                    <section className="space-y-6">
                        {otherBlogs.map((blog) => (
                            <div key={blog.id} className="p-4 bg-gray-800 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-[#FF035B]">{blog.title}</h3>
                            {blog.blog.length > 0 && (
                              <div className="mt-3">
                                <h4 className="text-lg font-semibold text-gray-200">
                                  {blog.blog[0].title}
                                </h4>
                                <p className="text-gray-300">
                                  {blog.blog[0].description.length > 150
                                    ? `${blog.blog[0].description.slice(0, 150)}...`
                                    : blog.blog[0].description}
                                </p>
                                
                              </div>
                            )}  
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-sm text-gray-400 mt-3">
                                    By {blog.name} - {new Date(blog.created_at).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: 'short',
                                        year: 'numeric',
                                    })}
                                    </p>
                                </div>
                                <div>
                                    <button
                                        className="hover:text-[#FF035B] underline"
                                        onClick={() => router.push(`/blog/${blog.id}`)}
                                    >
                                        View Blog
                                    </button>
                                </div>
                            </div>
                          </div>
                        ))}
                    </section>
                </div>
            )}
        </>
    );
};

export default Blogs;

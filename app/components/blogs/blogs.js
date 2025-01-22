"use client";
import React, { useState, useEffect } from "react";

const Blogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://prod-api.codework.ai/api/v1/blog/list_user_blog");
                const data = await res.json();
                // Flatten out the blog arrays from each user
                const flattened = data.flatMap((user) => user.blog || []);
                setAllBlogs(flattened);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchData();
    }, []);

    // Separate the first blog as "featured" and the rest as "others"
    const [featuredBlog, ...otherBlogs] = allBlogs;

    return (
        <div className="bg-white text-white px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 py-32 font-sans">
            <section className="relative w-full h-[500px] mb-12 rounded-md overflow-hidden shadow-lg">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: featuredBlog?.image
                            ? `url('data:image/png;base64,${featuredBlog.image}')`
                            : "url('/placeholder.jpg')", // Fallback if no image
                    }}
                />
                {/* Dark overlay for text contrast */}
                <div className="absolute inset-0 bg-white bg-opacity-70" />

                {/* Text content (overlaid) */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        {featuredBlog?.title || "Untitled Blog"}
                    </h2>
                    <p className="max-w-2xl text-base md:text-lg leading-relaxed mb-6">
                        {featuredBlog?.description || "No description available."}
                    </p>
                    <button
                        className="px-6 py-3 bg-black bg-opacity-70 hover:bg-opacity-90 transition-colors text-white font-semibold uppercase tracking-wide rounded"
                        onClick={() => {
                            // e.g. route to single blog detail page
                        }}
                    >
                        View Blog
                    </button>
                </div>
            </section>

            {/* 2) OTHER BLOGS IN A VERTICAL “ALTERNATING” LAYOUT */}
            <section className="space-y-16">
                {otherBlogs.map((blog, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center md:items-stretch 
                        ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                    >
                        {/* Image side */}
                        <div className="md:w-1/2 h-64 md:h-auto rounded-lg overflow-hidden shadow-md">
                            <div
                                className="w-full h-full bg-contain bg-center"
                                style={{
                                    backgroundImage: blog.image
                                        ? `url('data:image/png;base64,${blog.image}')`
                                        : "url('/placeholder.jpg')",
                                }}
                            />
                        </div>

                        {/* Text side */}
                        <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-10 mt-4 md:mt-0 md:ml-6 dark:text-gray-100">
                            <h3 className="text-2xl font-bold mb-3">
                                {blog.title || "Untitled Blog"}
                            </h3>
                            <p className="text-base mb-6 leading-relaxed">
                                {blog.description || "No description available."}
                            </p>

                            <button
                                className="inline-block w-fit px-5 py-2 bg-black text-white font-medium text-sm uppercase tracking-wide rounded hover:bg-gray-800 transition-colors"
                                onClick={() => {
                                    // e.g. route to single blog detail page
                                }}
                            >
                                View Blog
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Blogs;

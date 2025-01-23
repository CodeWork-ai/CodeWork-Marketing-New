"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
                    <section className="space-y-16">
                        {otherBlogs.map((blog, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center md:items-stretch 
                                ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Image side */}
                                <div
                                    className="md:w-1/2 h-64 md:h-auto rounded-lg overflow-hidden shadow-md"
                                >
                                    <div
                                        className="w-full h-full bg-contain bg-center"
                                        style={{
                                            backgroundImage: blog?.blog?.find(section => section?.image && section.image !== "")?.image
                                                ? `url('data:image/png;base64,${blog.blog.find(section => section?.image && section.image !== "").image}')`
                                                : "url('/ecommerce.png')", // Fallback if no image
                                        }}
                                    />
                                </div>

                                {/* Text side */}
                                <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-10 mt-4 md:mt-0 md:ml-6 dark:text-gray-100">
                                    <h3 className="text-2xl font-bold mb-3">
                                        {blog.title || "Untitled Blog"}
                                    </h3>
                                    <p className="text-base mb-6 leading-relaxed">
                                        {/* {blog.description || "No description available."} */}
                                        {blog?.blog?.description?.length > 100
                                        ? `${blog?.blog?.description.slice(0, 100)}...`
                                        : blog?.blog?.description}
                                    </p>

                                    <button
                                        className="bg-[#FF035B] hover:bg-opacity-80 text-black hover:text-white font-medium rounded-sm px-2 py-1 md:px-3 md:py-2 xl:px-5 xl:py-3 text-sm md:text-sm xl:text-base 2xl:text-lg"
                                        onClick={() => router.push(`/blog/${blog.id}`)}
                                    >
                                        View Blog
                                    </button>
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

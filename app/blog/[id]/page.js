"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://prod-api.codework.ai/api/v1/blog/list_blog_details?id=${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => {
        console.error(err);
        alert("Could not load blog.");
      });
  }, [id]);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#faf7e7]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-cyan-500"></div>
      </div>
    );
  }

  const initial = blog.name
    ? blog.name.trim().split(" ")[0].charAt(0).toUpperCase()
    : "";

  return (
    <div className="bg-gradient-to-b from-[#faf7e7] to-[#EBF9FF] py-16">
      {/* widen container to ~1280px */}
      <div className="max-w-screen-xl mx-auto px-4 pt-16 sm:px-6 lg:px-8">
        {/* Title (original sizes) */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-8">
          {blog.title}
        </h1>

        {/* Hero Image (full‐width of the wider container) */}
        <div className="overflow-hidden rounded-2xl border-l-0  border-t-0  border-[7px] border-cyan-300 mb-8">
          <img
            src={
              blog.blog[0]?.image
                ? `data:image/png;base64,${blog.blog[0].image}`
                : "/fallback.png"
            }
            alt={blog.title}
            className="w-full h-[450px] object-cover"
          />
        </div>

        {/* Author + Date */}
        <div className="flex items-center text-gray-600 text-sm mb-12">
          <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#72eaff] to-[#dd57ff] text-white font-medium flex items-center justify-center mr-3">
            {initial}
          </div>
          <span className="font-medium">{blog.name}</span>
          <span className="mx-2">·</span>
          <time>
            {new Date(blog.created_at).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>

        {/* Content Sections */}
        <article className="space-y-16">
          {blog.blog.map((section, idx) => (
            <section key={idx} className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {section.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {section.description}
              </p>
            </section>
          ))}
        </article>
      </div>
    </div>
  );
};

export default BlogDetails;

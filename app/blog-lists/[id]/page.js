"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/list_blog_details?id=${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.ok) {
        setBlog(data);
      } else {
        alert(data.detail || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Network error. Please try again later.');
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [id]);

  if (!blog) {
    return (
      <div className="h-full flex justify-center items-center text-white py-20">
        <p className="text-lg">Loading blog...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Blog Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gradient mb-4">{blog?.title}</h1>
          <p className="text-lg text-gray-400">{blog?.description}</p>
        </header>

        {/* Blog Sections */}
        {blog?.blog?.map((section, index) => (
          <section key={index} className="mb-10">
            {/* Image Section */}
            {section?.image && (
              <div className="flex justify-center mb-6">
                <img
                  src={section.image ? `data:image/png;base64,${section.image}` : "/ecommerce.png"}
                  alt={section.title}
                  className="w-full sm:w-[500px] h-auto rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Title and Description */}
            <div className="space-y-4 px-4 sm:px-10">
              <h2 className="text-3xl font-bold">{section.title}</h2>
              <p className="text-lg leading-relaxed text-gray-300">{section.description}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;

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

  const Spinner = ({ size = '5', color = 'red-500' }) => {
    return (
      <div className="flex items-center justify-center">
        <div
        className={`w-${size} h-${size} border-4 border-${color} border-solid rounded-full border-t-transparent animate-spin`}
        ></div>
      </div>
    );
  };  

  if (!blog) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner size="10" color="white" />
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white py-20">
      <div className="max-w-screen-xl mx-auto px-6 bg-black opacity-80 rounded-2xl p-6 sm:p-10">
        {/* Blog Header */}
        <header className="text-center mb-4">
          <h1 className="text-4xl font-extrabold text-gradient mb-4">{blog?.title}</h1>
        </header>
        <p className="text-md text-white px-6 sm:px-10">
          {blog.name}
        </p>
        <p className="text-md text-white px-6 sm:px-10 mb-16">
          {new Date(blog.created_at).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </p>

        {/* Blog Sections */}
        {blog?.blog?.map((section, index) => (
          <section key={index} className="mb-10 px-6 sm:px-16">
            <div className={`flex ${index % 2 === 0 ? 'flex-col sm:flex-row-reverse' : 'flex-col sm:flex-row'} items-center`}>
              {/* Image Section */}
              {section?.image && (
                <div className="w-full sm:w-[500px] mb-6 sm:mb-0 sm:mr-6">
                  <img
                    src={section.image ? `data:image/png;base64,${section.image}` : "/ecommerce.png"}
                    alt={section.title}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              )}

              {/* Title and Description */}
              <div className="space-y-4 sm:px-10 flex-1">
                <h2 className="text-3xl font-bold">{section.title}</h2>
                <p className="text-lg leading-relaxed text-gray-300">{section.description}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;

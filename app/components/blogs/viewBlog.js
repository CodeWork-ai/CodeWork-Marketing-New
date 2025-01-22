import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

export default function ViewBlog({ onClose, blog }) {
  return (
    <div className="relative rounded-lg">
      <section className="relative w-full h-auto mb-12 rounded-md overflow-hidden shadow-lg">
        {/* Close Button */}
        <div className="flex justify-end">
        <button 
          onClick={onClose} 
          className="fixed text-secondary hover:text-secondary p-5 rounded-full z-20"
          aria-label="Close"
        >
          <AiOutlineClose className='w-6 h-6'/>
        </button>
      </div>

        

        {/* Blog Content */}
        <div className="relative z-10 h-full flex flex-col justify-center p-10 text-white">
          <h1 className="text-4xl font-extrabold mb-4">{blog.title}</h1>
          <p className="text-lg leading-relaxed mb-8">{blog.description}</p>

          {/* Blog Sections */}
          {blog.blog && blog.blog.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
              {section?.image && (
                <div className="mt-4">
                  <img
                    src={section.image ? `data:image/png;base64,${section.image}` : "/ecommerce.png"}
                    alt={section.title}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              )}
              <p className="text-lg leading-relaxed">{section.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

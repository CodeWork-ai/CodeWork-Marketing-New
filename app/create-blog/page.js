'use client'

import { setCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    position: '',
    title: '',
    blog: [
      {
        section_number: 0,
        title: '',
        description: '',
        image: '',
      },
    ],
  });

  const router = useRouter();

  const handleChange = (e, index, field) => {
    const { name, value } = e.target;
    if (field === 'blog') {
      const updatedBlog = [...formData.blog];
      updatedBlog[index][name] = value;
      setFormData({ ...formData, blog: updatedBlog });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result.split(',')[1];
      const updatedBlog = [...formData.blog];
      updatedBlog[index].image = base64Image;
      setFormData({ ...formData, blog: updatedBlog });
    };
    reader.readAsDataURL(file);
  };

  const addBlogSection = () => {
    setFormData({
      ...formData,
      blog: [
        ...formData.blog,
        {
          section_number: formData.blog.length,
          title: '',
          description: '',
          image: '',
        },
      ],
    });
  };

  const removeBlogSection = (index) => {
    const updatedBlog = formData.blog.filter((_, i) => i !== index);
    setFormData({ ...formData, blog: updatedBlog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getCookie('token');
    try {
      const response = await fetch(
        'https://prod-api.codework.ai/api/v1/blog/create_blog',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Blog created successfully:', data);
      setCookie('token', '');
      setCookie('email', '');
      router.push('/user-blogs');
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div className="min-h-screen mt-20 px-6 bg-gradient-to-b from-white/80 to-blue-50">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-3xl bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-8"
      >
        {/* two-column rows for the first four fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={formData.position}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
            />
          </div>
        </div>

        {/* full-width blog title */}
        <div>
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
          />
        </div>

        {/* dynamic sections */}
        {formData.blog.map((section, index) => (
          <div
            key={index}
            className="space-y-4 p-6 bg-white rounded-lg border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-700">
              Section {index + 1}
            </h3>
            <input
              type="text"
              name="title"
              placeholder="Section Title"
              value={section.title}
              onChange={(e) => handleChange(e, index, 'blog')}
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={section.description}
              onChange={(e) => handleChange(e, index, 'blog')}
              required
              className="w-full p-3 h-24 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400 resize-none"
            />

            {/* hidden file input + label trigger */}
            <input
              id={`file-input-${index}`}
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, index)}
              className="hidden"
            />
            <label
              htmlFor={`file-input-${index}`}
              className="relative flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V8m0 0l-3 3m3-3l3 3m10 8v-8m0 0l3 3m-3-3l-3 3M12 12v8"
                />
              </svg>
              <p className="mt-2 text-gray-500">
                Click to upload or drag and drop images
              </p>
            </label>

            <button
              type="button"
              onClick={() => removeBlogSection(index)}
              className="mt-2 px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200"
            >
              Remove Section
            </button>
          </div>
        ))}

        {/* actions */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={addBlogSection}
            className="px-5 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200"
          >
            Add Section
          </button>

          <button
            type="submit"
            className="ml-auto px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-400 text-white font-medium rounded-full shadow-lg hover:opacity-90 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;

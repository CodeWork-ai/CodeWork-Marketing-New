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
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result.split(',')[1];
        const updatedBlog = [...formData.blog];
        updatedBlog[index].image = base64Image;
        setFormData({ ...formData, blog: updatedBlog });
      };
      reader.readAsDataURL(file);
    }
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
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getCookie('token')
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/create_blog`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Blog created successfully:', data);
      setCookie('token', '');
      setCookie('email', '')
      router.push('/user-blogs')
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div className="p-6 mt-20 bg-opacity-30 min-h-screen">
      {/* <h1 className="text-2xl font-bold mb-6">Create Blog</h1> */}
      <form onSubmit={handleSubmit} className="bg-black bg-opacity-70 p-6 rounded shadow-md space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-100">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 bg-black bg-opacity-15 text-gray-100 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-100">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 bg-black bg-opacity-15 text-gray-100 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-100">Company:</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 bg-black bg-opacity-15 text-gray-100 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-100">Position:</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 bg-black bg-opacity-15 text-gray-100 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-100">Blog Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 bg-black bg-opacity-15 text-gray-100 focus:ring-blue-500"
          />
        </div>

        {formData.blog.map((section, index) => (
          <div key={index} className="bg-black bg-opacity-15 p-4 rounded border mb-4 space-y-3">
            <h3 className="text-lg font-semibold mb-2 text-gray-100">Section {index + 1}</h3>
            <div>
              <label className="block text-sm font-medium  text-gray-100">Section Title:</label>
              <input
                type="text"
                name="title"
                value={section.title}
                onChange={(e) => handleChange(e, index, 'blog')}
                required
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 bg-black bg-opacity-15 text-gray-100 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-100">Description:</label>
              <textarea
                name="description"
                value={section.description}
                onChange={(e) => handleChange(e, index, 'blog')}
                required
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 bg-black bg-opacity-15 text-gray-100 focus:ring-blue-500"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-100">Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, index)}
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={() => removeBlogSection(index)}
              className="mt-3 border bg-black text-white rounded-lg hover:font-semibold p-2"
            >
              Remove Section
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addBlogSection}
          className="mt-4 px-4 py-2 border bg-black text-white rounded-lg hover:font-semibold"
        >
          Add Section
        </button>

        <button
          type="submit"
          className="mt-4 px-4 py-2 border bg-black text-white rounded-lg hover:font-semibold ml-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
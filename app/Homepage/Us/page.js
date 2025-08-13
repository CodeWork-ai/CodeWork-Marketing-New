"use client";

import { useState} from 'react';
import { useRouter } from 'next/navigation';

export default function Us() {


  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim())
      newErrors.name = 'Name is required';
    else if (formData.name.length < 2)
      newErrors.name = 'Name must be at least 2 characters';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email)
      newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email))
      newErrors.email = 'Please enter a valid email';

    const mobileRegex = /^[0-9]{10}$/;
    if (formData.mobile && !mobileRegex.test(formData.mobile))
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';

    if (!formData.message.trim())
      newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);
      alert('Form submitted successfully!');
      router.push('/Homepage');
    }
  };

  return (
    <div>
      <div className="absolute top-6 left-6 z-10 flex items-center space-x-2">
        <img
          src="/viewlogo.png.png"
          alt="Logo"
          className="h-20 w-40"
        />
        <button
          className="ml-240 bg-blue-600 p-3 hover:p-4 hover:bg-blue-800 hover:scale-105 rounded text-white font-serif"
          onClick={() => router.push('/Homepage')}
          aria-label="Back to Homepage"
        >
          Home
        </button>
      </div>
     


      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 max-w-3xl">
          {/*<img src="./bg2.png" alt="Logo" className="w-80 h-20 mx-auto mb-6" />*/}
          <p className="mt-2 text-center text-gray-600 font-serif">
            For questions regarding our products and services you can also contact us by filling out the form below.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Name */}
            <div className="font-serif">
              <label className="block text-gray-800 mb-1">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border-b ${errors.name ? 'border-red-500' : 'border-purple-300'} bg-transparent py-2 text-gray-600 font-serif focus:outline-none focus:border-purple-500`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="font-serif">
              <label className="block text-gray-800 mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border-b ${errors.email ? 'border-red-500' : 'border-purple-300'} bg-transparent py-2 text-gray-600 font-serif focus:outline-none focus:border-purple-500`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Mobile */}
            <div className="font-serif">
              <label className="block text-gray-800 mb-1">Mobile No</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={`w-full border-b ${errors.mobile ? 'border-red-500' : 'border-purple-300'} bg-transparent py-2 text-gray-600 font-serif focus:outline-none focus:border-purple-500`}
              />
              {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
            </div>

            {/* Message */}
            <div className="font-serif">
              <label className="block text-gray-800 mb-1">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full border ${errors.message ? 'border-red-500' : 'border-purple-300'} bg-transparent py-2 px-3 text-gray-600 font-serif focus:outline-none focus:ring-2 focus:ring-purple-200 rounded`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-purple-500 text-white py-2 px-6 rounded hover:bg-purple-600 hover:scale-105 transition-all duration-300 font-serif"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

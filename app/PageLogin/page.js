"use client";

import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const PageLogin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const validatePassword = (password) => {
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasMinLength = password.length >= 5;

    return hasSpecialChar && hasCapitalLetter && hasMinLength;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setErrorMessage('');
    setPasswordError(false);

    // Check if any field is empty
    if (!formData.email.trim() || !formData.password.trim()) {
      setError(true);
      setErrorMessage('Please fill in all fields');
      return;
    }

    // Check for admin credentials
    if (formData.email === "lovioadmin123@gmail.com" && formData.password === "Lovio#123") {
      localStorage.setItem('userToken', 'admin-token');
      localStorage.setItem('userEmail', formData.email);
      router.push('/Admin'); // Route to Admin page
    } else {
      // Check for valid email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError(true);
        setErrorMessage('Please enter a valid email address');
        return;
      }

      // Check password requirements
      if (!validatePassword(formData.password)) {
        setError(true);
        setPasswordError(true);
        setErrorMessage('Password must contain at least one special character, one capital letter, and be at least 5 characters long');
        return;
      }

      // If all validations pass, route to Homepage
      localStorage.setItem('userToken', 'user-token');
      localStorage.setItem('userEmail', formData.email);
      router.push('/Homepage');
      router.push('/Products');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear general errors
    setError(false);
    setErrorMessage('');

    // Real-time password validation
    if (name === 'password') {
      setPasswordError(!validatePassword(value));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
        {/* Left Side - Image/Brand */}
        <div className="hidden md:block bg-gradient-to-br from-purple-400 to-pink-400 p-12 relative">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10 h-full flex flex-col justify-center">
            <img src="./Ln.png" alt="Logo" className="w-20 h-10 jusity-center ml-5 mb-20" />
            <h1 className="text-4xl font-bold font-serif text-white mb-6">Welcome Back!</h1>
            <p className="text-white font-serif text-lg">Enter your details to access your account</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex flex-col justify-center p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-purple-800 font-serif mb-8 border-b-2 border-purple-500 pb-2 w-fit">
            Login
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="relative group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-12 py-4 rounded-xl text-gray-700 border 
                         ${error && !passwordError ? 'border-red-500' : 'border-gray-300'}
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                         transition-all duration-200 ease-in-out
                         group-hover:border-purple-400`}
              />
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500" />
            </div>

            <div className="relative group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-12 py-4 rounded-xl text-gray-700 border
                         ${passwordError ? 'border-red-500' : 'border-gray-300'}
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                         transition-all duration-200 ease-in-out
                         group-hover:border-purple-400`}
                     
              />
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500" />
            </div>

            {error && (
              <p className="text-red-500 text-sm font-serif">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl
                       font-bold text-lg tracking-wider shadow-lg transform transition-all duration-200
                       hover:from-purple-700 hover:to-pink-700 hover:scale-[1.02] active:scale-[0.98]"
            >
              LOGIN
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link href="/PageLogin/Forget" className="text-purple-600 font-medium hover:text-purple-800 transition-colors font-serif">
              Forgot your password?
            </Link>
            <p className="mt-6 text-sm text-gray-500 font-serif">
              By logging in, you agree to our
              <Link href="#" className="text-purple-600 hover:text-purple-800 ml-1 font-serif">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
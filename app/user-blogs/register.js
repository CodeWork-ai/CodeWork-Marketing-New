'use client';
import React, { useState } from 'react';

const Register = ({ onBackToLogin }) => {
  const [registerData, setRegisterData] = useState({ email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [registerMessage, setRegisterMessage] = useState('');

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`https://prod-api.codework.ai/api/v1/blog/register_email?email=${registerData.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      const data = await response.json();

      if (response.ok) {
        setRegisterMessage('');
        onBackToLogin();
      } else {
        setRegisterMessage(data.detail || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setRegisterMessage('Network error. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-[600px] w-full">
      <div className="max-w-4xl text-center">
        <h1 className="W-2/3 text-2xl md:text-2xl my-4 lg:text-4xl 2xl:text-6xl text-gray-200">
          Join the Creator Community! 🌟
        </h1>
        <div className="max-w-3xl mx-auto p-10 bg-black opacity-80 shadow-lg rounded-lg">
          <p className="text-lg mb-6 text-white">
            Ready to inspire, inform, and connect? Register now to become part of a vibrant community of creators and bloggers. It's time to share your voice with the world.
          </p>
          <div className="space-y-4">
            <p className="text-white font-medium">
              🖋️ <span className="font-normal">Start writing and sharing your ideas</span>
            </p>
            <p className="text-white font-medium">
              📈 <span className="font-normal">Track your blog's growth and reach</span>
            </p>
            <p className="text-white font-medium">
              🌍 <span className="font-normal">Connect with like-minded readers and writers</span>
            </p>
          </div>
          <div className="opacity-100 p-6 rounded shadow-md space-y-4 mt-2">
            <h2 className="block text-white text-sm text-center lg:text-base 2xl:text-2xl font-bold mb-4">Create your account</h2>
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  placeholder='Email'
                  required
                  className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF035B] hover:bg-opacity-80 text-black hover:text-white py-2 px-4 font-medium rounded-sm"
                disabled={isLoading}
              >
                {isLoading ? 'Registering...' : 'Register'}
              </button>
              <p className="text-white text-center mt-4">
                Already have an account?{' '}
                <button type="button" onClick={onBackToLogin} className="underline text-[#FF035B]">
                  Login here
                </button>
              </p>  
              {registerMessage && (
                <p className="text-center text-sm mt-4 text-gray-200">{registerMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

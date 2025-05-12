'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import Register from './register';

const ListUserBlogs = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({ email: '' });
  const [loginMessage, setLoginMessage] = useState('');
  const [blogMessage, setBlogMessage] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [email, setEmail] = useState('');
  const router = useRouter();
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const token = getCookie('token');
    const savedEmail = getCookie('email');
    if (token && savedEmail) {
      setIsLoggedIn(true);
      setEmail(savedEmail);
    }
  }, []);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://prod-api.codework.ai/api/v1/blog/get_email?email=${loginData.email}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setLoginMessage('');
        setCookie('token', data.jwt_token, { maxAge: 60 * 15 });
        setCookie('email', data.email, { maxAge: 60 * 15 });
        setEmail(loginData.email);
        setIsLoggedIn(true);
      } else {
        setLoginMessage(data.detail || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setLoginMessage('Network error. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUserBlogs = async () => {
    if (!isLoggedIn) return;
    const token = getCookie('token');
    setIsPageLoading(true);
    try {
      const response = await fetch(
        `https://prod-api.codework.ai/api/v1/blog/list_user_blog?email=${email}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        const sortedBlogs = data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setBlogs(sortedBlogs);
        setBlogMessage('');
      } else {
        setBlogMessage(data.detail || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setBlogMessage('Network error. Please try again later.');
    } finally {
      setIsPageLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserBlogs();
    }
  }, [isLoggedIn]);

  const Spinner = ({ size = '5', color = 'red-500' }) => (
    <div className="flex items-center justify-center">
      <div
        className={`w-${size} h-${size} border-4 border-${color} border-solid rounded-full border-t-transparent animate-spin`}
      />
    </div>
  );

  const handleBackToLogin = () => {
    setIsRegistering(false);
  };

  return (
    <div className=" mt-20 bg-yellow-50 bg-opacity-15 min-h-screen">
      {/* Login Screen */}
      {!isLoggedIn && !isRegistering && (
        <div className="flex items-center justify-center h-[600px] w-full">
          <div className="max-w-3xl text-center">
            <h1 className="W-2/3 text-2xl md:text-2xl my-4 lg:text-4xl 2xl:text-6xl text-gray-700">
              Welcome Back, Creator! 🌟
            </h1>
            <div className="max-w-3xl mx-auto p-10 bg-sky-50 opacity-80 shadow-lg rounded-lg">
              <p className="text-lg mb-6 text-gray-600">
                Ready to inspire, inform, and connect? Your words have the
                power to shape perspectives, spark conversations, and leave a
                lasting impact. Whether you're sharing insights, telling a
                story, or offering tips, we're here to help you bring your
                vision to life.
              </p>
              <div className="space-y-4">
                <p className="text-gray-600 font-medium">
                  🖋️{' '}
                  <span className="font-normal">Jump into your writing zone</span>
                </p>
                <p className="text-gray-600 font-medium">
                  📈{' '}
                  <span className="font-normal">
                    Track your blog's performance and reach
                  </span>
                </p>
                <p className="text-gray-600 font-medium">
                  🌍{' '}
                  <span className="font-normal">
                    Engage with your audience effortlessly
                  </span>
                </p>
              </div>
              <div className="opacity-100 p-6 rounded shadow-md space-y-4 mt-2">
                <h2 className="block text-gray-700 text-sm text-center lg:text-base 2xl:text-2xl font-bold mb-4">
                  Enter your email to continue
                </h2>
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      required
                      placeholder="Email"
                      className="w-full p-2 bg-amber-50 text-gray-800 border border-cyan-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-b from-purple-400 to-cyan-300 hover:opacity-90 text-gray-900 py-2 px-4 font-medium rounded-sm"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Loading...' : 'Continue'}
                  </button>
                  <p className="text-gray-600">
                    New User?{' '}
                    <button
                      type="button"
                      onClick={() => setIsRegistering(true)}
                      className="underline text-blue-600"
                    >
                      Click here to register!
                    </button>
                  </p>
                  {loginMessage && (
                    <p className="text-center text-sm mt-4 text-gray-200">
                      {loginMessage}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Registration Form */}
      {isRegistering && <Register onBackToLogin={handleBackToLogin} />}

      {/* Blogs Section */}
      {isPageLoading ? (
        <div className="flex h-screen w-full items-center justify-center">
          <Spinner size="10" color="white" />
        </div>
      ) : (
        isLoggedIn && (
          <div className="text-white">


            {/* Blog cards */}
            <div className="bg-gradient-to-b from-[#FBF8E6] to-[#EBF9FF] pt-64 p-9">
              {blogs.length === 0 ? (
                <div className="flex h-screen w-full items-center justify-center">
                  <p className="text-xl text-black">No blogs available!</p>
                </div>
              ) : (
                <section className="grid grid-cols-1 gap-24">
                  {blogs.map((blog, index) => {
                    const isReversed = index % 2 === 1;
                    const isEven = index % 2 === 0;
                    return (
                      <div
                        key={blog.id}
                        className={`
                          flex
                          ${isReversed ? 'flex-row-reverse' : 'flex-row'}
                          w-full h-[300px]
                          rounded-lg overflow-hidden
                        `}
                      >
                        {/* Image side */}
                        <div className="w-1/2 h-full">
                          <div
                            className={`
                              w-full h-full
                              bg-cover bg-center
                              ${
                                isEven
                                  ? 'rounded-tl-[150px] rounded-bl-[150px] rounded-tr-[150px] border-cyan-400 border-b-[5px] border-r-[5px]'
                                  : 'rounded-tl-[150px] rounded-tr-[150px] rounded-br-[150px] border-cyan-400 border-b-[5px] border-l-[5px]'
                              }
                            `}
                            style={{
                              backgroundImage: blog.blog[0]?.image
                                ? `url('data:image/png;base64,${blog.blog[0].image}')`
                                : "url('/ecommerce.png')",
                            }}
                          />
                           {/* // Locate the overlay section and replace it with: */}
<div className="absolute inset-0 flex items-center justify-between px-56  rounded-lg">
  <h2 className="text-2xl md:text-3xl text-gray-800 font-bold text-left">
    Recent Blogs
  </h2>
  <Link href="/create-blog">
    <button className="bg-gradient-to-r from-purple-400 to-cyan-400 hover:opacity-90 text-black font-semibold py-2 px-4 rounded-full">
      Write a Blog
    </button>
  </Link>
</div>
                        </div>

                        {/* Text side */}
                        <div className="w-1/2 h-full flex flex-col justify-between p-6">
                          <div>
                            <h3 className="text-2xl font-bold mb-2 text-black">
                              {blog.title || 'Untitled Blog'}
                            </h3>
                            <p className="text-sm text-black leading-relaxed mb-4">
                              {blog.blog[0]?.description.length > 250
                                ? blog.blog[0].description.slice(0, 250) + '...'
                                : blog.blog[0]?.description}
                            </p>
                            <button
                              className="
                                mt-1
                                bg-gradient-to-r from-purple-300 to-cyan-300
                                hover:from-purple-400 hover:to-cyan-500
                                text-gray-900 font-medium
                                rounded-full px-6 py-2 text-xs
                                transition-all duration-200
                              "
                              onClick={() => router.push(`/blog/${blog.id}`)}
                            >
                              Read More
                            </button>
                            <p className="text-xs text-black mt-4">
                              By {blog.name} –{' '}
                              {new Date(blog.created_at).toLocaleDateString(
                                'en-GB',
                                {
                                  day: '2-digit',
                                  month: 'short',
                                  year: 'numeric',
                                }
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </section>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ListUserBlogs;

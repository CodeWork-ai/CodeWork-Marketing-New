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

  const handleLoginSubmit = async(e) => {    
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/get_email?email=${loginData.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
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
    } catch(error) {
      console.error(error)
      setLoginMessage('Network error. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUserBlogs = async() => {
    if (!isLoggedIn) return;
    const token = getCookie('token') ;
    setIsPageLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/list_user_blog?email=${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      })
      const data = await response.json();
      if (response.ok) {
        const sortedBlogs = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
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
  }

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserBlogs();
    }
  }, [isLoggedIn])  

  const [featuredBlog, ...otherBlogs] = blogs;

  const Spinner = ({ size = '5', color = 'red-500' }) => {
    return (
      <div className="flex items-center justify-center">
        <div
        className={`w-${size} h-${size} border-4 border-${color} border-solid rounded-full border-t-transparent animate-spin`}
        ></div>
      </div>
    );
  };

  const handleBackToLogin = () => {
    setIsRegistering(false); // Switch back to login
  };

  return (
    <div className="p-6 mt-20 bg-opacity-30 min-h-screen">
      {/* Login Screen */}
      {!isLoggedIn && !isRegistering &&  (
        <div className="flex items-center justify-center h-[600px] w-full">
          <div className="max-w-3xl text-center">
          <h1 className="W-2/3 text-2xl md:text-2xl my-4 lg:text-4xl 2xl:text-6xl text-gray-200">
                Welcome Back, Creator! 🌟
              </h1>
            <div className="max-w-3xl mx-auto p-10 bg-black opacity-80 shadow-lg rounded-lg">
              {/* <h1 className="text-3xl font-bold text-white mb-4">
                Welcome Back, Creator! 🌟
              </h1> */}
              <p className="text-lg mb-6 text-white">
              Ready to inspire, inform, and connect?
                Your words have the power to shape perspectives, spark conversations, and leave a lasting impact. Whether you're sharing insights, telling a story, or offering tips, we're here to help you bring your vision to life.
              </p>
              <div className="space-y-4">
                <p className="text-white font-medium">
                  🖋️ <span className="font-normal">Jump into your writing zone</span>
                </p>
                <p className="text-white font-medium">
                  📈 <span className="font-normal">Track your blog's performance and reach</span>
                </p>
                <p className="text-white font-medium">
                  🌍 <span className="font-normal">Engage with your audience effortlessly</span>
                </p>
              </div>
              <div className="opacity-100 p-6 rounded shadow-md space-y-4 mt-2">
                <h2 className="block text-white text-sm text-center lg:text-base 2xl:text-2xl font-bold mb-4">Enter your email to continue</h2>
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      required
                      placeholder='Email'
                      className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#FF035B] hover:bg-opacity-80 text-black hover:text-white py-2 px-4 font-medium rounded-sm"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Loading...' : 'Continue'}
                  </button>
                  <p className='text-white'>New User? <button type="button" onClick={() => setIsRegistering(true)} className="underline text-[#FF035B]">Click here to register!</button>
                  </p>
                  {loginMessage && (
                    <p className="text-center text-sm mt-4 text-gray-200">{loginMessage}</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>      
      )}
      {isRegistering && <Register onBackToLogin={handleBackToLogin} />}
      {/* Create Blog Form */}
      {isPageLoading ? (
        <div className="flex h-screen w-full items-center justify-center">
          <Spinner size="10" color="white" />
        </div>
      ) : (
      isLoggedIn && (
        <div className="text-white pb-5">
          <div className='px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20'>
            <div className="h-full">
              <div className="h-full overflow-hidden">
                <section className="relative h-full">
                  {/* Content on Top of Image */}
                  <div className="h-full relative z-10 flex text-white pt-10 pb-10">
                    <div className='w-full space-y-5'>
                    <div className='flex justify-between items-center'>
                        <div className="W-2/6 text-2xl md:text-2xl lg:text-4xl 2xl:text-4xl text-gray-200">Your Blogs</div>
                        <Link href="/create-blog">
                          <button className="w-full bg-[#FF035B] text-black py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Write a blog
                          </button>
                        </Link>
                      </div>
                    </div>  
                  </div>
                </section>
              </div>
            </div>
          </div>
          {blogs.length === 0 ? (
            <div className="flex h-screen w-full items-center justify-center">
              <p className="text-xl text-white">No blogs available!</p>
            </div>
          ) : (
          <div className="text-white px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 font-sans">
            <section className="relative w-full h-[500px] mb-12 rounded-md overflow-hidden shadow-lg">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                backgroundImage: featuredBlog?.blog[0]?.image
                  ? `url('data:image/png;base64,${featuredBlog?.blog[0]?.image}')`
                  : "url('/ecommerce.png')", // Fallback if no image
                }}
              />
              {/* Dark overlay for text contrast */}
              <div className="absolute inset-0 bg-black bg-opacity-70" />

              {/* Text content (overlaid) */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  {featuredBlog?.title || "Untitled Blog"}
                </h2>
                <p className="max-w-2xl text-base md:text-lg leading-relaxed mb-6">
                  {/* {featuredBlog?.description || "No description available."} */}
                  {featuredBlog?.blog[0]?.description.length > 100
                    ? `${featuredBlog?.blog[0]?.description.slice(0, 100)}...`
                    : featuredBlog?.blog[0]?.description}
                </p>
                <button
                  className="bg-[#FF035B] hover:bg-opacity-80 text-black hover:text-white font-medium rounded-sm px-2 py-1 md:px-3 md:py-2 xl:px-5 xl:py-3 text-sm md:text-sm xl:text-base 2xl:text-lg"
                  onClick={() => router.push(`/blog/${featuredBlog.id}`)}
                >
                  View Blog
                </button>
              </div>
            </section>
  
            {/* 2) OTHER BLOGS IN A VERTICAL “ALTERNATING” LAYOUT */}
            <section className="space-y-6">
              {otherBlogs.map((blog) => (
                <div key={blog.id} className="p-4 bg-gray-800 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#FF035B]">{blog.title}</h3>
                  {blog.blog.length > 0 && (
                    <div className="mt-3">
                      <h4 className="text-lg font-semibold text-gray-200">
                        {blog.blog[0].title}
                      </h4>
                      <p className="text-gray-300">
                        {blog.blog[0].description.length > 150
                          ? `${blog.blog[0].description.slice(0, 150)}...`
                          : blog.blog[0].description}
                      </p>                      
                    </div>
                  )}  
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mt-3">
                        By {blog.name} - {new Date(blog.created_at).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    <div>
                      <button
                        className="hover:text-[#FF035B] underline"
                        onClick={() => router.push(`/blog/${blog.id}`)}
                      >
                        View Blog
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListUserBlogs;

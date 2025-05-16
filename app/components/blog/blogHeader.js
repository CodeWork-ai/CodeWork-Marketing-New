import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { IoIosArrowDroprightCircle } from "react-icons/io";

const BlogHeader = () => {
    return (
        <div>
            <div className="h-full">
                {/* Background Image with Next/Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/blogLanding.svg"
                        alt="Blog header background"
                        fill
                        style={{ objectFit: 'cover' }}
                        quality={100}
                        priority
                    />
                </div>

                <div className="h-full relative">
                    <section className="relative h-full">
                        {/* Content on Top of Image */}
                        <div className="h-full relative z-10 flex items-center pt-44 pb-20 text-gray-800 pl-28">
                            <div className='w-full max-w-4xl space-y-6'>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                                    Welcome to Our Blogs!
                                </h1>
                                <div className='text-lg md:text-xl lg:text-2xl  font-light max-w-2xl'>
                                    Discover insights, stories, and updates from our amazing team and contributors. Stay informed and inspired!
                                </div>
                                <div className="pt-4">
  <Link
    href="/user-blogs"
    className="
      inline-flex items-center space-x-2
      px-5 py-3
      sm:px-6 sm:py-3
      md:px-7 md:py-3
      lg:px-8 lg:py-4
      xl:px-10 xl:py-4
      rounded-full font-semibold
      text-sm md:text-base
      transition-all duration-200
    "
    style={{
      background: 'linear-gradient(90deg, #C7A9FF 0%, #AFD5FF 100%)'
    }}
  >
    <span className="text-gray-800">Create Blog</span>
    <IoIosArrowDroprightCircle size={24} className="text-gray-800" />
  </Link>
</div>

                            </div>  
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default BlogHeader;
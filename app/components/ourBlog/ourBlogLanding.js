"use client";
import React from "react";
import Image from "next/image";

const OurBlogLanding = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-[#F6F5FF]">
      {/* Background Container with fallback image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-cover bg-center bg-[url('/landingpages/blogLandin.jpeg')]"></div>

      {/* Content + Right Image Container */}
      <div className="relative z-10 w-[80%] mx-auto px-4 mt-16 sm:mt-0 lg:mt-0 flex flex-col md:flex-row items-center justify-between text-gray-800">
        {/* Left: Content */}
        <div className="w-full md:w-3/5 text-left">
          <div className="heading-container mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold">
              Our Blog
            </h1>
          </div>
          <div className="paragraph-container mb-8">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed text-gray-800">
              Stay updated with the latest news and insights from our blog.
            </p>
          </div>
        </div>
        {/* Right: Oval Image */}
        <div className="w-full md:w-2/5 flex justify-center items-center mt-10 md:mt-0 md:pl-8 lg:pl-16">
          <div className="w-60 h-80 sm:w-72 sm:h-96 bg-white rounded-full overflow-hidden shadow-lg flex items-center justify-center">
            <Image
              src="/blog/bloglanding.jpg"
              alt="Blog Hero"
              width={300}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBlogLanding;

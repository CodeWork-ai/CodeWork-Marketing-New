"use client";
import React from 'react'
import Image from 'next/image'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Link from "next/link";

const Landing = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-[#F6F5FF]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/landing.mp4" type="video/mp4" />
        </video> */}
        {/* Dark overlay for better text visibility */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 pt-16 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 text-center sm:text-left text-gray-800">
        {/* Heading Container */}
        <div className="heading-container mb-6 sm:mb-8 md:mb-11">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-medium">
            AI Software Development Solutions – Redefining Innovation with Codework
          </h1>
        </div>

        {/* Paragraph Container */}
        <div className="paragraph-container mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg leading-relaxed text-gray-600 w-full sm:w-[90%] mx-auto sm:mx-0">
            In the dynamic world of modern technology, Artificial Intelligence (AI) is transforming 
            industries and unlocking endless possibilities. As a top AI software development company, 
            we excel in AI development, delivering cutting-edge intelligent solutions that help 
            businesses adapt, grow, and lead in an ever-evolving marketplace.
          </p>
        </div>
        
        {/* Button Container */}
        <div className="button-container mb-6 sm:mb-8">
          <Link href="/contact-ai-solutions">
            <button
              className="inline-flex items-center space-x-2 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-3 md:py-3 lg:py-4 xl:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base"
              style={{
                background: 'linear-gradient(90deg, #C7A9FF 0%, #AFD5FF 100%)',
              }}
            >
              <span className="text-gray-800">Free Consulting</span>
              <IoIosArrowDroprightCircle size={20} className="text-gray-800 sm:text-2xl" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Landing;
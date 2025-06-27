"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServiceLanding = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-[#F6F5FF]">
      {/* Background Container with fallback image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-cover bg-center bg-[url('/landingpages/ailandin.jpeg')]"></div>

      {/* Content + Right Image Container */}
      <div className="relative z-10 w-[80%] mx-auto px-4 mt-16 sm:mt-0 lg:mt-0 flex flex-col md:flex-row items-center justify-between text-gray-800">
        {/* Left: Content */}
        <div className="w-full md:w-3/5 text-left">
          <div className="heading-container mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold">
              Driving Innovation Through Cutting-Edge AI Services
            </h1>
          </div>
          <div className="paragraph-container mb-3">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed text-gray-800">
              We redefine possibilities with cutting-edge AI services designed to
              empower businesses in the digital era. Our offerings are not only
              quick, cost-effective, and accurate but also tailored to meet the
              unique needs of each client.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed text-gray-800 mt-12">
              See how we have developed business in{" "}
              <Link
                href="/our-company-case-studies"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                our casestudies
              </Link>
            </p>
          </div>
        </div>
        {/* Right: Oval Image */}
        <div className="w-full md:w-2/5 flex justify-center items-center mt-10 md:mt-0 md:pl-8 lg:pl-16">
          <div className="w-60 h-80 sm:w-72 sm:h-96 bg-white rounded-full overflow-hidden shadow-lg flex items-center justify-center">
            <Image
              src="/AllServices/service.jpg"
              alt="AI Services"
              width={300}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLanding;
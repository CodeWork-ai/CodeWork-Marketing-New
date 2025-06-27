"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const CurrentOpportunitie = () => {
  const jobOpenings = [
    {
      title: "Senior Front-end Developer (React JS)",
      experience: "Minimum 5+ Years",
      workMode: "Hybrid"
    },
    {
      title: "Senior API Developer (.Net)",
      experience: "Minimum 7+ Years",
      workMode: "Hybrid"
    },
    {
      title: "Jr. HR Executive (Recruitment + Operations)",
      experience: "Maximum 2 years Experience",
      workMode: "Onsite"
    },
    {
      title: "Jr. Software Tester (Certified)",
      experience: "Minimum 1 year",
      workMode: "Onsite"
    },
    {
      title: "AI DevOps + Cloud",
      experience: "2+ Years",
      workMode: "Onsite"
    },
    {
      title: "AI Consultant",
      experience: "Minimum 3 years",
      workMode: "Onsite"
    },
    {
      title: "Backend Developer",
      experience: "2+ years",
      workMode: "Onsite"
    },
    {
      title: "Front-end Developer (React JS)",
      experience: "Minimum 2+ Years",
      workMode: "Onsite"
    }
  ];

  return (
    <section className="relative w-full h-auto py-16 bg-gradient-to-b from-[#FBF8E6] to-[#ebf9ff]">
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

      {/* Content Container - Updated width to 80% */}
      <div className="relative z-10 w-[80%] mx-auto px-4 text-left text-gray-800">
        {/* Heading Container */}
        <div className="heading-container mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold">
            Current Opportunities
          </h2>
          <p className="mt-4 text-lg sm:text-sm md:text-xl font-medium text-gray-700">
            Join our team and be part of something extraordinary
          </p>
        </div>

        {/* Job Openings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobOpenings.map((job, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] border-l-4 border-blue-500"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{job.title}</h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="mr-2 text-blue-500" />
                  <span>{job.experience}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="mr-2 text-blue-500" />
                  <span>Work Mode: {job.workMode}</span>
                </div>
              </div>
              <Link href="/join-our-team">
                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-md text-sm hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                  Apply Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentOpportunitie;
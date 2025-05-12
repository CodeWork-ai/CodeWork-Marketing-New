"use client";
import React from 'react';
import Image from 'next/image';

const ItStaff = () => {
  const benefits = [
    {
      title: "Project Management",
      hoverText: "Coordinating software development lifecycles"
    },
    {
      title: "Strategic Planning",
      hoverText: "Aligning technical capabilities with business goals."
    },
    {
      title: "Team Optimization",
      hoverText: "Structuring teams for maximum productivity"
    },
    {
      title: "Resource Allocation",
      hoverText: "Efficiently distributing talent and tools across projects."
    },
  ];

  return (
    <div className="container mx-auto py-44 px-4">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left side - Title and subtitle */}
        <div className="md:w-1/3">
          <p className="text-slate-600">
           Software companies leverage these services to streamline workflows, reduce development bottlenecks, and ensure that technical teams perform at their best. The primary objective is to create an environment where developers and engineers can focus on building robust, scalable solutions.
          </p>
        </div>

        {/* Right side - Benefits */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map(({ title, hoverText }, index) => (
            <div 
              key={index} 
              className="rounded-xl p-6 bg-[#1e1e38] text-white shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group h-[100px]"
            >
              {/* Background pattern overlay */}
              <div className="absolute inset-0 opacity-30 group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-full h-full bg-gradient-to-br from-purple-600/30 to-indigo-900/30" />
              </div>
              
              {/* Hover background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-full bg-gradient-to-br from-cyan-300 to-purple-400" />
              </div>
              
              {/* Content container - keeps both texts in the same position */}
              <div className="relative z-10">
                {/* Default content */}
                <p className="font-medium text-lg group-hover:opacity-0 transition-opacity duration-300 absolute top-0 left-0">{title}</p>
                
                {/* Hover content */}
                <p className="font-medium text-gray-800 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 right-0 line-clamp-2">{hoverText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItStaff;
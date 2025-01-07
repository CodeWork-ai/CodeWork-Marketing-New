import React from "react";
import { FaReact, FaJava, FaPython, FaAws, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiR, SiAzure, SiKubernetes, SiGraphql, SiTypescript, SiMongodb, SiPostgresql } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import Link from "next/link";

const technologies = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "R Language", icon: <SiR /> },
  { name: "Azure", icon: <VscAzure /> },
  // { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
];

const TechnologyGrid = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 text-center py-10">
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-gray-200 font-bold mb-6">Technologies That Drive Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-2 md:py-10">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border border-gray-500 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105 bg-black bg-opacity-35"
          >
            <div className="text-4xl text-white mb-2">{tech.icon}</div>
            <p className="text-lg font-medium text-gray-200">{tech.name}</p>
          </div>
        ))}
      </div>
      {/* <div className="flex w-full md:w-auto items-center justify-center mt-6">
        <Link href="/service" className="w-full md:w-auto">
          <button className="bg-[#FF035B] w-full md:w-auto hover:bg-red-400 text-black hover:text-white font-medium rounded-sm px-2 py-2 md:px-3 md:py-2 xl:px-5 xl:py-3 hover:bg-opacity-50 text:sm lg:text-base 2xl:text-lg">
            Explore Our Technologies
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default TechnologyGrid;

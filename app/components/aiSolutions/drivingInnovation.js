"use client";
import React from "react";
import Image from "next/image";
import Marquee from 'react-fast-marquee';

const DrivingInnovation = () => {
  // Placeholder client logos data (replace with your actual data)
  const clientLogos = [
    { name: "MongoDB", logo: "/AiSolution/MongoDB.svg" },
    { name: "React", logo: "/AiSolution/React.svg" },
    { name: "Next.js", logo: "/AiSolution/Next.svg" },
    { name: "Python", logo: "/AiSolution/python.svg" },
    { name: "Java", logo: "/AiSolution/java.svg" },
    { name: "R Language", logo: "/AiSolution/RLanguage.svg" },
    { name: "Azure", logo: "/AiSolution/Azure.svg" },
    { name: "Docker", logo: "/AiSolution/Docker.svg" },
    { name: "Kubernetes", logo: "/AiSolution/Kubernetes.svg" },
    { name: "GraphQL", logo: "/AiSolution/GraphQL.svg" },
    { name: "TypeScript", logo: "/AiSolution/TypeScript.svg" },
    { name: "PostgreSQL", logo: "/AiSolution/PostgreSQL.svg" },
  ];

  return (
    <section className="bg-gradient-to-b w-full from-[#ffe4fe] to-[#c8ebfa] py-16 pt-8 relative sm:py-20 md:py-24 lg:py-28 xl:py-32">
      {/* Existing Content */}
      <div className="px-4 pt-20 flex w-full justify-center">
        <div className="w-full px-4 sm:px-8 md:px-14 flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-16 md:gap-20 lg:gap-24">
          {/* Left Side: Text Content (65% width) */}
          <div className="w-full md:w-[65%] space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#1A3C5E]">
            Driving Innovation, Efficiency, and Growth with Excellence
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-[#1A3C5E] leading-relaxed">
             our Areas of Excellence represent more than just capabilities – they are the foundation of your business's innovation, efficiency, and growth. 
            By combining advanced AI technologies, human-centric solutions, and a relentless drive for excellence, we empower you to confidently embrace the future.
            </p>
          </div>

          {/* Right Side: Big Image (35% width) */}
          <div className="w-full md:w-[35%]">
            <Image
              src="\AiSolution\RightSide.svg"
              alt="Team working"
              width={700}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* New Integrated Section: Our Happy Clients */}
      <div className="relative min-h-[40vh] sm:min-h-[64vh] flex items-end ">
        <div className="w-full mx-auto text-center">
          {/* Single full width background box with a purple to cyan gradient */}
          <div className="bg-gradient-to-b from-amber-50 to-#CCF1FF w-full min-h-[100px] sm:min-h-[200px] p-6 sm:p-10 md:p-12 lg:p-10 xl:p-10 rounded-tl-[100px] rounded-tr-[100px] sm:rounded-tl-[240px] sm:rounded-tr-[240px]">
            <Marquee
              speed={50}
              gradient={false}
              pauseOnHover
              direction="left"
              loop={0}
              className="py-4"
            >
              {clientLogos.map((client, index) => (
                <div key={index} className="mx-8 sm:mx-12 flex items-center justify-center">
                  <img src={client.logo} alt={client.name} className=" mt-24" />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrivingInnovation;
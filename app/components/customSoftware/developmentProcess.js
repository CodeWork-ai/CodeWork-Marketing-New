import Image from "next/image";
import React from "react";

const DevelopmentProcess = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-start pt-8 sm:pt-12 lg:pt-16">
      <div className="mx-auto text-center relative py-6 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-10 w-full max-w-7xl">
        {/* Title Section */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white">
          DevOps Implementation Approach
        </h2>
        {/* Steps Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
          {/* Step 1 */}
          <div className="flex flex-col items-center w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[239px]">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-[100px] lg:h-[100px] flex items-center justify-center rounded-full border-4 sm:border-[5px] border-[#c0b62b] shadow-md">
              <Image
                src="/DiscoveryPlanning.svg"
                alt="icon"
                width={40}
                height={40}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-11 lg:h-11"
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#c0b62b] font-normal mt-2 sm:mt-3 md:mt-4 text-center">
              Understanding business goals
            </p>
            <p className="text-white">Identify business objectives, analyze bottlenecks, and create a DevOps roadmap.</p>
          </div>

          {/* Desktop/Tablet Arrow */}
          <Image
            src="/arrow1.svg"
            alt="arrow"
            width={30}
            height={0}
            className="hidden sm:block md:w-[40px] lg:w-[49px] mb-12 md:mb-16 animate-fade-slide-right"
          />

          {/* Mobile Arrow */}
          <div className="sm:hidden my-3">
            <Image
              src="/arrow1.svg"
              alt="arrow"
              width={24}
              height={24}
              className="!rotate-90 animate-fade-slide-down"
            />
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[239px]">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-[100px] lg:h-[100px] flex items-center justify-center rounded-full border-4 sm:border-[5px] border-[#3667ee] shadow-md">
              <Image
                src="/PrototypingDesign.svg"
                alt="icon"
                width={40}
                height={40}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-11 lg:h-11"
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#3667ee] font-normal mt-2 sm:mt-3 md:mt-4 text-center">
              Creating intuitive UI/UX
            </p>
            <p className="text-white">Implement CI/CD, cloud provisioning, and security automation tools.</p>
          </div>

          {/* Desktop/Tablet Arrow */}
          <Image
            src="/arrow2.svg"
            alt="arrow"
            width={30}
            height={0}
            className="hidden sm:block md:w-[40px] lg:w-[49px] mb-12 md:mb-16 animate-fade-slide-right"
          />

          {/* Mobile Arrow */}
          <div className="sm:hidden my-3">
            <Image
              src="/arrow2.svg"
              alt="arrow"
              width={24}
              height={24}
              className="!rotate-90 animate-fade-slide-down"
            />
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[239px]">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-[100px] lg:h-[100px] flex items-center justify-center rounded-full border-4 sm:border-[5px] border-[#d333de] shadow-md">
              <Image
                src="/AgileDevelopment.svg"
                alt="icon"
                width={40}
                height={40}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-11 lg:h-11"
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#d333de] font-normal mt-2 sm:mt-3 md:mt-4 text-center">
              Iterative and scalable approach
            </p>
            <p className="text-white">Enable real-time tracking, seamless deployment, and issue resolution.</p>
          </div>

          {/* Desktop/Tablet Arrow */}
          <Image
            src="/arrow3.svg"
            alt="arrow"
            width={30}
            height={0}
            className="hidden sm:block md:w-[40px] lg:w-[49px] mb-12 md:mb-16 animate-fade-slide-right"
          />

          {/* Mobile Arrow */}
          <div className="sm:hidden my-3">
            <Image
              src="/arrow3.svg"
              alt="arrow"
              width={24}
              height={24}
              className="!rotate-90 animate-fade-slide-down"
            />
          </div>

          {/* Step 4 (New Step) */}
          <div className="flex flex-col items-center w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[239px]">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-[100px] lg:h-[100px] flex items-center justify-center rounded-full border-4 sm:border-[5px] border-[#ff5733] shadow-md">
              <Image
                src="/TestingQuality.svg" // Replace with your desired image path
                alt="icon"
                width={40}
                height={40}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-11 lg:h-11"
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#ff5733] font-normal mt-2 sm:mt-3 md:mt-4 text-center">
              Testing and validation
            </p>
            <p className="text-white">Ensure quality through automated testing and performance validation.</p>
          </div>

          {/* Desktop/Tablet Arrow */}
          <Image
            src="/arrow4.svg" // Replace with your new arrow image path
            alt="arrow"
            width={30}
            height={0}
            className="hidden sm:block md:w-[40px] lg:w-[49px] mb-12 md:mb-16 animate-fade-slide-right"
          />

          {/* Mobile Arrow */}
          <div className="sm:hidden my-3">
            <Image
              src="/arrow4.svg" // Replace with your new arrow image path
              alt="arrow"
              width={24}
              height={24}
              className="!rotate-90 animate-fade-slide-down"
            />
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-center w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[239px]">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-[100px] lg:h-[100px] flex items-center justify-center rounded-full border-4 sm:border-[5px] border-[#2dd563] shadow-md">
              <Image
                src="/SupportOptimization.svg"
                alt="icon"
                width={40}
                height={40}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-11 lg:h-11"
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#2dd563] mt-2 sm:mt-3 md:mt-4 text-center">
              Continuous enhancements
            </p>
            <p className="text-white">Continuously improve workflows for efficiency and agility.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
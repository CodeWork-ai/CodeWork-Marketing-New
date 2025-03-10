import Image from "next/image";
import React from "react";

const DevelopmentProcessDevops = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-start ">
      <div className="mx-auto text-center relative py-6 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-10 w-full max-w-7xl">
        {/* Title Section */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white">
        Strategic Cybersecurity Approach       </h2>
        {/* Steps Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
          {/* Step 1 */}
          <div className="flex flex-col items-center w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[239px]">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[118px] lg:h-[118px] flex items-center justify-center rounded-full border-4 sm:border-[5px] border-[#c0b62b] shadow-md">
              <Image
                src="/cyIcon1.svg"
                alt="icon"
                width={40}
                height={40}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#c0b62b] font-normal mt-2 sm:mt-3 md:mt-4 text-center">
            Assess & Identify
            </p>
            <p className="text-white">Analyze vulnerabilities and detect security gaps.</p>
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
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[118px] lg:h-[118px] flex items-center justify-center rounded-full border-4 sm:border-[5px] border-[#3667ee] shadow-md">
              <Image
                src="\cyIcon2.svg"
                alt="icon"
                width={40}
                height={40}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#3667ee] font-normal mt-2 sm:mt-3 md:mt-4 text-center">
            Protect & Prevent
            </p>
            <p className="text-white">Implement strong cybersecurity frameworks and best practices.</p>

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
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[118px] lg:h-[118px] flex items-center justify-center rounded-full border-4 sm:border-[5px] border-[#d333de] shadow-md">
              <Image
                src="/cyIcon3.svg"
                alt="icon"
                width={40}
                height={40}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#d333de] font-normal mt-2 sm:mt-3 md:mt-4 text-center">
            Detect & Respond
            </p>
            <p className="text-white">Monitor cyber threats and respond instantly to mitigate risks.</p>

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
          {/* Step 5 */}
          <div className="flex flex-col items-center w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[239px]">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[118px] lg:h-[118px] flex items-center justify-center rounded-full border-4 sm:border-[5px] border-[#2dd563] shadow-md">
              <Image
                src="/cyIcon4.svg"
                alt="icon"
                width={40}
                height={40}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#2dd563] mt-2 sm:mt-3 md:mt-4 text-center">
            Recover & Strengthen
            </p>
            <p className="text-white">Enhance resilience and ensure a rapid recovery from cyber incidents.</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcessDevops;
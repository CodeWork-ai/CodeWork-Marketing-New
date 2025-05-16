import React from "react";
import Image from "next/image"; // if using Next.js, or use regular <img> otherwise

const TestimonialClient = () => {
  return (
    <div className="bg-gradient-to-b from-[#FBF8E6] to-[#EBF9FF] px-6 py-16 space-y-20 text-white">
      
      {/* First Testimonial (Left Image) */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Image with wavy shape */}
        <div className="rl flex items-center justify-center">
          <img
            src="/testimonial/CLient1.svg"
            alt="WebSignX"
            className=" h-[300px] w-auto"
          />
        </div>

        {/* Right Testimonial Box */}
        <div className="bg-white text-black p-6 rounded-xl shadow-md max-w-2xl">
          <p className="text-2xl text-blue-600 mb-4">“</p>
          <p className="text-sm leading-relaxed">
            The Codework team demonstrated exceptional expertise by collaborating
            in developing our ticket booking application project. Their attention
            to detail, seamless integration of features, and commitment to meeting
            deadlines made this project a success. We are thoroughly impressed with
            their technical proficiency and look forward to future collaborations.
          </p>
          <p className="mt-4 font-bold text-blue-600">Johnson R</p>
          <p className="text-xs text-gray-500">
            Delivery Manager – WebSignX Technologies
          </p>
        </div>
      </div>

      {/* Second Testimonial (Right Image) */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Testimonial Box */}
        <div className="bg-white text-black p-6 rounded-xl shadow-md max-w-2xl">
          <p className="text-2xl text-blue-600 mb-4">“</p>
          <p className="text-sm leading-relaxed">
            It’s rare to find partners who go above and beyond their scope of work.
            Your proactive thinking and self-initiative in providing insightful ideas
            have truly elevated our product to new heights. The innovative
            contributions you’ve made, coupled with your commitment to understanding
            our vision, have played a pivotal role in shaping the product into what
            it is today.
          </p>
          <p className="mt-4 font-bold text-blue-600">Bikram Bakshi</p>
          <p className="text-xs text-gray-500">Entrepreneur & Tech Innovator</p>
        </div>

        {/* Right Image with wavy shape */}
        <div className=" flex items-center justify-center">
          {/* Replace with actual image if needed */}
          <img
            src="/testimonial/CLient2.svg"
            alt="Client Image"
             className=" h-[300px] w-auto"
          />
        </div>
      </div>
      {/* First Testimonial (Left Image) */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Image with wavy shape */}
        <div className="rl flex items-center justify-center">
          <img
            src="/testimonial/CLient3.svg"
            alt="WebSignX"
            className=" h-[300px] w-auto"
          />
        </div>

        {/* Right Testimonial Box */}
        <div className="bg-white text-black p-6 rounded-xl shadow-md max-w-2xl">
          <p className="text-2xl text-blue-600 mb-4">“</p>
          <p className="text-sm leading-relaxed">
           We are extremely pleased with the Codework team’s exceptional work in developing our website. Their technical expertise, attention to detail, and seamless execution exceeded our expectations. From design to functionality, they ensured that every aspect was well-integrated and user-friendly. Their commitment to meeting deadlines and delivering high-quality results made this project a great success. We look forward to collaborating with them again on future projects.

          </p>
          <p className="mt-4 font-bold text-blue-600">Johnson R</p>
          <p className="text-xs text-gray-500">
           Entrepreneur & Tech Innovator
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialClient;

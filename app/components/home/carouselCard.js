'use client'
import React, { useState } from "react";
import Link from "next/link";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import Marquee from "../../../components/ui/marquee";

const testimonials = [
  {
    text: "We are extremely pleased with the Codework team’s exceptional work in developing our website. Their technical expertise, attention to detail, and seamless execution exceeded our expectations. From design to functionality, they ensured that every aspect was well-integrated and user-friendly. Their commitment to meeting deadlines and delivering high-quality results made this project a great success. We look forward to collaborating with them again on future projects.",
    name: "Surabi Groups",
    company: "",
    url: '',
    img: "",
  },
  {
    text: "It’s rare to find partners who go above and beyond their scope of work. Your proactive thinking and self-initiative in providing insightful ideas have truly elevated our product to new heights. The innovative contributions you’ve made, coupled with your commitment to understanding our vision, have played a pivotal role in shaping the product into what it is today.",
    name: "Bikram Bakshi",
    role: "Entrepreneur & Tech Innovator",
    company: "",
    url: 'https://www.linkedin.com/in/bikramsbakshi/',
    img: "",
  },
  {
    text: "The CodeWork team demonstrated exceptional expertise by collaborating in developing our ticket booking application project.Their attention to detail, seamless integration of features, and commitment to meeting deadlines made this project a success.We are throughly impressed with their technical proficiency and look forward to future collaborations",
    name: "Jhonson R",
    role: "Delivery Manager - IT Projects",
    company: "WebSignX Technologies",
    img: "",
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the center card active

  const getPosition = (index) => {
    const total = testimonials.length;

    if (index === activeIndex) return "scale-110 z-20"; // Center card zoomed
    if ((index + 1) % total === activeIndex) return "translate-x-60 -rotate-0 z-10"; // Right card
    if ((index - 1 + total) % total === activeIndex) return "-translate-x-60 rotate-0 z-10"; // Left card

    return "opacity-0"; // Hidden for non-visible cards
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="hidden lg:flex flex-col items-center bg-black bg-opacity-30 py-10">
      <div className="relative w-full max-w-4xl h-[700px]">
        <div className="mb-0 pb-0">
          <h3 className="mb-6 text-3xl font-bold text-gray-100 text-center">Testimonials</h3>
          <p className="text-2xl md:mb-1 md:pb-0 text-gray-200 text-center">
            Hear from our clients! Discover how our services have made a lasting impact. Their words inspire us to keep delivering exceptional results.
          </p>
        </div>
        {/* Carousel Container */}
        <div className="flex justify-center items-center relative h-full pt-0">
          {testimonials.map((testimonial, index) => (
            <div key={index}
              className={`absolute transition-transform duration-700 ease-in-out rounded-lg bg-gradient-to-r from-[#190b0b] via-[#180101]  to-[#080000]  bg-opacity-100 border border-gray-600 text-black p-6 w-[300px] lg:w-[450px] 2xl:w-[500px] h-[400px] ${getPosition(
                index
              )}`}
            >
              {/* <p className="text-blue-400 text-xl mb-4">“</p> */}
              <RiDoubleQuotesL className="text-blue-400 mb-4" />
              <p className="text:sm 2xl:text-base text-white">{testimonial.text}</p>
              <RiDoubleQuotesR className="text-blue-400 mt-2" />
              <div className="flex items-center mt-4">
                {/* <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="rounded-full w-10 h-10"
                /> */}
                <div className="ml-3">
                  <Link href='https://www.linkedin.com/in/bikramsbakshi/'>
                    <p className="font-bold text-sm text-white">-{testimonial.name}</p>
                  </Link>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-gray-400">{testimonial.company}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-5 space-x-2 z-50">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${index === activeIndex ? "bg-blue-400" : "bg-gray-500"
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;

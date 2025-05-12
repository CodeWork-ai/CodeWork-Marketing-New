"use client";
import React, { useState } from 'react';
import { RiBrain2Fill } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { GiGears } from "react-icons/gi";
import { AiFillMessage } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaDatabase, FaRobot } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { BsFillBarChartLineFill } from "react-icons/bs";

const ServiceCard = ({ title, icon: Icon, description, isOpen, onClick }) => {
  return (
    <div className="w-full">
      {/* Add SVG gradient definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" /> {/* cyan-500 */}
            <stop offset="100%" stopColor="#d8b4fe" /> {/* purple-300 */}
          </linearGradient>
        </defs>
      </svg>

      <div 
        onClick={onClick}
        className="flex items-center justify-between p-4 bg-white rounded-lg cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <Icon 
            className="text-2xl" 
            style={{ fill: "url(#iconGradient)" }}  // Apply gradient to icon
          />
          <h3 className="text-[#090c2c] text-lg font-medium">{title}</h3>
        </div>
        <MdKeyboardArrowDown 
          className={`text-2xl transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          style={{ fill: "url(#iconGradient)" }}  // Apply gradient to arrow icon
        />
      </div>
      {isOpen && (
        <div className="p-6 mt-2 bg-gradient-to-b from-blue-100 to-purple-100 rounded-tl-[70px] rounded-br-[70px]">
          <p className="text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

const MobileSection = () => {
  const [openCard, setOpenCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "AI Consulting",
      icon: RiBrain2Fill,
      description: "Our AI model undergoes rigorous training using advanced techniques. We continuously test, validate, and refine the model to ensure it meets performance benchmarks and aligns with your business goals."
    },
    {
      id: 2,
      title: "Generative AI",
      icon: BsStars,
      description: "Create unique content and solutions using cutting-edge AI technology."
    },
    {
      id: 3,
      title: "Machine Learning",
      icon: GiGears,
      description: "Custom ML solutions to automate and optimize your processes."
    },
    {
      id: 4,
      title: "Natural Language Processing",
      icon: AiFillMessage,
      description: "Shape Communication is key, and our NLP solutions make it smarter. We harness the power of advanced language processing to help businesses improve text analysis, automate customer support, and extract meaningful insights from unstructured data."
    },
    {
      id: 5,
      title: "Data Engineering",
      icon: FaDatabase,
      description: "Transform and optimize your data infrastructure with advanced engineering solutions."
    },
    {
      id: 6,
      title: "Cyber Security",
      icon: MdOutlineSecurity,
      description: "Protect your digital assets with state-of-the-art cybersecurity measures and protocols."
    },
    {
      id: 7,
      title: "Predictive Analysis",
      icon: BsFillBarChartLineFill,
      description: "Leverage data-driven insights to forecast trends and make informed business decisions."
    },
    {
      id: 8,
      title: "AI Chatbots",
      icon: FaRobot,
      description: "Implement intelligent conversational AI solutions to enhance customer engagement."
    }
  ];

  const handleCardClick = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <div className="px-4 py-8 space-y-4 md:hidden">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          {...service}
          isOpen={openCard === service.id}
          onClick={() => handleCardClick(service.id)}
        />
      ))}
    </div>
  );
};

export default MobileSection;
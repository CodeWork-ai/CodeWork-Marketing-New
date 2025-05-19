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
      description: "Our AI consulting services are designed to deliver tailor-made solutions that align with your business goals. We help organizations identify opportunities for automation, efficiency, and growth by seamlessly integrating AI into their workflows. From ideation to execution, we ensure you unlock the full potential of AI."
    },
    {
      id: 2,
      title: "Generative AI",
      icon: BsStars,
      description: "Creativity meets technology with our Generative AI solutions. Whether it’s content generation, design assistance, or product innovation, we enable businesses to boost productivity and creativity. Our AI tools make it easy to manage tasks and turn your ideas into reality."
    },
    {
      id: 3,
      title: "Machine Learning",
      icon: GiGears,
      description: "With Machine Learning, Codework empowers businesses with predictive insights and more innovative automation. Leveraging advanced frameworks like PyTorch, Keras, and TensorFlow, we help analyze data, uncover patterns, and enable data-driven decisions. Our solutions, including Radi Insight Scan and Signature Identification, utilize ML concepts to provide deeper insights and enhanced automation. These innovations enable businesses to stay one step ahead of market demands and drive innovation."
    },
    {
      id: 4,
      title: "Natural Language Processing",
      icon: AiFillMessage,
      description: "Natural Language Processing (NLP) shapes communication, and our NLP solutions make it smarter. We leverage advanced language processing to enhance text analysis, automate customer support, and extract valuable insights from unstructured data. With NLP and ML, we have developed a Caregiver Communication with Text Analytics Tool to improve interactions, understand needs, and provide better support in caregiving environments."
    },
    {
      id: 5,
      title: "Data Engineering",
      icon: FaDatabase,
      description: "A robust data infrastructure is the backbone of any business. Our Data Engineering services ensure your data is well-organized, easily accessible, and efficiently processed, giving you the foundation to scale and innovate."
    },
    {
      id: 6,
      title: "Cyber Security",
      icon: MdOutlineSecurity,
      description: "Protecting digital assets is critical in today’s connected world. Codework’s cybersecurity solutions leverage advanced technologies, including XGBoost, to analyze threats, detect vulnerabilities, and provide comprehensive protection for your systems, data, and infrastructure. We ensure safety, trust, and resilience for your business in an ever-evolving digital landscape."
    },
    {
      id: 7,
      title: "Predictive Analysis",
      icon: BsFillBarChartLineFill,
      description: "Stay ahead of the curve with Predictive Analytics. We use AI-driven forecasting models to analyze trends, predict outcomes, and deliver actionable insights that enable businesses to plan and perform better."
    },
    {
      id: 8,
      title: "AI Chatbots",
      icon: FaRobot,
      description: "Enhance customer engagement with our intelligent AI chatbots. Codework’s chatbots provide real-time responses, improve user satisfaction, and streamline."
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
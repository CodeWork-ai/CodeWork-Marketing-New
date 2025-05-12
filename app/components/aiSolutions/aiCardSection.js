"use client";
import React from 'react';
import { MdArrowCircleRight } from "react-icons/md";
import MobileSection from './mobileSection';

const Card = ({ card, additionalStyle }) => {
  const IconComponent = card.icon;

  return (
    <div
      className={`relative ${card.roundedCorner} overflow-hidden shadow-lg bg-cover bg-center transition-transform transform hover:scale-105 cursor-pointer ${additionalStyle} group 
      h-[300px] sm:h-[360px] md:h-[440px] w-full max-w-[600px]`}
      style={{ backgroundImage: `url(${card.image})` }}
    >
      {/* Overlay for better text visibility - Gradient on hover */}
      <div className="absolute inset-0 transition-opacity">
        {/* Gradient overlay: appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Default content (visible when not hovering) */}
      <div className="absolute bottom-0 w-full p-4 text-white transition-opacity duration-300 group-hover:opacity-0">
        <div className="flex justify-start ml-4 sm:ml-24 mb-4">
          {IconComponent && (
            <IconComponent
              size={64}
              style={{ fill: "url(#iconGradient)" }}
            />
          )}
        </div>
        <div className="w-full flex items-center ml-4 sm:ml-24 justify-between">
          <h3 className="text-2xl font-bold transition-all duration-700 ease-in-out group-hover:-translate-y-56 group-hover:opacity-50">
            {card.title}
          </h3>
        </div>
        {/* Arrow icon with move-right and fade-out animation on hover */}
        <div className="absolute top-1/2 right-4 sm:right-16 md:right-16 lg:right-32 transform -translate-y-1/2 transition-all duration-700 ease-in-out group-hover:translate-x-20 group-hover:opacity-0">
          <MdArrowCircleRight size={34} style={{ fill: "url(#iconGradient)" }} />
        </div>
      </div>

      {/* Hover content (visible only on hover) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
        <p className="text-lg text-center px-4">{card.description}</p>
      </div>
    </div>
  );
};

const AiCardSection = () => {
  const [showMore, setShowMore] = React.useState(false);

  const cardsData = [
    {
      id: 1,
      title: 'AI Consulting',
      description: 'Our AI consulting services are designed to deliver tailor-made solutions that align with your business goals. We help organizations identify opportunities for automation, efficiency, and growth by seamlessly integrating AI into their workflows. From ideation to execution, we ensure you unlock the full potential of AI.',
      image: '/AiSolution/aiconsulting.svg',
      roundedCorner: 'rounded-bl-[170px] rounded-tr-[170px]',
      icon: require('react-icons/ri').RiBrain2Fill,
    },
    {
      id: 2,
      title: 'Generative AI',
      description: 'Creativity meets technology with our Generative AI solutions. Whether it’s content generation, design assistance, or product innovation, we enable businesses to boost productivity and creativity. Our AI tools make it easy to manage tasks and turn your ideas into reality.',
      image: '/AiSolution/GenerativeAi.svg',
      roundedCorner: 'rounded-tl-[170px] rounded-br-[170px]',
      icon: require('react-icons/bs').BsStars,
    },
    {
      id: 3,
      title: 'Machine Learning',
      description: ' With Machine Learning, Codework empowers businesses with predictive insights and more innovative automation. Leveraging advanced frameworks like PyTorch, Keras, and TensorFlow, we help analyze data, uncover patterns, and enable data-driven decisions. Our solutions, including Radi Insight Scan and Signature Identification, utilize ML concepts to provide deeper insights and enhanced automation. These innovations enable businesses to stay one step ahead of market demands and drive innovation.',
      image: '/AiSolution/ML.svg',
      roundedCorner: 'rounded-tl-[170px] rounded-br-[170px]',
      icon: require('react-icons/gi').GiGears,
    },
    {
      id: 4,
      title: 'Natural Language Processing',
      description: 'Natural Language Processing (NLP) shapes communication, and our NLP solutions make it smarter. We leverage advanced language processing to enhance text analysis, automate customer support, and extract valuable insights from unstructured data. With NLP and ML, we have developed a Caregiver Communication with Text Analytics Tool to improve interactions, understand needs, and provide better support in caregiving environments.',
      image: '/AiSolution/NLP.svg',
      roundedCorner: 'rounded-bl-[170px] rounded-tr-[170px]',
      icon: require('react-icons/ai').AiFillMessage,
    },
    {
      id: 5,
      title: 'Data Engineering',
      description: 'A robust data infrastructure is the backbone of any business. Our Data Engineering services ensure your data is well-organized, easily accessible, and efficiently processed, giving you the foundation to scale and innovate.',
      image: '/AiSolution/DE.svg',
      roundedCorner: 'rounded-bl-[170px] rounded-tr-[170px]',
      icon: require('react-icons/fa').FaDatabase,
    },
    {
      id: 6,
      title: 'Cyber Security',
      description: 'Protecting digital assets is critical in today’s connected world. Codework’s cybersecurity solutions leverage advanced technologies, including XGBoost, to analyze threats, detect vulnerabilities, and provide comprehensive protection for your systems, data, and infrastructure. We ensure safety, trust, and resilience for your business in an ever-evolving digital landscape.',
      image: '/AiSolution/CS.svg',
      roundedCorner: 'rounded-tl-[170px] rounded-br-[170px]',
      icon: require('react-icons/md').MdOutlineSecurity,
    },
    {
      id: 7,
      title: 'Predictive Analytics',
      description: 'Stay ahead of the curve with Predictive Analytics. We use AI-driven forecasting models to analyze trends, predict outcomes, and deliver actionable insights that enable businesses to plan and perform better.',
      image: '/AiSolution/PA.svg',
      roundedCorner: 'rounded-tl-[170px] rounded-br-[170px]',
      icon: require('react-icons/bs').BsFillBarChartLineFill,
    },
    {
      id: 8,
      title: 'AI-Chatbots',
      description: 'Enhance customer engagement with our intelligent AI chatbots. Codework’s chatbots provide real-time responses, improve user satisfaction, and streamline.',
      image: '/AiSolution/ai.svg',
      roundedCorner: 'rounded-bl-[170px] rounded-tr-[170px]',
      icon: require('react-icons/fa').FaRobot,
    },
  ];

  const displayedCards = showMore ? cardsData : cardsData.slice(0, 4);

  return (
    <div className="relative p-8 bg-gradient-to-b from-[#FBF8E6] to-[#EBF9FF]">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#d8b4fe" />
          </linearGradient>
        </defs>
      </svg>

      {/* Desktop view */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 justify-items-center">
          {displayedCards.map((card) => (
            <Card key={card.id} card={card} additionalStyle={card.additionalStyle} />
          ))}
        </div>
        {!showMore && (
          <div className="flex justify-center mt-8">
            <button
              className="px-10 py-3 text-white rounded-full transition bg-gradient-to-r from-[#06b6d4] to-[#d8b4fe] hover:opacity-90"
              onClick={() => setShowMore(true)}
            >
              View All
            </button>
          </div>
        )}
      </div>

      {/* Mobile view */}
      <div className="flex md:hidden">
        <MobileSection />
      </div>

      {/* Straight Line Image - Positioned to Right End at Bottom */}
      <div className="absolute bottom-0 right-0">
        <img 
          src="/straightLine.svg" 
          alt="Straight Line Decoration" 
        />
      </div>
    </div>
  );
};

export default AiCardSection;

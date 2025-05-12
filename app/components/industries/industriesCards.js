import Link from 'next/link';
import React from 'react';

const IndustriesCards = () => {
  const cardData = [
    {
      title: 'Healthcare',
      img: '/Industires/healthcare.jpg',
      description: 'Our AI-powered healthcare solutions revolutionize diagnostics with precision and speed, enabling personalized treatment plans tailored to each patient. By securely managing Electronic Health Records (EHR), we ensure instant access to patient histories while protecting sensitive data.',
      link: '/ai-in-healthcare-you-must-know'
    },
    {
      title: 'Education',
      img: '/Industires/education.jpg',
      description: 'Explore unique insights into how AI in education empowers and transforms student learning experiences for a brighter future. Dive in now!.',
      link: '/unique-ai-in-education'
    },
    {
      title: 'E-commerce',
      img: '/Industires/ecommerce.jpg',
      description: 'Discover the secrets of integrating AI in e-commerce and unlock remarkable success for your business with our expert strategies and insights.',
      link: '/ai-in-ecommerce'
    },
    {
      title: 'Finance',
      img: '/Industires/finance.jpg',
      description: 'Find out how new AI technologies in finance are empowering decisions and paving the way for a brighter, more efficient financial future.',
      link: '/new-ai-in-finance'
    },
    {
      title: 'Data Security',
      img: '/Industires/datascurity.jpg',
      description: 'AI in data security refers to the use of artificial intelligence to detect, prevent, and respond to cybersecurity threats by analyzing patterns, identifying vulnerabilities, and automating protective measures.',
      link: '/ai-in-data-security'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="card w-80 bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 rounded-xl overflow-hidden"
          >
            <figure className="h-48 overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body p-6 flex flex-col justify-between h-48">
              <div>
                <h2 className="card-title text-lg font-bold text-gray-800">
                  {card.title}
                </h2>
                <p className="text-gray-600 mt-2 overflow-hidden line-clamp-3">
                  {card.description}
                </p>
              </div>
              <Link
                href={card.link}
                className="btn btn-info text-blue-500 self-start mt-4"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesCards;

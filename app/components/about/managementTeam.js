import React from 'react';
import { FaLinkedin } from "react-icons/fa";

const ManagementTeam = () => {
  const teamMembersLevelOne = [
    {
      name: 'Christina Arulraj',
      title: 'Managing Director',
      imgSrc: '/managementTeam/christy-cw-team.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/christina-arulraj-24178b60/'
    },
    {
      name: 'Senthil Kumar',
      title: 'Manager- Product Delivery',
      imgSrc: '/managementTeam/senthil-cw-team.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/senthil-kumar-l-t-26a9b1132/'
    },
    {
      name: 'Mathumitha',
      title: 'HR Head',
      imgSrc: '/managementTeam/mathu-cw-team.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/mathumitha-chennakesavan-027892168/'
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-24">
      <div className="container mx-auto px-6 md:px-20 space-y-6">
        <h2 className="text-3xl font-bold  text-gray-800 text-center">Management Team</h2>
        <p className="text-center text-gray-600 md:text-lg w-[80%] mx-auto">
          Our management team boasts over 15 years of experience in driving business excellence and fostering innovation. With a deep understanding of industry trends and a commitment to strategic growth, they ensure Codework remains a trusted partner for cutting-edge AI and technology solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          {teamMembersLevelOne.map((member, idx) => (
            <div key={idx} className="group relative flex flex-col items-center p-6">
              {/* blurred gradient circle */}
              <div
                className="absolute -top-8 -left-4 w-72 h-72 bg-gradient-to-br from-purple-300 to-indigo-400
                           rounded-full filter blur-3xl opacity-30 transition-opacity duration-500
                           group-hover:opacity-50"
              />

              {/* card */}
              <div className="relative w-64 h-80 bg-white rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />

                {/* hover-linkedIn icon */}
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center
                             bg-black bg-opacity-50 text-white text-3xl rounded-3xl
                             opacity-0 transition-opacity duration-300
                             group-hover:opacity-100"
                >
                  <FaLinkedin />
                </a>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam;

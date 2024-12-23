import React from 'react';
import { FaLinkedin } from "react-icons/fa";

const ManagementTeam = () => {
    const teamMembersLevelOne = [
        {
            name: 'Vijay',
            title: 'CEO',
            imgSrc: '/path/to/image2.jpg', // Replace with actual image path
        },
        {
            name: 'Soorath',
            title: 'CTO',
            imgSrc: '/path/to/image3.jpg', // Replace with actual image path
        },
        {
            name: 'Christina',
            title: 'Managing Director',
            imgSrc: '/path/to/image1.jpg', // Replace with actual image path
        },
    ];
    const teamMembersLevelTwo = [
        {
            name: 'Christy',
            title: 'Managing Director',
            imgSrc: '/path/to/image1.jpg', // Replace with actual image path
        },
        {
            name: 'Alagasan',
            title: 'Program Manager',
            imgSrc: '/path/to/image2.jpg', // Replace with actual image path
        },
        {
            name: 'Vinoth',
            title: 'Lead',
            imgSrc: '/path/to/image3.jpg', // Replace with actual image path
        },
    ];

    return (
        <div className="bg-black bg-opacity-20 py-10">
            <div className="container mx-auto px-10 md:px-20 space-y-5">
                {/* <h2 className="text-3xl font-bold text-center mb-6">Management Team</h2>
        <p className="text-center text-gray-600 mb-10">
          The management team at CodeWork is composed of visionary leaders with extensive experience in the technology industry. They bring a wealth of knowledge and strategic insight, guiding the company with a clear focus on innovation, quality, and client satisfaction.
        </p> */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
                    {teamMembersLevelOne.map((member, index) => (
                        <div
                            key={index}
                            className="relative bg-black bg-opacity-50 shadow-md rounded-lg p-4 text-center"
                        >
                            <img
                                src={member.imgSrc}
                                alt={member.name}
                                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                            />
                            <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                            <p className="text-gray-300">{member.title}</p>

                            {/* LinkedIn Button */}
                            <a
                                href={member.linkedinUrl} // Add LinkedIn profile URL here
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-3 right-3 z-10 bg-black text-white p-1 rounded-sm hover:bg-red-500 transition duration-300"
                            >
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembersLevelTwo.map((member, index) => (
                        <div
                            key={index}
                            className="bg-black bg-opacity-50 shadow-md rounded-lg p-4 text-center"
                        >
                            <img
                                src={member.imgSrc}
                                alt={member.name}
                                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                            />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-400">{member.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManagementTeam;

import React from 'react';
import { FaLinkedin } from "react-icons/fa";

const ManagementTeam = () => {
    const teamMembersLevelOne = [
        {
            name: 'Christina Arulraj',
            title: 'Managing Director',
            imgSrc: 'christy-cw-team.jpg',
            linkedinUrl: 'https://www.linkedin.com/in/christina-arulraj-24178b60/'
        },
        // {
        //     name: 'Leo Priestly Thomas',
        //     title: 'Managing Director',
        //     imgSrc: '/Leo-cw-team.jpeg',
        //     linkedinUrl: 'https://www.linkedin.com/in/leopriestly/'
        // },
        // {
        //     name: 'Senthil Kumar',
        //     title: 'Manager- Product Delivery',
        //     imgSrc: '/senthil-cw-team.jpg',
        //     linkedinUrl: 'https://www.linkedin.com/in/senthil-kumar-l-t-26a9b1132/'
        // },
        {
            name: 'Senthil Kumar',
            title: 'Manager- Product Delivery',
            imgSrc: '/senthil-cw-team.jpg',
            linkedinUrl: 'https://www.linkedin.com/in/senthil-kumar-l-t-26a9b1132/'
        },
        {
            name: 'Alagasan',
            title: 'Program Manager',
            imgSrc: '/alagasan-cw-team.jpg',
            linkedinUrl: 'https://www.linkedin.com/in/senthil-kumar-l-t-26a9b1132/'
        },
        {
            name: 'Mathumitha',
            title: 'IT Recruiter',
            imgSrc: '/mathu-cw-team.jpg',
            linkedinUrl: 'https://www.linkedin.com/in/mathumitha-chennakesavan-027892168/'
        },
    ];
    const teamMembersLevelTwo = [
        {
            name: 'Sainath',
            title: 'ML Engineer',
            imgSrc: '/sai-cw-team.JPG',
            linkedinUrl: 'https://www.linkedin.com/in/sainath-m-a95186186/'
        },
        {
            name: 'Saran Menon',
            title: 'Deep Learning Specialist',
            imgSrc: 'saran-cw-team.jpg',
            linkedinUrl: 'https://www.linkedin.com/in/saran-menon-874a14216/'
        },
    ];

    return (
        <div className="bg-black bg-opacity-20 py-10">
            <div className="container mx-auto px-10 md:px-20 space-y-5">
                <h2 className="text-3xl font-bold text-center mb-6">Management Team</h2>
                <p className="text-center text-gray-300 mb-10 md:text-xl">
                    Our management team boasts over 15 years of experience in driving business excellence and fostering innovation. With a deep understanding of industry trends and a commitment to strategic growth, they ensure Codework remains a trusted partner for cutting-edge AI and technology solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:mt-10">
                    {teamMembersLevelOne.map((member, index) => (
                        <div
                            key={index}
                            className="relative rounded-full shadow-md p-4 text-center group"
                        >
                            <img
                                src={member.imgSrc}
                                alt={member.name}
                                className="w-72 h-72 mx-auto rounded-full object-cover mb-4"
                            />
                            <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                            <p className="text-gray-300">{member.title}</p>

                            {/* LinkedIn Button */}
                            <a
                                href={member.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center z-10 text-white p-1 rounded-sm transition duration-300 opacity-0 group-hover:opacity-100"
                            >
                                <FaLinkedin className="w-9 h-9 hover:text-red-400 text-center" />
                            </a>
                        </div>

                    ))}
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-center mb-6">Technical Team</h2>
                    <p className="text-center text-gray-300 mb-10 md:text-xl">
                        Our technical team is the backbone of Codework's innovation. With exceptional proficiency in AI technologies and a passion for solving complex challenges, they deliver transformative solutions that help businesses achieve their goals in today’s digital-first world.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:mt-10">
                    {teamMembersLevelTwo.map((member, index) => (
                        <div
                            key={index}
                            className="relative rounded-full shadow-md p-4 text-center group"
                        >
                            <img
                                src={member.imgSrc}
                                alt={member.name}
                                className="w-72 h-72 mx-auto rounded-full object-cover mb-4"
                            />
                            <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                            <p className="text-gray-300">{member.title}</p>

                            {/* LinkedIn Button */}
                            <a
                                href={member.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center z-10 text-white p-1 rounded-sm transition duration-300 opacity-0 group-hover:opacity-100"
                            >
                                <FaLinkedin className="w-9 h-9 hover:text-red-400 text-center" />
                            </a>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManagementTeam;

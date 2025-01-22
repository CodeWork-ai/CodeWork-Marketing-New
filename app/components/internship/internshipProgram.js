'use client'
import React from 'react';
import { FaLaptopCode, FaNetworkWired, FaProjectDiagram, FaHandsHelping } from 'react-icons/fa';

const InternshipProgram = () => {
    return (
        <div className="px-8 md:px-16 py-16 bg-black bg-opacity-30">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-white mb-4">CODEWORK Internship Program</h1>
                <p className="text-xl text-gray-300">
                    Building Skills, Empowering Minds, Shaping Careers.
                </p>
            </div>

            {/* <section className="mt-12">
                <h2 className="text-3xl font-semibold text-gray-100 mb-6">About CODEWORK</h2>
                <p className="text-gray-200 leading-relaxed">
                    PRO CODE WORK IT SOLUTIONS PVT. LTD. is a budding organization committed to delivering innovative 
                    products and solutions that empower businesses and individuals with powerful tools and capabilities.
                </p>
            </section> */}

            <section className="mt-12">
                <h2 className="text-3xl font-semibold text-gray-100 mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-start">
                        <FaLaptopCode className="text-4xl text-blue-500 mr-4" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-100">Hands-on Experience</h3>
                            <p className="text-gray-200">
                                Engage in live projects and apply theoretical knowledge to practical scenarios, ensuring relevant 
                                experience for your career.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <FaHandsHelping className="text-4xl text-green-500 mr-4" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-100">Mentorship</h3>
                            <p className="text-gray-200">
                                Benefit from guidance by highly qualified mentors dedicated to helping you develop your skills and 
                                offering insights throughout the internship.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <FaProjectDiagram className="text-4xl text-purple-500 mr-4" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-100">Skill Development</h3>
                            <p className="text-gray-200">
                                Enhance your technical and soft skills through practical application and expert guidance.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <FaNetworkWired className="text-4xl text-red-500 mr-4" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-100">Networking</h3>
                            <p className="text-gray-200">
                                Build valuable connections with industry professionals and peers, opening doors for future 
                                collaborations and career advancements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-12">
                <h2 className="text-3xl font-semibold text-gray-100 mb-6">Program Outcomes</h2>
                <ul className="list-disc list-inside text-gray-200">
                    <li>Develop proficiency in cutting-edge technologies and tools widely used in the industry.</li>
                    <li>Gain insights into project management methodologies and tools.</li>
                    <li>Work effectively in diverse teams, improving communication and collaboration skills.</li>
                    <li>Tackle real-world challenges with innovative and creative solutions.</li>
                </ul>
            </section>

            <section className="mt-12">
                <h2 className="text-3xl font-semibold text-gray-100 mb-6">Eligibility Criteria</h2>
                <ul className="list-disc list-inside text-gray-200">
                    <li>Students currently pursuing any degree in a relevant field.</li>
                    <li>Eligibility from the 2nd year of studies onwards or recent graduates within two years.</li>
                    <li>A minimum cumulative GPA of 7.0.</li>
                    <li>Demonstrated interest in learning and acquiring new skills.</li>
                </ul>
            </section>

            {/* <section className="mt-12 text-center">
                <h2 className="text-3xl font-semibold text-gray-100 mb-6">Apply Now</h2>
                <p className="text-gray-200">
                    Interested candidates can send their updated resume and a brief introduction to:
                </p>
                <p className="text-gray-100 font-semibold">hrindia@codework.ai</p>
                <p className="text-gray-100">+91 81223 01459 | +91 72004 21678</p>
            </section> */}
        </div>
    );
};

export default InternshipProgram;

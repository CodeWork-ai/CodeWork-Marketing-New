'use client'
import React from 'react';
import { FaLaptopCode, FaNetworkWired, FaProjectDiagram, FaHandsHelping } from 'react-icons/fa';

const InternshipProgram = () => {
    return (
        <div className="relative bg-primary overflow-hidden py-16 md:py-20 lg:py-24">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-32 h-32 md:w-40 md:h-40 bg-secondary/20 rounded-full"></div>
                <div className="absolute top-60 right-32 w-24 h-24 md:w-32 md:h-32 bg-secondary/15 rounded-full"></div>
                <div className="absolute bottom-40 left-1/3 w-36 h-36 md:w-48 md:h-48 bg-secondary/25 rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-20 h-20 md:w-24 md:h-24 bg-secondary/10 rounded-full"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-32 left-16 w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full"></div>
                <div className="absolute top-48 right-20 w-1 h-1 md:w-2 md:h-2 bg-white/60 rounded-full"></div>
                <div className="absolute bottom-56 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-secondary/80 rounded-full"></div>
                <div className="absolute top-3/4 right-1/3 w-1 h-1 md:w-2 md:h-2 bg-white/40 rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-20">
                    {/* Section Badge */}
                    <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-6 md:mb-8">
                        <span className="text-secondary text-sm font-medium">— Internship Program —</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
                        <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">CODEWORK</span>{" "}
                        <span className="text-white">Internship Program</span>
                    </h1>

                    {/* Decorative underline */}
                    <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto mb-8"></div>

                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto">
                        Building Skills, <span className="text-secondary font-medium">Empowering Minds</span>, Shaping Careers.
                    </p>
                </div>

                {/* Key Features Section */}
                <section className="mb-16 md:mb-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center">
                        Key <span className="text-secondary">Features</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 group">
                            <div className="flex items-start">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/20 rounded-xl flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300">
                                    <FaLaptopCode className="text-secondary w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                                        Hands-on Experience
                                    </h3>
                                    <p className="text-white/80 leading-relaxed">
                                        Engage in live projects and apply theoretical knowledge to practical scenarios, ensuring relevant 
                                        experience for your career.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 group">
                            <div className="flex items-start">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/20 rounded-xl flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300">
                                    <FaHandsHelping className="text-secondary w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                                        Mentorship
                                    </h3>
                                    <p className="text-white/80 leading-relaxed">
                                        Benefit from guidance by highly qualified mentors dedicated to helping you develop your skills and 
                                        offering insights throughout the internship.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 group">
                            <div className="flex items-start">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/20 rounded-xl flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300">
                                    <FaProjectDiagram className="text-secondary w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                                        Skill Development
                                    </h3>
                                    <p className="text-white/80 leading-relaxed">
                                        Enhance your technical and soft skills through practical application and expert guidance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 group">
                            <div className="flex items-start">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/20 rounded-xl flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300">
                                    <FaNetworkWired className="text-secondary w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                                        Networking
                                    </h3>
                                    <p className="text-white/80 leading-relaxed">
                                        Build valuable connections with industry professionals and peers, opening doors for future 
                                        collaborations and career advancements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Outcomes Section */}
                <section className="mb-16 md:mb-20">
                    <div className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 lg:p-12 hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 relative">
                        {/* Section Icon */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                            Program <span className="text-secondary">Outcomes</span>
                        </h2>
                        
                        <ul className="space-y-4 text-white/90 leading-relaxed">
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <span>Develop proficiency in cutting-edge technologies and tools widely used in the industry.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <span>Gain insights into project management methodologies and tools.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <span>Work effectively in diverse teams, improving communication and collaboration skills.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <span>Tackle real-world challenges with innovative and creative solutions.</span>
                            </li>
                        </ul>

                        {/* Bottom glow */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
                    </div>
                </section>

                {/* Eligibility Criteria Section */}
                <section className="mb-16 md:mb-20">
                    <div className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 lg:p-12 hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 relative">
                        {/* Section Icon */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                            Eligibility <span className="text-secondary">Criteria</span>
                        </h2>
                        
                        <ul className="space-y-4 text-white/90 leading-relaxed">
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <span>Students currently pursuing any degree in a relevant field.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <span>Eligibility from the 2nd year of studies onwards or recent graduates within two years.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <span>A minimum cumulative GPA of 7.0.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <span>Demonstrated interest in learning and acquiring new skills.</span>
                            </li>
                        </ul>

                        {/* Bottom glow */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
                    </div>
                </section>
            </div>

            {/* Enhanced Bottom Decoration */}
            <div className="absolute bottom-0 right-0 opacity-20">
                <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
            </div>
        </div>
    );
};

export default InternshipProgram;

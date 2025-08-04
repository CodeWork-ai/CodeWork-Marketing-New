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
    {
      name: 'Archana Arun',
      title: 'Director',
      imgSrc: '/managementTeam/DSC_0017.JPG',
      linkedinUrl: 'https://www.linkedin.com/in'
    },
    {
      name: 'Keerthika M',
      title: 'Project Manager',
      imgSrc: '/managementTeam/Keerthika.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/keerthika-mathi-68633419a/'
    },
    {
      name: 'Aparna Prassanakumar',
      title: 'Senior Project Manager',
      imgSrc: '/managementTeam/DSC_0067.JPG',
      linkedinUrl: 'https://www.linkedin.com/in/aparna-prasannakumar-527aa519/'
    },
  ];

  return (
    <div className="bg-primary relative overflow-hidden py-16 md:py-20 lg:py-24">
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
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-6 md:mb-8">
            <span className="text-secondary text-sm font-medium">— Leadership Excellence —</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
            <span className="text-white">Management </span>
            <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto mb-8"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -left-3 md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full hidden lg:block"></div>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/90 lg:pl-8 font-light">
                Our management team boasts over <span className="text-secondary font-medium">15 years of experience</span> in driving business excellence and fostering innovation. With a deep understanding of industry trends and a commitment to strategic growth, they ensure <span className="text-secondary font-medium">Codework remains a trusted partner</span> for cutting-edge AI and technology solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembersLevelOne.map((member, idx) => (
            <div key={idx} className="group relative flex flex-col items-center">
              {/* Glowing background effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/30 to-secondary/50 rounded-full blur-2xl md:blur-3xl scale-110 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* Enhanced Card */}
              <div className="relative w-full max-w-sm">
                <div className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 group-hover:scale-105 shadow-2xl shadow-secondary/25">
                  
                  {/* Image Container - REMOVED Position Badge and Corner Decorations */}
                  <div className="relative w-full h-80 md:h-96 bg-white/10 rounded-2xl overflow-hidden mb-6">
                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* LinkedIn Overlay */}
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-primary/80 backdrop-blur-sm text-secondary text-4xl md:text-5xl rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary/90"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-secondary/30 hover:scale-110 transition-transform duration-300">
                        <FaLinkedin className="text-secondary" />
                      </div>
                    </a>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto mb-3"></div>
                    <p className="text-white/80 text-sm md:text-base font-medium">
                      {member.title}
                    </p>
                  </div>

                  {/* Bottom glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Statistics Section */}
        <div className="mt-16 md:mt-20 lg:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 text-center hover:bg-white/10 hover:border-secondary/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">15+</div>
              <div className="text-white/70 text-xs md:text-sm">Years Experience</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 text-center hover:bg-white/10 hover:border-secondary/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">☆☆☆☆☆</div>
              <div className="text-white/70 text-xs md:text-sm">Rating</div>
            </div>
             <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 text-center hover:bg-white/10 hover:border-secondary/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">500+</div>
              <div className="text-white/70 text-xs md:text-sm">Projects Led</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 text-center hover:bg-white/10 hover:border-secondary/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">100%</div>
              <div className="text-white/70 text-xs md:text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>
    </div>
  );
};

export default ManagementTeam;

import React from 'react';
import Marquee from 'react-fast-marquee';

const Clients = () => {
  const clientLogos = [
    { name: 'AIKYNF', logo: '/client/AIKYINE.png' },
    { name: 'INTULOGIC', logo: '/client/intulogic.svg' },
    { name: 'Sparks Global', logo: '/client/Prezerv.svg' },
    { name: 'NALAM', logo: '/client/nalam.svg' },
    { name: 'MTM', logo: '/client/mtm.svg' },
    { name: 'STOREFRIES', logo: '/client/storefries.svg' },
    { name: 'EXTRA1', logo: '/client/webSign.png' },
    { name: 'EXTRA2', logo: '/client/sparksGlobal.svg' },
    { name: 'Prezerv', logo: '/client/Prezerv.png' },
    
  ];

  return (
    <div className="relative min-h-[50vh] sm:min-h-[74vh] bg-[#F4F6FF] flex items-end">
      <div className="w-full mx-auto text-center">
        {/* Single full width background box with a purple to cyan gradient */}
        <div className="bg-gradient-to-b from-purple-200 to-cyan-200 w-full min-h-[300px] sm:min-h-[400px] p-6 sm:p-10 md:p-12 lg:p-10 xl:p-10 rounded-tl-[100px] rounded-tr-[100px] sm:rounded-tl-[240px] sm:rounded-tr-[240px]">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-800 mb-4 sm:mb-8 md:mb-8">
            Our Happy Clients
          </h2>
          <Marquee
            speed={50}
            gradient={false}
            pauseOnHover
            direction="left"
            loop={0}
            className="py-4"
          >
            {clientLogos.map((client, index) => (
              <div key={index} className="mx-8 sm:mx-14 flex items-center justify-center">
                <img src={client.logo} alt={client.name} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Clients;

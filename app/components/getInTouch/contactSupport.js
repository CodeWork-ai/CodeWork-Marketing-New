import React from "react";

const ContactSupport = () => {
  return (
    <div className="py-20 sm:py-28 md:py-44 px-4 sm:px-6 md:px-8 lg:px-9">
      {/* Heading and Description */}
      <div className="text-left mb-8 sm:mb-12 px-2 sm:px-9">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
          Designed to Be as Adaptable as the Service Teams That Depend on It
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-full sm:max-w-3xl">
          Codework is revolutionizing how leading enterprises strategize and
          execute expert, personalized service at scale. With AI-driven
          recommendations customized for each service professional, machine, and
          customer, Codework is the premier platform for service professionals.
        </p>
      </div>

      {/* Stats Grid (responsive 1 / 2 / 3 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-full sm:max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-gray-100 w-full h-32 sm:h-[150px] rounded-md p-4 sm:p-6 flex items-center justify-center text-center shadow-sm">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-500">
            Client
          </h2>
        </div>

        {/* Card 2 */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-sm">
          <img
            src="/project.svg"
            alt="Projects Delivered"
            className="w-full h-40 sm:h-64 lg:h-72 object-cover"
          />
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-[#2c44ba] text-white font-bold text-xl sm:text-2xl rounded-md p-2 sm:p-4">
            98%
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-2 sm:pl-4">
            <p className="text-lg sm:text-2xl font-semibold text-white">
              Projects Delivered On Time and Within Budget
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 w-full h-32 sm:h-[150px] rounded-lg p-4 sm:p-6 flex items-center justify-center text-center shadow-sm">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-500">
            Support
          </h2>
        </div>

        {/* Card 4 */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-sm mt-0 sm:-mt-11">
          <img
            src="/client.svg"
            alt="Client Satisfaction"
            className="w-full h-40 sm:h-72 object-cover"
          />
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-[#2c44ba] text-white font-bold text-xl sm:text-2xl rounded-md p-2 sm:p-4">
            92%
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-2 sm:pl-4">
            <p className="text-lg sm:text-2xl font-semibold text-white">
              Client Satisfaction Across All Projects
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-100 w-full h-48 sm:h-[240px] rounded-lg p-4 sm:p-6 flex items-center justify-center text-center shadow-sm">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-500">
            Project
          </h2>
        </div>

        {/* Card 6 */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-sm mt-0 sm:-mt-11">

        <img
            src="/Support.png"
            alt="24/7 Support"
            className="w-full h-40 sm:h-72 object-cover"
          />
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-[#2c44ba] text-white font-bold text-xl sm:text-2xl rounded-md p-2 sm:p-4">
            24/7
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-2 sm:pl-4">
            <p className="text-lg sm:text-2xl font-semibold text-white">
              Support Availability for Our Global Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;

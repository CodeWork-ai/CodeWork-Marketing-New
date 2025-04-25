import React from "react";

const ContactSupport = () => {
  return (
    <div className=" py-44 px-9 sm:px-6 lg:px-8">
      {/* Heading and Description */}
      <div className="text-left pl-9 mb-12">
        <h1 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4">
          Designed to Be as Adaptable as the Service Teams That Depend on It
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl ">
          Codework is revolutionizing how leading enterprises strategize and
          execute expert, personalized service at scale. With AI-driven
          recommendations customized for each service professional, machine, and
          customer, Codework is the premier platform for service professionals.
        </p>
      </div>

      {/* Stats Grid (3x3) */}
      <div className="grid grid-cols-1 pt-20 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-gray-100 w-full h-[150px] rounded-md p-6 flex flex-col items-center text-center shadow-sm">
          <h2 className="text-4xl font-bold text-gray-500  py-6">  Client</h2>
        </div>

        {/* Card 2 (with full image) */}
        <div className="relative bg-gray-100 rounded-lg  flex flex-col items-start text-left shadow-sm overflow-hidden">
          {/* Full image */}
          <img
            src="/project.svg"
            alt="Client Satisfaction"
            className="w-full h-64 object-cover rounded-lg "
          />

          {/* 98% square-shaped badge */}
          <div className="absolute top-4 left-4 bg-teal-500 text-white font-bold text-2xl rounded-md p-4">
            98%
          </div>

          {/* Text centered to the left of the card */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-4">
            <p className="text-2xl font-semibold text-white">
            Projects Delivered On Time and Within Budget
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 w-full h-[150px] rounded-lg p-6 flex flex-col items-center text-center shadow-sm">
          <h2 className="text-4xl font-bold text-gray-500 py-6">Support</h2>
        </div>

        {/* Card 4 (with image) */}
        <div className="relative bg-gray-100 rounded-lg -mt-11 flex flex-col items-start text-left shadow-sm overflow-hidden">
          {/* Full image */}
          <img
            src="client.svg"
            alt="Client Satisfaction"
            className="w-full h-72 object-cover rounded-lg "
          />

          {/* 98% square-shaped badge */}
          <div className="absolute top-4 left-4 bg-teal-500 text-white font-bold text-2xl rounded-md p-4">
            92%
          </div>

          {/* Text centered to the left of the card */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-4">
            <p className="text-2xl font-semibold text-white">
            Client Satisfaction Across All Projects
            </p>
          </div>
        </div>

        {/* Card 5 (no image) */}
        <div className="bg-gray-100 w-full h-[240px] rounded-lg p-6 flex flex-col items-center text-center shadow-sm">
          <h2 className="text-5xl font-bold text-gray-500 py-20">Project</h2>
          
        </div>

        {/* Card 6 (with image) */}
        <div className="relative bg-gray-100 rounded-lg -mt-11 flex flex-col items-start text-left shadow-sm overflow-hidden">
          {/* Full image */}
          <img
            src="/Support.svg"
            alt="Client Satisfaction"
            className="w-full h-72 object-cover rounded-lg "
          />

          {/* 98% square-shaped badge */}
          <div className="absolute top-4 left-4 bg-teal-500 text-white font-bold text-2xl rounded-md p-4">
            24/7
          </div>

          {/* Text centered to the left of the card */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-4">
            <p className="text-2xl font-semibold text-white">
            Support Availability for Our Global Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;

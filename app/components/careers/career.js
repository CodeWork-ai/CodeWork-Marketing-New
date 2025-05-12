import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CareerPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto text-center px-4">
        {/* Call to Action Section */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#27364E] mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg md:text-xl text-[#27364E] mb-12 leading-relaxed">
            Explore our open positions and find the role that's right for you.
            <br />
            Let's build the future together.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="/join-our-team"
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white font-medium text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Apply for Jobs
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/intern-ship"
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-transparent border-2 border-blue-400 text-blue-500 font-medium text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Apply for Internships
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareerPage;

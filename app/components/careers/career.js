import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CareerPage = () => {
  return (
    <div className="px-6 py-12 bg-black bg-opacity-40">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        {/* <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-4">Join Our Team</h1>
          <p className="text-lg text-gray-300">
            At Codework, we’re on a mission to shape the future with cutting-edge AI technology. Become part of a team that values innovation, collaboration, and excellence.
          </p>
        </header> */}

        {/* Open Positions Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Current Opportunities</h2>
          <ul className="space-y-6">
            <li className="bg-blue-500 bg-opacity-20  p-6 rounded-lg text-gray-300">
              <h3 className="text-xl font-semibold text-white">Software Engineer</h3>
              <p className="text-sm mt-2">
                Collaborate with cross-functional teams to develop scalable, secure, and high-quality software solutions.
              </p>
              <a
                href="/careers"
                className="inline-flex items-center mt-4 text-red-500 hover:underline"
              >
                Learn More <FaArrowRight className="ml-2" />
              </a>
            </li>
            <li className="bg-blue-500 bg-opacity-20  p-6 rounded-lg text-gray-300">
              <h3 className="text-xl font-semibold text-white">Data Scientist</h3>
              <p className="text-sm mt-2">
                Analyze complex datasets and create AI-driven models to solve real-world problems.
              </p>
              <a
                href="/careers"
                className="inline-flex items-center mt-4 text-red-500 hover:underline"
              >
                Learn More <FaArrowRight className="ml-2" />
              </a>
            </li>
            <li className="bg-blue-500 bg-opacity-20 p-6 rounded-lg text-gray-300">
              <h3 className="text-xl font-semibold text-white">Product Manager</h3>
              <p className="text-sm mt-2">
                Lead product strategy and execution to deliver impactful solutions that align with business goals.
              </p>
              <a
                href="/careers"
                className="inline-flex items-center mt-4 text-red-500 hover:underline"
              >
                Learn More <FaArrowRight className="ml-2" />
              </a>
            </li>
          </ul>
        </section>

        {/* Why Join Us Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Why Join Codework?</h2>
          <ul className="space-y-4">
            <li className="text-gray-300 flex items-start">
              <FaArrowRight className="text-red-400 mr-2 mt-1" />
              <span>Work with a team of passionate and talented professionals.</span>
            </li>
            <li className="text-gray-300 flex items-start">
              <FaArrowRight className="text-red-400 mr-2 mt-1" />
              <span>Enjoy a culture that fosters innovation and growth.</span>
            </li>
            <li className="text-gray-300 flex items-start">
              <FaArrowRight className="text-red-400 mr-2 mt-1" />
              <span>Access opportunities for continuous learning and development.</span>
            </li>
            <li className="text-gray-300 flex items-start">
              <FaArrowRight className="text-red-400 mr-2 mt-1" />
              <span>Be part of a mission-driven organization shaping tomorrow.</span>
            </li>
          </ul>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Take the Next Step?</h2>
          <p className="text-gray-300 mb-6">
            Explore our open positions and find the role that’s right for you. Let’s build the future together.
          </p>
          <a
            href="/careers"
            className="inline-block bg-red-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600"
          >
            View All Careers
          </a>
        </section>
      </div>
    </div>
  );
};

export default CareerPage;

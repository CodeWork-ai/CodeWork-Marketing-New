import ShineBorder from '@/components/ui/shine-border';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="px-6 py-12 bg-black bg-opacity-30">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
        <ShineBorder className="relative flex flex-col bg-black bg-opacity-30 overflow-hidden rounded-lg md:shadow-xl"
                color={['#f52e20']}>
          <h1 className="text-xl p-4">
          Welcome to Codework, where innovation meets intelligence. We are a technology-driven company leveraging cutting-edge AI technology to transform businesses and drive success.
          Our team combines advanced AI tools, industry expertise, and a human-first approach to deliver results that matter. From startups to enterprises, we partner with businesses to unlock their full potential using AI and emerging technologies. 
          </h1>
          </ShineBorder>
          {/* <p className="text-lg text-gray-300">
            Welcome to Codework, where innovation meets intelligence. We are a technology-driven company leveraging cutting-edge AI technology to transform businesses and drive success.
          </p> */}
        </header>

        {/* Why Choose Codework Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Why Choose Codework?</h2>
          <ul className="space-y-4">
            <li className="text-gray-300 flex items-start">
              <FaCheckCircle className="text-green-500 mr-2 mt-1" />
              <span>
                <span className="font-semibold text-white">AI-Driven Solutions:</span> We specialize in crafting innovative AI-based products tailored to your business needs.
              </span>
            </li>
            <li className="text-gray-300 flex items-start">
              <FaCheckCircle className="text-green-500 mr-2 mt-1" />
              <span>
                <span className="font-semibold text-white">End-to-End Expertise:</span> From development to deployment, we ensure seamless technology integration.
              </span>
            </li>
            <li className="text-gray-300 flex items-start">
              <FaCheckCircle className="text-green-500 mr-2 mt-1" />
              <span>
                <span className="font-semibold text-white">User-Centric Approach:</span> We design solutions that prioritize user experience and real-world impact.
              </span>
            </li>
            <li className="text-gray-300 flex items-start">
              <FaCheckCircle className="text-green-500 mr-2 mt-1" />
              <span>
                <span className="font-semibold text-white">Proven Technologies:</span> Proficiency in Reactjs, Java, Python, Azure, AWS, R language, Nextjs, and more.
              </span>
            </li>
            <li className="text-gray-300 flex items-start">
              <FaCheckCircle className="text-green-500 mr-2 mt-1" />
              <span>
                <span className="font-semibold text-white">Scalable & Secure Systems:</span> Ensuring reliability, scalability, and security in every solution we build.
              </span>
            </li>
          </ul>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-gray-300 mb-4">
            Our mission is to leverage our expertise in software development to create meaningful solutions that benefit society while ensuring that our top talent shares in our organization's success.
          </p>
          <p className="text-gray-300">
            At Codework, we’re not just building technology. We’re shaping the future of businesses. Let’s innovate together!
          </p>
        </section>

        {/* What Makes Us Different Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">What Makes Us Different?</h2>
          <ul className="space-y-4">
            <li className="text-gray-300 flex items-start">
              <FaCheckCircle className="text-green-500 mr-2 mt-1" />
              <span>
                <span className="font-semibold text-white">Human-Centric Solutions:</span> We don’t just deliver technology; we create human-centric solutions powered by AI.
              </span>
            </li>
            <li className="text-gray-300 flex items-start">
              <FaCheckCircle className="text-green-500 mr-2 mt-1" />
              <span>
                <span className="font-semibold text-white">Expert Team:</span> Our expert team transforms your ideas into results using artificial intelligence and next-gen technologies.
              </span>
            </li>
            <li className="text-gray-300 flex items-start">
              <FaCheckCircle className="text-green-500 mr-2 mt-1" />
              <span>
                <span className="font-semibold text-white">Alignment with Your Goals:</span> With a focus on simplicity, innovation, and business growth, we align technology with your goals.
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

// pages/blog3.jsx
import React from "react";
import Image from "next/image";
import { FiClock } from "react-icons/fi";

const Blog8 = () => {
  return (
    <div className="bg-gradient-to-b from-[#FBF8E6] to-[#EBF9FF] py-12 pt-40">
      <div className="max-w-screen-lg mx-auto">
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          UAE Makes History with Free ChatGPT Plus for Every Resident
        </h1>

        {/* FEATURE IMAGE */}
        <div className="relative w-full h-[400px] border-4 border-cyan-300 border-t-0 border-l-0 rounded-lg overflow-hidden mb-6">
          <Image
            src="/blog/blog8.jpg"
            alt="UAE Free ChatGPT Plus Initiative"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* META (avatar, category, date) */}
        <div className="flex items-center text-sm text-gray-500 mb-10 space-x-3">
          <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-extrabold">
            P
          </div>
          <span className="uppercase">Prasanth</span>
          <span>•</span>
          <div className="flex items-center">
            <FiClock className="mr-1" />
            <span>29 May 2025</span>
          </div>
        </div>

        {/* INTRODUCTION */}
        <p className="text-gray-700 text-xl leading-relaxed mb-6">
          In a groundbreaking development for the global AI community, the United Arab Emirates (UAE) has become the first nation to offer all its residents free access to ChatGPT Plus. This initiative is a key part of the Stargate UAE project, a strategic collaboration between the UAE government and OpenAI.
        </p>

        {/* STARGATE UAE */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Stargate UAE: A Bold Step in National AI Infrastructure</h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Massive AI Data Center in Abu Dhabi</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          At the heart of this initiative lies the Stargate UAE AI data center, currently under development in Abu Dhabi. Once completed, the facility will house a one-gigawatt AI computing cluster, with the first 200 megawatts expected to go live by the end of 2026.
        </p>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Driving Innovation Across Key Sectors</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          This ambitious project will support advanced AI applications across various sectors, including:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-1">
          <li>Healthcare</li>
          <li>Education</li>
          <li>Public services</li>
        </ul>

        {/* Free ChatGPT Plus Subscription */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Free ChatGPT Plus Subscription: Empowering UAE Residents</h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">What Residents Will Receive</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Under this partnership, UAE residents will get complimentary ChatGPT Plus access, including:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-1">
          <li>Use of the advanced GPT-4o model</li>
          <li>Enhanced response speed and prioritized access during high-traffic periods</li>
          <li>Access to the latest AI-powered tools for writing, learning, coding, and more</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Democratizing AI for All</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          This groundbreaking initiative is designed to democratize artificial intelligence, making advanced AI tools available to everyone and reshaping how people in the UAE work, learn, and live.
        </p>

        {/* Strategic Alliances */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Strategic Alliances to Boost AI Innovation</h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Collaboration with Global Tech Leaders</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          The UAE's AI strategy is further strengthened by partnerships with global tech giants such as:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-1">
          <li>Oracle</li>
          <li>Nvidia</li>
          <li>Cisco</li>
          <li>SoftBank</li>
          <li>G42 (a leading Middle Eastern AI firm backed by Microsoft)</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Focus Areas of the Alliance</h3>
        <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-1">
          <li>Developing localized AI tools</li>
          <li>Ensuring data privacy and regulatory compliance</li>
          <li>Fostering an ecosystem for responsible AI use</li>
        </ul>

        {/* Global Impact */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Paving the Way for Global AI Adoption</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          With this landmark initiative, the UAE is setting a new benchmark in AI adoption and innovation. By providing free ChatGPT Plus subscriptions and investing in national infrastructure, the country is not only empowering its citizens but also solidifying its position as a global leader in artificial intelligence.
        </p>
      </div>
    </div>
  );
};

export default Blog8;

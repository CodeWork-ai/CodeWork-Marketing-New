// pages/blog8.jsx
"use client";
import React from "react";
import Image from "next/image";
import { FiClock } from "react-icons/fi";

const Blog8 = () => {
  return (
    <div className="bg-primary py-12 pt-40 min-h-screen">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* TITLE - Only main heading uses secondary color */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-secondary mb-8 drop-shadow-glow">
          UAE Makes History with Free ChatGPT Plus for Every Resident
        </h1>

        {/* FEATURE IMAGE */}
        <div className="relative w-full h-[400px] border-4 border-secondary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
          <Image
            src="/blog/blog8.jpg"
            alt="UAE Free ChatGPT Plus Initiative"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* META (avatar, category, date) */}
        <div className="flex items-center text-sm text-white mb-10 space-x-3">
          <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-extrabold drop-shadow-glow">
            P
          </div>
          <span className="uppercase tracking-wide font-semibold">Prasanth</span>
          <span>•</span>
          <div className="flex items-center">
            <FiClock className="mr-1 text-cyan-400" />
            <span>29 May 2025</span>
          </div>
        </div>

        {/* INTRODUCTION */}
        <p className="text-white/80 text-xl leading-relaxed mb-6">
          In a groundbreaking development for the global AI community, the United Arab Emirates (UAE) has become the first nation to offer all its residents free access to ChatGPT Plus. This initiative is a key part of the Stargate UAE project, a strategic collaboration between the UAE government and OpenAI.
        </p>

        {/* STARGATE UAE */}
        <h2 className="text-2xl font-bold text-white mb-4">Stargate UAE: A Bold Step in National AI Infrastructure</h2>
        <h3 className="text-xl font-semibold text-white/80 mb-2">Massive AI Data Center in Abu Dhabi</h3>
        <p className="text-white/80 leading-relaxed mb-6">
          At the heart of this initiative lies the Stargate UAE AI data center, currently under development in Abu Dhabi. Once completed, the facility will house a one-gigawatt AI computing cluster, with the first 200 megawatts expected to go live by the end of 2026.
        </p>
        <h3 className="text-xl font-semibold text-white/80 mb-2">Driving Innovation Across Key Sectors</h3>
        <p className="text-white/80 leading-relaxed mb-6">
          This ambitious project will support advanced AI applications across various sectors, including:
        </p>
        <ul className="list-disc ml-6 text-white/80 mb-6 space-y-1">
          <li>Healthcare</li>
          <li>Education</li>
          <li>Public services</li>
        </ul>

        {/* Free ChatGPT Plus Subscription */}
        <h2 className="text-2xl font-bold text-white mb-4">Free ChatGPT Plus Subscription: Empowering UAE Residents</h2>
        <h3 className="text-xl font-semibold text-white/80 mb-2">What Residents Will Receive</h3>
        <p className="text-white/80 leading-relaxed mb-6">
          Under this partnership, UAE residents will get complimentary ChatGPT Plus access, including:
        </p>
        <ul className="list-disc ml-6 text-white/80 mb-6 space-y-1">
          <li>Use of the advanced GPT-4o model</li>
          <li>Enhanced response speed and prioritized access during high-traffic periods</li>
          <li>Access to the latest AI-powered tools for writing, learning, coding, and more</li>
        </ul>
        <h3 className="text-xl font-semibold text-white/80 mb-2">Democratizing AI for All</h3>
        <p className="text-white/80 leading-relaxed mb-6">
          This groundbreaking initiative is designed to democratize artificial intelligence, making advanced AI tools available to everyone and reshaping how people in the UAE work, learn, and live.
        </p>

        {/* Strategic Alliances */}
        <h2 className="text-2xl font-bold text-white mb-4">Strategic Alliances to Boost AI Innovation</h2>
        <h3 className="text-xl font-semibold text-white/80 mb-2">Collaboration with Global Tech Leaders</h3>
        <p className="text-white/80 leading-relaxed mb-6">
          The UAE's AI strategy is further strengthened by partnerships with global tech giants such as:
        </p>
        <ul className="list-disc ml-6 text-white/80 mb-6 space-y-1">
          <li>Oracle</li>
          <li>Nvidia</li>
          <li>Cisco</li>
          <li>SoftBank</li>
          <li>G42 (a leading Middle Eastern AI firm backed by Microsoft)</li>
        </ul>
        <h3 className="text-xl font-semibold text-white/80 mb-2">Focus Areas of the Alliance</h3>
        <ul className="list-disc ml-6 text-white/80 mb-6 space-y-1">
          <li>Developing localized AI tools</li>
          <li>Ensuring data privacy and regulatory compliance</li>
          <li>Fostering an ecosystem for responsible AI use</li>
        </ul>

        {/* Global Impact */}
        <h2 className="text-2xl font-bold text-white mb-4">Paving the Way for Global AI Adoption</h2>
        <p className="text-white/80 leading-relaxed mb-6">
          With this landmark initiative, the UAE is setting a new benchmark in AI adoption and innovation. By providing free ChatGPT Plus subscriptions and investing in national infrastructure, the country is not only empowering its citizens but also solidifying its position as a global leader in artificial intelligence.
        </p>

        <style jsx>{`
          .drop-shadow-glow {
            text-shadow: 0 0 12px #1ddfea66, 0 0 2px #223044;
          }
          .shadow-glow {
            box-shadow: 0 0 32px #1ddfea22, 0 0 8px #22304426;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Blog8;

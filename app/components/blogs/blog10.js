import React from "react";
import Image from "next/image";
import { FiClock } from "react-icons/fi";

const Blog10 = () => {
  return (
    <div className="bg-gradient-to-b from-[#FBF8E6] to-[#EBF9FF] py-12 pt-40">
      <div className="max-w-screen-lg mx-auto">
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Revolutionizing Hiring: How CODEWORK is Automating Recruitment with AI
        </h1>

        {/* FEATURE IMAGE */}
        <div className="relative w-full h-[400px] border-4 border-cyan-300 border-t-0 border-l-0 rounded-lg overflow-hidden mb-6">
          <Image
            src="/blog/blog10.jpg"
            alt="AI Recruitment Automation"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* META (avatar, category, date) */}
        <div className="flex items-center text-sm text-gray-500 mb-10 space-x-3">
          <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-extrabold">
            F
          </div>
          <span className="uppercase">Felista</span>
          <span>•</span>
          <div className="flex items-center">
            <FiClock className="mr-1" />
            <span>13 July 2025</span>
          </div>
        </div>

        {/* INTRODUCTION */}
        <p className="text-gray-700 text-xl leading-relaxed mb-6">
          The recruitment process is undergoing a major shift, and CODEWORK is leading the way. CODEWORK transforms traditional hiring into an efficient, data-driven system by integrating AI recruitment tools and automation technologies.
        </p>

        {/* SECTION: The Need for Automation */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Need for Automation in Recruitment</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Manual hiring processes are time-consuming, inconsistent, and prone to bias. With increasing demand for tech talent and a fast-paced job market, companies require solutions that ensure:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-1">
          <li>Faster screening of candidates</li>
          <li>Reduced time-to-hire</li>
          <li>Objective evaluation</li>
          <li>Improved candidate experience</li>
        </ul>

        {/* SECTION: CODEWORK Features */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How CODEWORK Leverages AI to Streamline Hiring</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          CODEWORK has developed an AI-powered recruitment system that automates every stage of the hiring journey. From sourcing to onboarding, the process is now smoother and more scalable.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mb-2">Key Features of CODEWORK's AI Recruitment Platform</h3>

        <h4 className="text-lg font-semibold text-gray-700 mb-2">1. Intelligent Resume Screening</h4>
        <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
          <li>Uses natural language processing (NLP) to parse resumes</li>
          <li>Matches skills and experience with job descriptions</li>
          <li>Eliminates irrelevant applications instantly</li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-700 mb-2">2. Automated Candidate Ranking</h4>
        <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
          <li>Ranks profiles based on qualifications, skill match, and predictive analytics</li>
          <li>Prioritizes high-potential candidates</li>
          <li>Saves HR teams from manual shortlisting</li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-700 mb-2">3. AI-Driven Chatbots</h4>
        <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
          <li>Handles initial interactions</li>
          <li>Schedules interviews and responds to FAQs</li>
          <li>Enhances engagement without human intervention</li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-700 mb-2">4. Data-Backed Hiring Decisions</h4>
        <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-1">
          <li>Generates insights from past hiring data</li>
          <li>Predicts candidate success rate</li>
          <li>Supports unbiased decisions with metrics</li>
        </ul>

        {/* SECTION: Benefits */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits for Businesses and HR Teams</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-1">
          <li>Cut down hiring time by up to 50%</li>
          <li>Increase quality-of-hire with data-driven insights</li>
          <li>Scale hiring across multiple roles simultaneously</li>
          <li>Improve compliance and reduce unconscious bias</li>
        </ul>

        {/* SECTION: Future */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Future of Recruitment with CODEWORK</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          As AI continues to evolve, CODEWORK remains committed to ongoing innovation in the recruitment space. The company’s future roadmap includes integrating:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-1">
          <li>AI-powered video interview analysis</li>
          <li>Advanced behavioral prediction models</li>
          <li>Deeper connectivity with HRMS platforms</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          These enhancements further streamline the hiring process, enabling organizations to make smarter, faster, and more informed recruitment decisions. This shift to AI-based recruitment is not just a passing trend—it represents the future of hiring.
        </p>

        {/* CALL TO ACTION */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Call to Action</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ready to revolutionize your recruitment process?{" "}
          <a
            href="https://codework.ai/contact-ai-solutions"
            className="text-blue-600 hover:underline"
          >
            Contact the CODEWORK team
          </a>{" "}
          to explore how our AI-powered solutions can help you build better teams faster.
        </p>
      </div>
    </div>
  );
};

export default Blog10;

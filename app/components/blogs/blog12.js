// pages/blog12.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog12 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "role-generative-ai", title: "The Role of Generative AI in Development" },
    { id: "ai-code-generation", title: "AI and Code Generation" },
    { id: "debugging-testing", title: "Smarter Debugging and Testing" },
    { id: "devops-management", title: "Enhancing DevOps and Project Management" },
    { id: "emerging-frameworks", title: "Emerging AI Development Frameworks" },
    { id: "final-thoughts", title: "Final Thoughts" },
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPosition) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-primary py-12 pt-40 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 flex gap-8">
        {/* LEFT SIDEBAR - TABLE OF CONTENTS */}
        <div className="hidden lg:block w-64 sticky top-24 h-fit">
          <div className="bg-primary/60 backdrop-blur-sm rounded-xl border border-secondary/20 p-6 shadow-glow">
            <h3 className="text-lg font-bold text-secondary mb-4 flex items-center">
              <FiList className="mr-2" />
              Table of Contents
            </h3>
            <nav 
              className="space-y-2 max-h-[85vh] overflow-hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {tocItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-secondary/20 text-secondary border-l-4 border-secondary"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {index + 1}. {item.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* MOBILE TOC TOGGLE */}
        <button
          onClick={() => setIsTocOpen(!isTocOpen)}
          className="lg:hidden fixed top-24 left-4 z-50 bg-secondary text-primary p-3 rounded-full shadow-lg"
        >
          <FiList size={20} />
        </button>

        {/* MOBILE TOC OVERLAY */}
        {isTocOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setIsTocOpen(false)}>
            <div className="bg-primary w-80 h-full overflow-y-auto p-6 shadow-xl" onClick={e => e.stopPropagation()}>
              <h3 className="text-lg font-bold text-secondary mb-4 flex items-center">
                <FiList className="mr-2" />
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {tocItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsTocOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-secondary/20 text-secondary border-l-4 border-secondary"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {index + 1}. {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* MAIN CONTENT */}
        <div className="flex-1 max-w-4xl">
          {/* TITLE */}
          <h1 className="text-5xl font-extrabold text-secondary mb-8 drop-shadow-glow">
            How is AI Transforming Software Development?
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-secondary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="/blog/blog12.jpg"
              alt="AI in Software Development"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-white mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-extrabold drop-shadow-glow">
              F
            </div>
            <span className="uppercase tracking-wide font-semibold">Felista</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-cyan-400" />
              <span>15 July 2025</span>
            </div>
          </div>

          {/* INTRODUCTION */}
          <section id="introduction" className="scroll-mt-24">
            <p className="text-white/80 text-xl leading-relaxed mb-10">
              Artificial intelligence (AI) transforms software development by offering tools and practices that increase efficiency, accuracy, and innovation. AI is transforming software development by <Link href="/code-generation-automation" className="text-secondary hover:text-secondary/80 underline font-medium">automating coding</Link>, simplifying testing, and improving deployment workflows.
            </p>
          </section>

          {/* SECTION: Generative AI in Development */}
          <section id="role-generative-ai" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">The Role of Generative AI in Development</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Artificial Intelligence, especially <Link href="/code-generation-automation" className="text-secondary hover:text-secondary/80 underline font-medium">generative AI</Link> and large language models, speeds up the software development process by automating important stages such as idea generation, requirement gathering, coding, and testing.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              Gen AI works in partnership with human developers to turn ideas into needs. It then translates those requirements into user stories, generates test cases, code, and documentation—accelerating development and improving product quality.
            </p>
          </section>

          {/* SECTION: AI in Code Generation */}
          <section id="ai-code-generation" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">AI and Code Generation</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              AI has a major impact on code generation. Technologies powered by <Link href="/machine-learning" className="text-secondary hover:text-secondary/80 underline font-medium">machine learning</Link> use natural language processing to understand written descriptions and provide code suggestions or even generate complete code. This speeds up development, reduces human error, and frees developers to focus on creative problem-solving.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              AI-powered autocompletion and code synthesis tools predict code lines or create full functions. As they learn from vast datasets, these tools become more efficient over time, contributing to faster and more effective development cycles.
            </p>
          </section>

          {/* SECTION: AI in Testing and Debugging */}
          <section id="debugging-testing" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Smarter Debugging and Testing</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Beyond coding, AI technologies improve debugging and testing. Advanced AI tools can detect bugs, uncover inefficiencies, and suggest improvements. AI-driven testing systems create adaptive test cases and prioritize critical tests—resulting in stronger software quality and enhanced security.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              AI can forecast errors based on historical data, helping engineers avoid future problems. These systems use machine learning algorithms to improve test processes by analyzing data from past incidents.
            </p>
          </section>

          {/* SECTION: AI in DevOps and Management */}
          <section id="devops-management" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Enhancing DevOps and Project Management</h2>
            <p className="text-white/80 leading-relaxed mb-10">
              AI supports project management and DevOps by automating repetitive tasks, improving time estimation, and streamlining CI/CD pipelines. AI-powered tools enhance resource allocation, task scheduling, and real-time performance monitoring to prevent deployment issues.
            </p>
          </section>

          {/* SECTION: Specialized AI Development Tools */}
          <section id="emerging-frameworks" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Emerging AI Development Frameworks</h2>
            <p className="text-white/80 leading-relaxed mb-10">
              AI development has introduced specialized frameworks that help programmers build more reliable and efficient AI applications using various programming languages. These tools allow developers to integrate advanced AI capabilities seamlessly into their projects.
            </p>
          </section>

          {/* FINAL THOUGHTS */}
          <section id="final-thoughts" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Final Thoughts</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              All things considered, AI is improving development speed and accuracy while creating a more dependable and secure software environment. As AI continues to evolve, it may completely redefine software development processes and potentially make traditional agile methods obsolete.
            </p>
          </section>
        </div>
      </div>

      <style jsx global>{`
        .drop-shadow-glow {
          text-shadow: 0 0 12px #1ddfea66, 0 0 2px #223044;
        }
        .shadow-glow {
          box-shadow: 0 0 32px #1ddfea22, 0 0 8px #22304426;
        }
        .scroll-mt-24 {
          scroll-margin-top: 6rem;
        }
        
        /* Hide scrollbars for table of contents */
        nav::-webkit-scrollbar {
          display: none;
        }
        
        /* Extra Small Custom Scrollbars for main content */
        ::-webkit-scrollbar {
          width: 3px;
          height: 3px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(34, 48, 68, 0.3);
        }

        ::-webkit-scrollbar-thumb {
          background: #1ddfea;
          border-radius: 2px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(29, 223, 234, 0.8);
        }

        ::-webkit-scrollbar-corner {
          background: rgba(34, 48, 68, 0.3);
        }

        /* Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: #1ddfea rgba(34, 48, 68, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Blog12;

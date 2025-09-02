// pages/blog13.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog13 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-code-generation", title: "What is Code Generation Automation?" },
    { id: "key-benefits", title: "Key Benefits of AI-Powered Code Generation" },
    { id: "popular-tools", title: "Popular AI-Powered Code Generation Tools" },
    { id: "challenges", title: "Challenges in Code Generation Automation" },
    { id: "future-ai", title: "Future of AI in Software Development" },
    { id: "explore-more", title: "Explore More" },
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
            Code Generation Automation: Revolutionizing Software Development with AI
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-secondary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="/blog/blog13.jpg"
              alt="Code Generation Automation with AI"
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
              <span>16 July 2025</span>
            </div>
          </div>

          {/* INTRODUCTION */}
          <section id="introduction" className="scroll-mt-24">
            <p className="text-white/80 text-xl leading-relaxed mb-10">
              In the fast-paced world of software development, AI-driven code generation automation is transforming how developers write, test, and optimize code. By leveraging <Link href="/machine-learning" className="text-secondary hover:text-secondary/80 underline font-medium">machine learning </Link>algorithms, AI can generate high-quality code, reducing development time and minimizing errors. This innovation is a key aspect of how AI is transforming software development.
            </p>
          </section>

          {/* SECTION: What is Code Generation Automation */}
          <section id="what-is-code-generation" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">What is Code Generation Automation?</h2>
            <p className="text-white/80 leading-relaxed mb-10">
              Code generation automation refers to the use of AI-powered tools to write and optimize code with minimal human intervention. These tools analyze patterns, predict coding structures, and automate repetitive tasks, making software development faster and more efficient.
            </p>
          </section>

          {/* SECTION: Key Benefits */}
          <section id="key-benefits" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Key Benefits of AI-Powered Code Generation</h2>
            <ul className="list-disc ml-6 text-white/80 mb-10 space-y-2">
              <li>
                <strong>✔ Faster Development Cycles:</strong> AI automates coding processes, allowing developers to focus on complex problem-solving. It reduces the time required to build applications from scratch.
              </li>
              <li>
                <strong>✔ Enhanced Code Quality:</strong> AI detects bugs, vulnerabilities, and inconsistencies in real-time. It enforces coding standards and best practices, leading to high-quality software.
              </li>
              <li>
                <strong>✔ Improved Productivity:</strong> Automates repetitive tasks such as code formatting, testing, and debugging. Developers are free to focus on strategic thinking and innovative problem-solving.
              </li>
              <li>
                <strong>✔ Seamless Integration with DevOps:</strong> AI-generated code can be directly integrated into CI/CD pipelines, enhancing deployment efficiency. It also automates software testing and error detection to ensure smooth releases.
              </li>
            </ul>
          </section>

          {/* SECTION: Popular Tools */}
          <section id="popular-tools" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Popular AI-Powered Code Generation Tools</h2>
            <ul className="list-disc ml-6 text-white/80 mb-10 space-y-2">
              <li><strong>GitHub Copilot:</strong> Helps developers by offering code suggestions and function recommendations.</li>
              <li><strong>Tabnine:</strong> Uses <Link href="/deep-learning" className="text-secondary hover:text-secondary/80 underline font-medium">Deep Learning</Link> to predict and complete code structures.</li>
              <li><strong>OpenAI Codex:</strong> Powers tools like Copilot, helping with natural language-to-code conversion.</li>
            </ul>
          </section>

          {/* SECTION: Challenges */}
          <section id="challenges" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Challenges in Code Generation Automation</h2>
            <ul className="list-disc ml-6 text-white/80 mb-10 space-y-2">
              <li><strong>Over-Reliance on AI:</strong> Developers must review AI-generated code for logical accuracy.</li>
              <li><strong>Data Privacy Concerns:</strong> AI models require vast datasets, raising security risks.</li>
              <li><strong>Algorithm Bias:</strong> AI-generated code might reflect biases from training data.</li>
            </ul>
          </section>

          {/* SECTION: Future of AI */}
          <section id="future-ai" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Future of AI in Software Development</h2>
            <p className="text-white/80 leading-relaxed mb-10">
              As AI continues to evolve, code generation automation will play a crucial role in accelerating software development. Developers who embrace these tools will gain a competitive advantage in creating efficient, scalable, and secure applications.
            </p>
          </section>

          {/* SECTION: Internal Link */}
          <section id="explore-more" className="scroll-mt-24">
            <p className="text-white/80 leading-relaxed mb-6">
              <strong>Explore More:</strong> Wondering how AI is changing every stage of software development? Read our blog on <em><Link href="/ai-transforming-software" className="text-secondary hover:text-secondary/80 underline font-medium">How is AI Transforming Software Development?</Link></em> to discover the full potential of AI-driven innovation.
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

export default Blog13;

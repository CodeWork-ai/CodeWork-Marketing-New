// pages/blog31.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog31 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "tldr", title: "TL;DR" },
    { id: "intro", title: "Introduction" },
    { id: "what-is", title: "What Is Underground Mapping?" },
    { id: "why-important", title: "Why Is Underground Mapping Important?" },
    { id: "technologies", title: "Technologies Used in Underground Mapping" },
    { id: "challenges", title: "Challenges and Limitations" },
    { id: "applications", title: "Applications of Underground Mapping" },
    { id: "future-trends", title: "Future Trends in Underground Mapping" },
    { id: "conclusion", title: "Conclusion" },
    { id: "faqs", title: "FAQs" },
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
            Underground Mapping: A Complete Guide
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-secondary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="/blog/blog13.jpg"
              alt="Underground Mapping Technology"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-white mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-extrabold drop-shadow-glow">
              K
            </div>
            <span className="uppercase tracking-wide font-semibold">Felista</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-cyan-400" />
              <span>22 September 2025</span>
            </div>
          </div>

          {/* SECTION: TL;DR */}
          <section id="tldr" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">TL;DR</h2>
            <p className="text-white/80 leading-relaxed mb-10">
              Underground mapping helps uncover what's hidden beneath the surface—like pipes, cables, and tunnels—so construction and planning can be done safely and efficiently. It uses tools such as ground-penetrating radar and GIS systems to reduce risks, avoid accidents, and save costs. While challenges like soil conditions or old records exist, it's a valuable step for engineers, contractors, and planners. Newer advances like 3D modeling and AI are making the process even more reliable.
            </p>
          </section>

          {/* SECTION: Introduction */}
          <section id="intro" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Before any construction project begins, one question matters most: what lies beneath the ground? Underground networks of pipes, cables, and conduits are everywhere, and damaging them can cause serious accidents, costly delays, and service disruptions.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              Underground mapping provides the solution. It involves detecting, locating, and recording subsurface utilities to create accurate maps for engineers, contractors, and planners. With better knowledge of what's below the surface, projects can move forward more safely and efficiently.
            </p>
          </section>

          {/* SECTION: What Is Underground Mapping? */}
          <section id="what-is" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">What Is Underground Mapping?</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Underground mapping is the practice of surveying below the ground to identify and document hidden infrastructure. These maps include details about the type of utility, its depth, and precise location. Modern underground mapping integrates this data into Geographic Information Systems (GIS), allowing professionals to visualize underground networks in 2D or 3D.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              Unlike traditional records that may be outdated or incomplete, underground mapping uses real-time detection to improve accuracy. This process is essential not just for large construction projects but also for smaller-scale works like road maintenance, landscaping, and utility repairs.
            </p>
          </section>

          {/* SECTION: Why Is Underground Mapping Important? */}
          <section id="why-important" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Why Is Underground Mapping Important?</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Construction and excavation activities often take place in urban areas filled with buried utilities. Striking a gas line, water pipe, or electrical cable can have serious consequences. The benefits of underground mapping include:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>Preventing accidents and utility strikes:</strong> Protects workers and the public from harm.</li>
              <li><strong>Reducing costs and delays:</strong> Avoids expensive repairs and project interruptions.</li>
              <li><strong>Supporting smart planning:</strong> Provides reliable data for infrastructure development.</li>
              <li><strong>Improving compliance:</strong> Meets regulatory requirements and industry standards.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-10">
              For example, in many countries, regulations require contractors to identify underground utilities before digging. Without mapping, the risks are too high.
            </p>
          </section>

          {/* SECTION: Technologies Used */}
          <section id="technologies" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Technologies Used in Underground Mapping</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Underground mapping relies on a combination of advanced tools. Each has its strengths and limitations, which is why they are often used together:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>Ground Penetrating Radar (GPR):</strong> Sends radio waves into the ground and detects reflections to reveal buried objects. Works well in dry sandy soils but less effectively in clay or wet conditions.</li>
              <li><strong>Electromagnetic (EM) Locators:</strong> Best for finding metallic pipes and cables by detecting their electromagnetic fields.</li>
              <li><strong>LiDAR and GPS/GNSS:</strong> Provide surface data and precise positioning to align underground features with surface maps.</li>
              <li><strong>GIS Integration:</strong> Stores and visualizes data in layered maps that can be shared across teams.</li>
              <li><strong>3D Subsurface Modeling:</strong> Creates detailed visualizations of complex underground networks.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-10">
              By combining these technologies, surveyors can deliver maps with much higher confidence than relying on one method alone.
            </p>
          </section>

          {/* SECTION: Challenges and Limitations */}
          <section id="challenges" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Challenges and Limitations</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Despite technological progress, underground mapping is not perfect. Several challenges remain:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>Soil conditions:</strong> Clay-rich or water-logged soils reduce the effectiveness of GPR.</li>
              <li><strong>Non-metallic utilities:</strong> Plastic pipes are harder to detect with electromagnetic methods.</li>
              <li><strong>Overlapping infrastructure:</strong> Dense urban environments often have multiple utilities stacked together, making interpretation complex.</li>
              <li><strong>Outdated records:</strong> Many existing maps are incomplete or inaccurate.</li>
              <li><strong>Skill requirements:</strong> High-quality results depend on trained operators and proper equipment.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-10">
              Because of these challenges, verification through physical methods, like potholing (careful digging), is often used to confirm map results before construction begins.
            </p>
          </section>

          {/* SECTION: Applications */}
          <section id="applications" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Applications of Underground Mapping</h2>
            <p className="text-white/80 leading-relaxed mb-4">Underground mapping is valuable in many fields:</p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>Construction and Excavation:</strong> Reduces the risk of hitting utilities during roadworks, tunneling, or building foundations.</li>
              <li><strong>Urban Planning:</strong> Helps planners design new infrastructure without disrupting existing networks.</li>
              <li><strong>Utility Maintenance:</strong> Supports upgrades and repairs by providing accurate location data.</li>
              <li><strong>Environmental and Archaeological Studies:</strong> Identifies buried objects or features without disturbing the ground.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-10">
              For example, city planners can use underground mapping data to design new metro systems or smart city networks, ensuring they avoid existing pipelines and reduce service disruptions.
            </p>
          </section>

          {/* SECTION: Future Trends */}
          <section id="future-trends" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Future Trends in Underground Mapping</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              The field of underground mapping is evolving quickly with digital innovations:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>3D and 4D Subsurface Models:</strong> Allow better visualization of complex networks.</li>
              <li><strong>Artificial Intelligence:</strong> Assists in interpreting GPR and EM data with higher accuracy.</li>
              <li><strong>Cloud-Based GIS Platforms:</strong> Enable real-time sharing of underground maps among project teams.</li>
              <li><strong>Integration with Digital Twins:</strong> Feeding underground data into digital replicas of cities for smarter management.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-10">
              These advances will make underground mapping more precise, accessible, and valuable across industries.
            </p>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
            <p className="text-white/80 leading-relaxed mb-10">
              Underground mapping is an essential part of modern construction and infrastructure projects. By combining tools such as GPR, EM locators, and GIS, professionals can reduce risks, save costs, and protect lives. Although challenges like soil conditions and outdated records remain, new technologies—especially AI and 3D modeling—are improving accuracy and usability. As cities grow and underground networks become denser, underground mapping will only increase in importance for building a safer and smarter future.
            </p>
          </section>

          {/* SECTION: FAQs */}
          <section id="faqs" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">FAQs</h2>
            
            <div className="space-y-6 mb-10">
              <div className="bg-primary/40 rounded-lg p-6 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">How accurate is underground mapping?</h3>
                <p className="text-white/80 leading-relaxed">
                  Accuracy depends on the method and conditions. In favorable environments, errors can be as small as a few centimeters. In difficult soils, accuracy may be reduced.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-6 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">Can the public access underground maps?</h3>
                <p className="text-white/80 leading-relaxed">
                  Access is limited. Some municipalities allow homeowners or contractors to request utility maps, but full records are often restricted for safety and security reasons.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-6 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">What standards are followed?</h3>
                <p className="text-white/80 leading-relaxed">
                  In some regions, standards such as PAS 128 (UK) define survey accuracy levels. Following standards ensures consistency and reliability in mapping results.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-6 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">How much does underground mapping cost?</h3>
                <p className="text-white/80 leading-relaxed">
                  Costs vary depending on site size, complexity, and required technologies. While initial surveys may add expense, they often save money by preventing costly utility damage.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-6 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">Who uses underground mapping?</h3>
                <p className="text-white/80 leading-relaxed">
                  Engineers, contractors, utility companies, and city planners are the main users. Increasingly, environmental and archaeological teams also rely on these methods.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog31;

// pages/blog33.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog33 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "tldr", title: "TL;DR" },
    { id: "what-is", title: "What Is Crowd Management?" },
    { id: "why-important", title: "Why Crowd Management Is Important" },
    { id: "core-principles", title: "Core Principles of Effective Crowd Management" },
    { id: "step-by-step", title: "Step-by-Step Approach to Crowd Management" },
    { id: "technology-role", title: "Role of Technology in Modern Crowd Management" },
    { id: "challenges", title: "Common Challenges and How to Overcome Them" },
    { id: "real-world-example", title: "Real-World Example: Large-Scale Event Safety" },
    { id: "emergency-plan", title: "Building a Strong Emergency Plan" },
    { id: "conclusion", title: "Conclusion" },
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
            Crowd Management: Ensuring Safety and Order in Large Gatherings
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-secondary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="/blog/blog3.jpg"
              alt="Crowd Management Technology"
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
              <span>22 October 2025</span>
            </div>
          </div>

          {/* SECTION: TL;DR */}
          <section id="tldr" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">TL;DR</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Crowd management is about planning, monitoring, and guiding large groups to ensure safety, comfort, and order. It involves understanding crowd behavior, preparing for risks, using technology, and training teams to respond effectively. Smart planning and communication prevent accidents and keep events running smoothly.
            </p>
          </section>

          {/* SECTION: What Is Crowd Management? */}
          <section id="what-is" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">1. What Is Crowd Management?</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Crowd management is the proactive process of organizing and directing the movement and behavior of people during events or public gatherings. It's not just about controlling crowds after a problem occurs—it's about preventing issues before they happen.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Unlike crowd control, which focuses on reaction, crowd management emphasizes preparation, layout design, clear communication, and trained staff. Whether it's a music festival, religious gathering, or sports event, the goal remains the same: safety and order.
            </p>
          </section>

          {/* SECTION: Why Crowd Management Is Important */}
          <section id="why-important" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">2. Why Crowd Management Is Important</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Effective crowd management prevents overcrowding, confusion, and potential accidents. It ensures that people can enjoy an event safely while organizers meet their legal and ethical responsibilities.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Poor management can lead to panic, injuries, and even fatalities. Beyond safety, good planning also improves the attendee experience, builds trust, and protects the organizer's reputation. In short, it's about preventing problems—not reacting to them.
            </p>
          </section>

          {/* SECTION: Core Principles */}
          <section id="core-principles" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">3. Core Principles of Effective Crowd Management</h2>
            <p className="text-white/80 leading-relaxed mb-4">A successful crowd management plan is built on five essential pillars:</p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">Risk Assessment</h3>
                <p className="text-white/80 leading-relaxed">
                  Identify potential hazards based on event type, location, and expected attendance.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">Understanding Crowd Behavior</h3>
                <p className="text-white/80 leading-relaxed">
                  Know how people move, react, and communicate in groups.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">Clear Communication</h3>
                <p className="text-white/80 leading-relaxed">
                  Use signage, announcements, and visual cues to guide the crowd.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">Trained Personnel</h3>
                <p className="text-white/80 leading-relaxed">
                  Deploy security and support teams with clear instructions.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">Emergency Preparedness</h3>
                <p className="text-white/80 leading-relaxed">
                  Have plans and drills for evacuation or medical incidents.
                </p>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed mb-10">
              These principles create a framework that keeps everyone safe and informed throughout the event.
            </p>
          </section>

          {/* SECTION: Step-by-Step Approach */}
          <section id="step-by-step" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">4. Step-by-Step Approach to Crowd Management</h2>
            
            <div className="space-y-6 mb-10">
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">Assess the Venue</h3>
                <p className="text-white/80 leading-relaxed">
                  Understand capacity limits, entrances, exits, and potential choke points.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">Map Crowd Flow</h3>
                <p className="text-white/80 leading-relaxed">
                  Design routes for movement that prevent bottlenecks.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">Deploy Trained Teams</h3>
                <p className="text-white/80 leading-relaxed">
                  Position staff strategically to guide, assist, and monitor.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">Communicate Clearly</h3>
                <p className="text-white/80 leading-relaxed">
                  Use signs, audio messages, and digital tools for updates.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">Plan for Emergencies</h3>
                <p className="text-white/80 leading-relaxed">
                  Establish evacuation paths and train teams for quick response.
                </p>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed mb-10">
              Each step reinforces safety and efficiency, allowing events to run seamlessly even during unexpected situations.
            </p>
          </section>

          {/* SECTION: Role of Technology */}
          <section id="technology-role" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">5. Role of Technology in Modern Crowd Management</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Technology has transformed how organizers monitor and manage large crowds. Tools like CCTV cameras, motion sensors, and AI-based analytics provide real-time data on density and flow.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              Mobile apps, wristbands, and radio systems improve coordination among staff. Digital signage can quickly update directions or alerts. These tools don't replace human judgment—they enhance it, helping teams make faster, safer decisions.
            </p>
          </section>

          {/* SECTION: Challenges */}
          <section id="challenges" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">6. Common Challenges and How to Overcome Them</h2>
            <p className="text-white/80 leading-relaxed mb-4">Crowd management can face several challenges, such as:</p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">Sudden Surges</h3>
                <p className="text-white/80 leading-relaxed mb-2">
                  Caused by performer appearances or unexpected excitement.
                </p>
                <p className="text-white/80 leading-relaxed">
                  <strong>→ Solution:</strong> Controlled barriers and one-way pathways.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">Weather or Technical Issues</h3>
                <p className="text-white/80 leading-relaxed">
                  <strong>→ Solution:</strong> Contingency shelters and alternate routes.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">Communication Failures</h3>
                <p className="text-white/80 leading-relaxed">
                  <strong>→ Solution:</strong> Backup PA systems and hand signals.
                </p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed mb-10">
              Flexibility and continuous monitoring are key to handling such moments calmly and effectively.
            </p>
          </section>

          {/* SECTION: Real-World Example */}
          <section id="real-world-example" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">7. Real-World Example: Large-Scale Event Safety</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              At major events like the Olympic Games or New Year celebrations, crowd management involves coordination between multiple teams—security, medical, logistics, and communication units.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              Technology tracks crowd movement in real time, while trained marshals manage entry points. These examples show that proactive planning and cooperation prevent incidents and ensure positive experiences.
            </p>
          </section>

          {/* SECTION: Emergency Plan */}
          <section id="emergency-plan" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">8. Building a Strong Emergency Plan</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Every event should include a detailed emergency plan that outlines evacuation routes, first-aid zones, and staff responsibilities. Coordination with local police, fire, and medical services is essential.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              Regular drills prepare teams to act quickly without panic. A strong plan doesn't just save lives—it also builds public confidence in your event's safety measures.
            </p>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Crowd management isn't about controlling people—it's about caring for them. When events are well-organized, with thoughtful planning and trained teams, attendees feel safe and valued.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              With the right mix of strategy, communication, and technology, every organizer can create secure, enjoyable, and memorable experiences for large gatherings.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog33;
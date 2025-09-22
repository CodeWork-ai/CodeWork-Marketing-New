// pages/blog32.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog32 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "tldr", title: "TL;DR" },
    { id: "intro", title: "Introduction" },
    { id: "what-is", title: "What is Computer Vision?" },
    { id: "how-works", title: "How Does Computer Vision Work?" },
    { id: "applications", title: "Applications of Computer Vision" },
    { id: "challenges", title: "Challenges in Computer Vision" },
    { id: "future", title: "Future of Computer Vision" },
    { id: "conclusion", title: "Conclusion" },
    { id: "faq", title: "FAQ" },
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
            Computer Vision: How Machines Learn to See
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-secondary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="/blog/blog14.jpg"
              alt="Computer Vision Technology"
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
            <p className="text-white/80 leading-relaxed mb-4">
              Computer vision is a field of AI that teaches machines to "see" and interpret visual data like images and videos. It works through steps such as image acquisition, preprocessing, feature extraction, and model training—powered by deep learning models like CNNs.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              In real life, it powers facial recognition, self-driving cars, medical imaging, retail automation, and industrial quality checks.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              While computer vision faces challenges like data dependency, ethical concerns, and deployment issues, its future looks bright with edge AI, AR/VR, smart cities, and healthcare innovations leading the way. In short: computer vision is shaping how machines interact with the world—making them not just smart, but truly "visual."
            </p>
          </section>

          {/* SECTION: Introduction */}
          <section id="intro" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Computer vision is a branch of artificial intelligence that allows machines to understand images and videos. It powers tools such as facial recognition, self-driving cars, and medical imaging. Humans can recognize objects instantly, but teaching machines to see requires advanced algorithms and large datasets.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              Today, computer vision is not just research. It is transforming healthcare, retail, and security while shaping the future of technology and the way people interact with machines.
            </p>
          </section>

          {/* SECTION: What is Computer Vision? */}
          <section id="what-is" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">What is Computer Vision?</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Computer vision is a field of AI that focuses on enabling computers to "see" and interpret visual input. This doesn't mean literal vision but the ability to analyze pixels, shapes, and patterns to extract meaning from images or videos.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              It differs from image processing, which mainly enhances images (e.g., improving brightness, filtering noise). Computer vision goes further—it interprets those images to make decisions, like identifying a stop sign or diagnosing a tumor.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              A simple example: when a human sees a dog, the brain identifies its shape, fur, and features, then concludes, "This is a dog." A computer vision system achieves the same through mathematical models trained on thousands or millions of dog images. The system then generalizes to recognize new, unseen examples.
            </p>
          </section>

          {/* SECTION: How Does Computer Vision Work? */}
          <section id="how-works" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">How Does Computer Vision Work?</h2>
            <p className="text-white/80 leading-relaxed mb-4">The process of computer vision can be broken into four main stages:</p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">1. Image Acquisition</h3>
                <p className="text-white/80 leading-relaxed">
                  Data is collected from cameras, sensors, or video feeds. For example, an autonomous car uses multiple cameras to capture the environment.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">2. Preprocessing</h3>
                <p className="text-white/80 leading-relaxed">
                  Images are enhanced to remove noise, adjust contrast, or resize. This step ensures that the input data is consistent for further analysis.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">3. Feature Extraction</h3>
                <p className="text-white/80 leading-relaxed">
                  Algorithms detect edges, textures, or patterns. Modern deep learning approaches automatically learn these features instead of relying on hand-designed methods.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">4. Model Training and Inference</h3>
                <p className="text-white/80 leading-relaxed">
                  Machine learning models, often Convolutional Neural Networks (CNNs), are trained to recognize objects, faces, or actions. Once trained, they can analyze new images and predict outcomes.
                </p>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed mb-10">
              A CNN, for example, processes an image layer by layer—first identifying low-level features like edges, then shapes, and finally complex objects like faces or cars. This layered approach mimics how the human visual cortex processes visual information.
            </p>
          </section>

          {/* SECTION: Applications */}
          <section id="applications" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Applications of Computer Vision</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Computer vision is applied across many industries, often in ways people interact with daily without realizing it.
            </p>

            <div className="space-y-6 mb-10">
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">1. Healthcare</h3>
                <ul className="list-disc ml-6 text-white/80 space-y-1">
                  <li>Medical imaging systems detect anomalies in X-rays, MRIs, or CT scans.</li>
                  <li>Early diagnosis tools help doctors identify conditions like cancer, strokes, or eye diseases.</li>
                  <li>Surgical robots use vision to assist with precision procedures.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">2. Automotive</h3>
                <ul className="list-disc ml-6 text-white/80 space-y-1">
                  <li>Self-driving cars rely heavily on computer vision to detect pedestrians, traffic lights, and road signs.</li>
                  <li>Advanced driver-assistance systems (ADAS) warn drivers of obstacles or help maintain lanes.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">3. Retail and Manufacturing</h3>
                <ul className="list-disc ml-6 text-white/80 space-y-1">
                  <li>Automated checkout systems recognize products without barcodes.</li>
                  <li>Quality control systems detect defects in production lines.</li>
                  <li>Computer vision tracks customer behavior in stores to improve layout and experience.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">4. Security and Authentication</h3>
                <ul className="list-disc ml-6 text-white/80 space-y-1">
                  <li>Facial recognition is widely used in surveillance and personal device unlocking.</li>
                  <li>Biometric verification systems combine vision with other data to improve accuracy.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">5. Agriculture</h3>
                <ul className="list-disc ml-6 text-white/80 space-y-1">
                  <li>Drones monitor crops for disease, pests, or irrigation needs.</li>
                  <li>Automated systems grade fruits and vegetables for quality.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">6. Sports and Entertainment</h3>
                <ul className="list-disc ml-6 text-white/80 space-y-1">
                  <li>Instant replay systems analyze player movements.</li>
                  <li>AR filters in social media apps rely on facial landmark detection.</li>
                </ul>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed mb-10">
              These applications show how computer vision bridges scientific research with real-world utility.
            </p>
          </section>

          {/* SECTION: Challenges */}
          <section id="challenges" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Challenges in Computer Vision</h2>
            <p className="text-white/80 leading-relaxed mb-4">Despite its progress, computer vision faces important challenges:</p>
            
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>Data Dependency:</strong> High-performing models require vast, diverse datasets. Without enough variation, models may fail in real-world conditions.</li>
              <li><strong>Generalization:</strong> A system trained on one dataset might not perform well in different environments (e.g., a face recognition system trained on adults may fail with children).</li>
              <li><strong>Bias and Fairness:</strong> If training data lacks diversity, models may produce biased outcomes, particularly in sensitive areas like law enforcement or healthcare.</li>
              <li><strong>Real-World Conditions:</strong> Poor lighting, motion blur, occlusion, or low resolution can reduce accuracy.</li>
              <li><strong>Deployment Constraints:</strong> Running vision systems on edge devices like smartphones or cameras requires balancing speed, memory, and energy efficiency.</li>
            </ul>
            
            <p className="text-white/80 leading-relaxed mb-10">
              These challenges remind us that while computer vision is powerful, careful design and ethical responsibility are essential for safe adoption.
            </p>
          </section>

          {/* SECTION: Future */}
          <section id="future" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Future of Computer Vision</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              The next phase of computer vision will likely be shaped by several trends:
            </p>
            
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>Edge AI:</strong> Instead of sending all data to cloud servers, models will run directly on devices like smartphones, drones, or IoT sensors. This reduces latency and enhances privacy.</li>
              <li><strong>AR and VR:</strong> Computer vision will power more immersive experiences, from gaming to remote training in industries like medicine or aviation.</li>
              <li><strong>Smart Cities:</strong> Vision systems will help manage traffic flow, detect accidents, and enhance public safety.</li>
              <li><strong>Healthcare Breakthroughs:</strong> Faster, AI-assisted diagnostics could make healthcare more accessible and accurate worldwide.</li>
              <li><strong>Ethical AI:</strong> Greater focus will be placed on building fair, transparent systems that protect user privacy.</li>
            </ul>
            
            <p className="text-white/80 leading-relaxed mb-10">
              Looking ahead, computer vision will expand beyond specialized tools into everyday infrastructure, influencing how people live and work.
            </p>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Computer vision is transforming how machines interact with the world. By teaching computers to understand images and videos, we are enabling new possibilities in healthcare, transportation, security, manufacturing, and beyond. While the technology faces challenges such as bias, data needs, and deployment issues, its future potential is vast.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              As AI research advances and computing power grows, computer vision will continue to move from experimental labs into the real world, driving innovation in industries and daily life.
            </p>
          </section>

          {/* SECTION: FAQ */}
          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">FAQ</h2>
            
            <div className="space-y-6 mb-10">
              <div className="bg-primary/40 rounded-lg p-6 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">What is computer vision in simple terms?</h3>
                <p className="text-white/80 leading-relaxed">
                  Computer vision is a branch of artificial intelligence that enables machines to interpret and understand images or videos, similar to how humans see and process visual information.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-6 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">How is computer vision used in real life?</h3>
                <p className="text-white/80 leading-relaxed">
                  Computer vision is used in facial recognition, medical imaging, self-driving cars, retail automation, manufacturing quality checks, agriculture monitoring, and even AR filters in social media apps.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-6 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">What is the difference between image processing and computer vision?</h3>
                <p className="text-white/80 leading-relaxed">
                  Image processing focuses on improving or transforming images, such as adjusting brightness or removing noise. Computer vision goes further by analyzing and interpreting images to make decisions or predictions.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-6 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">Why is deep learning important in computer vision?</h3>
                <p className="text-white/80 leading-relaxed">
                  Deep learning, especially Convolutional Neural Networks (CNNs), helps computer vision systems automatically detect patterns and features in images, leading to more accurate object detection, classification, and recognition.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-6 border border-secondary/20">
                <h3 className="text-lg font-semibold text-secondary mb-2">What are the main challenges in computer vision?</h3>
                <p className="text-white/80 leading-relaxed">
                  Key challenges include the need for large datasets, risk of bias in training data, handling poor image quality, and deploying models efficiently on real-world devices.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog32;

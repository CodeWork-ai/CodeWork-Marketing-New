// pages/blog16.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog16 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "how-does-deep-learning-work", title: "How Does Deep Learning Work?" },
    { id: "types-of-deep-learning-models", title: "Types of Deep Learning Models" },
    { id: "choosing-the-right-model", title: "Choosing the Right Model" },
    { id: "deep-learning-use-cases", title: "Deep Learning Use Cases" },
    { id: "deep-learning-in-industry", title: "Deep Learning in Industry Applications" },
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
            What is Deep Learning? A Comprehensive Guide
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-secondary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="/blog/blog16.jpg"
              alt="What is Deep Learning"
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
              Deep learning is a part of machine learning that uses multiple-layered neural networks to imitate the human brain's decision-making process. It plays a key role in powering many artificial intelligence applications we use in our daily lives. Unlike traditional machine learning, deep learning models can automatically learn features and patterns from raw data—such as images, audio, or text—without human intervention. This technology powers many advanced applications today, including facial recognition, autonomous vehicles, and real-time language translation.
            </p>
          </section>

          {/* SECTION: How Does Deep Learning Work? */}
          <section id="how-does-deep-learning-work" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">How Does Deep Learning Work?</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Deep learning models use multiple layers of artificial neurons to process data. Each layer processes the input in a specific way and then passes the output to the following layer. This layered approach allows the model to learn complex patterns and representations.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              For instance, in image recognition, the initial layer may detect edges, the next layer captures geometric patterns, and the final layer categorizes objects such as traffic signs or medical scans.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              Neural networks become more effective as they receive larger datasets and greater computational resources, which makes them ideal for complex and demanding tasks.
            </p>
          </section>

          {/* SECTION: Types of Deep Learning Models */}
          <section id="types-of-deep-learning-models" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Types of Deep Learning Models</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Deep learning models use artificial neural networks to identify and learn intricate patterns from vast amounts of data. These models replicate the way the human brain interprets information and are widely used in fields such as computer vision, natural language processing, and speech recognition.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              The following are the primary categories of deep learning models.
            </p>
            <h3 className="text-xl font-semibold text-white mb-2">1. Convolutional Neural Networks (CNNs)</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Best for:</strong> Image and video recognition, medical image analysis, and object detection. <br />
              CNNs are specifically designed to process pixel data. They use layers that automatically detect patterns such as edges, textures, and shapes. <br />
              <strong>Example:</strong> Used in facial recognition, autonomous vehicles, and MRI scan analysis.
            </p>
            <h3 className="text-xl font-semibold text-white mb-2">2. Recurrent Neural Networks (RNNs)</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Best for:</strong> Time-series data, text processing, and speech recognition. <br />
              Recurrent neural networks are well suited for data that unfolds over time, where the sequence of information plays an important role. They have loops in their structure, allowing information to persist. <br />
              <strong>Example:</strong> Used in language translation, chatbots, and stock market predictions.
            </p>
            <h3 className="text-xl font-semibold text-white mb-2">3. Long Short-Term Memory Networks (LSTMs)</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Best for:</strong> Long-term sequential data. <br />
              LSTMs are a special kind of RNN capable of learning long-term dependencies. They solve the vanishing gradient problem faced by traditional RNNs. <br />
              <strong>Example:</strong> Creating written content, composing musical pieces, and producing spoken audio.
            </p>
            <h3 className="text-xl font-semibold text-white mb-2">4. Generative Adversarial Networks (GANs)</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Best for:</strong> Generating realistic data like images, videos, and audio. <br />
              GANs consist of two networks – a generator and a discriminator – that compete with each other. This setup allows for the generation of artificial data that closely mimics actual data. Examples include producing realistic visual content, improving image quality, and generating artistic designs.
            </p>
            <h3 className="text-xl font-semibold text-white mb-2">5. Autoencoders</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Best for:</strong> Data compression and noise reduction. <br />
              Autoencoders learn to compress and then reconstruct data. They're often used for dimensionality reduction and detecting anomalies in data. <br />
              <strong>Example:</strong> Denoising images, fraud detection, and feature extraction.
            </p>
            <h3 className="text-xl font-semibold text-white mb-2">6. Transformers</h3>
            <p className="text-white/80 leading-relaxed mb-10">
              <strong>Best for:</strong> NLP tasks like translation, summarization, and sentiment analysis. <br />
              Transformers use self-attention mechanisms to examine how each word relates to every other word in a sentence. These technologies serve as the core of models such as BERT and GPT. Examples include conversational agents, online search tools, and systems for understanding language.
            </p>
          </section>

          {/* SECTION: Choosing the Right Model */}
          <section id="choosing-the-right-model" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Choosing the Right Model</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              The choice of a deep learning model depends on:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-10 space-y-2">
              <li>The type of data (image, text, time-series)</li>
              <li>The goal (classification, prediction, generation)</li>
              <li>Computational resources available</li>
            </ul>
          </section>

          {/* SECTION: Deep Learning Use Cases */}
          <section id="deep-learning-use-cases" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Deep Learning Use Cases</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Deep learning is transforming industries with its ability to deliver high accuracy and automate complex tasks:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>Healthcare:</strong> Detecting tumors in medical images or predicting patient outcomes.</li>
              <li><strong>Finance:</strong> Detection of fraudulent activities, automated trading strategies, and assessment of creditworthiness.</li>
              <li><strong>Retail:</strong> Personalized recommendations and customer behavior prediction.</li>
              <li><strong>Cybersecurity:</strong> Identifying malware and network anomalies.</li>
              <li><strong>Autonomous Driving:</strong> Helping vehicles recognize objects and make real-time driving decisions.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-10">
              <strong>Anchor Text:</strong> Real-world applications of deep learning
            </p>
          </section>

          {/* SECTION: Deep Learning in Industry Applications */}
          <section id="deep-learning-in-industry" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Deep Learning in Industry Applications</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Many industries are investing in deep learning to streamline operations and enhance customer experience:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>Manufacturing:</strong> Predictive maintenance and defect detection in production lines.</li>
              <li><strong>Agriculture:</strong> Analyzing satellite images to monitor crop health.</li>
              <li><strong>Marketing:</strong> Sentiment analysis and customer segmentation.</li>
              <li><strong>Education:</strong> Adaptive learning platforms and grading automation.</li>
              <li><strong>Legal:</strong> Document classification and contract analysis.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-10">
              These use cases demonstrate that deep learning goes beyond being a temporary innovation and has become a core part of how businesses operate today.
            </p>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
            <p className="text-white/80 leading-relaxed mb-10">
              Deep learning is driving innovation across sectors with its unmatched ability to process complex data. From identifying patterns to making smart predictions, it's empowering businesses to automate and optimize like never before. By understanding how it works, the models available, and where it's applied, organizations can make informed decisions on using deep learning to stay ahead in a competitive market.
            </p>
          </section>

          {/* SECTION: Internal Link */}
          <section id="explore-more" className="scroll-mt-24">
            <p className="text-white/80 leading-relaxed mb-6">
              <strong>Explore More:</strong> Discover the broader impact of AI <Link href="/ai-transforming-software" className="text-secondary hover:underline font-medium"> How is AI Transforming Software Development?</Link>
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

export default Blog16;

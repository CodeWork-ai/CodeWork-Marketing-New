// pages/blog18.jsx
"use client";
import React from "react";
import Image from "next/image";
import { FiClock } from "react-icons/fi";
import Link from "next/link";

const Blog18 = () => {
  return (
    <div className="bg-primary py-12 pt-40 min-h-screen">
      <div className="max-w-screen-lg mx-auto px-4">

        {/* TITLE - Main heading is 5xl and secondary color */}
        <h1 className="text-5xl font-extrabold text-secondary mb-8 drop-shadow-glow">
          Mixture of Experts: Making AI Smarter, Not Just Bigger
        </h1>

        {/* FEATURE IMAGE */}
        <div className="relative w-full h-[400px] border-4 border-secondary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
          <Image
            src="/blog/blog18.jpg"
            alt="Mixture of Experts"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* META */}
        <div className="flex items-center text-sm text-white mb-10 space-x-3">
          <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-extrabold drop-shadow-glow">
            s
          </div>
          <span className="uppercase tracking-wide font-semibold">Sathish</span>
          <span>•</span>
          <div className="flex items-center">
            <FiClock className="mr-1 text-cyan-400" />
            <span>20 July 2025</span>
          </div>
        </div>

        {/* INTRODUCTION */}
        <p className="text-white/80 text-xl leading-relaxed mb-6">
          Large Language Models (LLMs) like GPT-4 and Claude are impressive — but they’re also expensive. Training these models can cost millions of dollars, require tens of thousands of GPUs, and still, they often generate false answers (hallucinations).
        </p>
        <p className="text-white/80 text-xl leading-relaxed mb-6">
          So… can we make AI smarter without always making it bigger? That’s exactly what Mixture of Experts (MoE) is here to do.
        </p>

        {/* SECTION: What is Mixture of Experts? */}
        <h2 className="text-2xl font-bold text-white mb-4">What is Mixture of Experts?</h2>
        <p className="text-white/80 leading-relaxed mb-4">
          MoE is a clever AI architecture that activates only the parts of a model needed for a specific task. Instead of using the entire model, it picks a few specialized “experts” best suited to the input—saving time, cost, and compute.
        </p>
        <p className="text-white/80 leading-relaxed mb-4">
          Think of it like a group project: Only the right teammates show up for each task.
        </p>

        {/* SECTION: How Does It Work? */}
        <h2 className="text-2xl font-bold text-white mb-4">How Does It Work?</h2>
        <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
          <li><strong>Experts:</strong> Smaller sub-models trained for specific patterns.</li>
          <li><strong>Gating Network:</strong> Chooses the top experts needed for the task.</li>
          <li><strong>Sparse Activation:</strong> Only a few experts are “on” for each input.</li>
          <li><strong>Aggregation:</strong> The outputs are combined to give a result.</li>
        </ul>
        <p className="text-white/80 leading-relaxed mb-4">
          This lets the model scale in size but still stay efficient.
        </p>

        {/* SECTION: Real-World MoE Models */}
        <h2 className="text-2xl font-bold text-white mb-4">Real-World MoE Models</h2>
        <h3 className="text-xl font-semibold text-white mb-2">1. Mixtral 8x7B</h3>
        <p className="text-white/80 leading-relaxed mb-4">
          8 experts, only 2 active per input. Used for text generation, summarization, reasoning.
        </p>
        <h3 className="text-xl font-semibold text-white mb-2">2. DBRX (by Databricks)</h3>
        <p className="text-white/80 leading-relaxed mb-4">
          16 fine-grained experts, 4 used per layer. Great for code generation and math-heavy tasks.
        </p>
        <h3 className="text-xl font-semibold text-white mb-2">3. DeepSeek-V2</h3>
        <p className="text-white/80 leading-relaxed mb-4">
          160 experts, 2 routed + 2 shared per layer. Handles super long documents (up to 128K tokens).
        </p>
        <p className="text-white/80 leading-relaxed mb-4">
          These models prove that MoE scales smartly, not wastefully.
        </p>

        {/* SECTION: Benefits of MoE */}
        <h2 className="text-2xl font-bold text-white mb-4">Benefits of MoE</h2>
        <ol className="list-decimal ml-6 text-white/80 mb-6 space-y-2">
          <li>More efficient: Uses fewer computing resources</li>
          <li>Faster inference: Less processing time per input</li>
          <li>Smarter specialization: Experts learn focused tasks</li>
          <li>Flexible scaling: You can add experts as needed</li>
        </ol>

        {/* SECTION: Conclusion */}
        <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
        <p className="text-white/80 leading-relaxed mb-6">
          MoE shows that the future of AI isn’t just about building bigger models—it’s about building smarter ones.
        </p>

        {/* SECTION: Internal Link */}
        <p className="text-white/80 leading-relaxed mb-6">
          <strong>Explore More:</strong> Discover the broader impact of AI <Link href="/ai-transforming-software" className="text-secondary hover:underline font-medium"> How is AI Transforming Software Development?</Link>
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

export default Blog18;

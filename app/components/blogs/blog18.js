import React from "react";
import Image from "next/image";
import { FiClock } from "react-icons/fi";
import Link from "next/link";

const Blog18 = () => {
  return (
    <div className="bg-gradient-to-b from-[#FBF8E6] to-[#EBF9FF] py-12 pt-40">
      <div className="max-w-screen-lg mx-auto px-4">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Mixture of Experts: Making AI Smarter, Not Just Bigger
        </h1>

        {/* FEATURE IMAGE */}
        <div className="relative w-full h-[400px] border-4 border-cyan-300 border-t-0 border-l-0 rounded-lg overflow-hidden mb-6">
          <Image
            src="/blog/blog18.jpg" // Updated image path; adjust as needed for Mixture of Experts theme
            alt="Mixture of Experts"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* META */}
        <div className="flex items-center text-sm text-gray-500 mb-10 space-x-3">
          <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-extrabold">
            s
          </div>
          <span className="uppercase">Sathish</span>
          <span>•</span>
          <div className="flex items-center">
            <FiClock className="mr-1" />
            <span>20 July 2025</span>
          </div>
        </div>

        {/* INTRODUCTION */}
        <p className="text-gray-700 text-xl leading-relaxed mb-6">
          Large Language Models (LLMs) like GPT-4 and Claude are impressive - but they’re also expensive. Training these models can cost millions of dollars, require tens of thousands of GPUs, and still, they often generate false answers (hallucinations).
        </p>
        <p className="text-gray-700 text-xl leading-relaxed mb-6">
          So… can we make AI smarter without always making it bigger? That’s exactly what Mixture of Experts (MoE) is here to do.
        </p>

        {/* SECTION: What is Mixture of Experts? */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is Mixture of Experts?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          MoE is a clever AI architecture that activates only the parts of a model needed for a specific task. Instead of using the entire model, it picks a few specialized “experts” best suited to the input—saving time, cost, and compute.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Think of it like a group project: Only the right teammates show up for each task.
        </p>

        {/* SECTION: How Does It Work? */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Does It Work?</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Experts:</strong> Smaller sub-models trained for specific patterns.</li>
          <li><strong>Gating Network:</strong> Chooses the top experts needed for the task.</li>
          <li><strong>Sparse Activation:</strong> Only a few experts are “on” for each input.</li>
          <li><strong>Aggregation:</strong> The outputs are combined to give a result.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          This lets the model scale in size but still stay efficient.
        </p>

        {/* SECTION: Real-World MoE Models */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Real-World MoE Models</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Mixtral 8x7B</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          8 experts, only 2 active per input. Used for text generation, summarization, reasoning.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">2. DBRX (by Databricks)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          16 fine-grained experts, 4 used per layer. Great for code generation and math-heavy tasks.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">3. DeepSeek-V2</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          160 experts, 2 routed + 2 shared per layer. Handles super long documents (up to 128K tokens).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          These models prove that MoE scales smartly, not wastefully.
        </p>

        {/* SECTION: Benefits of MoE */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits of MoE</h2>
        <ol className="list-roman ml-6 text-gray-700 mb-6 space-y-2">
          <li>More efficient: Uses fewer computing resources</li>
          <li>Faster inference: Less processing time per input</li>
          <li>Smarter specialization: Experts learn focused tasks</li>
          <li>Flexible scaling: You can add experts as needed</li>
        </ol>

        {/* SECTION: Conclusion */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          MoE shows that the future of AI isn’t just about building bigger models—it’s about building smarter ones.
        </p>

        {/* SECTION: Internal Link */}
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Explore More:</strong> Discover the broader impact of AI <Link href="/ai-transforming-software" className="text-blue-600 hover:text-blue-800 underline font-medium"> How is AI Transforming Software Development?</Link>
        </p>

      </div>
    </div>
  );
};

export default Blog18;

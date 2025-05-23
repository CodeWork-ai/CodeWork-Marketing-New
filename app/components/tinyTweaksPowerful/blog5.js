// pages/blog3.jsx
import React from "react";
import Image from "next/image";
import { FiClock } from "react-icons/fi";

const Blog5 = () => {
  return (
    <div className="bg-gradient-to-b from-[#FBF8E6] to-[#EBF9FF] py-12 pt-40">
      <div className="max-w-screen-lg mx-auto">
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          LoRA Explained: Tiny Tweaks, Powerful Adaptations
        </h1>

        {/* FEATURE IMAGE */}
        <div className="relative w-full h-[400px] border-4 border-cyan-300 border-t-0 border-l-0 rounded-lg overflow-hidden mb-6">
          <Image
            src="/blog/blog5.jpg" // You might want to replace this with a relevant LoRA image path
            alt="LoRA Fine-Tuning Explained"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* META (avatar, category, date) */}
        <div className="flex items-center text-sm text-gray-500 mb-10 space-x-3">
          <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-extrabold">
            p
          </div>
          <span className="uppercase">pavithra</span>
          <span>•</span>
          <div className="flex items-center">
            <FiClock className="mr-1" />
            <span>08 May 2025</span>
          </div>
        </div>

        {/* INTRO */}
        <p className="text-gray-700 text-xl leading-relaxed mb-6">
          Fine-tuning large language models (LLMs) like LLaMA or GPT-3 can require billions of parameters, massive GPUs, and weeks of training. But what if you could achieve similar results by training just 0.1% of the parameters?
        </p>
        <p className="text-gray-700 text-xl leading-relaxed mb-6">
          What LoRA (Low-Rank Adaptation) helps us do.
          LoRA is a fine-tuning technique used in machine learning that freezes the base language model and adds small trainable components (small matrices called A and B) into specific layers. These new layers learn task-specific behavior, allowing the model to adapt without updating the full neural network.
        </p>

        {/* SECTION 1 */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Simple Analogy to Understand LoRA</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Imagine Abhishek relocating from India to North America. Suddenly, none of his appliances fit into the new outlets. He has two options:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-1">
          <li>Rewire his entire home to match his Indian plugs (expensive and messy), or</li>
          <li>Just buy a few cheap plug adapters and keep using his appliances.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          LoRA is like option #2.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Rather than retraining the whole model (like rewiring the house), LoRA inserts small adapters (low-rank matrices) that allow the model to adapt to a new task. It’s lightweight, non-invasive, and cost-effective, making it ideal for parameter-efficient fine-tuning.
        </p>

        {/* SECTION 2 */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Traditional Fine-Tuning vs. LoRA</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Traditional fine-tuning of pre-trained neural networks involves modifying the entire set of model weights. It means changing the original weight matrix (W) and adding a change ΔW, resulting in an updated model expressed as (W + ΔW).
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          However, this approach requires significant computational resources and memory. It often doubles the model size, making it inefficient for resource-constrained environments.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          LoRA takes a different approach. Rather than altering W directly, LoRA breaks down the changes (ΔW) into two low-rank matrices (Wₐ and W_b), which are significantly smaller and trained only during fine-tuning.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          This method reduces the number of trainable parameters dramatically while still allowing the model to adapt effectively to new tasks, all without modifying the core model.
        </p>

        {/* SECTION 3 */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">The Intrinsic Rank Hypothesis</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          LoRA builds on the intrinsic rank hypothesis, which suggests that meaningful model updates exist in a low-dimensional space. Training only the smaller matrices allows LoRA to optimize model training efficiency without compromising performance.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          It makes LoRA in NLP and LoRA for LLaMA/GPT models highly popular in the AI and deep learning communities.
        </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Visual Representation</h2>
<Image
  src="/blog/blogexplain.png" // update to your image path
  alt="Visual Representation of LoRA"
  width={800}
  height={400}
  className="rounded-lg mb-6 object-cover"
/>
<p className="text-gray-700 leading-relaxed mb-6">
  The image above illustrates how LoRA fine-tuning works. Instead of updating the full pre-trained weight matrix (W), LoRA keeps W frozen and learns a small matrix ΔW, decomposed into Wₐ and W_b (of dimensions d×r and r×d). This low-rank adaptation saves resources and maintains high performance.
</p>

        {/* CONCLUSION */}
        <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">Final Thoughts</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Low-Rank Adaptation (LoRA) is an example of how a small but impactful change in deep learning model architecture can lead to significant improvements in performance and efficiency.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Whether working with large-scale LLMs, deploying on limited hardware, or experimenting with transfer learning techniques, LoRA provides a scalable and efficient solution.
        </p>
      </div>
    </div>
  );
};

export default Blog5;

import React from "react";
import Image from "next/image";
import { FiClock } from "react-icons/fi";
import Link from "next/link";

const Blog19 = () => {
  return (
    <div className="bg-gradient-to-b from-[#FBF8E6] to-[#EBF9FF] py-12 pt-40">
      <div className="max-w-screen-lg mx-auto px-4">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Demystifying Generative AI: A Friendly Guide to Different Model Types
        </h1>

        {/* FEATURE IMAGE */}
        <div className="relative w-full h-[400px] border-4 border-cyan-300 border-t-0 border-l-0 rounded-lg overflow-hidden mb-6">
          <Image
            src="/blog/blog19.jpg" // Updated image path; adjust as needed for Generative AI theme
            alt="Demystifying Generative AI"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* META */}
        <div className="flex items-center text-sm text-gray-500 mb-10 space-x-3">
          <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-extrabold">
            P
          </div>
          <span className="uppercase">Pavithra</span>
          <span>•</span>
          <div className="flex items-center">
            <FiClock className="mr-1" />
            <span>21 July 2025</span>
          </div>
          <span>•</span>
          <span>Estimated reading time: 5 minutes</span>
        </div>

        {/* INTRODUCTION */}
        <p className="text-gray-700 text-xl leading-relaxed mb-6">
          Generative AI has quickly moved from a trending term to a foundational technology powering many modern applications. From powering conversational chatbots to creating visual art from text descriptions, generative models form the backbone of modern AI applications.
        </p>
        <p className="text-gray-700 text-xl leading-relaxed mb-6">
          However, the variety of generative AI model types—LLMs, LAMs, LVMs, LMMs, and others—can make the landscape seem complex. This blog simplifies and explains these major categories in a clear and approachable way.
        </p>

        {/* SECTION: Large Language Models (LLMs) */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Large Language Models (LLMs)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Large Language Models are the most widely known type of generative AI. These models are trained on large volumes of text data and are built to understand and generate language one token at a time.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most modern LLMs use transformer-based architectures that process input in parallel rather than sequentially, making them faster and more effective than older methods.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Examples include GPT-4, Claude, LLaMA, Google’s PaLM and Gemini models.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Use cases: content writing, translation, summarization, question answering, coding assistance.
        </p>

        {/* SECTION: Large Action Models (LAMs) */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Large Action Models (LAMs)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          LAMs go a step beyond language. Instead of just generating text, these models can perform actual tasks based on user instructions. They interpret natural language input and turn it into concrete actions in software or real-world environments.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          LAMs are the foundation of modern AI agents capable of booking meetings, filling out forms, controlling robots, or navigating apps.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Examples include Adept’s ACT-1 (which performs tasks across web apps), Rabbit’s R1 device (which automates smartphone functions), and Microsoft’s AutoGen (used to build multi-agent AI systems).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Use cases: task automation, digital assistants, workflow management, robotic control.
        </p>

        {/* SECTION: Large Vision Models (LVMs) */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Large Vision Models (LVMs)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          LVMs are capable of handling visual content such as images and videos. They can classify objects in pictures, detect patterns, generate new visuals, and analyze video sequences.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          These models often use convolutional neural networks (CNNs) or vision transformers depending on their specific goals.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Examples include OpenAI’s DALL·E 3, Midjourney, Meta’s Make-A-Video, Google’s Imagen and Parti, and Stability AI’s Stable Diffusion.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Use cases: image generation, object detection, medical imaging, video content creation.
        </p>

        {/* SECTION: Large Multimodal Models (LMMs) */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Large Multimodal Models (LMMs)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          LMMs combine different types of input—text, image, audio, and video—within a single model. These models can, for example, look at an image and describe it in words, or generate a picture from a sentence.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          A special subset of LMMs, known as Vision-Language Models (VLMs), focuses specifically on the relationship between images and text.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Examples include OpenAI’s GPT-4V, Google’s Gemini, Anthropic’s Claude 3, OpenAI’s CLIP, Google’s PaLI, Microsoft’s Florence, and Salesforce’s BLIP models.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Use cases: image captioning, accessibility tools, multimodal chatbots, content moderation, creative media generation.
        </p>

        {/* SECTION: Emerging Developments */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Emerging Developments</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The world of generative AI is evolving fast. One recent direction includes Large Concept Models (LCMs), which aim to process ideas or concepts rather than individual words. These models work at a higher level of abstraction and are designed for more coherent and meaningful output. Though still early in development, LCMs show promise in reducing factual errors and improving long-form reasoning.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Another area of growth is Large World Models (LWMs). These are designed to understand how things interact in the real world over time. LWMs process large amounts of video and language data to simulate complex environments, useful in robotics, simulations, and AI agents that interact with the physical world.
        </p>

        {/* SECTION: Conclusion */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Grasping the main types of generative AI models is the essential first step to gaining deeper insight into how generative AI functions and to developing effective AI-powered solutions. As the field advances, we can anticipate more specialized models and new categories emerging to tackle unique use cases and technical hurdles.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Thanks for reading.
        </p>

        {/* SECTION: Internal Link */}
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Explore More:</strong> Discover the broader impact of AI <Link href="/ai-transforming-software" className="text-blue-600 hover:text-blue-800 underline font-medium"> How is AI Transforming Software Development?</Link>
        </p>

      </div>
    </div>
  );
};

export default Blog19;

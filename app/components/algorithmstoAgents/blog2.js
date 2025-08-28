// pages/blog2.jsx
"use client";
import React from "react";
import Image from "next/image";
import { FiClock } from "react-icons/fi";

const Blog2 = () => {
  return (
    <div className="bg-primary py-12 pt-40 min-h-screen">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* TITLE - Only main heading uses secondary color */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-secondary mb-8 drop-shadow-glow">
          From Algorithms to Agents
        </h1>

        {/* FEATURE IMAGE */}
        <div className="relative w-full h-[400px] border-4 border-secondary border-t-0 border-l-0 rounded-xl overflow-hidden mb-8 shadow-glow">
          <Image
            src="/blog/blog2.jpg"
            alt="From Algorithms to Agents"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* META (avatar, category, date) */}
        <div className="flex items-center text-sm text-white mb-10 space-x-3">
          <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-extrabold drop-shadow-glow">
            M
          </div>
          <span className="uppercase tracking-wide font-semibold">Ms. Sridevi P</span>
          <span>•</span>
          <div className="flex items-center">
            <FiClock className="mr-1 text-cyan-400" />
            <span>08 April 2025</span>
          </div>
        </div>

        {/* SECTION 1 - All other headings are white */}
        <h2 className="text-2xl font-bold text-white mb-6">Algorithms to Agents</h2>
        <p className="text-white/80 leading-relaxed mb-6">
          Artificial Intelligence (AI) has become a transformative force in today's world. From language models that can write poetry to autonomous systems solving complex problems, AI is revolutionizing the way we live, work, and create. But how did we get here? In this blog, we'll take a journey through AI's history, from its humble beginnings to the groundbreaking innovations that define the field today.
        </p>

        {/* SECTION 2 */}
        <h2 className="text-2xl font-bold text-white mb-6">Where It All Began</h2>
        <p className="text-white/80 leading-relaxed mb-6">
          AI as a concept isn't new. The term was first coined in 1956 at the Dartmouth Conference, where researchers dreamt of machines capable of reasoning, learning, and problem-solving like humans. Early efforts focused on rule-based systems and symbolic reasoning, which were great for well-defined problems like chess but struggled with ambiguity and complexity. The 1980s and 90s brought us machine learning (ML), where algorithms could learn patterns from data rather than relying on rigid rules. But even then, AI's potential felt limited by computational power and the availability of data.
        </p>

        {/* SECTION 3 */}
        <section className="text-white/80 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">The Deep Learning Revolution</h2>
          <p className="leading-relaxed">
            Everything changed in the 2010s with the advent of deep learning, a subset of ML inspired by the structure of the human brain. Neural networks had existed for decades, but breakthroughs like increased GPU processing power and massive datasets allowed them to flourish. The seminal paper "Attention Is All You Need" in 2017 introduced transformers, a game-changing architecture. Unlike recurrent neural networks (RNNs), transformers process data in parallel, making them faster and more effective at handling sequential tasks. The concept of "attention," which enables models to focus on the most relevant parts of input data, unlocked new possibilities for natural language processing (NLP).
          </p>
        </section>

        {/* SECTION 4 */}
        <section className="text-white/80 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">The Rise of Large Language Models</h2>
          <p className="leading-relaxed">
            The transformer architecture paved the way for models like GPT (Generative Pre-trained Transformer). OpenAI's GPT-2 and GPT-3 demonstrated that language models could generate coherent, human-like text. This was more than just a technical achievement, it showed that AI could understand context, making it useful for everything from drafting emails to writing code.
            <br/><br/>
            Around the same time, open-source efforts like Hugging Face's transformers library democratized access to these tools, enabling researchers and developers worldwide to experiment with state-of-the-art NLP. However, the rise of large-scale, closed-source models like GPT-4 and Claude 3.5 Sonnet underscored the increasing resource demands and proprietary nature of cutting-edge AI development.
          </p>
        </section>

        {/* SECTION 5 */}
        <section className="text-white/80 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">From Language Models to Agents</h2>
          <p className="leading-relaxed mb-4">
            Today, we're witnessing a shift from standalone models to autonomous AI agents. Tools like LangChain, Llama_index and frameworks like OpenAI's Function Calling allow models to interact with APIs, databases, and even other AI systems. These agents can complete complex tasks by reasoning, planning, and executing actions dynamically.
          </p>
          <p className="leading-relaxed mb-4">For example, AI agents can now:</p>
          <ul className="list-disc list-inside mb-4 space-y-1 text-white font-medium">
            <li>Plan and book your travel itinerary</li>
            <li>Debug and write entire software programs</li>
            <li>Collaborate with humans in research, design, and problem-solving</li>
          </ul>
          <p className="leading-relaxed">
            This evolution signifies a move toward more general-purpose AI systems capable of not just answering questions but taking meaningful action.
          </p>
        </section>

        {/* SECTION 6 */}
        <section className="text-white/80 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">Open vs. Closed: A Tale of Two Paradigms</h2>
          <p className="leading-relaxed mb-4">
            The AI community today is divided between open-source and closed-source models. Open-source initiatives like Meta's LLaMA models and OpenAssistant emphasize accessibility and collaboration. On the other hand, closed-source models often push the boundaries of capability but are locked behind paywalls and licensing restrictions.
          </p>
          <p className="leading-relaxed mb-4">Both approaches have their merits:</p>
          <ul className="list-disc list-inside mb-4 space-y-1 text-white font-medium">
            <li>Open-source AI fosters innovation, experimentation, and transparency</li>
            <li>Closed-source AI ensures the stability, safety, and scalability needed for enterprise applications</li>
          </ul>
        </section>

        {/* SECTION 7 */}
        <section className="text-white/80 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">The Current AI Ecosystem</h2>
          <p className="leading-relaxed mb-4">
            The AI landscape is vast and evolving rapidly, with numerous players contributing to its development. The ecosystem includes proprietary giants like OpenAI and Google, open-source champions like Hugging Face and Meta, and frameworks that enable AI integration into real-world applications.
          </p>
          <p className="leading-relaxed mb-4">
            In addition to these, Reasoning Models have emerged as the latest trend in AI. These models focus on enhancing logical reasoning and structured problem-solving, with techniques like:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-1 text-white font-medium">
            <li>Chain-of-Thought Reasoning: Step-by-step explanations to improve decision-making</li>
            <li>Self-Reflective Models: Systems that evaluate and refine their own outputs</li>
            <li>Tree of Thought: Structured frameworks for solving complex, multi-step tasks</li>
          </ul>
          <p className="leading-relaxed">
            Notable examples of reasoning models include o1-preview, f-1-preview, and R-lite-preview, which showcase advancements in logical thinking and planning capabilities for AI systems. Reasoning models represent the next frontier in AI, bridging the gap between human-like reasoning and machine capabilities.
          </p>
        </section>

        {/* SECTION 8 */}
        <section className="text-white/80 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">Where Are We Heading?</h2>
          <p className="leading-relaxed mb-4">The future of AI is brimming with potential:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-white font-medium">
            <li><strong>Multimodal Models:</strong> Systems like OpenAI's GPT-4 and Google's Gemini can understand and generate both text and images</li>
            <li><strong>AI in Everyday Life:</strong> From personalized assistants to autonomous vehicles, AI is becoming deeply integrated into our daily routines</li>
            <li><strong>Ethics and Regulation:</strong> Ensuring ethical use and avoiding misuse are critical challenges for governments and organizations</li>
          </ul>
        </section>

        {/* CONCLUSION */}
        <section className="text-white/80">
          <h2 className="text-2xl font-bold text-white mb-6">Conclusion</h2>
          <p className="leading-relaxed">
            AI has come a long way, from symbolic reasoning in the 1950s to autonomous agents reshaping industries today. The journey has been fueled by innovations like deep learning, transformers, and large language models. As we stand at the cusp of new breakthroughs, the question isn't just "what can AI do?" but also "how can we harness its power responsibly?"
            <br/><br/>
            The future of AI is not just about smarter machines; it's about building systems that amplify human potential while ensuring fairness, transparency, and inclusivity. Let's continue this journey together.
          </p>
        </section>

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

export default Blog2;

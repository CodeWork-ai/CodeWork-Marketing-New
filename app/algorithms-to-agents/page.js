import React from 'react'
import Head from 'next/head'
import Blog2 from '../components/algorithmstoAgents/blog2'
import Faqs2 from '../components/FAQsforBlog/faqs2'

const page = () => {
  return (
    <>
      <Head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the history behind Artificial Intelligence (AI)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Artificial Intelligence dates back to 1956, when it was introduced at the Dartmouth Conference. Early AI systems relied on rule-based logic for problem-solving. Over time, advances in machine learning and deep learning led to powerful systems that learn from data and perform complex tasks, transforming industries and everyday life."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How did deep learning and transformers revolutionize AI?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The deep learning revolution in the 2010s, powered by neural networks and high computational resources, drastically improved AI performance. Transformers, introduced in the paper 'Attention Is All You Need', changed the game by enabling faster, parallel processing and contextual understanding, paving the way for modern language models like GPT."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are AI agents, and how are they different from language models?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI agents go beyond traditional language models by autonomously reasoning, planning, and performing tasks. Powered by tools like LangChain and OpenAI's Function Calling, these agents can book trips, write code, and even collaborate with humans, marking a shift toward general-purpose, action-oriented AI."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between open-source and closed-source AI models?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Open-source models (like Meta's LLaMA and Hugging Face tools) promote transparency and community-driven innovation. Closed-source models (like GPT-4 or Claude) offer powerful performance but are restricted by licenses. Each approach has unique benefits in scalability, accessibility, and use cases."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are reasoning models in AI, and why are they important?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Reasoning models represent the next leap in AI, focusing on logical decision-making and structured problem-solving. Techniques like Chain-of-Thought, Self-Reflection, and tree-of-thought help AI systems think more like humans, enhancing accuracy in multi-step tasks and real-world applications."
                  }
                }
              ]
            }`
          }}
        />
      </Head>
      <div>
        <Blog2/>
        <Faqs2/>
      </div>
    </>
  )
}

export default page
import React from 'react'
import Head from 'next/head'
import Blog6 from '../components/hypeHijackGoal/blog6'
import Faqs6 from '../components/FAQsforBlog/faqs6'

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
                  "name": "Why do many AI projects fail in businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Many AI projects fail because businesses adopt AI without clear goals, clean data, or understanding if AI is the right solution. This leads to complexity and poor ROI."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How should companies decide if AI is the right solution?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Start by identifying the core business problem. If AI can solve it more efficiently than simpler methods, use it. Otherwise, opt for rule-based or basic analytics."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the essentials before implementing AI in business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Key essentials include clean and organized data, clearly defined objectives, and collaboration between data scientists and business stakeholders."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is advanced AI always necessary for business success?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Simple tools like dashboards, regression models, or rule-based systems can often deliver faster, cost-effective results with high impact."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does responsible AI adoption mean?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Responsible AI adoption means using AI only when it truly fits the problem, focusing on business value over hype, and ensuring data readiness and clear goals."
                  }
                }
              ]
            }`
          }}
        />
      </Head>
      <div>
        <Blog6/>
        <Faqs6/>
      </div>
    </>
  )
}

export default page
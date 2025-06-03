import React from 'react'
import Head from 'next/head'
import Faqs8 from '../components/FAQsforBlog/faqs8'
import Blog8 from '../components/blogs/blog8'

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
                  "name": "What is Stargate UAE, and why is it important?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Stargate UAE is a national AI project by the UAE government and OpenAI, aimed at building a massive AI data center and providing free ChatGPT Plus access to all residents."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who can access ChatGPT Plus for free in the UAE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "All residents of the UAE are eligible for a free ChatGPT Plus subscription as part of the Stargate UAE initiative."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What features are included in the free ChatGPT Plus subscription in the UAE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Residents get access to GPT-4o, faster response times, priority access during peak hours, and advanced AI tools for writing, learning, and coding."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is the UAE supporting AI development through Stargate UAE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The country is building a one-gigawatt AI computing cluster in Abu Dhabi and partnering with global tech companies to develop localized, secure, and responsible AI solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which global tech companies are partnering with the UAE on this AI initiative?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Key partners include Oracle, Nvidia, Cisco, SoftBank, Microsoft-backed G42, and other leading AI innovators."
                  }
                }
              ]
            }`
          }}
        />
      </Head>
      <div>
        <Blog8/>
        <Faqs8/>
      </div>
    </>
  )
}


export default page

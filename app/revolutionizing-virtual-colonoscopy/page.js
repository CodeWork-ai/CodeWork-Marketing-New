import React from 'react'
import Head from 'next/head'
import Faqs7 from '../components/FAQsforBlog/faqs7'
import Blog7 from '../components/blogs/blog7'

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
                  "name": "What is Radi Insight 3D, and how does it help in colorectal cancer screening?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Radi Insight 3D is an advanced imaging platform that turns CT scan data into 3D virtual colonoscopies. It helps radiologists detect abnormalities more accurately and efficiently."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Radi Insight 3D handle DICOM data?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The platform uses secure, API-driven tools to automatically retrieve and process DICOM files, converting them into 3D models for better visualization and faster diagnosis."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Radi Insight 3D compatible with existing hospital systems?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it integrates seamlessly with systems like PowerShare, PowerScribe, and Viatronix using custom middleware, ensuring smooth communication and data flow."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes Radi Insight 3D's AI segmentation unique?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Its AI uses a custom 3D U-Net model that accurately identifies colon structures, even in noisy or low-quality scans, improving screening reliability and reducing false results."
                  }
                }
              ]
            }`
          }}
        />
      </Head>
      <div>
        <Blog7/>
        <Faqs7/>
      </div>
    </>
  )
}

export default page

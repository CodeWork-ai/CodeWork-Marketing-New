import React from 'react'
import Head from 'next/head'
import Faqs5 from '../components/FAQsforBlog/faqs5'
import Blog5 from '../components/tinyTweaksPowerful/blog5'

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
                  "name": "Can you really train just 0.1% of a model and still get great results?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, LoRA makes it possible to fine-tune large models by training only around 0.1% of the parameters. Instead of updating the entire network, it introduces small, trainable matrices into specific layers. These are enough to adapt the model to new tasks, offering nearly the same performance as full fine-tuning but at a fraction of the cost."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is fine-tuning always resource-hungry?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Traditional fine-tuning is typically very resource-intensive. It requires updating the full weight matrix of a large model, which can double the memory and computational demands. This approach is often slow, expensive, and impractical for many users without access to high-end GPUs or long training times."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's the secret sauce behind LoRA's low resource use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "LoRA's efficiency comes from its approach of freezing the original model weights and introducing low-rank matrices (A and B) to approximate the changes needed. These small matrices capture task-specific information without touching the main model, dramatically reducing the number of parameters that need training and saving both time and computational resources."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Could smaller updates be smarter?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, LoRA relies on the intrinsic rank hypothesis, which suggests that meaningful updates to a model exist in a low-dimensional space. By focusing only on those low-rank changes rather than the full weight matrix, LoRA can adapt models more efficiently and effectively using smaller, smarter updates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can LoRA achieve performance similar to full fine-tuning?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In many cases, yes. Despite training only a tiny fraction of parameters, LoRA can reach performance levels comparable to traditional fine-tuning. Its ability to efficiently capture essential task-specific adjustments allows it to adapt powerful language models without the massive resource demands of full retraining."
                  }
                }
              ]
            }`
          }}
        />
      </Head>
      <div>
        <Blog5/>
        <Faqs5/>
      </div>
    </>
  )
}

export default page
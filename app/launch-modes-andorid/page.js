import React from 'react'
import Head from 'next/head'
import Blog1 from '../components/launchModesAndorid/blog1'
import Faqs1 from '../components/FAQsforBlog/faqs1'

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
                  "name": "What are Activity Launch Modes in Android?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Activity Launch Modes define how Android activities are created and managed in the back stack. The main modes are Standard, SingleTop, SingleTask, and SingleInstance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the default launch mode for activities in Android?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The default launch mode is Standard. It creates a new instance of the activity each time it's launched."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When should I use SingleTop launch mode?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use SingleTop when you want to reuse an existing instance of the activity if it is already at the top of the stack, avoiding a new instance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does SingleTask launch mode work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SingleTask ensures only one instance of the activity exists in a task. If already present, it clears all other activities above it and brings it to the front."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the key difference between SingleTask and SingleInstance?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SingleTask allows other activities in its task, while SingleInstance creates a new task containing only that activity, ensuring total isolation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does SingleInstance improve activity management?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SingleInstance improves resource management by placing the activity in a dedicated task, ensuring there's only one instance system-wide."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the role of onNewIntent() in launch modes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "onNewIntent() is called when an existing instance is reused instead of being recreated, primarily in SingleTop, SingleTask, and SingleInstance modes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I declare launch modes in the AndroidManifest.xml?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, launch modes can be declared using the android:launchMode attribute in the activity tag of AndroidManifest.xml."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which launch mode is best for a Settings screen?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SingleTask is often used for Settings screens to avoid multiple instances and maintain a single point of entry."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do launch modes affect the activity lifecycle?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Launch modes affect whether methods like onCreate() or onNewIntent() are called. For example, SingleTop skips onCreate if the instance is reused."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens if I launch an activity in Standard mode multiple times?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Multiple instances of the activity will be created, increasing memory usage and back stack complexity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is SingleInstance launch mode deprecated?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SingleInstance is deprecated in Android 11 for certain scenarios. Developers are encouraged to use modern navigation components."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to choose the right activity launch mode?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Choose based on your app's flow: use Standard for normal behavior, SingleTop to avoid duplicate screens, SingleTask for central access points, and SingleInstance for isolated features."
                  }
                }
              ]
            }`
          }}
        />
      </Head>
      <div>
        <Blog1/>
        <Faqs1/>
      </div>
    </>
  )
}

export default page
import React from 'react'
import Head from 'next/head'
import Faqs3 from '../components/FAQsforBlog/faqs3'
import Blog3 from '../components/workManagerBlog/blog3'

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
                  "name": "What is the difference between WorkManager, AlarmManager, and JobScheduler in Android?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WorkManager is a modern solution for deferrable and guaranteed background tasks, AlarmManager is best for exact time-based execution, and JobScheduler is ideal for condition-based background tasks from Android 5.0 onwards."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When should I use WorkManager in Android app development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use WorkManager for tasks like data syncing, file backups, or periodic maintenance, especially when tasks need to be guaranteed even after app restarts or device reboots."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can AlarmManager run background tasks when the device is idle?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, AlarmManager can wake the device from idle state and execute tasks at specified times. However, it may consume more battery and has limitations due to Doze Mode."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the advantages of using JobScheduler over AlarmManager?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "JobScheduler is more battery-efficient and supports condition-based execution such as network availability or charging status. It also supports persistence across device reboots."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is WorkManager better than JobScheduler for background tasks in Android?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, WorkManager is generally preferred as it combines the best features of JobScheduler and AlarmManager while offering compatibility across all Android API levels and guaranteed task execution."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I schedule a periodic background task using WorkManager in Android?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can use PeriodicWorkRequestBuilder to schedule recurring tasks with constraints like unmetered network and charging. WorkManager ensures these tasks are executed reliably."
                  }
                }
              ]
            }`
          }}
        />
      </Head>
      <div>
        <Blog3/>
        <Faqs3/>
      </div>
    </>
  )
}

export default page
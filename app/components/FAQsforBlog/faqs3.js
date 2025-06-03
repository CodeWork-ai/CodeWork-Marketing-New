"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: " What is the difference between WorkManager, AlarmManager, and JobScheduler in Android?",
    answer: [
      "WorkManager is a modern solution for deferrable and guaranteed background tasks, AlarmManager is best for exact time-based execution, and JobScheduler is ideal for condition-based background tasks from Android 5.0 onwards.",
    ],
  },
  {
    question: "When should I use WorkManager in Android app development?",
    answer: [
      "Use WorkManager for tasks like data syncing, file backups, or periodic maintenance, especially when tasks need to be guaranteed even after app restarts or device reboots.",
    ],
  },
  {
    question: "Can AlarmManager run background tasks when the device is idle?",
    answer: [
      "Yes, AlarmManager can wake the device from idle state and execute tasks at specified times. However, it may consume more battery and has limitations due to Doze Mode.",
    ],
  },
  {
    question: "What are the advantages of using JobScheduler over AlarmManager?",
    answer: [
      "JobScheduler is more battery-efficient and supports condition-based execution such as network availability or charging status. It also supports persistence across device reboots.",
    ],
  },
  {
    question: " Is WorkManager better than JobScheduler for background tasks in Android?",
    answer: [
      "Yes, WorkManager is generally preferred as it combines the best features of JobScheduler and AlarmManager while offering compatibility across all Android API levels and guaranteed task execution.",
    ],
  },
  {
    question: " How do I schedule a periodic background task using WorkManager in Android?",
    answer: [
      "You can use PeriodicWorkRequestBuilder to schedule recurring tasks with constraints like unmetered network and charging. WorkManager ensures these tasks are executed reliably.",
    ],
  },
];

const Faqs3 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className=" bg-gradient-to-b from-[#EBF9FF] to-[#f0f9fc] py-12">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
      Frequently  Questions
    </h3>
    <div className="max-w-4xl mx-auto">
      {faqs.map((faq, idx) => (
        <div key={faq.question} className="border-b last:border-b-0">
          <button
            className="w-full flex items-center justify-between px-6 py-4 focus:outline-none"
            onClick={() => toggle(idx)}
          >
            <span className="text-gray-800 text-left">{faq.question}</span>
            <svg
              className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
                openIndex === idx ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-4 text-gray-600 space-y-1">
              {faq.answer.map((line, lineIdx) => (
                <div key={lineIdx}>{line}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Faqs3;

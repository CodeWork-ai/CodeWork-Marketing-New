"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: " What are Activity Launch Modes in Android?",
    answer: [
      "Activity Launch Modes in Android define how new instances of an activity are created and how they interact with existing ones in the back stack. The four main modes are: Standard, SingleTop, SingleTask, and SingleInstance.",
    ],
  },
  {
    question: "  What is the default launch mode for activities in Android?",
    answer: [
      "The default launch mode is Standard. In this mode, every time an activity is launched, a new instance is created and added to the back stack, regardless of whether an instance already exists.",
    ],
  },
  {
    question: "When should I use SingleTop launch mode?",
    answer: [
      "Use SingleTop when you want to reuse the current activity if it's already at the top of the stack. This avoids creating a new instance and instead triggers the onNewIntent() method.",
    ],
  },
  {
    question: " How does SingleTask launch mode work?",
    answer: [
      "In SingleTask mode, if an activity is already running in a task, a new instance is not created. Instead, it brings the existing instance to the foreground and clears all activities above it in the stack.",
    ],
  },
  {
    question: " What is the key difference between SingleTask and SingleInstance?",
    answer: [
      "SingleTask: Only one instance exists within a task, but other activities can still be in the same task.SingleInstance: The activity is placed in its separate task and is the only activity in that task",
    ],
  },
  {
    question: " How does SingleInstance improve activity management?",
    answer: [
      "SingleInstance ensures only one activity per task, providing isolation and memory efficiency. It’s ideal for scenarios like video players, chat windows, or login screens that should not be duplicated.",
    ],
  },
  {
    question: " What is the role of onNewIntent() in launch modes?",
    answer: [
      "The onNewIntent() method is triggered when an activity is reused instead of recreated. This occurs in SingleTop, SingleTask, and SingleInstance modes when the existing activity is brought to the foreground.",
    ],
  },
{
    question: " Can I declare launch modes in the AndroidManifest.xml?",
    answer: [
      "Yes! You can set the launch mode using the android:launchMode attribute in your activity declaration within the AndroidManifest.xml.",
      
      `<activity
    android:name=".YourActivity"
    android:launchMode="singleTop";
    />
`
    ],
  },
    {
    question: " Which launch mode is best for a Settings screen?",
    answer: [
      "The SingleTask mode is ideal for a Settings screen, as it ensures there’s only one instance, avoids redundancy, and maintains user state efficiently.",
    ],
  }, 
{
    question: "How do launch modes affect the activity lifecycle?",
    answer: [
      "Launch modes influence whether lifecycle methods like onCreate(), onStart(), or onNewIntent() are called. For example:",
      "Standard:onCreate() is always called.",
      "SingleTop: Skips onCreate() if activity is on top; calls onNewIntent().",
      "SingleTask:SingleInstance: Reuses existing instance, triggers onNewIntent() if present."
    ],
  },
];

const Faqs1 = () => {
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

export default Faqs1;

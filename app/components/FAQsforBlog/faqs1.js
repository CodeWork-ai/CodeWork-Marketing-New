"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What are Activity Launch Modes in Android?",
    answer: [
      "Activity Launch Modes in Android define how new instances of an activity are created and how they interact with existing ones in the back stack. The four main modes are: Standard, SingleTop, SingleTask, and SingleInstance.",
    ],
  },
  {
    question: "What is the default launch mode for activities in Android?",
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
    question: "How does SingleTask launch mode work?",
    answer: [
      "In SingleTask mode, if an activity is already running in a task, a new instance is not created. Instead, it brings the existing instance to the foreground and clears all activities above it in the stack.",
    ],
  },
  {
    question: "What is the key difference between SingleTask and SingleInstance?",
    answer: [
      "SingleTask: Only one instance exists within a task, but other activities can still be in the same task.",
      "SingleInstance: The activity is placed in its separate task and is the only activity in that task",
    ],
  },
  {
    question: "How does SingleInstance improve activity management?",
    answer: [
      "SingleInstance ensures only one activity per task, providing isolation and memory efficiency. It's ideal for scenarios like video players, chat windows, or login screens that should not be duplicated.",
    ],
  },
  {
    question: "What is the role of onNewIntent() in launch modes?",
    answer: [
      "The onNewIntent() method is triggered when an activity is reused instead of recreated. This occurs in SingleTop, SingleTask, and SingleInstance modes when the existing activity is brought to the foreground.",
    ],
  },
  {
    question: "Can I declare launch modes in the AndroidManifest.xml?",
    answer: [
      "Yes! You can set the launch mode using the android:launchMode attribute in your activity declaration within the AndroidManifest.xml.",
      `<activity
    android:name=".YourActivity"
    android:launchMode="singleTop"
    />`
    ],
  },
  {
    question: "Which launch mode is best for a Settings screen?",
    answer: [
      "The SingleTask mode is ideal for a Settings screen, as it ensures there's only one instance, avoids redundancy, and maintains user state efficiently.",
    ],
  },
  {
    question: "How do launch modes affect the activity lifecycle?",
    answer: [
      "Launch modes influence whether lifecycle methods like onCreate(), onStart(), or onNewIntent() are called. For example:",
      "Standard: onCreate() is always called.",
      "SingleTop: Skips onCreate() if activity is on top; calls onNewIntent().",
      "SingleTask/SingleInstance: Reuses existing instance, triggers onNewIntent() if present."
    ],
  },
];

const Faqs1 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-primary py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-secondary drop-shadow-glow">
          Frequently Asked Questions
        </h3>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={faq.question} 
              className="bg-primary border border-secondary/30 rounded-xl overflow-hidden shadow-glow transition-all duration-300 hover:shadow-lg hover:border-secondary/50"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 focus:outline-none group transition-all duration-200 hover:bg-secondary/5"
                onClick={() => toggle(idx)}
              >
                <span className="text-white font-semibold text-left pr-4 group-hover:text-secondary transition-colors duration-200">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <svg
                    className={`h-6 w-6 text-secondary transform transition-all duration-300 ${
                      openIndex === idx ? "rotate-180 scale-110" : "group-hover:scale-110"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="px-6 pb-6 pt-2 border-t border-secondary/20">
                  <div className="text-white/90 space-y-2">
                    {faq.answer.map((line, lineIdx) => (
                      <div key={lineIdx} className="leading-relaxed">
                        {line.includes('<activity') ? (
                          <pre className="bg-gray-900 text-cyan-300 p-3 rounded-lg mt-2 text-sm overflow-x-auto border border-secondary/30">
                            {line}
                          </pre>
                        ) : (
                          line
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .drop-shadow-glow {
          text-shadow: 0 0 20px #1ddfea66, 0 0 4px #223044;
        }
        .shadow-glow {
          box-shadow: 0 0 20px #1ddfea15, 0 4px 15px #22304420;
        }
      `}</style>
    </div>
  );
};

export default Faqs1;

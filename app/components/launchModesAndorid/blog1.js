// pages/blog1.jsx
"use client";
import React from "react";
import Image from "next/image";
import { FiClock } from "react-icons/fi";

const Blog1 = () => {
  return (
    <div className="bg-primary py-12 pt-40 min-h-screen">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* TITLE - Only main heading uses secondary color */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-secondary mb-8 drop-shadow-glow">
          Deep Dive Into Activity Launch Modes in Android.
        </h1>

        {/* FEATURE IMAGE */}
        <div className="relative w-full h-[400px] border-4 border-secondary border-t-0 border-l-0 rounded-xl overflow-hidden mb-8 shadow-glow">
          <Image
            src="/blog/blog1.jpg"
            alt="Activity Launch Modes"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* META (avatar, category, date) */}
        <div className="flex items-center text-sm text-white mb-10 space-x-3">
          <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-extrabold drop-shadow-glow">
            C
          </div>
          <span className="uppercase tracking-wide font-semibold">CodeWork</span>
          <span>•</span>
          <div className="flex items-center">
            <FiClock className="mr-1 text-cyan-400" />
            <span>08 April 2025</span>
          </div>
        </div>

        {/* SECTION 1 */}
        <h2 className="text-2xl font-bold text-white mb-6">Activity Launch Modes</h2>
        <p className="text-white/80 leading-relaxed mb-4">
          In Android, Activity Launch Modes determine how new instances of an activity are
          created and how they interact with existing activities. The four main launch modes are:
        </p>
        <ul className="list-disc list-inside mb-2 space-y-1 text-white font-medium">
          <li>Standard (default)</li>
          <li>SingleTop</li>
          <li>SingleTask</li>
          <li>SingleInstance</li>
        </ul>
        <p className="text-white/70 mb-6">
          Each launch mode controls the behavior of activities when they are
          launched and influences the activity lifecycle differently.
        </p>
        <p className="text-white/80 leading-relaxed mb-6">
          To understand the interaction between the activity lifecycle and
          launch modes, let’s break down the behavior of each mode along with a
          flowchart-like explanation.
        </p>

        {/* SECTION 2 */}
        <h2 className="text-2xl font-bold text-white mb-4">Activity Lifecycle and Launch Modes</h2>
        <div className="bg-primary/80 rounded-lg p-6 mb-10 border border-secondary/40 shadow-glow">
          <p className="text-white/90 leading-relaxed mb-3">
            <strong className="text-secondary">Standard Launch Mode (Default)</strong><br />
            Every time you launch an activity, a new instance of the activity is created and pushed onto the activity stack.
          </p>
          <p className="text-white/80 mb-2">
            <span className="font-semibold">Behavior:</span> No special restrictions on activity creation.<br />
            <span className="font-semibold">Lifecycle Flow:</span> When the activity is launched, it goes through <code>onCreate()</code>, <code>onStart()</code>, <code>onResume()</code>, and so on.<br />
            <span className="font-semibold">Example:</span> Launching the same activity from multiple places in your app will create multiple instances of the activity.
          </p>
          <ol className="list-decimal list-inside mb-4 space-y-2 text-white">
            <li>Activity 1 → Activity 2 (New instance created)</li>
            <li>Activity 2 → Activity 3 (New instance created)</li>
          </ol>
        </div>

        {/* Extend: Continue other sections likewise, with text-white headings and content */}
        {/* Example Section for clarity (repeat this for other parts as needed): */}
        <h2 className="text-2xl font-bold text-white mb-4">SingleTop Launch Mode</h2>
        <div className="bg-primary/80 rounded-lg p-6 mb-10 border border-secondary/40 shadow-glow">
          <p className="text-white/90 mb-3">
            <strong className="text-secondary">SingleTop</strong> mode lets an activity reuse itself if it's already on top of the stack, otherwise creates a new instance.
          </p>
          <ol className="list-decimal list-inside mb-4 space-y-2 text-white">
            <li>Activity 1 → Activity 2 (New instance created)</li>
            <li>Activity 2 → Activity 1 (Existing instance, <code>onNewIntent()</code> called)</li>
          </ol>
        </div>
        {/* ...repeat for SingleTask, SingleInstance, etc... */}

        <style jsx>{`
          .drop-shadow-glow {
            text-shadow: 0 0 12px #1ddfea66, 0 0 2px #223044;
          }
          .shadow-glow {
            box-shadow: 0 0 32px #1ddfea22, 0 0 8px #22304426;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Blog1;

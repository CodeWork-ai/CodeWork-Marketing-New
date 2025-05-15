// pages/blog1.jsx
import React from "react";
import Image from "next/image";
import { FiClock } from "react-icons/fi";

const Blog1 = () => {
  return (
    <div className="bg-gradient-to-b from-[#FBF8E6] to-[#EBF9FF] py-12 pt-40">
      <div className="max-w-screen-lg mx-auto">
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Deep Dive Into Activity Launch Modes in Android.
        </h1>

        {/* FEATURE IMAGE */}
        <div className="relative w-full h-[400px] border-4 border-cyan-300 border-t-0 border-l-0 rounded-lg overflow-hidden mb-6">
          <Image
            src="/blog/blog1.jpg"
            alt="Activity Launch Modes"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* META (avatar, category, date) */}
        <div className="flex items-center text-sm text-gray-500 mb-10 space-x-3">
          <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-extrabold">
            C
          </div>
          <span className="uppercase">CodeWork</span>
          <span>•</span>
          <div className="flex items-center">
            <FiClock className="mr-1" />
            <span>08 April 2025</span>
          </div>
        </div>

        {/* SECTION 1 */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Activity Launch Modes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          In Android, Activity Launch Modes determine how new instances of an
          activity are created and how they interact with existing activities.
          The four main launch modes are:
        </p>
        <ul className="list-disc list-inside mb-1 space-y-1 text-gray-700">
          <li>Standard (default)</li>
          <li>SingleTop</li>
          <li>SingleTask</li>
          <li>SingleInstance</li>
        </ul>
        <p className="text-gray-700">
          Each launch mode controls the behavior of activities when they are
          launched and influences the activity lifecycle differently.
        </p>
        <p className="text-gray-700 leading-relaxed my-5">
          To understand the interaction between the activity lifecycle and
          launch modes, let’s break down the behavior of each mode along with a
          flowchart-like explanation.{" "}
        </p>

        {/* SECTION 2 */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Activity Lifecycle and Launch Modes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Standard Launch Mode (Default)</strong>
          <br />
          Every time you launch an activity, a new instance of the activity is
          created and pushed onto the activity stack.
          <br />
          <em>Behavior:</em> No special restrictions on activity creation.
          <br />
          <em>Lifecycle Flow:</em> When the activity is launched, it goes
          through <code>onCreate()</code>, <code>onStart()</code>,{" "}
          <code>onResume()</code>, and so on.
          <br />
          <em>Example:</em> Launching the same activity from multiple places in
          your app will create multiple instances of the activity.
        </p>
        <ol className="list-decimal list-inside mb-10 space-y-2 text-gray-700">
          <li>Activity 1 → Activity 2 (New instance created)</li>
          <li>Activity 2 → Activity 3 (New instance created)</li>
        </ol>

        {/* SECTION 3 */}
        <section className="text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. SingleTop Launch Mode
          </h2>
          <p className="text-gray-700 leading-relaxed ">
            If an activity is already at the top of the activity stack, no new
            instance is created. Instead, the existing instance is brought to
            the foreground, and <code>onNewIntent()</code> is called to handle
            the new intent.
          </p>
          <p>
            Behavior: If the activity is not at the top, it will behave like the
            standard mode and create a new instance.
          </p>
          <p>
            Lifecycle Flow: If the activity is already at the top, it skips{" "}
            <code>onCreate()</code> and goes directly to{" "}
            <code>onNewIntent()</code>.
          </p>
          <p className="mb-5">
            Example: If you launch the same activity while it is already in the
            foreground, no new instance is created.
          </p>
          <ol className="list-decimal list-inside mb-10 space-y-2 text-gray-700">
            <li>Activity 1 → Activity 2 (New instance created)</li>
            <li>Activity 2 → Activity 3 (New instance created)</li>
            <li>
              Activity 3 → Activity 2 (Existing instance brought to front)
            </li>
          </ol>
        </section>
        {/* SECTION 4 */}
        <section className="text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. SingleTask Launch Mode
          </h2>
          <p className="text-gray-700 leading-relaxed ">
            A new task will be created for the activity. If the activity is
            already in the task (but not at the top), all activities above it in
            the stack will be removed, and the activity will be brought to the
            top.
          </p>
          <p>
            Behavior: There will be only one instance of the activity in the
            task, and it is launched in a separate task.
          </p>
          <p>
            Lifecycle Flow: The activity is launched in a new task if it’s not
            already in the task, and any existing activities above it are
            cleared.
          </p>
          <p>
            Example: Launching a settings screen might use singleTask to ensure
            there’s only one instance of the settings activity.
          </p>
          <p className="mb-4">Flowchart Example:</p>
          <ol className="list-decimal list-inside mb-10 space-y-2 text-gray-700">
            <li>Activity 1 → Activity 2 (New instance created)</li>
            <li>Activity 2 → Activity 3 (New instance created)</li>
            <li>
              Activity 3 → Activity 2 (Activity 2 brought to the top and others
              removed)
            </li>
          </ol>
        </section>

        {/* SECTION 5 */}
        <section className="text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. SingleInstance Launch Mode
          </h2>
          <p className="text-gray-700 leading-relaxed ">
            The activity is always the only activity in its task. When a new
            instance of the activity is launched, it will be placed in a new
            task (if the activity is not already running), ensuring there is
            only one instance in the entire system.{" "}
          </p>
          <p>
            Behavior: The activity is launched in its own task, and there will
            never be more than one instance of it in the system.
          </p>
          <p>
            Lifecycle Flow: A new task is always created, and if the activity is
            already running, the current instance is brought to the foreground
            with onNewIntent().
          </p>
          <p>
            Example: An app launcher screen might use singleInstance to ensure
            only one instance of the launcher activity is ever created.
          </p>

          <ol className="list-decimal list-inside mb-10 space-y-2 text-gray-700">
            <li>Activity 1 → Activity 2 (New task created)</li>
            <li>Activity 2 → Activity 2 (onNewIntent() called)</li>
          </ol>
        </section>
        {/* SECTION 6 */}
        <section className="text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Flowchart of Activity Lifecycle with Launch Modes
          </h2>
          <p className="text-gray-700 leading-relaxed ">
            Here’s how the launch modes interact with the activity lifecycle in
            different scenarios:{" "}
          </p>
        </section>

        {/* Scenario 1*/}
        <section className="text-gray-700 mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Scenario 1: Standard Mode
          </h2>
          <p className="text-gray-700 leading-relaxed ">
            When an activity is launched, it always creates a new instance and pushes it onto the activity stack.
          </p>
          <ol className="list-decimal list-inside mb-10 space-y-2 text-gray-700">
            <li>Activity 1 → Activity 2 (new instance created)</li>
            <li>Activity 2 → Activity 3 (new instance created)</li>
            <li>Activity 3 → Activity 1 (new instance created)</li>
          </ol>
        </section>
        {/* Scenario 2*/}
        <section className="text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
      Scenario 2: SingleTop Mode
          </h2>
          <p className="text-gray-700 leading-relaxed ">
If the activity is at the top of the stack, no new instance is created, and onNewIntent() is called.
          </p>
          <ol className="list-decimal list-inside mb-10 space-y-2 text-gray-700">
            <li>Activity 1 → Activity 2 (new instance created)</li>
            <li>Activity 2 → Activity 1 (onNewIntent() called, no new instance)</li>
          </ol>
        </section>
        {/* Scenario 3*/}
<section className="text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
Scenario 3: SingleTask Mode          </h2>
          <p className="text-gray-700 leading-relaxed ">
If the activity is not in the stack, a new task is created, and all activities above it in the stack are cleared.
          </p>
          <ol className="list-decimal list-inside mb-10 space-y-2 text-gray-700">
            <li>Activity 1 → Activity 2 (new instance created)</li>
            <li>Activity 2 → Activity 3 (onNewIntent() called, no new instance)</li>
            <li>AActivity 2 (top) → Activity 3 (Activity 3 is cleared, Activity 2 brought to top)</li>
          </ol>
        </section>
 {/* Scenario 4*/}
        <section className="text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
Scenario 4: SingleInstance Mode          </h2>
          <p className="text-gray-700 leading-relaxed ">
The activity is always the only one in its task. If it is already running, onNewIntent() is called. If not, it is launched in a new task.
          </p>
          <ol className="list-decimal list-inside mb-10 space-y-2 text-gray-700">
            <li>Activity 1 → Activity 2 (new task created, only one instance of Activity 2)</li>
            <li>Activity 2 → Activity 2 (onNewIntent() called)</li>
          </ol>
        </section>

        {/* CONCLUSION */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Conclusion
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Understanding the activity launch modes in Android is crucial for managing the activity stack and controlling how activities behave when launched from different places in the app. Each launch mode offers a different level of control over how activities are created and how they interact with each other, which can optimize the app’s memory and user flow.

Standard: Default behavior, new activity instances are created every time.
SingleTop: No new instance if the activity is already on top.
SingleTask: New task is created; all activities above are cleared.
SingleInstance: A new task is created with only one instance of the activity.
By selecting the appropriate launch mode based on your app’s flow, you can manage resources more effectively and control the activity lifecycle to ensure better performance and user experience.
        </p>
      </div>
    </div>
  );
};

export default Blog1;

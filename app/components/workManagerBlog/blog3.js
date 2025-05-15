// pages/blog3.jsx
import React from "react";
import Image from "next/image";
import { FiClock } from "react-icons/fi";

const Blog3 = () => {
  return (
    <div className="bg-gradient-to-b from-[#FBF8E6] to-[#EBF9FF] py-12 pt-40">
      <div className="max-w-screen-lg mx-auto">
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
         WorkManager vs. AlarmManager vs. JobScheduler 🫱🏼‍🫲🏾: A Detailed Guide
        </h1>

        {/* FEATURE IMAGE */}
        <div className="relative w-full h-[400px] border-4 border-cyan-300 border-t-0 border-l-0 rounded-lg overflow-hidden mb-6">
          <Image
            src="/blog/blog3.jpg"
            alt="Background Task Managers"
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
          <span className="uppercase">Charles Raj Iruthayaraj</span>
          <span>•</span>
          <div className="flex items-center">
            <FiClock className="mr-1" />
            <span>08 April 2025</span>
          </div>
        </div>

        {/* INTRO */}
        <p className="text-gray-700 text-xl leading-relaxed mb-6">
          This blog will explore <strong>WorkManager, AlarmManager, and JobScheduler</strong> in detail, comparing their functionality, ideal use cases, and examples.
        </p>

        {/* SECTION 1 */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. WorkManager</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          WorkManager is the most modern and flexible background task manager in Android. It provides a high-level abstraction for tasks that need to run asynchronously, either immediately or on a schedule.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Features of WorkManager:</h3>
        <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
          <li>Guaranteed Execution</li>
          <li>Flexible Constraints</li>
          <li>Task Chaining</li>
          <li>Battery Efficient</li>
          <li>Support for Periodic Work</li>
          <li>Supports Work Across Device Reboots</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Use Cases for WorkManager:</h3>
        <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
          <li>Syncing Data</li>
          <li>File Backups</li>
          <li>Periodic Maintenance</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Example Usage:</h3>
        <pre className="bg-gray-50 text-gray-800 p-4 rounded mb-4 overflow-auto text-sm">
{`class SyncDataWorker(appContext: Context, workerParams: WorkerParameters) :
    Worker(appContext, workerParams) {
    override fun doWork(): Result {
        // Perform your task
        return Result.success()
    }
}

// One-time work
val syncDataRequest = OneTimeWorkRequestBuilder<SyncDataWorker>()
    .setConstraints(
        Constraints.Builder()
            .setRequiredNetworkType(NetworkType.UNMETERED)
            .setRequiresCharging(true)
            .build()
    ).build()
WorkManager.getInstance(context).enqueue(syncDataRequest)

// Periodic work
val periodicRequest = PeriodicWorkRequestBuilder<SyncDataWorker>(15, TimeUnit.MINUTES)
    .setConstraints(
        Constraints.Builder()
            .setRequiredNetworkType(NetworkType.UNMETERED)
            .setRequiresCharging(true)
            .build()
    ).build()
WorkManager.getInstance(context).enqueue(periodicRequest)`}
        </pre>

        {/* SECTION 2 */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. AlarmManager</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          AlarmManager is best suited for time-based execution. It can wake the device to perform tasks even when it's idle.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h3>
        <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
          <li>Time-based Execution</li>
          <li>Wakes up the Device</li>
          <li>Repeating and One-time Alarms</li>
          <li>Inexact vs. Exact Alarms</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Example:</h3>
        <pre className="bg-gray-50 p-4  text-gray-800 rounded mb-4 overflow-auto text-sm">
{`val alarmManager = getSystemService(Context.ALARM_SERVICE) as AlarmManager
val intent = Intent(this, MyReceiver::class.java)
val pendingIntent = PendingIntent.getBroadcast(this, 0, intent, 0)
val triggerTime = System.currentTimeMillis() + 10000
alarmManager.setExact(AlarmManager.RTC_WAKEUP, triggerTime, pendingIntent)

// Repeating
alarmManager.setRepeating(AlarmManager.RTC_WAKEUP, triggerTime, 60000L, pendingIntent)`}
        </pre>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Limitations:</h3>
        <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
          <li>Battery Consumption</li>
          <li>Inflexibility</li>
          <li>Doze Mode Restrictions</li>
        </ul>

        {/* SECTION 3 */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. JobScheduler</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JobScheduler offers a balance between flexibility and efficiency, designed for condition-based background work starting with Android 5.0.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h3>
        <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
          <li>Condition-based Execution</li>
          <li>Persistence Across Reboots</li>
          <li>Battery Efficiency</li>
          <li>Job Chaining Support</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Example:</h3>
        <pre className="bg-gray-50 text-gray-800 p-4 rounded mb-4 overflow-auto text-sm">
{`class MyJobService : JobService() {
    override fun onStartJob(params: JobParameters?): Boolean {
        // Do your work
        return true
    }

    override fun onStopJob(params: JobParameters?): Boolean {
        return false
    }
}

val jobScheduler = getSystemService(Context.JOB_SCHEDULER_SERVICE) as JobScheduler
val jobInfo = JobInfo.Builder(1, ComponentName(this, MyJobService::class.java))
    .setRequiredNetworkType(JobInfo.NETWORK_TYPE_UNMETERED)
    .setRequiresCharging(true)
    .setPersisted(true)
    .build()
jobScheduler.schedule(jobInfo)`}
        </pre>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Limitations:</h3>
        <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
          <li>Requires API 21+</li>
          <li>Not ideal for exact time-based tasks</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>WorkManager</strong> is the recommended tool for most modern use cases, especially when guaranteed execution is needed. <strong>AlarmManager</strong> is suitable for simple, time-based tasks but may consume more battery. <strong>JobScheduler</strong> is best for conditionally executed tasks.
        </p>
      </div>
    </div>
  );
};

export default Blog3;

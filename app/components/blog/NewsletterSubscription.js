"use client";

export default function NewsletterSubscription() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-8">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg mb-8">
          Stay updated with the latest blogs and insights delivered straight to your inbox.
        </p>
        <div className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-lg text-gray-800 shadow-md focus:ring-4 focus:ring-blue-300"
          />
          <button className="mt-4 px-8 py-3 bg-red-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-red-600 focus:ring-4 focus:ring-red-400 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

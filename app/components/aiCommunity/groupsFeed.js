import React from 'react'
import { FaThumbsUp, FaCommentAlt, FaEye } from 'react-icons/fa'

const GroupsFeed = () => {
  return (
    <div className="bg-[#FCF6EE] min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-semibold text-gray-800">Groups Feed</h1>
        <p className="text-gray-600 mb-8">View groups and posts below.</p>

        {/* Post Card */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          {/* Post Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <img
                src="/profile.jpg"
                alt="John Antony"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-medium text-gray-800">John Antony</p>
                <p className="text-sm text-gray-500">
                  10 min ago · Posted in{' '}
                  <span className="font-semibold text-gray-700">
                    CodeWork Group
                  </span>
                </p>
              </div>
            </div>
            <button className="flex items-center space-x-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white text-sm">
              <span>Join Group</span>
              <span className="text-lg">→</span>
            </button>
          </div>

          {/* Divider */}
          <hr className="border-gray-200 mb-6" />

          {/* Post Body */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            AI Development and Learning
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            AI development is the process of creating systems or models that can
            simulate human intelligence. This includes machine learning (ML),
            natural language processing (NLP), computer vision, and robotics. AI
            development involves both creating the algorithms and training them
            to learn from data, making it a blend of programming, math, and
            problem-solving.
          </p>

          {/* Post Stats with gradient */}
          <div className="flex items-center space-x-8 mb-8">
            {[
              {
                Icon: FaThumbsUp,
                count: 200,
                gradient: 'from-blue-400 to-indigo-400',
              },
              {
                Icon: FaCommentAlt,
                count: 20,
                gradient: 'from-purple-400 to-pink-400',
              },
              {
                Icon: FaEye,
                count: 1500,
                gradient: 'from-cyan-400 to-teal-400',
              },
            ].map(({ Icon, count, gradient }, i) => (
              <div
                key={i}
                className="flex items-center space-x-1"
              >
                <span
                  className={`inline-block w-6 h-6 bg-gradient-to-r ${gradient} rounded-full p-1`}
                >
                  <Icon className="w-full h-full fill-current text-white" />
                </span>
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {count}
                </span>
              </div>
            ))}
          </div>

          {/* Comments */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Comments
            </h3>
            <div className="space-y-4">
              <div className="flex items-start bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-2xl">
                <img
                  src="/profile2.jpg"
                  alt=""
                  className="w-8 h-8 rounded-full mr-3"
                />
                <p className="text-gray-700">
                  Keeping up with AI trends is tough but so important!
                </p>
              </div>
              <div className="flex items-start bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-2xl">
                <img
                  src="/profile3.jpg"
                  alt=""
                  className="w-8 h-8 rounded-full mr-3"
                />
                <p className="text-gray-700">
                  Generative AI is such an exciting area! Can anyone recommend
                  tools or platforms to experiment with it?
                </p>
              </div>
            </div>
            <textarea
              placeholder="Write a comment"
              className="mt-6 w-full h-24 p-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 text-gray-700 focus:ring-blue-300"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupsFeed
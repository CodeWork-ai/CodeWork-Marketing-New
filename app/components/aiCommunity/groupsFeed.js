import React from 'react'
import { FaThumbsUp, FaCommentAlt, FaEye } from 'react-icons/fa'

const GroupsFeed = () => {
  return (
    <div className="bg-[#FCF6EE] min-h-screen py-6 px-4 sm:py-8 sm:px-6 lg:py-10 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Groups Feed</h2>
        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">View groups and posts below.</p>

        {/* Post Card */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg">
          {/* Post Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center mb-4 sm:mb-0">
              <img
                src="/profile.jpg"
                alt="John Antony"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
              />
              <div>
                <p className="font-medium text-gray-800 text-base sm:text-lg">John Antony</p>
                <p className="text-xs sm:text-sm text-gray-500">
                  10 min ago · Posted in{' '}
                  <span className="font-semibold text-gray-700">
                    CodeWork Group
                  </span>
                </p>
              </div>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 sm:px-5 sm:py-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white text-xs sm:text-sm w-full sm:w-auto justify-center sm:justify-start">
              <span>Join Group</span>
              <span className="text-base sm:text-lg">→</span>
            </button>
          </div>

          {/* Divider */}
          <hr className="border-gray-200 mb-4 sm:mb-6" />

          {/* Post Body */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
            AI Development and Learning
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
            AI development is the process of creating systems or models that can
            simulate human intelligence. This includes machine learning (ML),
            natural language processing (NLP), computer vision, and robotics. AI
            development involves both creating the algorithms and training them
            to learn from data, making it a blend of programming, math, and
            problem-solving.
          </p>

          {/* Post Stats with gradient */}
          <div className="flex items-center space-x-4 sm:space-x-8 mb-6 sm:mb-8">
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
                  className={`inline-block w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r ${gradient} rounded-full p-1`}
                >
                  <Icon className="w-full h-full fill-current text-white" />
                </span>
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent text-sm sm:text-base">
                  {count}
                </span>
              </div>
            ))}
          </div>

          {/* Comments */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
              Comments
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start bg-gradient-to-r from-blue-50 to-purple-50 p-3 sm:p-4 rounded-2xl">
                <img
                  src="/profile2.jpg"
                  alt=""
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full mr-2 sm:mr-3"
                />
                <p className="text-gray-700 text-sm sm:text-base">
                  Keeping up with AI trends is tough but so important!
                </p>
              </div>
              <div className="flex items-start bg-gradient-to-r from-blue-50 to-purple-50 p-3 sm:p-4 rounded-2xl">
                <img
                  src="/profile3.jpg"
                  alt=""
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full mr-2 sm:mr-3"
                />
                <p className="text-gray-700 text-sm sm:text-base">
                  Generative AI is such an exciting area! Can anyone recommend
                  tools or platforms to experiment with it?
                </p>
              </div>
            </div>
            <textarea
              placeholder="Write a comment"
              className="mt-4 sm:mt-6 w-full h-20 sm:h-24 p-3 sm:p-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 text-gray-700 focus:ring-blue-300 text-sm sm:text-base"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupsFeed
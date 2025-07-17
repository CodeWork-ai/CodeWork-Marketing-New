import React from 'react'
import { 
  FaSearch, 
  FaQuestionCircle, 
  FaBook, 
  FaMobileAlt, 
  FaFolder,
  FaBullseye, // Changed from FaTarget
  FaChartBar,
  FaLightbulb,
  FaFileAlt,
  FaBolt,
  FaImage,
  FaGraduationCap,
  FaPalette,
  FaRobot,
  FaLink,
  FaUsers,
  FaCogs,
  FaCheckCircle,
  FaHeart
} from 'react-icons/fa'

function Hyperflexai() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
      <div className="container mx-auto px-8 lg:px-16 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Academic Search Engine
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hyperflx: The <span className="text-blue-600">Smarter Way</span> to Search for Academic Knowledge
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Why We Built Hyperflx
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Codework, we saw a gap in how students and researchers access reliable academic content. We built Hyperflx, an AI-powered search engine made specifically for education and research. It delivers trusted, easy-to-understand, and well-organized results to make learning smoother and faster.
              </p>
            </div>
          </div>
        </div>

        {/* Problems Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Struggles in Academic Search
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Overwhelming Search Results", desc: "Too many irrelevant links", icon: <FaSearch className="text-red-500" /> },
              { title: "Doubtful Sources", desc: "Hard to tell what's credible", icon: <FaQuestionCircle className="text-red-500" /> },
              { title: "Dense Terminology", desc: "Complex terms with no clear definitions", icon: <FaBook className="text-red-500" /> },
              { title: "Lack of Visuals", desc: "Few images or videos to simplify learning", icon: <FaMobileAlt className="text-red-500" /> },
              { title: "Unstructured Layouts", desc: "Cluttered content makes research harder", icon: <FaFolder className="text-red-500" /> }
            ].map((problem, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="text-3xl mb-4">{problem.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{problem.title}</h3>
                <p className="text-gray-600">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Images Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/CaseStudies/hyperfleex.jpg"
                alt="Person using Hyperflx for academic search"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Smart Academic Search</h3>
                <p className="text-sm opacity-90">AI-powered research made simple</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/CaseStudies/hyperflx2.jpg"
                alt="Hyperflx displaying academic media results"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Visual Learning</h3>
                <p className="text-sm opacity-90">Rich media for better understanding</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Our Strategy */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <FaBullseye className="text-white text-xl" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Smarter Search Strategy</h3>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg">
                Hyperflx is built to solve those problems using a focused, AI-driven approach:
              </p>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-gray-700">
                    <span className="font-semibold text-blue-700">AI-Powered Responses:</span> Hyperflx utilizes LLMs to generate answers and responses based on training data. Unlike platforms such as PerplexCity, it does not source its information from the web in real-time. However, it does gather images and videos from online sources for visual content generation.
                  </p>
                </div>
                
                {[
                  { title: "Visual Support", desc: "Includes educational images and videos to aid understanding", icon: <FaChartBar className="text-blue-500" /> },
                  { title: "Instant Definitions", desc: "Explains complex academic terms clearly", icon: <FaLightbulb className="text-blue-500" /> },
                  { title: "Summarized Concepts", desc: "Offers easy-to-read summaries for faster learning", icon: <FaFileAlt className="text-blue-500" /> }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unique Value */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 shadow-xl text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <FaHeart className="text-white text-xl" />
                </div>
                <h3 className="text-3xl font-bold">What Makes Our Tool Unique</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: "Distraction-Free Learning", desc: "No ads or unrelated links", icon: <FaBullseye className="text-purple-200" /> },
                  { title: "Simplified Research Experience", desc: "Get to the point quickly", icon: <FaBolt className="text-purple-200" /> },
                  { title: "Visual Learning Friendly", desc: "Diagrams and videos for a better grasp", icon: <FaImage className="text-purple-200" /> },
                  { title: "Academic Accuracy Guaranteed", desc: "Built for students and educators", icon: <FaGraduationCap className="text-purple-200" /> },
                  { title: "Clean and Easy Interface", desc: "Simple to search, read, and explore", icon: <FaPalette className="text-purple-200" /> }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-white/80">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Development Process
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                From Idea to Launch: How We Did It Fast
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {[
                { title: "Pre-trained Language Models", desc: "Saved time on training from scratch", icon: <FaRobot className="text-green-500" /> },
                { title: "API Integrations", desc: "Connected to real-time academic sources", icon: <FaLink className="text-green-500" /> },
                { title: "User Feedback Testing", desc: "Refined through real student/teacher input", icon: <FaUsers className="text-green-500" /> },
                { title: "CI/CD Automation", desc: "Enabled fast updates and scalable improvements", icon: <FaCogs className="text-green-500" /> }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                  <div className="text-4xl mb-4 flex justify-center">{item.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <p className="text-gray-700 text-lg">
                <span className="font-semibold text-green-700">Result:</span> It helped us launch ahead of schedule, without compromising quality.
              </p>
            </div>
          </div>
        </div>

        {/* Final Thoughts */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 shadow-2xl text-white">
            <h3 className="text-4xl font-bold mb-6">
              Final Thoughts: A Better Future for Learning
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8 text-blue-100">
              Hyperflx makes academic research smarter, simpler, and more student-friendly. It allows users to filter out irrelevant information, grasp complex concepts more quickly, and learn in a style that suits them best.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-lg font-medium">
                It's not just a search engine—it's a reliable learning partner built for the future of education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hyperflexai

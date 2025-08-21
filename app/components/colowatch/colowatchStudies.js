import React from 'react'
import { 
  FaStethoscope, 
  FaExclamationTriangle, 
  FaUnlink, 
  FaFrown, // Changed from FaStressedOut
  FaFileAlt,
  FaComments,
  FaCogs,
  FaLanguage,
  FaGlobe,
  FaBook,
  FaChartBar,
  FaEye,
  FaHandPaper,
  FaHandshake,
  FaCheckCircle,
  FaBrain,
  FaRobot,
  FaMicrophone,
  FaPalette,
  FaChartLine,
  FaQuestionCircle,
  FaUserMd,
  FaHeart
} from 'react-icons/fa'

function ColowatchStudies() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
      <div className="container mx-auto  pt-10 px-8 lg:px-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Healthcare Communication
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Making Medical Reports <span className="text-blue-600">More Accessible</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Challenges Patients Face
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Deciphering medical reports can often be an overwhelming experience for patients. The use of technical and intricate medical terms can lead to:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: <FaExclamationTriangle className="text-red-500" />, text: "Confusion about their health and diagnosis" },
                  { icon: <FaUnlink className="text-red-500" />, text: "A sense of disconnection from their healthcare journey" },
                  { icon: <FaFrown className="text-red-500" />, text: "Rising stress and anxiety" }
                ].map((item, index) => (  
                  <div key={index} className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-medium text-gray-800">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/CaseStudies/colon2.jpg"
                alt="Medical professional reviewing complex medical reports"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Complex Medical Reports</h3>
                <p className="text-sm opacity-90">Traditional reports with technical jargon</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/CaseStudies/colonScan.jpg"
                alt="Simplified medical report interface with visual aids"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Simplified Communication</h3>
                <p className="text-sm opacity-90">Clear, patient-friendly explanations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* How It Works */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <FaCogs className="text-white text-xl" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">How It Works</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { 
                    title: "Simple Language Translation", 
                    desc: "Converts medical jargon into language that patients can grasp without needing a medical degree", 
                    icon: <FaComments className="text-blue-500" />
                  },
                  { 
                    title: "Visual Diagrams", 
                    desc: "Illustrative diagrams that simplify complex medical concepts", 
                    icon: <FaChartBar className="text-blue-500" />
                  },
                  { 
                    title: "Multilingual Support", 
                    desc: "Language support for diverse patient populations", 
                    icon: <FaGlobe className="text-blue-500" />
                  },
                  { 
                    title: "Contextual Definitions", 
                    desc: "Provides clear explanations to ensure complete understanding", 
                    icon: <FaBook className="text-blue-500" />
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Impact */}
            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 shadow-xl text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <FaHeart className="text-white text-xl" />
                </div>
                <h3 className="text-3xl font-bold">The Impact</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { 
                    title: "Accurate Translation", 
                    desc: "Translates medical jargon with impressive accuracy", 
                    icon: <FaCheckCircle className="text-green-200" />
                  },
                  { 
                    title: "Breaks Language Barriers", 
                    desc: "Overcomes communication barriers by offering multilingual support", 
                    icon: <FaLanguage className="text-green-200" />
                  },
                  { 
                    title: "Visual Learning", 
                    desc: "Improves comprehension through the power of visuals", 
                    icon: <FaEye className="text-green-200" />
                  },
                  { 
                    title: "Empowers Patients", 
                    desc: "Encourages patients to make confident and informed choices about their care", 
                    icon: <FaHandPaper className="text-green-200" />
                  },
                  { 
                    title: "Better Communication", 
                    desc: "Facilitates meaningful conversations between patients and healthcare professionals", 
                    icon: <FaHandshake className="text-green-200" />
                  }
                ].map((impact, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="text-2xl">{impact.icon}</span>
                    <div>
                      <h4 className="font-semibold mb-1">{impact.title}</h4>
                      <p className="text-white/80">{impact.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Technology Stack
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Powered by Advanced Healthcare Technology
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Natural Language Processing", desc: "Advanced NLP for medical text analysis", icon: <FaBrain className="text-purple-500" /> },
                { title: "Machine Learning", desc: "Trained on vast medical literature datasets", icon: <FaRobot className="text-purple-500" /> },
                { title: "Multi-language AI", desc: "Support for 50+ languages", icon: <FaMicrophone className="text-purple-500" /> },
                { title: "Visual Generation", desc: "AI-powered medical diagram creation", icon: <FaPalette className="text-purple-500" /> }
              ].map((tech, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                  <div className="text-4xl mb-4 flex justify-center">{tech.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-2">{tech.title}</h4>
                  <p className="text-gray-600 text-sm">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Measurable Healthcare Impact</h3>
              <p className="text-xl text-blue-100">Real results from healthcare providers using Radi Insight Scan</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { stat: "85%", label: "Improved patient comprehension", icon: <FaChartLine className="text-blue-200" /> },
                { stat: "70%", label: "Reduction in follow-up questions", icon: <FaQuestionCircle className="text-blue-200" /> },
                { stat: "50+", label: "Languages supported", icon: <FaGlobe className="text-blue-200" /> },
                { stat: "92%", label: "Healthcare provider satisfaction", icon: <FaUserMd className="text-blue-200" /> }
              ].map((result, index) => (
                <div key={index} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl mb-2 flex justify-center">{result.icon}</div>
                  <div className="text-3xl font-bold mb-2">{result.stat}</div>
                  <div className="text-sm text-blue-100">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-12 shadow-2xl text-white">
            <h3 className="text-4xl font-bold mb-6">
              Transforming Healthcare Communication
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8 text-green-100">
              Radi Insight Scan is revolutionizing how patients understand their medical reports, creating a bridge between complex medical terminology and patient comprehension.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-lg font-medium">
                Empowering patients with knowledge leads to better healthcare outcomes for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColowatchStudies

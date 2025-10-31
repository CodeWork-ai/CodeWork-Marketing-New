"use client";
import React from 'react'
import { 
  FaComments, 
  FaUserTie, 
  FaClock, 
  FaEyeSlash, 
  FaChartLine,
  FaBullseye,
  FaProjectDiagram,
  FaTasks,
  FaUserClock,
  FaCalculator,
  FaLock,
  FaChartBar,
  FaUsers,
  FaHandshake,
  FaFileInvoiceDollar,
  FaCogs,
  FaCheckCircle,
  FaRocket,
  FaPuzzlePiece,
  FaCommentDots,
  FaSyncAlt,
  FaHeart
} from 'react-icons/fa'

function EdubotAi() {
  return (
    <div className="relative bg-primary min-h-screen overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 md:w-40 md:h-40 bg-secondary/20 rounded-full"></div>
        <div className="absolute top-60 right-32 w-24 h-24 md:w-32 md:h-32 bg-secondary/15 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-36 h-36 md:w-48 md:h-48 bg-secondary/25 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 md:w-24 md:h-24 bg-secondary/10 rounded-full"></div>
        <div className="absolute top-3/4 left-1/4 w-28 h-28 bg-secondary/12 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-secondary/18 rounded-full"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-20 w-1 h-1 md:w-2 md:h-2 bg-white/60 rounded-full animate-bounce"></div>
        <div className="absolute bottom-56 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-secondary/80 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 md:w-2 md:h-2 bg-white/40 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        {/* Enhanced Hero Section */}
        <div className="text-center mb-16 py-12">
          <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm text-secondary px-6 py-3 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
            AI Powered Smart Learning Assistant
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Edubot: <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">AI Powered Smart</span> Learning Assistant
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-primary/50 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
              
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></span>
                Why We Built Edubot
              </h2>
              <p className="text-lg text-white/90 leading-relaxed text-justify">
                We noticed that many students struggle to stay motivated and organized while learning online. Traditional study tools often lack interaction, instant feedback, and personalization. We created <span className="text-secondary font-medium">Edubot</span> to bring the experience of a real tutor into a digital space. The system understands each learner's pace, adjusts lessons accordingly, and provides support whenever students need it.
              </p>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Problems Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Common Learning Challenges
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-transparent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Lack of Personal Guidance", desc: "Students often find it difficult to get quick help when stuck on a topic", icon: <FaComments className="text-secondary" /> },
              { title: "One Size Fits All Learning", desc: "Most platforms use the same materials for every student regardless of skill level", icon: <FaUserTie className="text-secondary" /> },
              { title: "Slow Feedback", desc: "Waiting too long for results reduces motivation and learning speed", icon: <FaClock className="text-secondary" /> },
              { title: "Unstructured Progress Tracking", desc: "Without clear progress reports, students cannot measure improvement effectively", icon: <FaEyeSlash className="text-secondary" /> },
              { title: "Limited Resource Discovery", desc: "Finding the right study materials takes time and effort", icon: <FaChartLine className="text-secondary" /> }
            ].map((problem, index) => (
              <div key={index} className="bg-primary/30 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-secondary/30 hover:bg-primary/40 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{problem.icon}</div>
                <h3 className="font-bold text-white mb-2">{problem.title}</h3>
                <p className="text-white/80">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Images Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/CaseStudies/Edubots1.jpg"
                alt="Edubot interactive learning interface"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
              <div className="absolute inset-0 rounded-3xl border-2 border-secondary/30 group-hover:border-secondary/50 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Interactive Chat Assistant</h3>
                <p className="text-sm opacity-90 text-secondary">Learn through conversation</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/CaseStudies/Edubots2.jpg"
                alt="Edubot personalized learning dashboard"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
              <div className="absolute inset-0 rounded-3xl border-2 border-secondary/30 group-hover:border-secondary/50 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Personalized Learning</h3>
                <p className="text-sm opacity-90 text-secondary">Adaptive study paths</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Our Strategy */}
            <div className="bg-primary/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-primary/50 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mr-4">
                  <FaBullseye className="text-primary text-xl" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Smarter Learning Solution</h3>
              </div>
              
              <p className="text-white/90 mb-6 text-lg">
                <span className="text-secondary font-medium">Edubot</span> uses Artificial Intelligence to deliver personalized lessons, quizzes, and study paths that grow with each student's needs. It acts as a personal tutor that listens, adapts, and teaches interactively:
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Interactive Chat Assistant", desc: "Students can ask questions on any topic and receive clear, easy to understand explanations through natural conversation, just like chatting with a tutor", icon: <FaProjectDiagram className="text-secondary" /> },
                  { title: "Smart Quiz System", desc: "The platform generates customized quizzes that match the student's learning level. It adjusts difficulty and grades responses automatically", icon: <FaTasks className="text-secondary" /> },
                  { title: "Learning Resource Finder", desc: "When students want to explore new subjects, Edubot recommends relevant articles, videos, and resources aligned with their goals", icon: <FaUserClock className="text-secondary" /> },
                  { title: "Personalized Learning Roadmaps", desc: "AI creates detailed, step by step study plans for each learner, identifying strengths and weaknesses for focused improvement", icon: <FaCalculator className="text-secondary" /> }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white">{feature.title}</h4>
                      <p className="text-white/80">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
            </div>

            {/* Unique Value */}
            <div className="bg-gradient-to-br from-secondary/80 to-secondary rounded-3xl p-8 shadow-2xl text-primary relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mr-4">
                  <FaHeart className="text-primary text-xl" />
                </div>
                <h3 className="text-3xl font-bold">What Makes Edubot Unique</h3>
              </div>
              
              <div className="space-y-4 relative z-10">
                {[
                  { title: "AI Driven Tutoring", desc: "Personalized, real time assistance for every student", icon: <FaLock className="text-primary" /> },
                  { title: "Adaptive Learning Paths", desc: "Lessons evolve with individual progress", icon: <FaChartBar className="text-primary" /> },
                  { title: "Smart Assessments", desc: "Quizzes and exercises designed for continuous evaluation", icon: <FaClock className="text-primary" /> },
                  { title: "Dynamic Resource Curation", desc: "Finds the right content for every learning goal", icon: <FaHandshake className="text-primary" /> },
                  { title: "Conversational Learning", desc: "Encourages active engagement through natural dialogue", icon: <FaFileInvoiceDollar className="text-primary" /> },
                  { title: "Progress Transparency", desc: "Visual reports that clearly show growth and milestones", icon: <FaChartLine className="text-primary" /> }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-primary/10 transition-colors group">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-primary/80">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Development Process */}
        <div className="mb-20">
          <div className="bg-primary/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm text-secondary px-6 py-3 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
                Key Features
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Intelligent Learning Experience
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {[
                { title: "Instant Feedback", desc: "Students receive immediate responses to quizzes and exercises, allowing them to understand mistakes quickly", icon: <FaPuzzlePiece className="text-secondary" /> },
                { title: "Adaptive Learning", desc: "The system continually adjusts content difficulty based on student performance", icon: <FaCogs className="text-secondary" /> },
                { title: "Progress Monitoring", desc: "Tracks each learner's improvement over time and highlights topics needing extra attention", icon: <FaCommentDots className="text-secondary" /> },
                { title: "Resource Discovery", desc: "Automatically finds and recommends relevant study materials for each learning goal", icon: <FaSyncAlt className="text-secondary" /> }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-secondary/30 group">
                  <div className="text-4xl mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
          </div>
        </div>

        {/* Enhanced Final Thoughts */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-secondary/90 to-secondary rounded-3xl p-12 shadow-2xl text-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
            
            <h3 className="text-4xl font-bold mb-6 relative z-10">
              The Future of Learning
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8 text-primary/90 relative z-10">
              <span className="font-medium">Edubot</span> transforms education into an interactive, data driven experience where every student learns at their own pace. It provides personalized guidance, real time support, and measurable progress tracking to help learners stay motivated and confident.
            </p>
            <div className="bg-primary/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto relative z-10 border border-primary/30">
              <p className="text-lg font-medium">
                It's not just a learning platform — It's your intelligent study companion for academic success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-6px) rotate(2deg); }
          66% { transform: translateY(-3px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default EdubotAi;

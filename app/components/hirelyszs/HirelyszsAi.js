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

function HirelyszsAi() {
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
            Intelligent AI Interview Platform
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Hirelysze: <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">Intelligent AI</span> Interview Platform
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-primary/50 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
              
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></span>
                Why We Built Hirelysze
              </h2>
              <p className="text-lg text-white/90 leading-relaxed text-justify">
                We noticed that traditional interviews often consume too much time and lack consistency. Recruiters struggle to manage large volumes of applications, while candidates experience delayed feedback and subjective evaluations. We built <span className="text-secondary font-medium">Hirelysze</span> to address these gaps. It is designed to make interviews <span className="text-secondary font-medium">faster, more accurate, and bias free</span> by simulating human like conversations powered by AI and 3D technology. The goal is simple: to help recruiters find the right talent with speed and confidence.
              </p>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Problems Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Common Challenges in Recruitment Interviews
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-transparent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Time Intensive Screening", desc: "Recruiters spend hours conducting repetitive first round interviews", icon: <FaComments className="text-secondary" /> },
              { title: "Inconsistent Evaluation", desc: "Each interviewer assesses candidates differently, creating uneven results", icon: <FaUserTie className="text-secondary" /> },
              { title: "Scheduling Difficulties", desc: "Coordinating times between candidates and interviewers is often complicated", icon: <FaClock className="text-secondary" /> },
              { title: "Limited Insights", desc: "Traditional interviews rarely provide behavioral or emotional analysis", icon: <FaEyeSlash className="text-secondary" /> }
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
                src="/CaseStudies/Hirelyss1.jpg"
                alt="Hirelysze AI interview platform interface"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
              <div className="absolute inset-0 rounded-3xl border-2 border-secondary/30 group-hover:border-secondary/50 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">3D Virtual Interviewer</h3>
                <p className="text-sm opacity-90 text-secondary">Lifelike AI-powered conversations</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/CaseStudies/Hirelyss.jpg"
                alt="Hirelysze recruiter dashboard"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
              <div className="absolute inset-0 rounded-3xl border-2 border-secondary/30 group-hover:border-secondary/50 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Real-Time Analytics</h3>
                <p className="text-sm opacity-90 text-secondary">Data driven candidate insights</p>
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
                <h3 className="text-3xl font-bold text-white">Our Smarter Interview Solution</h3>
              </div>
              
              <p className="text-white/90 mb-6 text-lg">
                <span className="text-secondary font-medium">Hirelysze</span> simplifies the recruitment process with an intelligent AI interviewer, a 3D virtual environment, and a real time analytics dashboard. It streamlines the interview flow for recruiters and provides an engaging experience for candidates:
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "AI Interviewer", desc: "Conducts structured and conversational interviews using Natural Language Processing. Adjusts questions based on candidate responses and supports voice interactions", icon: <FaProjectDiagram className="text-secondary" /> },
                  { title: "3D Virtual Interviewer", desc: "A lifelike 3D model acts as the interviewer avatar. AI synchronizes facial expressions, gestures, and lip movements with customizable appearance", icon: <FaTasks className="text-secondary" /> },
                  { title: "Real Time Analysis", desc: "Evaluates tone, fluency, and clarity using speech recognition. Detects engagement through TensorFlow and FaceAPI with detailed performance scoring", icon: <FaUserClock className="text-secondary" /> },
                  { title: "Recruiter Dashboard", desc: "Centralized platform to manage candidates with custom filters for role, AI score, emotional analysis, and skill match with visual reports", icon: <FaCalculator className="text-secondary" /> }
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
                <h3 className="text-3xl font-bold">What Makes Hirelysze Unique</h3>
              </div>
              
              <div className="space-y-4 relative z-10">
                {[
                  { title: "Efficiency", desc: "Automates and accelerates early stage interviews", icon: <FaLock className="text-primary" /> },
                  { title: "Consistency", desc: "Delivers objective and uniform evaluations across all candidates", icon: <FaChartBar className="text-primary" /> },
                  { title: "Scalability", desc: "Handles hundreds of interviews simultaneously", icon: <FaClock className="text-primary" /> },
                  { title: "Candidate Experience", desc: "Provides an engaging, personalized, and realistic interview experience", icon: <FaHandshake className="text-primary" /> },
                  { title: "Bias Reduction", desc: "Uses AI evaluation instead of human subjectivity", icon: <FaFileInvoiceDollar className="text-primary" /> },
                  { title: "Deep Insights", desc: "Combines TensorFlow and FaceAPI to deliver behavioral and emotional intelligence", icon: <FaChartLine className="text-primary" /> }
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
                Development Process
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                From Concept to Intelligent Interviewing
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {[
                { title: "AI and ML Integration", desc: "Integrated advanced NLP and TensorFlow models for real time voice and expression analysis", icon: <FaPuzzlePiece className="text-secondary" /> },
                { title: "3D Modeling and Animation", desc: "Developed lifelike avatars with synchronized movements and expressions", icon: <FaCogs className="text-secondary" /> },
                { title: "API Connectivity", desc: "Enabled smooth integration with HR and ATS systems", icon: <FaCommentDots className="text-secondary" /> },
                { title: "Testing and Feedback", desc: "Improved the platform using feedback from recruiters and HR professionals", icon: <FaSyncAlt className="text-secondary" /> }
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
              The Future of AI Interviews
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8 text-primary/90 relative z-10">
              <span className="font-medium">Hirelysze</span> redefines recruitment by combining AI intelligence, emotional analytics, and 3D simulation to create a fair and immersive interview process. It transforms candidate evaluation into a data driven experience that saves time and improves accuracy.
            </p>
            <div className="bg-primary/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto relative z-10 border border-primary/30">
              <p className="text-lg font-medium">
               Faster screening, consistent results, and an immersive interview experience for every candidate.
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

export default HirelyszsAi;

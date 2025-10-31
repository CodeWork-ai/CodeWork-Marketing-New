"use client";
import React from 'react'
import { 
  FaVideo, 
  FaUserShield, 
  FaClock, 
  FaEyeSlash, 
  FaChartLine,
  FaBullseye,
  FaLaptopCode,
  FaTasks,
  FaUserClock,
  FaShieldAlt,
  FaLock,
  FaChartBar,
  FaUsers,
  FaEnvelope,
  FaBell,
  FaCogs,
  FaCheckCircle,
  FaCamera,
  FaPuzzlePiece,
  FaClipboardCheck,
  FaSyncAlt,
  FaHeart
} from 'react-icons/fa'



function HirelensAi() {
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
            Secure Online Interview and Exam Proctoring
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            HireLens: <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">Secure Online</span> Interview and Exam Proctoring
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-primary/50 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
              
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></span>
                Why We Built HireLens
              </h2>
              <p className="text-lg text-white/90 leading-relaxed text-justify">
                Many organizations struggle to run reliable remote assessments. Scheduling conflicts, manual monitoring, inconsistent evaluations, and risk of malpractice make remote hiring stressful for recruiters and candidates. We built <span className="text-secondary font-medium">HireLens</span> to provide a secure, scalable, and automated way to run remote interviews and exams. The platform reduces manual effort, improves transparency, and protects exam integrity.
              </p>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
            </div>
          </div>
        </div>



        {/* Enhanced Problems Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Common Recruitment and Exam Challenges
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-transparent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Manual Review Bottlenecks", desc: "Large candidate volumes create manual review bottlenecks", icon: <FaUsers className="text-secondary" /> },
              { title: "Scheduling Conflicts", desc: "Coordinating schedules for live interviews is time consuming", icon: <FaClock className="text-secondary" /> },
              { title: "Exam Integrity Risks", desc: "Remote tests risk integrity issues without continuous monitoring", icon: <FaEyeSlash className="text-secondary" /> },
              { title: "Unstructured Data", desc: "Unstructured data and missing logs make audits difficult", icon: <FaChartLine className="text-secondary" /> },
              { title: "Poor Communication", desc: "Poor candidate communication harms the employer brand", icon: <FaEnvelope className="text-secondary" /> }
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
                src="/CaseStudies/Hirelans1.jpg"
                alt="HireLens proctoring interface"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
              <div className="absolute inset-0 rounded-3xl border-2 border-secondary/30 group-hover:border-secondary/50 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Camera Monitoring</h3>
                <p className="text-sm opacity-90 text-secondary">Continuous candidate visibility</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/CaseStudies/Hirelans2.jpg"
                alt="HireLens exam management view"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
              <div className="absolute inset-0 rounded-3xl border-2 border-secondary/30 group-hover:border-secondary/50 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Real-Time Detection</h3>
                <p className="text-sm opacity-90 text-secondary">Automated malpractice alerts</p>
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
                <h3 className="text-3xl font-bold text-white">Our Smarter Proctoring Solution</h3>
              </div>
              
              <p className="text-white/90 mb-6 text-lg">
                <span className="text-secondary font-medium">HireLens</span> combines camera based monitoring, behavior detection, and centralized reporting in a unified platform. It automates exam creation, delivers secure access with unique exam codes, detects suspicious behavior in real time, and produces clear reports for recruiter review.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "HR Team Control", desc: "Creates and schedules exams, receives unique exam codes, monitors candidate performance and reviews flagged activity", icon: <FaUserShield className="text-secondary" /> },
                  { title: "Automated Notifications", desc: "System sends exam codes to candidates automatically and notifies both HR and candidates", icon: <FaBell className="text-secondary" /> },
                  { title: "Candidate Workspace", desc: "Candidates join using exam codes, keep camera on during entire exam, and complete tests while system logs activity", icon: <FaLaptopCode className="text-secondary" /> },
                  { title: "Real-Time Detection", desc: "Automatically flags face not visible, tab switching, and multiple faces with instant logging", icon: <FaCamera className="text-secondary" /> }
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
                <h3 className="text-3xl font-bold">What Makes HireLens Unique</h3>
              </div>
              
              <div className="space-y-4 relative z-10">
                {[
                  { title: "Camera Based Monitoring", desc: "Continuous video to ensure candidate visibility throughout the exam", icon: <FaVideo className="text-primary" /> },
                  { title: "Malpractice Detection", desc: "Automatically flags or blocks cheating candidates in real time", icon: <FaShieldAlt className="text-primary" /> },
                  { title: "Secure Access Control", desc: "Unique exam codes for each test session with encrypted data", icon: <FaLock className="text-primary" /> },
                  { title: "Activity Reports", desc: "HR can view logs for all exams and flagged candidates instantly", icon: <FaChartBar className="text-primary" /> },
                  { title: "Scalable Architecture", desc: "Supports large candidate volumes and concurrent sessions", icon: <FaCogs className="text-primary" /> }
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
                Core Features
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Built for Security and Scalability
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {[
                { title: "Exam Creation", desc: "Online exam creation with notifications enabling HR to create and manage tests", icon: <FaTasks className="text-secondary" /> },
                { title: "Real-Time Logging", desc: "Tracks tab changes, key presses, and behavior events instantly", icon: <FaSyncAlt className="text-secondary" /> },
                { title: "Encrypted Security", desc: "All candidate data encrypted during transmission and at rest", icon: <FaLock className="text-secondary" /> },
                { title: "Audit Reports", desc: "Detailed logs and reports support compliance and review", icon: <FaClipboardCheck className="text-secondary" /> }
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
               Secure Remote Hiring, Trusted Assessment
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8 text-primary/90 relative z-10">
              <span className="font-medium">HireLens</span> provides a modern, secure, and intelligent way to manage online interviews and exams during hiring. By combining automation, monitoring, and reporting, it ensures organizations can confidently assess candidates remotely without compromising exam integrity.
            </p>
            <div className="bg-primary/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto relative z-10 border border-primary/30">
              <p className="text-lg font-medium">
                It's not just a proctoring tool — It's a secure platform for trusted remote hiring.
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



export default HirelensAi;

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


function WorklogixAi() {
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
            Task and Team Management Platform
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            WorkLogix: <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">Smarter Task</span> and Team Management
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-primary/50 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
              
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></span>
                Why We Built WorkLogix
              </h2>
              <p className="text-lg text-white/90 leading-relaxed text-justify">
  At <span className="text-secondary font-medium">Codework</span>, we saw how organizations struggle with scattered communication, missed deadlines, and unclear accountability. So, we built <span className="text-secondary font-medium">WorkLogix</span> — a web-based platform that brings leadership, managers, and employees together in one streamlined workspace. WorkLogix helps companies assign, monitor, and complete projects efficiently while giving leaders full visibility across teams.
</p>

              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
            </div>
          </div>
        </div>


        {/* Enhanced Problems Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Common Workplace Challenges
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-transparent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Scattered Communication", desc: "Too many chats, emails, and spreadsheets cause confusion", icon: <FaComments className="text-secondary" /> },
              { title: "Unclear Responsibilities", desc: "Employees often don't know who's accountable for what", icon: <FaUserTie className="text-secondary" /> },
              { title: "Manual Tracking", desc: "Leaders spend hours tracking progress and hours worked", icon: <FaClock className="text-secondary" /> },
              { title: "Lack of Transparency", desc: "Teams miss updates or duplicate efforts", icon: <FaEyeSlash className="text-secondary" /> },
              { title: "Limited Insights", desc: "Without real-time data, it's hard to make informed decisions", icon: <FaChartLine className="text-secondary" /> }
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
                src="/CaseStudies/worklog1.jpg"
                alt="WorkLogix dashboard interface"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
              <div className="absolute inset-0 rounded-3xl border-2 border-secondary/30 group-hover:border-secondary/50 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Unified Workspace</h3>
                <p className="text-sm opacity-90 text-secondary">All teams in one platform</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/CaseStudies/working.jpg"
                alt="WorkLogix project management view"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
              <div className="absolute inset-0 rounded-3xl border-2 border-secondary/30 group-hover:border-secondary/50 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Real-Time Tracking</h3>
                <p className="text-sm opacity-90 text-secondary">Monitor progress instantly</p>
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
                <h3 className="text-3xl font-bold text-white">Our Smarter Workflow Solution</h3>
              </div>
              
              <p className="text-white/90 mb-6 text-lg">
                <span className="text-secondary font-medium">WorkLogix</span> is designed to solve these issues with role-based access and structured workflows for every level of your organization:
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Leadership Dashboard", desc: "Oversee organization-wide performance, assign projects to managers, and monitor progress instantly", icon: <FaProjectDiagram className="text-secondary" /> },
                  { title: "Project Manager Control", desc: "Create and manage projects, assign tasks to employees, and ensure timely completion through live progress tracking", icon: <FaTasks className="text-secondary" /> },
                  { title: "Employee Workspace", desc: "View assigned tasks, update status, and log working hours seamlessly", icon: <FaUserClock className="text-secondary" /> },
                  { title: "Accountant Console", desc: "Track project costs, manage rates, and generate financial reports with ease", icon: <FaCalculator className="text-secondary" /> }
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
                <h3 className="text-3xl font-bold">What Makes WorkLogix Unique</h3>
              </div>
              
              <div className="space-y-4 relative z-10">
                {[
                  { title: "Role-Based Access Control", desc: "Every team member sees what matters most to their role", icon: <FaLock className="text-primary" /> },
                  { title: "Visual Dashboards", desc: "Quick insights into projects, tasks, and team performance", icon: <FaChartBar className="text-primary" /> },
                  { title: "Smart Time Tracking", desc: "Monitor work hours and task completion for better accountability", icon: <FaClock className="text-primary" /> },
                  { title: "Collaborative Task Management", desc: "Keep communication transparent across teams and departments", icon: <FaHandshake className="text-primary" /> },
                  { title: "Performance Insights", desc: "Real-time data helps leaders make informed, faster decisions", icon: <FaFileInvoiceDollar className="text-primary" /> }
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
                How We Built It Fast and Scalable
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {[
                { title: "Modular Architecture", desc: "Built with flexibility to scale across multiple departments", icon: <FaPuzzlePiece className="text-secondary" /> },
                { title: "API Integrations", desc: "Connects seamlessly with HR, finance, and communication tools", icon: <FaCogs className="text-secondary" /> },
                { title: "User-Centric Testing", desc: "Refined with feedback from project managers and employees", icon: <FaCommentDots className="text-secondary" /> },
                { title: "Automated Reporting", desc: "Generates visual reports for productivity and time tracking", icon: <FaSyncAlt className="text-secondary" /> }
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
              Simpler Management, Smarter Teams
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8 text-primary/90 relative z-10">
              <span className="font-medium">WorkLogix</span> helps organizations stay on top of projects without the chaos. With clear roles, instant reporting, and transparent collaboration — leadership gains control, managers gain clarity, and employees stay focused.
            </p>
            <div className="bg-primary/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto relative z-10 border border-primary/30">
              <p className="text-lg font-medium">
                It's not just a project tracker — It's your intelligent partner for productive teamwork.
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


export default WorklogixAi;

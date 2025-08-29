"use client"
import React from 'react'
import { 
  FaGraduationCap, 
  FaLaptopCode, 
  FaBriefcase, 
  FaBrain, 
  FaAward,
  FaBook,
  FaCode,
  FaChartLine,
  FaTrophy,
  FaGitAlt,
  FaComments,
  FaShieldAlt,
  FaStar,
  FaCheckCircle,
  FaUsers,
  FaDatabase
} from 'react-icons/fa'

const CourseContent = () => {
  return (
    <>
      {/* Enhanced Program Objectives */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full animate-blob"></div>
          <div className="absolute top-60 right-32 w-32 h-32 bg-secondary/15 rounded-full animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/10 rounded-full animate-blob animation-delay-1000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-16 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
          <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-56 left-1/4 w-4 h-4 bg-secondary/80 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-3000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            {/* Enhanced Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-full mb-8 shadow-2xl shadow-secondary/25 animate-float">
              <FaGraduationCap className="w-8 h-8 text-primary" />
            </div>

            {/* Enhanced Title */}
            <h2 className="text-4xl font-bold mb-4 animate-slide-up">
              <span className="text-white">Program </span>
              <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                Objectives
              </span>
            </h2>
            
            <div className="relative animate-slide-up animation-delay-200">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-16 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></div>
              <p className="text-xl text-white/90 max-w-4xl mx-auto font-light">
                Bridge the gap between academic learning and <span className="text-secondary font-medium">industry expectations</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaLaptopCode className="w-10 h-10" />,
                title: "Industry-Ready Skills",
                description: "Equip students with technical skills demanded by the industry"
              },
              {
                icon: <FaBriefcase className="w-10 h-10" />,
                title: "Professional Exposure",
                description: "Foster early professional exposure and workplace readiness"
              },
              {
                icon: <FaBrain className="w-10 h-10" />,
                title: "Innovation & Creativity",
                description: "Encourage innovation, self-learning, and creative problem-solving"
              },
              {
                icon: <FaAward className="w-10 h-10" />,
                title: "Career Certification",
                description: "Provide certifications that boost academic and career prospects"
              }
            ].map((objective, index) => (
              <div 
                key={index} 
                className="group bg-primary/30 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/25 animate-card-float"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-secondary/25">
                  <div className="text-primary">{objective.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-secondary transition-colors duration-300">
                  {objective.title}
                </h3>
                <p className="text-white/80 leading-relaxed">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Course Structure */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 right-40 w-32 h-32 bg-secondary/20 rounded-full animate-blob animation-delay-1000"></div>
          <div className="absolute bottom-40 left-40 w-24 h-24 bg-secondary/15 rounded-full animate-blob animation-delay-3000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            {/* Enhanced Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-full mb-8 shadow-2xl shadow-secondary/25 animate-float animation-delay-500">
              <FaBook className="w-8 h-8 text-primary" />
            </div>

            {/* Enhanced Title */}
            <h2 className="text-4xl font-bold mb-4 animate-slide-up">
              <span className="text-white">9-Module </span>
              <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                AI Course Structure
              </span>
            </h2>

            <div className="relative animate-slide-up animation-delay-200">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-16 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></div>
              <p className="text-xl text-white/90 font-light">
                Comprehensive curriculum designed for <span className="text-secondary font-medium">deep AI understanding</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { module: "Module 1", title: "Foundations of AI and Programming", icon: <FaCode className="w-8 h-8" /> },
              { module: "Module 2", title: "Core Machine Learning Algorithms", icon: <FaBrain className="w-8 h-8" /> },
              { module: "Module 3", title: "Data Preprocessing & Visualization", icon: <FaChartLine className="w-8 h-8" /> },
              { module: "Module 4", title: "Mini Capstone Project", icon: <FaTrophy className="w-8 h-8" /> },
              { module: "Module 5", title: "Deep Learning & Neural Networks", icon: <FaGitAlt className="w-8 h-8" /> },
              { module: "Module 6", title: "Natural Language Processing (NLP)", icon: <FaComments className="w-8 h-8" /> },
              { module: "Module 7", title: "AI Project Development Cycle", icon: <FaBook className="w-8 h-8" /> },
              { module: "Module 8", title: "Ethics in AI & Industry Practices", icon: <FaShieldAlt className="w-8 h-8" /> },
              { module: "Module 9", title: "Final Capstone Project", icon: <FaAward className="w-8 h-8" /> }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group bg-primary/30 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-primary/40 hover:border-secondary/30 hover:shadow-2xl hover:shadow-secondary/25 transition-all duration-500 transform hover:-translate-y-2 animate-card-float"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-secondary/25">
                    <div className="text-primary">{item.icon}</div>
                  </div>
                  <span className="text-sm font-bold bg-secondary/20 backdrop-blur-sm text-secondary px-4 py-2 rounded-full border border-secondary/30">
                    {item.module}
                  </span>
                </div>
                <h3 className="font-bold text-white text-lg leading-relaxed group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Key Benefits */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Enhanced Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231ddfea' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-32 left-32 w-36 h-36 bg-secondary/20 rounded-full animate-blob"></div>
          <div className="absolute bottom-32 right-32 w-28 h-28 bg-secondary/15 rounded-full animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-secondary/25 rounded-full animate-blob animation-delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            {/* Enhanced Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 backdrop-blur-xl rounded-full mb-8 border border-secondary/30 shadow-2xl shadow-secondary/25 animate-float animation-delay-300">
              <FaStar className="w-8 h-8 text-secondary" />
            </div>

            {/* Enhanced Title */}
            <h2 className="text-4xl font-bold mb-4 text-white animate-slide-up">
              <span className="text-white">Key Benefits of Our </span>
              <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                Course
              </span>
            </h2>

            <div className="relative animate-slide-up animation-delay-200">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-16 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></div>
              <p className="text-xl text-white/90 font-light">
                Everything you need for a <span className="text-secondary font-medium">successful AI career</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCheckCircle className="w-10 h-10" />,
                title: "Regular Assessments",
                description: "Track progress through evaluations, quizzes, and module-based tests"
              },
              {
                icon: <FaCode className="w-10 h-10" />,
                title: "Hands-on Training",
                description: "Live coding, project development, and real-time AI problem-solving"
              },
              {
                icon: <FaBook className="w-10 h-10" />,
                title: "Quality Study Materials",
                description: "Premium content, eBooks, coding resources, and curated AI materials"
              },
              {
                icon: <FaBriefcase className="w-10 h-10" />,
                title: "Paid Internship",
                description: "Eligible students receive stipend-based internship opportunities"
              },
              {
                icon: <FaUsers className="w-10 h-10" />,
                title: "Modern Infrastructure",
                description: "Tech-enabled, modern learning environment for productivity"
              },
              {
                icon: <FaDatabase className="w-10 h-10" />,
                title: "Real-Time Projects",
                description: "Work with actual project datasets and real-world scenarios"
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="group bg-primary/30 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/25 animate-card-float"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 border border-secondary/30 shadow-lg shadow-secondary/25">
                  <div className="text-secondary">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-secondary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-white/80 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardFloat {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .animate-card-float {
          animation: cardFloat 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  )
}

export default CourseContent

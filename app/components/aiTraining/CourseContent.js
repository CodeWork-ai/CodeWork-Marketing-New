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
      {/* Program Objectives */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8">
              <FaGraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Program Objectives
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
              Bridge the gap between academic learning and industry expectations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaLaptopCode className="w-10 h-10" />,
                title: "Industry-Ready Skills",
                description: "Equip students with technical skills demanded by the industry",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: <FaBriefcase className="w-10 h-10" />,
                title: "Professional Exposure",
                description: "Foster early professional exposure and workplace readiness",
                gradient: "from-purple-500 to-indigo-500"
              },
              {
                icon: <FaBrain className="w-10 h-10" />,
                title: "Innovation & Creativity",
                description: "Encourage innovation, self-learning, and creative problem-solving",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                icon: <FaAward className="w-10 h-10" />,
                title: "Career Certification",
                description: "Provide certifications that boost academic and career prospects",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((objective, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${objective.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{objective.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{objective.title}</h3>
                <p className="text-gray-600 leading-relaxed">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-20 bg-gradient-to-r from-white via-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8">
              <FaBook className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              9-Module AI Course Structure
            </h2>
            <p className="text-xl text-gray-600 font-light">Comprehensive curriculum designed for deep AI understanding</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { module: "Module 1", title: "Foundations of AI and Programming", icon: <FaCode className="w-8 h-8" />, gradient: "from-blue-500 to-cyan-500" },
              { module: "Module 2", title: "Core Machine Learning Algorithms", icon: <FaBrain className="w-8 h-8" />, gradient: "from-purple-500 to-indigo-500" },
              { module: "Module 3", title: "Data Preprocessing & Visualization", icon: <FaChartLine className="w-8 h-8" />, gradient: "from-green-500 to-emerald-500" },
              { module: "Module 4", title: "Mini Capstone Project", icon: <FaTrophy className="w-8 h-8" />, gradient: "from-yellow-500 to-orange-500" },
              { module: "Module 5", title: "Deep Learning & Neural Networks", icon: <FaGitAlt className="w-8 h-8" />, gradient: "from-pink-500 to-rose-500" },
              { module: "Module 6", title: "Natural Language Processing (NLP)", icon: <FaComments className="w-8 h-8" />, gradient: "from-indigo-500 to-blue-500" },
              { module: "Module 7", title: "AI Project Development Cycle", icon: <FaBook className="w-8 h-8" />, gradient: "from-purple-500 to-pink-500" },
              { module: "Module 8", title: "Ethics in AI & Industry Practices", icon: <FaShieldAlt className="w-8 h-8" />, gradient: "from-teal-500 to-cyan-500" },
              { module: "Module 9", title: "Final Capstone Project", icon: <FaAward className="w-8 h-8" />, gradient: "from-rose-500 to-pink-500" }
            ].map((item, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${item.gradient} rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <span className={`text-sm font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent px-4 py-2 rounded-full border border-gray-200`}>
                    {item.module}
                  </span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg leading-relaxed">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30">
              <FaStar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white">Key Benefits of Our Course</h2>
            <p className="text-xl text-blue-100 font-light">Everything you need for a successful AI career</p>
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
              <div key={index} className="group bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CourseContent

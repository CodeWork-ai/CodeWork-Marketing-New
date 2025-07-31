import React from 'react'
import { 
  FaChartLine,
  FaGraduationCap,
  FaTrophy,
  FaStar,
  FaHandshake,
  FaAward,
  FaBriefcase,
  FaUsers,
  FaRocket,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaBook
} from 'react-icons/fa'

const PricingAndContact = () => {
  const placementPartners = [
    {  logo: "/client/webSign.png" },
    { logo: "/client/sparksGlobal.svg" },
    {  logo: "/client/webSign.png" },
    {  logo: "/client/intulogic.svg" },
    {  logo: "/client/aikyne.svg" },
    {  logo: "/client/nalam.svg" },
    {  logo: "/client/storefries.svg" },
    {  logo: "/client/mtm.svg" },
  ];

  return (
    <>
      
      {/* Placements */}
      <section className="py-20 bg-gradient-to-r from-white via-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8">
              <FaHandshake className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Placement Guarantee
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
              Guaranteed placement assistance for students scoring 85% and above in final assessments
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl mb-16 border border-green-200">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
                <FaAward className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">100% Placement Assistance</h3>
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
                Graduates receive dedicated placement assistance with opportunities across top tech companies 
                and client projects. We connect skilled talent to real-world roles in AI, Data Science, and 
                Machine Learning.
              </p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Our Key Placement Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {placementPartners.map((partner, index) => (
                <div
                  key={index}
                  className=""
                >
                  <div className="flex items-center justify-center mb-3">
                    <img
                      src={partner.logo}
                      alt={(partner.name || "Partner") + " logo"}
                      className="w-64 h-64 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30">
              <FaUsers className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-10 text-white">Expert Mentorship</h2>
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20">
              <p className="text-xl leading-relaxed mb-8 text-white font-light">
                At the heart of our AI learning journey is a team of experienced and friendly mentors 
                who actively work on expert-level AI projects across the globe. These professionals 
                bring real-world insights straight from the field, offering not just theoretical 
                knowledge but hands-on expertise.
              </p>
              <p className="text-purple-100 text-lg">
                Their mentorship is clear, practical, and supportive—helping you build confidence 
                and real-world AI skills at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30">
              <FaRocket className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
            <p className="text-xl text-gray-300 font-light">Enroll now and transform your career with practical AI skills</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20">
                <h3 className="text-3xl font-bold mb-8 flex items-center">
                  <FaPhone className="mr-4 text-blue-400" />
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <FaEnvelope className="w-6 h-6 text-blue-400 mr-4" />
                    <div>
                      <p className="text-gray-300 mb-1">Email</p>
                      <p className="text-white font-semibold text-lg">hrindia@codework.ai</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="w-6 h-6 text-green-400 mr-4" />
                    <div>
                      <p className="text-gray-300 mb-1">Phone</p>
                      <p className="text-white font-semibold text-lg">+91 8148101923</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="w-6 h-6 text-red-400 mr-4 mt-1" />
                    <div>
                      <p className="text-gray-300 mb-1">Address</p>
                      <p className="text-white font-semibold leading-relaxed">
                        Suit No. 305, 3rd Floor,<br />
                        Akshaya HQ, Kazhipattur,<br />
                        OMR, Chennai 603103
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaGlobe className="w-6 h-6 text-purple-400 mr-4" />
                    <div>
                      <p className="text-gray-300 mb-1">Website</p>
                      <p className="text-blue-400 font-semibold text-lg">www.codework.ai</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-10 rounded-3xl shadow-2xl">
                <h3 className="text-3xl font-bold mb-8 flex items-center">
                  <FaStar className="mr-4" />
                  Get Started Today
                </h3>
                <p className="mb-8 text-lg text-pink-100">
                  Join thousands of students who have transformed their careers with our AI training program.
                </p>
                <div className="space-y-4">
                  <button className="w-full bg-white text-fuchsia-500 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <FaRocket className="inline mr-3" />
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PricingAndContact

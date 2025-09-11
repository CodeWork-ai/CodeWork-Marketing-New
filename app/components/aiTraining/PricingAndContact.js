"use client"  
import React from 'react'
import { 
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
import Link from 'next/link';

const PricingAndContact = () => {
  const placementPartners = [
    { logo: "/client/webSign.png" },
    { logo: "/client/sparksGlobal.svg" },
    { logo: "/client/Lovio.svg" },
    { logo: "/client/intulogic.svg" },
    { logo: "/client/aikyne.svg" },
    { logo: "/client/nalam.svg" },
    { logo: "/client/storefries.svg" },
    { logo: "/client/mtm.svg" },
  ];

  return (
    <>
      {/* Enhanced Placements Section */}
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
              <FaHandshake className="w-8 h-8 text-primary" />
            </div>

            {/* Enhanced Title */}
            <h2 className="text-4xl font-bold mb-4 animate-slide-up">
              <span className="text-white">Placement </span>
              <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                Guarantee
              </span>
            </h2>

            <div className="relative animate-slide-up animation-delay-200">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-16 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></div>
              <p className="text-xl text-white/90 max-w-4xl mx-auto font-light">
                Guaranteed placement assistance for students scoring <span className="text-secondary font-medium">85% and above</span> in final assessments
              </p>
            </div>
          </div>

          {/* Enhanced Guarantee Card */}
          <div className="bg-primary/30 backdrop-blur-xl border border-secondary/20 p-10 rounded-3xl mb-16 animate-card-float animation-delay-400 hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-secondary to-secondary/80 rounded-full mb-6 shadow-2xl shadow-secondary/25 animate-float animation-delay-500">
                <FaAward className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                <span className="text-white">100% Placement </span>
                <span className="text-secondary">Assistance</span>
              </h3>
              <p className="text-white/90 leading-relaxed max-w-3xl mx-auto text-lg">
                Graduates receive <span className="text-secondary font-medium">dedicated placement assistance</span> with opportunities across top tech companies 
                and client projects. We connect skilled talent to real-world roles in 
                <span className="text-secondary font-medium"> AI, Data Science, and Machine Learning</span>.
              </p>
            </div>
          </div>

          {/* Updated Partners Section - NO background boxes, always visible logos */}
          <div className="text-center animate-slide-up animation-delay-600">
            <h3 className="text-2xl font-bold text-white mb-8">
              <span className="text-white">Our Key </span>
              <span className="text-secondary">Placement Partners</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {placementPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 animate-card-float"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <img
                    src={partner.logo}
                    alt="Partner logo"
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mentorship Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Enhanced Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231ddfea' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-40 right-40 w-32 h-32 bg-secondary/20 rounded-full animate-blob animation-delay-1000"></div>
          <div className="absolute bottom-40 left-40 w-24 h-24 bg-secondary/15 rounded-full animate-blob animation-delay-3000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Enhanced Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 backdrop-blur-xl rounded-full mb-8 border border-secondary/30 shadow-2xl shadow-secondary/25 animate-float">
              <FaUsers className="w-10 h-10 text-secondary" />
            </div>

            {/* Enhanced Title */}
            <h2 className="text-4xl font-bold mb-10 text-white animate-slide-up">
              <span className="text-white">Expert </span>
              <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                Mentorship
              </span>
            </h2>

            {/* Enhanced Content Card */}
            <div className="bg-primary/30 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 animate-card-float animation-delay-400">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-16 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></div>
                <p className="text-xl leading-relaxed mb-8 text-white/90 font-light">
                  At the heart of our AI learning journey is a team of <span className="text-secondary font-medium">experienced and friendly mentors</span> 
                  who actively work on expert-level AI projects across the globe. These professionals 
                  bring real-world insights straight from the field, offering not just theoretical 
                  knowledge but <span className="text-secondary font-medium">hands-on expertise</span>.
                </p>
                <p className="text-white/80 text-lg">
                  Their mentorship is <span className="text-secondary font-medium">clear, practical, and supportive</span>—helping you build confidence 
                  and real-world AI skills at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 backdrop-blur-xl rounded-full mb-8 border border-secondary/30 shadow-2xl shadow-secondary/25 animate-float">
              <FaRocket className="w-10 h-10 text-secondary" />
            </div>

            {/* Enhanced Title */}
            <h2 className="text-4xl font-bold mb-4 animate-slide-up">
              <span className="text-white">Ready to Start Your </span>
              <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                AI Journey?
              </span>
            </h2>

            <div className="relative animate-slide-up animation-delay-200">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-16 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></div>
              <p className="text-xl text-white/90 font-light">
                Enroll now and transform your career with <span className="text-secondary font-medium">practical AI skills</span>
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Enhanced Contact Information Card */}
              <div className="bg-primary/30 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 animate-card-float animation-delay-400">
                <h3 className="text-3xl font-bold mb-8 flex items-center">
                  <FaPhone className="mr-4 text-secondary" />
                  <span className="text-white">Contact </span>
                  <span className="text-secondary">Information</span>
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                    <FaEnvelope className="w-6 h-6 text-secondary mr-4" />
                    <div>
                      <p className="text-white/70 mb-1">Email</p>
                      <p className="text-white font-semibold text-lg group-hover:text-secondary transition-colors duration-300">
                        hrindia@codework.ai
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                    <FaPhone className="w-6 h-6 text-secondary mr-4" />
                    <div>
                      <p className="text-white/70 mb-1">Phone</p>
                      <p className="text-white font-semibold text-lg group-hover:text-secondary transition-colors duration-300">
                        +91 8148101923
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                    <FaMapMarkerAlt className="w-6 h-6 text-secondary mr-4 mt-1" />
                    <div>
                      <p className="text-white/70 mb-1">Address</p>
                      <p className="text-white font-semibold leading-relaxed group-hover:text-secondary transition-colors duration-300">
                        Suit No. 305, 3rd Floor,<br />
                        Akshaya HQ, Kazhipattur,<br />
                        OMR, Chennai 603103
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                    <FaGlobe className="w-6 h-6 text-secondary mr-4" />
                    <div>
                      <p className="text-white/70 mb-1">Website</p>
                      <p className="text-secondary font-semibold text-lg">www.codework.ai</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Card */}
              <div className="bg-primary/40 backdrop-blur-xl border border-secondary/20 p-10 rounded-3xl shadow-2xl animate-card-float animation-delay-600 hover:bg-primary/50 hover:border-secondary/30 transition-all duration-500">
                <h3 className="text-3xl font-bold mb-8 flex items-center">
                  <FaStar className="mr-4 text-secondary" />
                  <span className="text-white">Get Started </span>
                  <span className="text-secondary">Today</span>
                </h3>
                <p className="mb-8 text-lg text-white/90">
                  Join thousands of students who have transformed their careers with our 
                  <span className="text-secondary font-medium"> AI training program</span>.
                </p>
                <div className="space-y-4">
                  <Link href="/trainee-apply-form" className="block w-full">
                    <button className="w-full bg-gradient-to-r from-secondary to-secondary/80 text-primary font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-secondary/25 relative overflow-hidden group">
                      <span className="relative z-10 flex items-center justify-center">
                        <FaRocket className="mr-3" />
                        Apply Now
                      </span>
                      {/* Button shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
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

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
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

export default PricingAndContact

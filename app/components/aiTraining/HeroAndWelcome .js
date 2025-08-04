"use client"
import React from 'react'
import { FaRocket, FaStar, FaBook, FaHeart } from 'react-icons/fa'

const HeroAndWelcome = () => {
  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-primary">
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

        {/* Enhanced Pattern Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231ddfea' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="relative container mx-auto px-6 py-24 z-10">
          <div className="text-center  pt-9">
            {/* Enhanced Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent">
                CODEWORK
              </span>
            </h1>

            {/* Enhanced Subtitle */}
            <p className="text-xl md:text-2xl mb-4 text-white/90 font-medium animate-slide-up animation-delay-200">
              <span className="text-secondary">Transforming ideas</span> into digital realities
            </p>

            {/* Enhanced Program Title */}
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white animate-slide-up animation-delay-400">
              <span className="text-white">AI Training & </span>
              <span className="text-secondary">Certification Program</span>
            </h2>

            {/* Enhanced Description */}
            <div className="relative animate-slide-up animation-delay-600">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-16 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></div>
              <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90">
                Bridge the gap between academic learning and industry expectations with our 
                <span className="text-secondary font-medium"> 6-month intensive AI program</span> designed for future innovators.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Enhanced Welcome Note */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 right-40 w-32 h-32 bg-secondary/20 rounded-full animate-blob animation-delay-1000"></div>
          <div className="absolute bottom-40 left-40 w-24 h-24 bg-secondary/15 rounded-full animate-blob animation-delay-3000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Enhanced Heart Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl mb-8 shadow-2xl shadow-secondary/25 animate-float animation-delay-500">
              <FaHeart className="w-8 h-8 text-primary animate-pulse-slow" />
            </div>

            {/* Enhanced Welcome Title */}
            <h2 className="text-4xl font-bold mb-10 animate-slide-up animation-delay-200">
              <span className="text-white">Welcome </span>
              <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                Note
              </span>
            </h2>

            {/* Enhanced Card Container */}
            <div className="bg-primary/30 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl animate-card-float animation-delay-400">
              <div className="relative">
                {/* Enhanced Quote Marks */}
                <div className="absolute -top-4 -left-4 w-8 h-8 text-6xl text-secondary/50 font-serif animate-pulse">"</div>
                
                {/* Enhanced Quote Text */}
                <p className="text-xl text-white/90 leading-relaxed mb-8 font-medium italic animate-fade-in animation-delay-600">
                  Welcome to the In-Plant Training & Certification Program by 
                  <span className="text-secondary font-bold"> CODEWORK</span> where passion meets
                  possibility, and learning translates into real-world impact.
                </p>
                
                <div className="absolute -bottom-8 -right-4 w-8 h-8 text-6xl text-secondary/50 font-serif rotate-180 animate-pulse animation-delay-1000">"</div>
              </div>

              {/* Enhanced Main Content */}
              <p className="text-white/80 leading-relaxed mb-8 text-lg animate-fade-in animation-delay-800">
                At <span className="text-secondary font-medium">CODEWORK</span>, we believe that practical experience is the cornerstone of true learning. Our
                industry-aligned training program is meticulously designed to empower students and aspiring
                professionals with <span className="text-secondary font-medium">hands-on exposure</span> to the technologies shaping the future of the IT world.
              </p>

              {/* Enhanced Signature */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 text-white p-6 rounded-2xl animate-fade-in animation-delay-1000">
                <p className="text-right font-semibold text-lg">
                  - <span className="text-secondary">CODEWORK Team</span>
                </p>
              </div>
            </div>

            {/* Enhanced Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 animate-slide-up animation-delay-1200">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="text-3xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">6 Months</div>
                <div className="text-white/80 text-sm">Intensive Training</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="text-3xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-white/80 text-sm">Practical Learning</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="text-3xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-white/80 text-sm">Support</div>
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        @keyframes bounceSubtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
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

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-card-float {
          animation: cardFloat 0.8s ease-out;
        }

        .animate-bounce-subtle {
          animation: bounceSubtle 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
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

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
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

export default HeroAndWelcome

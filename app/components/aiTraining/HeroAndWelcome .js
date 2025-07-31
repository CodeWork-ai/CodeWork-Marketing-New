import React from 'react'
import { FaRocket, FaStar, FaBook, FaHeart } from 'react-icons/fa'

const HeroAndWelcome = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-blue-500/5 to-indigo-500/10"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.03'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl mb-8 shadow-lg">
              <FaRocket className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-indigo-700 to-blue-700 bg-clip-text text-transparent">
              CODEWORK
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-slate-600 font-medium">
              Transforming ideas into digital realities
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-800">
              AI Training & Certification Program
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-slate-600">
              Bridge the gap between academic learning and industry expectations with our 
              6-month intensive AI program designed for future innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Note */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl mb-8 shadow-lg">
              <FaHeart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-700 to-slate-800 bg-clip-text text-transparent mb-10">
              Welcome Note
            </h2>
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-200/50 backdrop-blur-sm">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 text-6xl text-indigo-200 font-serif">"</div>
                <p className="text-xl text-slate-700 leading-relaxed mb-8 font-medium italic">
                  Welcome to the In-Plant Training & Certification Program by CODEWORK where passion meets
                  possibility, and learning translates into real-world impact.
                </p>
                <div className="absolute -bottom-8 -right-4 w-8 h-8 text-6xl text-indigo-200 font-serif rotate-180">"</div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                At CODEWORK, we believe that practical experience is the cornerstone of true learning. Our
                industry-aligned training program is meticulously designed to empower students and aspiring
                professionals with hands-on exposure to the technologies shaping the future of the IT world.
              </p>
              <div className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 p-6 rounded-2xl border border-slate-300/50">
                <p className="text-right font-semibold text-lg">- CODEWORK Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroAndWelcome

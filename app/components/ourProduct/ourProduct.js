import React from 'react'

const OurProduct = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ebf9ff] to-[#FBF8E6] flex flex-col items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-center pt-10 mb-14 gap-24">
        {/* Card 1 */}
        <div className="relative group cursor-pointer overflow-hidden duration-500 w-80 h-96 bg-slate-50 text-gray-50 p-6 rounded-lg shadow-lg">
          <div>
            <img
              src="/CaseStudies/hyperfleex.jpg"
              alt="Hyperflex AI"
              className="group-hover:scale-110 w-full h-72 object-cover duration-500 rounded"
            />
            <div className="absolute w-72 left-0 p-6 -bottom-16 duration-500 group-hover:-translate-y-16">
              <div className="absolute -z-10 left-0 w-80 h-32 opacity-0 duration-500 group-hover:opacity-60 group-hover:bg-cyan-600"></div>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-400 group-hover:text-white mb-2">Hyperflex AI</span>
              <p className="group-hover:opacity-100 w-72 duration-500 opacity-0 text-black group-hover:text-white">
                AI-Powered Search Engine for Education{' '}
                <a href="/hyperflex-ai" className="underline text-white group-hover:text-white">
                  Explore..
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="relative group cursor-pointer overflow-hidden duration-500 w-80 h-96 bg-slate-50 text-gray-50 p-6 rounded-lg shadow-lg">
          <div>
            <img
              src="/CaseStudies/scans.jpg"
              alt="Radi Insight Scan"
              className="group-hover:scale-110 w-full h-72 object-cover duration-500 rounded"
            />
            <div className="absolute w-72 left-0 p-6 -bottom-16 duration-500 group-hover:-translate-y-16">
              <div className="absolute -z-10 left-0 w-80 h-32 opacity-0 duration-500 group-hover:opacity-60 group-hover:bg-cyan-600"></div>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-400 group-hover:text-white mb-2">Radi Insight 3D</span>
              <p className="group-hover:opacity-100 w-72 duration-500 opacity-0 text-black group-hover:text-white">
               AI & 3D Modeling for Colon Cancer Detection.{' '}
                <a href="/radi-insight-3D" className="underline text-white group-hover:text-white">
                  Explore..
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurProduct
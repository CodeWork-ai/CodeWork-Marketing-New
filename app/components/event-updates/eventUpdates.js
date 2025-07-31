import React from 'react'

const EventUpdates = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 pt-36 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            What's New at <span className="text-blue-600">CODEWORK</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest events, groundbreaking announcements, and significant milestones. 
            Join us as we continue to innovate and shape the future with cutting-edge AI technology.
          </p>
        </div>

        {/* Events & Updates Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Events & Updates
          </h2>
          
          {/* Coming Soon Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Exciting Updates Coming Soon!
              </h3>
              <p className="text-gray-600 text-lg">
                We're working on some amazing announcements and events. Stay tuned for updates!
              </p>
            </div>
            
            {/* Placeholder for future events */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Upcoming Events</h4>
                <p className="text-gray-600 text-sm">New events and workshops will be announced here</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Announcements</h4>
                <p className="text-gray-600 text-sm">Latest company news and product updates</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Milestones</h4>
                <p className="text-gray-600 text-sm">Celebrating our achievements and progress</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Be Part of Our Journey</h3>
            <p className="text-xl mb-6 opacity-90">
              Join us as we continue to innovate and shape the future with AI technology
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventUpdates

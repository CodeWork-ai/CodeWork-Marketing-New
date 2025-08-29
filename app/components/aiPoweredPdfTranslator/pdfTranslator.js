"use client";
import React from 'react'

function PdfTranslator() {
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

      <div className="container mx-auto px-6 sm:px-8 md:px-16 py-12 relative z-10">
        {/* Introduction */}
        <div className="mb-12">
          <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm text-secondary px-6 py-3 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
            PDF Translation Technology
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            AI-Powered PDF Translator: <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">Seamless Indian Language Support</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mb-6"></div>
          <p className="pl-8 text-xl text-white/90 leading-relaxed font-light max-w-4xl border-l-4 border-secondary/30">
            <span className="text-secondary font-semibold">Introduction:</span> <br />
            We created an AI-powered PDF Translator with the intent of enabling users to translate PDF documents conveniently. This powerful tool is compatible with Indian languages like <span className="text-secondary font-medium">Tamil, Hindi, Malayalam, Telugu, and Kannada</span>, and it retains the document’s original formatting.<br /><br />
            This solution is available for businesses, professionals, and researchers to ensure seamless cross-language communication.
          </p>
        </div>

        {/* Challenges */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-4 flex items-center">
            <span className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></span>
            Challenges We Faced
          </h3>
          <ul className="space-y-4 text-white/90 pl-4 border-l-4 border-secondary/40">
            <li>Manual translation was time-consuming and led to errors.</li>
            <li>Following translations, many tools misplaced the original document formatting.</li>
            <li>Finding a single tool that worked with various Indian languages proved to be very challenging.</li>
            <li>Other solutions had no support for proper integration with PDF workflows.</li>
            <li>There was a demand among users to have a safe method of translating sensitive documents.</li>
          </ul>
        </div>

        {/* Strategic Shift */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-4 flex items-center">
            <span className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></span>
            Our Strategic Shift
          </h3>
          <p className="text-white/90 pl-4 border-l-4 border-secondary/40">
            To address these challenges, we chose a fully AI-powered solution. Our in-house system enhances accuracy using context-aware AI models, maintains the document's original structure and layout, and offers seamless intersystem collaboration for smoother processes.
          </p>
        </div>

        {/* Images */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16 justify-center items-center">
          {[
            { src: "/CaseStudies/pdftranslated.jpg", alt: "PDF AI translation demonstration" },
            { src: "/CaseStudies/aipdf.jpg", alt: "Multilingual PDF workflow" }
          ].map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={img.src}
                alt={img.alt}
                className="w-[400px] h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
              <div className="absolute inset-0 border-2 border-secondary/30 rounded-3xl group-hover:border-secondary/50 transition-all"></div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-primary/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-primary/50 transition relative">
            <h3 className="text-3xl font-bold text-white mb-6">Benefits of the In-House Solution</h3>
            <ul className="space-y-4 text-white/90">
              <li><span className="font-semibold text-secondary">Faster Translation</span> – No more tedious manual work is required for translation; it translates automatically.</li>
              <li><span className="font-semibold text-secondary">Accurate Results</span> – Unlike most current systems, AI understands the meaning of the sentences and not merely the words used.</li>
              <li><span className="font-semibold text-secondary">Keeps Original Format</span> – Concentrate on the content without stressing over the layout or design—no need to worry about messy formatting.</li>
              <li><span className="font-semibold text-secondary">Secure & Confidential</span> – Multi-language support without compromising the security and privacy of documents; everything remains private.</li>
              <li><span className="font-semibold text-secondary">Easy to Access & Use</span> – All major Indian languages supported. Simply upload or download.</li>
            </ul>
          </div>
          <div className="bg-primary/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-primary/50 transition relative">
            <h3 className="text-3xl font-bold text-white mb-6">Technology Stack Used</h3>
            <ul className="mb-4 space-y-3 text-white/90 list-disc list-inside">
              <li><span className="font-semibold text-secondary">Backend</span>: Python with FastAPI for scalability</li>
              <li><span className="font-semibold text-secondary">Frontend</span>: ReactJS for a user-friendly interface</li>
              <li><span className="font-semibold text-secondary">Security</span>: AES encryption and secure APIs</li>
            </ul>
            <h4 className="mt-6 mb-3 text-xl font-bold text-secondary">Rapid Build Strategies</h4>
            <ul className="mb-4 space-y-3 text-white/90 list-disc list-inside">
              <li>Leveraged pre-trained models tailored for Indian languages</li>
              <li>Fine-tuned open-source PDF parsers for efficient document handling</li>
              <li>Cloud-based testing for uptime and reliability</li>
              <li>CI/CD frameworks for rapid, reliable deployment</li>
            </ul>
            <span className="text-secondary font-semibold">Result:</span> Work was completed in record time without sacrificing quality.
          </div>
        </div>

        {/* Conclusion Section (Glassmorphism/Primary background) */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary/90 to-primary rounded-3xl p-12 shadow-2xl text-white relative overflow-hidden border border-white/20">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
            <h3 className="text-4xl font-bold mb-8 flex items-center">
              <span className="w-4 h-4 bg-secondary rounded-full mr-4 animate-pulse"></span>
              Conclusion
            </h3>
            <div className="w-20 h-1 bg-secondary rounded-full mb-8"></div>
            <p className="text-xl font-light leading-relaxed text-white/90">
              The <span className="font-semibold text-secondary">AI-powered PDF Translator by Codework</span> addresses real-world communication challenges. The tool provides instantaneous results, precision, and robust support for Indian languages—making seamless, secure, and efficient cross-language document handling a reality for businesses and professionals.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom Decoration */}
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

export default PdfTranslator;

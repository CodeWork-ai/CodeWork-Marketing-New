// "use client";
// import Image from 'next/image';

// export default function HealthcareLanding() {
//   return (
//     <section className="relative bg-primary min-h-screen overflow-hidden">
//       {/* Background overlay for better text readability */}
//       <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 z-10"></div>
      
//       {/* Background image positioned at bottom half with responsive positioning */}
//       <div className="absolute bottom-0 left-[5%] sm:left-[10%] md:left-[15%] lg:left-[20%] h-1/4 sm:h-1/3 md:h-2/5 lg:h-1/2 w-[90%] sm:w-4/5 md:w-4/5 lg:w-4/5">
//         <Image
//           src="/blog/blog7.jpg"
//           alt="Metal crafting workshop"
//           fill
//           className="object-cover rounded-tl-xl sm:rounded-tl-2xl md:rounded-tl-3xl"
//           priority
//         />
//       </div>

//       {/* Contact button - HIDDEN on mobile, visible from tablet up */}
//       <div className="absolute hidden sm:block top-24 right-6 md:top-32 md:right-8 lg:top-52 lg:right-8 z-30">
//         <button className="bg-secondary hover:bg-secondary/90 text-primary font-bold py-2.5 px-6 md:py-3 md:px-8 text-sm md:text-base rounded-full transition-colors duration-200 shadow-lg">
//           Contact us →
//         </button>
//       </div>

//       {/* Content wrapper - responsive with proper mobile spacing */}
//       <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-12 md:py-16 lg:py-20 min-h-screen flex items-center justify-center">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center w-full h-full">
          
//           {/* Left side - Text content with balanced spacing */}
//           <div className="flex flex-col pl-12 justify-center space-y-4 sm:space-y-6 md:space-y-8 pt-8 pb-16 sm:pt-8 sm:pb-8 md:pt-4 md:pb-4 lg:pt-0 lg:pb-0">            
//             <div>
//               <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-glow leading-tight">
//                AI in Healthcare
//               </h1>
//               <p className="text-base sm:text-lg md:text-lg lg:text-lg text-white/90 leading-relaxed max-w-full sm:max-w-xl md:max-w-2xl">
// Explore how technology is changing the face of healthcare, from faster diagnoses to better treatment plans. AI is helping doctors and hospitals make smarter decisions, reduce errors, and give patients more personalized care.              </p>
//             </div>
//           </div>

//           {/* Right side - Decorative elements - hidden on mobile and small screens */}
//           <div className="relative hidden md:block">
//             <div className="absolute -top-4 -right-4 w-20 h-20 lg:w-24 lg:h-24 bg-secondary/20 rounded-full blur-xl"></div>
//             <div className="absolute -bottom-4 -left-4 w-24 h-24 lg:w-32 lg:h-32 bg-secondary/10 rounded-full blur-xl"></div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .drop-shadow-glow {
//           text-shadow: 0 0 20px rgba(29, 223, 234, 0.6), 0 0 4px rgba(34, 48, 68, 0.6);
//         }
//       `}</style>
//     </section>
//   );
// }

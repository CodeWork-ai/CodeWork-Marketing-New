// "use client";
// import React, { useState, useRef, useEffect } from "react";

// const ServicesCarousel = () => {
//   const services = [
//     {
//       id: 1,
//       title: "AI Model Training",
//       description: "We excel in AI model training, optimizing machine learning models for impactful results.",
//       imgSrc: "/servicesICON/AIModelTraining.svg",
//     },
//     {
//       id: 2,
//       title: "Software Development",
//       description: "Discover innovative software development solutions at Codework, driving digital transformation.",
//       imgSrc: "/servicesICON/SoftwareDevelopment.svg",
//     },
//     {
//       id: 3,
//       title: "Custom Software Development",
//       description: "Unlock personalization with custom software development service.",
//       imgSrc: "/servicesICON/CustomSoftwareDevelopment.svg",
//     },
//     {
//       id: 4,
//       title: "Mobile Software Development",
//       description: "We create intuitive iOS and Android apps to boost user engagement.",
//       imgSrc: "/servicesICON/MobileSoftwareDevelopment.svg",
//     },
//     {
//       id: 5,
//       title: "Web Designing",
//       description: "Transform online presence with Codework's stunning and user-friendly web designing services.",
//       imgSrc: "/servicesICON/WebDesigning.svg",
//     },
//     {
//       id: 6,
//       title: "Cloud Computing",
//       description: "Leverage advanced cloud computing solutions from Codework for secure and scalable operations.",
//       imgSrc: "/servicesICON/CloudComputing.svg",
//     },
//   ];

//   const duplicatedServices = [...services, ...services];
//   const containerRef = useRef(null);
//   const [offset, setOffset] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const speed = 0.7;
//   const animationFrameId = useRef(null);

//   const animate = () => {
//     if (!paused && containerRef.current) {
//       setOffset((prevOffset) => {
//         let nextOffset = prevOffset + speed;
//         const totalWidth = containerRef.current.scrollWidth / 2;
//         if (nextOffset >= totalWidth) {
//           nextOffset = nextOffset - totalWidth;
//         }
//         return nextOffset;
//       });
//     }
//     animationFrameId.current = requestAnimationFrame(animate);
//   };

//   useEffect(() => {
//     animationFrameId.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationFrameId.current);
//   }, [paused]);

//   return (
//     <div 
//       className="w-full pt-16 sm:pt-20 md:pt-20 lg:pt-20 xl:pt-20 pb-20 sm:pb-28 md:pb-36 lg:pb-36 xl:pb-36 overflow-hidden bg-[#EBF9FF]"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       <div 
//         ref={containerRef} 
//         className="flex justify-around transition-transform duration-0"
//         style={{ transform: `translateX(-${offset}px)` }}
//       >
//         {duplicatedServices.map((service, index) => (
//           <div
//             key={`${service.id}-${index}`}
//             className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-12 my-4 w-[300px] sm:w-[350px] md:w-[400px]"
//           >
//             {/* Card Container with stroke instead of shadow */}
//             <div 
//               className="flex items-center border-[4px] border-[#75def9] border-t-0 border-l-0 bg-white rounded-tl-2xl rounded-tr-[100px] rounded-bl-2xl rounded-br-2xl overflow-hidden h-[160px] sm:h-[180px] md:h-[180px] lg:h-[200px]"
//             >
//               <div>
//                 <img
//                   src={service.imgSrc}
//                   alt={`Icon for ${service.title}`}
//                   className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-contain ml-4"
//                 />
//               </div>
//               <div className="p-4 flex-1">
//                 <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
//                   {service.title}
//                 </h3>
//                 <p className="text-sm sm:text-base text-gray-600 mt-2">
//                   {service.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesCarousel;

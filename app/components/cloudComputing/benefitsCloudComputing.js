"use client";
import React from 'react';

const BenefitsCloudComputing = () => {
  const benefits = [
    {
      title: "Enhanced Data Security",
      hoverText: "Safeguard crucial business and customer information with enterprise-grade cloud security."
    },
    {
      title: "Scalable Infrastructure",
      hoverText: "Dynamically scale resources up or down based on business demands and traffic."
    },
    {
      title: "Cost Optimization",
      hoverText: "Reduce operational costs by eliminating on-premise hardware and maintenance expenses."
    },
    {
      title: "Global Accessibility",
      hoverText: "Enable remote work and collaboration with 24/7 access from anywhere in the world."
    },
    {
      title: "Automated Compliance",
      hoverText: "Meet regulatory standards like GDPR, HIPAA, SOC 2, and ISO 27001 with built-in compliance tools."
    }
  ];

  return (
    <div className="container mx-auto bg-primary py-24 px-14 relative overflow-hidden">
      {/* Background animated particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="floating-particles"></div>
      </div>
      
      <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
        {/* Left side - Title and subtitle */}
        <div className="md:w-1/3">
          <h2 
            className="text-4xl font-bold text-secondary mb-6 animate-fade-in-left"
            style={{
              textShadow: "0 0 6px #1ddfea44, 0 0 10px #1ddfea33, 0 0 2px #050c25aa"
            }}
          >
            Key Benefits of Cloud Migration
          </h2>
          <p className="text-white/80 text-lg leading-relaxed animate-fade-in-left-delay">
            Migrating to the cloud enables businesses to achieve greater agility, security, and cost savings while improving collaboration and performance across all operations.
          </p>
        </div>
        
        {/* Right side - Benefits */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map(({ title, hoverText }, index) => (
            <div 
              key={index} 
              className="rounded-xl p-6 bg-gradient-to-br from-secondary/30 via-secondary/10 to-primary/50 text-white shadow-glow transition-all duration-500 relative overflow-hidden group h-[120px] border border-secondary/20 cursor-pointer hover:scale-105 hover:rotate-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Static gradient overlay */}
              <div className="absolute inset-0 opacity-30 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-secondary/20 via-primary/10 to-secondary/20 animate-pulse-slow" />
              </div>
              
              {/* Animated hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-r from-secondary/60 to-primary/40 animate-spin-slow" />
              </div>
              
              {/* Glowing border accent on hover */}
              <div className="absolute inset-0 rounded-xl border border-secondary/30 group-hover:border-secondary/80 shadow-glow group-hover:shadow-[0_0_40px_rgba(29,223,234,0.6)] transition-all duration-500" />
              
              {/* Floating glow effect */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary/40 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center h-full">
                {/* Default title text */}
                <p className="font-bold text-lg group-hover:opacity-0 transition-opacity duration-300 absolute top-0 left-0 text-secondary drop-shadow-sm">
                  {title}
                </p>
                
                {/* Hover text */}
                <p className="font-medium text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 right-0 leading-relaxed">
                  {hoverText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 0 50px rgba(29, 223, 234, 0.25), 0 0 20px rgba(29, 223, 234, 0.15);
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.3; }
          50% { opacity: 0.7; }
          100% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
        
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }
        .animate-fade-in-left-delay {
          animation: fade-in-left 0.8s ease-out 0.2s both;
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .floating-particles::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(29, 223, 234, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(29, 223, 234, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 40% 80%, rgba(29, 223, 234, 0.1) 1px, transparent 1px);
          animation: floating 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BenefitsCloudComputing;

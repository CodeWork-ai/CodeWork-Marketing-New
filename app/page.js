import React from "react";
import Script from "next/script"; // Import Next.js Script component
import Landing from "./components/homePage/landing";
import AreasExcellence from "./components/homePage/areasExcellence";
import Clients from "./components/homePage/clients";
import WhatWeOffer from "./components/homePage/whatWeOffer";
import ServicesCarousel from "./components/homePage/servicesCarousel";
import AiInnovations from "./components/homePage/aiInnovations";
import WhyChooseUs from "./components/homePage/whyChooseUs";
import WeListening from "./components/homePage/weListening";

export default function Home() {
  return (
    <div>
      {/* Microsoft Clarity Script - Loads after the page is interactive */}
      <Script
        id="ms-clarity" // Unique ID for the script (helps with debugging)
        strategy="afterInteractive" // Loading strategy: after page is interactive
      >
        {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "seqq1pj0lx");`}
      </Script>

      {/* Your existing components */}
      <Landing />
      <AreasExcellence />
      <Clients />
      <WhatWeOffer />
      <ServicesCarousel />
      <AiInnovations />
      <WhyChooseUs />
      <WeListening />
    </div>
  );
}

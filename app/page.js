import React from "react";
import Script from "next/script";
import Landing from "./components/homePage/landing";
import AreasExcellence from "./components/homePage/areasExcellence";
import Clients from "./components/homePage/clients";
import WhatWeOffer from "./components/homePage/whatWeOffer";
import ServicesCarousel from "./components/homePage/servicesCarousel";
import AiInnovations from "./components/homePage/aiInnovations";
import WhyChooseUs from "./components/homePage/whyChooseUs";
import WeListening from "./components/homePage/weListening";
import AnimatedRows from "./components/common/scroll";


export default function Home() {
  return (
    <div>
      {/* Microsoft Clarity Script - Loads after the page is interactive */}
      <Script
        id="ms-clarity"
        strategy="afterInteractive" 
      >
        {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "seqq1pj0lx");`}
      </Script>

      {/* Animated Logo - Limited to first two components only */}
      {/* <AnimatedLogo /> */}

      {/* Animation Trigger Zone - First Two Components */}
      <div id="animation-zone">
        <Landing />
        <AreasExcellence />
      </div>

      {/* Remaining Components - No Animation */}
      <Clients />
      <WhatWeOffer />
      <AnimatedRows />
      {/* <ServicesCarousel /> */}
      <AiInnovations />
      <WhyChooseUs />
      <WeListening />
    </div>
  );
}

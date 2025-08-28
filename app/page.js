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
import ScrollAnimatedRows from "./components/common/scrollimage2";


export default function Home() {
  return (
    <div>
      {/* Microsoft Clarity Script */}
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

      {/* JSON-LD Schema Script */}
      <Script
        id="schema-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Codework",
            "image": "CodeWork-Marketing-New/public/Logo.svg",
            "@id": "https://codework.ai/",
            "url": "https://codework.ai/",
            "telephone": "+91- 9566176914",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Level 3, Akshaya HQ, OMR, Kazhipattur,",
              "addressLocality": "Chennai",
              "addressRegion": "Taminnadu",
              "postalCode": "603103.",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "12.8119",
              "longitude": "80.2302"
            },
            "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:30"
            }],
            "sameAs": [
              "https://www.facebook.com/yourpage",
              "https://www.linkedin.com/company/codework",
              "https://twitter.com/yourhandle"
            ]
          }
        `}
      </Script>

      {/* Animated Logo - Limited to first two components only */}
      {/* <AnimatedLogo /> */}

      {/* Animation Trigger Zone - First Two Components */}
      <div id="animation-zone">
        <Landing />
          <WhatWeOffer />
      </div>

      {/* Remaining Components - No Animation */}
      <Clients />
     <AreasExcellence />
      <ScrollAnimatedRows />
      {/* <ServicesCarousel /> */}
      <AiInnovations />
      <WhyChooseUs />
      <WeListening />
    </div>
  );
}

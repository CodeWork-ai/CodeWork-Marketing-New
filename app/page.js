import React from "react";
import Landing from "./components/homePage/landing";
import AreasExcellence from "./components/homePage/areasExcellence";
import Clients from "./components/homePage/clients";
import WhatWeOffer from "./components/homePage/whatWeOffer";
import ServicesCarousel from "./components/homePage/servicesCarousel";
import AiInnovations from "./components/homePage/aiInnovations";
import WhyChooseUs from "./components/homePage/whyChooseUs";
import WeListening from "./components/homePage/weListening";

export default function Home() {
  return <div>
    <Landing/>
    <AreasExcellence/>
    <Clients/>
    <WhatWeOffer/>
    <ServicesCarousel/>
    <AiInnovations/>
    <WhyChooseUs/>
    <WeListening/>
  </div>;
}

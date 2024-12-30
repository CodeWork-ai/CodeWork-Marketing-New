"use client"
import { IconCloudDemo } from "./components/home/iconCloud";
import HomeHeader from "./components/home/homeHeader";
import AiSolutionsSection from "./components/home/aiSolutionsSection";
import ExploreAiPoweredSolutions from "./components/home/exploreAiPoweredSolutions";
import ParallaxEffect from "./components/home/imageSection";
import { GlobeDemo } from "./components/home/globe";
import { AnimatedBeamDemo } from "./components/home/services";
import { Marquee3D } from "./components/home/aiTech";
import { Clients } from "./components/home/clientsCarousel";
import TechnologyGrid from "./components/home/TechnologyGrid";
import { BentoDemo } from "./components/common/bentoGrid";
import Contact from "./components/home/contact";
import { Example } from "./components/home/shuffleGrid";

export default function Home() {
  return (
    <div className="text-white">
      <HomeHeader/>
      <AiSolutionsSection/>
      <Clients/>
      <ExploreAiPoweredSolutions/>
      {/* <Marquee3D/> */}
      <AnimatedBeamDemo/>  
      {/* <BentoDemo/> */}
      {/* <TechnologyGrid/> */}
      {/* <Example/> */}
      <ParallaxEffect/>
      <GlobeDemo/>
      <Contact/>
    </div>
  );
}

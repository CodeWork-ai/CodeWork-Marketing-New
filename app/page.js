"use client";
import HomeHeader from "./components/home/homeHeader";
import AiSolutionsSection from "./components/home/aiSolutionsSection";
import ExploreAiPoweredSolutions from "./components/home/exploreAiPoweredSolutions";
import ParallaxEffect from "./components/home/imageSection";
import { GlobeDemo } from "./components/home/globe";
import { AnimatedBeamDemo } from "./components/home/services";
import { Clients } from "./components/home/clientsCarousel";
import Contact from "./components/home/contact";

export default function Home() {
  return (
    <>
      <div className="text-white">
        <HomeHeader />
        <AiSolutionsSection />
        <Clients />
        <ExploreAiPoweredSolutions />
        <AnimatedBeamDemo />
        <ParallaxEffect />
        <GlobeDemo />
        <Contact />
      </div>
    </>
  );
}

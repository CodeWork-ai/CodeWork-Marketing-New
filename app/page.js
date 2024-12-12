"use client"
import { IconCloudDemo } from "./components/home/iconCloud";
import HomeHeader from "./components/home/homeHeader";
import AiSolutionsSection from "./components/home/aiSolutionsSection";
import ExploreAiPoweredSolutions from "./components/home/exploreAiPoweredSolutions";
import ParallaxEffect from "./components/home/imageSection";
import { GlobeDemo } from "./components/home/globe";
import { AnimatedBeamDemo } from "./components/home/services";

export default function Home() {
  return (
    <div className="text-white">
      <HomeHeader/>
      <AiSolutionsSection/>
      <ExploreAiPoweredSolutions/>
      <AnimatedBeamDemo/>
      <ParallaxEffect/>
      <GlobeDemo/>
    </div>
  );
}

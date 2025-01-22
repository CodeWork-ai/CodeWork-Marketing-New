"use client";
import HomeHeader from "./components/home/homeHeader";
import AiSolutionsSection from "./components/home/aiSolutionsSection";
import ExploreAiPoweredSolutions from "./components/home/exploreAiPoweredSolutions";
import ParallaxEffect from "./components/home/imageSection";
import { GlobeDemo } from "./components/home/globe";
import { AnimatedBeamDemo } from "./components/home/services";
import { Clients } from "./components/home/clientsCarousel";
import Contact from "./components/home/contact";
import TestimonialCarousel from "./components/home/carouselCard";
import BlogComponent from "@/components/ui/blog-component";

export default function Home() {
  return (
    <>
      <div className="text-white">
        <HomeHeader />
        <AiSolutionsSection />
        <Clients />
        <ExploreAiPoweredSolutions />
        <AnimatedBeamDemo />
        <TestimonialCarousel/>
        <BlogComponent/>
        <ParallaxEffect />
        <GlobeDemo />
        <Contact />
      </div>
    </>
  );
}

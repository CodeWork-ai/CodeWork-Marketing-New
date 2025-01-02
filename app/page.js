"use client";
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
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Solutions | Next.js Application</title>
        <meta
          name="description"
          content="Discover AI software development solutions by Codework. Redefine innovation with cutting-edge technologies, empowering businesses with smart, scalable systems."
        />
        {/* <meta name="keywords" content="AI, Artificial Intelligence, Technology, Solutions, Next.js" />
        <meta name="author" content="Your Company Name" /> */}
        <meta property="og:title" content="Codework:AI Software Development |call us-+91 72006 16547	" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-white">
        <HomeHeader />
        <AiSolutionsSection />
        <Clients />
        <ExploreAiPoweredSolutions />
        {/* <Marquee3D/> */}
        <AnimatedBeamDemo />
        {/* <BentoDemo/> */}
        {/* <TechnologyGrid/> */}
        {/* <Example/> */}
        <ParallaxEffect />
        <GlobeDemo />
        <Contact />
      </div>
    </>
  );
}

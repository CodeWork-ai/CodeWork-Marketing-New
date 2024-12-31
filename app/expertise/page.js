"use client"
import ExpertiseHeader from "../components/expertise/expertiseHeader";
import ExpertiseSectionTwo from "../components/expertise/expertiseSectionTwo";
import ExpertiseGrid from "../components/expertise/expertiseGrid";
import ExpertiseFooter from "../components/expertise/expertiseFooter";
import TechnologyGrid from "../components/home/TechnologyGrid";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <meta name="AI Innovation" content="Empowering innovation with AI and advanced technologies at Codework. Transform your business with intelligent and future-ready software solutions." />
        <title>AI Innovation | Advanced Tech Solutions</title>
      </Head>
      <div className="text-white pb-5">
        <ExpertiseHeader />
        <ExpertiseGrid />
        <ExpertiseSectionTwo />
        <TechnologyGrid />
        <ExpertiseFooter />
      </div>
    </>
  );
}
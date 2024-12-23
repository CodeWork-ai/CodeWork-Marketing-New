"use client"
import ExpertiseHeader from "../components/expertise/expertiseHeader";
import ExpertiseSectionTwo from "../components/expertise/expertiseSectionTwo";
import ExpertiseGrid from "../components/expertise/expertiseGrid";
import ExpertiseFooter from "../components/expertise/expertiseFooter";

export default function Page() {
  return (
    <div className="text-white pb-5">
      <ExpertiseHeader/>
      <ExpertiseGrid/>
      <ExpertiseSectionTwo/>
      <ExpertiseFooter/>
    </div>
  );
}
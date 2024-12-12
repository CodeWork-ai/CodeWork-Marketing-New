"use client"
import SolutionHeader from "../components/solution/solutionHeader";
import FeatureGrid from "../components/solution/FeatureGrid";
import SolutionsEcosystem from "../components/solution/solutionEcosystem";

export default function Page() {
  return (
    <div className="text-white pb-5">
      <SolutionHeader/>
      <FeatureGrid/>
      <SolutionsEcosystem/>
    </div>
  );
}
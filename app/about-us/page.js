"use client"
import AboutHeader from "../components/aboutUs/aboutHeader";
import AboutUs from "../components/aboutUs/aboutUs";
import SolutionHeader from "../components/solution/solutionHeader";

export default function Page() {
  return (
    <div className="text-white pb-5">
      <AboutHeader/>
      <AboutUs/>
    </div>
  );
}
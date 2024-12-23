"use client"
import CareersHeader from "../components/careers/careersHeader";
import CareerPage from "../components/careers/career";

export default function Page() {
  return (
    <div className="text-white bg-black bg-opacity-5 pb-5">
      <CareersHeader/>
      <CareerPage/>
    </div>
  );
}
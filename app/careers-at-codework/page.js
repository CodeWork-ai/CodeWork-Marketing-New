import React from "react";
import CareerPage from "../components/careers/career";
import CareersHeader from "../components/careers/careerHeader";
import WhyJoinCodework from "../components/careers/whyJoinCodework";
import CurrentOpportunitie from "../components/careers/currentOpportunitie";

const page = () => {
  return (
    <div>
      <CareersHeader />
      <CurrentOpportunitie />
      <WhyJoinCodework />
      <CareerPage />
    </div>
  );
};

export default page;

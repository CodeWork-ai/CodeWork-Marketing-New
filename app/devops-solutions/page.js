import React from "react";
import DevopsSolutionsLanding from "../components/devops-solutions/devopsSolutionsLanding";
import DevopsSolutions from "../components/devops-solutions/devopsSolutions";
import DevelopmentProcessDevops from "../components/devops-solutions/developmentProcessDevops";
import TransformBusinessDevops from "../components/devops-solutions/transformBusinessDevops";

const Page = () => {
  return (
    <div>
      <DevopsSolutionsLanding/>
      <DevopsSolutions />
      <DevelopmentProcessDevops />
      <TransformBusinessDevops />
    </div>
  );
};

export default Page;

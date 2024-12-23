import Globe from "../../../components/ui/globe";
import FeatureHighlights from "./highlights";
import Link from "next/link";

export function GlobeDemo() {
  return (
    <div className="w-full lg:flex px-5 md:px-20  lg-py-0 bg-black bg-opacity-50">
      <div className="w-full lg:w-1/2">
        <Globe />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <FeatureHighlights/>
      </div>
    </div>
  );
}

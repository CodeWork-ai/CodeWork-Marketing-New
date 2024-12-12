import ImageHoverCards from "../components/vision/ImageHover";
import VisionHeader from "../components/vision/visionHeader";
import VisionSectionOne from "../components/vision/visionSectionOne";
import VisionSectionTwo from "../components/vision/visionSectionTwo";

export default function Page() {
  return (
    <div className="text-white">
      <VisionHeader/>
      <VisionSectionOne/>
      <VisionSectionTwo/>
      <ImageHoverCards/>
    </div>
  );
}
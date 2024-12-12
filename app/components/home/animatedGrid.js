import { cn } from "@/lib/utils";
import AnimatedGridPattern from "../../../components/ui/animated-grid-pattern";

export function AnimatedGridPatternDemo() {
  return (
    <div className="relative flex h-[560px] w-full items-center justify-center overflow-hidden rounded-lg p-20 md:shadow-xl">
      {/* <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter ">
        Animated Grid Pattern
      </p> */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.2}
        duration={2}
        repeatDelay={2}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-40%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}

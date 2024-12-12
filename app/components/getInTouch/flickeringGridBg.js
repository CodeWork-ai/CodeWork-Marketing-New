import FlickeringGrid from "../../../components/ui/flickering-grid";

export function FlickeringGridDemo() {
  return (
    <div className="absolute h-[1000px] rounded-lg w-screen bg-black overflow-visible">
      <FlickeringGrid
        className="z-0 relative inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={800}
      />
    </div>
  );
}

import Marquee from "../../../components/ui/marquee";

const solutions = [
  {
    name: "Colowatch",
    description: "A pioneering solution in colon cancer detection using 3D modeling and AI for non-invasive, accurate diagnostics.",
  },
  {
    name: "Text Analytics",
    description: "Optimizes caregiver communication with speech-to-text technology, NLP, and sentiment analysis.",
  },
  {
    name: "Insight Scan",
    description: "Simplifies radiology reports with NLP, deep learning, and visual aids for better patient understanding.",
  },
];

export function Marquee3D() {
  return (
    <div className=" text-white py-10">
      <div className="relative w-full flex h-[400px] flex-col items-center justify-center gap-8 overflow-hidden rounded-lg px-20">
        <div className="flex flex-row gap-4 [perspective:300px]">
          <Marquee
            className="h-96 w-56 justify-center overflow-hidden [--duration:15s] [--gap:1rem]"
            vertical
            style={{
              transform:
                "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
            }}
          >
            {solutions.map((data, idx) => (
              <div
                key={idx}
                className="mx-auto w-3/4 p-6 bg-black bg-opacity-25 border border-blue-400 rounded-xl transition-all duration-300 hover:ring-2 hover:ring-blue-400"
              >
                <h3 className="text-xl font-semibold text-center">{data.name}</h3>
                <p className="mt-2 text-sm text-center opacity-80">{data.description}</p>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3">Test</div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3"></div>
      </div>
    </div>
  );
}

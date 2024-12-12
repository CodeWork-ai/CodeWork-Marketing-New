import Globe from "../../../components/ui/globe";
import Link from "next/link";

export function GlobeDemo() {
  return (
    <div className="w-full lg:flex px-10 md:px-20  lg-py-0 bg-black bg-opacity-50">
      <div className="w-full lg:w-1/2">
        <Globe />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-[400px]">
          <h2 className="flex md:hidden mb-5 text-gray-400 font-semibold text-xl">
            Ready to Transform Your Business with AI?
          </h2>
          <h3 className="text-gray-300 text:xl lg:text-2xl">
            Discover how our AI solutions can revolutionize your business operations and drive sustainable growth. Take the first step towards intelligent transformation today.
          </h3>
          {/* <div className="pt-5">
            <Link href="/aiSolution">
              <button className="bg-[#fd6262] hover:bg-red-400 text-black hover:text-white font-medium rounded-sm px-2 py-1 md:px-3 md:py-2 xl:px-5 xl:py-3 hover:bg-opacity-50 text:sm lg:text-base 2xl:text-lg">
                Explore
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

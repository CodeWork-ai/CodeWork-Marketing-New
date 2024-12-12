import ShineBorder from "../../../components/ui/shine-border";
import { TbCloudCode } from "react-icons/tb";

export function ShineBorderDemo({item}) {
  return (
    <ShineBorder
      className="relative flex h-[400px] max-w-[250px] w-full flex-col bg-black bg-opacity-50 items-center justify-center overflow-hidden rounded-lg md:shadow-xl"
      color={["#1dcaf5", "#f04f57"]}
    >
      <div className="text-white space-y-1 lg:space-y-3 2xl:space-y-5">
        <div>{item.desktop_icon}</div>
        <h2 className="text-base lg:text-lg 2xl:text-xl text-gray-300">{item.title}</h2>
        <h3 className="text-sm lg:text-base 2xl:text-lg text-gray-400">{item.description}</h3>
      </div>
    </ShineBorder>
  );
}

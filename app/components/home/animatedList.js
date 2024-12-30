"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "../../../components/ui/animated-list";
import { FaRobot, FaPalette, FaChartLine, FaCommentDots, FaDatabase, FaLock, FaChartBar, FaHeadset } from "react-icons/fa";
import Link from "next/link";
import ShineBorder from "@/components/ui/shine-border";

let notifications = [
  {
    name: "AI Consulting",
    description: "Custom AI solutions to automate workflows and drive business growth. Unlock the full potential of AI with tailored strategies.",
    time: "15m ago",
    icon: <FaRobot className="w-10 h-10 text-[#6A1B9A]" />,
    color: "#6A1B9A", // Purple for innovation and technology
  },
  {
    name: "Generative AI",
    description: "Transform workflows with AI-powered content creation, design assistance, and idea generation to boost creativity and efficiency.",
    time: "10m ago",
    icon: <FaPalette className="w-10 h-10 text-[#FF7043]" />,
    color: "#FF7043", // Orange for creativity and energy
  },
  {
    name: "Machine Learning",
    description: "Leverage advanced frameworks like TensorFlow to gain predictive insights, automate processes, and enable data-driven decisions.",
    time: "8m ago",
    icon: <FaChartLine className="w-10 h-10 text-[#388E3C]" />,
    color: "#388E3C", // Green for growth and intelligence
  },
  {
    name: "Natural Language Processing",
    description: "Smarter communication with NLP solutions for text analysis, customer support automation, and insight extraction from data.",
    time: "6m ago",
    icon: <FaCommentDots className="w-10 h-10 text-[#1976D2]" />,
    color: "#1976D2", // Blue for trust and clarity
  },
  {
    name: "Data Engineering",
    description: "Build a robust data foundation with scalable infrastructure to organize, process, and unlock the power of your data.",
    time: "4m ago",
    icon: <FaDatabase className="w-10 h-10 text-[#FBC02D]" />,
    color: "#FBC02D", // Yellow for structure and foundation
  },
  {
    name: "Cyber Security",
    description: "Protect your digital assets with advanced threat detection and robust cybersecurity solutions for peace of mind.",
    time: "3m ago",
    icon: <FaLock className="w-10 h-10 text-[#D32F2F]" />,
    color: "#D32F2F", // Red for alert and security
  },
  {
    name: "Predictive Analytics",
    description: "Stay ahead with AI-driven models that analyze trends, forecast outcomes, and deliver actionable insights for smarter decisions.",
    time: "2m ago",
    icon: <FaChartBar className="w-10 h-10 text-[#0288D1]" />,
    color: "#0288D1", // Light blue for insights and clarity
  },
  {
    name: "AI-Chatbots",
    description: "Streamline customer engagement with intelligent chatbots offering real-time responses and improving communication.",
    time: "1m ago",
    icon: <FaHeadset className="w-10 h-10 text-[#673AB7]" />,
    color: "#673AB7", // Dark purple for interactive intelligence
  },
];


notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[700px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-black bg-opacity-50 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-start gap-3">
        <div
          className="flex size-10 items-start justify-start rounded-2xl"
          style={{
            backgroundColor: 'none',
          }}
        >
          <span className="text-lg text-start">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium ">
            <span className="text-sm sm:text-lg text-gray-200">{name}</span>
            {/* <span className="mx-1">·</span> */}
            {/* <span className="text-xs text-gray-500">{time}</span> */}
          </figcaption>
          <p className="text-xs md:text-sm font-normal text-gray-300">
            {description}
          </p>
          <div className="text-sm mt-1 md:mt-2 text-red-400 hover:font-semibold">Read More</div>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListRoute({className}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg md:shadow-xl bg-black bg-opacity-0",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
            <Link key={idx} href={'/expertise'}>
                <ShineBorder className="relative flex flex-col bg-black bg-opacity-50 overflow-hidden rounded-lg md:shadow-xl" color={["#1dcaf5", "#f04f57"]}>
          <Notification className='bg-black' {...item} />
          </ShineBorder>
          </Link>
        ))}
      </AnimatedList>
    </div>
  );
}

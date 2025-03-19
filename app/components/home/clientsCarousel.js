import React from 'react';
import Image from 'next/image';
import Marquee from "../../../components/ui/marquee";
import { useTheme } from "next-themes";
import { MagicCard } from "../../../components/ui/magic-card";

const reviews = [
    { title: 'Client One', logo: '/littlesparkslogo.png', width: 300, height: 100 },
    { title: 'Client Two', logo: '/Storefries.svg', width: 70, height: 30 },
    { title: 'Client Three', logo: '/mtm.svg', width: 130, height: 70 },
    { title: 'Client Four', logo: '/nalamlogo.png', width: 50, height: 10 },
    { title: 'Client Five', logo: '/intulogic.png', width: 120, height: 60 },
    { title: 'Client Six', logo: '/alkyne.png', width: 130, height: 70 },
    { title: 'Client Seven', logo: '/websignx.png', width: 120, height: 80 },
];

const firstRow = reviews
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    title,
    logo,
    width,
    height,
}) => {
    const { theme } = useTheme();
    return (
        <div
            className="flex justify-center items-center bg-transparent bg-black bg-opacity-30 p-2 rounded-lg"
        >
            <MagicCard
                className="flex border border-gray-600 items-center justify-center w-32 h-24 sm:w-32 sm:h-28 md:w-40 md:h-32 lg:w-44 lg:h-36 mx-2 bg-transparent"
                gradientColor={theme === "dark" ? "#fc0335" : "#541522"}
            >
                <Image
                    alt={title}
                    src={logo}
                    width={width}
                    height={height}
                    className="object-contain w-full h-full"
                />
            </MagicCard>
        </div>
    );
};

export function Clients() {
    return (
        <div className="relative mt-10 md:mt-40 py-10 md:py-20 flex md:h-[4y00px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl bg-black bg-opacity-10">
            <h2 className="text-center text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-gray-200 mb-4 md:mb-8">Our Happy Clients</h2>
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.title} {...review} />
                ))}
            </Marquee>
            {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
        </div>
    );
}

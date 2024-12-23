import React from 'react';
import Image from 'next/image';
import { Carousel, Card } from 'antd';

const clientData = [
    { title: 'Client One', logo: '/client1.png', width: 100, height: 50 },
    { title: 'Client Two', logo: '/client2.png', width: 120, height: 60 },
    { title: 'Client Three', logo: '/client3.png', width: 130, height: 70 },
    { title: 'Client Four', logo: '/client4.png', width: 100, height: 50 },
    { title: 'Client Five', logo: '/client5.png', width: 120, height: 60 },
    { title: 'Client Six', logo: '/client6.png', width: 130, height: 70 },
    { title: 'Client Seven', logo: '/client7.png', width: 130, height: 70 },
];

export const Clients = () => {
    const carouselSettings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024, // Desktop
                settings: { slidesToShow: 5 },
            },
            {
                breakpoint: 768, // Tablet and larger mobile screens
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 480, // Smaller mobile screens
                settings: { slidesToShow: 3 },
            },
        ],
    };

    return (
        <div className="w-full mt-10 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-0 py-5">
            <h2 className="text-center text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-gray-300 font-bold mb-6">
                Our Happy Clients
            </h2>
            <Carousel {...carouselSettings} className="flex items-center justify-center">
                {clientData.map((card, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center bg-transparent bg-black bg-opacity-30 p-2 rounded-lg"
                    >
                        <Card
                            className="flex items-center justify-center w-28 h-24 sm:w-32 sm:h-28 md:w-40 md:h-32 lg:w-44 lg:h-36 mx-2 bg-transparent border-0" // Removed border
                        >
                            <Image
                                alt={card.title}
                                src={card.logo}
                                width={card.width}
                                height={card.height}
                                className="object-contain w-full h-full"
                                priority={index < 3}
                            />
                        </Card>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};


import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Motive from './motive';
import { GlobeDemo } from './globe';

const HomeHeader = () => {
    return (
        <div>
            <div className="h-screen">
                <div className="h-full overflow-hidden">
                    <section className="relative h-full">
                        {/* Content on Top of Image */}
                        <div className="h-full relative z-10 flex justify-center text-white pt-36">
                            <div>
                                <div className="px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 2xl:40 mb-14">
                                    <Motive />
                                </div>
                                <div className="px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 2xl:40">
                                    <div className="hidden md:flex space-x-5">
                                        <Link href="/contact-ai-solutions">
                                            <button className="bg-[#f62a71] hover:bg-opacity-80 text-black font-semibold rounded-sm px-2 py-1 md:px-3 md:py-2 xl:px-5 xl:py-3 text-sm md:text-sm xl:text-base 2xl:text-lg">
                                                Free Consulting
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="md:hidden w-full space-y-4">
                                        <div className="w-full">
                                            <Link href="/contact-ai-solutions">
                                                <button className="bg-[#FF035B] hover:bg-red-400 text-black hover:text-white w-full py-2">
                                                    Free Consulting
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {/* <div className="h-screen"><GlobeDemo/></div> */}
        </div>
    );
};

export default HomeHeader;

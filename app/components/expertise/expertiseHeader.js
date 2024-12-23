import React from 'react';

const ExpertiseHeader = () => {
    return (
        <div className='px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 mb-16'>
            <div className="h-full">
                <div className="h-full overflow-hidden">
                    <section className="relative h-full">
                        {/* Content on Top of Image */}
                        <div className="h-full relative z-10 flex text-white pt-36 pb-10">
                            <div className='w-full space-y-5'>
                                <div className="W-2/6 text-2xl md:text-2xl lg:text-4xl 2xl:text-6xl text-gray-300">Empowering Innovation with AI and Advanced Technologies</div>
                                <div className='w-4/6 text-base md:text-lg lg:text-xl 2xl:text-2xl text-gray-400'>At Codework, we are driven by a passion for delivering intelligent, future-ready solutions powered by Artificial Intelligence and advanced technologies. Our expertise spans across key areas that help businesses innovate, grow, and stay ahead in the fast-evolving digital landscape. From AI consulting to Predictive Analytics, we bring the right mix of technology and strategy to solve real-world challenges. </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ExpertiseHeader;

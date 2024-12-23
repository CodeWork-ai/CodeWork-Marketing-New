import React from 'react';

const AboutHeader = () => {
    return (
        <div className='px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 bg-black bg-opacity-40'>
            <div className="h-full pb-16">
                <div className="h-full overflow-hidden">
                    <section className="relative h-full">
                        {/* Content on Top of Image */}
                        <div className="h-full relative z-10 flex text-white pt-36 pb-10">
                            <div className='w-full space-y-5'>
                                <div className="W-2/6 text-2xl md:text-2xl lg:text-4xl 2xl:text-6xl text-gray-200">
                                <h1>Who We Are: Shaping Tomorrow with AI-Powered Technology</h1></div>
                                <div className='w-4/6 text-base md:text-lg lg:text-xl 2xl:text-2xl text-gray-200'>Welcome to Codework, where innovation meets intelligence. We are a technology-driven company leveraging cutting-edge AI technology to transform businesses and drive success.</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutHeader;
import React from 'react';

const GroupHeader = () => {
    return (
        <div className='px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 mb-16'>
            <div className="h-full">
                <div className="h-full overflow-hidden">
                    <section className="relative h-full">
                        {/* Content on Top of Image */}
                        <div className="h-full relative z-10 flex text-white pt-36 pb-10">
                            <div className='w-full space-y-5'>
                                <div className="W-2/6 text-2xl md:text-2xl lg:text-4xl 2xl:text-6xl text-gray-300">Welcome to AI Connect Group! 🚀</div>
                                <div className='w-4/6 text-base md:text-lg lg:text-xl 2xl:text-3xl text-gray-400'>
                                A space where innovators, learners, and AI enthusiasts come together to explore the endless possibilities of artificial intelligence.</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default GroupHeader;

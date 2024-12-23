import React from 'react';

const TeamHeader = () => {
    return (
        <div className='px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 mb-16'>
            <div className="h-full">
                <div className="h-full overflow-hidden">
                    <section className="relative h-full">
                        {/* Content on Top of Image */}
                        <div className="h-full relative z-10 flex text-white pt-36 pb-10">
                            <div className='w-full space-y-5'>
                                <div className="W-2/6 text-2xl md:text-2xl lg:text-4xl 2xl:text-6xl text-gray-300">Management Team</div>
                                <div className='w-4/6 text-base md:text-lg lg:text-xl 2xl:text-2xl text-gray-400'>The management team at CodeWork is composed of visionary leaders with extensive experience in the technology industry. They bring a wealth of knowledge and strategic insight, guiding the company with a clear focus on innovation, quality, and client satisfaction.</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TeamHeader;

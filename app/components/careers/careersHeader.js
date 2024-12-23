import React from 'react';

const CareersHeader = () => {
    return (
        <div className='px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 bg-black bg-opacity-40'>
            <div className="h-full pb-16">
                <div className="h-full overflow-hidden">
                    <section className="relative h-full">
                        {/* Content on Top of Image */}
                        <div className="h-full relative z-10 flex text-white pt-36 pb-10">
                            <div className='w-full space-y-5'>
                                <div className="W-2/6 text-2xl md:text-2xl lg:text-4xl 2xl:text-6xl text-gray-200">
                                <h1>Join Our Team</h1></div>
                                <div className='w-4/6 text-base md:text-lg lg:text-xl 2xl:text-2xl text-gray-200'>At Codework, we’re on a mission to shape the future with cutting-edge AI technology. Become part of a team that values innovation, collaboration, and excellence.</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CareersHeader;
import React from 'react';

const GetInTouchHeader = () => {
    return (
        <div className='px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 mb-16'>
            <div className="h-full">
                <div className="h-full overflow-hidden">
                    <section className="relative h-full">
                        {/* Content on Top of Image */}
                        <div className="h-full relative z-10 flex text-white pt-36 pb-10">
                            <div className='w-full space-y-5'>
                                <div className="W-2/6 text-2xl md:text-2xl lg:text-4xl 2xl:text-6xl text-gray-300">Empower Your Business with AI Solutions
                                </div>
                                <div className='w-4/6 text-base md:text-lg lg:text-xl 2xl:text-2xl text-gray-400'>Unlock the power of AI to drive your business forward with intelligent solutions tailored to your needs.</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default GetInTouchHeader;
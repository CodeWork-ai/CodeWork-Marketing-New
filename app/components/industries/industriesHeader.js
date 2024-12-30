import React from 'react';

const IndustriesHeader = () => {
    return (
        <div className='px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 bg-black bg-opacity-40'>
            <div className="h-full">
                <div className="h-full overflow-hidden">
                    <section className="relative h-full">
                        {/* Content on Top of Image */}
                        <div className="h-full relative z-10 flex text-white pt-36 pb-10">
                            <div className='w-full space-y-5'>
                                <div className="W-2/6 text-2xl md:text-2xl lg:text-4xl 2xl:text-6xl text-gray-300">Discover Our Innovations</div>
                                <div className='w-4/6 text-base md:text-lg lg:text-xl 2xl:text-3xl text-gray-400'>
                                At Codework, we excel in leveraging innovative AI and blockchain technologies to transform industries, drive efficiency, and unlock new possibilities. Our solutions are designed to meet the unique needs of various sectors, ensuring that we stay ahead of the curve and deliver exceptional value to our clients.</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default IndustriesHeader;

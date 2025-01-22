import Link from 'next/link';
import React from 'react';

const BlogHeader = () => {
    return (
        <div className='px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 mb-16'>
            <div className="h-full">
                <div className="h-full overflow-hidden">
                    <section className="relative h-full">
                        {/* Content on Top of Image */}
                        <div className="h-full relative z-10 flex text-white pt-36 pb-10">
                            <div className='w-full space-y-5'>
                                <div className="W-2/6 text-2xl md:text-2xl lg:text-4xl 2xl:text-6xl text-gray-200">Welcome to Our Blog! 📝</div>
                                <div className='w-4/6 text-base md:text-lg lg:text-xl 2xl:text-3xl text-gray-200'>
                                    Discover insights, stories, and updates from our amazing team and contributors. Stay informed and inspired!
                                </div>
                                <div>
                                    <Link href='/create-blog' className="mt-5 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-lg font-medium">
                                        Create Blog
                                    </Link>
                                </div>
                            </div>  
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default BlogHeader;


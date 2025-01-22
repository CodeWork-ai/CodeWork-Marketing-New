import React from 'react';
import BlogHeader from '../components/blogs/blogHeader';
import Blogs from '../components/blogs/blogs';

const Page = () => {
    return (
        <div className="text-white pb-5">
            <BlogHeader />
            <Blogs/>
        </div>
    );
};

export default Page;

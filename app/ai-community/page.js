import React from 'react';
import GroupsFeed from '../components/group/group';
import GroupHeader from '../components/group/groupHeader';

const Page = () => {
    return (
        <div className="text-white pb-5">
            <GroupHeader />
            <GroupsFeed />
        </div>
    );
};

export default Page;

import React from 'react';
import { RainbowButton } from '../../../components/ui/rainbow-button';

const GroupsFeed = () => {
  return (
    <div className="bg-black bg-opacity-70 text-white px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 py-32 font-sans">
      <h2 className="text-lg font-bold">Groups Feed</h2>
      <p className="text-gray-200">View groups and posts below.</p>

      {/* Post Container */}
      <div className="bg-black bg-opacity-0 border border-gray-800 rounded-lg p-5 mt-5">
        <p className="text-xs text-gray-200">This post is from a suggested group</p>
        <RainbowButton className="float-right">
          Coming soon
        </RainbowButton>
        <div className="flex items-start mt-4">
          <img
            src="https://via.placeholder.com/50" // Replace with actual profile picture URL
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <h3 className="text-md font-bold">Jordan</h3>
            <p className="text-xs text-gray-200">6 days ago • posted in CodeWork Group</p>
            <p className="mt-2 text-sm">
              Welcome to our group <span className="font-bold">CodeWork Group</span>! A space for us to connect and
              share with each other. Start by posting your thoughts, sharing media, or creating a poll.
            </p>
            <div className="flex items-center mt-4 space-x-4 text-gray-200 text-sm">
              <button className="flex items-center hover:text-gray-200">
                <span className="material-icons">thumb_up</span>
                <span className="ml-1">0</span>
              </button>
              <button className="flex items-center hover:text-gray-200">
                <span className="material-icons">comment</span>
                <span className="ml-1">0 Comments</span>
              </button>
              <span className="flex items-center">
                <span className="material-icons">visibility</span>
                <span className="ml-1">21 Views</span>
              </span>
            </div>
          </div>
        </div>
        <textarea
          className="w-full bg-black bg-opacity-40 border border-gray-600 text-sm text-gray-200 h-36 mt-4 p-2 rounded-md"
          placeholder="Write a comment..."
        ></textarea>
      </div>

      {/* Suggested Groups */}
      <div className="mt-5">
        <h3 className="text-lg font-semibold">Suggested Groups</h3>
        <div className="flex items-center mt-3">
          <img
            src="https://via.placeholder.com/50" // Replace with actual group image URL
            alt="Group"
            className="w-12 h-12 rounded-md"
          />
          <div className="ml-3">
            <h4 className="text-sm font-bold">CodeWork Group</h4>
            <p className="text-xs text-gray-200">2 members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupsFeed;

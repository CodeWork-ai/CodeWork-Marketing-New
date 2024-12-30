import React from 'react';
import Image from 'next/image';
import TypingAnimation from '../../../components/ui/typing-animation';
import LetterPullup from '../../../components/ui/letter-pullup';

const IndustryDetail = ({ heading, description, imageUrl, altText }) => {
  return (
    <div className="md:flex items-center justify-between px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 h-screen bg-black bg-opacity-60">
      <div className="flex-1 mr-5">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{heading}</h1>
        <p className="text-gray-300 text-base md:text-lg lg:text-xl">{description}</p>
      </div>
      <div className="flex-1 text-center mt-5 md:mt-0">
        <Image src={imageUrl} alt={altText} className="rounded-lg" width={1000} height={700} />
      </div>
    </div>
  );
};

export default IndustryDetail;
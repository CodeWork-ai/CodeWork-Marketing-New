"use client";
import React, { useState, useEffect } from "react";

export default function PopGifModal() {
  // Start by showing the pop-up
  const [isOpen, setIsOpen] = useState(true);

  // Automatically close after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 5000);

    // Clear timer if component unmounts before 5s
    return () => clearTimeout(timer);
  }, []);

  // If not open, don't render anything
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={() => setIsOpen(false)}
    >
      {/* Modal content container */}
      <div
        className="relative bg-white p-4 rounded shadow-md"
        onClick={(e) => e.stopPropagation()} // Prevent closing if clicked inside
      >
        {/* Close button */}
        <button
          className="absolute top-0 right-1 text-4xl font-bold"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>

        {/* The GIF itself */}
        <img
          src="/gif.gif"
          alt="Pop-up GIF"
          // Tailwind: fixed width & height of 500px
          className="w-[500px] h-[500px] object-cover"
        />
      </div>
    </div>
  );
}

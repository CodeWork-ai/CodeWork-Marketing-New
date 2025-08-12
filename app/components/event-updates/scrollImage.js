"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollImage = () => {
  useEffect(() => {
    document.scrollingElement.scrollTo(0, 0);
    handleScroll();
    return () => {};
  }, []);

  const handleScroll = () => {
    ScrollTrigger.defaults({
      scroller: '.scroller',
    });

    gsap.utils.toArray('section').forEach((section, index) => {
      const wrapper = section.querySelector('.wrapper');
      const [xStart, xEnd] =
        index % 2
          ? ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1]
          : [wrapper.scrollWidth * -1, 0];
      gsap.fromTo(
        wrapper,
        { x: xStart },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        }
      );
    });
  };

  return (
    <div className="scroller h-screen overflow-auto text-[12vw] overflow-x-hidden bg-cream">
      <section className="h-fit py-8">
        <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
          Keep smiling
        </div>
      </section>
      
      {/* 4 Columns with 6 images each */}
      {[1, 2, 3, 4].map((columnIndex) => (
        <section key={columnIndex} className="py-4">
          <div className="wrapper flex text-[16vh] font-medium">
            {[1, 2, 3, 4, 5, 6].map((rowIndex) => (
              <img
                key={`${rowIndex}-${columnIndex}`}
                className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer"
                src={`/Events&Update/image${rowIndex}${columnIndex}.jpg`}
                alt={`Event image row ${rowIndex}, column ${columnIndex}`}
              />
            ))}
          </div>
        </section>
      ))}
      
      <section className="h-fit py-8">
        <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
          because life is a beautiful thing
        </div>
      </section>
      
      <section className="h-fit py-8">
        <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
          and there's so much to smile about.
        </div>
      </section>
    </div>
  );
};

export default ScrollImage;

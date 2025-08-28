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
    <>
      <div className="scroller h-screen overflow-auto text-[12vw] overflow-x-hidden bg-primary scrollbar-thin scrollbar-track-transparent scrollbar-thumb-secondary/60 hover:scrollbar-thumb-secondary/80">
        <section className="h-fit py-8">
          <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap text-secondary">
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
                  className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30"
                  src={`/Events&Update/image${rowIndex}${columnIndex}.jpg`}
                  alt={`Event image row ${rowIndex}, column ${columnIndex}`}
                />
              ))}
            </div>
          </section>
        ))}
        
        <section className="h-fit py-8">
          <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap text-secondary">
            because life is a beautiful thing
          </div>
        </section>
        
        <section className="h-fit py-8">
          <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap text-secondary">
            and there's so much to smile about.
          </div>
        </section>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scroller::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        
        .scroller::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scroller::-webkit-scrollbar-thumb {
          background-color: rgba(6, 182, 212, 0.6);
          border-radius: 20px;
          border: none;
        }
        
        .scroller::-webkit-scrollbar-thumb:hover {
          background-color: rgba(6, 182, 212, 0.8);
        }
        
        .scroller::-webkit-scrollbar-corner {
          background: transparent;
        }
        
        /* For Firefox */
        .scroller {
          scrollbar-width: thin;
          scrollbar-color: rgba(6, 182, 212, 0.6) transparent;
        }
      `}</style>
    </>
  );
};

export default ScrollImage;

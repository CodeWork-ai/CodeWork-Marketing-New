"use client";
import { Scroll } from '@react-three/drei';
import React from 'react';

const ScrollAnimatedRows = () => {
  return (
    <>
      <style jsx>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        .scroll-container {
          /* Hide on mobile view */
          display: block;
        }

        .row {
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          height: 70vh; /* Kept exactly as before */
          position: relative;
          overflow: hidden;
        }

        .text-holder {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0%;
          -webkit-clip-path: inset(0px 0px 0px 0px);
          clip-path: inset(0px 0px 0px 0px);
          background: rgba(0, 0, 0, 0.4); /* Optional overlay for better text readability */
        }

        .text {
          transform: translateZ(0);
          color: #fff;
          white-space: nowrap;
          justify-content: center;
          align-items: center;
          margin-top: 0;
          margin-bottom: 0;
          font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          font-size: 7vw;
          font-weight: 700;
          line-height: 1em;
          display: flex;
          position: fixed;
          inset: 0%;
          letter-spacing: -0.03em;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        /* Enhanced text styles only */
        .text-innovation {
          background: linear-gradient(135deg, #1ad0e1 0%, #00bcd4 50%, #26c6da 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .text-starts {
          color: #1ad0e1;
          font-weight: 800;
          font-style: italic;
          text-shadow: 0 2px 10px rgba(4, 12, 38, 0.3);
          letter-spacing: -0.01em;
        }

        .text-conversation {
          background: linear-gradient(135deg, #1ad0e1 0%, #00e5ff 50%, #18ffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          text-transform: capitalize;
          letter-spacing: 0.01em;
        }

        /* Mobile Hidden - Hide entire component on mobile */
        @media (max-width: 768px) {
          .scroll-container {
            display: none;
          }
        }

        /* Tablet and smaller screens */
        @media (max-width: 1024px) and (min-width: 769px) {
          .text {
            font-size: 8vw;
          }
        }

        /* Responsive typography for larger screens only */
        @media (min-width: 769px) {
          .text {
            font-size: 7vw;
          }
        }
      `}</style>
      
      <div className="scroll-container">
        {/* Row 1 - Innovation with background image */}
        <div className="row" style={{ backgroundImage: 'url(/three.jpg)' }}>
          <div className="text-holder">
            <div className="text text-innovation">AI doesn't get tired</div>
          </div>
        </div>
        
        {/* Row 2 - Starts with a with background image */}
        <div className="row" style={{ backgroundImage: 'url(/two.jpg)' }}>
          <div className="text-holder">
            <div className="text text-starts">It doesn't take breaks</div>
          </div>
        </div>
        
        {/* Row 3 - Conversation with background image */}
        <div className="row" style={{ backgroundImage: 'url(/one.jpg)' }}>
          <div className="text-holder">
            <div className="text text-conversation">And never stops learning</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollAnimatedRows;

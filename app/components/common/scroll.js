"use client";
import React from 'react';

const AnimatedRows = () => {
  return (
    <>
      <style jsx>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        .row {
          background-color: #0000;
          background-position: 0 0;
          background-size: cover;
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
          color: #040c26;
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

        /* Responsive typography only */
        @media (max-width: 768px) {
          .text {
            font-size: 12vw;
          }
        }

        @media (max-width: 480px) {
          .text {
            font-size: 14vw;
          }
        }
      `}</style>
      
      <div className="row" style={{ backgroundColor: '#040c26' }}>
        <div className="text-holder">
          <div className="text text-innovation">Innovation</div>
        </div>
      </div>
      
      <div className="row" style={{ backgroundColor: '#1ad0e1' }}>
        <div className="text-holder">
          <div className="text text-starts">Starts with a</div>
        </div>
      </div>
      
      <div className="row">
        <div className="text-holder" style={{ backgroundColor: '#040c26' }}>
          <div className="text text-conversation">Conversation</div>
        </div>
      </div>
    </>
  );
};

export default AnimatedRows;

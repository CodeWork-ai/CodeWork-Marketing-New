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
          height: 70vh; /* Reduced from 100vh to 70vh (30% reduction) */
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
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          font-size: 7vw;
          font-weight: bold;
          line-height: 1em;
          display: flex;
          position: fixed;
          inset: 0%;
        }
      `}</style>
      <div className="row" style={{ backgroundColor: '#040c26' }}>
        <div className="text-holder">
          <div className="text" style={{ color: '#1ad0e1' }}>Innovation</div>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: '#1ad0e1' }}>
        <div className="text-holder">
          <div className="text" style={{ color: '#040c26' }}>Starts with a</div>
        </div>
      </div>
      <div className="row">
        <div className="text-holder" style={{ backgroundColor: '#040c26' }}>
          <div className="text" style={{ color: '#1ad0e1' }}>Conversation</div>
        </div>
      </div>
    </>
  );
};

export default AnimatedRows;

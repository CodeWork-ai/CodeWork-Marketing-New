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
          height: 100vh;
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
      <div className="row" style={{ backgroundColor: '#AE97CB' }}>
        <div className="text-holder">
          <div className="text" style={{ color: '#2B0955' }}>Hello world.</div>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: '#2B0955' }}>
        <div className="text-holder">
          <div className="text" style={{ color: '#AE97CB' }}>How are you?</div>
        </div>
      </div>
      <div className="row">
        <div className="text-holder" style={{ backgroundColor: '#AE97CB' }}>
          <div className="text" style={{ color: '#2B0955' }}>Let's go!</div>
        </div>
      </div>
    </>
  );
};

export default AnimatedRows;

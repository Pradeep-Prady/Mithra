import React, { useState, useEffect } from "react";

import bg2 from "./images/bg3.jpg";
import Cracks from "./images/Cracks.svg";
import design1 from "./images/designelement-1.svg";
import design2 from "./images/designelement-2.svg";
import "./launch.css";
const Launch = ({ onClose }) => {
  const [litCount, setLitCount] = useState(0);
  const [count, setCount] = useState(10);
  const [isLaunched, setIsLaunched] = useState(false);

  const handleLampLit = () => {
    setLitCount((prevCount) => prevCount + 1);
  };

  const startLaunch = () => {
    setIsLaunched(true);
    setLitCount(1);
  };

  useEffect(() => {
    let countdown;
    if (isLaunched && count > 0) {
      countdown = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    }

    // Clear the interval on component unmount or when count reaches 0
    return () => clearInterval(countdown);
  }, [isLaunched, count]);

  useEffect(() => {
    if (count === 0) {
      onClose();
    }
  }, [count, onClose]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-end gap-3 z-[9999] bg-black bg-opacity-80"
      style={{
        cursor: "url(/cursor.cur), auto",
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute flex w-full md:gap-5 h-[300px] -top-5 md:-top-20">
        <div
          className="w-1/6 h-[100px] md:h-[400px] mt-5 md:mt-10 bg-cover md:bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${design1})` }}
        ></div>
        <div
          className="w-1/6 h-[100px] md:h-[400px]  mt-0 bg-cover md:bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${design1})` }}
        ></div>{" "}
        <div
          className="w-1/6 h-[100px] md:h-[400px] mt-5 md:mt-10 bg-cover md:bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${design1})` }}
        ></div>{" "}
        <div
          className="w-1/6 h-[100px] md:h-[400px] md:mt-0 bg-cover md:bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${design1})` }}
        ></div>{" "}
        <div
          className="w-1/6 h-[100px] md:h-[400px] mt-5 md:mt-10 bg-cover md:bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${design1})` }}
        ></div>{" "}
        <div
          className="w-1/6 h-[100px] md:h-[400px] mt-0 bg-cover md:bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${design1})` }}
        ></div>
      </div>

      {/* Cracks */}
      <div className="absolute flex justify-between w-full h-[150px] -bottom-5">
        <div
          className="w-[200px] h-[700px] bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${Cracks})` }}
        ></div>
        <div
          className="w-[200px] h-[700px] bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${Cracks})` }}
        ></div>
      </div>

      <h1 className="text-2xl md:text-8xl font-bold text-white z-[99999] t  pointer-events-none">
        Mithra Enterprises
      </h1>

      <div className="text-center">
        <h1 className="text-xl md:text-3xl font-bold my-7 text-white z-[99999] t  pointer-events-none">
          Official Launch at
        </h1>
        <h1 className="text-xl md:text-3xl font-bold my-7 text-white z-[99999] t  pointer-events-none">
          08-11-2024
        </h1>
      </div>

      {/* <div className="flex items-center my-7 justify-center">
        {!isLaunched ? (
          <>
            <button className="launchbtn" onClick={startLaunch}>
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Launch</span>
            </button>
          </>
        ) : (
          <span className="text-9xl text-white  font-black">{count}</span>
        )}
      </div> */}
      <div className="h-[70px]"></div>
    </div>
  );
};

export default Launch;

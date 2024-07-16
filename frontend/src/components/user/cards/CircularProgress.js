import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


    {/* <div className="absolute z-50 bottom-2 right-2 w-10 h-10">
        <CircularProgress duration={5000} key={slideIndex} />
      </div> */}

      
const CircularProgress = ({ duration }) => {
  const [progress, setProgress] = useState(0);
  const [remainingTime, setRemainingTime] = useState(Math.ceil(duration / 1000));

  useEffect(() => {
    let interval;
    const start = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - start;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      setRemainingTime(Math.ceil((duration - elapsed) / 1000));

      if (newProgress >= 100) {
        clearInterval(interval);
      }
    };

    interval = setInterval(updateProgress, 100);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="relative">
      <CircularProgressbar
        value={progress}
        styles={buildStyles({
          pathColor: "#ff0000",
          trailColor: "#d6d6d6",
          pathTransitionDuration: 0.1,
        })}
      />
      <div className="absolute inset-0 flex items-center justify-center text-xs md:text-sm lg:text-base">
        {remainingTime}s
      </div>
    </div>
  );
};

export default CircularProgress;

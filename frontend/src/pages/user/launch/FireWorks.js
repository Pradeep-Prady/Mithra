import { Fireworks } from "@fireworks-js/react";
import { useEffect, useState } from "react";

const FireworksDisplay = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [showFireworks, setShowFireworks] = useState(true); // State to control visibility

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Stop fireworks after 2 minutes (120000 ms)
    const timer = setTimeout(() => setShowFireworks(false), 60000);

    // Cleanup event listeners and timeout on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className="w-full h-screen bg-transparent fixed bottom-0 right-0 z-[9999999999] pointer-events-none"
    >
      {showFireworks && (
        <Fireworks
          options={{
            rocketsPoint: { min: 50, max: 50 },
            hue: { min: 0, max: 360 },
            delay: { min: 20, max: 40 },
            speed: 5,
            acceleration: 1.01,
            friction: 0.98,
            gravity: 1.5,
            particles: 100,
            trace: 3,
            explosion: 2,
            brightness: { min: 50, max: 80 },
            decay: { min: 0.015, max: 0.03 },
            boundaries: {
              x: 0,
              y: 0,
              width: dimensions.width,
              height: dimensions.height,
            },
            mouse: { click: false, move: false, max: 1 },
            sound: { enabled: false, files: [], volume: { min: 1, max: 2 } },
          }}
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
};

export default FireworksDisplay;

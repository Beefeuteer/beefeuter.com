import React, { useState, useEffect, useRef } from "react";

const RandomWalker = ({ color, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [path, setPath] = useState([]);
  const canvasRef = useRef(null);
  const viewportRef = useRef(null);
  let startX = 0;
  let startY = 0;

  useEffect(() => {
    const viewport = viewportRef.current.getBoundingClientRect();
    console.log("viewport: ", viewport, index);
    if (index === 0) {
      startX = viewport.width;
      startY = viewport.height;
    } else if (index === 1) {
      startX = viewport.width;
      startY = 0;
    } else if (index === 2) {
      startX = 0;
      startY = viewport.height;
    } else if (index === 3) {
      startX = 0;
      startY = 0;
    }

    setPosition({ x: startX, y: startY });
  }, []);

  useEffect(() => {
    const stepSize = 20;

    const interval = setInterval(() => {
      setPosition((prevState) => {
        const viewport = viewportRef.current.getBoundingClientRect();
        const corner = getRandomCorner(viewport);

        const dx = stepSize * Math.cos(corner.angle);
        const dy = stepSize * Math.sin(corner.angle);
        let newPosition = { x: prevState.x + dx, y: prevState.y + dy };
        // Check if newPosition is outside the viewport
        if (newPosition.x < 0) {
          newPosition.x = 0;
        } else if (newPosition.x > viewport.width) {
          newPosition.x = viewport.width;
        }
        if (newPosition.y < 0) {
          newPosition.y = 0;
        } else if (newPosition.y > viewport.height) {
          newPosition.y = viewport.height;
        }
        setPath((prevPath) => [...prevPath, newPosition]);
        return newPosition;
      });
    }, 200);

    const stopTime = 150000; // 10 seconds in milliseconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, stopTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = color;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(path[0]?.x, path[0]?.y);
    for (let i = 1; i < path.length; i++) {
      ctx.lineTo(path[i].x, path[i].y);
    }
    ctx.stroke();
  }, [path, color]);

  const getRandomCorner = (viewport) => {
    const corner = Math.random();

    if (corner < 0.25) {
      // top
      return { x: viewport.width / 2, y: 0, angle: Math.PI / 2 };
    } else if (corner < 0.5) {
      // right
      return { x: viewport.width, y: viewport.height / 2, angle: 0 };
    } else if (corner < 0.75) {
      // bottom
      return {
        x: viewport.width / 2,
        y: viewport.height,
        angle: (3 * Math.PI) / 2,
      };
    } else {
      // left
      return { x: 0, y: viewport.height / 2, angle: Math.PI };
    }
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        width={window.innerWidth - 20}
        height={window.innerHeight - 20}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <div
        ref={viewportRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: window.innerWidth - 20,
          height: window.innerHeight - 20,

          overflow: "hidden",
        }}
      />
    </>
  );
};

const RandomWalkerGenerator = () => {
  return (
    <>
      <RandomWalker color="#40404040" index={0} />
      <RandomWalker color="#40404040" index={1} />
      <RandomWalker color="#40404040" index={2} />
      <RandomWalker color="#40404040" index={3} />
    </>
  );
};

export default RandomWalkerGenerator;

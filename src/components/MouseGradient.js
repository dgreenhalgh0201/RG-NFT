import { React, useEffect, useState } from "react";

const Mouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1, y: -1 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const getRadialGradient = () => {
    return `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #ff00ff, #00ffff)`;
  };

  return (
    <div
      style={{
        background: getRadialGradient(),
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
    />
  );
};

export default Mouse;

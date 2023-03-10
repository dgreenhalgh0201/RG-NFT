import { React, useEffect, useState } from "react";

const Mouse = ({ children }) => {
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

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
    >
      {children(mousePosition)}
    </div>
  );
};

export default Mouse;

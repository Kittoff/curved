import { useMotionValue } from "framer-motion";
import React, { useEffect } from "react";

const useMouse = () => {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  useEffect(() => {
    const mouseMove = (e) => {
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [mouse.x, mouse.y]);

  return mouse;
};

export default useMouse;

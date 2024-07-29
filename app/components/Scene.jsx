import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model";

const Scene = () => {
  return (
    <div className="h-screen relative w-screen">
      <Canvas>
        <Model />
      </Canvas>
    </div>
  );
};

export default Scene;

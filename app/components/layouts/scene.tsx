"use client";

import { Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { memo, ReactElement, useRef } from "react";

export const Scene = memo((): ReactElement => {
  const referenceStar = useRef<any>();

  const RenderStars = () => {
    useFrame(() => (referenceStar.current.rotation.y += 0.001));

    return (
      <Stars
        ref={referenceStar}
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    );
  };

  return (
    <div className="w-full h-screen fixed top-0 left-0 -z-10">
      <Canvas>
        <RenderStars />
      </Canvas>
    </div>
  );
});

Scene.displayName = "Three JS Scene";

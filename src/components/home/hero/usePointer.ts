import { useEffect, useRef } from "react";
import * as THREE from "three";

export const usePointer = () => {
  const pointer = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const move = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return pointer;
};

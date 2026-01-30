/* eslint-disable react-hooks/immutability */
import { useFrame, useThree } from "@react-three/fiber";
import { Sphere, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { usePointer } from "./usePointer";

const JellyBlob = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();
  const pointer = usePointer();

  const prev = useRef(new THREE.Vector3());
  const velocity = useRef(new THREE.Vector3());

  useFrame(() => {
    if (!mesh.current) return;

    // 1:1 pointer → world
    const x = pointer.current.x * viewport.width * 0.3;
    const y = pointer.current.y * viewport.height * 0.3;

    const target = new THREE.Vector3(x, y, 0);

    // Velocity for elastic reaction ONLY
    velocity.current
      .subVectors(target, prev.current)
      .multiplyScalar(0.85);

    prev.current.copy(target);

    // ZERO LAG FOLLOW
    mesh.current.position.copy(target);

    // Jelly rotation
    mesh.current.rotation.x = velocity.current.y * 0.6;
    mesh.current.rotation.y = velocity.current.x * 0.6;
  });

  return (
    <Sphere ref={mesh} args={[0.9, 156, 156]} scale={1}>
      <MeshTransmissionMaterial
        transmission={3}
        thickness={6.4}
        roughness={0.05}
        ior={2.15}
        chromaticAberration={0.04}
        anisotropy={0.2}
        distortion={0.25}
        distortionScale={0.35}
        temporalDistortion={0.2}
        attenuationColor="#ffffff"
        attenuationDistance={0.5}
        background={new THREE.Color("#ffffff")}
      />
    </Sphere>
  );
};

export default JellyBlob;

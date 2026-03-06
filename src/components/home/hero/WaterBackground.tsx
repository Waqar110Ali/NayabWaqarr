import { Canvas } from "@react-three/fiber";
import JellyBlob from "./JellyBlob";

const WaterBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 35 }}
        dpr={[1, 2]}
      >
        {/* ENVIRONMENT LIGHTING */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 10]} intensity={3} />
        <directionalLight position={[-5, -5, 5]} intensity={1.5} />

        <JellyBlob />
      </Canvas>
    </div>
  );
};

export default WaterBackground;

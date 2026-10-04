import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Floating } from "../components/Floating";

function FloatingDemo() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 3, 3]} intensity={2} />

        <Floating speed={2} amplitude={0.5}>
          <mesh rotation={[0.5, 0.5, 0]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial />
          </mesh>
        </Floating>

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default FloatingDemo;
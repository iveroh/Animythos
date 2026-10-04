import { Canvas } from "@react-three/fiber";
import { WavePlane } from "../components/WavePlane";

function WavePlaneDemo() {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        background: "#050505",
      }}
    >
      <Canvas
        camera={{
          position: [0, 3, -5],
          fov: 90,
        }}
      >
        <WavePlane
          width={15}
          height={7}
          amplitude={0.3}
          frequency={2}
          speed={1}
          colorA="#240046"
          colorB="#c77dff"
        />
      </Canvas>
    </div>
  );
}

export default WavePlaneDemo;
import { Canvas } from "@react-three/fiber";

import AuroraMesh from "./AuroraMesh";

import "./AuroraFlow.css";

interface AuroraFlowProps {
  speed?: number;
  amplitude?: number;

  colorA?: string;
  colorB?: string;
  colorC?: string;

  className?: string;
}

function AuroraFlow({
  speed = 0.5,
  amplitude = 0.7,

  colorA = "#16002e",
  colorB = "#7c3aed",
  colorC = "#3b82f6",

  className = "",
}: AuroraFlowProps) {
  return (
    <div
      className={`aurora-flow ${className}`}
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
        }}
      >
        <AuroraMesh
          speed={speed}
          amplitude={amplitude}
          colorA={colorA}
          colorB={colorB}
          colorC={colorC}
        />
      </Canvas>
    </div>
  );
}

export default AuroraFlow;
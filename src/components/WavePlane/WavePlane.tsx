import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Color,
  DoubleSide,
  type ShaderMaterial,
} from "three";

import {
  waveVertexShader,
  waveFragmentShader,
} from "../../shaders/wavePlane";

interface WavePlaneProps {
  width?: number;
  height?: number;
  segments?: number;

  amplitude?: number;
  frequency?: number;
  speed?: number;

  colorA?: string;
  colorB?: string;
}

function WavePlane({
  width = 6,
  height = 6,
  segments = 64,

  amplitude = 0.25,
  frequency = 2,
  speed = 1,

  colorA = "#3b0764",
  colorB = "#a855f7",
}: WavePlaneProps) {
  const materialRef = useRef<ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmplitude: { value: amplitude },
      uFrequency: { value: frequency },
      uSpeed: { value: speed },

      uColorA: {
        value: new Color(colorA),
      },

      uColorB: {
        value: new Color(colorB),
      },
    }),
    [
      amplitude,
      frequency,
      speed,
      colorA,
      colorB,
    ],
  );

  useFrame((_, delta) => {
    if (!materialRef.current) return;

    materialRef.current.uniforms.uTime.value += delta;
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry
        args={[
          width,
          height,
          segments,
          segments,
        ]}
      />

      <shaderMaterial
        ref={materialRef}
        vertexShader={waveVertexShader}
        fragmentShader={waveFragmentShader}
        uniforms={uniforms}
        side={DoubleSide}
      />
    </mesh>
  );
}

export default WavePlane;
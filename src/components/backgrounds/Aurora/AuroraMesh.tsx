import {
  useEffect,
  useMemo,
  useRef,
} from "react";

import { useFrame } from "@react-three/fiber";

import * as THREE from "three";

import { fragmentShader } from "./fragmentShader";
import { vertexShader } from "./vertexShader";

interface AuroraMeshProps {
  speed?: number;
  amplitude?: number;

  colorA?: string;
  colorB?: string;
  colorC?: string;
}

function AuroraMesh({
  speed = 0.5,
  amplitude = 0.7,

  colorA = "#16002e", /** Dark purple*/
  colorB = "#7c3aed", /** Purple */
  colorC = "#3b82f6", /** Light blue*/
}: AuroraMeshProps) {
  const elapsedTime = useRef(0);

  const targetPointer = useRef(
    new THREE.Vector2()
  );

  const smoothPointer = useRef(
    new THREE.Vector2()
  );

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,

      depthTest: false,
      depthWrite: false,

      uniforms: {
        uTime: { value: 0 },
        uAspect: { value: 1 },
        uAmplitude: { value: amplitude },
        uPointer: { value: new THREE.Vector2() },
        uColorA: { value: new THREE.Color(colorA) },
        uColorB: { value: new THREE.Color(colorB) },
        uColorC: { value: new THREE.Color(colorC) },
      },
    });
  }, [
    amplitude,
    colorA,
    colorB,
    colorC,
  ]);

  useEffect(() => {
    function handlePointerMove(
      event: PointerEvent,
    ) {
      targetPointer.current.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1,
      );
    }

    window.addEventListener(
      "pointermove",
      handlePointerMove,
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      );
    };
  }, []);

  useEffect(() => {
    return () => {
      material.dispose();
    };
  }, [material]);

  useFrame((state, delta) => {
    elapsedTime.current += delta;

    material.uniforms.uTime.value =
      elapsedTime.current * speed;

    material.uniforms.uAspect.value =
      state.size.width / state.size.height;

    smoothPointer.current.lerp(
      targetPointer.current,
      1 - Math.exp(-delta * 2.5),
    );

    material.uniforms.uPointer.value.copy(
      smoothPointer.current,
    );
  });

  return (
    <mesh
      material={material}
      frustumCulled={false}
    >
      <planeGeometry args={[2, 2]} />
    </mesh>
  );
}

export default AuroraMesh;
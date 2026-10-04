import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import type { ReactNode } from "react";

interface FloatingProps {
  children: ReactNode;
  speed?: number;
  amplitude?: number;
}

function Floating({
  children,
  speed = 1,
  amplitude = 0.25,
}: FloatingProps) {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    groupRef.current.position.y =
      Math.sin(clock.elapsedTime * speed) * amplitude;
  });

  return <group ref={groupRef}>{children}</group>;
}

export default Floating;
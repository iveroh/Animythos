import type { ComponentType } from "react";

import FloatingDemo from "../demos/FloatingDemo";
import WavePlaneDemo from "../demos/WavePlaneDemo";
import wavePlaneSource from "../components/WavePlane/WavePlane.tsx?raw";

export type ComponentCategory =
  | "Animation"
  | "Particles"
  | "Shaders"
  | "Camera"
  | "Background";

export interface ComponentInfo {
  slug: string;
  name: string;
  description: string;
  category: ComponentCategory;
  demo: ComponentType;
  source?: string;
  usage?: string;
}

export const components: ComponentInfo[] = [
  {
    slug: "floating",
    name: "Floating",
    description: "Adds a smooth floating animation to any 3D object.",
    category: "Animation",
    demo: FloatingDemo,
  },
  {
    slug: "wave-plane",
    name: "Wave Plane",
    description:
      "An animated plane deformed using procedural sine waves.",
    category: "Shaders",
    demo: WavePlaneDemo,
    source: wavePlaneSource,
    usage: `<WavePlane
    width={7}
    height={7}
    amplitude={0.3}
    frequency={2}
    speed={1}
    colorA="#240046"
    colorB="#c77dff"
    />`,
  },
];

export function getComponentBySlug(slug: string) {
  return components.find((component) => component.slug === slug);
}

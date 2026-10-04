import type { ComponentType } from "react";

import FloatingDemo from "../demos/FloatingDemo";

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
}

export const components: ComponentInfo[] = [
  {
    slug: "floating",
    name: "Floating",
    description: "Adds a smooth floating animation to any 3D object.",
    category: "Animation",
    demo: FloatingDemo,
  },
];

export function getComponentBySlug(slug: string) {
  return components.find((component) => component.slug === slug);
}
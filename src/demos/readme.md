# Demos

This folder contains the reusable Three.js components that make up the Animythos library.

Each component should be designed to work independently from the showcase website and should avoid depending on files inside `pages`, `ui`, or `demos`.

Examples:

- Floating animations
- Particle effects
- Camera effects
- Shader-based effects
- Animated backgrounds
- Object interactions

Prefer creating one folder per component.

Example:

components/
└── Floating/
    ├── Floating.tsx
    └── index.ts

The component itself should contain only the logic required for the reusable effect.

Any scene created specifically to demonstrate the component belongs in `src/demos`.
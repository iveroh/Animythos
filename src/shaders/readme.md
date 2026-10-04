# Shaders

This folder contains reusable GLSL shader code used by Three.js components.

Shaders may include:

- Vertex shaders
- Fragment shaders
- Noise functions
- Distortion effects
- Dissolve effects
- Particle effects
- Procedural animations

Example:

shaders/
├── noise.glsl
├── dissolve.vert
└── dissolve.frag

Components inside `src/components` can import and use these shaders when creating custom `ShaderMaterial` effects.

Keep reusable shader functions separate when they are shared by multiple effects.

Shaders that only belong to one specific component may instead be kept inside that component's folder.
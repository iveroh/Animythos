# Hooks

This folder contains reusable React hooks used by Animythos components and demos.

Hooks should contain logic that can be shared between multiple components.

Examples:

hooks/
├── useMousePosition.ts
├── useScrollProgress.ts
└── useAnimationTime.ts

Possible uses include:

- Tracking mouse movement
- Tracking scroll position
- Managing animation state
- Responding to window size changes
- Sharing Three.js-related behavior

If logic is specific to only one component, it may be better to keep it inside that component instead.

Move logic here when it becomes useful across multiple parts of the project.
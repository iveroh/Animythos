# Pages

This folder contains the main pages of the Animythos website.

Pages are connected to routes and are responsible for arranging UI components, demos, and documentation into complete views.

Examples:

pages/
├── HomePage.tsx
├── ComponentsPage.tsx
└── ComponentPage.tsx

Possible routes:

/                       → HomePage
/components             → ComponentsPage
/components/floating    → ComponentPage

Pages should mainly compose existing components instead of containing large amounts of reusable UI or Three.js logic.

Reusable website elements belong in `src/ui`.

Reusable Three.js components belong in `src/components`.
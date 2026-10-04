# Data

This folder contains static data and configuration used by the website.

One important use of this folder is the component registry, which describes all components available in Animythos.

Example:

data/
└── components.ts

The registry may contain information such as:

{
  id: "floating",
  name: "Floating",
  description: "Adds a floating animation to any 3D object.",
  category: "Animation"
}

This data can be used to automatically generate:

- Component gallery cards
- Navigation
- Component pages
- Categories
- Search results

Keeping this information centralized avoids duplicating component metadata throughout the website.
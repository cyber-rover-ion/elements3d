# CHEMIS3D Explorer

An interactive browser-based 3D chemistry explorer for studying selected elements and molecular structures.

## Overview

CHEMIS3D Explorer combines a Three.js viewport with searchable chemistry data and an elemental inspector. Explore atomic and molecular models, switch visualization modes, inspect atom properties, and compare elemental composition.

## Features

- Interactive 3D visualization with multiple rendering modes
- Search by name, chemical formula, or IUPAC name
- Category filters for elements, molecules, gases, organic compounds, and inorganic compounds
- Atom selection with atomic number, mass, electronegativity, van der Waals radius, and hybridization details
- Elemental composition breakdown for each structure
- Optional atom labels, thermal vibration, and interface audio
- Keyboard-accessible molecule cards and a no-results state

## Technology

- HTML and CSS
- JavaScript ES modules
- [Three.js](https://threejs.org/) for 3D rendering
- [Vite](https://vitejs.dev/) for local development and production builds

## Requirements

- Node.js 18 or newer
- npm

## Getting Started

Clone the repository and enter the project directory:

```bash
git clone https://github.com/cyber-rover-ion/elements3d.git
cd elements3d
```

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Vite prints the local URL in the terminal. Open that URL in your browser.

Create and preview a production build:

```bash
npm run build
npm run preview
```

## Project Structure

```text
.
├── index.html
├── package.json
└── src/
    ├── style.css
    └── js/
        ├── app.js
        ├── audio.js
        ├── molecules.js
        └── scene3d.js
```

## Data and Educational Scope

The project includes curated element and molecule data for interactive learning. Visual models simplify complex chemical structures and should not be treated as computational chemistry results or a replacement for authoritative scientific references.

## Development Notes

- Molecule labels and inspector values are inserted as text nodes rather than interpolated HTML.
- Keep chemical data and UI rendering logic separate when adding new structures.
- Run `npm run build` before publishing changes.

## Maintainer

**JebinTech**

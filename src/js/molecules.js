// CPK Atomic Standards & Metadata for Elements 1 through 20
export const ELEMENT_DATA = {
  H:  { name: 'Hydrogen', color: '#FFFFFF', radius: 0.32, vdwRadius: 1.20, number: 1, mass: 1.008, electronegativity: 2.20, valence: 1 },
  He: { name: 'Helium', color: '#D9FFFF', radius: 0.28, vdwRadius: 1.40, number: 2, mass: 4.0026, electronegativity: 0.00, valence: 0 },
  Li: { name: 'Lithium', color: '#CC80FF', radius: 1.28, vdwRadius: 1.82, number: 3, mass: 6.94, electronegativity: 0.98, valence: 1 },
  Be: { name: 'Beryllium', color: '#C2FF00', radius: 0.96, vdwRadius: 1.53, number: 4, mass: 9.0122, electronegativity: 1.57, valence: 2 },
  B:  { name: 'Boron', color: '#FFB5B5', radius: 0.84, vdwRadius: 1.92, number: 5, mass: 10.81, electronegativity: 2.04, valence: 3 },
  C:  { name: 'Carbon', color: '#333333', vdwRadius: 1.70, radius: 0.77, number: 6, mass: 12.011, electronegativity: 2.55, valence: 4 },
  N:  { name: 'Nitrogen', color: '#3182CE', radius: 0.75, vdwRadius: 1.55, number: 7, mass: 14.007, electronegativity: 3.04, valence: 3 },
  O:  { name: 'Oxygen', color: '#E53E3E', radius: 0.73, vdwRadius: 1.52, number: 8, mass: 15.999, electronegativity: 3.44, valence: 2 },
  F:  { name: 'Fluorine', color: '#90E0EF', radius: 0.71, vdwRadius: 1.47, number: 9, mass: 18.998, electronegativity: 3.98, valence: 1 },
  Ne: { name: 'Neon', color: '#B3E5FC', radius: 0.69, vdwRadius: 1.54, number: 10, mass: 20.180, electronegativity: 0.00, valence: 0 },
  Na: { name: 'Sodium', color: '#AB5CF2', radius: 1.66, vdwRadius: 2.27, number: 11, mass: 22.990, electronegativity: 0.93, valence: 1 },
  Mg: { name: 'Magnesium', color: '#8A9A86', radius: 1.41, vdwRadius: 1.73, number: 12, mass: 24.305, electronegativity: 1.31, valence: 2 },
  Al: { name: 'Aluminum', color: '#A6A6A6', radius: 1.21, vdwRadius: 1.84, number: 13, mass: 26.982, electronegativity: 1.61, valence: 3 },
  Si: { name: 'Silicon', color: '#F0C8A0', radius: 1.11, vdwRadius: 2.10, number: 14, mass: 28.085, electronegativity: 1.90, valence: 4 },
  P:  { name: 'Phosphorus', color: '#FF8000', radius: 1.07, vdwRadius: 1.80, number: 15, mass: 30.974, electronegativity: 2.19, valence: 5 },
  S:  { name: 'Sulfur', color: '#D69E2E', radius: 1.02, vdwRadius: 1.80, number: 16, mass: 32.06, electronegativity: 2.58, valence: 6 },
  Cl: { name: 'Chlorine', color: '#38A169', radius: 0.99, vdwRadius: 1.75, number: 17, mass: 35.45, electronegativity: 3.16, valence: 1 },
  Ar: { name: 'Argon', color: '#80D1E6', radius: 0.98, vdwRadius: 1.88, number: 18, mass: 39.948, electronegativity: 0.00, valence: 0 },
  K:  { name: 'Potassium', color: '#8F40D4', radius: 2.03, vdwRadius: 2.75, number: 19, mass: 39.098, electronegativity: 0.82, valence: 1 },
  Ca: { name: 'Calcium', color: '#68D391', radius: 1.74, vdwRadius: 2.31, number: 20, mass: 40.078, electronegativity: 1.00, valence: 2 }
};

export const MOLECULES = [
  // --- PERIODIC TABLE ELEMENTS (1 - 20) ---
  {
    id: 'elem_h',
    name: 'Hydrogen',
    formula: 'H',
    iupac: 'Elemental Hydrogen',
    category: 'Elements',
    polarity: 'Non-Polar',
    molecularWeight: '1.008 g/mol',
    geometry: 'Spherical Atom',
    description: 'The lightest and most abundant chemical element in the universe. Atomic number 1 with a single proton and electron.',
    atoms: [{ id: 0, element: 'H', x: 0.0, y: 0.0, z: 0.0, hybridization: '1s¹' }],
    bonds: []
  },
  {
    id: 'elem_he',
    name: 'Helium',
    formula: 'He',
    iupac: 'Elemental Helium',
    category: 'Elements / Gases',
    polarity: 'Non-Polar',
    molecularWeight: '4.0026 g/mol',
    geometry: 'Spherical Monoatomic Noble Gas',
    description: 'Colorless, odorless, inert noble gas with a completely filled 1s valence electron shell.',
    atoms: [{ id: 0, element: 'He', x: 0.0, y: 0.0, z: 0.0, hybridization: '1s²' }],
    bonds: []
  },
  {
    id: 'elem_li',
    name: 'Lithium',
    formula: 'Li',
    iupac: 'Elemental Lithium',
    category: 'Elements',
    polarity: 'Non-Polar',
    molecularWeight: '6.94 g/mol',
    geometry: 'Spherical Alkali Metal Atom',
    description: 'Soft, silvery alkali metal with the lowest density of all solid elements. Highly reactive with water.',
    atoms: [{ id: 0, element: 'Li', x: 0.0, y: 0.0, z: 0.0, hybridization: '[He] 2s¹' }],
    bonds: []
  },
  {
    id: 'elem_be',
    name: 'Beryllium',
    formula: 'Be',
    iupac: 'Elemental Beryllium',
    category: 'Elements',
    polarity: 'Non-Polar',
    molecularWeight: '9.0122 g/mol',
    geometry: 'Spherical Alkaline Earth Metal Atom',
    description: 'Relatively rare, lightweight metal in the universe, often forming strong structural alloys for aerospace.',
    atoms: [{ id: 0, element: 'Be', x: 0.0, y: 0.0, z: 0.0, hybridization: '[He] 2s²' }],
    bonds: []
  },
  {
    id: 'elem_b',
    name: 'Boron',
    formula: 'B',
    iupac: 'Elemental Boron',
    category: 'Elements',
    polarity: 'Non-Polar',
    molecularWeight: '10.81 g/mol',
    geometry: 'Spherical Metalloid Atom',
    description: 'Low-abundance metalloid element used in semiconductor doping and high-strength ceramics.',
    atoms: [{ id: 0, element: 'B', x: 0.0, y: 0.0, z: 0.0, hybridization: '[He] 2s² 2p¹' }],
    bonds: []
  },
  {
    id: 'elem_c',
    name: 'Carbon',
    formula: 'C',
    iupac: 'Elemental Carbon',
    category: 'Elements / Organic',
    polarity: 'Non-Polar',
    molecularWeight: '12.011 g/mol',
    geometry: 'Spherical Non-metal Atom',
    description: 'Tetravalent non-metal capable of forming stable covalent bonds with many elements, forming the backbone of life.',
    atoms: [{ id: 0, element: 'C', x: 0.0, y: 0.0, z: 0.0, hybridization: '[He] 2s² 2p²' }],
    bonds: []
  },
  {
    id: 'elem_n',
    name: 'Nitrogen',
    formula: 'N',
    iupac: 'Elemental Nitrogen',
    category: 'Elements / Gases',
    polarity: 'Non-Polar',
    molecularWeight: '14.007 g/mol',
    geometry: 'Spherical Pnictogen Atom',
    description: 'Atomic nitrogen with 5 valence electrons, forming strong triple covalent bonds in its diatomic gas state.',
    atoms: [{ id: 0, element: 'N', x: 0.0, y: 0.0, z: 0.0, hybridization: '[He] 2s² 2p³' }],
    bonds: []
  },
  {
    id: 'elem_o',
    name: 'Oxygen',
    formula: 'O',
    iupac: 'Elemental Oxygen',
    category: 'Elements / Gases',
    polarity: 'Non-Polar',
    molecularWeight: '15.999 g/mol',
    geometry: 'Spherical Chalcogen Atom',
    description: 'Highly reactive non-metallic chalcogen element and oxidizing agent essential for aerobic respiration.',
    atoms: [{ id: 0, element: 'O', x: 0.0, y: 0.0, z: 0.0, hybridization: '[He] 2s² 2p⁴' }],
    bonds: []
  },
  {
    id: 'elem_f',
    name: 'Fluorine',
    formula: 'F',
    iupac: 'Elemental Fluorine',
    category: 'Elements / Gases',
    polarity: 'Non-Polar',
    molecularWeight: '18.998 g/mol',
    geometry: 'Spherical Halogen Atom',
    description: 'Extremely reactive halogen and the most electronegative element on the periodic table (3.98 Pauling scale).',
    atoms: [{ id: 0, element: 'F', x: 0.0, y: 0.0, z: 0.0, hybridization: '[He] 2s² 2p⁵' }],
    bonds: []
  },
  {
    id: 'elem_ne',
    name: 'Neon',
    formula: 'Ne',
    iupac: 'Elemental Neon',
    category: 'Elements / Gases',
    polarity: 'Non-Polar',
    molecularWeight: '20.180 g/mol',
    geometry: 'Spherical Noble Gas Atom',
    description: 'Inert noble gas famous for emitting a reddish-orange glow in high-voltage electrical discharge signs.',
    atoms: [{ id: 0, element: 'Ne', x: 0.0, y: 0.0, z: 0.0, hybridization: '[He] 2s² 2p⁶' }],
    bonds: []
  },
  {
    id: 'elem_na',
    name: 'Sodium',
    formula: 'Na',
    iupac: 'Elemental Sodium',
    category: 'Elements',
    polarity: 'Non-Polar',
    molecularWeight: '22.990 g/mol',
    geometry: 'Spherical Alkali Metal Atom',
    description: 'Soft, reactive alkali metal that readily oxidizes in air and reacts violently with liquid water.',
    atoms: [{ id: 0, element: 'Na', x: 0.0, y: 0.0, z: 0.0, hybridization: '[Ne] 3s¹' }],
    bonds: []
  },
  {
    id: 'elem_mg',
    name: 'Magnesium',
    formula: 'Mg',
    iupac: 'Elemental Magnesium',
    category: 'Elements',
    polarity: 'Non-Polar',
    molecularWeight: '24.305 g/mol',
    geometry: 'Spherical Alkaline Earth Metal Atom',
    description: 'Shiny gray solid metal essential for enzymatic processes and chlorophyll light absorption in plants.',
    atoms: [{ id: 0, element: 'Mg', x: 0.0, y: 0.0, z: 0.0, hybridization: '[Ne] 3s²' }],
    bonds: []
  },
  {
    id: 'elem_al',
    name: 'Aluminum',
    formula: 'Al',
    iupac: 'Elemental Aluminum',
    category: 'Elements',
    polarity: 'Non-Polar',
    molecularWeight: '26.982 g/mol',
    geometry: 'Spherical Metal Atom',
    description: 'Low density post-transition metal resistant to corrosion due to a thin protective oxide layer.',
    atoms: [{ id: 0, element: 'Al', x: 0.0, y: 0.0, z: 0.0, hybridization: '[Ne] 3s² 3p¹' }],
    bonds: []
  },
  {
    id: 'elem_si',
    name: 'Silicon',
    formula: 'Si',
    iupac: 'Elemental Silicon',
    category: 'Elements',
    polarity: 'Non-Polar',
    molecularWeight: '28.085 g/mol',
    geometry: 'Spherical Metalloid Atom',
    description: 'Hard, brittle crystalline metalloid semiconductor forming the basis of microelectronics and computer chips.',
    atoms: [{ id: 0, element: 'Si', x: 0.0, y: 0.0, z: 0.0, hybridization: '[Ne] 3s² 3p²' }],
    bonds: []
  },
  {
    id: 'elem_p',
    name: 'Phosphorus',
    formula: 'P₄',
    iupac: 'White Phosphorus Cluster',
    category: 'Elements',
    polarity: 'Non-Polar',
    molecularWeight: '123.89 g/mol',
    geometry: 'Tetrahedral Cluster',
    description: 'White phosphorus allotrope consisting of a strained tetrahedral ring cluster of 4 phosphorus atoms.',
    atoms: [
      { id: 0, element: 'P', x: 0.00, y: 1.15, z: 0.00, hybridization: 'sp³' },
      { id: 1, element: 'P', x: 1.08, y: -0.38, z: 0.00, hybridization: 'sp³' },
      { id: 2, element: 'P', x: -0.54, y: -0.38, z: 0.94, hybridization: 'sp³' },
      { id: 3, element: 'P', x: -0.54, y: -0.38, z: -0.94, hybridization: 'sp³' }
    ],
    bonds: [
      { from: 0, to: 1, type: 1, length: 2.21 },
      { from: 0, to: 2, type: 1, length: 2.21 },
      { from: 0, to: 3, type: 1, length: 2.21 },
      { from: 1, to: 2, type: 1, length: 2.21 },
      { from: 1, to: 3, type: 1, length: 2.21 },
      { from: 2, to: 3, type: 1, length: 2.21 }
    ]
  },
  {
    id: 'elem_s',
    name: 'Sulfur',
    formula: 'S₈',
    iupac: 'Cyclooctasulfur Crown Ring',
    category: 'Elements',
    polarity: 'Non-Polar',
    molecularWeight: '256.52 g/mol',
    geometry: 'Crown Ring Conformation',
    description: 'Cyclooctasulfur crown ring allotrope containing 8 sulfur atoms connected by single covalent bonds.',
    atoms: [
      { id: 0, element: 'S', x: 1.40, y: 0.50, z: 0.00, hybridization: 'sp³' },
      { id: 1, element: 'S', x: 0.99, y: -0.50, z: 0.99, hybridization: 'sp³' },
      { id: 2, element: 'S', x: -0.00, y: 0.50, z: 1.40, hybridization: 'sp³' },
      { id: 3, element: 'S', x: -0.99, y: -0.50, z: 0.99, hybridization: 'sp³' },
      { id: 4, element: 'S', x: -1.40, y: 0.50, z: 0.00, hybridization: 'sp³' },
      { id: 5, element: 'S', x: -0.99, y: -0.50, z: -0.99, hybridization: 'sp³' },
      { id: 6, element: 'S', x: 0.00, y: 0.50, z: -1.40, hybridization: 'sp³' },
      { id: 7, element: 'S', x: 0.99, y: -0.50, z: -0.99, hybridization: 'sp³' }
    ],
    bonds: [
      { from: 0, to: 1, type: 1, length: 2.05 },
      { from: 1, to: 2, type: 1, length: 2.05 },
      { from: 2, to: 3, type: 1, length: 2.05 },
      { from: 3, to: 4, type: 1, length: 2.05 },
      { from: 4, to: 5, type: 1, length: 2.05 },
      { from: 5, to: 6, type: 1, length: 2.05 },
      { from: 6, to: 7, type: 1, length: 2.05 },
      { from: 7, to: 0, type: 1, length: 2.05 }
    ]
  },
  {
    id: 'elem_cl',
    name: 'Chlorine',
    formula: 'Cl',
    iupac: 'Elemental Chlorine',
    category: 'Elements / Gases',
    polarity: 'Non-Polar',
    molecularWeight: '35.45 g/mol',
    geometry: 'Spherical Halogen Atom',
    description: 'Yellow-green halogen element used widely in sanitation, water treatment, and disinfectant agents.',
    atoms: [{ id: 0, element: 'Cl', x: 0.0, y: 0.0, z: 0.0, hybridization: '[Ne] 3s² 3p⁵' }],
    bonds: []
  },
  {
    id: 'elem_ar',
    name: 'Argon',
    formula: 'Ar',
    iupac: 'Elemental Argon',
    category: 'Elements / Gases',
    polarity: 'Non-Polar',
    molecularWeight: '39.948 g/mol',
    geometry: 'Spherical Noble Gas Atom',
    description: 'Third most abundant gas in Earth\'s atmosphere (0.93%), inert noble gas used in arc welding shielding.',
    atoms: [{ id: 0, element: 'Ar', x: 0.0, y: 0.0, z: 0.0, hybridization: '[Ne] 3s² 3p⁶' }],
    bonds: []
  },
  {
    id: 'elem_k',
    name: 'Potassium',
    formula: 'K',
    iupac: 'Elemental Potassium',
    category: 'Elements',
    polarity: 'Non-Polar',
    molecularWeight: '39.098 g/mol',
    geometry: 'Spherical Alkali Metal Atom',
    description: 'Essential electrolyte alkali metal vital for nerve signaling and cellular osmotic balance in humans.',
    atoms: [{ id: 0, element: 'K', x: 0.0, y: 0.0, z: 0.0, hybridization: '[Ar] 4s¹' }],
    bonds: []
  },
  {
    id: 'elem_ca',
    name: 'Calcium',
    formula: 'Ca',
    iupac: 'Elemental Calcium',
    category: 'Elements',
    polarity: 'Non-Polar',
    molecularWeight: '40.078 g/mol',
    geometry: 'Spherical Alkaline Earth Metal Atom',
    description: 'Fifth most abundant element by mass in Earth\'s crust, key component of bones, teeth, and shells.',
    atoms: [{ id: 0, element: 'Ca', x: 0.0, y: 0.0, z: 0.0, hybridization: '[Ar] 4s²' }],
    bonds: []
  },

  // --- CHEMICAL MOLECULES & COMPOUNDS (21 - 40) ---
  {
    id: 'water',
    name: 'Water',
    formula: 'H₂O',
    iupac: 'Oxidane',
    category: 'Inorganic / Polar',
    polarity: 'Polar',
    molecularWeight: '18.015 g/mol',
    geometry: 'Bent (104.5°)',
    description: 'Essential polar molecule for all known life forms. Hydrogen bonding grants it unique liquid properties.',
    atoms: [
      { id: 0, element: 'O', x: 0.000, y: 0.117, z: 0.000, hybridization: 'sp³' },
      { id: 1, element: 'H', x: 0.757, y: -0.469, z: 0.000, hybridization: 's' },
      { id: 2, element: 'H', x: -0.757, y: -0.469, z: 0.000, hybridization: 's' }
    ],
    bonds: [
      { from: 0, to: 1, type: 1, length: 0.96 },
      { from: 0, to: 2, type: 1, length: 0.96 }
    ]
  },
  {
    id: 'co2',
    name: 'Carbon Dioxide',
    formula: 'CO₂',
    iupac: 'Carbon Dioxide',
    category: 'Inorganic / Gases',
    polarity: 'Non-Polar',
    molecularWeight: '44.01 g/mol',
    geometry: 'Linear (180°)',
    description: 'Linear molecule with two double covalent bonds. Key greenhouse gas and carbon source in photosynthesis.',
    atoms: [
      { id: 0, element: 'C', x: 0.000, y: 0.000, z: 0.000, hybridization: 'sp' },
      { id: 1, element: 'O', x: 1.163, y: 0.000, z: 0.000, hybridization: 'sp²' },
      { id: 2, element: 'O', x: -1.163, y: 0.000, z: 0.000, hybridization: 'sp²' }
    ],
    bonds: [
      { from: 0, to: 1, type: 2, length: 1.16 },
      { from: 0, to: 2, type: 2, length: 1.16 }
    ]
  },
  {
    id: 'ammonia',
    name: 'Ammonia',
    formula: 'NH₃',
    iupac: 'Azane',
    category: 'Inorganic / Polar / Gases',
    polarity: 'Polar',
    molecularWeight: '17.031 g/mol',
    geometry: 'Trigonal Pyramidal (107.8°)',
    description: 'Pungent alkaline gas with a lone electron pair at the apex creating a strong dipole moment.',
    atoms: [
      { id: 0, element: 'N', x: 0.000, y: 0.116, z: 0.000, hybridization: 'sp³' },
      { id: 1, element: 'H', x: 0.000, y: -0.270, z: 0.938, hybridization: 's' },
      { id: 2, element: 'H', x: 0.812, y: -0.270, z: -0.469, hybridization: 's' },
      { id: 3, element: 'H', x: -0.812, y: -0.270, z: -0.469, hybridization: 's' }
    ],
    bonds: [
      { from: 0, to: 1, type: 1, length: 1.01 },
      { from: 0, to: 2, type: 1, length: 1.01 },
      { from: 0, to: 3, type: 1, length: 1.01 }
    ]
  },
  {
    id: 'methane',
    name: 'Methane',
    formula: 'CH₄',
    iupac: 'Methane',
    category: 'Organic / Gases',
    polarity: 'Non-Polar',
    molecularWeight: '16.04 g/mol',
    geometry: 'Tetrahedral (109.5°)',
    description: 'The simplest alkane and primary component of natural gas. Highly symmetrical tetrahedral geometry.',
    atoms: [
      { id: 0, element: 'C', x: 0.000, y: 0.000, z: 0.000, hybridization: 'sp³' },
      { id: 1, element: 'H', x: 0.629, y: 0.629, z: 0.629, hybridization: 's' },
      { id: 2, element: 'H', x: -0.629, y: -0.629, z: 0.629, hybridization: 's' },
      { id: 3, element: 'H', x: -0.629, y: 0.629, z: -0.629, hybridization: 's' },
      { id: 4, element: 'H', x: 0.629, y: -0.629, z: -0.629, hybridization: 's' }
    ],
    bonds: [
      { from: 0, to: 1, type: 1, length: 1.09 },
      { from: 0, to: 2, type: 1, length: 1.09 },
      { from: 0, to: 3, type: 1, length: 1.09 },
      { from: 0, to: 4, type: 1, length: 1.09 }
    ]
  },
  {
    id: 'nacl',
    name: 'Sodium Chloride',
    formula: 'NaCl',
    iupac: 'Sodium Chloride',
    category: 'Inorganic',
    polarity: 'Polar / Ionic',
    molecularWeight: '58.44 g/mol',
    geometry: 'Cubic Ionic Lattice Pair',
    description: 'Classic table salt ionic crystal pair formed by full electron transfer from sodium to chlorine.',
    atoms: [
      { id: 0, element: 'Na', x: -1.18, y: 0.00, z: 0.00, hybridization: 'Ionic Na⁺' },
      { id: 1, element: 'Cl', x: 1.18, y: 0.00, z: 0.00, hybridization: 'Ionic Cl⁻' }
    ],
    bonds: [
      { from: 0, to: 1, type: 1, length: 2.36 }
    ]
  },
  {
    id: 'glucose',
    name: 'D-Glucose',
    formula: 'C₆H₁₂O₆',
    iupac: '(2R,3S,4R,5R)-2,3,4,5,6-Pentahydroxyhexanal',
    category: 'Organic / Ring',
    polarity: 'Polar',
    molecularWeight: '180.16 g/mol',
    geometry: 'Chair Conformation Pyranose Ring',
    description: 'Primary monosaccharide energy source for cellular respiration. Renders as a 6-membered pyranose ring.',
    atoms: [
      { id: 0, element: 'C', x: 1.18, y: -0.40, z: 0.20, hybridization: 'sp³' },
      { id: 1, element: 'C', x: 0.45, y: 0.85, z: 0.50, hybridization: 'sp³' },
      { id: 2, element: 'C', x: -1.02, y: 0.70, z: 0.05, hybridization: 'sp³' },
      { id: 3, element: 'C', x: -1.50, y: -0.68, z: 0.40, hybridization: 'sp³' },
      { id: 4, element: 'C', x: -0.72, y: -1.70, z: -0.40, hybridization: 'sp³' },
      { id: 5, element: 'O', x: 0.65, y: -1.55, z: -0.15, hybridization: 'sp³' },
      { id: 6, element: 'O', x: 2.50, y: -0.45, z: -0.30, hybridization: 'sp³' },
      { id: 7, element: 'O', x: 1.08, y: 1.95, z: -0.10, hybridization: 'sp³' },
      { id: 8, element: 'O', x: -1.75, y: 1.70, z: 0.70, hybridization: 'sp³' },
      { id: 9, element: 'O', x: -2.85, y: -0.80, z: 0.05, hybridization: 'sp³' },
      { id: 10, element: 'C', x: -1.25, y: -3.10, z: -0.10, hybridization: 'sp³' },
      { id: 11, element: 'O', x: -0.65, y: -4.05, z: -0.95, hybridization: 'sp³' },
      { id: 12, element: 'H', x: 1.25, y: -0.40, z: 1.30, hybridization: 's' },
      { id: 13, element: 'H', x: 0.48, y: 0.95, z: 1.60, hybridization: 's' },
      { id: 14, element: 'H', x: -1.08, y: 0.80, z: -1.05, hybridization: 's' },
      { id: 15, element: 'H', x: -1.45, y: -0.80, z: 1.50, hybridization: 's' },
      { id: 16, element: 'H', x: -0.76, y: -1.50, z: -1.48, hybridization: 's' },
      { id: 17, element: 'H', x: 2.85, y: 0.44, z: -0.30, hybridization: 's' },
      { id: 18, element: 'H', x: 0.65, y: 2.75, z: 0.15, hybridization: 's' },
      { id: 19, element: 'H', x: -1.45, y: 2.55, z: 0.40, hybridization: 's' },
      { id: 20, element: 'H', x: -3.10, y: -1.72, z: 0.15, hybridization: 's' },
      { id: 21, element: 'H', x: -2.33, y: -3.12, z: -0.30, hybridization: 's' },
      { id: 22, element: 'H', x: -1.15, y: -3.40, z: 0.95, hybridization: 's' },
      { id: 23, element: 'H', x: -0.95, y: -4.92, z: -0.70, hybridization: 's' }
    ],
    bonds: [
      { from: 0, to: 1, type: 1, length: 1.52 },
      { from: 1, to: 2, type: 1, length: 1.52 },
      { from: 2, to: 3, type: 1, length: 1.52 },
      { from: 3, to: 4, type: 1, length: 1.52 },
      { from: 4, to: 5, type: 1, length: 1.43 },
      { from: 5, to: 0, type: 1, length: 1.43 },
      { from: 0, to: 6, type: 1, length: 1.43 },
      { from: 1, to: 7, type: 1, length: 1.43 },
      { from: 2, to: 8, type: 1, length: 1.43 },
      { from: 3, to: 9, type: 1, length: 1.43 },
      { from: 4, to: 10, type: 1, length: 1.52 },
      { from: 10, to: 11, type: 1, length: 1.43 },
      { from: 0, to: 12, type: 1, length: 1.09 },
      { from: 1, to: 13, type: 1, length: 1.09 },
      { from: 2, to: 14, type: 1, length: 1.09 },
      { from: 3, to: 15, type: 1, length: 1.09 },
      { from: 4, to: 16, type: 1, length: 1.09 },
      { from: 6, to: 17, type: 1, length: 0.96 },
      { from: 7, to: 18, type: 1, length: 0.96 },
      { from: 8, to: 19, type: 1, length: 0.96 },
      { from: 9, to: 20, type: 1, length: 0.96 },
      { from: 10, to: 21, type: 1, length: 1.09 },
      { from: 10, to: 22, type: 1, length: 1.09 },
      { from: 11, to: 23, type: 1, length: 0.96 }
    ]
  },
  {
    id: 'h2so4',
    name: 'Sulfuric Acid',
    formula: 'H₂SO₄',
    iupac: 'Sulfuric Acid',
    category: 'Inorganic / Acids/Bases',
    polarity: 'Polar',
    molecularWeight: '98.079 g/mol',
    geometry: 'Tetrahedral Sulfur Center',
    description: 'Strong diprotic mineral acid with sulfur double bonded to two oxygen atoms and single bonded to two hydroxyl groups.',
    atoms: [
      { id: 0, element: 'S', x: 0.000, y: 0.000, z: 0.000, hybridization: 'sp³d²' },
      { id: 1, element: 'O', x: 0.000, y: 1.440, z: 0.000, hybridization: 'sp²' },
      { id: 2, element: 'O', x: 1.350, y: -0.500, z: 0.000, hybridization: 'sp²' },
      { id: 3, element: 'O', x: -0.675, y: -0.500, z: 1.170, hybridization: 'sp³' },
      { id: 4, element: 'O', x: -0.675, y: -0.500, z: -1.170, hybridization: 'sp³' },
      { id: 5, element: 'H', x: -1.600, y: -0.300, z: 1.200, hybridization: 's' },
      { id: 6, element: 'H', x: -1.600, y: -0.300, z: -1.200, hybridization: 's' }
    ],
    bonds: [
      { from: 0, to: 1, type: 2, length: 1.44 },
      { from: 0, to: 2, type: 2, length: 1.44 },
      { from: 0, to: 3, type: 1, length: 1.57 },
      { from: 0, to: 4, type: 1, length: 1.57 },
      { from: 3, to: 5, type: 1, length: 0.97 },
      { from: 4, to: 6, type: 1, length: 0.97 }
    ]
  },
  {
    id: 'hcl',
    name: 'Hydrochloric Acid',
    formula: 'HCl',
    iupac: 'Chlorane',
    category: 'Inorganic / Acids/Bases',
    polarity: 'Polar',
    molecularWeight: '36.46 g/mol',
    geometry: 'Diatomic Linear',
    description: 'Strong monoprotic mineral acid that dissociates completely in water, main component of gastric acid.',
    atoms: [
      { id: 0, element: 'Cl', x: -0.64, y: 0.00, z: 0.00, hybridization: 'sp³' },
      { id: 1, element: 'H', x: 0.64, y: 0.00, z: 0.00, hybridization: 's' }
    ],
    bonds: [
      { from: 0, to: 1, type: 1, length: 1.27 }
    ]
  },
  {
    id: 'hno3',
    name: 'Nitric Acid',
    formula: 'HNO₃',
    iupac: 'Nitric Acid',
    category: 'Inorganic / Acids/Bases',
    polarity: 'Polar',
    molecularWeight: '63.01 g/mol',
    geometry: 'Planar Nitrogen Center',
    description: 'Highly corrosive mineral acid used in fertilizer synthesis, explosives, and chemical refining.',
    atoms: [
      { id: 0, element: 'N', x: 0.00, y: 0.15, z: 0.00, hybridization: 'sp²' },
      { id: 1, element: 'O', x: 0.00, y: 1.37, z: 0.00, hybridization: 'sp²' },
      { id: 2, element: 'O', x: 1.08, y: -0.48, z: 0.00, hybridization: 'sp²' },
      { id: 3, element: 'O', x: -1.18, y: -0.58, z: 0.00, hybridization: 'sp³' },
      { id: 4, element: 'H', x: -1.86, y: -0.02, z: 0.00, hybridization: 's' }
    ],
    bonds: [
      { from: 0, to: 1, type: 2, length: 1.22 },
      { from: 0, to: 2, type: 2, length: 1.22 },
      { from: 0, to: 3, type: 1, length: 1.40 },
      { from: 3, to: 4, type: 1, length: 0.96 }
    ]
  },
  {
    id: 'acetic_acid',
    name: 'Acetic Acid',
    formula: 'CH₃COOH',
    iupac: 'Ethanoic Acid',
    category: 'Organic / Acids/Bases',
    polarity: 'Polar',
    molecularWeight: '60.05 g/mol',
    geometry: 'Planar Carboxyl Group',
    description: 'Weak organic carboxylic acid giving household vinegar its sour taste and pungent smell.',
    atoms: [
      { id: 0, element: 'C', x: -0.68, y: -0.12, z: 0.00, hybridization: 'sp³' },
      { id: 1, element: 'C', x: 0.81, y: 0.09, z: 0.00, hybridization: 'sp²' },
      { id: 2, element: 'O', x: 1.40, y: 1.15, z: 0.00, hybridization: 'sp²' },
      { id: 3, element: 'O', x: 1.43, y: -1.11, z: 0.00, hybridization: 'sp³' },
      { id: 4, element: 'H', x: 2.38, y: -0.98, z: 0.00, hybridization: 's' },
      { id: 5, element: 'H', x: -1.02, y: -0.65, z: 0.88, hybridization: 's' },
      { id: 6, element: 'H', x: -1.02, y: -0.65, z: -0.88, hybridization: 's' },
      { id: 7, element: 'H', x: -1.09, y: 0.89, z: 0.00, hybridization: 's' }
    ],
    bonds: [
      { from: 0, to: 1, type: 1, length: 1.50 },
      { from: 1, to: 2, type: 2, length: 1.20 },
      { from: 1, to: 3, type: 1, length: 1.35 },
      { from: 3, to: 4, type: 1, length: 0.96 },
      { from: 0, to: 5, type: 1, length: 1.09 },
      { from: 0, to: 6, type: 1, length: 1.09 },
      { from: 0, to: 7, type: 1, length: 1.09 }
    ]
  },
  {
    id: 'ethanol',
    name: 'Ethanol',
    formula: 'C₂H₅OH',
    iupac: 'Ethanol',
    category: 'Organic / Polar',
    polarity: 'Polar',
    molecularWeight: '46.07 g/mol',
    geometry: 'Tetrahedral / Bent',
    description: 'Volatile organic compound found in beverages, biofuels, and antiseptics featuring a polar hydroxyl group.',
    atoms: [
      { id: 0, element: 'C', x: -1.218, y: -0.247, z: 0.000, hybridization: 'sp³' },
      { id: 1, element: 'C', x: 0.000, y: 0.655, z: 0.000, hybridization: 'sp³' },
      { id: 2, element: 'O', x: 1.189, y: -0.129, z: 0.000, hybridization: 'sp³' },
      { id: 3, element: 'H', x: 1.942, y: 0.474, z: 0.000, hybridization: 's' },
      { id: 4, element: 'H', x: -1.272, y: -0.884, z: 0.886, hybridization: 's' },
      { id: 5, element: 'H', x: -1.272, y: -0.884, z: -0.886, hybridization: 's' },
      { id: 6, element: 'H', x: -2.109, y: 0.387, z: 0.000, hybridization: 's' },
      { id: 7, element: 'H', x: 0.046, y: 1.303, z: 0.880, hybridization: 's' },
      { id: 8, element: 'H', x: 0.046, y: 1.303, z: -0.880, hybridization: 's' }
    ],
    bonds: [
      { from: 0, to: 1, type: 1, length: 1.54 },
      { from: 1, to: 2, type: 1, length: 1.43 },
      { from: 2, to: 3, type: 1, length: 0.96 },
      { from: 0, to: 4, type: 1, length: 1.09 },
      { from: 0, to: 5, type: 1, length: 1.09 },
      { from: 0, to: 6, type: 1, length: 1.09 },
      { from: 1, to: 7, type: 1, length: 1.09 },
      { from: 1, to: 8, type: 1, length: 1.09 }
    ]
  },
  {
    id: 'o2',
    name: 'Oxygen Gas',
    formula: 'O₂',
    iupac: 'Diatomic Oxygen',
    category: 'Inorganic / Gases',
    polarity: 'Non-Polar',
    molecularWeight: '31.998 g/mol',
    geometry: 'Linear Diatomic',
    description: 'Diatomic gas comprising ~21% of Earth\'s atmosphere, essential for cellular aerobic energy generation.',
    atoms: [
      { id: 0, element: 'O', x: -0.605, y: 0.000, z: 0.000, hybridization: 'sp²' },
      { id: 1, element: 'O', x: 0.605, y: 0.000, z: 0.000, hybridization: 'sp²' }
    ],
    bonds: [
      { from: 0, to: 1, type: 2, length: 1.21 }
    ]
  },
  {
    id: 'n2',
    name: 'Nitrogen Gas',
    formula: 'N₂',
    iupac: 'Molecular Dinitrogen',
    category: 'Inorganic / Gases',
    polarity: 'Non-Polar',
    molecularWeight: '28.014 g/mol',
    geometry: 'Linear Diatomic',
    description: 'Diatomic gas making up ~78% of atmosphere. Extremely stable due to its strong covalent triple bond.',
    atoms: [
      { id: 0, element: 'N', x: -0.549, y: 0.000, z: 0.000, hybridization: 'sp' },
      { id: 1, element: 'N', x: 0.549, y: 0.000, z: 0.000, hybridization: 'sp' }
    ],
    bonds: [
      { from: 0, to: 1, type: 3, length: 1.10 }
    ]
  },
  {
    id: 'h2',
    name: 'Hydrogen Gas',
    formula: 'H₂',
    iupac: 'Molecular Dihydrogen',
    category: 'Inorganic / Gases',
    polarity: 'Non-Polar',
    molecularWeight: '2.016 g/mol',
    geometry: 'Linear Diatomic',
    description: 'Simplest diatomic molecule with a single covalent sigma bond between two hydrogen atoms.',
    atoms: [
      { id: 0, element: 'H', x: -0.370, y: 0.000, z: 0.000, hybridization: 's' },
      { id: 1, element: 'H', x: 0.370, y: 0.000, z: 0.000, hybridization: 's' }
    ],
    bonds: [
      { from: 0, to: 1, type: 1, length: 0.74 }
    ]
  },
  {
    id: 'co',
    name: 'Carbon Monoxide',
    formula: 'CO',
    iupac: 'Carbon Monoxide',
    category: 'Inorganic / Gases',
    polarity: 'Polar',
    molecularWeight: '28.01 g/mol',
    geometry: 'Linear Diatomic',
    description: 'Toxic, odorless gas with a triple bond consisting of two covalent bonds and one dative coordinate bond.',
    atoms: [
      { id: 0, element: 'C', x: -0.564, y: 0.000, z: 0.000, hybridization: 'sp' },
      { id: 1, element: 'O', x: 0.564, y: 0.000, z: 0.000, hybridization: 'sp' }
    ],
    bonds: [
      { from: 0, to: 1, type: 3, length: 1.13 }
    ]
  },
  {
    id: 'naoh',
    name: 'Sodium Hydroxide',
    formula: 'NaOH',
    iupac: 'Sodium Hydroxide',
    category: 'Inorganic / Acids/Bases',
    polarity: 'Polar / Ionic',
    molecularWeight: '39.997 g/mol',
    geometry: 'Linear Ionic Hydroxide Pair',
    description: 'Strong caustic alkali base (lye) used in soap production, chemical synthesis, and pH regulation.',
    atoms: [
      { id: 0, element: 'Na', x: -1.25, y: 0.00, z: 0.00, hybridization: 'Ionic Na⁺' },
      { id: 1, element: 'O', x: 0.85, y: 0.00, z: 0.00, hybridization: 'sp³' },
      { id: 2, element: 'H', x: 1.81, y: 0.00, z: 0.00, hybridization: 's' }
    ],
    bonds: [
      { from: 0, to: 1, type: 1, length: 2.10 },
      { from: 1, to: 2, type: 1, length: 0.96 }
    ]
  },
  {
    id: 'caco3',
    name: 'Calcium Carbonate',
    formula: 'CaCO₃',
    iupac: 'Calcium Carbonate',
    category: 'Inorganic',
    polarity: 'Polar / Ionic',
    molecularWeight: '100.09 g/mol',
    geometry: 'Trigonal Planar Carbonate Group',
    description: 'Abundant mineral found in rocks (limestone, marble) and marine shells, forming an ionic Ca²⁺ and CO₃²⁻ complex.',
    atoms: [
      { id: 0, element: 'Ca', x: -1.80, y: 0.00, z: 0.00, hybridization: 'Ionic Ca²⁺' },
      { id: 1, element: 'C', x: 0.80, y: 0.00, z: 0.00, hybridization: 'sp²' },
      { id: 2, element: 'O', x: 1.98, y: 0.00, z: 0.00, hybridization: 'sp²' },
      { id: 3, element: 'O', x: 0.21, y: 1.15, z: 0.00, hybridization: 'sp²' },
      { id: 4, element: 'O', x: 0.21, y: -1.15, z: 0.00, hybridization: 'sp²' }
    ],
    bonds: [
      { from: 0, to: 1, type: 1, length: 2.60 },
      { from: 1, to: 2, type: 2, length: 1.28 },
      { from: 1, to: 3, type: 1, length: 1.28 },
      { from: 1, to: 4, type: 1, length: 1.28 }
    ]
  },
  {
    id: 'ozone',
    name: 'Ozone',
    formula: 'O₃',
    iupac: 'Trioxygen',
    category: 'Inorganic / Gases',
    polarity: 'Polar',
    molecularWeight: '47.998 g/mol',
    geometry: 'Bent (116.8°)',
    description: 'Reactive triatomic allotrope of oxygen forming Earth\'s stratospheric protective ultraviolet shield.',
    atoms: [
      { id: 0, element: 'O', x: 0.000, y: 0.250, z: 0.000, hybridization: 'sp²' },
      { id: 1, element: 'O', x: 1.080, y: -0.380, z: 0.000, hybridization: 'sp²' },
      { id: 2, element: 'O', x: -1.080, y: -0.380, z: 0.000, hybridization: 'sp²' }
    ],
    bonds: [
      { from: 0, to: 1, type: 1.5, length: 1.28 },
      { from: 0, to: 2, type: 1.5, length: 1.28 }
    ]
  },
  {
    id: 'h2o2',
    name: 'Hydrogen Peroxide',
    formula: 'H₂O₂',
    iupac: 'Dihydrogen Peroxide',
    category: 'Inorganic / Polar',
    polarity: 'Polar',
    molecularWeight: '34.014 g/mol',
    geometry: 'Non-Planar Skew (90.2° Dihedral)',
    description: 'Simplest peroxide containing a single oxygen-oxygen bond, used as an oxidizer and bleaching disinfectant.',
    atoms: [
      { id: 0, element: 'O', x: -0.73, y: 0.00, z: 0.20, hybridization: 'sp³' },
      { id: 1, element: 'O', x: 0.73, y: 0.00, z: -0.20, hybridization: 'sp³' },
      { id: 2, element: 'H', x: -1.15, y: 0.88, z: -0.30, hybridization: 's' },
      { id: 3, element: 'H', x: 1.15, y: -0.88, z: 0.30, hybridization: 's' }
    ],
    bonds: [
      { from: 0, to: 1, type: 1, length: 1.47 },
      { from: 0, to: 2, type: 1, length: 0.96 },
      { from: 1, to: 3, type: 1, length: 0.96 }
    ]
  },
  {
    id: 'benzene',
    name: 'Benzene',
    formula: 'C₆H₆',
    iupac: '1,3,5-Cyclohexatriene',
    category: 'Organic / Ring',
    polarity: 'Non-Polar',
    molecularWeight: '78.11 g/mol',
    geometry: 'Planar Hexagonal (120°)',
    description: 'Archetypal aromatic hydrocarbon with delocalized pi-electrons sharing equal bond lengths around a planar 6-carbon ring.',
    atoms: [
      { id: 0, element: 'C', x: 1.397, y: 0.000, z: 0.000, hybridization: 'sp²' },
      { id: 1, element: 'C', x: 0.699, y: 1.210, z: 0.000, hybridization: 'sp²' },
      { id: 2, element: 'C', x: -0.699, y: 1.210, z: 0.000, hybridization: 'sp²' },
      { id: 3, element: 'C', x: -1.397, y: 0.000, z: 0.000, hybridization: 'sp²' },
      { id: 4, element: 'C', x: -0.699, y: -1.210, z: 0.000, hybridization: 'sp²' },
      { id: 5, element: 'C', x: 0.699, y: -1.210, z: 0.000, hybridization: 'sp²' },
      { id: 6, element: 'H', x: 2.481, y: 0.000, z: 0.000, hybridization: 's' },
      { id: 7, element: 'H', x: 1.240, y: 2.148, z: 0.000, hybridization: 's' },
      { id: 8, element: 'H', x: -1.240, y: 2.148, z: 0.000, hybridization: 's' },
      { id: 9, element: 'H', x: -2.481, y: 0.000, z: 0.000, hybridization: 's' },
      { id: 10, element: 'H', x: -1.240, y: -2.148, z: 0.000, hybridization: 's' },
      { id: 11, element: 'H', x: 1.240, y: -2.148, z: 0.000, hybridization: 's' }
    ],
    bonds: [
      { from: 0, to: 1, type: 1.5, length: 1.40 },
      { from: 1, to: 2, type: 1.5, length: 1.40 },
      { from: 2, to: 3, type: 1.5, length: 1.40 },
      { from: 3, to: 4, type: 1.5, length: 1.40 },
      { from: 4, to: 5, type: 1.5, length: 1.40 },
      { from: 5, to: 0, type: 1.5, length: 1.40 },
      { from: 0, to: 6, type: 1, length: 1.08 },
      { from: 1, to: 7, type: 1, length: 1.08 },
      { from: 2, to: 8, type: 1, length: 1.08 },
      { from: 3, to: 9, type: 1, length: 1.08 },
      { from: 4, to: 10, type: 1, length: 1.08 },
      { from: 5, to: 11, type: 1, length: 1.08 }
    ]
  }
];

import { MOLECULES, ELEMENT_DATA } from './molecules.js';
import { MoleculeScene } from './scene3d.js';
import { audio } from './audio.js';

class App {
  constructor() {
    this.molecules = MOLECULES;
    this.currentMolecule = MOLECULES[0];
    this.activeFilter = 'all';
    this.searchQuery = '';

    this.initUI();
    this.initScene();
  }

  initScene() {
    const container = document.getElementById('canvas-3d');
    this.sceneManager = new MoleculeScene(container);

    // Set callback when user clicks atom in 3D canvas
    this.sceneManager.onAtomSelectCallback = (atomData, elemData) => {
      audio.playSelectAtom();
      this.updateAtomInspector(atomData, elemData);
    };

    this.loadMolecule(this.currentMolecule.id);
  }

  initUI() {
    this.renderMoleculeList();

    // Search input listener
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.toLowerCase().trim();
      this.renderMoleculeList();
    });

    // Filter pills listeners
    const pills = document.querySelectorAll('.filter-pills .pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.activeFilter = pill.getAttribute('data-filter');
        audio.playClick();
        this.renderMoleculeList();
      });
    });

    // Floating 3D toolbar render mode buttons
    const modeBtns = document.querySelectorAll('.floating-toolbar .tool-btn[data-mode]');
    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.getAttribute('data-mode');
        this.sceneManager.setRenderMode(mode);
        audio.playClick();
      });
    });

    // Toggle 3D Labels
    const btnLabels = document.getElementById('btn-toggle-labels');
    btnLabels.addEventListener('click', () => {
      this.sceneManager.showLabels = !this.sceneManager.showLabels;
      btnLabels.classList.toggle('active', this.sceneManager.showLabels);
      this.sceneManager.updateLabelsOverlay();
      audio.playClick();
    });

    // Toggle Thermal Vibration
    const btnVibe = document.getElementById('btn-toggle-vibe');
    btnVibe.addEventListener('click', () => {
      this.sceneManager.vibrationEnabled = !this.sceneManager.vibrationEnabled;
      btnVibe.classList.toggle('active', this.sceneManager.vibrationEnabled);
      audio.playClick();
    });

    // Audio Toggle Button
    const btnAudio = document.getElementById('btn-sound');
    btnAudio.addEventListener('click', () => {
      audio.muted = !audio.muted;
      btnAudio.style.opacity = audio.muted ? '0.4' : '1';
      btnAudio.title = audio.muted ? 'Sound Muted' : 'Sound Enabled';
    });
  }

  renderMoleculeList() {
    const listContainer = document.getElementById('molecule-list');
    listContainer.innerHTML = '';

    const filtered = this.molecules.filter(mol => {
      const matchesSearch = mol.name.toLowerCase().includes(this.searchQuery) ||
                            mol.formula.toLowerCase().includes(this.searchQuery) ||
                            mol.iupac.toLowerCase().includes(this.searchQuery);

      if (!matchesSearch) return false;

      if (this.activeFilter === 'all') return true;
      if (this.activeFilter === 'Elements') return mol.category.includes('Elements');
      if (this.activeFilter === 'Molecules') return !mol.category.startsWith('Elements');
      if (this.activeFilter === 'Gases') return mol.category.includes('Gases');
      if (this.activeFilter === 'Acids/Bases') return mol.category.includes('Acids/Bases');
      if (this.activeFilter === 'Organic') return mol.category.includes('Organic');
      if (this.activeFilter === 'Inorganic') return mol.category.includes('Inorganic');

      return true;
    });

    filtered.forEach(mol => {
      const card = document.createElement('div');
      card.className = `molecule-card ${mol.id === this.currentMolecule.id ? 'active' : ''}`;
      card.innerHTML = `
        <div class="molecule-card-info">
          <h4>${mol.name}</h4>
          <p>${mol.geometry}</p>
        </div>
        <span class="molecule-card-badge">${mol.formula}</span>
      `;

      card.addEventListener('click', () => {
        if (this.currentMolecule.id !== mol.id) {
          audio.playSwitchMolecule();
          this.loadMolecule(mol.id);
        }
      });

      listContainer.appendChild(card);
    });
  }

  loadMolecule(moleculeId) {
    const mol = this.molecules.find(m => m.id === moleculeId);
    if (!mol) return;

    this.currentMolecule = mol;
    this.sceneManager.loadMolecule(mol);

    // Update active list card selection
    document.querySelectorAll('.molecule-card').forEach(card => {
      card.classList.toggle('active', card.querySelector('h4').innerText === mol.name);
    });

    // Update Details Sidebar
    document.getElementById('mol-name').innerText = mol.name;
    document.getElementById('mol-formula').innerText = `${mol.formula} • ${mol.iupac}`;
    document.getElementById('mol-desc').innerText = mol.description;
    document.getElementById('mol-weight').innerText = mol.molecularWeight;
    document.getElementById('mol-category').innerText = mol.category;
    document.getElementById('mol-polarity').innerText = mol.polarity;
    document.getElementById('mol-geometry').innerText = mol.geometry;

    this.renderElementalBreakdown(mol);

    // Reset Atom Inspector
    document.getElementById('inspector-content').innerHTML = `
      <p style="font-size: 0.8rem; color: var(--text-muted);">Click on any atom in the 3D viewport to inspect its elemental properties, hybridization, and bonding.</p>
    `;
  }

  renderElementalBreakdown(mol) {
    const bar = document.getElementById('composition-bar');
    const legend = document.getElementById('composition-legend');
    bar.innerHTML = '';
    legend.innerHTML = '';

    const elementCounts = {};
    let totalAtoms = mol.atoms.length;

    mol.atoms.forEach(atom => {
      elementCounts[atom.element] = (elementCounts[atom.element] || 0) + 1;
    });

    Object.keys(elementCounts).forEach(symbol => {
      const count = elementCounts[symbol];
      const pct = (count / totalAtoms) * 100;
      const elemData = ELEMENT_DATA[symbol] || ELEMENT_DATA.C;

      // Progress bar segment
      const segment = document.createElement('div');
      segment.className = 'comp-segment';
      segment.style.width = `${pct}%`;
      segment.style.backgroundColor = elemData.color;
      segment.title = `${elemData.name}: ${count} (${pct.toFixed(1)}%)`;
      bar.appendChild(segment);

      // Legend item
      const item = document.createElement('div');
      item.className = 'legend-item';
      item.innerHTML = `
        <div class="dot" style="background-color: ${elemData.color};"></div>
        <span>${symbol} (${count})</span>
      `;
      legend.appendChild(item);
    });
  }

  updateAtomInspector(atomData, elemData) {
    const inspector = document.getElementById('inspector-content');
    inspector.innerHTML = `
      <div class="atom-inspector-header">
        <div class="atom-symbol-badge" style="background-color: ${elemData.color}; color: ${atomData.element === 'H' ? '#1a202c' : '#fff'}">
          ${atomData.element}
        </div>
        <div class="atom-inspector-details">
          <strong style="font-size: 1rem; color: #fff;">${elemData.name} (Atom #${atomData.id + 1})</strong>
          <p>Orbital Hybridization: <span style="color: var(--accent-cyan); font-weight: 600;">${atomData.hybridization}</span></p>
        </div>
      </div>

      <div class="atom-inspector-grid">
        <div class="metric-card">
          <span>Atomic Number</span>
          <strong>${elemData.number}</strong>
        </div>
        <div class="metric-card">
          <span>Atomic Mass</span>
          <strong>${elemData.mass} u</strong>
        </div>
        <div class="metric-card">
          <span>Electronegativity</span>
          <strong>${elemData.electronegativity}</strong>
        </div>
        <div class="metric-card">
          <span>VdW Radius</span>
          <strong>${elemData.vdwRadius} Å</strong>
        </div>
      </div>
    `;
  }
}

// Initialize Application
window.addEventListener('DOMContentLoaded', () => {
  new App();
});

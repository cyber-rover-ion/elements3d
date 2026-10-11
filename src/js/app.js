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
    listContainer.replaceChildren();

    const filtered = this.molecules.filter(mol => {
      const matchesSearch = [mol.name, mol.formula, mol.iupac]
        .some(value => String(value || '').toLowerCase().includes(this.searchQuery));

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

    if (filtered.length === 0) {
      const emptyState = document.createElement('p');
      emptyState.className = 'molecule-list-empty';
      emptyState.textContent = 'No matching elements or molecules found.';
      listContainer.appendChild(emptyState);
      return;
    }

    filtered.forEach(mol => {
      const card = document.createElement('div');
      card.className = `molecule-card ${mol.id === this.currentMolecule.id ? 'active' : ''}`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-pressed', String(mol.id === this.currentMolecule.id));

      const info = document.createElement('div');
      info.className = 'molecule-card-info';
      const name = document.createElement('h4');
      name.textContent = mol.name;
      const geometry = document.createElement('p');
      geometry.textContent = mol.geometry;
      info.append(name, geometry);

      const badge = document.createElement('span');
      badge.className = 'molecule-card-badge';
      badge.textContent = mol.formula;
      card.append(info, badge);

      const selectMolecule = () => {
        if (this.currentMolecule.id !== mol.id) {
          audio.playSwitchMolecule();
          this.loadMolecule(mol.id);
        }
      };
      card.addEventListener('click', selectMolecule);
      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectMolecule();
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
    bar.replaceChildren();
    legend.replaceChildren();

    const elementCounts = {};
    const atoms = Array.isArray(mol.atoms) ? mol.atoms : [];
    const totalAtoms = atoms.length;

    if (totalAtoms === 0) {
      const emptyState = document.createElement('p');
      emptyState.textContent = 'Composition data is not available.';
      legend.appendChild(emptyState);
      return;
    }

    atoms.forEach(atom => {
      elementCounts[atom.element] = (elementCounts[atom.element] || 0) + 1;
    });

    Object.entries(elementCounts).forEach(([symbol, count]) => {
      const pct = (count / totalAtoms) * 100;
      const elemData = ELEMENT_DATA[symbol] || ELEMENT_DATA.C;

      const segment = document.createElement('div');
      segment.className = 'comp-segment';
      segment.style.width = `${pct}%`;
      segment.style.backgroundColor = elemData.color;
      segment.title = `${elemData.name}: ${count} (${pct.toFixed(1)}%)`;
      segment.setAttribute('aria-label', segment.title);
      bar.appendChild(segment);

      const item = document.createElement('div');
      item.className = 'legend-item';
      const dot = document.createElement('div');
      dot.className = 'dot';
      dot.style.backgroundColor = elemData.color;
      const label = document.createElement('span');
      label.textContent = `${symbol} (${count})`;
      item.append(dot, label);
      legend.appendChild(item);
    });
  }


  updateAtomInspector(atomData, elemData) {
    const inspector = document.getElementById('inspector-content');
    inspector.replaceChildren();

    const header = document.createElement('div');
    header.className = 'atom-inspector-header';

    const symbol = document.createElement('div');
    symbol.className = 'atom-symbol-badge';
    symbol.style.backgroundColor = elemData.color;
    symbol.style.color = atomData.element === 'H' ? '#1a202c' : '#fff';
    symbol.textContent = String(atomData.element || '?');

    const details = document.createElement('div');
    details.className = 'atom-inspector-details';
    const name = document.createElement('strong');
    name.style.fontSize = '1rem';
    name.style.color = '#fff';
    name.textContent = `${elemData.name} (Atom #${Number(atomData.id) + 1})`;
    const hybridization = document.createElement('p');
    const hybridizationLabel = document.createElement('span');
    hybridizationLabel.style.color = 'var(--accent-cyan)';
    hybridizationLabel.style.fontWeight = '600';
    hybridizationLabel.textContent = String(atomData.hybridization || 'Not specified');
    hybridization.append('Orbital Hybridization: ', hybridizationLabel);
    details.append(name, hybridization);
    header.append(symbol, details);
    inspector.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'atom-inspector-grid';
    const metrics = [
      ['Atomic Number', elemData.number],
      ['Atomic Mass', `${elemData.mass} u`],
      ['Electronegativity', elemData.electronegativity],
      ['VdW Radius', `${elemData.vdwRadius} Å`]
    ];
    metrics.forEach(([labelText, value]) => {
      const card = document.createElement('div');
      card.className = 'metric-card';
      const label = document.createElement('span');
      label.textContent = labelText;
      const metric = document.createElement('strong');
      metric.textContent = String(value ?? '—');
      card.append(label, metric);
      grid.appendChild(card);
    });
    inspector.appendChild(grid);
  }

}

// Initialize Application
window.addEventListener('DOMContentLoaded', () => {
  new App();
});

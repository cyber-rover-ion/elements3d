import * as THREE from 'three';
import { ELEMENT_DATA } from './molecules.js';

export class MoleculeScene {
  constructor(container) {
    this.container = container;
    this.width = container.clientWidth;
    this.height = container.clientHeight;

    // State
    this.currentMolecule = null;
    this.renderMode = 'ballStick'; // 'ballStick', 'spaceFilling', 'wireframe', 'electronCloud'
    this.showLabels = true;
    this.vibrationEnabled = true;
    this.autoRotate = true;

    // Object maps
    this.atomMeshes = [];
    this.bondMeshes = [];
    this.cloudMeshes = [];
    this.labelElements = [];

    this.selectedAtomId = null;
    this.hoveredAtomId = null;

    this.time = 0;
    this.onAtomSelectCallback = null;

    this.initScene();
    this.initListeners();
    this.animate();
  }

  initScene() {
    // 1. Scene setup
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x0a0e17, 0.025);

    // 2. Camera setup
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 100);
    this.camera.position.set(0, 0, 10);

    // 3. Renderer setup
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    this.container.appendChild(this.renderer.domElement);

    // 4. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight1.position.set(5, 10, 7);
    dirLight1.castShadow = true;
    dirLight1.shadow.mapSize.width = 1024;
    dirLight1.shadow.mapSize.height = 1024;
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x3182ce, 0.8);
    dirLight2.position.set(-5, -5, -5);
    this.scene.add(dirLight2);

    const rimLight = new THREE.PointLight(0x63b3ed, 1.2, 20);
    rimLight.position.set(0, 5, -5);
    this.scene.add(rimLight);

    // 5. Molecule Pivot Parent
    this.moleculeGroup = new THREE.Group();
    this.scene.add(this.moleculeGroup);

    // 6. Particle Background Stars
    this.initBackgroundParticles();

    // 7. Raycaster for Atom Mouse Selection
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
  }

  initBackgroundParticles() {
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 30;
      positions[i + 1] = (Math.random() - 0.5) * 30;
      positions[i + 2] = (Math.random() - 0.5) * 30;

      colors[i] = 0.2 + Math.random() * 0.3;
      colors[i + 1] = 0.4 + Math.random() * 0.4;
      colors[i + 2] = 0.8 + Math.random() * 0.2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.6
    });

    this.backgroundParticles = new THREE.Points(geometry, material);
    this.scene.add(this.backgroundParticles);
  }

  loadMolecule(moleculeData) {
    this.currentMolecule = moleculeData;
    this.clearMolecule();

    // Calculate Center of Mass to re-center molecule
    let cx = 0, cy = 0, cz = 0;
    moleculeData.atoms.forEach(atom => {
      cx += atom.x;
      cy += atom.y;
      cz += atom.z;
    });
    cx /= moleculeData.atoms.length;
    cy /= moleculeData.atoms.length;
    cz /= moleculeData.atoms.length;

    // Create Atoms
    moleculeData.atoms.forEach(atom => {
      const elem = ELEMENT_DATA[atom.element] || ELEMENT_DATA.C;
      const posX = atom.x - cx;
      const posY = atom.y - cy;
      const posZ = atom.z - cz;

      // Atom Mesh
      const sphereGeo = new THREE.SphereGeometry(1, 32, 32);
      const color = new THREE.Color(elem.color);

      const sphereMat = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.2,
        metalness: 0.1,
        clearcoat: 0.3,
        clearcoatRoughness: 0.1
      });

      const atomMesh = new THREE.Mesh(sphereGeo, sphereMat);
      atomMesh.position.set(posX, posY, posZ);
      atomMesh.castShadow = true;
      atomMesh.receiveShadow = true;
      atomMesh.userData = { atomData: atom, elementData: elem, basePos: new THREE.Vector3(posX, posY, posZ) };

      this.moleculeGroup.add(atomMesh);
      this.atomMeshes.push(atomMesh);

      // Electron Cloud Translucent Mesh
      const cloudGeo = new THREE.SphereGeometry(elem.vdwRadius * 1.05, 24, 24);
      const cloudMat = new THREE.MeshPhongMaterial({
        color: color,
        transparent: true,
        opacity: 0.25,
        wireframe: false,
        shininess: 90,
        blending: THREE.AdditiveBlending
      });
      const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
      cloudMesh.position.set(posX, posY, posZ);
      cloudMesh.visible = (this.renderMode === 'electronCloud');
      this.moleculeGroup.add(cloudMesh);
      this.cloudMeshes.push(cloudMesh);
    });

    // Create Bonds
    moleculeData.bonds.forEach(bond => {
      const atomA = this.atomMeshes[bond.from];
      const atomB = this.atomMeshes[bond.to];

      if (atomA && atomB) {
        this.createBondMesh(atomA, atomB, bond.type);
      }
    });

    this.updateRenderMode();
    this.updateLabelsOverlay();

    // Reset camera zoom to fit molecule size
    const maxDist = Math.max(...this.atomMeshes.map(m => m.position.length())) + 2;
    this.camera.position.set(0, 0, Math.max(7, maxDist * 2.2));
  }

  createBondMesh(atomA, atomB, bondType) {
    const posA = atomA.userData.basePos;
    const posB = atomB.userData.basePos;
    const direction = new THREE.Vector3().subVectors(posB, posA);
    const length = direction.length();

    const bondGroup = new THREE.Group();
    bondGroup.userData = { atomA, atomB, bondType };

    // Standard bond cylinder geometry
    const numCylinders = bondType >= 2 ? bondType : 1;
    const radius = 0.08 / (bondType === 2 ? 1.2 : 1);

    for (let i = 0; i < numCylinders; i++) {
      const cylinderGeo = new THREE.CylinderGeometry(radius, radius, length, 16);
      const cylinderMat = new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        roughness: 0.3,
        metalness: 0.2
      });

      const cylMesh = new THREE.Mesh(cylinderGeo, cylinderMat);

      // Offset multiple bonds
      if (bondType === 2) {
        const offset = (i === 0 ? 0.09 : -0.09);
        cylMesh.position.x = offset;
      } else if (bondType === 1.5) { // Aromatic bond ring
        cylMesh.position.x = (i === 0 ? 0.06 : -0.06);
      }

      bondGroup.add(cylMesh);
    }

    // Orient bond group towards atom B
    bondGroup.position.copy(posA).add(direction.clone().multiplyScalar(0.5));
    bondGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize());

    this.moleculeGroup.add(bondGroup);
    this.bondMeshes.push(bondGroup);
  }

  clearMolecule() {
    this.atomMeshes.forEach(mesh => this.moleculeGroup.remove(mesh));
    this.bondMeshes.forEach(mesh => this.moleculeGroup.remove(mesh));
    this.cloudMeshes.forEach(mesh => this.moleculeGroup.remove(mesh));

    this.atomMeshes = [];
    this.bondMeshes = [];
    this.cloudMeshes = [];
    this.selectedAtomId = null;

    // Remove 2D HTML Labels
    this.clearLabels();
  }

  setRenderMode(mode) {
    this.renderMode = mode;
    this.updateRenderMode();
  }

  updateRenderMode() {
    this.atomMeshes.forEach(mesh => {
      const elem = mesh.userData.elementData;
      if (this.renderMode === 'spaceFilling') {
        mesh.scale.setScalar(elem.vdwRadius);
        mesh.material.wireframe = false;
      } else if (this.renderMode === 'wireframe') {
        mesh.scale.setScalar(elem.radius * 0.8);
        mesh.material.wireframe = true;
      } else {
        // ballStick or electronCloud
        mesh.scale.setScalar(elem.radius);
        mesh.material.wireframe = false;
      }
    });

    this.bondMeshes.forEach(group => {
      group.visible = (this.renderMode !== 'spaceFilling');
      group.children.forEach(mesh => {
        mesh.material.wireframe = (this.renderMode === 'wireframe');
      });
    });

    this.cloudMeshes.forEach(mesh => {
      mesh.visible = (this.renderMode === 'electronCloud');
    });
  }

  initListeners() {
    window.addEventListener('resize', () => this.onWindowResize());

    // Orbit controls using direct mouse drag listeners
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const dom = this.renderer.domElement;

    dom.addEventListener('pointerdown', (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      this.checkAtomClick(e);
    });

    dom.addEventListener('pointermove', (e) => {
      const rect = dom.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaMove = {
          x: e.clientX - previousMousePosition.x,
          y: e.clientY - previousMousePosition.y
        };

        this.moleculeGroup.rotation.y += deltaMove.x * 0.008;
        this.moleculeGroup.rotation.x += deltaMove.y * 0.008;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      } else {
        this.checkAtomHover();
      }
    });

    window.addEventListener('pointerup', () => {
      isDragging = false;
    });

    dom.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.camera.position.z += e.deltaY * 0.005;
      this.camera.position.z = Math.max(3, Math.min(25, this.camera.position.z));
    }, { passive: false });
  }

  checkAtomHover() {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.atomMeshes);

    if (intersects.length > 0) {
      const hoveredMesh = intersects[0].object;
      this.container.style.cursor = 'pointer';
      if (this.hoveredAtomId !== hoveredMesh.userData.atomData.id) {
        this.hoveredAtomId = hoveredMesh.userData.atomData.id;
      }
    } else {
      this.container.style.cursor = 'grab';
      this.hoveredAtomId = null;
    }
  }

  checkAtomClick(e) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.atomMeshes);

    if (intersects.length > 0) {
      const clickedMesh = intersects[0].object;
      const atomData = clickedMesh.userData.atomData;
      const elemData = clickedMesh.userData.elementData;

      this.selectedAtomId = atomData.id;
      this.highlightSelectedAtom(clickedMesh);

      if (this.onAtomSelectCallback) {
        this.onAtomSelectCallback(atomData, elemData);
      }
    }
  }

  highlightSelectedAtom(selectedMesh) {
    this.atomMeshes.forEach(mesh => {
      if (mesh === selectedMesh) {
        mesh.material.emissive.setHex(0x3182ce);
        mesh.material.emissiveIntensity = 0.5;
      } else {
        mesh.material.emissive.setHex(0x000000);
        mesh.material.emissiveIntensity = 0;
      }
    });
  }

  onWindowResize() {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }

  updateLabelsOverlay() {
    const labelContainer = document.getElementById('labels-overlay');
    if (!labelContainer) return;
    labelContainer.innerHTML = '';

    if (!this.showLabels) return;

    this.atomMeshes.forEach((mesh, index) => {
      const div = document.createElement('div');
      div.className = 'atom-3d-label';
      div.innerText = `${mesh.userData.atomData.element}${index + 1}`;
      div.style.color = mesh.userData.elementData.element === 'H' ? '#1a202c' : '#ffffff';
      div.style.backgroundColor = mesh.userData.elementData.color;
      labelContainer.appendChild(div);
      this.labelElements.push({ mesh, element: div });
    });
  }

  clearLabels() {
    const labelContainer = document.getElementById('labels-overlay');
    if (labelContainer) labelContainer.innerHTML = '';
    this.labelElements = [];
  }

  updateLabelsPositions() {
    if (!this.showLabels) return;

    const tempV = new THREE.Vector3();
    this.labelElements.forEach(item => {
      item.mesh.getWorldPosition(tempV);

      // Project 3D vector into 2D Screen Space
      tempV.project(this.camera);

      const x = (tempV.x * 0.5 + 0.5) * this.width;
      const y = (tempV.y * -0.5 + 0.5) * this.height;

      item.element.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;
      item.element.style.display = (tempV.z < 1.0) ? 'block' : 'none';
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    this.time += 0.015;

    // Slow auto rotation
    if (this.autoRotate) {
      this.moleculeGroup.rotation.y += 0.003;
    }

    // Thermal vibration physics simulation
    if (this.vibrationEnabled) {
      this.atomMeshes.forEach((mesh, i) => {
        const base = mesh.userData.basePos;
        const vibX = Math.sin(this.time * 4 + i) * 0.02;
        const vibY = Math.cos(this.time * 5 + i * 2) * 0.02;
        const vibZ = Math.sin(this.time * 3 + i * 3) * 0.02;

        mesh.position.set(base.x + vibX, base.y + vibY, base.z + vibZ);

        // Also move electron cloud
        if (this.cloudMeshes[i]) {
          this.cloudMeshes[i].position.set(base.x + vibX, base.y + vibY, base.z + vibZ);
        }
      });

      // Update bond endpoints according to vibrating atoms
      this.bondMeshes.forEach(group => {
        const atomA = group.userData.atomA;
        const atomB = group.userData.atomB;

        const posA = atomA.position;
        const posB = atomB.position;
        const direction = new THREE.Vector3().subVectors(posB, posA);

        group.position.copy(posA).add(direction.clone().multiplyScalar(0.5));
        group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize());
      });
    }

    // Particles slow orbit
    if (this.backgroundParticles) {
      this.backgroundParticles.rotation.y += 0.0005;
    }

    this.updateLabelsPositions();
    this.renderer.render(this.scene, this.camera);
  }
}

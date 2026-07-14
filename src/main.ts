import './style.css';
import 'animejs/adapters/three';

import {
  animate,
  createDraggable,
  createTimeline,
  stagger,
} from 'animejs';
import * as THREE from 'three';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('Missing #app root');
}

app.innerHTML = `
  <div class="boot-screen" aria-hidden="true">
    <div class="boot-screen__mark">NX/01</div>
    <div class="boot-screen__line"><span></span></div>
    <div class="boot-screen__status">INITIALIZING FLIGHT SYSTEM</div>
  </div>

  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="NEXUS Aero Lab home">
      <span>NX</span><span class="wordmark__slash">/</span><span>01</span>
    </a>
    <div class="header-telemetry" aria-label="Live telemetry status">
      <span class="status-dot"></span>
      <span>FLIGHT LINK</span>
      <span class="header-telemetry__time">04:32:08 UTC</span>
    </div>
    <nav class="site-nav" aria-label="Primary navigation">
      <a href="#calibrate">CALIBRATE</a>
      <a href="#vector">VECTOR</a>
      <a href="#modules">MODULES</a>
    </nav>
  </header>

  <div class="viewport" aria-hidden="true">
    <canvas id="webgl"></canvas>
    <div class="spectrum-bands">
      <span class="spectrum-band spectrum-band--mint"></span>
      <span class="spectrum-band spectrum-band--coral"></span>
      <span class="spectrum-band spectrum-band--blue"></span>
    </div>
    <div class="chapter-flash"></div>
    <div class="viewport-grid">
      <i></i><i></i><i></i><i></i><i></i><i></i>
      <b></b><b></b><b></b><b></b>
    </div>
    <div class="reticle">
      <span></span><span></span><span></span><span></span>
    </div>
    <div class="coordinates coordinates--north">MACH 0.72 / AOA 04.8</div>
    <div class="coordinates coordinates--south">THRUST 73% / VECTOR LOCK</div>
    <div class="blueprint-hud">
      <div class="blueprint-hud__title">
        <span>NX-7 / GENERAL ARRANGEMENT</span>
        <b>EXPLODED ORTHOGRAPHIC / REV.04</b>
      </div>
      <div class="blueprint-hud__scale">
        <span>0</span><i></i><i></i><i></i><i></i><strong>8.4 M</strong>
      </div>
      <div class="blueprint-hud__datum">DATUM A-A / LONGITUDINAL CENTERLINE</div>
    </div>
  </div>

  <div class="event-log" aria-hidden="true">
    <span>EVENT / PREFLIGHT</span>
    <b>0x7A-00 / AIRFRAME ONLINE</b>
  </div>

  <div class="assembly-labels" aria-hidden="true">
    <span class="assembly-label assembly-label--nose"><b>01</b> RADOME / MULTI-SPECTRAL SENSOR</span>
    <span class="assembly-label assembly-label--canopy"><b>02</b> FLIGHT DECK / PRESSURE CELL</span>
    <span class="assembly-label assembly-label--wing"><b>03</b> CHINE SPAR / CONTROL SURFACE</span>
    <span class="assembly-label assembly-label--engine"><b>04</b> RAMJET NACELLE / COMPRESSOR</span>
    <span class="assembly-label assembly-label--avionics"><b>05</b> AVIONICS BUS / CONTROL CORE</span>
    <span class="assembly-label assembly-label--tail"><b>06</b> STABILITY ARRAY / ACTUATOR</span>
  </div>

  <aside class="story-index" aria-label="Story chapters">
    <div class="story-index__track"><span></span></div>
    <a href="#top" data-index="0"><b>00</b><span>PREFLIGHT</span></a>
    <a href="#calibrate" data-index="1"><b>01</b><span>CALIBRATE</span></a>
    <a href="#vector" data-index="2"><b>02</b><span>VECTOR</span></a>
    <a href="#tune" data-index="3"><b>03</b><span>TUNE</span></a>
    <a href="#modules" data-index="4"><b>04</b><span>MODULES</span></a>
    <a href="#contact" data-index="5"><b>05</b><span>LAUNCH</span></a>
  </aside>

  <main>
    <section id="top" class="chapter chapter--hero" data-chapter="0">
      <div class="chapter__sticky hero-layout">
        <div class="hero-copy">
          <p class="eyebrow"><span>EXPERIMENTAL FLIGHT SYSTEM</span><span>AIRFRAME NX-7</span></p>
          <h1>NEXUS</h1>
          <p class="hero-copy__lead">A modular aircraft assembled in real time from structure, propulsion, control, and motion.</p>
          <div class="hero-actions">
            <button class="command command--primary" type="button">ENTER LAB</button>
            <button class="command" type="button">VIEW AIRFRAME</button>
          </div>
        </div>
        <div class="hero-specs" aria-label="System specifications">
          <div><span>FLIGHT LOOP</span><strong>120 Hz</strong></div>
          <div><span>COMPONENTS</span><strong>26</strong></div>
          <div><span>LATENCY</span><strong>08 ms</strong></div>
        </div>
      </div>
    </section>

    <section id="calibrate" class="chapter chapter--calibrate" data-chapter="1">
      <div class="chapter__sticky chapter-layout chapter-layout--left">
        <div class="chapter-copy">
          <p class="eyebrow"><span>01 / CALIBRATION</span><span>ARRAY SYNCHRONIZED</span></p>
          <h2>Every surface.<br />One response.</h2>
          <p>Flight controls, stabilizers, and propulsion lock into one timing system before the airframe separates.</p>
          <div class="data-row">
            <div><span>PHASE</span><strong class="phase-readout">0.000</strong></div>
            <div><span>DRIFT</span><strong>0.04%</strong></div>
            <div><span>SURFACES</span><strong>18</strong></div>
          </div>
        </div>
      </div>
    </section>

    <section id="vector" class="chapter chapter--vector" data-chapter="2">
      <div class="chapter__sticky chapter-layout chapter-layout--right">
        <div class="chapter-copy">
          <p class="eyebrow"><span>02 / VECTOR TRACE</span><span>PATH LOCKED</span></p>
          <h2>Motion leaves<br />a readable trace.</h2>
          <p>Curves become coordinates. Coordinates become timing. Every point stays connected to the same source.</p>
          <div class="vector-scope" aria-label="Signal vector plot">
            <svg viewBox="0 0 520 160" role="img" aria-label="Animated signal vector">
              <path class="vector-scope__guide" d="M0 80 H520" />
              <path class="vector-scope__path" d="M0 105 C55 105 52 30 108 32 S160 140 218 112 S286 40 338 76 S405 126 520 42" />
              <circle class="vector-scope__probe" cx="0" cy="105" r="6" />
            </svg>
            <div><span>VECTOR LENGTH</span><strong class="vector-readout">000.0</strong></div>
          </div>
        </div>
      </div>
    </section>

    <section id="tune" class="chapter chapter--tune" data-chapter="3">
      <div class="chapter__sticky chapter-layout chapter-layout--left">
        <div class="chapter-copy">
          <p class="eyebrow"><span>03 / LIVE PROBE</span><span>MANUAL CHANNEL</span></p>
          <h2>Input changes<br />the trajectory.</h2>
          <p>Control position, thrust, and vector angle remain live values instead of pre-rendered decoration.</p>
        </div>
        <div class="probe-console">
          <div class="probe-console__head">
            <span>PROBE VECTOR</span>
            <strong class="probe-state">X 50 / Y 50</strong>
          </div>
          <div class="probe-field">
            <i class="probe-field__axis probe-field__axis--x"></i>
            <i class="probe-field__axis probe-field__axis--y"></i>
            <button class="probe-handle" type="button" aria-label="Signal probe" title="Signal probe"><span></span></button>
          </div>
          <label class="carrier-control">
            <span>THRUST</span>
            <input type="range" min="18" max="96" value="73" aria-label="Engine thrust" />
            <strong><output>73</output>%</strong>
          </label>
        </div>
      </div>
    </section>

    <section id="modules" class="chapter chapter--modules" data-chapter="4">
      <div class="chapter__sticky chapter-layout chapter-layout--right">
        <div class="chapter-copy">
          <p class="eyebrow"><span>04 / ENGINEERING MODE</span><span>GA / REV.04</span></p>
          <h2>Aircraft becomes<br />a drawing.</h2>
          <p>Outer skin dissolves into datum lines, section frames, spars, and numbered systems before every part returns to flight position.</p>
          <div class="module-ledger" aria-label="Module telemetry">
            <div><span>A1</span><b>AIRFRAME</b><strong>2.84 KB</strong></div>
            <div><span>B4</span><b>VECTOR</b><strong>0.64 KB</strong></div>
            <div><span>C7</span><b>THRUST</b><strong>1.18 KB</strong></div>
            <div><span>D2</span><b>CONTROL</b><strong>0.42 KB</strong></div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="chapter chapter--contact" data-chapter="5">
      <div class="chapter__sticky contact-layout">
        <p class="eyebrow"><span>05 / ASSEMBLY COMPLETE</span><span>CLEARED FOR LAUNCH</span></p>
        <h2>Assemble the next<br />impossible machine.</h2>
        <p class="contact-layout__lead">NEXUS is a live study in aircraft decomposition, spatial rendering, and timeline choreography.</p>
        <div class="hero-actions hero-actions--center">
          <button class="command command--primary" type="button">REQUEST FLIGHT BRIEF</button>
          <button class="command" type="button">VIEW PROGRAM</button>
        </div>
        <footer>
          <span>NEXUS AERO LAB</span>
          <span>REAL-TIME FLIGHT ASSEMBLY</span>
          <span>2026 / 01</span>
        </footer>
      </div>
    </section>
  </main>

  <div class="scroll-status" aria-hidden="true">
    <span class="scroll-status__chapter">00</span>
    <div><i></i></div>
    <span class="scroll-status__percent">000%</span>
  </div>
`;

const colors = {
  background: 0x080b0c,
  foreground: 0xeef2ea,
  mint: 0x62f6cf,
  acid: 0xe8ff65,
  coral: 0xff6b47,
  blue: 0x5d84ff,
  graphite: 0x182124,
  line: 0x324146,
};

const canvas = document.querySelector<HTMLCanvasElement>('#webgl');

if (!canvas) {
  throw new Error('Missing WebGL canvas');
}

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;
renderer.localClippingEnabled = true;

const scene = new THREE.Scene();
scene.background = new THREE.Color(colors.background);
scene.fog = new THREE.FogExp2(colors.background, 0.028);

const camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0.8, 1.15, 13.8);

const world = new THREE.Group();
const aircraft = new THREE.Group();
const flightEffects = new THREE.Group();
world.add(aircraft, flightEffects);
scene.add(world);

const ambient = new THREE.HemisphereLight(colors.foreground, colors.background, 1.5);
const keyLight = new THREE.DirectionalLight(colors.foreground, 5.8);
keyLight.position.set(5, 7, 8);
const mintLight = new THREE.PointLight(colors.mint, 16, 18, 1.8);
mintLight.position.set(-3.5, 2.5, 4);
const coralLight = new THREE.PointLight(colors.coral, 18, 16, 1.7);
coralLight.position.set(4, -2, 3);
scene.add(ambient, keyLight, mintLight, coralLight);

const fuselageMaterial = new THREE.MeshStandardMaterial({
  color: 0x182124,
  roughness: 0.5,
  metalness: 0.58,
  side: THREE.DoubleSide,
  transparent: true,
});
const darkMaterial = new THREE.MeshStandardMaterial({
  color: 0x090f11,
  roughness: 0.46,
  metalness: 0.64,
  side: THREE.DoubleSide,
  transparent: true,
});
const panelMaterial = new THREE.MeshStandardMaterial({
  color: 0x11191c,
  roughness: 0.52,
  metalness: 0.56,
  side: THREE.DoubleSide,
  transparent: true,
});
const canopyMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x365d91,
  roughness: 0.08,
  metalness: 0.25,
  transmission: 0.22,
  transparent: true,
  opacity: 0.82,
});
const coreMaterial = new THREE.MeshStandardMaterial({
  color: colors.coral,
  roughness: 0.2,
  metalness: 0.15,
  emissive: colors.coral,
  emissiveIntensity: 0.5,
  transparent: true,
});
const mintMaterial = new THREE.MeshBasicMaterial({ color: colors.mint, transparent: true });
const coralMaterial = new THREE.MeshBasicMaterial({ color: colors.coral, transparent: true });
const outlineMaterial = new THREE.LineBasicMaterial({
  color: 0x344247,
  transparent: true,
  opacity: 0.62,
});
const blueprintMaterial = new THREE.LineBasicMaterial({
  color: 0x355a78,
  transparent: true,
  opacity: 0,
  depthTest: false,
  depthWrite: false,
});
const blueprintAccentMaterial = new THREE.LineBasicMaterial({
  color: 0xd45b41,
  transparent: true,
  opacity: 0,
  depthTest: false,
  depthWrite: false,
});
const blueprintGhostMaterial = new THREE.LineBasicMaterial({
  color: 0x59758a,
  transparent: true,
  opacity: 0,
  depthTest: false,
  depthWrite: false,
});
const engineeringBackground = new THREE.Color(0xe3dfd7);
const fuselageDark = new THREE.Color(0x182124);
const fuselageLight = new THREE.Color(0xd5d1ca);
const darkSurfaceDark = new THREE.Color(0x090f11);
const darkSurfaceLight = new THREE.Color(0xc6c2bb);
const panelDark = new THREE.Color(0x11191c);
const panelLight = new THREE.Color(0xd0ccc5);
const outlineDark = new THREE.Color(0x344247);
const outlineLight = new THREE.Color(0x48657a);
const foregroundColor = new THREE.Color(colors.foreground);
const dynamicDarkBackground = new THREE.Color(colors.background);
const themeColor = new THREE.Color();

type AircraftPart = THREE.Group & {
  userData: {
    home: THREE.Vector3;
    homeRotation: THREE.Euler;
    explodeOffset: THREE.Vector3;
    explodeRotation: THREE.Vector3;
    name: string;
  };
};

const aircraftParts: AircraftPart[] = [];

function outlinedMesh(
  geometry: THREE.BufferGeometry,
  material: THREE.Material,
) {
  const mesh = new THREE.Mesh(geometry, material);
  const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geometry, 18), outlineMaterial);
  const blueprintEdges = new THREE.LineSegments(new THREE.EdgesGeometry(geometry, 14), blueprintMaterial);
  const blueprintGhost = new THREE.LineSegments(new THREE.EdgesGeometry(geometry, 14), blueprintGhostMaterial);
  blueprintEdges.scale.setScalar(1.002);
  blueprintGhost.position.set(0.012, 0.009, -0.01);
  blueprintGhost.scale.setScalar(1.003);
  mesh.add(edges);
  mesh.add(blueprintEdges);
  mesh.add(blueprintGhost);
  return mesh;
}

function registerPart(
  name: string,
  home: THREE.Vector3,
  explodeOffset: THREE.Vector3,
  explodeRotation = new THREE.Vector3(),
) {
  const group = new THREE.Group() as AircraftPart;
  group.name = name;
  group.position.copy(home);
  group.userData = {
    name,
    home: home.clone(),
    homeRotation: group.rotation.clone(),
    explodeOffset: explodeOffset.clone(),
    explodeRotation: explodeRotation.clone(),
  };
  aircraft.add(group);
  aircraftParts.push(group);
  return group;
}

function ellipticalLoftGeometry(
  length: number,
  frontHeight: number,
  frontWidth: number,
  backHeight: number,
  backWidth: number,
  radialSegments = 40,
  lengthSegments = 5,
) {
  const positions: number[] = [];
  const indices: number[] = [];

  for (let lengthIndex = 0; lengthIndex <= lengthSegments; lengthIndex += 1) {
    const raw = lengthIndex / lengthSegments;
    const eased = raw * raw * (3 - 2 * raw);
    const x = length * 0.5 - raw * length;
    const height = THREE.MathUtils.lerp(frontHeight, backHeight, eased);
    const width = THREE.MathUtils.lerp(frontWidth, backWidth, eased);
    for (let radialIndex = 0; radialIndex < radialSegments; radialIndex += 1) {
      const angle = (radialIndex / radialSegments) * Math.PI * 2;
      positions.push(x, Math.cos(angle) * height, Math.sin(angle) * width);
    }
  }

  for (let lengthIndex = 0; lengthIndex < lengthSegments; lengthIndex += 1) {
    for (let radialIndex = 0; radialIndex < radialSegments; radialIndex += 1) {
      const nextRadial = (radialIndex + 1) % radialSegments;
      const a = lengthIndex * radialSegments + radialIndex;
      const b = lengthIndex * radialSegments + nextRadial;
      const c = (lengthIndex + 1) * radialSegments + nextRadial;
      const d = (lengthIndex + 1) * radialSegments + radialIndex;
      indices.push(a, b, d, b, c, d);
    }
  }

  const frontCenter = positions.length / 3;
  positions.push(length * 0.5, 0, 0);
  const backCenter = positions.length / 3;
  positions.push(-length * 0.5, 0, 0);
  for (let radialIndex = 0; radialIndex < radialSegments; radialIndex += 1) {
    const nextRadial = (radialIndex + 1) % radialSegments;
    indices.push(frontCenter, radialIndex, nextRadial);
    const backRingStart = lengthSegments * radialSegments;
    indices.push(backCenter, backRingStart + nextRadial, backRingStart + radialIndex);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function ellipseTube(height: number, width: number, radius: number, material: THREE.Material) {
  const points = Array.from({ length: 48 }, (_, index) => {
    const angle = (index / 48) * Math.PI * 2;
    return new THREE.Vector3(0, Math.cos(angle) * height, Math.sin(angle) * width);
  });
  return new THREE.Mesh(
    new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points, true), 64, radius, 6, true),
    material,
  );
}

function addFuselageSection(
  name: string,
  x: number,
  length: number,
  frontHeight: number,
  frontWidth: number,
  backHeight: number,
  backWidth: number,
  explodeOffset: THREE.Vector3,
  material: THREE.Material = fuselageMaterial,
) {
  const group = registerPart(name, new THREE.Vector3(x, 0, 0), explodeOffset);
  const section = outlinedMesh(
    ellipticalLoftGeometry(length, frontHeight, frontWidth, backHeight, backWidth),
    material,
  );
  group.add(section);

  const interfaces = [
    { x: length * 0.48, h: frontHeight, w: frontWidth, material: panelMaterial },
    { x: -length * 0.48, h: backHeight, w: backWidth, material: darkMaterial },
  ];
  interfaces.forEach((entry) => {
    const coupling = ellipseTube(entry.h * 1.015, entry.w * 1.015, 0.026, entry.material);
    coupling.position.x = entry.x;
    group.add(coupling);
  });

  for (let ribIndex = -1; ribIndex <= 1; ribIndex += 1) {
    const t = (ribIndex + 1) / 2;
    const rib = ellipseTube(
      THREE.MathUtils.lerp(frontHeight, backHeight, t) * 1.01,
      THREE.MathUtils.lerp(frontWidth, backWidth, t) * 1.01,
      0.009,
      panelMaterial,
    );
    rib.position.x = ribIndex * length * 0.23;
    group.add(rib);
  }

  const servicePanel = outlinedMesh(
    new THREE.BoxGeometry(length * 0.38, 0.018, Math.min(frontWidth, backWidth) * 0.68),
    darkMaterial,
  );
  servicePanel.position.set(0.04, Math.max(frontHeight, backHeight) * 0.94, 0);
  group.add(servicePanel);
  return group;
}

const nose = registerPart(
  'NOSE',
  new THREE.Vector3(3.62, -0.01, 0),
  new THREE.Vector3(2.7, 0, 0),
  new THREE.Vector3(0, 0, -4),
);
const noseMesh = outlinedMesh(
  ellipticalLoftGeometry(1.72, 0.018, 0.025, 0.245, 0.46, 40, 7),
  fuselageMaterial,
);
nose.add(noseMesh);

const pitotTube = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.035, 0.7, 12), darkMaterial);
pitotTube.rotation.z = -Math.PI / 2;
pitotTube.position.x = 1.12;
nose.add(pitotTube);
const pitotTip = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.28, 12), coralMaterial);
pitotTip.rotation.z = -Math.PI / 2;
pitotTip.position.x = 1.56;
nose.add(pitotTip);

addFuselageSection('FORWARD FUSELAGE', 2.25, 1.18, 0.245, 0.46, 0.31, 0.64, new THREE.Vector3(1.45, 0, 0));
addFuselageSection('CENTER FUSELAGE', 0.9, 1.58, 0.31, 0.64, 0.34, 0.76, new THREE.Vector3(0.42, 0, 0));
addFuselageSection('REAR FUSELAGE', -0.78, 1.78, 0.34, 0.76, 0.27, 0.61, new THREE.Vector3(-0.48, 0, 0));
addFuselageSection('TAIL CONE', -2.38, 1.44, 0.27, 0.61, 0.115, 0.25, new THREE.Vector3(-1.75, 0, 0));

const canopy = registerPart(
  'CANOPY',
  new THREE.Vector3(1.42, 0.34, 0),
  new THREE.Vector3(0.12, 1.55, 0),
  new THREE.Vector3(0, 4, -3),
);
const canopyMesh = outlinedMesh(new THREE.SphereGeometry(0.5, 32, 18), canopyMaterial);
canopyMesh.scale.set(0.96, 0.34, 0.48);
canopy.add(canopyMesh);
const rearCanopy = outlinedMesh(new THREE.SphereGeometry(0.42, 28, 16), canopyMaterial);
rearCanopy.position.x = -0.66;
rearCanopy.scale.set(0.82, 0.28, 0.42);
canopy.add(rearCanopy);
const canopySpine = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.035, 0.055), coreMaterial);
canopySpine.position.set(-0.18, 0.12, 0);
canopy.add(canopySpine);

function chineGeometry() {
  const shape = new THREE.Shape();
  shape.moveTo(4.22, 0);
  shape.lineTo(3.12, 0.42);
  shape.lineTo(1.62, 1.16);
  shape.lineTo(0.12, 2.05);
  shape.lineTo(-1.42, 2.82);
  shape.lineTo(-2.72, 2.18);
  shape.lineTo(-3.18, 0.78);
  shape.lineTo(-3.26, 0);
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.16,
    bevelEnabled: true,
    bevelSize: 0.018,
    bevelThickness: 0.018,
    bevelSegments: 1,
  });
  geometry.rotateX(Math.PI / 2);
  return geometry;
}

for (const side of [-1, 1]) {
  const skin = registerPart(
    side < 0 ? 'PORT CHINE SKIN' : 'STARBOARD CHINE SKIN',
    new THREE.Vector3(0, 0.055, 0),
    new THREE.Vector3(-0.12, 0.46, side * 2.7),
    new THREE.Vector3(side * 5, side * 3, side * 4),
  );
  const skinMesh = outlinedMesh(chineGeometry(), darkMaterial);
  skinMesh.scale.z = side;
  skin.add(skinMesh);

  const heatLine = new THREE.Mesh(
    new THREE.BoxGeometry(2.2, 0.024, 0.028),
    side < 0 ? coralMaterial : mintMaterial,
  );
  heatLine.position.set(-0.18, 0.17, side * 1.42);
  heatLine.rotation.y = side * -0.22;
  skin.add(heatLine);

  for (let panelIndex = 0; panelIndex < 5; panelIndex += 1) {
    const panel = outlinedMesh(
      new THREE.BoxGeometry(0.42, 0.018, 0.3 + panelIndex * 0.05),
      panelMaterial,
    );
    panel.position.set(1.25 - panelIndex * 0.72, 0.17, side * (0.76 + panelIndex * 0.36));
    panel.rotation.y = side * -0.08;
    skin.add(panel);
  }
}

function wingGeometry(outer: boolean) {
  const shape = new THREE.Shape();
  if (!outer) {
    shape.moveTo(1.3, 0.42);
    shape.lineTo(-1.55, 0.7);
    shape.lineTo(-2.55, 2.42);
    shape.lineTo(-0.25, 2.08);
  } else {
    shape.moveTo(-0.25, 2.02);
    shape.lineTo(-2.55, 2.38);
    shape.lineTo(-2.98, 3.62);
    shape.lineTo(-1.34, 3.22);
  }
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: outer ? 0.08 : 0.12,
    bevelEnabled: false,
  });
  geometry.rotateX(Math.PI / 2);
  return geometry;
}

for (const side of [-1, 1]) {
  const sideName = side < 0 ? 'PORT' : 'STARBOARD';
  const innerWing = registerPart(
    `${sideName} INNER WING`,
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(-0.18, 0.58, side * 2.35),
    new THREE.Vector3(side * 5, 0, side * 4),
  );
  const innerMesh = outlinedMesh(wingGeometry(false), panelMaterial);
  innerMesh.scale.z = side;
  innerWing.add(innerMesh);

  const innerFlap = outlinedMesh(
    new THREE.BoxGeometry(1.45, 0.055, 0.36),
    darkMaterial,
  );
  innerFlap.position.set(-1.25, -0.02, side * 1.72);
  innerFlap.rotation.y = side * 0.12;
  innerWing.add(innerFlap);

  const outerWing = registerPart(
    `${sideName} OUTER WING`,
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(-0.75, 0.92, side * 3.85),
    new THREE.Vector3(side * 8, side * 4, side * 7),
  );
  const outerMesh = outlinedMesh(wingGeometry(true), fuselageMaterial);
  outerMesh.scale.z = side;
  outerWing.add(outerMesh);

  const stripe = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.035, 0.15), side < 0 ? coralMaterial : mintMaterial);
  stripe.position.set(-1.78, 0.1, side * 2.72);
  outerWing.add(stripe);

  const wingTip = new THREE.Mesh(
    new THREE.SphereGeometry(0.085, 16, 12),
    new THREE.MeshBasicMaterial({ color: side < 0 ? colors.coral : colors.mint }),
  );
  wingTip.position.set(-2.82, 0.05, side * 3.48);
  outerWing.add(wingTip);
}

function stabilizerGeometry() {
  const shape = new THREE.Shape();
  shape.moveTo(0.4, 0.15);
  shape.lineTo(-0.9, 0.2);
  shape.lineTo(-1.3, 1.45);
  shape.lineTo(-0.45, 1.05);
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.07, bevelEnabled: false });
  geometry.rotateX(Math.PI / 2);
  return geometry;
}

for (const side of [-1, 1]) {
  const stabilizer = registerPart(
    side < 0 ? 'PORT STABILIZER' : 'STARBOARD STABILIZER',
    new THREE.Vector3(-2.15, 0.15, 0),
    new THREE.Vector3(-1.25, 0.68, side * 3.05),
    new THREE.Vector3(side * 6, 0, side * 5),
  );
  const mesh = outlinedMesh(stabilizerGeometry(), panelMaterial);
  mesh.scale.z = side;
  stabilizer.add(mesh);
}

function finGeometry() {
  const shape = new THREE.Shape();
  shape.moveTo(0.35, 0);
  shape.lineTo(-0.85, 0);
  shape.lineTo(-0.55, 1.35);
  shape.lineTo(0.05, 1.02);
  shape.closePath();
  return new THREE.ExtrudeGeometry(shape, { depth: 0.08, bevelEnabled: false });
}

for (const side of [-1, 1]) {
  const fin = registerPart(
    side < 0 ? 'PORT FIN' : 'STARBOARD FIN',
    new THREE.Vector3(-1.86, 0.24, side * 1.78),
    new THREE.Vector3(-0.72, 2.05, side * 0.72),
    new THREE.Vector3(0, side * 5, side * 4),
  );
  fin.add(outlinedMesh(finGeometry(), side < 0 ? darkMaterial : fuselageMaterial));
}

const engineFans: THREE.Group[] = [];
const thrustMaterials: THREE.MeshBasicMaterial[] = [];
for (const side of [-1, 1]) {
  const engine = registerPart(
    side < 0 ? 'PORT ENGINE' : 'STARBOARD ENGINE',
    new THREE.Vector3(-0.72, -0.035, side * 1.82),
    new THREE.Vector3(-0.55, -0.92, side * 2.68),
    new THREE.Vector3(side * 5, side * 4, side * 4),
  );
  const nacelle = outlinedMesh(
    ellipticalLoftGeometry(2.48, 0.28, 0.42, 0.23, 0.34, 36, 6),
    darkMaterial,
  );
  engine.add(nacelle);

  for (const x of [-1.03, -0.44, 0.28, 0.92]) {
    const t = (1.24 - x) / 2.48;
    const nacelleBand = ellipseTube(
      THREE.MathUtils.lerp(0.28, 0.23, t) * 1.03,
      THREE.MathUtils.lerp(0.42, 0.34, t) * 1.03,
      0.018,
      x === -1.03 ? coreMaterial : fuselageMaterial,
    );
    nacelleBand.position.x = x;
    engine.add(nacelleBand);
  }

  const inlet = ellipseTube(0.285, 0.425, 0.038, fuselageMaterial);
  inlet.position.x = 1.22;
  engine.add(inlet);

  const fan = new THREE.Group();
  fan.position.x = 1.235;
  for (let bladeIndex = 0; bladeIndex < 12; bladeIndex += 1) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.39, 0.045), mintMaterial);
    blade.rotation.x = (bladeIndex / 12) * Math.PI * 2;
    fan.add(blade);
  }
  const fanHub = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.58, 24), panelMaterial);
  fanHub.rotation.z = -Math.PI / 2;
  fanHub.position.x = 0.2;
  fan.add(fanHub);
  engine.add(fan);
  engineFans.push(fan);

  const exhaustHub = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.56, 20), coreMaterial);
  exhaustHub.rotation.z = Math.PI / 2;
  exhaustHub.position.x = -1.24;
  engine.add(exhaustHub);

  const thrustMaterial = new THREE.MeshBasicMaterial({
    color: side < 0 ? colors.coral : colors.mint,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const thrust = new THREE.Mesh(new THREE.ConeGeometry(0.25, 3.2, 24, 1, true), thrustMaterial);
  thrust.rotation.z = Math.PI / 2;
  thrust.position.set(-3.58, -0.035, side * 1.82);
  thrust.scale.y = 1;
  flightEffects.add(thrust);
  thrustMaterials.push(thrustMaterial);
}

const avionicsParts: AircraftPart[] = [];
for (let index = 0; index < 6; index += 1) {
  const x = 1.4 - index * 0.58;
  const module = registerPart(
    `AVIONICS ${String(index + 1).padStart(2, '0')}`,
    new THREE.Vector3(x, -0.05, 0),
    new THREE.Vector3(
      (index - 2.5) * 0.22,
      index % 2 === 0 ? 0.82 + index * 0.08 : -0.78 - index * 0.06,
      index % 2 === 0 ? 0.72 : -0.72,
    ),
    new THREE.Vector3(index * 1.2, index * -1.5, index * 1.1),
  );
  const box = outlinedMesh(
    new THREE.BoxGeometry(0.34 + index * 0.025, 0.22, 0.42),
    index % 3 === 0 ? coreMaterial : panelMaterial,
  );
  module.add(box);
  avionicsParts.push(module);
}

const systemsSpine = new THREE.Group();
const spineBeam = outlinedMesh(new THREE.CylinderGeometry(0.1, 0.1, 5.4, 18), darkMaterial);
spineBeam.rotation.z = Math.PI / 2;
systemsSpine.add(spineBeam);

for (let index = 0; index < 9; index += 1) {
  const x = -2.25 + index * 0.56;
  const bulkhead = new THREE.Mesh(
    new THREE.TorusGeometry(0.52 + Math.sin(index * 0.7) * 0.08, 0.018, 8, 48),
    index % 3 === 0 ? coreMaterial : panelMaterial,
  );
  bulkhead.rotation.y = Math.PI / 2;
  bulkhead.position.x = x;
  systemsSpine.add(bulkhead);

  for (const cableY of [-0.18, 0.18]) {
    const cable = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.025, 0.025),
      index % 2 === 0 ? mintMaterial : coralMaterial,
    );
    cable.position.set(x, cableY, index % 2 === 0 ? 0.24 : -0.24);
    systemsSpine.add(cable);
  }
}
aircraft.add(systemsSpine);

const engineeringDrawing = new THREE.Group();
engineeringDrawing.name = 'NX-7 ENGINEERING DRAWING';
aircraft.add(engineeringDrawing);

function technicalLine(
  points: THREE.Vector3[],
  material: THREE.LineBasicMaterial = blueprintMaterial,
) {
  return new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material);
}

function technicalEllipse(
  x: number,
  height: number,
  width: number,
  material: THREE.LineBasicMaterial = blueprintMaterial,
) {
  const points = Array.from({ length: 65 }, (_, index) => {
    const angle = (index / 64) * Math.PI * 2;
    return new THREE.Vector3(x, Math.cos(angle) * height, Math.sin(angle) * width);
  });
  return technicalLine(points, material);
}

function technicalGear(
  x: number,
  centerY: number,
  centerZ: number,
  radiusY: number,
  radiusZ: number,
  teeth = 22,
) {
  const points = Array.from({ length: teeth * 2 + 1 }, (_, index) => {
    const angle = (index / (teeth * 2)) * Math.PI * 2;
    const toothScale = index % 2 === 0 ? 1.08 : 0.95;
    return new THREE.Vector3(
      0,
      Math.cos(angle) * radiusY * toothScale,
      Math.sin(angle) * radiusZ * toothScale,
    );
  });
  const gear = technicalLine(points, blueprintAccentMaterial);
  gear.position.set(x, centerY, centerZ);
  return gear;
}

const sectionProfile = [
  { x: -3.1, h: 0.12, w: 0.25 },
  { x: -2.55, h: 0.25, w: 0.52 },
  { x: -1.75, h: 0.3, w: 0.67 },
  { x: -0.8, h: 0.34, w: 0.76 },
  { x: 0.15, h: 0.34, w: 0.78 },
  { x: 1.05, h: 0.33, w: 0.73 },
  { x: 1.9, h: 0.29, w: 0.6 },
  { x: 2.7, h: 0.24, w: 0.48 },
  { x: 3.45, h: 0.12, w: 0.24 },
  { x: 4.45, h: 0.015, w: 0.02 },
];

sectionProfile.forEach((section, index) => {
  engineeringDrawing.add(
    technicalEllipse(
      section.x,
      section.h * (index % 2 === 0 ? 1.02 : 1),
      section.w * (index % 2 === 0 ? 1.02 : 1),
      index === 4 ? blueprintAccentMaterial : blueprintMaterial,
    ),
  );
});

const engineeringGears: THREE.Line[] = [];
[
  { x: -2.55, y: 0, z: 0, h: 0.29, w: 0.58, teeth: 28 },
  { x: -0.82, y: 0, z: 0, h: 0.38, w: 0.82, teeth: 32 },
  { x: 1.72, y: 0, z: 0, h: 0.33, w: 0.66, teeth: 30 },
  { x: -0.35, y: 0, z: -1.82, h: 0.31, w: 0.45, teeth: 22 },
  { x: -0.35, y: 0, z: 1.82, h: 0.31, w: 0.45, teeth: 22 },
].forEach((gear) => {
  const gearLine = technicalGear(gear.x, gear.y, gear.z, gear.h, gear.w, gear.teeth);
  engineeringGears.push(gearLine);
  engineeringDrawing.add(gearLine);
});

for (let longeronIndex = 0; longeronIndex < 10; longeronIndex += 1) {
  const angle = (longeronIndex / 10) * Math.PI * 2;
  const points = sectionProfile.map((section) => new THREE.Vector3(
    section.x,
    Math.cos(angle) * section.h,
    Math.sin(angle) * section.w,
  ));
  engineeringDrawing.add(technicalLine(points, blueprintGhostMaterial));
}

engineeringDrawing.add(
  technicalLine([
    new THREE.Vector3(-4.7, 0, 0),
    new THREE.Vector3(5.05, 0, 0),
  ], blueprintAccentMaterial),
);
engineeringDrawing.add(
  technicalLine([
    new THREE.Vector3(-3.28, 0.08, 0),
    new THREE.Vector3(4.48, 0.08, 0),
  ], blueprintGhostMaterial),
);

const wingStructureLines = [
  [[3.25, 0.08, 0.42], [-2.88, 0.08, 3.58]],
  [[3.25, 0.08, -0.42], [-2.88, 0.08, -3.58]],
  [[1.65, 0.09, 1.15], [-2.64, 0.09, 2.52]],
  [[1.65, 0.09, -1.15], [-2.64, 0.09, -2.52]],
  [[0.62, 0.1, 1.72], [-2.25, 0.1, 3.1]],
  [[0.62, 0.1, -1.72], [-2.25, 0.1, -3.1]],
  [[-0.2, 0.1, 2.08], [-0.2, 0.1, 3.25]],
  [[-0.2, 0.1, -2.08], [-0.2, 0.1, -3.25]],
] as const;
wingStructureLines.forEach((pair, index) => {
  engineeringDrawing.add(technicalLine(
    pair.map((point) => new THREE.Vector3(...point)),
    index < 2 ? blueprintMaterial : blueprintGhostMaterial,
  ));
});

const hatchPositions: number[] = [];
for (let index = 0; index < 26; index += 1) {
  const x = -2.95 + index * 0.285;
  hatchPositions.push(
    x, -0.3, 0.02,
    x + 0.22, 0.3, 0.02,
  );
}
const fuselageHatching = new THREE.LineSegments(
  new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(hatchPositions, 3)),
  blueprintGhostMaterial,
);
engineeringDrawing.add(fuselageHatching);

function addDimensionLine(
  start: THREE.Vector3,
  end: THREE.Vector3,
  tick = 0.16,
) {
  const direction = end.clone().sub(start).normalize();
  const normal = new THREE.Vector3(-direction.y, direction.x, 0).multiplyScalar(tick);
  engineeringDrawing.add(technicalLine([start, end], blueprintAccentMaterial));
  engineeringDrawing.add(technicalLine([
    start.clone().sub(normal), start.clone().add(normal),
  ], blueprintAccentMaterial));
  engineeringDrawing.add(technicalLine([
    end.clone().sub(normal), end.clone().add(normal),
  ], blueprintAccentMaterial));
}

addDimensionLine(new THREE.Vector3(-3.25, -1.06, 0), new THREE.Vector3(4.48, -1.06, 0));
addDimensionLine(new THREE.Vector3(-2.9, 1.16, 0), new THREE.Vector3(-2.9, -1.16, 0));
addDimensionLine(new THREE.Vector3(-1.7, 0.8, -3.72), new THREE.Vector3(-1.7, 0.8, 3.72));

const assemblyGuideMaterial = new THREE.LineBasicMaterial({
  color: 0x7a7771,
  transparent: true,
  opacity: 0,
});
const assemblyGuides = new THREE.Group();
aircraft.add(assemblyGuides);

aircraftParts.forEach((part) => {
  const home = part.userData.home;
  const offset = part.userData.explodeOffset;
  const geometry = new THREE.BufferGeometry().setFromPoints([
    home,
    home.clone().add(offset.clone().multiplyScalar(0.64)),
  ]);
  assemblyGuides.add(new THREE.Line(geometry, assemblyGuideMaterial));
});

const flightPathPoints = [
  new THREE.Vector3(-7, -1.5, -2),
  new THREE.Vector3(-3.8, 1.2, 0.8),
  new THREE.Vector3(0, 0.6, 1.5),
  new THREE.Vector3(3.8, -0.8, 0),
  new THREE.Vector3(7, 1.6, -1.5),
];
const flightCurve = new THREE.CatmullRomCurve3(flightPathPoints);
const flightPathMaterial = new THREE.LineBasicMaterial({
  color: colors.mint,
  transparent: true,
  opacity: 0.18,
});
const flightPath = new THREE.Line(
  new THREE.BufferGeometry().setFromPoints(flightCurve.getPoints(180)),
  flightPathMaterial,
);
flightPath.position.z = -2;
scene.add(flightPath);

const airflowPositions: number[] = [];
for (let index = 0; index < 160; index += 1) {
  const x = (Math.random() - 0.5) * 24;
  const y = (Math.random() - 0.5) * 10;
  const z = (Math.random() - 0.5) * 10 - 2;
  const length = 0.12 + Math.random() * 0.55;
  airflowPositions.push(x, y, z, x + length, y, z);
}
const airflowGeometry = new THREE.BufferGeometry();
airflowGeometry.setAttribute('position', new THREE.Float32BufferAttribute(airflowPositions, 3));
const airflowMaterial = new THREE.LineBasicMaterial({
  color: colors.foreground,
  transparent: true,
  opacity: 0.18,
});
const airflow = new THREE.LineSegments(airflowGeometry, airflowMaterial);
scene.add(airflow);

const scanMaterial = new THREE.MeshBasicMaterial({
  color: colors.coral,
  transparent: true,
  opacity: 0,
  side: THREE.DoubleSide,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
});
const scanEdgeMaterial = new THREE.LineBasicMaterial({
  color: colors.coral,
  transparent: true,
  opacity: 0,
  depthTest: false,
});
const scanGeometry = new THREE.PlaneGeometry(5.2, 4.2);
const scanPlane = new THREE.Mesh(scanGeometry, scanMaterial);
scanPlane.rotation.y = Math.PI / 2;
scanPlane.add(new THREE.Line(
  new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, -2.1, 0),
    new THREE.Vector3(0, 2.1, 0),
  ]),
  scanEdgeMaterial,
));
scanPlane.position.set(4.75, 0, 0);
flightEffects.add(scanPlane);
const scanLight = new THREE.PointLight(colors.coral, 0, 7, 2);
flightEffects.add(scanLight);
const scanClipPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 4.75);

const machConeMaterial = new THREE.MeshBasicMaterial({
  color: colors.blue,
  transparent: true,
  opacity: 0,
  wireframe: true,
  depthWrite: false,
});
const machCone = new THREE.Mesh(new THREE.ConeGeometry(2.7, 7.2, 32, 3, true), machConeMaterial);
machCone.rotation.z = Math.PI / 2;
machCone.position.x = -2.9;
flightEffects.add(machCone);

const exhaustWaves: THREE.Mesh[] = [];
for (let index = 0; index < 5; index += 1) {
  const material = new THREE.MeshBasicMaterial({
    color: index % 2 === 0 ? colors.coral : colors.mint,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const wave = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.022, 8, 96), material);
  wave.rotation.y = Math.PI / 2;
  wave.position.x = -3.2 - index * 0.35;
  wave.scale.setScalar(0.1);
  flightEffects.add(wave);
  exhaustWaves.push(wave);
}

const lockPulses = [-2.35, -0.82, 0.85, 2.22].map((x, index) => {
  const material = new THREE.MeshBasicMaterial({
    color: index % 2 === 0 ? 0xd45b41 : 0x355a78,
    transparent: true,
    opacity: 0,
    depthTest: false,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(new THREE.TorusGeometry(0.54, 0.018, 8, 72), material);
  mesh.rotation.y = Math.PI / 2;
  mesh.position.x = x;
  mesh.scale.setScalar(0.2);
  aircraft.add(mesh);
  return { mesh, material };
});

aircraft.rotation.set(
  THREE.MathUtils.degToRad(-5),
  THREE.MathUtils.degToRad(-10),
  THREE.MathUtils.degToRad(-2),
);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion) {
  animate(engineFans, { rotateX: 360, duration: 620, loop: true, ease: 'linear' });
}

const story = createTimeline({ autoplay: false, defaults: { ease: 'inOut(3)' } });
const storyClock = { progress: 0 };
const engineeringTheme = { light: 0, blueprint: 0 };
const backgroundState = { r: 8, g: 11, b: 12 };
const engineeringPaperState = { r: 227, g: 223, b: 215 };
const scanState = { x: 4.75, energy: 0 };
const cameraState = {
  x: 0.8,
  y: 1.15,
  z: 13.8,
  targetX: 0.5,
  targetY: 0,
  targetZ: 0,
  upX: 0,
  upY: 1,
  upZ: 0,
  fov: 34,
};
const cameraRail = { progress: 0 };
const cameraCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(3.2, 3.6, 13.8),
  new THREE.Vector3(5, 5, 14.2),
  new THREE.Vector3(9.2, 6.5, 12.8),
  new THREE.Vector3(5.8, 11.5, 12),
  new THREE.Vector3(-1.8, 12.5, 12.8),
  new THREE.Vector3(-9.6, 8, 10.5),
  new THREE.Vector3(-11.8, 5.5, -6),
  new THREE.Vector3(-4.8, 7.5, -13.5),
  new THREE.Vector3(5.8, 2.8, 14.5),
], false, 'catmullrom', 0.34);
const targetCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0.55, 0, 0),
  new THREE.Vector3(0.35, 0, 0),
  new THREE.Vector3(0.1, 0, 0),
  new THREE.Vector3(0.45, 0.08, 0),
  new THREE.Vector3(0.55, 0.06, 0),
  new THREE.Vector3(0.2, -0.02, 0),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, -0.04, 0),
  new THREE.Vector3(0, -0.05, 0),
], false, 'catmullrom', 0.34);
const cameraRailPosition = new THREE.Vector3();
const cameraRailTarget = new THREE.Vector3();

story
  .add(storyClock, { progress: 1, duration: 7200, ease: 'linear' }, 0)
  .add(cameraRail, { progress: 1, duration: 7200, ease: 'linear' }, 0)
  .add(aircraft, { x: 1.45, y: -0.08, rotateX: -3, rotateY: -7, rotateZ: -2, scale: 0.94, duration: 900 }, 0)
  .add(cameraState, { fov: 32, duration: 920, ease: 'out(3)' }, 0)
  .add(backgroundState, { r: 18, g: 8, b: 7, duration: 620, ease: 'inOutQuad' }, 620)
  .add(scanState, { energy: 1, duration: 120, ease: 'out(4)' }, 760)
  .add(scanState, { x: -3.55, duration: 940, ease: 'inOut(3)' }, 800)
  .add(scanState, { energy: 0, duration: 180, ease: 'out(3)' }, 1660)
  .add(aircraft, { x: 0.45, y: 0.04, rotateX: 0, rotateY: 0, rotateZ: 0, scale: 0.82, duration: 980, ease: 'inOut(5)' }, 850)
  .add(engineeringTheme, { light: 1, blueprint: 1, duration: 820, ease: 'inOutQuad' }, 900)
  .add(cameraState, { fov: 34, duration: 920, ease: 'inOut(4)' }, 980)
  .add(flightPathMaterial, { opacity: 0, duration: 360 }, 980)
  .add(assemblyGuideMaterial, { opacity: 0.46, duration: 460 }, 1450)

  .add(engineeringPaperState, { r: 219, g: 226, b: 228, duration: 900, ease: 'inOutQuad' }, 2100)
  .add(aircraft, { x: 0.15, y: 0.05, rotateY: 7, rotateZ: -2, scale: 0.79, duration: 1250, ease: 'inOut(3)' }, 2380)
  .add(engineeringPaperState, { r: 232, g: 226, b: 216, duration: 900, ease: 'inOutQuad' }, 3400)
  .add(aircraft, { x: 0.1, y: 0, rotateY: -5, rotateZ: 1.5, scale: 0.82, duration: 1320, ease: 'inOut(3)' }, 3600)

  .add(assemblyGuideMaterial, { opacity: 0, duration: 520 }, 4880)
  .add(cameraState, { fov: 31, duration: 900, ease: 'inOut(4)' }, 5200)
  .add(engineeringTheme, { light: 0, blueprint: 0, duration: 920, ease: 'inOutQuad' }, 5660)
  .add(backgroundState, { r: 8, g: 11, b: 12, duration: 820, ease: 'inOutQuad' }, 5660)
  .add(aircraft, { x: 0, y: -0.18, rotateX: -4, rotateY: -8, rotateZ: 0, scale: 0.96, duration: 1120, ease: 'inOut(5)' }, 5760)
  .add(cameraState, { fov: 35, duration: 920, ease: 'inOut(4)' }, 6200);

function explodeStage(name: string) {
  if (/FUSELAGE|TAIL CONE|NOSE/.test(name)) return 0;
  if (/CHINE|WING/.test(name)) return 1;
  if (/ENGINE|STABILIZER|FIN|CANOPY/.test(name)) return 2;
  return 3;
}

function assemblyStage(name: string) {
  if (/AVIONICS/.test(name)) return 0;
  if (/FUSELAGE|TAIL CONE|NOSE/.test(name)) return 1;
  if (/ENGINE/.test(name)) return 2;
  if (/CHINE|WING/.test(name)) return 3;
  return 4;
}

aircraftParts.forEach((part, index) => {
  const home = part.userData.home;
  const offset = part.userData.explodeOffset;
  const rotation = part.userData.explodeRotation;
  const calibration = 0.12;

  story
    .add(part, {
      x: home.x + offset.x * calibration,
      y: home.y + offset.y * calibration,
      z: home.z + offset.z * calibration,
      duration: 360,
      ease: 'out(4)',
    }, 720 + index * 10)
    .add(part, {
      x: home.x,
      y: home.y,
      z: home.z,
      duration: 440,
      ease: 'inOut(4)',
    }, 1040 + (aircraftParts.length - index) * 7)
    .add(part, {
      x: home.x + offset.x * 0.62,
      y: home.y + offset.y * 0.62,
      z: home.z + offset.z * 0.62,
      rotateX: rotation.x * 0.68,
      rotateY: rotation.y * 0.68,
      rotateZ: rotation.z * 0.68,
      duration: 880,
      ease: 'out(5)',
    }, 1420 + explodeStage(part.userData.name) * 185 + index * 8)
    .add(part, {
      x: home.x,
      y: home.y,
      z: home.z,
      rotateX: THREE.MathUtils.radToDeg(part.userData.homeRotation.x),
      rotateY: THREE.MathUtils.radToDeg(part.userData.homeRotation.y),
      rotateZ: THREE.MathUtils.radToDeg(part.userData.homeRotation.z),
      duration: 1080,
      ease: 'inOut(5)',
    }, 3480 + assemblyStage(part.userData.name) * 225 + index * 7);
});

lockPulses.forEach(({ mesh, material }, index) => {
  const pulseTime = 3650 + index * 280;
  story
    .add(mesh, { scale: [0.2, 1.7], duration: 620, ease: 'out(4)' }, pulseTime)
    .add(material, { opacity: [0, 0.62, 0], duration: 620, ease: 'out(4)' }, pulseTime)
    .add(mesh, { scale: 0.2, duration: 10 }, pulseTime + 640);
});

thrustMaterials.forEach((material, index) => {
  story
    .add(material, { opacity: 0, duration: 260 }, 920)
    .add(material, { opacity: 0.62 - index * 0.08, duration: 520 }, 6250);
});

exhaustWaves.forEach((wave, index) => {
  story
    .add(wave, {
      scale: 1.4 + index * 0.38,
      opacity: [0, 0.5 - index * 0.06, 0],
      duration: 760,
      ease: 'out(4)',
    }, 6260 + index * 76)
    .add(wave, { scale: 0.1, opacity: 0, duration: 10 }, 7140);
});

const chapterElements = [...document.querySelectorAll<HTMLElement>('.chapter')];
const indexLinks = [...document.querySelectorAll<HTMLAnchorElement>('.story-index a')];
const scrollProgressBar = document.querySelector<HTMLElement>('.story-index__track span');
const scrollStatusBar = document.querySelector<HTMLElement>('.scroll-status div i');
const scrollStatusChapter = document.querySelector<HTMLElement>('.scroll-status__chapter');
const scrollStatusPercent = document.querySelector<HTMLElement>('.scroll-status__percent');
const phaseReadout = document.querySelector<HTMLElement>('.phase-readout');
const vectorPath = document.querySelector<SVGPathElement>('.vector-scope__path');
const vectorProbe = document.querySelector<SVGCircleElement>('.vector-scope__probe');
const vectorReadout = document.querySelector<HTMLElement>('.vector-readout');
const coordinatesNorth = document.querySelector<HTMLElement>('.coordinates--north');
const coordinatesSouth = document.querySelector<HTMLElement>('.coordinates--south');
const eventLogLabel = document.querySelector<HTMLElement>('.event-log span');
const eventLogValue = document.querySelector<HTMLElement>('.event-log b');
const chapterFlash = document.querySelector<HTMLElement>('.chapter-flash');
const vectorLength = vectorPath?.getTotalLength() ?? 1;

if (vectorPath) {
  vectorPath.style.strokeDasharray = `${vectorLength}`;
  vectorPath.style.strokeDashoffset = `${vectorLength}`;
}

let targetProgress = 0;
let currentProgress = 0;
let activeChapter = -1;
let thrustLevel = 73;
let probeEnergy = 0.5;

const eventMessages = [
  ['EVENT / PREFLIGHT', '0x7A-00 / AIRFRAME ONLINE'],
  ['EVENT / CALIBRATE', '0x14-C2 / SURFACES ALIGNED'],
  ['EVENT / VECTOR', '0x84-FF / FLIGHT PATH LOCKED'],
  ['EVENT / TUNE', '0x6B-47 / MANUAL CONTROL'],
  ['EVENT / MODULES', '0x5D-84 / AIRFRAME UNBOUND'],
  ['EVENT / LAUNCH', '0xE8-FF / ASSEMBLY COMPLETE'],
];

function getScrollProgress() {
  const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  return THREE.MathUtils.clamp(window.scrollY / scrollRange, 0, 1);
}

function getActiveChapter() {
  const viewportPoint = window.scrollY + window.innerHeight * 0.5;
  let result = 0;
  chapterElements.forEach((chapter, index) => {
    if (viewportPoint >= chapter.offsetTop) {
      result = index;
    }
  });
  return result;
}

function updateChapter() {
  const nextChapter = getActiveChapter();
  if (nextChapter === activeChapter) return;
  activeChapter = nextChapter;
  document.body.dataset.chapter = String(activeChapter);
  indexLinks.forEach((link, index) => link.classList.toggle('is-active', index === activeChapter));
  chapterElements.forEach((chapter, index) => chapter.classList.toggle('is-active', index === activeChapter));
  if (scrollStatusChapter) scrollStatusChapter.textContent = String(activeChapter).padStart(2, '0');
  if (eventLogLabel) eventLogLabel.textContent = eventMessages[activeChapter][0];
  if (eventLogValue) eventLogValue.textContent = eventMessages[activeChapter][1];
  if (!reducedMotion) {
    const activeElements = chapterElements[activeChapter].querySelectorAll('.eyebrow, h1, h2, .hero-copy__lead, .chapter-copy > p:not(.eyebrow), .data-row, .vector-scope, .module-ledger, .hero-actions');
    animate(activeElements, {
      opacity: [0, 1],
      y: [24, 0],
      duration: 560,
      delay: stagger(65),
      ease: 'out(4)',
    });
    if (chapterFlash) {
      animate(chapterFlash, {
        opacity: [0, 0.16, 0],
        scaleX: [0, 1],
        duration: 520,
        ease: 'out(4)',
      });
    }
  }
}

function updateVectorScope() {
  if (!vectorPath || !vectorProbe || !vectorReadout) return;
  const section = chapterElements[2];
  const raw = (window.scrollY + window.innerHeight * 0.6 - section.offsetTop) / section.offsetHeight;
  const progress = THREE.MathUtils.clamp(raw, 0, 1);
  vectorPath.style.strokeDashoffset = `${vectorLength * (1 - progress)}`;
  const point = vectorPath.getPointAtLength(vectorLength * progress);
  vectorProbe.setAttribute('cx', point.x.toFixed(2));
  vectorProbe.setAttribute('cy', point.y.toFixed(2));
  vectorReadout.textContent = (vectorLength * progress).toFixed(1).padStart(5, '0');
}

function onScroll() {
  targetProgress = getScrollProgress();
  updateChapter();
  updateVectorScope();
}

window.addEventListener('scroll', onScroll, { passive: true });

document.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
});

const carrierInput = document.querySelector<HTMLInputElement>('.carrier-control input');
const carrierOutput = document.querySelector<HTMLOutputElement>('.carrier-control output');

carrierInput?.addEventListener('input', () => {
  thrustLevel = Number(carrierInput.value);
  if (carrierOutput) carrierOutput.value = String(thrustLevel);
  animate(coreMaterial, {
    emissiveIntensity: 0.18 + (thrustLevel / 96) * 0.85,
    duration: 240,
    ease: 'out(3)',
  });
});

const probeState = document.querySelector<HTMLElement>('.probe-state');
const draggableProbe = createDraggable('.probe-handle', {
  container: '.probe-field',
  containerPadding: 10,
  releaseEase: 'out(4)',
  onUpdate: (self: { progressX: number; progressY: number }) => {
    const x = Math.round(self.progressX * 100);
    const y = Math.round((1 - self.progressY) * 100);
    probeEnergy = (self.progressX + 1 - self.progressY) * 0.5;
    if (probeState) probeState.textContent = `X ${String(x).padStart(2, '0')} / Y ${String(y).padStart(2, '0')}`;
    mintLight.position.x = -5 + self.progressX * 10;
    mintLight.position.y = -3 + (1 - self.progressY) * 6;
  },
});
draggableProbe.progressX = 0.5;
draggableProbe.progressY = 0.5;

function resize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, width < 760 ? 1.25 : 1.6));
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

window.addEventListener('resize', resize);

const clock = new THREE.Clock();

function render() {
  const elapsed = clock.getElapsedTime();
  currentProgress = reducedMotion
    ? targetProgress
    : THREE.MathUtils.lerp(currentProgress, targetProgress, 0.075);

  story.seek(currentProgress * story.duration);
  const lightThemeProgress = engineeringTheme.light;
  const blueprintProgress = engineeringTheme.blueprint;
  const cameraScale = window.innerWidth < 760 ? 1.48 : 1;
  cameraCurve.getPointAt(THREE.MathUtils.clamp(cameraRail.progress, 0, 1), cameraRailPosition);
  targetCurve.getPointAt(THREE.MathUtils.clamp(cameraRail.progress, 0, 1), cameraRailTarget);
  camera.position.copy(cameraRailPosition).multiplyScalar(cameraScale);
  camera.up.set(0, 1, 0);
  camera.lookAt(cameraRailTarget);
  const nextFov = cameraState.fov + (window.innerWidth < 760 ? 7 : 0);
  if (Math.abs(camera.fov - nextFov) > 0.01) {
    camera.fov = nextFov;
    camera.updateProjectionMatrix();
  }
  dynamicDarkBackground.setRGB(
    backgroundState.r / 255,
    backgroundState.g / 255,
    backgroundState.b / 255,
  );
  engineeringBackground.setRGB(
    engineeringPaperState.r / 255,
    engineeringPaperState.g / 255,
    engineeringPaperState.b / 255,
  );
  themeColor.lerpColors(dynamicDarkBackground, engineeringBackground, lightThemeProgress);
  (scene.background as THREE.Color).copy(themeColor);
  scene.fog?.color.copy(themeColor);
  fuselageMaterial.color.lerpColors(fuselageDark, fuselageLight, lightThemeProgress);
  darkMaterial.color.lerpColors(darkSurfaceDark, darkSurfaceLight, lightThemeProgress);
  panelMaterial.color.lerpColors(panelDark, panelLight, lightThemeProgress);
  outlineMaterial.color.lerpColors(outlineDark, outlineLight, lightThemeProgress);
  const solidOpacity = THREE.MathUtils.lerp(1, 0.018, blueprintProgress);
  scanPlane.position.x = scanState.x;
  scanLight.position.set(scanState.x, 0.4, 0);
  scanLight.intensity = scanState.energy * 22;
  scanMaterial.opacity = scanState.energy * 0.026;
  scanEdgeMaterial.opacity = scanState.energy * 0.78;
  scanClipPlane.constant = scanState.x;
  const activeClipping = scanState.energy > 0.015 ? [scanClipPlane] : [];
  [
    fuselageMaterial,
    darkMaterial,
    panelMaterial,
    canopyMaterial,
    coreMaterial,
    mintMaterial,
    coralMaterial,
  ].forEach((material) => {
    material.clippingPlanes = activeClipping;
  });
  fuselageMaterial.opacity = solidOpacity;
  darkMaterial.opacity = solidOpacity;
  panelMaterial.opacity = solidOpacity;
  canopyMaterial.opacity = THREE.MathUtils.lerp(0.82, 0.012, blueprintProgress);
  coreMaterial.opacity = THREE.MathUtils.lerp(1, 0.025, blueprintProgress);
  mintMaterial.opacity = THREE.MathUtils.lerp(1, 0.02, blueprintProgress);
  coralMaterial.opacity = THREE.MathUtils.lerp(1, 0.02, blueprintProgress);
  const depthWrite = blueprintProgress < 0.42;
  fuselageMaterial.depthWrite = depthWrite;
  darkMaterial.depthWrite = depthWrite;
  panelMaterial.depthWrite = depthWrite;
  canopyMaterial.depthWrite = depthWrite;
  coreMaterial.depthWrite = depthWrite;
  blueprintMaterial.opacity = blueprintProgress * 0.92;
  blueprintGhostMaterial.opacity = blueprintProgress * 0.34;
  blueprintAccentMaterial.opacity = blueprintProgress * 0.78;
  outlineMaterial.opacity = THREE.MathUtils.lerp(0.62, 0.08, blueprintProgress);
  document.body.classList.toggle('is-engineering', lightThemeProgress > 0.34);
  document.body.classList.toggle('is-exploded', blueprintProgress > 0.82 && storyClock.progress > 0.22 && storyClock.progress < 0.57);
  document.body.classList.toggle('is-scanning', scanState.energy > 0.05);
  airflowMaterial.color.lerpColors(foregroundColor, outlineLight, lightThemeProgress);
  airflowMaterial.opacity = THREE.MathUtils.lerp(0.16, 0.025, lightThemeProgress);
  coreMaterial.emissiveIntensity += (0.18 + probeEnergy * 0.34 - coreMaterial.emissiveIntensity) * 0.04;
  ambient.intensity = THREE.MathUtils.lerp(1.5, 2.1, lightThemeProgress);
  keyLight.intensity = THREE.MathUtils.lerp(5.8, 1.2, lightThemeProgress);
  mintLight.intensity = (16 + Math.sin(elapsed * 1.2) * 2) * (1 - lightThemeProgress);
  coralLight.intensity = (13 + Math.sin(elapsed * 1.6) * 3 + thrustLevel * 0.03) * (1 - lightThemeProgress);
  engineeringGears.forEach((gear, index) => {
    gear.rotation.x = elapsed * (index % 2 === 0 ? 0.18 : -0.14) * blueprintProgress;
  });
  flightEffects.rotation.z = Math.sin(elapsed * 0.4) * 0.012;
  airflow.position.x = ((elapsed * 1.4) % 8) - 4;

  const percent = Math.round(currentProgress * 100);
  if (scrollProgressBar) scrollProgressBar.style.transform = `scaleY(${currentProgress})`;
  if (scrollStatusBar) scrollStatusBar.style.transform = `scaleX(${currentProgress})`;
  if (scrollStatusPercent) scrollStatusPercent.textContent = `${String(percent).padStart(3, '0')}%`;
  if (phaseReadout) phaseReadout.textContent = (currentProgress * 6.283).toFixed(3);
  if (coordinatesNorth) coordinatesNorth.textContent = `MACH ${(0.72 + currentProgress * 0.94).toFixed(2)} / AOA ${(4.8 + Math.sin(currentProgress * Math.PI) * 7.4).toFixed(1)}`;
  if (coordinatesSouth) coordinatesSouth.textContent = `THRUST ${Math.round(thrustLevel)}% / VECTOR ${Math.round(probeEnergy * 100)}`;

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

resize();
onScroll();
render();

window.addEventListener('load', () => {
  window.setTimeout(() => {
    document.body.classList.add('is-ready');
    animate('.boot-screen__line span', { scaleX: [0, 1], duration: 520, ease: 'out(4)' });
    animate('.boot-screen', { opacity: [1, 0], duration: 520, delay: 320, ease: 'inOut(3)' });
  }, 180);
});

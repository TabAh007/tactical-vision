import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { 
  RotateCw, Eye, Layers, Sparkles, Sliders, Info, 
  CheckCircle2, Cpu, Wrench, Shield, Compass, Maximize2 
} from 'lucide-react';

const products3D = [
  {
    id: "jelly-head",
    name: "JELLY HEAD™ MAXIMUM Choke Tube",
    category: "Precision CNC Ballistics",
    material: "17-4 PH Aerospace Stainless Steel",
    tolerance: "±0.0005\" CNC Boring",
    finish: "Black-T Multi-Layer Fluoropolymer",
    buildStory: "Engineered specifically for turkey hunters and tactical shotgunners requiring extreme pattern density at 40+ yards. We designed a multi-step constriction taper coupled with fluted gas discharge ports to vent expanding muzzle gasses and eliminate shot string elongation before the pellet cluster exits the barrel.",
    hotspots: [
      {
        id: "knurl",
        title: "Extended Knurled Grip Collar",
        position: [0, 1.8, 0],
        desc: "Precision diamond-knurled collar allowing tool-free field installation and removal even with freezing, wet hunting gloves.",
        engineeringNote: "Custom depth cut into 17-4 PH steel with anti-slip pitch."
      },
      {
        id: "ports",
        title: "Fluted Gas Dissipation Ports",
        position: [0, 0.4, 0.7],
        desc: "Angled gas relief vents that divert expanding propellant gasses backward and radially, reducing felt recoil by up to 20%.",
        engineeringNote: "CFD flow-simulated port geometry to prevent pellet disturbance."
      },
      {
        id: "constriction",
        title: "Proprietary Taper Constriction Core",
        position: [0, -0.8, 0],
        desc: "Gradual multi-angle reduction zone that gently compresses the shot wad without deforming individual pellets.",
        engineeringNote: "Achieves 20% denser pellet patterns at 40 yards over standard factory chokes."
      },
      {
        id: "threads",
        title: "Class 3A Precision Barrel Threads",
        position: [0, -1.8, 0],
        desc: "Machined barrel engagement threads matching Mossberg, Remington, and Benelli thread pitches with zero wobble.",
        engineeringNote: "Concentricity tolerance held within 0.0002\" TIR."
      }
    ]
  },
  {
    id: "rangefinder",
    name: "Simmons Volt 600 Optic Housing",
    category: "Opto-Mechanics & HUD",
    material: "PC/ABS Polycarbonate + Co-Molded TPE",
    tolerance: "±0.01mm Optical Centerline",
    finish: "Matte Anti-Reflective Tactical Slate",
    buildStory: "Designed for split-second distance calculation in dynamic field environments. Our team solved the challenge of packaging a high-frequency 905nm laser transmitter, optical receiver, LCD reticle beam-splitter, and 9V battery into an ultra-compact single-handed form factor with glove-friendly single-button actuation.",
    hotspots: [
      {
        id: "lens",
        title: "Dual Optical Barrel Array",
        position: [0, 0.4, 1.4],
        desc: "Co-axial alignment between the viewing objective lens and laser rangefinder emitter barrel.",
        engineeringNote: "Shock-mounted optical carriage with multi-coated glass elements."
      },
      {
        id: "grip",
        title: "Ergonomic Overmolded Ribbing",
        position: [-0.6, -0.2, 0],
        desc: "Co-molded thermoplastic elastomer textured ridges designed to fit the natural contours of the human hand.",
        engineeringNote: "Dual-shot injection tooling eliminating glue lines or separation."
      },
      {
        id: "button",
        title: "Tactile Single-Button Fire Port",
        position: [0, 1.1, 0.3],
        desc: "Instant-response microswitch actuator sealed against moisture and debris.",
        engineeringNote: "Rated for 100,000+ mechanical actuations in sub-zero temps."
      },
      {
        id: "eyepiece",
        title: "High-Relief Optical Eyepiece",
        position: [0, 0.4, -1.4],
        desc: "Fast-focus diopter adjustment collar providing crisp LCD reticle readout in bright sun or twilight.",
        engineeringNote: "Anti-fog nitrogen purged optical chamber."
      }
    ]
  },
  {
    id: "trail-cam",
    name: "Bushnell Trophy Cam Rugged Enclosure",
    category: "IP67 Rugged Enclosures",
    material: "High-Impact Polycarbonate + Camo Mold",
    tolerance: "IP67 Ingress Protection Sealed",
    finish: "UV-Resistant Non-Reflective Camo",
    buildStory: "Trail cameras must survive scorching summers, sub-zero snowstorms, and curious wildlife for 12 months on a single battery set. We engineered a dual-stage clamshell enclosure with a continuous compression silicone gasket, quick-clamping latches, and an integrated Fresnel PIR sensor hood.",
    hotspots: [
      {
        id: "sensor",
        title: "Multi-Zone Fresnel PIR Hood",
        position: [0, -0.2, 1.1],
        desc: "Precision curved Fresnel optical lens focusing ambient thermal heat signatures directly onto the PIR detector for 0.2s trigger response.",
        engineeringNote: "Custom optical focal array eliminating false triggers from blowing leaves."
      },
      {
        id: "ir-led",
        title: "Blackout 940nm No-Glow IR Array",
        position: [0, 0.8, 1.1],
        desc: "Invisible infrared illumination bank providing 80-foot night vision without startling game or exposing scouting location.",
        engineeringNote: "Integrated thermal heatsink dissipation layer."
      },
      {
        id: "gasket",
        title: "Continuous Silicone O-Ring Channel",
        position: [0.9, 0, 0],
        desc: "Deep tongue-and-groove perimeter channel maintaining watertight seal when latches are closed.",
        engineeringNote: "Certified for IP67 submersible water resistance."
      },
      {
        id: "latch",
        title: "High-Torque Cam Clamping Latches",
        position: [-0.9, 0, 0.5],
        desc: "Over-center mechanical cam latches that apply uniform 25 lbs compression across the gasket.",
        engineeringNote: "Reinforced glass-filled nylon pivot pins."
      }
    ]
  }
];

export default function CadViewer3D() {
  const containerRef = useRef(null);
  const [activeProduct, setActiveProduct] = useState(products3D[0]);
  const [viewMode, setViewMode] = useState('solid'); // 'solid' | 'wireframe' | 'xray' | 'exploded'
  const [explodedVal, setExplodedVal] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [selectedHotspot, setSelectedHotspot] = useState(products3D[0].hotspots[0]);
  const [canvasLoaded, setCanvasLoaded] = useState(false);

  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const meshGroupRef = useRef(null);
  const partsRef = useRef([]);

  // Setup Three.js Scene
  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(4, 3, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    // Clean container before appending
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 12;
    controls.minDistance = 2;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 1.5;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00F59B, 2.0);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x00D2FF, 1.5);
    dirLight2.position.set(-5, -3, -5);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xffffff, 1.5, 20);
    pointLight.position.set(0, 4, 3);
    scene.add(pointLight);

    // Subtle CAD Floor Grid
    const grid = new THREE.GridHelper(10, 20, 0x00F59B, 0x1E293B);
    grid.position.y = -2.2;
    scene.add(grid);

    // Group for product
    const meshGroup = new THREE.Group();
    meshGroupRef.current = meshGroup;
    scene.add(meshGroup);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
    setCanvasLoaded(true);

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current) return;
      const newW = containerRef.current.clientWidth;
      const newH = containerRef.current.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.domElement.remove();
      }
      renderer.dispose();
    };
  }, []);

  // Update Auto-Rotate
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = autoRotate;
    }
  }, [autoRotate]);

  // Build Procedural 3D Mesh when activeProduct or viewMode changes
  useEffect(() => {
    if (!meshGroupRef.current) return;

    const group = meshGroupRef.current;
    // Clear old children
    while (group.children.length > 0) {
      group.remove(group.children[0]);
    }
    partsRef.current = [];

    // Helper material generator
    const getMaterial = (color = 0x222834, roughness = 0.3, metalness = 0.8) => {
      if (viewMode === 'wireframe') {
        return new THREE.MeshBasicMaterial({
          color: 0x00F59B,
          wireframe: true
        });
      }
      if (viewMode === 'xray') {
        return new THREE.MeshPhysicalMaterial({
          color: 0x00D2FF,
          transparent: true,
          opacity: 0.35,
          roughness: 0.1,
          transmission: 0.8,
          wireframe: false,
          emissive: 0x002244
        });
      }
      // Solid Photorealistic Tactical PBR
      return new THREE.MeshStandardMaterial({
        color: color,
        roughness: roughness,
        metalness: metalness
      });
    };

    if (activeProduct.id === 'jelly-head') {
      // 1. Main Choke Barrel
      const barrelGeo = new THREE.CylinderGeometry(0.7, 0.7, 3.2, 32);
      const barrelMat = getMaterial(0x1a202c, 0.25, 0.85);
      const barrel = new THREE.Mesh(barrelGeo, barrelMat);
      barrel.userData = { originY: 0, explodeY: 0 };
      group.add(barrel);
      partsRef.current.push(barrel);

      // 2. Knurled Extended Collar
      const collarGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.8, 32);
      const collarMat = getMaterial(0x0f172a, 0.4, 0.9);
      const collar = new THREE.Mesh(collarGeo, collarMat);
      collar.position.y = 1.4;
      collar.userData = { originY: 1.4, explodeY: 1.5 };
      group.add(collar);
      partsRef.current.push(collar);

      // 3. Thread Section
      const threadGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.9, 32);
      const threadMat = getMaterial(0x334155, 0.15, 0.95);
      const thread = new THREE.Mesh(threadGeo, threadMat);
      thread.position.y = -1.6;
      thread.userData = { originY: -1.6, explodeY: -1.5 };
      group.add(thread);
      partsRef.current.push(thread);

      // 4. Accent Ring / Crown
      const crownGeo = new THREE.TorusGeometry(0.75, 0.08, 16, 32);
      const crownMat = new THREE.MeshStandardMaterial({ color: 0x00F59B, metalness: 0.9, roughness: 0.2 });
      const crown = new THREE.Mesh(crownGeo, crownMat);
      crown.rotation.x = Math.PI / 2;
      crown.position.y = 1.85;
      crown.userData = { originY: 1.85, explodeY: 2.2 };
      group.add(crown);
      partsRef.current.push(crown);

      // 5. Gas Ports (Hollow Visual Rings)
      for (let i = 0; i < 6; i++) {
        const portGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.5, 8);
        const portMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const port = new THREE.Mesh(portGeo, portMat);
        port.rotation.z = Math.PI / 2;
        port.rotation.y = (i * Math.PI) / 3;
        port.position.y = 0.5;
        barrel.add(port);
      }

    } else if (activeProduct.id === 'rangefinder') {
      // 1. Main Body Housing
      const bodyGeo = new THREE.BoxGeometry(1.2, 2.2, 2.4);
      const bodyMat = getMaterial(0x161e2e, 0.35, 0.7);
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.userData = { originY: 0, explodeY: 0 };
      group.add(body);
      partsRef.current.push(body);

      // 2. Rubber Overmold Shell
      const rubberGeo = new THREE.BoxGeometry(1.26, 1.6, 1.4);
      const rubberMat = getMaterial(0x0a0e17, 0.8, 0.1);
      const rubber = new THREE.Mesh(rubberGeo, rubberMat);
      rubber.position.set(0, -0.2, 0);
      rubber.userData = { originY: -0.2, explodeY: -0.8 };
      group.add(rubber);
      partsRef.current.push(rubber);

      // 3. Objective Optics Barrel
      const objGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.8, 24);
      const objMat = getMaterial(0x00F59B, 0.1, 0.9);
      const objLens = new THREE.Mesh(objGeo, objMat);
      objLens.rotation.x = Math.PI / 2;
      objLens.position.set(0, 0.4, 1.4);
      objLens.userData = { originY: 0.4, explodeY: 1.2 };
      group.add(objLens);
      partsRef.current.push(objLens);

      // 4. Eyepiece Lens
      const eyeGeo = new THREE.CylinderGeometry(0.45, 0.45, 0.6, 24);
      const eyeMat = getMaterial(0x0f172a, 0.2, 0.8);
      const eyeLens = new THREE.Mesh(eyeGeo, eyeMat);
      eyeLens.rotation.x = Math.PI / 2;
      eyeLens.position.set(0, 0.4, -1.4);
      eyeLens.userData = { originY: 0.4, explodeY: -1.2 };
      group.add(eyeLens);
      partsRef.current.push(eyeLens);

      // 5. Fire Button
      const btnGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.15, 16);
      const btnMat = new THREE.MeshStandardMaterial({ color: 0x00F59B, roughness: 0.2 });
      const btn = new THREE.Mesh(btnGeo, btnMat);
      btn.position.set(0, 1.15, 0.3);
      btn.userData = { originY: 1.15, explodeY: 1.8 };
      group.add(btn);
      partsRef.current.push(btn);

    } else if (activeProduct.id === 'trail-cam') {
      // 1. Main Rugged Enclosure
      const camBodyGeo = new THREE.BoxGeometry(1.8, 2.4, 1.2);
      const camBodyMat = getMaterial(0x1b2432, 0.4, 0.6);
      const camBody = new THREE.Mesh(camBodyGeo, camBodyMat);
      camBody.userData = { originY: 0, explodeY: 0 };
      group.add(camBody);
      partsRef.current.push(camBody);

      // 2. Front Faceplate / Hood
      const faceGeo = new THREE.BoxGeometry(1.7, 2.3, 0.3);
      const faceMat = getMaterial(0x0b0f19, 0.3, 0.8);
      const face = new THREE.Mesh(faceGeo, faceMat);
      face.position.set(0, 0, 0.7);
      face.userData = { originY: 0, explodeY: 1.4 };
      group.add(face);
      partsRef.current.push(face);

      // 3. Blackout IR Flash Array
      const irGeo = new THREE.PlaneGeometry(1.2, 0.7);
      const irMat = new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.1, metalness: 0.95 });
      const ir = new THREE.Mesh(irGeo, irMat);
      ir.position.set(0, 0.6, 0.86);
      face.add(ir);

      // 4. PIR Sensor Fresnel Lens
      const pirGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 16);
      const pirMat = new THREE.MeshStandardMaterial({ color: 0x00D2FF, roughness: 0.2, transmission: 0.6, transparent: true, opacity: 0.8 });
      const pir = new THREE.Mesh(pirGeo, pirMat);
      pir.rotation.x = Math.PI / 2;
      pir.position.set(0, -0.3, 0.86);
      face.add(pir);

      // 5. Heavy-Duty Side Latches
      const latchGeo = new THREE.BoxGeometry(0.2, 0.8, 0.3);
      const latchMat = new THREE.MeshStandardMaterial({ color: 0x00F59B, metalness: 0.8 });
      const latchL = new THREE.Mesh(latchGeo, latchMat);
      latchL.position.set(-0.95, 0, 0.3);
      latchL.userData = { originY: 0, explodeY: -1.0 };
      group.add(latchL);
      partsRef.current.push(latchL);

      const latchR = new THREE.Mesh(latchGeo, latchMat);
      latchR.position.set(0.95, 0, 0.3);
      latchR.userData = { originY: 0, explodeY: -1.0 };
      group.add(latchR);
      partsRef.current.push(latchR);
    }

  }, [activeProduct, viewMode]);

  // Handle Exploded Slider Animation
  useEffect(() => {
    if (!partsRef.current) return;
    partsRef.current.forEach((mesh) => {
      if (mesh.userData && mesh.userData.explodeY !== undefined) {
        const targetY = mesh.userData.originY + (mesh.userData.explodeY - mesh.userData.originY) * explodedVal;
        mesh.position.y = targetY;
      }
    });
  }, [explodedVal]);

  return (
    <section className="py-24 bg-[#05070C] relative border-t border-white/5 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00F59B]/5 blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="tech-badge mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D Engineering Lab</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Inspect Our CAD Models in <span className="text-gradient-accent">Full 3D</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Drag to rotate 360°, inspect wireframe geometry, trigger exploded part assemblies, and click on technical hotspots to see how we engineered every millimeter.
          </p>
        </div>

        {/* Product Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {products3D.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setActiveProduct(p);
                setSelectedHotspot(p.hotspots[0]);
                setExplodedVal(0);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeProduct.id === p.id
                  ? 'bg-[#00F59B] text-black shadow-lg shadow-[#00F59B]/25 scale-102'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>{p.name.split(' ')[0]} {p.name.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        {/* Main 3D Viewport & Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left / Center: Interactive 3D Canvas Box (8 Cols) */}
          <div className="lg:col-span-8 glass-panel rounded-2xl overflow-hidden border border-white/15 relative min-h-[480px] sm:min-h-[560px] flex flex-col justify-between bg-black/60 shadow-2xl">
            
            {/* Top HUD Bar */}
            <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#070A10]/90 backdrop-blur-md z-20">
              <div>
                <span className="text-[10px] font-mono text-[#00F59B] uppercase tracking-widest block">
                  3D CAD Viewport • WebGL Real-Time
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {activeProduct.name}
                </h3>
              </div>

              {/* View Mode Switcher Pills */}
              <div className="flex items-center gap-1.5 p-1 rounded-lg bg-black/70 border border-white/10">
                {[
                  { id: 'solid', label: 'Solid Carbon', icon: Eye },
                  { id: 'wireframe', label: 'Wireframe', icon: Layers },
                  { id: 'xray', label: 'X-Ray HUD', icon: Sparkles }
                ].map((mode) => {
                  const Icon = mode.icon;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => setViewMode(mode.id)}
                      className={`px-3 py-1.5 rounded-md text-[11px] font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                        viewMode === mode.id
                          ? 'bg-[#00F59B] text-black font-bold shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{mode.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3D Canvas Container */}
            <div 
              ref={containerRef} 
              className="w-full flex-1 min-h-[380px] sm:min-h-[420px] cursor-grab active:cursor-grabbing relative"
            >
              {/* Overlay Guidance Pill */}
              <div className="absolute top-4 left-4 pointer-events-none z-10 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
                <RotateCw className="w-3 h-3 text-[#00F59B] animate-spin" />
                <span>Drag to rotate • Scroll to zoom</span>
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-[#070A10]/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 z-20">
              
              {/* Exploded View Slider */}
              <div className="flex items-center gap-3 flex-1 min-w-[200px] max-w-sm">
                <Sliders className="w-4 h-4 text-[#00F59B] shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                    <span>Assembly View</span>
                    <span className="text-[#00F59B]">{Math.round(explodedVal * 100)}% Exploded</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={explodedVal}
                    onChange={(e) => setExplodedVal(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00F59B]"
                  />
                </div>
              </div>

              {/* Auto-Rotate Switch */}
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-2 border transition-all cursor-pointer ${
                  autoRotate 
                    ? 'bg-[#00F59B]/10 border-[#00F59B]/40 text-[#00F59B]' 
                    : 'bg-white/5 border-white/10 text-slate-400'
                }`}
              >
                <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
                <span>Auto-Spin: {autoRotate ? 'ON' : 'OFF'}</span>
              </button>

            </div>

          </div>

          {/* Right: Engineering Build Narrative & Hotspot Breakdown (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            
            {/* Engineering Specifications Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/15 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#00F59B] font-bold flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5" />
                  Engineering Specs
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                  {activeProduct.category}
                </span>
              </div>

              <div className="space-y-2.5 text-xs font-mono divide-y divide-white/5">
                <div className="pt-2 first:pt-0 flex justify-between">
                  <span className="text-slate-400">Target Material:</span>
                  <span className="text-slate-200 font-bold">{activeProduct.material}</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-400">Tolerance:</span>
                  <span className="text-emerald-400 font-bold">{activeProduct.tolerance}</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-400">Surface Finish:</span>
                  <span className="text-slate-200">{activeProduct.finish}</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-white/5">
                {activeProduct.buildStory}
              </p>
            </div>

            {/* Hotspots & How We Built It */}
            <div className="glass-panel p-6 rounded-2xl border border-white/15 flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#00F59B]" />
                  Component Teardown Hotspots
                </h4>
                <span className="text-[10px] font-mono text-slate-400">
                  {activeProduct.hotspots.length} Modules
                </span>
              </div>

              {/* Hotspot Selector Pills */}
              <div className="grid grid-cols-2 gap-2">
                {activeProduct.hotspots.map((hs) => (
                  <button
                    key={hs.id}
                    onClick={() => setSelectedHotspot(hs)}
                    className={`p-2.5 rounded-lg border text-left text-xs font-mono transition-all cursor-pointer ${
                      selectedHotspot.id === hs.id
                        ? 'border-[#00F59B] bg-[#00F59B]/10 text-white font-bold shadow'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <div className="text-[11px] text-[#00F59B] mb-0.5">#{hs.id}</div>
                    <div className="truncate">{hs.title.split(' ')[0]} {hs.title.split(' ')[1]}</div>
                  </button>
                ))}
              </div>

              {/* Active Hotspot Deep Dive */}
              {selectedHotspot && (
                <div className="p-4 rounded-xl bg-black/40 border border-[#00F59B]/30 space-y-2 mt-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#00F59B]" />
                    <span>{selectedHotspot.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedHotspot.desc}
                  </p>
                  <div className="text-[11px] font-mono text-emerald-400 pt-2 border-t border-white/10 flex items-start gap-1">
                    <span>💡 <strong>Engineering Note:</strong> {selectedHotspot.engineeringNote}</span>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

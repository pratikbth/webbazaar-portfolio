import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeArtifacts() {
  const mountRef = useRef(null);
  const [activeArtifact, setActiveArtifact] = useState('hypercube');
  const [speedMultiplier, setSpeedMultiplier] = useState(1.0);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Dimensions
    const width = mount.clientWidth || 400;
    const height = mount.clientHeight || 400;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.innerHTML = '';
    mount.appendChild(renderer.domElement);

    // Group to hold our current artifact mesh
    const artifactGroup = new THREE.Group();
    scene.add(artifactGroup);

    // Build geometry options
    const geometries = {
      hypercube: () => {
        const geom = new THREE.BoxGeometry(2, 2, 2);
        // Outer wireframe
        const wireframeGeom = new THREE.EdgesGeometry(geom);
        const wireMaterial = new THREE.LineBasicMaterial({ color: 0x00f2fe, linewidth: 2 });
        const wireframe = new THREE.LineSegments(wireframeGeom, wireMaterial);
        
        // Inner glowing core
        const coreGeom = new THREE.OctahedronGeometry(0.8, 0);
        const coreMat = new THREE.MeshPhongMaterial({
          color: 0x743ad5,
          emissive: 0x743ad5,
          emissiveIntensity: 0.8,
          shininess: 100,
          flatShading: true
        });
        const core = new THREE.Mesh(coreGeom, coreMat);
        
        const group = new THREE.Group();
        group.add(wireframe);
        group.add(core);
        return group;
      },
      nexus: () => {
        const geom = new THREE.IcosahedronGeometry(1.6, 1);
        const mat = new THREE.MeshStandardMaterial({
          color: 0x743ad5,
          wireframe: true,
          roughness: 0.1,
          metalness: 0.9
        });
        const mesh = new THREE.Mesh(geom, mat);

        // Core light sphere
        const coreGeom = new THREE.SphereGeometry(0.5, 16, 16);
        const coreMat = new THREE.MeshBasicMaterial({ color: 0x00f2fe });
        const core = new THREE.Mesh(coreGeom, coreMat);

        const group = new THREE.Group();
        group.add(mesh);
        group.add(core);
        return group;
      },
      prism: () => {
        const geom = new THREE.ConeGeometry(1.4, 2.5, 4);
        const wireframeGeom = new THREE.EdgesGeometry(geom);
        const wireMaterial = new THREE.LineBasicMaterial({ color: 0x743ad5, linewidth: 2 });
        const wireframe = new THREE.LineSegments(wireframeGeom, wireMaterial);

        // Glassy inner octahedron
        const coreGeom = new THREE.OctahedronGeometry(0.7, 0);
        const coreMat = new THREE.MeshPhysicalMaterial({
          color: 0x00f2fe,
          transmission: 0.9,
          opacity: 1,
          transparent: true,
          roughness: 0,
          metalness: 0
        });
        const core = new THREE.Mesh(coreGeom, coreMat);
        core.position.y = -0.3;

        const group = new THREE.Group();
        group.add(wireframe);
        group.add(core);
        return group;
      }
    };

    // Instantiate active artifact
    let currentObject = geometries[activeArtifact]();
    artifactGroup.add(currentObject);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f2fe, 2, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x743ad5, 2, 50);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Interactions: dragging to rotate
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      };

      artifactGroup.rotation.y += deltaMove.x * 0.007;
      artifactGroup.rotation.x += deltaMove.y * 0.007;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    mount.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      // Rotation logic
      if (!isDragging) {
        artifactGroup.rotation.y += 0.01 * speedMultiplier;
        artifactGroup.rotation.x += 0.005 * speedMultiplier;
      }

      // Pulse inner core slightly
      const core = currentObject.children[1];
      if (core) {
        const scale = 1.0 + Math.sin(Date.now() * 0.004) * 0.08;
        core.scale.set(scale, scale, scale);
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (mount) {
        mount.removeEventListener('mousedown', handleMouseDown);
        mount.innerHTML = '';
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [activeArtifact, speedMultiplier]);

  return (
    <div className="flex flex-col items-center w-full h-full relative">
      {/* 3D Render Viewport */}
      <div 
        ref={mountRef} 
        className="w-full h-[360px] cursor-grab active:cursor-grabbing relative z-10"
      />

      {/* Control Overlays */}
      <div className="absolute top-4 left-4 z-20 font-mono text-[10px] text-slate-400 bg-slate-950/70 border border-white/5 p-3 rounded-lg backdrop-blur-md space-y-1">
        <div>SYSTEM: NEO-BAZAAR LAB</div>
        <div>INTEGRITY: <span className="text-portfolio">99.82%</span></div>
        <div>RENDER_MODE: WEBGL3D</div>
        <div>STABILITY: RUNNING</div>
      </div>

      <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-1.5 font-mono text-[10px] text-slate-400 bg-slate-950/70 border border-white/5 p-2 rounded-lg backdrop-blur-md">
        <label className="text-slate-500">SPIN_RATE: {(speedMultiplier * 100).toFixed(0)}%</label>
        <input 
          type="range" 
          min="0.1" 
          max="3.0" 
          step="0.1"
          value={speedMultiplier} 
          onChange={(e) => setSpeedMultiplier(parseFloat(e.target.value))}
          className="w-20 accent-portfolio cursor-pointer h-1 rounded-lg bg-slate-800"
        />
      </div>

      {/* Interactive Controls */}
      <div className="mt-4 flex gap-3 relative z-20 pb-4">
        {[
          { id: 'hypercube', label: 'HYPERCUBE' },
          { id: 'nexus', label: 'NEXUS_NODE' },
          { id: 'prism', label: 'SPECTRUM_CONE' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveArtifact(item.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-300 ${
              activeArtifact === item.id 
                ? 'bg-portfolio/15 text-portfolio border-portfolio shadow-lg shadow-portfolio/10' 
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

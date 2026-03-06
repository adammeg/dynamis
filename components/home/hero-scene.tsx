"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050816, 0.06);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 1.2, 9);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ambient = new THREE.AmbientLight(0x9dd7ff, 0.7);
    const directional = new THREE.DirectionalLight(0x5cc7ff, 1.4);
    directional.position.set(-4, 6, 4);
    const point = new THREE.PointLight(0xff78f2, 1.8, 20, 2);
    point.position.set(3, 2, 4);
    scene.add(ambient, directional, point);

    const planeGeometry = new THREE.PlaneGeometry(18, 12, 140, 100);
    const planeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x52c5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
      roughness: 0.35,
      metalness: 0.75,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -1.18;
    plane.position.set(0.4, -0.65, -1.8);
    group.add(plane);

    const sphere = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.15, 1),
      new THREE.MeshStandardMaterial({
        color: 0x8f7cff,
        emissive: 0x244cff,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.42,
        wireframe: true,
      }),
    );
    sphere.position.set(-2.2, 0.7, 1.2);
    group.add(sphere);

    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(0.82, 32, 32),
      new THREE.MeshPhysicalMaterial({
        color: 0x73f1ff,
        emissive: 0x2fd0ff,
        emissiveIntensity: 1,
        transparent: true,
        opacity: 0.82,
        roughness: 0.15,
        transmission: 0.45,
      }),
    );
    orb.position.set(2.7, -0.3, 1.4);
    group.add(orb);

    const particlesCount = 1200;
    const particlePositions = new Float32Array(particlesCount * 3);

    for (let index = 0; index < particlesCount; index += 1) {
      const stride = index * 3;
      particlePositions[stride] = (Math.random() - 0.5) * 18;
      particlePositions[stride + 1] = (Math.random() - 0.3) * 10;
      particlePositions[stride + 2] = (Math.random() - 0.5) * 10;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3),
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x9fe2ff,
      size: 0.038,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const pointer = { x: 0, y: 0 };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.y = -(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
    };

    container.addEventListener("pointermove", handlePointerMove);

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      camera.aspect = clientWidth / Math.max(clientHeight, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight, false);
    };

    resize();
    window.addEventListener("resize", resize);

    const clock = new THREE.Clock();
    const planePositions = planeGeometry.attributes.position as THREE.BufferAttribute;

    const renderFrame = () => {
      const elapsed = clock.getElapsedTime();

      for (let index = 0; index < planePositions.count; index += 1) {
        const x = planePositions.getX(index);
        const y = planePositions.getY(index);
        const waveA = Math.sin(x * 0.7 + elapsed * 1.6) * 0.28;
        const waveB = Math.cos(y * 0.95 + elapsed * 1.1) * 0.32;
        planePositions.setZ(index, waveA + waveB);
      }

      planePositions.needsUpdate = true;
      planeGeometry.computeVertexNormals();

      group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, pointer.x * 0.16, 0.04);
      group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, pointer.y * 0.08, 0.04);
      group.position.x = THREE.MathUtils.lerp(group.position.x, pointer.x * 0.28, 0.025);
      group.position.y = THREE.MathUtils.lerp(group.position.y, pointer.y * 0.18, 0.025);

      plane.rotation.z = elapsed * 0.04;
      sphere.rotation.x = elapsed * 0.45;
      sphere.rotation.y = elapsed * 0.3;
      orb.position.y = Math.sin(elapsed * 1.2) * 0.4 - 0.2;
      particles.rotation.y = elapsed * 0.04;
      particles.rotation.x = Math.sin(elapsed * 0.12) * 0.08;

      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(renderFrame);

    return () => {
      renderer.setAnimationLoop(null);
      window.removeEventListener("resize", resize);
      container.removeEventListener("pointermove", handlePointerMove);
      planeGeometry.dispose();
      planeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      sphere.geometry.dispose();
      (sphere.material as THREE.Material).dispose();
      orb.geometry.dispose();
      (orb.material as THREE.Material).dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(87,199,255,0.14),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(117,76,255,0.16),_transparent_30%)]"
    />
  );
}

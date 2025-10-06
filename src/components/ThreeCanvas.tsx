import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function ThreeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('Initializing Three.js canvas');
    
    // ===== CONFIGURATION =====
    const CONFIG = {
      // === SCENE ===
      backgroundColor: 0xfafafa,        // Background color (hex)
      cameraFOV: 90,                    // Field of view (60-90)
      cameraDistance: 2,                // Camera Z position (1.5-3)

      // === BUBBLE GEOMETRY ===
      bubbleSize: 1.1,                  // Bubble radius (0.5-1.2)
      bubbleDetail: 128,                 // Mesh detail level (32-128, higher = smoother)

      // === ANIMATION SPEED ===
      // Layer 1: Large slow waves
      speed1: 0.1,                      // Animation speed (0.2-1.0)
      frequency1: 1,                  // Noise frequency (1.0-3.0)
      intensity1: 0.1,                 // Deformation strength (0.1-0.3)

      // Layer 2: Medium waves
      speed2: 0.2,                      // Animation speed (0.2-1.0)
      frequency2: 1,                  // Noise frequency (1.0-3.0)
      intensity2: 0.05,                 // Deformation strength (0.05-0.15)

      // Layer 3: Fine detail
      speed3: 0.2,                      // Animation speed (0.2-1.0)
      frequency3: 2.0,                  // Noise frequency (2.0-5.0)
      intensity3: 0.02,                 // Deformation strength (0.02-0.1)

      // === APPEARANCE ===
      
      // Glass colors (RGB 0.0-1.0)
      glassColorR: 0.12,
      glassColorG: 0.11,
      glassColorB: 0.19,

      // Gradient colors (RGB 0.0-1.0)
      topColorR: 0.55,
      topColorG: 1.0,
      topColorB: 1.0,

      bottomColorR: 0.8,
      bottomColorG: 0.2,
      bottomColorB: 0.5,

      // === EFFECTS ===
      fresnelPower: 3.0,                // Edge glow sharpness (2.0-5.0)
      fresnelBlend: 0.8,                // Edge glow intensity (0.3-0.8)

      highlightPower: 50.0,             // Highlight size (10.0-50.0, higher = smaller)
      highlightIntensity: 0.5,          // Highlight brightness (0.5-1.0)

      baseTransparency: 0.1,           // Base alpha (0.1-0.3, lower = more transparent)
      edgeTransparency: 0.6,           // Edge alpha boost (0.2-0.6)
      // Mouse interaction
      mouseLerpSpeed: 0.2, // Speed of mouse position interpolation (0-1, lower = smoother)
      mouseInfluenceStrength: 1.0, // Base strength of mouse effect (0 = no effect, higher = stronger)
      mouseBlendAmount: 0.6, // How much mouse colors blend with base colors (0-1)
      mouseColorIntensity: 0.6 // Intensity of color variation (0-1)
    };

    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
    let material: THREE.ShaderMaterial, mesh: THREE.Mesh;
    const clock = new THREE.Clock();

    // Mouse position (normalized -1 to 1)
    const mouse = { x: 0, y: 0 };
    let isMouseInHero = false;

    const mount = mountRef.current;
    if (!mount) {
      console.error('Mount ref is null');
      return;
    }

    // Sizing based on viewport width with constraints
    const viewportWidth = window.innerWidth;
    const size = Math.min(Math.max(300, viewportWidth * 0.8), 600);
    const width = size;
    const height = size; // Square aspect ratio (1:1)

    // ===== INIT =====
    scene = new THREE.Scene();
    scene.background = new THREE.Color(CONFIG.backgroundColor);

    camera = new THREE.PerspectiveCamera(
      CONFIG.cameraFOV,
      width / height,
      0.1,
      1000
    );
    camera.position.z = CONFIG.cameraDistance;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // ===== SHADERS =====
    const vertexShader = `
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vWorldPosition;
      uniform float time;

      // Animation parameters
      uniform float speed1;
      uniform float frequency1;
      uniform float intensity1;
      uniform float speed2;
      uniform float frequency2;
      uniform float intensity2;
      uniform float speed3;
      uniform float frequency3;
      uniform float intensity3;

      vec3 mod289(vec3 x) { 
          return x - floor(x * (1.0 / 289.0)) * 289.0; 
      }

      vec4 mod289(vec4 x) { 
          return x - floor(x * (1.0 / 289.0)) * 289.0; 
      }

      vec4 permute(vec4 x) { 
          return mod289(((x * 34.0) + 1.0) * x); 
      }

      vec4 taylorInvSqrt(vec4 r) { 
          return 1.79284291400159 - 0.85373472095314 * r; 
      }

      float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

          vec3 i  = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);

          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);

          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;

          i = mod289(i);
          vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));

          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;

          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);

          vec4 x = x_ * ns.x + ns.yyyy;
          vec4 y = y_ * ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);

          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);

          vec4 s0 = floor(b0) * 2.0 + 1.0;
          vec4 s1 = floor(b1) * 2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));

          vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);

          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;

          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      void main() {
          vNormal = normalize(normalMatrix * normal);

          vec3 pos = position;

          // Apply three layers of noise using config parameters
          float noise = snoise(pos * frequency1 + time * speed1) * intensity1;
          noise += snoise(pos * frequency2 - time * speed2) * intensity2;
          noise += snoise(pos * frequency3 + time * speed3) * intensity3;

          pos += normal * noise;

          vPosition = pos;
          vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
          vWorldPosition = worldPosition.xyz;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;

      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vWorldPosition;
      uniform float time;
      uniform vec2 mousePos;

      // Appearance parameters
      uniform vec3 glassColor;
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float fresnelPower;
      uniform float fresnelBlend;
      uniform float highlightPower;
      uniform float highlightIntensity;
      uniform float baseTransparency;
      uniform float edgeTransparency;
      uniform float mouseInfluenceStrength;
      uniform float mouseBlendAmount;
      uniform float mouseColorIntensity;

      void main() {
          vec3 viewDirection = normalize(cameraPosition - vWorldPosition);

          // Fresnel effect using config parameter
          float fresnel = pow(1.0 - dot(vNormal, viewDirection), fresnelPower);

          // Mouse influence - always active when mouse is present
          float mouseInfluence = mouseInfluenceStrength;

          // Create color variation based on mouse position
          vec3 mouseColor1 = vec3(
              0.4 + mousePos.x * mouseColorIntensity,
              0.6 + mousePos.y * mouseColorIntensity,
              0.9
          );
          vec3 mouseColor2 = vec3(
              0.9,
              0.3 + mousePos.x * mouseColorIntensity,
              0.5 + mousePos.y * mouseColorIntensity
          );

          // Gradient using config colors with mouse influence
          float gradient = (vPosition.y + 1.0) * 0.5;
          vec3 baseGradient = mix(bottomColor, topColor, gradient);

          // Mix in mouse-influenced colors
          vec3 mouseGradient = mix(mouseColor1, mouseColor2, gradient);
          vec3 gradientColor = mix(baseGradient, mouseGradient, mouseInfluence * mouseBlendAmount);

          // Blend with fresnel
          vec3 color = mix(gradientColor, vec3(1.0), fresnel * fresnelBlend);

          // Specular highlight using config parameters
          float highlight = pow(max(dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))), 0.0), highlightPower);
          color += vec3(1.0) * highlight * highlightIntensity;

          // Transparency using config parameters
          float alpha = baseTransparency + fresnel * edgeTransparency;

          gl_FragColor = vec4(color, alpha);
      }
    `;

    // ===== MATERIAL =====
    material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        mousePos: { value: new THREE.Vector2(0, 0) },
        speed1: { value: CONFIG.speed1 },
        frequency1: { value: CONFIG.frequency1 },
        intensity1: { value: CONFIG.intensity1 },
        speed2: { value: CONFIG.speed2 },
        frequency2: { value: CONFIG.frequency2 },
        intensity2: { value: CONFIG.intensity2 },
        speed3: { value: CONFIG.speed3 },
        frequency3: { value: CONFIG.frequency3 },
        intensity3: { value: CONFIG.intensity3 },
        glassColor: { value: new THREE.Vector3(CONFIG.glassColorR, CONFIG.glassColorG, CONFIG.glassColorB) },
        topColor: { value: new THREE.Vector3(CONFIG.topColorR, CONFIG.topColorG, CONFIG.topColorB) },
        bottomColor: { value: new THREE.Vector3(CONFIG.bottomColorR, CONFIG.bottomColorG, CONFIG.bottomColorB) },
        fresnelPower: { value: CONFIG.fresnelPower },
        fresnelBlend: { value: CONFIG.fresnelBlend },
        highlightPower: { value: CONFIG.highlightPower },
        highlightIntensity: { value: CONFIG.highlightIntensity },
        baseTransparency: { value: CONFIG.baseTransparency },
        edgeTransparency: { value: CONFIG.edgeTransparency },
        mouseInfluenceStrength: { value: CONFIG.mouseInfluenceStrength },
        mouseBlendAmount: { value: CONFIG.mouseBlendAmount },
        mouseColorIntensity: { value: CONFIG.mouseColorIntensity }
      },
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.NormalBlending
    });

    // ===== GEOMETRY & MESH =====
    const geometry = new THREE.IcosahedronGeometry(CONFIG.bubbleSize, CONFIG.bubbleDetail);
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // After creating geometry and mesh
    console.log('Mesh created:', mesh);
    console.log('Scene:', scene);
    console.log('Camera position:', camera.position);

    // ===== MOUSE INTERACTION =====
    const heroSection = document.getElementById('home');
    if (!heroSection) {
      console.error('Hero section not found');
      return;
    }

    function onMouseMove(event: MouseEvent) {
      if (!isMouseInHero) return;

      const rect = heroSection!.getBoundingClientRect();

      // Normalize to -1 to 1 range
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    }

    function onMouseEnter() {
      isMouseInHero = true;
    }

    function onMouseLeave() {
      isMouseInHero = false;
      // Reset mouse position to center smoothly
      mouse.x = 0;
      mouse.y = 0;
    }

    heroSection.addEventListener('mousemove', onMouseMove);
    heroSection.addEventListener('mouseenter', onMouseEnter);
    heroSection.addEventListener('mouseleave', onMouseLeave);

    // ===== RESIZE HANDLER =====
    function onWindowResize() {
      const viewportWidth = window.innerWidth;
      const size = Math.min(Math.max(300, viewportWidth * 0.8), 600);
      camera.aspect = 1; // Square aspect ratio (1:1)
      camera.updateProjectionMatrix();
      renderer.setSize(size, size);
    }
    window.addEventListener('resize', onWindowResize);

    // ===== ANIMATION LOOP =====
    let stop = false;
    function animate() {
      if (stop) return;
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      material.uniforms.time.value = time;

      // Smooth transition with lerp
      material.uniforms.mousePos.value.x += (mouse.x - material.uniforms.mousePos.value.x) * CONFIG.mouseLerpSpeed;
      material.uniforms.mousePos.value.y += (mouse.y - material.uniforms.mousePos.value.y) * CONFIG.mouseLerpSpeed;

      renderer.render(scene, camera);
    }
    animate();

    // ===== CLEANUP =====
    return () => {
      stop = true;
      window.removeEventListener('resize', onWindowResize);
      if (heroSection) {
        heroSection.removeEventListener('mousemove', onMouseMove);
        heroSection.removeEventListener('mouseenter', onMouseEnter);
        heroSection.removeEventListener('mouseleave', onMouseLeave);
      }
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className='three-canvas'
      aria-label="Three.js Canvas"
    />
  );
}
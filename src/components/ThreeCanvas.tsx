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
      bubbleSize: 1,                  // Bubble radius (0.5-1.2)
      bubbleDetail: 128,                 // Mesh detail level (32-128, higher = smoother)

      // === ANIMATION SPEED ===
      // Layer 1: Large slow waves
      speed1: 0.1,                      // Animation speed (0.2-1.0)
      frequency1: 0.5,                  // Noise frequency (1.0-3.0)
      intensity1: 0.1,                 // Deformation strength (0.1-0.3)

      // Layer 2: Medium waves
      speed2: 0.2,                      // Animation speed (0.2-1.0)
      frequency2: 0.9,                  // Noise frequency (1.0-3.0)
      intensity2: 0.05,                 // Deformation strength (0.05-0.15)

      // Layer 3: Fine detail
      speed3: 0.2,                      // Animation speed (0.2-1.0)
      frequency3: 1.5,                  // Noise frequency (2.0-5.0)
      intensity3: 0.02,                 // Deformation strength (0.02-0.1)

      // Mouse intensity modulation
      mouseIntensityMultiplier: 2.0,    // Max intensity multiplier (1.0-3.0)
      mouseGravityStrength: 0.2,        // Strength of gravitational pull (0.1-0.5)
      cameraRotationSpeed: 0.1,         // Speed of camera rotation (0.05-0.3)

      // === APPEARANCE ===
      
      // Glass colors (RGB 0.0-1.0)
      glassColorR: 0.12,
      glassColorG: 0.11,
      glassColorB: 0.19,

      // Gradient colors (RGB 0.0-1.0) - Duo-tone gradient (more neutral)
      topColorR: 0.5,      // Desaturated cyan top
      topColorG: 0.65,
      topColorB: 0.75,

      bottomColorR: 0.7,   // Desaturated magenta bottom
      bottomColorG: 0.45,
      bottomColorB: 0.6,

      // === EFFECTS ===
      fresnelPower: 3.0,                // Edge glow sharpness (2.0-5.0)
      fresnelBlend: 0.8,                // Edge glow intensity (0.3-0.8)

      highlightPower: 50.0,             // Highlight size (10.0-50.0, higher = smaller)
      highlightIntensity: 0.5,          // Highlight brightness (0.5-1.0)

      baseTransparency: 0.1,           // Base alpha (0.1-0.3, lower = more transparent)
      edgeTransparency: 0.6,           // Edge alpha boost (0.2-0.6)
      // Mouse interaction
      mouseLerpSpeed: 0.05, // Speed of mouse position interpolation (0-1, lower = smoother)
      mouseInfluenceStrength: 1.0, // Base strength of mouse effect (0 = no effect, higher = stronger)
      mouseBlendAmount: 0.6, // How much mouse colors blend with base colors (0-1)
      mouseColorIntensity: 0.6 // Intensity of color variation (0-1)
    };

    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
    let material: THREE.ShaderMaterial, mesh: THREE.Mesh;
    const clock = new THREE.Clock();

    // Mouse position (normalized -1 to 1) - for desktop
    const mouse = { x: 0, y: 0 };
    let isMouseInHero = false;

    // Drag position (normalized -1 to 1) - for mobile
    const drag = { x: 0, y: 0 };
    let isDragging = false;
    let dragStartY = 0;
    let dragCurrentY = 0;

    const mount = mountRef.current;
    if (!mount) {
      console.error('Mount ref is null');
      return;
    }

    // Sizing based on viewport width with constraints
    const viewportWidth = window.innerWidth;
    const isMobile = viewportWidth < 768;
    const baseSize = Math.min(Math.max(300, viewportWidth * 0.8), 600);
    // Make bubble 15% bigger on mobile
    const size = isMobile ? baseSize * 1.15 : baseSize;
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
      uniform vec2 mousePos;

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
      uniform float mouseIntensityMultiplier;
      uniform float mouseGravityStrength;

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

          // Calculate mouse distance from center to modulate intensity
          float distanceFromCenter = length(mousePos);
          float intensityMultiplier = 1.0 + (distanceFromCenter * (mouseIntensityMultiplier - 1.0));

          // Apply three layers of noise with mouse-modulated intensities
          float noise = snoise(pos * frequency1 + time * speed1) * intensity1 * intensityMultiplier;
          noise += snoise(pos * frequency2 - time * speed2) * intensity2 * intensityMultiplier;
          noise += snoise(pos * frequency3 + time * speed3) * intensity3 * intensityMultiplier;

          pos += normal * noise;

          // Directional deformation based on mouse position
          // Map mouse position to a pull direction in 3D space
          vec3 pullDirection = normalize(vec3(mousePos.x, mousePos.y, 0.5));

          // Calculate how much each vertex should be affected
          // Vertices aligned with the pull direction get pulled outward
          float alignment = dot(normalize(position), pullDirection);

          // Only pull vertices that face the mouse direction (positive alignment)
          float pullStrength = max(0.0, alignment) * distanceFromCenter * mouseGravityStrength;

          // Apply directional pull along the normal
          pos += normal * pullStrength;

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

          // Calculate distance from center (0,0) - when at center, distance is 0
          float distanceFromCenter = length(mousePos);

          // Mouse influence scales with distance from center
          float mouseInfluence = mouseInfluenceStrength * distanceFromCenter;

          // Define corner color pairs (top and bottom for each corner)
          // Top-right: Cyan → Magenta
          vec3 topRight_top = vec3(0.4, 0.8, 1.0);      // Cyan
          vec3 topRight_bottom = vec3(1.0, 0.3, 0.7);   // Magenta

          // Top-left: Cyan → Yellow
          vec3 topLeft_top = vec3(0.4, 0.8, 1.0);       // Cyan
          vec3 topLeft_bottom = vec3(1.0, 0.9, 0.2);    // Yellow

          // Bottom-left: Yellow → Purple
          vec3 bottomLeft_top = vec3(1.0, 0.9, 0.2);    // Yellow
          vec3 bottomLeft_bottom = vec3(0.7, 0.3, 1.0); // Purple

          // Bottom-right: Magenta → Blue
          vec3 bottomRight_top = vec3(1.0, 0.3, 0.7);   // Magenta
          vec3 bottomRight_bottom = vec3(0.3, 0.4, 1.0); // Blue

          // Calculate distance to each corner
          vec2 topRightCorner = vec2(1.0, 1.0);
          vec2 topLeftCorner = vec2(-1.0, 1.0);
          vec2 bottomLeftCorner = vec2(-1.0, -1.0);
          vec2 bottomRightCorner = vec2(1.0, -1.0);

          float distToTopRight = distance(mousePos, topRightCorner);
          float distToTopLeft = distance(mousePos, topLeftCorner);
          float distToBottomLeft = distance(mousePos, bottomLeftCorner);
          float distToBottomRight = distance(mousePos, bottomRightCorner);

          // Convert distances to weights (closer = higher weight)
          float maxDist = 2.83;
          float weightTopRight = 1.0 - (distToTopRight / maxDist);
          float weightTopLeft = 1.0 - (distToTopLeft / maxDist);
          float weightBottomLeft = 1.0 - (distToBottomLeft / maxDist);
          float weightBottomRight = 1.0 - (distToBottomRight / maxDist);

          // Normalize weights
          float totalWeight = weightTopRight + weightTopLeft + weightBottomLeft + weightBottomRight;
          weightTopRight /= totalWeight;
          weightTopLeft /= totalWeight;
          weightBottomLeft /= totalWeight;
          weightBottomRight /= totalWeight;

          // Blend corner top colors
          vec3 cornerTopColor = topRight_top * weightTopRight +
                                topLeft_top * weightTopLeft +
                                bottomLeft_top * weightBottomLeft +
                                bottomRight_top * weightBottomRight;

          // Blend corner bottom colors
          vec3 cornerBottomColor = topRight_bottom * weightTopRight +
                                   topLeft_bottom * weightTopLeft +
                                   bottomLeft_bottom * weightBottomLeft +
                                   bottomRight_bottom * weightBottomRight;

          // Vertical gradient with corner colors or base colors
          float verticalGradient = (vPosition.y + 1.0) * 0.5;
          vec3 baseGradient = mix(bottomColor, topColor, verticalGradient);
          vec3 cornerGradient = mix(cornerBottomColor, cornerTopColor, verticalGradient);

          // Mix base gradient with corner gradient based on mouse influence
          vec3 gradientColor = mix(baseGradient, cornerGradient, mouseInfluence * mouseBlendAmount);

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
        mouseIntensityMultiplier: { value: CONFIG.mouseIntensityMultiplier },
        mouseGravityStrength: { value: CONFIG.mouseGravityStrength },
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

    // ===== MOUSE INTERACTION (Desktop) =====
    const heroSection = document.getElementById('home');
    if (!heroSection) {
      console.error('Hero section not found');
      return;
    }

    function onMouseMove(event: MouseEvent) {
      if (!isMouseInHero) return;

      const rect = heroSection!.getBoundingClientRect();

      // Check if mouse is actually within the hero bounds
      const isInBounds = event.clientY >= rect.top &&
                         event.clientY <= rect.bottom &&
                         event.clientX >= rect.left &&
                         event.clientX <= rect.right;

      if (!isInBounds) return;

      // Normalize to -1 to 1 range
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    }

    function onMouseEnter() {
      isMouseInHero = true;
    }

    function onMouseLeave() {
      isMouseInHero = false;
    }

    heroSection.addEventListener('mousemove', onMouseMove);
    heroSection.addEventListener('mouseenter', onMouseEnter);
    heroSection.addEventListener('mouseleave', onMouseLeave);

    // ===== DRAG INTERACTION (Mobile) =====
    function onTouchStart(event: TouchEvent) {
      isDragging = true;
      dragStartY = event.touches[0].clientY;
      dragCurrentY = dragStartY;
    }

    function onTouchMove(event: TouchEvent) {
      if (!isDragging) return;
      dragCurrentY = event.touches[0].clientY;

      // Calculate drag distance
      const dragDistance = dragCurrentY - dragStartY;
      const maxDragDistance = window.innerHeight * 0.5; // 50% of viewport height

      // Normalize to -1 to 1 range
      drag.y = Math.max(-1, Math.min(1, -dragDistance / maxDragDistance));

      // Create horizontal movement based on vertical drag
      drag.x = Math.sin(drag.y * Math.PI) * 0.5;
    }

    function onTouchEnd() {
      isDragging = false;
      // Smoothly return to center
      dragStartY = 0;
      dragCurrentY = 0;
    }

    // Add touch event listeners to hero section
    heroSection.addEventListener('touchstart', onTouchStart, { passive: true });
    heroSection.addEventListener('touchmove', onTouchMove, { passive: true });
    heroSection.addEventListener('touchend', onTouchEnd, { passive: true });

    // ===== RESIZE HANDLER =====
    function onWindowResize() {
      const viewportWidth = window.innerWidth;
      const isMobile = viewportWidth < 768;
      const baseSize = Math.min(Math.max(300, viewportWidth * 0.8), 600);
      // Make bubble 15% bigger on mobile
      const size = isMobile ? baseSize * 1.15 : baseSize;
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

      // Check if mobile
      const isMobile = window.innerWidth < 768;

      // Use drag on mobile, mouse on desktop
      let targetX, targetY;
      if (isMobile) {
        // Mobile: use drag position, smoothly return to center when not dragging
        if (!isDragging) {
          drag.x *= 0.95; // Smooth decay to center
          drag.y *= 0.95;
        }
        targetX = drag.x;
        targetY = drag.y;
      } else {
        // Desktop: use mouse position (or center if mouse not in hero)
        targetX = isMouseInHero ? mouse.x : 0;
        targetY = isMouseInHero ? mouse.y : 0;
      }

      // Smooth transition with lerp
      material.uniforms.mousePos.value.x += (targetX - material.uniforms.mousePos.value.x) * CONFIG.mouseLerpSpeed;
      material.uniforms.mousePos.value.y += (targetY - material.uniforms.mousePos.value.y) * CONFIG.mouseLerpSpeed;

      // Rotate camera based on position
      const targetAngleX = material.uniforms.mousePos.value.x * Math.PI * CONFIG.cameraRotationSpeed;
      const targetAngleY = material.uniforms.mousePos.value.y * Math.PI * CONFIG.cameraRotationSpeed;

      // Calculate camera position on a sphere around the bubble
      const radius = CONFIG.cameraDistance;
      camera.position.x = radius * Math.sin(targetAngleX) * Math.cos(targetAngleY);
      camera.position.y = radius * Math.sin(targetAngleY);
      camera.position.z = radius * Math.cos(targetAngleX) * Math.cos(targetAngleY);

      // Make camera look at the center
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }
    animate();

    // ===== CLEANUP =====
    return () => {
      stop = true;
      window.removeEventListener('resize', onWindowResize);
      heroSection.removeEventListener('mousemove', onMouseMove);
      heroSection.removeEventListener('mouseenter', onMouseEnter);
      heroSection.removeEventListener('mouseleave', onMouseLeave);
      heroSection.removeEventListener('touchstart', onTouchStart);
      heroSection.removeEventListener('touchmove', onTouchMove);
      heroSection.removeEventListener('touchend', onTouchEnd);
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
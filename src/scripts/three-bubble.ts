/**
 * Three.js Bubble Animation
 * Standalone script for Astro - no React dependencies
 */

import * as THREE from 'three';

// Configuration
const CONFIG = {
  // Scene
  backgroundColor: 0xfafafa,
  cameraFOV: 90,
  cameraDistance: 2,

  // Bubble geometry
  bubbleSize: 1,
  bubbleDetail: 128,

  // Animation - Layer 1: Large slow waves
  speed1: 0.1,
  frequency1: 0.5,
  intensity1: 0.1,

  // Animation - Layer 2: Medium waves
  speed2: 0.2,
  frequency2: 0.9,
  intensity2: 0.05,

  // Animation - Layer 3: Fine detail
  speed3: 0.2,
  frequency3: 1.5,
  intensity3: 0.02,

  // Mouse interaction
  mouseIntensityMultiplier: 2.0,
  mouseGravityStrength: 0.2,
  cameraRotationSpeed: 0.1,
  mouseLerpSpeed: 0.05,
  mouseInfluenceStrength: 1.0,
  mouseBlendAmount: 0.6,
  mouseColorIntensity: 0.6,

  // Glass colors
  glassColorR: 0.12,
  glassColorG: 0.11,
  glassColorB: 0.19,

  // Gradient colors
  topColorR: 0.5,
  topColorG: 0.65,
  topColorB: 0.75,
  bottomColorR: 0.7,
  bottomColorG: 0.45,
  bottomColorB: 0.6,

  // Effects
  fresnelPower: 3.0,
  fresnelBlend: 0.8,
  highlightPower: 50.0,
  highlightIntensity: 0.5,
  baseTransparency: 0.1,
  edgeTransparency: 0.6,
};

// Vertex shader
const vertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vWorldPosition;
  uniform float time;
  uniform vec2 mousePos;
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

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
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
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec3 pos = position;
    float distanceFromCenter = length(mousePos);
    float intensityMultiplier = 1.0 + (distanceFromCenter * (mouseIntensityMultiplier - 1.0));
    float noise = snoise(pos * frequency1 + time * speed1) * intensity1 * intensityMultiplier;
    noise += snoise(pos * frequency2 - time * speed2) * intensity2 * intensityMultiplier;
    noise += snoise(pos * frequency3 + time * speed3) * intensity3 * intensityMultiplier;
    pos += normal * noise;
    vec3 pullDirection = normalize(vec3(mousePos.x, mousePos.y, 0.5));
    float alignment = dot(normalize(position), pullDirection);
    float pullStrength = max(0.0, alignment) * distanceFromCenter * mouseGravityStrength;
    pos += normal * pullStrength;
    vPosition = pos;
    vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

// Fragment shader
const fragmentShader = `
  precision highp float;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vWorldPosition;
  uniform float time;
  uniform vec2 mousePos;
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
    float fresnel = pow(1.0 - dot(vNormal, viewDirection), fresnelPower);
    float distanceFromCenter = length(mousePos);
    float mouseInfluence = mouseInfluenceStrength * distanceFromCenter;

    vec3 topRight_top = vec3(0.4, 0.8, 1.0);
    vec3 topRight_bottom = vec3(1.0, 0.3, 0.7);
    vec3 topLeft_top = vec3(0.4, 0.8, 1.0);
    vec3 topLeft_bottom = vec3(1.0, 0.9, 0.2);
    vec3 bottomLeft_top = vec3(1.0, 0.9, 0.2);
    vec3 bottomLeft_bottom = vec3(0.7, 0.3, 1.0);
    vec3 bottomRight_top = vec3(1.0, 0.3, 0.7);
    vec3 bottomRight_bottom = vec3(0.3, 0.4, 1.0);

    vec2 topRightCorner = vec2(1.0, 1.0);
    vec2 topLeftCorner = vec2(-1.0, 1.0);
    vec2 bottomLeftCorner = vec2(-1.0, -1.0);
    vec2 bottomRightCorner = vec2(1.0, -1.0);

    float distToTopRight = distance(mousePos, topRightCorner);
    float distToTopLeft = distance(mousePos, topLeftCorner);
    float distToBottomLeft = distance(mousePos, bottomLeftCorner);
    float distToBottomRight = distance(mousePos, bottomRightCorner);

    float maxDist = 2.83;
    float weightTopRight = 1.0 - (distToTopRight / maxDist);
    float weightTopLeft = 1.0 - (distToTopLeft / maxDist);
    float weightBottomLeft = 1.0 - (distToBottomLeft / maxDist);
    float weightBottomRight = 1.0 - (distToBottomRight / maxDist);

    float totalWeight = weightTopRight + weightTopLeft + weightBottomLeft + weightBottomRight;
    weightTopRight /= totalWeight;
    weightTopLeft /= totalWeight;
    weightBottomLeft /= totalWeight;
    weightBottomRight /= totalWeight;

    vec3 cornerTopColor = topRight_top * weightTopRight +
                          topLeft_top * weightTopLeft +
                          bottomLeft_top * weightBottomLeft +
                          bottomRight_top * weightBottomRight;

    vec3 cornerBottomColor = topRight_bottom * weightTopRight +
                             topLeft_bottom * weightTopLeft +
                             bottomLeft_bottom * weightBottomLeft +
                             bottomRight_bottom * weightBottomRight;

    float verticalGradient = (vPosition.y + 1.0) * 0.5;
    vec3 baseGradient = mix(bottomColor, topColor, verticalGradient);
    vec3 cornerGradient = mix(cornerBottomColor, cornerTopColor, verticalGradient);
    vec3 gradientColor = mix(baseGradient, cornerGradient, mouseInfluence * mouseBlendAmount);
    vec3 color = mix(gradientColor, vec3(1.0), fresnel * fresnelBlend);
    float highlight = pow(max(dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))), 0.0), highlightPower);
    color += vec3(1.0) * highlight * highlightIntensity;
    float alpha = baseTransparency + fresnel * edgeTransparency;
    gl_FragColor = vec4(color, alpha);
  }
`;

/**
 * Initialize the Three.js bubble animation
 */
export function initBubble(mountElement: HTMLElement): () => void {
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let material: THREE.ShaderMaterial;
  let mesh: THREE.Mesh;
  let geometry: THREE.IcosahedronGeometry;
  const clock = new THREE.Clock();

  // Mouse state
  const mouse = { x: 0, y: 0 };

  // Drag state (mobile)
  const drag = { x: 0, y: 0 };
  let isDragging = false;
  let dragStartX = 0;
  let dragCurrentX = 0;

  // Sizing
  const viewportWidth = window.innerWidth;
  const isMobile = viewportWidth < 768;
  const baseSize = Math.min(Math.max(300, viewportWidth * 0.8), 600);
  const size = isMobile ? baseSize * 1.15 : baseSize;

  // Initialize scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(CONFIG.backgroundColor);

  camera = new THREE.PerspectiveCamera(CONFIG.cameraFOV, 1, 0.1, 1000);
  camera.position.z = CONFIG.cameraDistance;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(size, size);
  renderer.setPixelRatio(window.devicePixelRatio);
  mountElement.appendChild(renderer.domElement);

  // Create material
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
      mouseColorIntensity: { value: CONFIG.mouseColorIntensity },
    },
    transparent: true,
    side: THREE.DoubleSide,
    blending: THREE.NormalBlending,
  });

  // Create geometry and mesh
  geometry = new THREE.IcosahedronGeometry(CONFIG.bubbleSize, CONFIG.bubbleDetail);
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Get hero section for mouse events
  const heroSection = document.getElementById('home');

  // Mouse handlers (desktop)
  let isMouseInHero = false;

  function onMouseMove(event: MouseEvent) {
    if (!heroSection) return;
    const rect = heroSection.getBoundingClientRect();
    const isInBounds =
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom &&
      event.clientX >= rect.left &&
      event.clientX <= rect.right;

    isMouseInHero = isInBounds;
    if (!isInBounds) return;

    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }

  // Touch handlers (mobile)
  function onTouchStart(event: TouchEvent) {
    isDragging = true;
    dragStartX = event.touches[0].clientX;
    dragCurrentX = dragStartX;
  }

  function onTouchMove(event: TouchEvent) {
    if (!isDragging) return;
    dragCurrentX = event.touches[0].clientX;
    const dragDistance = dragCurrentX - dragStartX;
    const maxDragDistance = window.innerWidth * 0.5;
    drag.x = Math.max(-1, Math.min(1, dragDistance / maxDragDistance));
    drag.y = Math.sin(drag.x * Math.PI) * 0.5;
  }

  function onTouchEnd() {
    isDragging = false;
    dragStartX = 0;
    dragCurrentX = 0;
  }

  // Add event listeners - use document for mousemove to track even when mouse is already inside
  document.addEventListener('mousemove', onMouseMove);
  if (heroSection) {
    heroSection.addEventListener('touchstart', onTouchStart, { passive: true });
    heroSection.addEventListener('touchmove', onTouchMove, { passive: true });
    heroSection.addEventListener('touchend', onTouchEnd, { passive: true });
  }

  // Resize handler
  function onWindowResize() {
    const viewportWidth = window.innerWidth;
    const isMobile = viewportWidth < 768;
    const baseSize = Math.min(Math.max(300, viewportWidth * 0.8), 600);
    const size = isMobile ? baseSize * 1.15 : baseSize;
    camera.aspect = 1;
    camera.updateProjectionMatrix();
    renderer.setSize(size, size);
  }
  window.addEventListener('resize', onWindowResize);

  // Animation loop
  let animationId: number;
  let stop = false;

  function animate() {
    if (stop) return;
    animationId = requestAnimationFrame(animate);

    const time = clock.getElapsedTime();
    material.uniforms.time.value = time;

    const isMobile = window.innerWidth < 768;
    let targetX: number, targetY: number;

    if (isMobile) {
      if (!isDragging) {
        drag.x *= 0.95;
        drag.y *= 0.95;
      }
      targetX = drag.x;
      targetY = drag.y;
    } else {
      targetX = isMouseInHero ? mouse.x : 0;
      targetY = isMouseInHero ? mouse.y : 0;
    }

    material.uniforms.mousePos.value.x += (targetX - material.uniforms.mousePos.value.x) * CONFIG.mouseLerpSpeed;
    material.uniforms.mousePos.value.y += (targetY - material.uniforms.mousePos.value.y) * CONFIG.mouseLerpSpeed;

    const targetAngleX = material.uniforms.mousePos.value.x * Math.PI * CONFIG.cameraRotationSpeed;
    const targetAngleY = material.uniforms.mousePos.value.y * Math.PI * CONFIG.cameraRotationSpeed;
    const radius = CONFIG.cameraDistance;

    camera.position.x = radius * Math.sin(targetAngleX) * Math.cos(targetAngleY);
    camera.position.y = radius * Math.sin(targetAngleY);
    camera.position.z = radius * Math.cos(targetAngleX) * Math.cos(targetAngleY);
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }

  animate();

  // Return cleanup function
  return () => {
    stop = true;
    cancelAnimationFrame(animationId);
    window.removeEventListener('resize', onWindowResize);
    document.removeEventListener('mousemove', onMouseMove);

    if (heroSection) {
      heroSection.removeEventListener('touchstart', onTouchStart);
      heroSection.removeEventListener('touchmove', onTouchMove);
      heroSection.removeEventListener('touchend', onTouchEnd);
    }

    if (mountElement.contains(renderer.domElement)) {
      mountElement.removeChild(renderer.domElement);
    }

    renderer.dispose();
    geometry.dispose();
    material.dispose();
  };
}

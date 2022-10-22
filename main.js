import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);;
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

// Render
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0, -20, -20);

// Resizing Canvas
function resizeCanvas() {
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', (event) => {
  resizeCanvas();
});

// Animate
function animate() {
  requestAnimationFrame( animate );
  renderer.render(scene, camera);
  controls.update();
}

// Light Source
const lightSource = new THREE.AmbientLight(0xffffff);
lightSource.position.set(0, 100, 0);
scene.add(lightSource);

// DEBUG
const lightHelper = new THREE.PointLightHelper(lightSource);
const gridHelper = new THREE.GridHelper(250, 10);
scene.add(lightHelper, gridHelper);
const controls = new OrbitControls(camera, renderer.domElement);

// COOL BACKGROUND
function populateStars() {
  const geometry = new THREE.SphereGeometry (0.10, 20, 20);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff});
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(250));
  star.position.set(x, y, z);
  scene.add(star);
}

// Amount of stars
Array(3000).fill().forEach(populateStars);

// Refresh Screen
animate()
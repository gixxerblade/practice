var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.CylinderGeometry(5, 5, 20, 32);
var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
var cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);
let animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};
animate();

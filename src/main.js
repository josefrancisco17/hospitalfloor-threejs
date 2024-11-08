import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const wallHeight = 5;

const scene = new THREE.Scene();

const axesHelper = new THREE.AxesHelper( 5 );
axesHelper.position.set(0,10,0);
scene.add( axesHelper );

//create meshes
function createFloor(width, depth) {
    const floorGeometry = new THREE.PlaneGeometry(width, depth);
    const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc, side: THREE.DoubleSide });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);
}

function createWall(width, height, depth, x, y, z) {
    const wallMaterial = new THREE.MeshBasicMaterial({ color: 0x888888 });
    const wallGeometry = new THREE.BoxGeometry(width, height, depth);
    const wall = new THREE.Mesh(wallGeometry, wallMaterial);
    wall.position.set(x, y, z);
    scene.add(wall);
}

//Exterior Walls
createWall(50, wallHeight, 0.2, 0, wallHeight / 2, -25);
createWall(50, wallHeight, 0.2, 0, wallHeight / 2, 25);
createWall(0.2, wallHeight, 50, -25, wallHeight / 2, 0);
createWall(0.2, wallHeight, 50, 25, wallHeight / 2, 0);

//Interior Walls SR1
createWall(0.2, wallHeight, 5, -5, wallHeight / 2, 22.5)
createWall(0.2, wallHeight, 5, -5, wallHeight / 2, 15)
createWall(20, wallHeight, 0.2, -15, wallHeight / 2, 12.5);

//Interior Walls SR2
createWall(0.2, wallHeight, 5, -5, wallHeight / 2, 10)
createWall(0.2, wallHeight, 5, -5, wallHeight / 2, 2.5)
createWall(20, wallHeight, 0.2, -15, wallHeight / 2, 0);

//Interior Walls SR3
createWall(0.2, wallHeight, 5, -5, wallHeight / 2, -10)
createWall(0.2, wallHeight, 5, -5, wallHeight / 2, -2.5)
createWall(20, wallHeight, 0.2, -15, wallHeight / 2, 0);

//Interior Walls SR4
createWall(0.2, wallHeight, -5, 5, wallHeight / 2, -10)
createWall(0.2, wallHeight, -5, 5, wallHeight / 2, -2.5)
createWall(20, wallHeight, 0.2, 15, wallHeight / 2, 0);

//Interior Walls SR5
createWall(0.2, wallHeight, 5, -5, wallHeight / 2, -22.5)
createWall(0.2, wallHeight, 5, -5, wallHeight / 2, -15)
createWall(20, wallHeight, 0.2, -15, wallHeight / 2, -12.5);

//Interior Walls SR6
createWall(0.2, wallHeight, -5, 5, wallHeight / 2, -22.5)
createWall(0.2, wallHeight, -5, 5, wallHeight / 2, -15)
createWall(20, wallHeight, 0.2, 15, wallHeight / 2, -12.5);


createFloor(50,50)

//camera
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    200
);
camera.position.set(25, 25, 25);

//controls
const canvas = document.querySelector("canvas.threejs");
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

//renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

const animate = () => {
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}

animate();


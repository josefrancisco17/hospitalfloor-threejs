import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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
createWall(0.2, wallHeight, 5, -5, wallHeight / 2, -10)
createWall(0.2, wallHeight, 5, -5, wallHeight / 2, -2.5)
createWall(20, wallHeight, 0.2, -15, wallHeight / 2, 0);

//Interior Walls SR2
createWall(0.2, wallHeight, 5, 5, wallHeight / 2, -10)
createWall(0.2, wallHeight, 5, 5, wallHeight / 2, -2.5)
createWall(20, wallHeight, 0.2, 15, wallHeight / 2, 0);

//Interior Walls SR3
createWall(0.2, wallHeight, 5, -5, wallHeight / 2, -22.5)
createWall(0.2, wallHeight, 5, -5, wallHeight / 2, -15)
createWall(20, wallHeight, 0.2, -15, wallHeight / 2, -12.5);

//Interior Walls SR4
createWall(0.2, wallHeight, 5, 5, wallHeight / 2, -22.5)
createWall(0.2, wallHeight, 5, 5, wallHeight / 2, -15)
createWall(20, wallHeight, 0.2, 15, wallHeight / 2, -12.5);

//Rest Room
createWall(0.2, wallHeight, 2.5, -5, wallHeight / 2, 23.75)
createWall(0.2, wallHeight, 17.5, -5, wallHeight / 2, 7.5)

//Reception Room
createWall(0.2, wallHeight, 2.5, 5, wallHeight / 2, 23.75)
createWall(0.2, wallHeight, 17.5, 5, wallHeight / 2, 7.5)


createFloor(50,50)

//Rest Room



//Reception Room

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, 10, 10);

scene.add(directionalLight);
const loader = new GLTFLoader();
loader.load('models/restRoom/simple_hospital_bed.glb', function(gltf) {
    const bed = gltf.scene;

    // Set the scale of the bed to reduce its size
    bed.scale.set(0.025, 0.025, 0.025); // Reduces the size by half on all axes (x, y, z)
    bed.position.set(-10,1.75,5);

    // Add the scaled bed to the scene
    scene.add(bed);
});

//Surgical Room 1


//Surgical Room 2
// Center of the room: position.set(16, 0.35, -6);

const directionalLightS2 = new THREE.DirectionalLight(0xffffff, 1);
directionalLightS2.position.set(16, 10, -6);

scene.add(directionalLightS2);

loader.load('models/surgicalRoom/cabinet.glb', function(gltf) {
    const cabinet = gltf.scene;
    cabinet.scale.set(0.35, 0.35, 0.35);
    cabinet.position.set(17.3, 0.35, -11.52);
    scene.add(cabinet);
});

loader.load('models/surgicalRoom/cabinet.glb', function(gltf) {
    const cabinet2 = gltf.scene;
    cabinet2.scale.set(0.35, 0.25, 0.35); // Reduces the size by half on all axes (x, y, z)
    cabinet2.position.set(15, 0.35, -11.52);
    scene.add(cabinet2);
});

loader.load('models/surgicalRoom/cabinet.glb', function(gltf) {
    const cabinet3 = gltf.scene;
    cabinet3.scale.set(0.35, 0.25, 0.35); // Reduces the size by half on all axes (x, y, z)
    cabinet3.position.set(19.6, 0.35, -11.52);
    scene.add(cabinet3);
});
//Surgical Room 3

//Surgical Room 4

//Corridor

loader.load('models/corridor/security_camera.glb', function(gltf) {
    const camera1 = gltf.scene;
    camera1.scale.set(-3, 3, 3);
    camera1.position.set(0, 4.5, 24.5);
    scene.add(camera1);
});

loader.load('models/corridor/security_camera.glb', function(gltf) {
    const camera2 = gltf.scene;
    camera2.scale.set(-3, 3, -3);
    camera2.position.set(0, 4.5, -24.5);
    scene.add(camera2);
});

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


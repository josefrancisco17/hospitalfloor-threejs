import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Building } from "./building/Building.js";
import { Corridor } from "./building/Corridor.js";
import { Reception } from "./building/Reception.js";
import { RestRoom } from "./building/RestRoom.js";
import { PatientSystem } from "./building/PatientSystem.js";
import { SurgicalRoom } from "./building/SurgicalRoom.js";
import { Loading } from "./Loading.js";
import config from "./config.json";

function main() {
    const { loadingManager, stats } = Loading();

    // Scene and camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 50, 50);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("canvas.threejs") });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = true;
    controls.rotateSpeed = 0.5;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.3;

    // GLTF Loader
    const loader = new GLTFLoader(loadingManager);

    // Add scene components
    Building(scene, loader);
    Corridor(scene, loader);
    Reception(scene, loader);
    RestRoom(scene, loader);
    SurgicalRoom(scene, loader);
    PatientSystem(scene, loader);

    // Axes helper
    if (config.showAxes) {
        const axesHelper = new THREE.AxesHelper(5);
        axesHelper.position.set(0, 10, 0);
        scene.add(axesHelper);
    }

    // Responsive handling
    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation loop
    const animate = () => {
        stats.update();
        controls.update();
        renderer.render(scene, camera);
        stats.end();
        window.requestAnimationFrame(animate);
    }
    animate();
}

main();

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { Building } from "./building/Building.js";
import { Corridor } from "./building/Corridor.js";
import { Reception } from "./building/Reception.js";
import { RestRoom } from "./building/RestRoom.js";
import { PatientSystem } from "./building/PatientSystem.js";
import { SurgicalRoom } from "./building/SurgicalRoom.js";
import config from "./config.json";

function main() {
    //Performance Measurement
    const stats = new Stats();
    document.body.appendChild(stats.dom);
    stats.showPanel(0);

    const scene = new THREE.Scene();

    const loadingManager = new THREE.LoadingManager();

    const progressBar = document.getElementById("progress-bar");

    const startTime = performance.now();

    loadingManager.onProgress = function(url, loaded, total) {
        progressBar.value = (loaded / total) * 100;
    }

    const progressBarContainer = document.querySelector(".progress-bar-container");

    loadingManager.onLoad = function() {
        const endTime = performance.now();
        const loadTime = (endTime - startTime) / 1000;
        console.log(`Total loading time: ${loadTime.toFixed(2)} seconds`);
        progressBarContainer.style.display = "none";
    }

    const loader = new GLTFLoader(loadingManager);

    const axesHelper = new THREE.AxesHelper(5);
    axesHelper.position.set(0, 10, 0);
    scene.add(axesHelper);

    //Loading Scene Elements
    Building(scene, loader);
    Corridor(scene, loader);
    Reception(scene, loader);
    RestRoom(scene, loader);
    SurgicalRoom(scene, loader);
    PatientSystem(scene, loader);

    //Camera
    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 50, 50);

    //Controls
    const canvas = document.querySelector("canvas.threejs");
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = true;
    controls.rotateSpeed = 0.5;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.3;

    //Renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, powerPreference: config.renderer.powerPreference });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(config.renderer.pixelRatio);

    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const animate = () => {
        stats.begin();
        controls.update();
        renderer.render(scene, camera);
        stats.end();
        window.requestAnimationFrame(animate);
    }

    animate();
}

main();

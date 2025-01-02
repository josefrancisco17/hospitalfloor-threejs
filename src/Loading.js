import * as THREE from "three";
import Stats from "three/addons/libs/stats.module.js";

export function Loading() {
    const loadingScreen = document.querySelector(".loading-screen");
    const progressText = document.querySelector(".progress-text");

    // Performance stats
    const stats = new Stats();
    stats.showPanel(0);

    // Loading manager
    const loadingManager = new THREE.LoadingManager();

    // Update the loading percentage text dynamically
    loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
        const progress = (itemsLoaded / itemsTotal) * 100;
        progressText.textContent = `${Math.round(progress)}%`;
    };

    loadingManager.onLoad = () => {
        setTimeout(() => {
            loadingScreen.classList.add("hidden");
            document.body.appendChild(stats.dom);
            setTimeout(() => loadingScreen.remove(), 500);
        }, 500);
    };

    return { loadingManager, stats };
}

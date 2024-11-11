import * as THREE from "three";

export function Corridor(scene, loader) {
    //Cameras
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
}
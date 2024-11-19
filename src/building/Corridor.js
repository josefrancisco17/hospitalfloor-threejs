import * as THREE from "three";

export function Corridor(scene, loader) {
    //Cameras
    loader.load('models/corridor/security_camera.glb', function(gltf) {
        const camera1 = gltf.scene;
        camera1.scale.set(-3, 3, 3);
        camera1.position.set(0, 6.5, 24.5);
        scene.add(camera1);
    });

    loader.load('models/corridor/security_camera.glb', function(gltf) {
        const camera2 = gltf.scene;
        camera2.scale.set(-3, 3, -3);
        camera2.position.set(0, 6.5, -24.5);
        scene.add(camera2);
    });

    loader.load('models/corridor/water_dispenser.glb', function(gltf) {
        const dispenser1 = gltf.scene;
        dispenser1.scale.set(-1, 1, -1);
        dispenser1.position.set(4.3, 0, -12);
        scene.add(dispenser1);
    });

    loader.load('models/corridor/waiting_couch.glb', function(gltf) {
        const couch1 = gltf.scene;
        couch1.scale.set(-1, 1, -1);
        couch1.position.set(4.3, 0, 1.5);
        scene.add(couch1);
        couch1.rotation.y = THREE.MathUtils.degToRad(-2);
    });

    loader.load('models/corridor/waiting_couch.glb', function(gltf) {
        const couch2 = gltf.scene;
        couch2.scale.set(-1, 1, -1);
        couch2.position.set(4.3, 0, 9.5);
        scene.add(couch2);
        couch2.rotation.y = THREE.MathUtils.degToRad(-2);
    });

    loader.load('models/corridor/waiting_couch.glb', function(gltf) {
        const couch3 = gltf.scene;
        couch3.scale.set(-1, 1, -1);
        couch3.position.set(0, 0, -24.3);
        scene.add(couch3);
        couch3.rotation.y = THREE.MathUtils.degToRad(88);
    });

    loader.load('models/surgicalRoom/hand_sanitizer.glb', function(gltf) {
        const hand_sanitizer_1 = gltf.scene;
        hand_sanitizer_1.scale.set(0.5, 0.5, -0.5);
        hand_sanitizer_1.position.set(-5.3, 2.5, 10.5);
        scene.add(hand_sanitizer_1);
        hand_sanitizer_1.rotation.y = THREE.MathUtils.degToRad(-90);
    });

    loader.load('models/surgicalRoom/hand_sanitizer.glb', function(gltf) {
        const hand_sanitizer_2 = gltf.scene;
        hand_sanitizer_2.scale.set(0.5, 0.5, -0.5);
        hand_sanitizer_2.position.set(-5.3, 2.5, -8);
        scene.add(hand_sanitizer_2);
        hand_sanitizer_2.rotation.y = THREE.MathUtils.degToRad(-90);
    });

    loader.load('models/surgicalRoom/hand_sanitizer.glb', function(gltf) {
        const hand_sanitizer_3 = gltf.scene;
        hand_sanitizer_3.scale.set(0.5, 0.5, -0.5);
        hand_sanitizer_3.position.set(-5.3, 2.5, -19.8);
        scene.add(hand_sanitizer_3);
        hand_sanitizer_3.rotation.y = THREE.MathUtils.degToRad(-90);
    });

    loader.load('models/surgicalRoom/hand_sanitizer.glb', function(gltf) {
        const hand_sanitizer_4 = gltf.scene;
        hand_sanitizer_4.scale.set(0.5, 0.5, -0.5);
        hand_sanitizer_4.position.set(5.3, 2.5, -16);
        scene.add(hand_sanitizer_4);
        hand_sanitizer_4.rotation.y = THREE.MathUtils.degToRad(90);
    });

    loader.load('models/surgicalRoom/hand_sanitizer.glb', function(gltf) {
        const hand_sanitizer_5 = gltf.scene;
        hand_sanitizer_5.scale.set(0.5, 0.5, -0.5);
        hand_sanitizer_5.position.set(5.3, 2.5, -4.5);
        scene.add(hand_sanitizer_5);
        hand_sanitizer_5.rotation.y = THREE.MathUtils.degToRad(90);
    });

    loader.load('models/surgicalRoom/hand_sanitizer.glb', function(gltf) {
        const hand_sanitizer_6 = gltf.scene;
        hand_sanitizer_6.scale.set(0.5, 0.5, -0.5);
        hand_sanitizer_6.position.set(5.3, 2.5, 15);
        scene.add(hand_sanitizer_6);
        hand_sanitizer_6.rotation.y = THREE.MathUtils.degToRad(90);
    });

    loader.load('models/corridor/room1.glb', function(gltf) {
        const hand_sanitizer_6 = gltf.scene;
        hand_sanitizer_6.scale.set(-2, 2, -2);
        hand_sanitizer_6.position.set(4.9, 6.1, -6.3);
        scene.add(hand_sanitizer_6);
        hand_sanitizer_6.rotation.y = THREE.MathUtils.degToRad(90);
    });

    loader.load('models/reception/plant.glb', function(gltf) {
        const plant1 = gltf.scene;
        plant1.scale.set(4, 4, -4);
        plant1.position.set(-5.2, 0, 24);
        scene.add(plant1);
    });

    loader.load('models/reception/plant.glb', function(gltf) {
        const plant2 = gltf.scene;
        plant2.scale.set(4, 4, -4);
        plant2.position.set(-5.2, 0, -24);
        scene.add(plant2);
    });
}
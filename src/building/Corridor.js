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

    // Trocar mesa por mesa da Rest Room
    loader.load('models/corridor/small_table.glb', function(gltf) {
        const small_table = gltf.scene;
        small_table.scale.set(2.5, 2.5, 2.5);
        small_table.position.set(3.5, 0, 5.5);
        scene.add(small_table);
        small_table.rotation.y = THREE.MathUtils.degToRad(90);
    });

    loader.load('models/corridor/waiting_couch.glb', function(gltf) {
        const couch3 = gltf.scene;
        couch3.scale.set(1, 1, 1);
        couch3.position.set(-4.3, 0, -12.5);
        scene.add(couch3);
        couch3.rotation.y = THREE.MathUtils.degToRad(-2);
    });

    loader.load('models/corridor/waiting_couch.glb', function(gltf) {
        const couch4 = gltf.scene;
        couch4.scale.set(1, 1, 1);
        couch4.position.set(-4.3, 0, 19.5);
        scene.add(couch4);
        couch4.rotation.y = THREE.MathUtils.degToRad(-2);
    });

    loader.load('models/corridor/waiting_couch.glb', function(gltf) {
        const couch5 = gltf.scene;
        couch5.scale.set(1, 1, 1);
        couch5.position.set(-4.3, 0, 5.7);
        scene.add(couch5);
        couch5.rotation.y = THREE.MathUtils.degToRad(-2);
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

    loader.load('models/reception/plant.glb', function(gltf) {
        const plant3 = gltf.scene;
        plant3.scale.set(-4, 4, -4);
        plant3.position.set(5.2, 0, 24);
        scene.add(plant3);
    });

    loader.load('models/reception/plant.glb', function(gltf) {
        const plant4 = gltf.scene;
        plant4.scale.set(-4, 4, -4);
        plant4.position.set(5.2, 0, -24);
        scene.add(plant4);
    });


    loader.load('models/corridor/room_plate1.glb', function(gltf) {
        const room_sign_1 = gltf.scene;
        room_sign_1.scale.set(5, 5, 5);
        room_sign_1.position.set(-4.9, 6.1, -10.7);
        scene.add(room_sign_1);
        room_sign_1.rotation.y = THREE.MathUtils.degToRad(90);
    });

    loader.load('models/corridor/room_plate2.glb', function(gltf) {
        const room_sign_2 = gltf.scene;
        room_sign_2.scale.set(-5, 5, -5);
        room_sign_2.position.set(4.9, 6.1, -1.7);
        scene.add(room_sign_2);
        room_sign_2.rotation.y = THREE.MathUtils.degToRad(90);
    });

    loader.load('models/corridor/room_plate3.glb', function(gltf) {
        const room_sign_3 = gltf.scene;
        room_sign_3.scale.set(5, 5, 5);
        room_sign_3.position.set(-4.9, 6.1, -22.5);
        scene.add(room_sign_3);
        room_sign_3.rotation.y = THREE.MathUtils.degToRad(90);
    });

    loader.load('models/corridor/room_plate4.glb', function(gltf) {
        const room_sign_4 = gltf.scene;
        room_sign_4.scale.set(-5, 5, -5);
        room_sign_4.position.set(4.9, 6.1, -13.2);
        scene.add(room_sign_4);
        room_sign_4.rotation.y = THREE.MathUtils.degToRad(90);
    });

}
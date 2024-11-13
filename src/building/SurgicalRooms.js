import * as THREE from "three";

export function SurgicalRooms(scene, loader) {
    //Surgical Room 1

    //Surgical Room 2
    const directionalLightS2 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLightS2.position.set(16, 10, -6);

    scene.add(directionalLightS2);
    // Cabinets
    loader.load('models/surgicalRoom/cabinet.glb', function(gltf) {
        const cabinet = gltf.scene;
        cabinet.scale.set(0.35, 0.35, -0.15);
        cabinet.position.set(10.3, 0.35, -12);
        scene.add(cabinet);
    });

    loader.load('models/surgicalRoom/cabinet.glb', function(gltf) {
        const cabinet2 = gltf.scene;
        cabinet2.scale.set(0.35, 0.25, -0.15);
        cabinet2.position.set(8, 0.35, -12);
        scene.add(cabinet2);
    });

    loader.load('models/surgicalRoom/cabinet.glb', function(gltf) {
        const cabinet3 = gltf.scene;
        cabinet3.scale.set(0.35, 0.25, -0.15);
        cabinet3.position.set(12.6, 0.35, -12);
        scene.add(cabinet3);
    });

    loader.load('models/surgicalRoom/cabinet.glb', function(gltf) {
        const cabinet4 = gltf.scene;
        cabinet4.scale.set(0.35, 0.35, 0.15);
        cabinet4.position.set(17.3, 0.35, -0.5);
        scene.add(cabinet4);
    });

    loader.load('models/surgicalRoom/cabinet.glb', function(gltf) {
        const cabinet5 = gltf.scene;
        cabinet5.scale.set(0.35, 0.25, 0.15);
        cabinet5.position.set(15, 0.35, -0.3);
        scene.add(cabinet5);
    });

    loader.load('models/surgicalRoom/cabinet.glb', function(gltf) {
        const cabinet5 = gltf.scene;
        cabinet5.scale.set(0.35, 0.25, 0.15);
        cabinet5.position.set(19.6, 0.35, -0.3);
        scene.add(cabinet5);
    });

    loader.load('models/surgicalRoom/wall_cabinet.glb', function(gltf) {
        const wall_cabinet = gltf.scene;
        wall_cabinet.scale.set(0.45, 0.25, 0.08);
        wall_cabinet.position.set(24, 3.5, -5.8);
        scene.add(wall_cabinet);
        wall_cabinet.rotation.y = THREE.MathUtils.degToRad(90);
    });
    // Around the bed
    loader.load('models/surgicalRoom/surgical_bed.glb', function(gltf) {
        const cabinet3 = gltf.scene;
        cabinet3.scale.set(0.002, 0.002, 0.002);
        cabinet3.position.set(16, 0.35, -6);
        scene.add(cabinet3);
    });

    loader.load('models/surgicalRoom/instrument_table.glb', function(gltf) {
        const instrument_table = gltf.scene;
        instrument_table.scale.set(2, 2, 2);
        instrument_table.position.set(16, 0.1, -3.5);
        scene.add(instrument_table);
        instrument_table.rotation.y = THREE.MathUtils.degToRad(90);
    });

    loader.load('models/surgicalRoom/doctor_chair.glb', function(gltf) {
        const surgery_chair = gltf.scene;
        surgery_chair.scale.set(0.025, 0.025, 0.025);
        surgery_chair.position.set(16, 0.35, -4.2);
        scene.add(surgery_chair);
        surgery_chair.rotation.y = THREE.MathUtils.degToRad(15);
    });

    loader.load('models/surgicalRoom/hand_sanitizer.glb', function(gltf) {
        const hand_sanitizer = gltf.scene;
        hand_sanitizer.scale.set(0.5, 0.5, 0.5);
        hand_sanitizer.position.set(4.7, 2.5, -8.5);
        scene.add(hand_sanitizer);
        hand_sanitizer.rotation.y = THREE.MathUtils.degToRad(90);
    });
    // Lights
    /*
    loader.load('models/surgicalRoom/ceiling_lights.glb', function(gltf) {
        const ceiling_lights = gltf.scene;
        ceiling_lights.scale.set(3, 3, 3);
        ceiling_lights.position.set(9, 6, -9.5);
        scene.add(ceiling_lights);
    });

    loader.load('models/surgicalRoom/ceiling_lights.glb', function(gltf) {
        const ceiling_lights2 = gltf.scene;
        ceiling_lights2.scale.set(3, 3, 3);
        ceiling_lights2.position.set(15, 6, -9.5);
        scene.add(ceiling_lights2);
    });

    loader.load('models/surgicalRoom/ceiling_lights.glb', function(gltf) {
        const ceiling_lights3 = gltf.scene;
        ceiling_lights3.scale.set(3, 3, 3);
        ceiling_lights3.position.set(21, 6, -9.5);
        scene.add(ceiling_lights3);
    });

    loader.load('models/surgicalRoom/ceiling_lights.glb', function(gltf) {
        const ceiling_lights = gltf.scene;
        ceiling_lights.scale.set(3, 3, 3);
        ceiling_lights.position.set(9, 6, -3.5);
        scene.add(ceiling_lights);
    });

    loader.load('models/surgicalRoom/ceiling_lights.glb', function(gltf) {
        const ceiling_lights2 = gltf.scene;
        ceiling_lights2.scale.set(3, 3, 3);
        ceiling_lights2.position.set(15, 6, -3.5);
        scene.add(ceiling_lights2);
    });

    loader.load('models/surgicalRoom/ceiling_lights.glb', function(gltf) {
        const ceiling_lights3 = gltf.scene;
        ceiling_lights3.scale.set(3, 3, 3);
        ceiling_lights3.position.set(21, 6, -3.5);
        scene.add(ceiling_lights3);
    });
    */
    // Machines
    loader.load('models/surgicalRoom/operating_machine1.glb', function(gltf) {
        const operating_machine1 = gltf.scene;
        operating_machine1.scale.set(3, 3, 3);
        operating_machine1.position.set(19, 0.35, -8.7);
        scene.add(operating_machine1);
        operating_machine1.rotation.y = THREE.MathUtils.degToRad(-75);

    });

    //Surgical Room 3

    //Surgical Room 4

}
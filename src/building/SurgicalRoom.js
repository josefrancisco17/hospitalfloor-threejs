import * as THREE from "three";

export function SurgicalRoom(scene, loader) {

    const directionalLightS2 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLightS2.position.set(16, 10, -6);

    scene.add(directionalLightS2);

    loader.load('models/surgicalRoom/cabinet.glb', function(gltf) {
        const cabinet = gltf.scene;
        cabinet.scale.set(0.8, 0.20, -0.30);
        cabinet.position.set(-24, 0, -5.3);
        scene.add(cabinet);
        cabinet.rotation.y = THREE.MathUtils.degToRad(90);
    });

    loader.load('models/surgicalRoom/cabinets.glb', function(gltf) {
        const cabinet = gltf.scene;
        cabinet.scale.set(-3, 5, 3);
        cabinet.position.set(-12, 0, -12);
        scene.add(cabinet);
    });
    loader.load('models/surgicalRoom/cabinets.glb', function(gltf) {
        const cabinet = gltf.scene;
        cabinet.scale.set(3, 5, 3);
        cabinet.position.set(-14.1, 0, -12);
        scene.add(cabinet);
    });

    loader.load('models/surgicalRoom/wall_cabinet.glb', function(gltf) {
        const wall_cabinet = gltf.scene;
        wall_cabinet.scale.set(0.45, 0.25, -0.08);
        wall_cabinet.position.set(-24, 3.5, -6.3);
        scene.add(wall_cabinet);
        wall_cabinet.rotation.y = THREE.MathUtils.degToRad(90);
    });
    // Around the bed
    loader.load('models/surgicalRoom/operating_table.glb', function(gltf) {
        const operating_table = gltf.scene;
        operating_table.scale.set(0.2, 0.15, -0.2);
        operating_table.position.set(-16, 0, -6);
        scene.add(operating_table);
        operating_table.rotation.y = THREE.MathUtils.degToRad(270);
    });

    loader.load('models/surgicalRoom/instrument_table.glb', function(gltf) {
        const instrument_table = gltf.scene;
        instrument_table.scale.set(2, 2, -2);
        instrument_table.position.set(-16, 0, -2.5);
        scene.add(instrument_table);
        instrument_table.rotation.y = THREE.MathUtils.degToRad(90);
    });

    loader.load('models/surgicalRoom/doctor_chair.glb', function(gltf) {
        const surgery_chair = gltf.scene;
        surgery_chair.scale.set(0.025, 0.025, -0.025);
        surgery_chair.position.set(-16, 0, -8.4);
        scene.add(surgery_chair);
        surgery_chair.rotation.y = THREE.MathUtils.degToRad(15);
    });

    loader.load('models/surgicalRoom/hand_sanitizer.glb', function(gltf) {
        const hand_sanitizer = gltf.scene;
        hand_sanitizer.scale.set(0.5, 0.5, -0.5);
        hand_sanitizer.position.set(-4.7, 2.5, -8.5);
        scene.add(hand_sanitizer);
        hand_sanitizer.rotation.y = THREE.MathUtils.degToRad(90);
    });
    loader.load('models/surgicalRoom/operating_light.glb', function(gltf) {
        const operating_light = gltf.scene;
        operating_light.scale.set(-0.3, 0.2, 0.3);
        operating_light.position.set(-19, 4, -6.5);
        scene.add(operating_light);
        operating_light.rotation.y = THREE.MathUtils.degToRad(-15);
    });

    loader.load('models/surgicalRoom/operating_machine.glb', function(gltf) {
        const operating_machine1 = gltf.scene;
        operating_machine1.scale.set(3, 3, -3);
        operating_machine1.position.set(-19, 0, -8.7);
        scene.add(operating_machine1);
        operating_machine1.rotation.y = THREE.MathUtils.degToRad(230);

    });

    //Surgical Room 2

    loader.load('models/surgicalRoom/cabinet.glb', function(gltf) {
        const cabinet = gltf.scene;
        cabinet.scale.set(0.8, 0.20, 0.30);
        cabinet.position.set(24, 0, -4.8);
        scene.add(cabinet);
        cabinet.rotation.y = THREE.MathUtils.degToRad(90);
    });

    loader.load('models/surgicalRoom/cabinets.glb', function(gltf) {
        const cabinet = gltf.scene;
        cabinet.scale.set(-3, 5, 3);
        cabinet.position.set(12, 0, -12);
        scene.add(cabinet);
    });
    loader.load('models/surgicalRoom/cabinets.glb', function(gltf) {
        const cabinet = gltf.scene;
        cabinet.scale.set(3, 5, 3);
        cabinet.position.set(14.1, 0, -12);
        scene.add(cabinet);
    });

    loader.load('models/surgicalRoom/wall_cabinet.glb', function(gltf) {
        const wall_cabinet = gltf.scene;
        wall_cabinet.scale.set(0.45, 0.25, 0.08);
        wall_cabinet.position.set(24, 3.5, -5.8);
        scene.add(wall_cabinet);
        wall_cabinet.rotation.y = THREE.MathUtils.degToRad(90);
    });
    // Around the bed
    loader.load('models/surgicalRoom/operating_table.glb', function(gltf) {
        const operating_table = gltf.scene;
        operating_table.scale.set(0.2, 0.15, 0.2);
        operating_table.position.set(16, 0, -6);
        scene.add(operating_table);
        operating_table.rotation.y = THREE.MathUtils.degToRad(270);
    });

    loader.load('models/surgicalRoom/instrument_table.glb', function(gltf) {
        const instrument_table = gltf.scene;
        instrument_table.scale.set(2, 2, 2);
        instrument_table.position.set(16, 0, -2.5);
        scene.add(instrument_table);
        instrument_table.rotation.y = THREE.MathUtils.degToRad(90);
    });

    loader.load('models/surgicalRoom/doctor_chair.glb', function(gltf) {
        const surgery_chair = gltf.scene;
        surgery_chair.scale.set(0.025, 0.025, 0.025);
        surgery_chair.position.set(16, 0, -8.4);
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
    loader.load('models/surgicalRoom/operating_light.glb', function(gltf) {
        const operating_light = gltf.scene;
        operating_light.scale.set(0.3, 0.2, -0.3);
        operating_light.position.set(19, 4, -6.5);
        scene.add(operating_light);
        operating_light.rotation.y = THREE.MathUtils.degToRad(-15);
    });

    loader.load('models/surgicalRoom/operating_machine.glb', function(gltf) {
        const operating_machine1 = gltf.scene;
        operating_machine1.scale.set(3, 3, 3);
        operating_machine1.position.set(19, 0, -8.7);
        scene.add(operating_machine1);
        operating_machine1.rotation.y = THREE.MathUtils.degToRad(-75);

    });

    //Surgical Room 3
    loader.load('models/surgicalRoom/cabinet.glb', function(gltf) {
        const cabinet = gltf.scene;
        cabinet.scale.set(0.8, 0.20, -0.30);
        cabinet.position.set(-24, 0, -17.8);
        scene.add(cabinet);
        cabinet.rotation.y = THREE.MathUtils.degToRad(90);
    });

    loader.load('models/surgicalRoom/cabinets.glb', function(gltf) {
        const cabinet = gltf.scene;
        cabinet.scale.set(-3, 5, 3);
        cabinet.position.set(-12, 0, -24.5);
        scene.add(cabinet);
    });
    loader.load('models/surgicalRoom/cabinets.glb', function(gltf) {
        const cabinet = gltf.scene;
        cabinet.scale.set(3, 5, 3);
        cabinet.position.set(-14.1, 0, -24.5);
        scene.add(cabinet);
    });

    loader.load('models/surgicalRoom/wall_cabinet.glb', function(gltf) {
        const wall_cabinet = gltf.scene;
        wall_cabinet.scale.set(0.45, 0.25, -0.08);
        wall_cabinet.position.set(-24, 3.5, -18.8);
        scene.add(wall_cabinet);
        wall_cabinet.rotation.y = THREE.MathUtils.degToRad(90);
    });
    // Around the bed
    loader.load('models/surgicalRoom/operating_table.glb', function(gltf) {
        const operating_table = gltf.scene;
        operating_table.scale.set(0.2, 0.15, -0.2);
        operating_table.position.set(-16, 0, -18.5);
        scene.add(operating_table);
        operating_table.rotation.y = THREE.MathUtils.degToRad(270);
    });

    loader.load('models/surgicalRoom/instrument_table.glb', function(gltf) {
        const instrument_table = gltf.scene;
        instrument_table.scale.set(2, 2, -2);
        instrument_table.position.set(-16, 0, -15);
        scene.add(instrument_table);
        instrument_table.rotation.y = THREE.MathUtils.degToRad(90);
    });

    loader.load('models/surgicalRoom/doctor_chair.glb', function(gltf) {
        const surgery_chair = gltf.scene;
        surgery_chair.scale.set(0.025, 0.025, -0.025);
        surgery_chair.position.set(-16, 0, -21);
        scene.add(surgery_chair);
        surgery_chair.rotation.y = THREE.MathUtils.degToRad(15);
    });

    loader.load('models/surgicalRoom/hand_sanitizer.glb', function(gltf) {
        const hand_sanitizer = gltf.scene;
        hand_sanitizer.scale.set(0.5, 0.5, -0.5);
        hand_sanitizer.position.set(-4.7, 2.5, -21);
        scene.add(hand_sanitizer);
        hand_sanitizer.rotation.y = THREE.MathUtils.degToRad(90);
    });
    loader.load('models/surgicalRoom/operating_light.glb', function(gltf) {
        const operating_light = gltf.scene;
        operating_light.scale.set(-0.3, 0.2, 0.3);
        operating_light.position.set(-19, 4, -19);
        scene.add(operating_light);
        operating_light.rotation.y = THREE.MathUtils.degToRad(-15);
    });

    loader.load('models/surgicalRoom/operating_machine.glb', function(gltf) {
        const operating_machine1 = gltf.scene;
        operating_machine1.scale.set(3, 3, -3);
        operating_machine1.position.set(-19, 0, -21);
        scene.add(operating_machine1);
        operating_machine1.rotation.y = THREE.MathUtils.degToRad(230);

    });

    //Surgical Room 4

    loader.load('models/surgicalRoom/cabinet.glb', function(gltf) {
        const cabinet = gltf.scene;
        cabinet.scale.set(0.8, 0.20, 0.30);
        cabinet.position.set(24, 0, -17.3);
        scene.add(cabinet);
        cabinet.rotation.y = THREE.MathUtils.degToRad(90);
    });

    loader.load('models/surgicalRoom/cabinets.glb', function(gltf) {
        const cabinet = gltf.scene;
        cabinet.scale.set(-3, 5, 3);
        cabinet.position.set(12, 0, -24.5);
        scene.add(cabinet);
    });
    loader.load('models/surgicalRoom/cabinets.glb', function(gltf) {
        const cabinet = gltf.scene;
        cabinet.scale.set(3, 5, 3);
        cabinet.position.set(14.1, 0, -24.5);
        scene.add(cabinet);
    });

    loader.load('models/surgicalRoom/wall_cabinet.glb', function(gltf) {
        const wall_cabinet = gltf.scene;
        wall_cabinet.scale.set(0.45, 0.25, 0.08);
        wall_cabinet.position.set(24, 3.5, -18.3);
        scene.add(wall_cabinet);
        wall_cabinet.rotation.y = THREE.MathUtils.degToRad(90);
    });
    // Around the bed
    loader.load('models/surgicalRoom/operating_table.glb', function(gltf) {
        const operating_table = gltf.scene;
        operating_table.scale.set(0.2, 0.15, 0.2);
        operating_table.position.set(16, 0, -18.5);
        scene.add(operating_table);
        operating_table.rotation.y = THREE.MathUtils.degToRad(270);
    });

    loader.load('models/surgicalRoom/instrument_table.glb', function(gltf) {
        const instrument_table = gltf.scene;
        instrument_table.scale.set(2, 2, 2);
        instrument_table.position.set(16, 0, -15);
        scene.add(instrument_table);
        instrument_table.rotation.y = THREE.MathUtils.degToRad(90);
    });

    loader.load('models/surgicalRoom/doctor_chair.glb', function(gltf) {
        const surgery_chair = gltf.scene;
        surgery_chair.scale.set(0.025, 0.025, 0.025);
        surgery_chair.position.set(16, 0, -21);
        scene.add(surgery_chair);
        surgery_chair.rotation.y = THREE.MathUtils.degToRad(15);
    });

    loader.load('models/surgicalRoom/hand_sanitizer.glb', function(gltf) {
        const hand_sanitizer = gltf.scene;
        hand_sanitizer.scale.set(0.5, 0.5, 0.5);
        hand_sanitizer.position.set(4.7, 2.5, -21);
        scene.add(hand_sanitizer);
        hand_sanitizer.rotation.y = THREE.MathUtils.degToRad(90);
    });
    loader.load('models/surgicalRoom/operating_light.glb', function(gltf) {
        const operating_light = gltf.scene;
        operating_light.scale.set(0.3, 0.2, -0.3);
        operating_light.position.set(19, 4, -19);
        scene.add(operating_light);
        operating_light.rotation.y = THREE.MathUtils.degToRad(-15);
    });

    loader.load('models/surgicalRoom/operating_machine.glb', function(gltf) {
        const operating_machine1 = gltf.scene;
        operating_machine1.scale.set(3, 3, 3);
        operating_machine1.position.set(19, 0, -21.2);
        scene.add(operating_machine1);
        operating_machine1.rotation.y = THREE.MathUtils.degToRad(-75);

    });
}

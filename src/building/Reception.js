import * as THREE from "three";

export function Reception(scene, loader) {
    loader.load('models/reception/ReceptionDesk.glb', function(gltf) {
        const receptionDesk = gltf.scene;
        receptionDesk.scale.set(3, 3, 3);
        receptionDesk.position.set(8.19,0.01,2);
        scene.add(receptionDesk);
    });

    loader.load('models/reception/ReceptionDesk2.glb', function(gltf) {
        const receptionDesk2 = gltf.scene;
        receptionDesk2.scale.set(3, 3, 3);
        receptionDesk2.position.set(24.7, 0.01,2);
        scene.add(receptionDesk2);
    });

    loader.load('models/reception/ReceptionDesk3.glb', function(gltf) {
        const receptionDesk3 = gltf.scene;
        receptionDesk3.scale.set(3.65, 3, 3);
        receptionDesk3.position.set(42.35, 0.01,19.3);
        scene.add(receptionDesk3);
    });

    loader.load('models/reception/chair.glb', function(gltf) {
        const chair = gltf.scene;
        chair.scale.set(0.03, 0.03, 0.03);
        chair.position.set(8.5, 0 , 2);
        chair.rotation.y = THREE.MathUtils.degToRad(15);
        scene.add(chair);
    });

    loader.load('models/reception/chair.glb', function(gltf) {
        const chair = gltf.scene;
        chair.scale.set(0.03, 0.03, 0.03);
        chair.position.set(21, 0 , 2);
        chair.rotation.y = THREE.MathUtils.degToRad(-45);
        scene.add(chair);
    });

    loader.load('models/reception/Tv.glb', function(gltf) {
        const tv = gltf.scene;
        tv.scale.set(3, 3, 3);
        tv.position.set(9.6, 4.5 ,9.65);
        tv.rotation.y = THREE.MathUtils.degToRad(90);
        scene.add(tv);
    });

    loader.load('models/reception/Tv.glb', function(gltf) {
        const tv = gltf.scene;
        tv.scale.set(3, 3, 3);
        tv.position.set(20.4, 4.5 ,9.65);
        tv.rotation.y = THREE.MathUtils.degToRad(-90);
        scene.add(tv);
    });

    loader.load('models/reception/ticket.glb', function(gltf) {
        const ticket = gltf.scene;
        ticket.scale.set(3, 3, 3);
        ticket.position.set(11, 0.02,6);
        ticket.rotation.y = Math.PI / 2;
        scene.add(ticket);
    });

    loader.load('models/reception/ticket.glb', function(gltf) {
        const ticket = gltf.scene;
        ticket.scale.set(3, 3, 3);
        ticket.position.set(11, 0.02,8);
        ticket.rotation.y = Math.PI / 2;
        scene.add(ticket);
    });

    loader.load('models/reception/waitingBench.glb', function(gltf) {
        const waitingBench = gltf.scene;
        waitingBench.scale.set(4, 4, -4);
        waitingBench.position.set(18.8, 0.01,14);
        scene.add(waitingBench);
    });

    loader.load('models/reception/waitingBench.glb', function(gltf) {
        const waitingBench = gltf.scene;
        waitingBench.scale.set(4, 4, -4);
        waitingBench.position.set(18.8, 0.01,6.2);
        scene.add(waitingBench);
    });

    loader.load('models/reception/waitingBench.glb', function(gltf) {
        const waitingBench = gltf.scene;
        waitingBench.scale.set(4, 4, 4);
        waitingBench.position.set(18.8, 0.01,17);
        scene.add(waitingBench);
    });

    loader.load('models/reception/waitingBench.glb', function(gltf) {
        const waitingBench = gltf.scene;
        waitingBench.scale.set(4, 4, 4);
        waitingBench.position.set(18.8, 0.01,24.8);
        scene.add(waitingBench);
    });

    loader.load('models/reception/plant.glb', function(gltf) {
        const plant = gltf.scene;
        plant.scale.set(4, 4, 4);
        plant.position.set(5, 0.01, 14);
        scene.add(plant);
    });

    loader.load('models/reception/plant.glb', function(gltf) {
        const plant = gltf.scene;
        plant.scale.set(4, 4, 4);
        plant.position.set(23, 0.01, 14);
        scene.add(plant);
    });

    loader.load('models/reception/painting_tree.glb', function(gltf) {
        const plant = gltf.scene;
        plant.scale.set(2, 2, 2);
        plant.position.set(16, 4.5, 0.3);
        scene.add(plant);
    });

    loader.load('models/reception/soda_machine.glb', function(gltf) {
        const plant = gltf.scene;
        plant.scale.set(2, 2.5, 2);
        plant.position.set(8, 0, 24);
        scene.add(plant);
    });

    loader.load('models/reception/atm.glb', function(gltf) {
        const plant = gltf.scene;
        plant.scale.set(0.35, 0.35, 0.35);
        plant.position.set(23, 2, 24);
        scene.add(plant);
    });
}

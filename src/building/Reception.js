import * as THREE from "three";

export function Reception(scene, loader) {
    //Reception Room
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    hemisphereLight.position.set(0, 10, 0);
    scene.add(hemisphereLight);


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

    loader.load('models/reception/Tv.glb', function(gltf) {
        const tv = gltf.scene;
        tv.scale.set(6, 6, 6);
        tv.position.set(15.5, 2,9.2);
        scene.add(tv);
    });

    loader.load('models/reception/ticket.glb', function(gltf) {
        const ticket = gltf.scene;
        ticket.scale.set(3, 3, 3);
        ticket.position.set(11, 0.01,6);
        ticket.rotation.y = Math.PI / 2;
        scene.add(ticket);
    });

    loader.load('models/reception/ticket2.glb', function(gltf) {
        const ticket2 = gltf.scene;
        ticket2.scale.set(3, 3, 3);
        ticket2.position.set(11, 0.01,8);
        ticket2.rotation.y = Math.PI / 2;
        scene.add(ticket2);
    });

    loader.load('models/reception/waitingBench.glb', function(gltf) {
        const waitingBench = gltf.scene;
        waitingBench.scale.set(4, 4, 4);
        waitingBench.position.set(18.8, 0.01,25);
        scene.add(waitingBench);
    });

    loader.load('models/reception/waitingBench2.glb', function(gltf) {
        const waitingBench2 = gltf.scene;
        waitingBench2.scale.set(4, 4, 4);
        waitingBench2.position.set(18.8, 0.01,21);
        scene.add(waitingBench2);
    });

    loader.load('models/reception/waitingBench3.glb', function(gltf) {
        const waitingBench3 = gltf.scene;
        waitingBench3.scale.set(4, 4, 4);
        waitingBench3.position.set(18.8, 0.01,17);
        scene.add(waitingBench3);
    });

    loader.load('models/reception/plant.glb', function(gltf) {
        const plant = gltf.scene;
        plant.scale.set(4, 4, 4);
        plant.position.set(5, 0.01,14);
        scene.add(plant);
    });

    loader.load('models/reception/plant2.glb', function(gltf) {
        const plant2 = gltf.scene;
        plant2.scale.set(4, 4, 4);
        plant2.position.set(23, 0.01,7);
        scene.add(plant2);
    });
}

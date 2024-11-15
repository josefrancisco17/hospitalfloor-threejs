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
}
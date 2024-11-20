import * as THREE from "three";

export function RestRoom(scene, loader) {
    //Rest Room
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);

    scene.add(directionalLight);

    loader.load('models/restRoom/bed.glb', function(gltf) {
        const bed = gltf.scene;
        bed.position.set(-10,0.1,0.15);
        bed.scale.set(15,15,15);
        bed.rotation.y = THREE.MathUtils.degToRad(-90);
        scene.add(bed);
    });

    loader.load('models/restRoom/bed.glb', function(gltf) {
        const bed = gltf.scene;
        bed.position.set(-20,0.1,0.15);
        bed.scale.set(15,15,15);
        bed.rotation.y = THREE.MathUtils.degToRad(-90);
        scene.add(bed);
    });

    loader.load('models/restRoom/bed.glb', function(gltf) {
        const bed = gltf.scene;
        bed.position.set(-10,0.1,24.85);
        bed.scale.set(15,15,15);
        bed.rotation.y = THREE.MathUtils.degToRad(-270);
        scene.add(bed);
    });

    loader.load('models/restRoom/bed.glb', function(gltf) {
        const bed = gltf.scene;
        bed.position.set(-20,0.1,24.85);
        bed.scale.set(15,15,15);
        bed.rotation.y = THREE.MathUtils.degToRad(-270);
        scene.add(bed);
    });

    loader.load('models/restRoom/wall.glb', function(gltf) {
        const bed = gltf.scene;
        bed.position.set(-15,0,-0.5);
        bed.scale.set(15,15,15);
        bed.rotation.y = THREE.MathUtils.degToRad(-180);
        scene.add(bed);
    });

    loader.load('models/restRoom/wall.glb', function(gltf) {
        const bed = gltf.scene;
        bed.position.set(-15,0,15.5);
        bed.scale.set(15,15,15);
        bed.rotation.y = THREE.MathUtils.degToRad(-180);
        scene.add(bed);
    });

    loader.load('models/restRoom/sofa.glb', function(gltf) {
        const sofa = gltf.scene;
        sofa.position.set(-24.4,0,12);
        sofa.scale.set(15,15,15);
        scene.add(sofa);
    });
}
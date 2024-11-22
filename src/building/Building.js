import * as THREE from "three";
import config from "../config.json";

export function Building(scene, loader) {

    const wallHeight = config.wallHeight;
    const wallDepth = config.wallDepth;

    //create meshes
    function createFloor(width, depth, floorTexture, x, y, z) {
        const textureLoader = new THREE.TextureLoader();
        const baseTexture = textureLoader.load(floorTexture);

        baseTexture.wrapS = baseTexture.wrapT = THREE.RepeatWrapping;
        baseTexture.repeat.set(4, 4);
        baseTexture.anisotropy = 16;

        const floorMaterial = new THREE.MeshStandardMaterial({
            map: baseTexture,
            roughness: 0.65,
            metalness: 0.25,
            envMapIntensity: 1,
            side: THREE.DoubleSide
        });

        const floorGeometry = new THREE.PlaneGeometry(width, depth);
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        floor.position.set(x, y, z); // Set the position
        floor.receiveShadow = true;
        scene.add(floor);
    }



    function createWall(width, height, depth, x, y, z) {
        const textureLoader = new THREE.TextureLoader();
        const baseTexture = textureLoader.load('/textures/building/wall/Plaster.jpg');

        baseTexture.wrapS = baseTexture.wrapT = THREE.RepeatWrapping;
        baseTexture.repeat.set(
            Math.max(1, width / 4),
            Math.max(1, height / 4)
        );
        baseTexture.anisotropy = 16;

        const wallMaterial = new THREE.MeshStandardMaterial({
            map: baseTexture,
            color: new THREE.Color(111/255, 111/255, 117/255),
            roughness: 0.65,
            metalness: 0.25,
            envMapIntensity: 1,
            side: THREE.DoubleSide
        });

        const wallGeometry = new THREE.BoxGeometry(width, height, depth);
        const wall = new THREE.Mesh(wallGeometry, wallMaterial);
        wall.position.set(x, y, z);
        wall.castShadow = true;
        wall.receiveShadow = true;
        scene.add(wall);
    }

    function createDoor( x, y, z, rotation) {
        loader.load('models/building/door.glb', function(gltf) {
            const door = gltf.scene;
            door.scale.set(15, 15, 15);
            door.position.set(x,y,z);
            door.rotation.y = THREE.MathUtils.degToRad(rotation);
            scene.add(door);
        });
    }

    function createMirrorDoor( x, y, z, rotation) {
        loader.load('models/building/mirrorDoor.glb', function(gltf) {
            const mirrorDoor = gltf.scene;
            mirrorDoor.scale.set(15, 15, 15);
            mirrorDoor.position.set(x,y,z);
            mirrorDoor.rotation.y = THREE.MathUtils.degToRad(rotation);
            scene.add(mirrorDoor);
        });
    }



    function createWindow(x, y, z) {
        loader.load('models/building/window.glb', function(gltf) {
            const window = gltf.scene;
            window.scale.set(0.058, 0.042, 0.04);
            window.position.set(x, y, z);
            window.rotation.y = THREE.MathUtils.degToRad(90);
            scene.add(window);
        });
    }

    //Exterior Walls
    createWindow(-25,3.1,12)
    createWall(50, wallHeight, wallDepth, 0, wallHeight / 2, -25);
    createWall(50, wallHeight, wallDepth, 0, wallHeight / 2, 25);
    createWall(wallDepth, wallHeight, 34.5, -25, wallHeight / 2, -7.85);
    createWall(wallDepth, wallHeight, 10.5, -25, wallHeight / 2, 19.8);
    createWall(wallDepth, 1, 15, -25, 7 , 12.5)
    createWall(wallDepth, 3, 25, -25, 1.5 , 4)
    createWall(wallDepth, wallHeight, 41.2, 25, wallHeight / 2, -4.4);
    createWall(wallDepth, wallHeight, 4, 25, wallHeight / 2, 23);
    createWall(wallDepth, 2, 19, 25, 6.5 , 14)
    createDoor(25.4, 0 , 17.4,0)
    createMirrorDoor(25.4, 0 , 22.2,0)

    //Interior Walls SR1
    createDoor(  4.6, 0 , -6.2, 180)
    createWall(wallDepth, 2, 5, 5, 6.5 , -6.2)
    createWall(wallDepth, wallHeight, 5.2, 5, wallHeight / 2, -10)
    createWall(wallDepth, wallHeight, 5.25, 5, wallHeight / 2, -2.33)
    createWall(20, wallHeight, wallDepth, 15, wallHeight / 2, 0);

    //Interior Walls SR2
    createDoor(  -4.6, 0 , -6.2, 0)
    createWall(wallDepth, 2, 5, -5, 6.5 , -6.2)
    createWall(wallDepth, wallHeight, 5.2, -5, wallHeight / 2, -10)
    createWall(wallDepth, wallHeight, 5.2, -5, wallHeight / 2, -2.4)
    createWall(20, wallHeight, wallDepth, -15, wallHeight / 2, 0);

    //Interior Walls SR3
    createDoor(  4.6, 0 , -17.9, 180)
    createWall(wallDepth, 2, 5, 5, 6.5 , -18)
    createWall(wallDepth, wallHeight, 6, 5, wallHeight / 2, -22.1)
    createWall(wallDepth, wallHeight, 5, 5, wallHeight / 2, -14.25)
    createWall(20, wallHeight, wallDepth, 15, wallHeight / 2, -12.5);

    //Interior Walls SR4
    createDoor(  -4.6, 0 , -17.9, 0)
    createWall(wallDepth, 2, 5, -5, 6.5 , -18)
    createWall(wallDepth, wallHeight, 6, -5, wallHeight / 2, -22.1)
    createWall(wallDepth, wallHeight, 5, -5, wallHeight / 2, -14.25)
    createWall(20, wallHeight, wallDepth, -15, wallHeight / 2, -12.5);

    //Rest Room
    createWindow(-5,3.1,5.7)
    createWindow(-5,3.1,19.4)
    createDoor(  -4.6, 0 , 12.5,0)
    createWall(wallDepth, 1, 25, -5, 7 , 12.5)
    createWall(wallDepth, 1, 5, -5, 6 , 12.5)
    createWall(wallDepth, 3, 14.55, -5, 1.5 , 4)
    createWall(wallDepth, 3, 11.3, -5, 1.5 , 19.3)
    createWall(wallDepth, wallHeight, 3, -5, wallHeight / 2, 23.5)
    createWall(wallDepth, wallHeight, 3, -5, wallHeight / 2, 15.17)
    createWall(wallDepth, wallHeight, 3, -5, wallHeight / 2, 1.6)
    createWall(wallDepth, wallHeight, 3, -5, wallHeight / 2, 9.77)


    //Reception Room
    createDoor(4.6, 0 , 19.85,180)
    createMirrorDoor(4.6, 0 , 15.04,180)
    createDoor(4.6, 0 , 1.5,180)
    createWall(wallDepth, 2, 19, 5, 6.5 , 14)
    createWall(wallDepth, 2, 5, 5, 6.5 , 1.5)
    createWall(wallDepth, wallHeight, 4, 5, wallHeight / 2, 23)
    createWall(wallDepth, wallHeight, 13.5, 5, wallHeight / 2, 9.45)

    //Floor
    createFloor(20,25, '/textures/building/floor/wood-floor.jpg', 15, 0, 12.5)
    createFloor(20,25, '/textures/building/floor/wood-floor.jpg', -15, 0, 12.5)
    createFloor(10,10, '/textures/building/floor/tezaro.jpg', 0, 0, 20)
    createFloor(10,10, '/textures/building/floor/tezaro.jpg', 0, 0, 10)
    createFloor(10,10, '/textures/building/floor/tezaro.jpg', 0, 0, 0)
    createFloor(10,10, '/textures/building/floor/tezaro.jpg', 0, 0, -10)
    createFloor(10,10, '/textures/building/floor/tezaro.jpg', 0, 0, -20)
    createFloor(20,25, '/textures/building/floor/plastic_blue.jpg', 15, 0, -12.5)
    createFloor(20,25, '/textures/building/floor/plastic_blue.jpg', -15, 0, -12.5)
}
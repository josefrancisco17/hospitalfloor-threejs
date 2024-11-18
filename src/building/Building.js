import * as THREE from "three";

export function Building(scene, loader) {
    //create meshes
    function createFloor(width, depth) {
        const textureLoader = new THREE.TextureLoader();
        const baseTexture = textureLoader.load('/textures/building/floor/white-brick.png');

        baseTexture.wrapS = baseTexture.wrapT = THREE.RepeatWrapping;
        baseTexture.repeat.set(8, 8);
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
        floor.receiveShadow = true;
        scene.add(floor);
    }

    function createWall(width, height, depth, x, y, z) {
        const textureLoader = new THREE.TextureLoader();
        const baseTexture = textureLoader.load('/textures/building/wall/Plaster1K.jpg');

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

    function createAutomaticDoor( x, y, z, rotation) {
        loader.load('models/building/automaticDoor.glb', function(gltf) {
            const door = gltf.scene;
            door.scale.set(0.0259, 0.0259, 0.0259);
            door.position.set(x,y,z);
            door.rotation.y = THREE.MathUtils.degToRad(rotation);
            scene.add(door);
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

    const wallHeight = 7.5;

    //Exterior Walls
    createWall(50, wallHeight, 0.2, 0, wallHeight / 2, -25);
    createWall(50, wallHeight, 0.2, 0, wallHeight / 2, 25);
    createWall(0.2, wallHeight, 50, -25, wallHeight / 2, 0);
    createWall(0.2, wallHeight, 40, 25, wallHeight / 2, -5);
    createWall(0.2, wallHeight, 2, 25, wallHeight / 2, 24);

    //Interior Walls SR1
    createDoor(  -4.6, 0 , -6.2, 0)
    createWall(0.2, 2, 5, -5, 6.5 , -6.2)
    createWall(0.2, wallHeight, 5.2, -5, wallHeight / 2, -10)
    createWall(0.2, wallHeight, 5, -5, wallHeight / 2, -2.5)
    createWall(20, wallHeight, 0.2, -15, wallHeight / 2, 0);

    //Interior Walls SR2
    createDoor(  4.6, 0 , -6.2, 180)
    createWall(0.2, 2, 5, 5, 6.5 , -6.2)
    createWall(0.2, wallHeight, 5.2, 5, wallHeight / 2, -10)
    createWall(0.2, wallHeight, 5, 5, wallHeight / 2, -2.5)
    createWall(20, wallHeight, 0.2, 15, wallHeight / 2, 0);

    //Interior Walls SR3
    createDoor(  -4.6, 0 , -17.9, 0)
    createWall(0.2, 2, 5, -5, 6.5 , -18)
    createWall(0.2, wallHeight, 6, -5, wallHeight / 2, -22.1)
    createWall(0.2, wallHeight, 5, -5, wallHeight / 2, -14.25)
    createWall(20, wallHeight, 0.2, -15, wallHeight / 2, -12.5);

    //Interior Walls SR4
    createDoor(  4.6, 0 , -17.9, 180)
    createWall(0.2, 2, 5, 5, 6.5 , -18)
    createWall(0.2, wallHeight, 6, 5, wallHeight / 2, -22.1)
    createWall(0.2, wallHeight, 5, 5, wallHeight / 2, -14.25)
    createWall(20, wallHeight, 0.2, 15, wallHeight / 2, -12.5);

    //Rest Room
    createWindow(-5,3.1,5.7)
    createWindow(-5,3.1,19.4)
    createDoor(  -4.6, 0 , 12.5,0)
    createWall(0.2, 1, 25, -5, 7 , 12.5)
    createWall(0.2, 1, 5, -5, 6 , 12.5)
    createWall(0.2, 4, 14.55, -5, 1 , 4)
    createWall(0.2, 4, 11.3, -5, 1 , 19.3)
    createWall(0.2, wallHeight, 3, -5, wallHeight / 2, 23.5)
    createWall(0.2, wallHeight, 3, -5, wallHeight / 2, 15.17)
    createWall(0.2, wallHeight, 3, -5, wallHeight / 2, 1.6)
    createWall(0.2, wallHeight, 3, -5, wallHeight / 2, 9.77)


    //Reception Room
    createAutomaticDoor(  4.8, 0 , 19,90)
    createAutomaticDoor(  24.8, 0 , 19,90)
    createWall(0.2, wallHeight, 2.5, 5, wallHeight / 2, 23.75)
    createWall(0.2, wallHeight, 17.5, 5, wallHeight / 2, 7.5)

    createFloor(50,50)
}
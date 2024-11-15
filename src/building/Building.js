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

    function createDoor( x, y, z) {
        loader.load('models/building/door.glb', function(gltf) {
            const door = gltf.scene;
            door.scale.set(15, 15, 15);
            door.position.set(x,y,z);
            scene.add(door);
        });
    }

    const wallHeight = 7.5;

    //Exterior Walls
    createWall(50, wallHeight, 0.2, 0, wallHeight / 2, -25);
    createWall(50, wallHeight, 0.2, 0, wallHeight / 2, 25);
    createWall(0.2, wallHeight, 50, -25, wallHeight / 2, 0);
    createWall(0.2, wallHeight, 50, 25, wallHeight / 2, 0);

    //Interior Walls SR1
    createWall(0.2, wallHeight, 5, -5, wallHeight / 2, -10)
    createWall(0.2, wallHeight, 5, -5, wallHeight / 2, -2.5)
    createWall(20, wallHeight, 0.2, -15, wallHeight / 2, 0);

    //Interior Walls SR2
    createWall(0.2, wallHeight, 5, 5, wallHeight / 2, -10)
    createWall(0.2, wallHeight, 5, 5, wallHeight / 2, -2.5)
    createWall(20, wallHeight, 0.2, 15, wallHeight / 2, 0);

    //Interior Walls SR3
    createWall(0.2, wallHeight, 5, -5, wallHeight / 2, -22.4)
    createWall(0.2, wallHeight, 5, -5, wallHeight / 2, -14.25)
    createWall(20, wallHeight, 0.2, -15, wallHeight / 2, -12.5);

    //Interior Walls SR4
    createWall(0.2, wallHeight, 5, 5, wallHeight / 2, -22.4)
    createWall(0.2, wallHeight, 5, 5, wallHeight / 2, -14.25)
    createWall(20, wallHeight, 0.2, 15, wallHeight / 2, -12.5);

    //Rest Room
    loader.load('models/building/window.glb', function(gltf) {
        const window = gltf.scene;
        window.scale.set(0.04, 0.04, 0.04);
        window.position.set(-4.6,0,17.5);
        window.rotation.y = THREE.MathUtils.degToRad(90);
        scene.add(window);
    });

    createDoor(  -4.6, 0 , 12.5)
    createWall(0.2, 2, 10, -5, 6.5 , 12.5)
    createWall(0.2, wallHeight, 11.4, -5, wallHeight / 2, 19.4)
    createWall(0.2, wallHeight, 12.6, -5, wallHeight / 2, 5)

    //Reception Room
    createWall(0.2, wallHeight, 2.5, 5, wallHeight / 2, 23.75)
    createWall(0.2, wallHeight, 17.5, 5, wallHeight / 2, 7.5)


    createFloor(50,50)
}
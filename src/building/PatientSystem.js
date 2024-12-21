import { Pane } from "tweakpane";
import config from "../config.json";
import * as THREE from "three";

export function PatientSystem(scene, loader, camera, controls) {
    const patientModels = {};
    const roomStates = {};
    const roomPositions = config.patientPositions;
    const buttons = {};
    const pane = new Pane({ title: 'Patient Room Controls' });
    const folder = pane.addFolder({ title: 'See Available Rooms' });

    let selectedRoom = null;
    let isOverlayVisible = false;


    // Initialize room states
    Object.keys(roomPositions).forEach(room => {
        roomStates[room] = false;
    });

    async function loadPatientModel(roomName) {
        return new Promise((resolve) => {
            loader.load('models/people/patient.glb', (gltf) => {
                const patient = gltf.scene;
                patient.scale.set(2.8, 2.8, 2.8);

                const position = roomPositions[roomName];
                const rotation = position.rotation || { x: 0, y: 0, z: 0 };

                patient.position.set(position.x, position.y, position.z);
                patient.rotation.set(rotation.x, rotation.y, rotation.z);

                patientModels[roomName] = patient;
                scene.add(patient);
                resolve(patient);
            });
        });
    }

    async function togglePatientInRoom(roomName) {
        if (roomStates[roomName]) {
            if (patientModels[roomName]) {
                scene.remove(patientModels[roomName]);
                delete patientModels[roomName];
                roomStates[roomName] = false;
            }
        } else {
            await loadPatientModel(roomName);
            roomStates[roomName] = true;
        }
        updateButtonStates();

        if (selectedRoom === roomName) {
            updateOverlay(roomName);
        }

        return roomStates[roomName];
    }

    function updateButtonStates() {
        Object.entries(roomStates).forEach(([roomName, isOccupied]) => {
            const status = isOccupied ? 'Occupied' : 'Available';
            const btn = buttons[roomName];
            if (btn) {
                btn.title = status;
            }
        });
    }

    // Setup controls
    Object.keys(roomPositions).forEach(roomName => {
        const btn = folder.addButton({
            title: `${roomName} (Empty)`,
            label: roomName
        });

        buttons[roomName] = btn;

        btn.on('click', async () => {
            await togglePatientInRoom(roomName);
        });
    });

    updateButtonStates();

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const positionObjects = config.showClickableZone
        ? Object.entries(config.patientPositions).map(([roomName, position]) => {
            const roomNumber = parseInt(roomName.replace(/[^0-9]/g, ""), 10);
            const tableWidth = 6.7;
            const tableHeight = 2;
            const tableDepth = 1.6;
            const geometry = new THREE.BoxGeometry(tableWidth, tableHeight, tableDepth);
            const material = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.5 });
            const table = new THREE.Mesh(geometry, material);
            const xOffset = roomNumber % 2 === 0 ? 1.7 : -1.7;
            table.position.set(position.x + xOffset, position.y - tableHeight / 2, position.z);
            table.name = roomName;
            scene.add(table);
            return table;
        })
        : [];

    function onMouseClick(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(positionObjects);

        if (intersects.length > 0) {
            const selectedObject = intersects[0].object;
            const roomName = selectedObject.name;
            const roomCenter = config.patientPositions[roomName];

            const roomNumber = parseInt(roomName.replace(/[^0-9]/g, ""), 10);

            const sideOffset = 5;
            const fixedHeight = 30;

            if (roomNumber % 2 === 0) {
                camera.position.set(roomCenter.x - sideOffset, fixedHeight, roomCenter.z);
            } else {
                camera.position.set(roomCenter.x + sideOffset, fixedHeight, roomCenter.z);
            }

            const lookAtHeight = 1.5;
            camera.lookAt(roomCenter.x, lookAtHeight, roomCenter.z);

            controls.target.set(roomCenter.x, 0, roomCenter.z);
            controls.update();

            selectedRoom = roomName;
            updateOverlay(roomName);

            console.log(`Selected Room: ${roomName}`);
        }
    }

    function updateOverlay(roomName) {
        const overlayInfo = document.getElementById('room-info');
        if (!overlayInfo) return;

        const isOccupied = roomStates[roomName] || false;
        overlayInfo.innerHTML = `
      <p><strong>Room Name:</strong> ${roomName}</p>
      <p><strong>Status:</strong> ${isOccupied ? 'Occupied' : 'Available'}</p>
    `;
    }

    window.addEventListener('click', onMouseClick);

    window.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'i') {
            if (!selectedRoom) {
                console.warn('Nenhum quarto selecionado.');
                return;
            }
            isOverlayVisible = !isOverlayVisible;
            const overlay = document.getElementById('room-overlay');
            if (overlay) {
                overlay.style.display = isOverlayVisible ? 'block' : 'none';
            }
        }
    });

}

// Import necessary modules
import { Pane } from "tweakpane";
import config from "../config.json";
import * as THREE from "three";
import {TubePainter as spotlightHelper} from "three/addons";

export function PatientSystem(scene, loader, camera, controls) {
    const patientModels = {};
    const roomStates = {};
    const roomPositions = config.patientPositions;
    const buttons = {};
    const pane = new Pane({ title: 'Patient Room Controls' });
    const folder = pane.addFolder({ title: 'See Available Rooms' });

    let selectedRoom = null;
    let isOverlayVisible = false;

    const initialNames = ["João Silva", "Carlos Mendes", "Miguel Santos", "André Almeida", "Pedro Ferreira", "Rui Oliveira", "Tiago Costa", "Nuno Martins", "Ricardo Lopes", "Francisco Cardoso"];
    const initialAges = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
    const initialHistories = ["Diabetes", "Hipertensão arterial", "Asma", "Nenhum antecedente médico", "Doença cardíaca", "Obesidade", "Histórico de AVC", "Insuficiência renal", "Hepatite", "Sem histórico relevante"];
    const initialSurgeries = ["Remoção do apêndice", "Reconstrução óssea", "Cirurgia cardíaca", "Correção de hérnia", "Remoção da vesícula biliar", "Cirurgia de remoção de cálculos renais", "Prótese do joelho", "Remoção de tumor", "Laparoscopia", "Correção de fratura exposta"];

    let availableNames = [...initialNames];
    let availableAges = [...initialAges];
    let availableHistories = [...initialHistories];
    let availableSurgeries = [...initialSurgeries];

    const roomData = {
        room1: null,
        room2: null,
        room3: null,
        room4: null
    };

    const spotlight = new THREE.SpotLight(0xffffff, 150);
    spotlight.castShadow = true;
    spotlight.angle = THREE.MathUtils.degToRad(10);
    spotlight.penumbra = 0.3;
    spotlight.decay = 1;
    spotlight.distance = 100;
    scene.add(spotlight);

    const spotlightTarget = new THREE.Object3D();
    scene.add(spotlightTarget);
    spotlight.target = spotlightTarget;

    function updateSpotlight() {
        if (selectedRoom) {
            const roomCenter = config.patientPositions[selectedRoom];
            const cameraDirection = new THREE.Vector3();
            camera.getWorldDirection(cameraDirection);


            const spotlightOffset = new THREE.Vector3(0, 2, 0);
            spotlight.position.copy(camera.position).add(spotlightOffset);

            spotlightTarget.position.set(roomCenter.x, 0.5, roomCenter.z);

            spotlight.visible = true;

        } else {
            spotlight.visible = false;
        }
    }

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

    function assignPatientToRoom(roomName) {
        if (roomData[roomName]) {
            console.warn(`Room ${roomName} is already occupied!`);
            return;
        }

        if (availableNames.length === 0 || availableAges.length === 0 || availableHistories.length === 0 || availableSurgeries.length === 0) {
            console.error("No available data to assign to the room.");
            return;
        }

        const nameIndex = Math.floor(Math.random() * availableNames.length);
        const ageIndex = Math.floor(Math.random() * availableAges.length);
        const historyIndex = Math.floor(Math.random() * availableHistories.length);
        const surgeryIndex = Math.floor(Math.random() * availableSurgeries.length);

        const assignedData = {
            name: availableNames.splice(nameIndex, 1)[0],
            age: availableAges.splice(ageIndex, 1)[0],
            history: availableHistories.splice(historyIndex, 1)[0],
            procedure: availableSurgeries.splice(surgeryIndex, 1)[0]
        };

        roomData[roomName] = assignedData;
        console.log(`Assigned to ${roomName}:`, assignedData);
    }

    function releaseRoom(roomName) {
        const patient = roomData[roomName];
        if (!patient) {
            console.warn(`Room ${roomName} is already available.`);
            return;
        }

        availableNames.push(patient.name);
        availableAges.push(patient.age);
        availableHistories.push(patient.history);
        availableSurgeries.push(patient.procedure);

        roomData[roomName] = null;
        console.log(`Room ${roomName} is now available.`);
    }

    async function togglePatientInRoom(roomName) {
        if (roomStates[roomName]) {
            if (patientModels[roomName]) {
                scene.remove(patientModels[roomName]);
                delete patientModels[roomName];
            }

            releaseRoom(roomName);
            roomStates[roomName] = false;
        } else {
            await loadPatientModel(roomName);

            assignPatientToRoom(roomName);
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

    const positionObjects = Object.entries(config.patientPositions).map(([roomName, position]) => {
        const roomNumber = parseInt(roomName.replace(/[^0-9]/g, ""), 10);
        const tableWidth = 6.7;
        const tableHeight = 2;
        const tableDepth = 1.6;
        const geometry = new THREE.BoxGeometry(tableWidth, tableHeight, tableDepth);

        const material = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            transparent: true,
            opacity: config.showClickableZone ? 0.5 : 0,
        });
        const table = new THREE.Mesh(geometry, material);
        const xOffset = roomNumber % 2 === 0 ? 1.7 : -1.7;
        table.position.set(position.x + xOffset, position.y - tableHeight / 2, position.z);
        table.name = roomName;
        scene.add(table);
        return table;
    });

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
            //updateSpotlight();

            spotlight.position.set(roomCenter.x, fixedHeight + 5, roomCenter.z); // Position above the room
            spotlightTarget.position.set(roomCenter.x, 0.5, roomCenter.z);

            selectedRoom = roomName;
            updateOverlay(roomName);

            console.log(`Selected Room: ${roomName}`);
        }
    }

    //controls.addEventListener('change', updateSpotlight);

    function updateOverlay(roomName) {
        const overlayInfo = document.getElementById('room-info');
        if (!overlayInfo) return;

        const isOccupied = roomStates[roomName] || false;

        const room = roomData[roomName];

        overlayInfo.innerHTML = `
        <p><strong>Room Name:</strong> ${roomName}</p>
        <p><strong>Status:</strong> ${isOccupied ? 'Occupied' : 'Available'}</p>
        ${isOccupied && room ? `
            <p><strong>Patient Name:</strong> ${room.name}</p>
            <p><strong>Age:</strong> ${room.age}</p>
            <p><strong>Medical History:</strong> ${room.history}</p>
            <p><strong>Procedure:</strong> ${room.procedure}</p>
        ` : ''}
    `;
    }

    window.addEventListener('click', onMouseClick);

    window.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'i') {
            if (!selectedRoom) {
                console.warn('Nenhuma sala selecionada.');
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
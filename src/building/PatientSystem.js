import * as THREE from "three";
import { Pane } from "tweakpane";
import config from "../config.json";

export function PatientSystem(scene, loader) {
    const patientModels = {};
    const roomStates = {};
    const roomPositions = config.patientPositions;
    const buttons = {};
    const pane = new Pane({ title: 'Patient Room Controls' });
    const folder = pane.addFolder({ title: 'See Available Rooms' });

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
}

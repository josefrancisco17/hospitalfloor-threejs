import * as THREE from "three";
import { Pane } from "tweakpane";

export class PatientRoomController {
    constructor(scene, loader) {
        this.scene = scene;
        this.loader = loader;
        this.patientModels = {};

        this.roomPositions = {
            'Room 1': { x: 15, y: 2, z: -15 },
            'Room 2': { x: -2, y: 0, z: 2 },
            'Room 3': { x: 2, y: 0, z: -2 },
            'Room 4': { x: -2, y: 0, z: -2 }
        };

        this.roomStates = {};
        Object.keys(this.roomPositions).forEach(room => {
            this.roomStates[room] = false;
        });

        this.setupControls();
    }

    loadPatientModel(roomName) {
        return new Promise((resolve) => {
            this.loader.load('models/people/patient.glb', (gltf) => {
                const patient = gltf.scene;
                patient.scale.set(2.8, 2.8, 2.8);
                patient.rotation.x = THREE.MathUtils.degToRad(-90);

                const position = this.roomPositions[roomName];
                patient.position.set(position.x, position.y, position.z);

                this.patientModels[roomName] = patient;
                this.scene.add(patient);
                resolve(patient);
            });
        });
    }

    async togglePatientInRoom(roomName) {
        if (this.roomStates[roomName]) {
            if (this.patientModels[roomName]) {
                this.scene.remove(this.patientModels[roomName]);
                delete this.patientModels[roomName];
                this.roomStates[roomName] = false;
            }
        } else {
            await this.loadPatientModel(roomName);
            this.roomStates[roomName] = true;
        }

        this.updateButtonStates();
        return this.roomStates[roomName];
    }

    setupControls() {
        this.pane = new Pane({
            title: 'Patient Room Controls'
        });

        this.folder = this.pane.addFolder({
            title: 'See Available Rooms'
        });

        this.buttons = {};

        Object.keys(this.roomPositions).forEach(roomName => {
            const btn = this.folder.addButton({
                title: `${roomName} (Empty)`,
                label: roomName
            });

            this.buttons[roomName] = btn;

            btn.on('click', async () => {
                await this.togglePatientInRoom(roomName);
            });
        });
    }

    updateButtonStates() {
        Object.entries(this.roomStates).forEach(([roomName, isOccupied]) => {
            const status = isOccupied ? 'Occupied' : 'Empty';
            const btn = this.buttons[roomName];
            if (btn) {
                btn.title = `${roomName} (${status})`;
            }
        });
    }
}

export function initializePatientSystem(scene, loader) {
    return new PatientRoomController(scene, loader);
}
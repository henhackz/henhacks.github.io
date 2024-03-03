import * as THREE from 'three';
import {renderEnvironment} from "../environment.js"

let renderer;

export function renderForestEnvironment() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    const renderingData = {renderer: renderer, camera: camera, scene: scene}
    
    const forestEnvironmentData = [
        {
            soundPath: '../../assests/sounds/forest/forest-wind-and-birds-6881.mp3', 
            replayDelay: 1,
            x: -8,
            y: 0,
            z: 0
        },
        {
            soundPath: '../../assests/sounds/forest/leaves-64875.mp3', 
            replayDelay: 1,
            x: 3,
            y: 0,
            z: 0
        },
        {
            soundPath: '../../assests/sounds/forest/mystic-forest-ambient.mp3', 
            replayDelay: 1,
            x: -5,
            y: 1,
            z: 0
        }
    ]

    renderEnvironment(renderingData, forestEnvironmentData);

    document.body.appendChild( renderer.domElement );
}

export function removeForestEnvironment() {
    if(renderer !== undefined) {
        console.log("removing forest")
        document.body.removeChild( renderer.domElement );
        renderer = undefined;
    }
}
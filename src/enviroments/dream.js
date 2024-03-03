import * as THREE from 'three';
import {renderEnvironment} from "../environment.js"

let renderer;

export function renderDreamEnvironment() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    const renderingData = {renderer: renderer, camera: camera, scene: scene}
    
    const dreamEnvironmentData = [
        {
            soundPath: '../../assests/sounds/dream/dream-sound-effect-downscale-7134.mp3', 
            replayDelay: 1,
            x: -8,
            y: 0,
            z: 0
        },
        {
            soundPath: '../../assests/sounds/dream/ambient-dream-16671.mp3', 
            replayDelay: 1,
            x: 3,
            y: 0,
            z: 0
        },
        {
            soundPath: '../../assests/sounds/dream/various-glassy-stone-windchime-sounds-48417.mp3', 
            replayDelay: 1,
            x: -5,
            y: 1,
            z: 0
        }
    ]

    renderEnvironment(renderingData, dreamEnvironmentData);

    document.body.appendChild( renderer.domElement );
}

export function removeDreamEnvironment() {
    if(renderer !== undefined) {
        console.log("removing dream")
        document.body.removeChild( renderer.domElement );
        renderer = undefined;
    }
}
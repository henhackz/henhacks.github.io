import * as THREE from 'three';
import {renderEnvironment} from "../environment.js"

let renderer = undefined;
let soundObjects = undefined;
let scene = undefined

export function renderForestEnvironment() {
    scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    renderer = new THREE.WebGLRenderer({alpha: true});
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
            soundPath: '../../assests/sounds/forest/mystic-forest-ambient-23812.mp3', 
            replayDelay: 0,
            x: 3,
            y: 0,
            z: 0
        },
        {
            soundPath: '../../assests/sounds/forest/rustling-leaves-6875.mp3', 
            replayDelay: 3,
            x: -5,
            y: 1,
            z: 0
        }
    ]

    soundObjects = renderEnvironment(renderingData, forestEnvironmentData);

    document.body.appendChild( renderer.domElement );
}

export function removeForestEnvironment() {
    if(soundObjects !== undefined) {
        soundObjects.forEach(element => {      
            element.sound.stop()
            scene.remove(element.mesh)
            clearTimeout(element.timer)
        });
    }
    if(renderer !== undefined) {
        document.body.removeChild( renderer.domElement );
        renderer.dispose()
        renderer = undefined;
    }
}
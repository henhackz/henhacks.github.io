import * as THREE from 'three';
import {renderEnvironment} from "../environment.js"

let renderer;

export function renderWaterEnvironment() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    const renderingData = {renderer: renderer, camera: camera, scene: scene}
    
    const waterEnvironmentData = [
        {
            soundPath: '../../assests/sounds/water/bubble-bursting-popping-14423.mp3 ', 
            replayDelay: 1,
            x: -8,
            y: 0,
            z: 0
        },
        {
            soundPath: '../../assests/sounds/water/calm-river-ambience-loop-125071.mp3', 
            replayDelay: 1,
            x: 3,
            y: 0,
            z: 0
        },
        {
            soundPath: '../../assests/sounds/water/droplets-in-a-cave.mp3', 
            replayDelay: 1,
            x: -5,
            y: 1,
            z: 0
        }
    ]

    renderEnvironment(renderingData, waterEnvironmentData);

    document.body.appendChild( renderer.domElement );
}

export function removeWaterEnvironment() {
    if(renderer !== undefined) {
        console.log("removing water")
        document.body.removeChild( renderer.domElement );
        renderer = undefined;
    }
}
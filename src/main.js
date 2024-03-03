import * as THREE from 'three';
import {renderEnvironment} from "./environment.js"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x000000, 0 );
document.body.appendChild( renderer.domElement );

const renderingData = {renderer: renderer, camera: camera, scene: scene}

const environmentData = [
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

renderEnvironment(renderingData, environmentData)

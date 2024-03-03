import * as THREE from 'three';
import {renderEnvironment} from "../environment.js";
import sound1 from '/src/sounds/dream/ambient-dream-16671.mp3';
import sound2 from '/src/sounds/dream/dream-magic-prolonged-94891.mp3';
import sound3 from '/src/sounds/dream/magical-transition-144153.mp3';

let renderer = undefined;
let soundObjects = undefined;
let scene = undefined

export function renderDreamEnvironment() {
    scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    const renderingData = {renderer: renderer, camera: camera, scene: scene}
    
    const dreamEnvironmentData = [
        {
            soundPath: sound1, 
            replayDelay: 0,
            x: 1,
            y: 0,
            z: 0
        }
    ]

    soundObjects = renderEnvironment(renderingData, dreamEnvironmentData);

    document.body.appendChild( renderer.domElement );
}

export function removeDreamEnvironment() {
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
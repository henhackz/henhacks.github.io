import * as THREE from 'three';

import {gyroXRot, gyroYRot, gyroZRot} from './getRequests.js'

export function renderEnvironment(renderingData, environmentData) {
    
    renderingData.camera.position.z = 5;

    const listener = new THREE.AudioListener();
    renderingData.camera.add( listener );

    const soundObjects = [];
    let loadedSounds = {number: 0};

    environmentData.forEach(element => {
        const soundData = {listener: listener, soundPath: element.soundPath, replayDelay: element.replayDelay}
        const [cube, sound] = makeCube(element.x, element.y, element.z, renderingData.scene, soundData, loadedSounds);

        soundObjects.push({mesh: cube, sound: sound, timer: undefined})
    });

    function checkIfSongsLoaded() {
        if(loadedSounds.number !== environmentData.length) {
           window.setTimeout(checkIfSongsLoaded, 100);
        } else {
            
            for(let i = 0; i < soundObjects.length; i++) {
                const timer = playSound(soundObjects[i].sound, environmentData[i].replayDelay);
                soundObjects[i].timer = timer
            }
        }
    }
    checkIfSongsLoaded();

    function animate() {
        requestAnimationFrame(animate);
    
        const cube1 = soundObjects[0].mesh
        cube1.rotation.x += 0.01;
        cube1.rotation.y += 0.01;
        cube1.position.x += 0.05

        renderingData.camera.rotation.x = gyroXRot;
        renderingData.camera.rotation.y = gyroYRot;
        renderingData.camera.rotation.z = gyroZRot;
        renderingData.renderer.render(renderingData.scene, renderingData.camera);
    }
    animate();

    return soundObjects
}

function makeCube(x, y, z, scene, soundData, loadedSounds) {
    
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh(geometry, material);

    cube.position.x = x;
    cube.position.y = y;
    cube.position.z = z;

    if(scene) {
        scene.add(cube);
    }

    const sound = makeSound(soundData.listener, soundData.soundPath, loadedSounds);
    cube.add(sound)

    return [cube, sound]
}

function makeSound(listener, soundPath, loadedSounds) {
    
    let sound = new THREE.PositionalAudio( listener );
    
    const audioLoader = new THREE.AudioLoader();

    audioLoader.load(soundPath, async function( buffer ) {
        sound.name = soundPath;
        sound.setBuffer( buffer );
        sound.setLoop(true);
        loadedSounds.number += 1;
    })

    return sound;
}

function playSound(sound, replayDelay) {
    
    if(replayDelay > 0) {

        sound.play()

        const timer = setInterval(async () => {
            sound.play()
            await delay(sound.buffer.duration * 1000)
            sound.pause()
        }, (sound.buffer.duration + replayDelay) * 1000)

        async function stopFirst() {
            await delay(sound.buffer.duration * 1000)
            sound.pause()
        }
        stopFirst()
        return timer
    } 
    else {
        sound.play();
        return NaN;
    }
}

function delay(ms) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
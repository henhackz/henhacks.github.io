import * as THREE from 'three';

function delay(ms) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

export function renderEnvironment(renderer, camera, scene) {
    
    camera.position.z = 0;

    const listener = new THREE.AudioListener();
    camera.add( listener );

    const soundData1 = {listener: listener, soundPath: '/assests/sounds/dream/dream-sound-effect-downscale-7134.mp3', replayDelay: 0.0}
    const cube1 = makeCube(-8, 0, 0, scene, soundData1);

    function animate() {
        requestAnimationFrame(animate);
    
        cube1.rotation.x += 0.01;
        cube1.rotation.y += 0.01;
        cube1.position.x += 0.05
        renderer.render(scene, camera);
    }
    animate();
}

function makeCube(x, y, z, scene, soundData) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh(geometry, material);

    cube.position.x = x;
    cube.position.y = y;
    cube.position.z = z;

    if(scene) {
        scene.add(cube);
    }

    const [sound, timer] = makeSound(soundData.listener, soundData.soundPath, soundData.replayDelay);
    cube.add(sound)

    return cube
}

function makeSound(listener, soundPath, replayDelay) {
    
    let sound = new THREE.PositionalAudio( listener );
    
    if(replayDelay > 0) {
    
        let timer = undefined;
        const audioLoader = new THREE.AudioLoader();

        audioLoader.load(soundPath, async function( buffer ) {
            sound.setBuffer( buffer );
            sound.setLoop(true)

            sound.play()

            timer = setInterval(async () => {
                sound.play()
                await delay(buffer.duration * 1000)
                sound.pause()
            }, (buffer.duration + replayDelay) * 1000)

            await delay(buffer.duration * 1000)
            sound.pause()
        })
    
        return [sound, timer]

    }
    else {
        const audioLoader = new THREE.AudioLoader();
        audioLoader.load(soundPath, function( buffer ) {
            sound.setBuffer( buffer );
            sound.play();
            sound.setLoop(true);
        });

        return [sound, undefined]
    }
}
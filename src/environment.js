import * as THREE from 'three';

const SOUNDS_PATH = "../assets/sounds/"

export function renderEnvironment(renderer, camera, scene) {
    
    camera.position.z = 5;

    const listener = new THREE.AudioListener();
    camera.add( listener );

    const sound1 = makeSound(listener, '/assests/sounds/dream/ambient-dream-16671.mp3');

    const sound2 = makeSound(listener, '/assests/sounds/dream/dream-sound-effect-downscale-7134.mp3');

    const cube1 = makeCube(0, 0, 0, scene, sound1);
    const cube2 = makeCube(2, 0, 0, scene, sound2);

    function animate() {
        requestAnimationFrame(animate);
    
        cube1.rotation.x += 0.01;
        cube1.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}

function makeCube(x, y, z, scene, sound) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh(geometry, material);

    cube.position.x = x;
    cube.position.y = y;
    cube.position.z = z;

    if(scene) {
        scene.add(cube);
    }

    if(sound) {
        cube.add(sound)
    }

    return cube
}

function makeSound(listener, soundPath) {
    const sound = new THREE.PositionalAudio( listener );

    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(soundPath, function( buffer ) {
        sound.setBuffer( buffer );
        sound.play();
        sound.setLoop(true);
    });

    return sound;
}
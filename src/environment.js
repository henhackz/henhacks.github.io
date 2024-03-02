import * as THREE from 'three';

const SOUNDS_PATH = "../assets/sounds/"

let BADGLOBALVARIABLE

export function renderEnvironment(renderer, camera, scene) {
    
    camera.position.z = 5;

    const listener = new THREE.AudioListener();
    camera.add( listener );

    addSound(listener)

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh(geometry, material);
    addSound(listener, cube);
    scene.add(cube);

    function animate() {
        requestAnimationFrame(animate);
    
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    
        renderer.render(scene, camera);
    }
    animate();
}

function addSound(listener, mesh) {
    const sound = new THREE.PositionalAudio( listener );

    const audioLoader = new THREE.AudioLoader();
    audioLoader.load( '/assests/sounds/piano-test.mp3', function( buffer ) {
        sound.setBuffer( buffer );
        sound.setRefDistance( 20 );
        sound.play();
    });

    console.log(mesh)

    //mesh.add(sound)
}
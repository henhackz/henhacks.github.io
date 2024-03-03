import * as THREE from 'three';

export function renderEnvironment(renderingData, environmentData) {
    
    renderingData.camera.position.z = 0;

    const listener = new THREE.AudioListener();
    renderingData.camera.add( listener );

    const soundObjects = [];

    environmentData.forEach(element => {
        const soundData = {listener: listener, soundPath: element.soundPath, replayDelay: element.replayDelay}
        const [cube, timer] = makeCube(element.x, element.y, element.z, renderingData.scene, soundData);

        soundObjects.push({mesh: cube, timer: timer})
    });

    function animate() {
        requestAnimationFrame(animate);
    
        const cube1 = soundObjects[0].mesh

        cube1.rotation.x += 0.01;
        cube1.rotation.y += 0.01;
        cube1.position.x += 0.05
        renderingData.renderer.render(renderingData.scene, renderingData.camera);
    }
    animate();

    return soundObjects
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
    //console.log(timer)
    cube.add(sound)

    return [cube, timer]
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

            console.log(timer)

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

function playSound() {

}

function delay(ms) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
import * as THREE from 'three';

export function renderEnvironment(renderer, camera, scene) {
    
    camera.position.z = 5;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    function animate() {
        requestAnimationFrame(animate);
    
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    
        renderer.render(scene, camera);
    }
    animate();
}
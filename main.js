import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 2, 1, 1 , 4, 1, 1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: false} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Make Torus knot
const geometry_knot = new THREE.TorusKnotGeometry( 1, 0.4, 100, 16, 2, 3 ); 
const material_knot = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true} ); 
const torusKnot = new THREE.Mesh( geometry_knot, material_knot ); 
scene.add( torusKnot );


camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

    torusKnot.rotation.x -= 0.02;
	torusKnot.rotation.y -= 0.01;

	renderer.render( scene, camera );
}

animate();
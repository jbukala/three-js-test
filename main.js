import * as THREE from 'three';
//import "./style.css"
import { OrbitControls } from 'three/addons/controls/OrbitControls';

//Sizes
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight
};

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 1000 );
camera.position.z = 5;

// Make Torus knot
const geometry_knot = new THREE.TorusKnotGeometry( 1, 0.4, 100, 16 ); 
const material_knot = new THREE.MeshStandardMaterial( { color: 0x00ffff} ); 
const torusKnot = new THREE.Mesh( geometry_knot, material_knot ); 
scene.add( torusKnot );

// Make light
const light = new THREE.PointLight(0xffffff, 1, 200);
light.position.set(5, 20, 20);
scene.add(light);

const ambient_light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( ambient_light );

// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );


// Make renderer
const renderer = new THREE.WebGLRenderer({antialiasing: true});
renderer.setSize( sizes.width, sizes.height );
document.body.appendChild( renderer.domElement );


// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;

// resize
window.addEventListener("resize", () => {
	//Update sizes
	console.log(window.innerWidth);
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	// Update camera
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();
	renderer.setSize(sizes.width, sizes.height);

});

function animate() {
	
	requestAnimationFrame( animate );
	controls.update();

    torusKnot.rotation.x -= 0.02;
	torusKnot.rotation.y -= 0.01;

	renderer.render( scene, camera );
}

animate();

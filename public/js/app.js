//Create a copy of public/index.html to dist/index.html
require("file-loader?name=index.html!./../index.html");

import React from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
import './TrackballControls.js';
// import Welcome from './welcome.jsx';
import cube from './cube.js';
import rover from './rover.js';

var container;
var camera, controls, scene, renderer;
var cross;

init();
animate();

function init() {
	camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.z = 100;

	controls = new THREE.TrackballControls(camera);

	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;

	controls.noZoom = false;
	controls.noPan = false;

	controls.staticMoving = false;
	controls.dynamicDampingFactor = 0.3;

	controls.keys = [65, 83, 68];

	controls.addEventListener('change', render);

	//world

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xffffff);

	var axis = new THREE.AxesHelper(20);
	scene.add(axis);

	//objects
	scene.add(rover);

	//lights
	var lights = [];

	lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
	lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
	lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

	lights[ 0 ].position.set( 0, 200, 0 );
	lights[ 1 ].position.set( 100, 200, 100 );
	lights[ 2 ].position.set( - 100, - 200, - 100 );

	scene.add( lights[ 0 ] );
	scene.add( lights[ 1 ] );
	scene.add( lights[ 2 ] );
	
	
	//renderer

	renderer = new THREE.WebGLRenderer({ antialias: false });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);

	container = document.getElementById('container');
	container.appendChild(renderer.domElement);

	//
	window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setPixelRatio(window.devicePixelRatio);

	controls.handleResize;

	render();
}

function animate() {
	requestAnimationFrame(animate);
	controls.update();
}

function render() {
	renderer.render(scene, camera);
}
// Test to verify if babel and react are functioning as desired.
// ReactDOM.render(<Welcome/>, document.getElementById('app'));
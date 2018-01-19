//Create a copy of public/index.html to dist/index.html
require("file-loader?name=index.html!./../index.html");

import React from 'react'
import ReactDOM from 'react-dom'
// import Welcome from './welcome.jsx'
import cube from './cube.js'
import rover from './rover.js'

var THREE = require('three')

//setup Three.js Scene
var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.z = 5
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

scene.add(rover)

function animate() {
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
}

animate()

// Test to verify if babel and react are functioning as desired.
// ReactDOM.render(<Welcome/>, document.getElementById('app'));
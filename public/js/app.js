require("file-loader?name=index.html!./../index.html");

import React from 'react'
import ReactDOM from 'react-dom'
// import Welcome from './welcome.jsx'
var THREE = require('three')

var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

var geometry = new THREE.BoxGeometry(1, 1 , 1)
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
var cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

function animate() {
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
}

animate()

// Test to verify if babel and react are functioning as desired.
// ReactDOM.render(<Welcome/>, document.getElementById('app'));
var THREE = require('three')

var geometry = new THREE.BoxGeometry(1, 1 , 1)
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
var rover = new THREE.Mesh(geometry, material)

export default rover
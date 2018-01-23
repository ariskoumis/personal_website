var THREE = require('three')

//objects
var wheel_geometry = new THREE.CylinderGeometry(5, 5, 1, 20);
var material = new THREE.MeshPhongMaterial({color: 0x156289});

var wheel_1 = new THREE.Mesh(wheel_geometry, material);
wheel_1.position.set(-10, 0, 10);
wheel_1.rotation.z = Math.PI/2

var wheel_2 = new THREE.Mesh(wheel_geometry, material);
wheel_2.position.set(10, 0, 10);
wheel_2.rotation.z = Math.PI/2

var wheel_3 = new THREE.Mesh(wheel_geometry, material);
wheel_3.position.set(10, 0, -10);
wheel_3.rotation.z = Math.PI/2

var wheel_4 = new THREE.Mesh(wheel_geometry, material);
wheel_4.position.set(-10, 0, -10);
wheel_4.rotation.z = Math.PI/2

var chasis_geometry = new THREE.BoxGeometry(20, 5, 20);
var chasis = new THREE.Mesh(chasis_geometry)
chasis.position.y = 5


//add objects to group
var rover = new THREE.Group();
rover.add(wheel_1, wheel_2, wheel_3, wheel_4, chasis)

export default rover
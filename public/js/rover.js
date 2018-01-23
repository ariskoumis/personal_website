var THREE = require('three')



//objects
var geometry = new THREE.CylinderGeometry(5, 5, 1, 32);
var material = new THREE.MeshPhongMaterial({
	color: 0x156289,
	emissive: 0x072534,
	side: THREE.DoubleSide
});

var mesh = new THREE.Mesh(geometry, material);

mesh.position.set(0, 1, 0);
mesh.updateMatrix();
mesh.matrixAutoUpdate = false;

var mesh2 = new THREE.Mesh(geometry, material);
mesh2.position.set(0, -31, 0);
mesh2.rotation.z = Math.PI/2
mesh2.updateMatrix();
mesh2.matrixAutoUpdate = false;

//add objects to group
var rover = new THREE.Group();
rover.add(mesh, mesh2)

export default rover
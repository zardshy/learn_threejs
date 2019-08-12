const THREE = require('three');

//three.js 三大组建 场景（scene）、相机（camera）和渲染器（renderer）


//实例scene
var scene = new THREE.Scene();

//实例camera
//PerspectiveCamera 透视相机
//args1: 视野： 场景范围， 已度为单位
//args2：宽高比
//args3、4：近剪裁平面和远剪裁平面，远离相机的物体远远超过近或近的物体将不会被渲染 提升性能
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//实例renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
var container = document.getElementById('container');
container.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
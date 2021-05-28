// Our Javascript will go here.
//场景设置
const scene = new THREE.Scene();//场景(scene)

//相机设置
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

//render，渲染器设置
const renderer = new THREE.WebGLRenderer();//渲染器(render),ie等老浏览器不支持WebGL渲染器，可使用CSS2DRenderer, CSS3DRenderer, SVGRenderer
renderer.setSize( window.innerWidth, window.innerHeight );//此处可以通过window.innerWidth / 2,来提高渲染性能
document.body.appendChild( renderer.domElement );

//定义材料
const material = new THREE.LineBasicMaterial( { color: 0x00ff00 } );

//定义点
const points = [];
points.push( new THREE.Vector3(10, 10, 0));
points.push( new THREE.Vector3(10, -10, 0));
points.push( new THREE.Vector3(-10, -10, 0));
points.push( new THREE.Vector3(-10, 10, 0));
points.push( new THREE.Vector3(10, 10, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

//创建线对象
const line = new THREE.Line(geometry, material)

//向场景中添加线
scene.add( line );

//render，开始渲染,该步骤保证每次屏幕刷新都会刷新渲染，on a typical screen this means 60 times per second，即刷新率多少帧，场景就更新多少次
renderer.render( scene, camera );   
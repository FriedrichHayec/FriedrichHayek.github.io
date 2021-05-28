const canvas = document.querySelector('#c')
const renderer = new THREE.WebGLRenderer({canvas});

const fov = 75;
const aspect = 2;
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 2;

const scene = new THREE.Scene();

{
    const color = 0xFFFFFF;//白光
    const intensity = 1;//光密度,光强
    const light = new THREE.DirectionalLight(color, intensity);//直照光(DirectionalLight)方法
    light.position.set(-1, 2, 4);//光位置
    scene.add(light);//向场景添加光
}

const box = new THREE.BoxGeometry();
//MeshPhongMaterial材质，没有光不显示
const material = new THREE.MeshPhongMaterial({color: 0x44aa88});



const cube = new THREE.Mesh(box, material);
scene.add(cube);


function render(time) {
    time *= 0.001;

    cube.rotation.z = time;
    cube.rotation.y = time;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
requestAnimationFrame(render)
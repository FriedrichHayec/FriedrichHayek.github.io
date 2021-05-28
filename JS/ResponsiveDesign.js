
const canvas = document.querySelector('#c')
const renderer = new THREE.WebGLRenderer({canvas});

function initStats() {
                var stats = new Stats();
                //设置统计模式
                stats.setMode(0); // 0: fps, 1: ms
                //统计信息显示在左上角
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.left = '0px';
                stats.domElement.style.top = '0px';
                //将统计对象添加到对应的<div>元素中
                document.getElementById("Stats-output").appendChild(stats.domElement);
                return stats;
            }
var stats = initStats();

const fov = 100;
const aspect = 1;
const near = 0.1;
const far = 100;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.set(8,8,10);

const scene = new THREE.Scene();

{
    const color = 0xFFFFFF;//白光
    const intensity = 1;//光密度,光强
    const light = new THREE.PointLight(color, intensity);//直照光(DirectionalLight)方法
    light.position.set(-2, 5, 5);//光位置
    scene.add(light);//向场景添加光
}
//MeshPhongMaterial材质，没有光不显示

const box = new THREE.BoxGeometry(1,1,1);

function makeInstance(geometry, color, x, y, z) {
    const material = new THREE.MeshPhongMaterial({color});

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.set(x,y,z);
    return cube;
}

//创建包含cube的数组
const cubes = new Array

//创建坐标的二维矩阵
//实现彩虹渐变效果
for (var i = 0; i <= 8; i++) {
    for (var j = 0;j <= 8; j++) {
        for (var k = 0; k <= 8; k++){
            r = 256 - 32 * i;
            g = 256 - 32 * j;
            b = 256 - 32 * k;
            function componentToHex(c) {
                var hex = c.toString(16);
                return hex.length == 1 ? "0" + hex : hex;
            }
            function rgbToHex(r, g, b) {
                if (r >= 256) {
                    r--;
                }
                if (g >= 256) {
                    g--;
                }
                if (b >= 256) {
                    b--;
                }
                if (r <= 0) {
                    r++;
                }
                if (g <= 0) {
                    g++;
                }                
                if (b <= 0) {
                    b++;
                }
                return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
            }
            cubes.push(makeInstance(box, rgbToHex(r,g,b), i * 2, j * 2, k * 2));
        }
    }
}

//重定义renderer的分辨率
// function resizeRendererDisplaySize(renderer) {
//     const canvas = renderer.domElement;
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;
//     const needResize = canvas.width !== width || canvas.height !== height;
//     if (needResize) {
//         renderer.setSize(width, height, false);//如果canvas变了，则改变renderer的尺寸与canvas一致
//     }
//     return needResize;
// }

//HD-DPI高清显示器重设分辨率
function resizeRendererDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width  = canvas.clientWidth  * pixelRatio | 0;
    const height = canvas.clientHeight * pixelRatio | 0;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
}

function render(time) {
    requestAnimationFrame(render);
    time *= 0.001;//milliseconds to radians,毫秒转弧度,每次刷新转6.28度
    stats.update();

    //使相机与画布的比例对应
    //抗锯齿
    if(resizeRendererDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }
    // 非抗锯齿
    // {
    //     const canvas = renderer.domElement;//domElement: HTMLCanvasElement;由渲染器自动获取
    //     camera.aspect = canvas.clientWidth / canvas.clientHeight;//使相机的宽高比等于屏幕宽高比
    //     camera.updateProjectionMatrix();//更新camera的参数
    // } 


        cubes.forEach((cube, ndx) => {
    
        const speed = 1.5 + ndx * 0;
        const rot = time * speed;
        cube.rotation.x = rot;
        cube.rotation.y = rot;
    })

    // light.position.x = time;

    renderer.render(scene, camera);
    //! requestAnimationFrame is a request to the browser
    //! that you want to animate something. You pass it a function to be called
}
requestAnimationFrame(render)
//! requestAnimationFrame passes the time since the page loaded to our function. That time is passed in milliseconds. 
//! I find it's much easier to work with seconds so here we're converting that to seconds.
//TODO find out how to use requestAnimationFrame() !

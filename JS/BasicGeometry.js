// Our Javascript will go here.
//场景设置
function main() {
    //指定画布
    const canvas = document.querySelector('#c');

    //create a renderer
    const renderer = new THREE.WebGLRenderer({canvas});

    //! create a PerspectiveCamera，创建一个透视投影相机
    // create a frustum，创建一个平截头体
    const fov = 100;//视野范围,视场角field of view
    const aspect = 1;//宽(wide)高(tall)比
    const near = 0.1;//近不渲染区域
    const far = 1000;//远不渲染区域
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    
    //! create a OrthographicCamera，创建一个正射投影相机
    // 创建一个frustum平截头体
    //! 这是相机坐标系,也是右手坐标系，垂直打向屏幕，横轴与屏幕坐标系横轴相反
    // const left = -20;//Camera frustum left plane,相机
    // const right = 20;//Camera frustum right plane
    // const top = 10;//Camera frustum top plane
    // const down = -10;//Camera frustum bottom plane
    // const near = 1;//Camera frustum near plane
    // const far = 1000;//Camera frustum far plane

    // const camera = new THREE.OrthographicCamera(left ,right,top ,down ,near ,far);
    camera.position.z = 20;//从Z轴+2看向Z轴负方向

    //create a scene，创建一个场景
    const scene = new THREE.Scene();

    //添加光源(light)
    {
        const color = 0xFFFFFF;//白光
        const intensity = 1;//光密度1
        const light = new THREE.DirectionalLight(color, intensity);//直照光(DirectionalLight)方法
        light.position.set(-1, 2, 4);//光位置
        scene.add(light);//向场景添加光
    }

    //create a BoxGeometry，创建一个长宽高都为1的Geometry
    const boxWidth = 1;//盒子宽
    const boxHeight = 1;//盒子高
    const boxDepth = 1;//盒子深
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    //create a sphere,创建个球
    const sphereGeometry = new THREE.SphereGeometry();

    //create a ring,创建个环
    const ringGeometry = new THREE.RingGeometry();

    //create a Torus,创建环面
    const torusGeometry = new THREE.TorusGeometry();

    //create a circle,创建一个圆
    const circleGeometry = new THREE.CircleGeometry();

    //create a cone,创建一个锥体
    const coneGeometry = new THREE.ConeGeometry();

    //create a cylinder,创建一个圆柱体
    const cylinderGeometry = new THREE.CylinderGeometry();

    //正12面体
    const dodecahedronGeometry = new THREE.DodecahedronGeometry();

    //正20面体
    const icosahedronGeometry = new THREE.IcosahedronGeometry();

    //正4面体
    const tetrahedronGeometry = new THREE.TetrahedronGeometry();

    const torusKnotGeometry = new THREE.TorusKnotGeometry();
    //create a material,创建一个绿色材质
    //! We also need to change the material. The MeshBasicMaterial is not affected 
    //! by lights. Let's change it to a MeshPhongMaterial which is affected by lights.
    // const material = new THREE.MeshBasicMaterial({color: 0x44aa88})
    const purpleMaterial = new THREE.MeshPhongMaterial({color: "#EE82EE"})
    const goldMaterial = new THREE.MeshPhongMaterial({color: "#FFD700"})
    const redMaterial = new THREE.MeshPhongMaterial({color: "#FF0000"})
    //create a cube, consisted of a geometry and a material
    //循环创建cube/三维cube
    //创建Cube的Object

    function repeatCreateCube() {
            const cube_1_1 = new Array();
            for (i = 0; i <= 4; i++) {
                cube_1_1[i] = new Array();
                for(j = 0; j <= 4; j++) {
                    cube_1_1[i][j] = new Array();
                    for(k = 0; k <=4; k++) {
                        cube_1_1[i][j].push(new THREE.Mesh(ringGeometry, purpleMaterial));
                        cube_1_1[i][j][k].position.set(-16 + 2 * i,8 + 2 * j,-4 + 2 * k);
                        scene.add(cube_1_1[i][j][k]);
                    }
                }
            }
            const cube_1_2 = new Array();
            for (i = 0; i <= 4; i++) {
                cube_1_2[i] = new Array();
                for(j = 0; j <= 4; j++) {
                    cube_1_2[i][j] = new Array();
                    for(k = 0; k <=4; k++) {
                        cube_1_2[i][j].push(new THREE.Mesh(torusGeometry, purpleMaterial));
                        cube_1_2[i][j][k].position.set(-4 + 2 * i,8 + 2 * j,-4 + 2 * k);
                        scene.add(cube_1_2[i][j][k]);
                    }
                }
            }
            const cube_1_3 = new Array();
            for (i = 0; i <= 4; i++) {
                cube_1_3[i] = new Array();
                for(j = 0; j <= 4; j++) {
                    cube_1_3[i][j] = new Array();
                    for(k = 0; k <=4; k++) {
                        cube_1_3[i][j].push(new THREE.Mesh(circleGeometry, purpleMaterial));
                        cube_1_3[i][j][k].position.set(8 + 2 * i,8 + 2 * j,-4 + 2 * k);
                        scene.add(cube_1_3[i][j][k]);
                    }
                }
            }
            const cube_2_1 = new Array();
            for (i = 0; i <= 4; i++) {
                cube_2_1[i] = new Array();
                for(j = 0; j <= 4; j++) {
                    cube_2_1[i][j] = new Array();
                    for(k = 0; k <=4; k++) {
                        cube_2_1[i][j].push(new THREE.Mesh(circleGeometry, goldMaterial));
                        cube_2_1[i][j][k].position.set(-16 + 2 * i,-4 + 2 * j,-4 + 2 * k);
                        scene.add(cube_2_1[i][j][k]);
                    }
                }
            }
            const cube_2_2 = new Array();
            for (i = 0; i <= 4; i++) {
                cube_2_2[i] = new Array();
                for(j = 0; j <= 4; j++) {
                    cube_2_2[i][j] = new Array();
                    for(k = 0; k <=4; k++) {
                        cube_2_2[i][j].push(new THREE.Mesh(torusKnotGeometry, goldMaterial));
                        cube_2_2[i][j][k].position.set(-4 + 2 * i,-4 + 2 * j,-4 + 2 * k);
                        scene.add(cube_2_2[i][j][k]);
                    }
                }
            }
            const cube_2_3 = new Array();
            for (i = 0; i <= 4; i++) {
                cube_2_3[i] = new Array();
                for(j = 0; j <= 4; j++) {
                    cube_2_3[i][j] = new Array();
                    for(k = 0; k <=4; k++) {
                        cube_2_3[i][j].push(new THREE.Mesh(coneGeometry, goldMaterial));
                        cube_2_3[i][j][k].position.set(8 + 2 * i,-4 + 2 * j,-4 + 2 * k);
                        scene.add(cube_2_3[i][j][k]);
                    }
                }
            }
            const cube_3_1 = new Array();
            for (i = 0; i <= 4; i++) {
                cube_3_1[i] = new Array();
                for(j = 0; j <= 4; j++) {
                    cube_3_1[i][j] = new Array();
                    for(k = 0; k <=4; k++) {
                        cube_3_1[i][j].push(new THREE.Mesh(cylinderGeometry, redMaterial));
                        cube_3_1[i][j][k].position.set(-16 + 2 * i,-16 + 2 * j,-4 + 2 * k);
                        scene.add(cube_3_1[i][j][k]);
                    }
                }
            }
            const cube_3_2 = new Array();
            for (i = 0; i <= 4; i++) {
                cube_3_2[i] = new Array();
                for(j = 0; j <= 4; j++) {
                    cube_3_2[i][j] = new Array();
                    for(k = 0; k <=4; k++) {
                        cube_3_2[i][j].push(new THREE.Mesh(dodecahedronGeometry, redMaterial));
                        cube_3_2[i][j][k].position.set(-4 + 2 * i,-16 + 2 * j,-4 + 2 * k);
                        scene.add(cube_3_2[i][j][k]);
                    }
                }
            }
            const cube_3_3 = new Array();
            for (i = 0; i <= 4; i++) {
                cube_3_3[i] = new Array();
                for(j = 0; j <= 4; j++) {
                    cube_3_3[i][j] = new Array();
                    for(k = 0; k <=4; k++) {
                        cube_3_3[i][j].push(new THREE.Mesh(icosahedronGeometry, redMaterial));
                        cube_3_3[i][j][k].position.set(8 + 2 * i,-16 + 2 * j,-4 + 2 * k);
                        scene.add(cube_3_3[i][j][k]);
                    }
                }
            }

    }
    repeatCreateCube()


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
        time *= 0.001;

        if(resizeRendererDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }


        camera.rotation.x = Math.cos(time);
        camera.rotation.y = Math.sin(time);
        renderer.render(scene, camera);
    }
    requestAnimationFrame(render)

    renderer.render(scene, camera)
    // function repeatAddObj() {
        
    // }
    // const cube_1 = new THREE.Mesh(geometry, material);
    // cube_1.position.set(-1,0,0)

    // const cube_2 = new THREE.Mesh(geometry, material);
    // cube_2.position.set(1,0,0)

    // const cube_3 = new THREE.Mesh(geometry, material);
    // cube_3.position.set(3,0,0)
    // add that mesh to the scene，向场景添加cube
    // scene.add(cube_1);
    // scene.add(cube_2);
    // scene.add(cube_3);
}

main();
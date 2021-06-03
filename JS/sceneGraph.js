function solarSystem() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});

    const fov = 40;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 50, 0);
    camera.up.set(0, 0, 1);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();
  
    {
      const color = 0xFFFFFF;
      const intensity = 3;
      const light = new THREE.PointLight(color, intensity);
      scene.add(light);
    }
  
    const objects = new Array;
    
    const radius = 1;
    const widthSegments = 100;
    const heightSegments = 100;
    const sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

    //太阳系
    const solarSystem = new THREE.Object3D()
    scene.add(solarSystem);
    objects.push(solarSystem);
    
    const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xFFFF00});
    const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
    sunMesh.scale.set(5, 5, 5);
    solarSystem.add(sunMesh);
    objects.push(sunMesh);
  
    const earthOrbit = new THREE.Object3D();
    earthOrbit.position.x = 10;
    solarSystem.add(earthOrbit);
    objects.push(earthOrbit);

    const earthMaterial = new THREE.MeshPhongMaterial({color: 0x2233FF, emissive: 0x112244});
    const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
    earthOrbit.add(earthMesh);
    objects.push(earthMesh);

    const moonOrbit = new THREE.Object3D();
    moonOrbit.position.x = 2;
    earthOrbit.add(moonOrbit);
    
    const moonMaterial = new THREE.MeshPhongMaterial({color: 0x888888, emissive: 0x222222});
    const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
    moonMesh.scale.set(.5, .5, .5);
    moonOrbit.add(moonMesh);
    objects.push(moonMesh);

    /**
     * @description:为每个节点添加坐标轴 
     * @param {*}
     * @return {*}
     */    
    objects.forEach((node) => {
        const axes = new THREE.AxesHelper();
        axes.material.depthTest = false;
        axes.renderOrder = 1;
        node.add(axes);
    });

    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    function render(time) {
      time *= 0.001;
  
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
  
      objects.forEach((obj) => {//这个是控制object中每个物体自转的
        obj.rotation.y = time;
      });
  
      renderer.render(scene, camera);
  
      requestAnimationFrame(render);
    }
  
    requestAnimationFrame(render);
}
  
solarSystem();


function tank() {
  const canvas = document.querySelector('#d');
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 40;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 50, 0);
  camera.up.set(0, 0, 1);
  camera.lookAt(0, 0, 0);

  const scene = new THREE.Scene();

  {
    const color = 0xFFFFFF;
    const intensity = 3;
    const light = new THREE.PointLight(color, intensity);
    scene.add(light);
  }

  const objects = new Array;
  
  const radius = 1;
  const widthSegments = 6;
  const heightSegments = 100;
  const sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
  const boxGeometry = new THREE.BoxGeometry(2,1,1)

  //太阳系
  const solarSystem = new THREE.Object3D()
  scene.add(solarSystem);
  
  const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xFFFF00});

  const sunMesh = new THREE.Mesh(boxGeometry, sunMaterial);
  sunMesh.scale.set(5, 5, 5);
  solarSystem.add(sunMesh);

  const earthOrbit = new THREE.Object3D();
  earthOrbit.position.x = 5;
  solarSystem.add(earthOrbit);
  objects.push(earthOrbit);

  const earthMaterial = new THREE.MeshPhongMaterial({color: 0x2233FF, emissive: 0x112244});
  const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
  solarSystem.add(earthMesh);
  earthMesh.scale.set(1.5, 1.5, 1.5);
  earthMesh.position.set(5,5,-2.5)

  const earthMesh_2 = new THREE.Mesh(sphereGeometry, earthMaterial);
  earthOrbit.add(earthMesh_2);
  earthMesh_2.scale.set(1.5, 1.5, 1.5);
  earthMesh_2.position.set(-10,5,-2.5)

  const earthMesh_3 = new THREE.Mesh(sphereGeometry, earthMaterial);
  earthOrbit.add(earthMesh_3);
  earthMesh_3.scale.set(1.5, 1.5, 1.5);
  earthMesh_3.position.set(0,-5,-2.5)

  const earthMesh_4 = new THREE.Mesh(sphereGeometry, earthMaterial);
  earthOrbit.add(earthMesh_4);
  earthMesh_4.scale.set(1.5, 1.5, 1.5);
  earthMesh_4.position.set(-10,-5,-2.5)

  const moonOrbit = new THREE.Object3D();
  moonOrbit.position.x = 2;
  earthOrbit.add(moonOrbit);
  
  const moonMaterial = new THREE.MeshPhongMaterial({color: 0x888888, emissive: 0x222222});
  const moonMesh = new THREE.Mesh(boxGeometry, moonMaterial);
  moonMesh.scale.set(10, 2, 2);
  moonOrbit.add(moonMesh);

  /**
   * @description:为每个节点添加坐标轴 
   * @param {*}
   * @return {*}
   */    
  objects.forEach((node) => {
      const axes = new THREE.AxesHelper();
      axes.material.depthTest = false;
      axes.renderOrder = 1;
      node.add(axes);
  });

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time) {
    time *= 0.001;
    solarSystem.position.x = 10 * Math.cos(time);
    
    earthMesh.rotation.y = Math.cos(time);
    earthMesh_2.rotation.y = Math.cos(time);
    earthMesh_3.rotation.y = Math.cos(time);
    earthMesh_4.rotation.y = Math.cos(time);

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }


    // objects.forEach((obj) => {//这个是控制object中每个物体自转的
    //   sunMesh.position.x = time;
    // });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

tank();
//三维数组创建三维方块
const cube = new Array();
for (i = 0; i <= 4; i++) {
    cube[i] = new Array();
    for(j = 0; j <= 4; j++) {
        cube[i][j] = new Array();
        for(k = 0; k <=4; k++) {
            cube[i][j].push(new THREE.Mesh(geometry, material));
            cube[i][j][k].position.set(-6 + 2 * i,-6 + 2 * j,-6 + 2 * k);
            scene.add(cube[i][j][k]);
        }
    }
}
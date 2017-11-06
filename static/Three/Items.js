function createTile(){//creates floor tile
    var geometryFloor = new THREE.BoxGeometry(64, 64, 64, 1, 1, 1);
    var materialFloor  = new THREE.MeshPhongMaterial({
        color:0x6D78C0,
        side: THREE.DoubleSide,
    })
    var meshFloor = new THREE.Mesh(geometryFloor, materialFloor);
    return meshFloor;//return dem object
}

function createPlane(){//creates floor tile
    var geometry = new THREE.PlaneBufferGeometry( 1000, 1000, 1000 );
    var material = new THREE.MeshPhongMaterial( {color: 0x021D3A, side: THREE.DoubleSide} );
    var plane = new THREE.Mesh( geometry, material );
    plane.rotation.x = Math.PI*2.5;
    plane.position.y=-225
    return plane;//return dem object
}

function createLight(){//creates point light at 0,0,0
    var pointLight = new THREE.PointLight( 0xFFffff, 2, 0, 0 )//dem light
    pointLight.position.set( 0, 200, 0 );
    return pointLight;//return dem object
}


function createLiveBlock(){//creates a life block
        var materials = [];
        materials.push(new THREE.MeshPhongMaterial({color:0x51B4B0,side: THREE.DoubleSide,}))
        materials.push(new THREE.MeshPhongMaterial({color:0x51B4B0,side: THREE.DoubleSide,}))
        materials.push(new THREE.MeshPhongMaterial({color:0x51B4B0,side: THREE.DoubleSide,}))
        materials.push(new THREE.MeshPhongMaterial({color:0x51B4B0,side: THREE.DoubleSide,}))
        materials.push(new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('img/dead.png'),side: THREE.DoubleSide,}))
        materials.push(new THREE.MeshPhongMaterial({color:0x51B4B0,side: THREE.DoubleSide,}))
        var materialLife = new THREE.MeshFaceMaterial(materials);
        var geometryLife = new THREE.BoxGeometry(64, 64, 64, 1, 1, 1);
        var meshLife = new THREE.Mesh(geometryLife, materialLife);
        return meshLife;//return dem object
}

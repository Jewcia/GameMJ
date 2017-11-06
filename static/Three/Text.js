function createTextLives(){//create text "lives"
    var geometryText = new THREE.TextGeometry("Lives",{
        size:40,
        height:10,
    });
    var materialText = new THREE.MeshPhongMaterial({
        color:0xffffff,
        side: THREE.DoubleSide,
    })
    var meshText = new THREE.Mesh(geometryText, materialText);
    meshText.position.x=60
    meshText.position.y=-233
    meshText.position.z=450
    meshText.rotation.x = -Math.PI*2.5;
    meshText.rotation.z = -Math.PI;
    return meshText
}

function createTextRows(){//create text "rows"
    var geometryText = new THREE.TextGeometry("Row",{
        size:40,
        height:10,
    });
    var materialText = new THREE.MeshPhongMaterial({
        color:0xffffff,
        side: THREE.DoubleSide,
    })
    var meshText = new THREE.Mesh(geometryText, materialText);
    meshText.position.x=-60
    meshText.position.y=-233
    meshText.position.z=-390
    meshText.rotation.x = -Math.PI*2.5;
    return meshText
}

function createTextColumns(){//creates text "columns"
    var geometryText = new THREE.TextGeometry("Column",{
        size:40,
        height:10,
    });
    var materialText = new THREE.MeshPhongMaterial({
        color:0xffffff,
        side: THREE.DoubleSide,
    })
    var meshText = new THREE.Mesh(geometryText, materialText);
    meshText.rotation.z = Math.PI*2.5;
    meshText.rotation.x = -Math.PI*2.5;
    meshText.position.x=-390
    meshText.position.y=-233
    meshText.position.z=100
    return meshText
}

function createTextNumber(i){//creates numbers
        var geometryText = new THREE.TextGeometry(i,{
            size:40,
            height:10,
        });
        var materialText = new THREE.MeshPhongMaterial({
            color:0xffffff,
            side: THREE.DoubleSide,
        })
        var meshText = new THREE.Mesh(geometryText, materialText);
        return meshText
}

function createTextAction(stage){
    var text
    var text2
    if(stage.userCount==0){
        text="Row: "+stage.text1
    }
    else{
        text="Column: "+stage.text2
    }

    var geometryText = new THREE.TextGeometry(text,{
        size:40,
        height:10,
    });
    var materialText = new THREE.MeshPhongMaterial({
        color:0xffffff,
        side: THREE.DoubleSide,
    })
    var meshText = new THREE.Mesh(geometryText, materialText);
    //meshText.rotation.y = -Math.PI*2.5;
    meshText.rotation.x = Math.PI/-2;
    meshText.rotation.z = Math.PI/-2;
    meshText.position.x=+350
    meshText.position.y=-233
    meshText.position.z=-330

    return meshText
}

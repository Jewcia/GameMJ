//mouse

/*//mousecamera
document.getElementById("content").addEventListener("mousemove", onMouseMove,false);
var geometryMouse = new THREE.BoxGeometry(64, 64, 64, 1, 1, 1);
var materialMouse  = new THREE.MeshBasicMaterial({
    color:0x600B69,
    side: THREE.DoubleSide,
    opacity:0,
    transparent:true,
})
var meshMouse = new THREE.Mesh(geometryMouse, materialMouse);
scene.add(meshMouse);
var curve = new THREE.EllipseCurve(
    0,  0,            // ax, aY
    300, 300,           // xRadius, yRadius
    0,  2 * Math.PI,  // aStartAngle, aEndAngle
    false,            // aClockwise
    0                 // aRotation
);

var path = new THREE.Path( curve.getPoints( 50 ) );
var geomO = path.createPointsGeometry( 50 );
var matO = new THREE.LineBasicMaterial( {
    opacity:0,
    transparent:true,
});
orbita = new THREE.Line( geomO, matO )
orbita.rotateX(Math.PI / 2);
scene.add(orbita);
meshMouse.position.x = 300;
orbita.add(meshMouse); // planeta jest dzieckiem pojemnika / orbity
var x1,x2,y1,y2;
function onMouseMove(event){
scene.updateMatrixWorld(true);
var position = new THREE.Vector3();
position.getPositionFromMatrix( meshMouse.matrixWorld );
        x1=event.clientX
        y1=event.clientY
        if(x1!=x2){
            if(x1-x2>0){
                orbita.rotation.z+=0.03
                camera.lookAt(position);
            }
            else if(x1-x2<0){
                orbita.rotation.z-=0.03
                camera.lookAt(position);
            }
        };
        if(y1!=y2){
            if(y1-y2>0){
                orbita.position.y-=7
                camera.lookAt(position);
                console.log(position)
            }
            else if(y1-y2<0){
                orbita.position.y+=7
                camera.lookAt(position);
            }
        };
        x2=x1
        y2=y1
}
*/

//mouse2
/*var x1,x2,y1,y2;
function onMouseMove(event){
    x1=event.clientX
    y1=event.clientY
    if(x1!=x2){
        if(x1-x2>0){
            camera.position.x = camera.position.x * Math.cos(0.03) - camera.position.z * Math.sin(0.03);
            camera.position.z = camera.position.z * Math.cos(0.03) + camera.position.x * Math.sin(0.03);
            camera.lookAt(mesh.position);
        }
        else if(x1-x2<0){
            camera.position.x = camera.position.x * Math.cos(0.03) + camera.position.z * Math.sin(0.03);
            camera.position.z = camera.position.z * Math.cos(0.03) - camera.position.x * Math.sin(0.03);
            camera.lookAt(mesh.position);
        }
    };
    console.log(camera.position.y)
    if(y1!=y2){
        if(y1-y2>0){
            camera.position.y+=3
            camera.lookAt(mesh.position);
        }
        else if(y1-y2<0){
            camera.position.y-=3
            camera.lookAt(mesh.position);
        }
    };
    x2=x1
    y2=y1
}*/

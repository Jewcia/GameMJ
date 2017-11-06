function Main(o,user){
    startTime = new Date().getTime();
    stage=switchStages(o,user)//stage
    console.log("Rząd:"+stage.row+" Column:"+stage.column)
    console.log(stage.userCount)
    lifeCounter=2;//used in raycasting it's 3 lives actually
    var winningRow,winningColumn//setting the winning tile
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45,4/3,0.1,10000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x810009);
    var w=window.innerWidth-3
    var h=window.innerHeight-3
    renderer.setSize(w, h);
    window.onresize=function(){//matching the size of the browser
        var w=window.innerWidth
        var h=window.innerHeight
        renderer.setSize(w, h);
    }
    document.getElementById("content").appendChild(renderer.domElement);


    //ENVIRONMENT

    //plane
    var Plane= createPlane()
    scene.add(Plane)
    //light
    var light=new createLight()
    scene.add(light)

    //Floor
    var Tiles=setTiles(scene)
    //Text-Lives
    var lives=new createTextLives()
    scene.add(lives)

    //Blocks-Lives
    setLiveBlocks(scene)

    //createAction
    var action=createTextAction(stage)
    scene.add(action)

    //Text-Rows
    var rows=new createTextRows()
    scene.add(rows)

    //Text-Numbers rows
    setTextNumberRows(scene)

    //Text-Columns
    var columns=new createTextColumns()
    scene.add(columns)

    //Text-Numbers columns
    setTextNumberColumns(scene)

    //Models
    modelCh = new modelChoosing(stage.userCount,camera)
//RAYCASTER
    document.addEventListener("mousedown", onMouseDown, true);
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2()
    function onMouseDown(event) {
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.width ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.height ) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(scene.children);
        if(intersects.length>0){
            var name=intersects[0].object.name
            var block=scene.getObjectByName(name)
            var count=clickRay(block,stage,scene,lifeCounter,onMouseDown)
            lifeCounter=count//dont ask
            net.sendClicked(name);
        }
    }
    net.changeFunk(onMouseDown)
//ANIMATE
    function animateScene() {
        requestAnimationFrame(animateScene);
        renderer.render(scene, camera);
    }
    animateScene()
}

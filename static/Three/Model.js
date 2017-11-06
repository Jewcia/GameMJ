function modelChoosing(user,camera){//stage.userCount
    var clock = new THREE.Clock();
    var clock2 = new THREE.Clock();
    var objM1={}
    var objM2={}
    var boolW=false//for first user
    var boolA = false
    var boolD = false
    var boolQ = false
    var boolE = false

    var boolW2 = false//for second user
    var boolA2 = false
    var boolD2 = false
    var boolQ2 = false
    var boolE2 = false

    whichBool = false
    var Y=20

    if(user==0){
        whichBool=true
    }
    //MODELS
    var tablica=[]
    var loader = new THREE.JSONLoader();
    var model = null;
    loader.load('Models/Blade/Blade.js', function (geometry, mat) {
        geometry.computeMorphNormals();
        var matNew = new THREE.MeshBasicMaterial(
            {
                map: THREE.ImageUtils.loadTexture ("Models/Blade/Blade.jpg"),
                morphTargets: true,
                morphNormals: true,
                specular: 0xffffff,
                shininess: 60,
                shading: THREE.SmoothShading,
                vertexColors: THREE.FaceColors
            });

            model = new THREE.MorphAnimMesh(geometry, matNew );
            model.name = "Blade";
            model.position.y = -180; // ustaw pozycje modelu
            model.position.x = -180; // ustaw pozycje modelu
            model.scale.set(2,2,2); // ustaw skalę modelu
            scene.add(model);

            model.parseAnimations();
            for (var key in model.geometry.animations) {

                if (key === 'length' || !model.geometry.animations.hasOwnProperty(key)) continue;
                tablica.push(key);
            }

            model.playAnimation(tablica[0], 5);
            function animateModel(){
                if(boolW){
                    if(model.position.x>320){
                        model.position.x=319.9999
                    }
                    else if(model.position.x<-300){
                        model.position.x=-299.9999
                    }
                    else if(model.position.z>320){
                        model.position.z=319.9999
                    }
                    else if(model.position.z<-300){
                        model.position.z=-299.9999
                    }
                    else{
                        model.translateX(-2)
                    }
                    if(whichBool){
                        var camVect = new THREE.Vector3(240, Y, 0);
                        var camPos = camVect.applyMatrix4(model.matrixWorld);
                        camera.position.x = camPos.x;
                        camera.position.z = camPos.z;
                        camera.lookAt(model.position);
                    }
                }
                if(boolA){//obracanie
                    model.rotation.y += 0.05;
                    if(whichBool){
                        var camVect = new THREE.Vector3(240, Y, 0);
                        var camPos = camVect.applyMatrix4(model.matrixWorld);
                        camera.position.x = camPos.x;
                        camera.position.z = camPos.z;
                        camera.lookAt(model.position);
                    }
                }
                if(boolD){
                    model.rotation.y -= 0.05;
                    if(whichBool){
                        var camVect = new THREE.Vector3(240, Y, 0);
                        var camPos = camVect.applyMatrix4(model.matrixWorld);
                        camera.position.x = camPos.x;
                        camera.position.z = camPos.z;
                        camera.lookAt(model.position);
                    }
                }
                if(boolQ && whichBool){
                    camera.position.y -=5
                    Y=camera.position.y
                    console.log(Y)
                    camera.lookAt(model.position);
                }
                if(boolE && whichBool){
                    camera.position.y +=5
                    Y=camera.position.y
                    camera.lookAt(model.position);
                }

                var delta = clock.getDelta();
                model.updateAnimation(delta * 1000);




                              //TUTAJ
                objM1={x:model.position.x,z:model.position.z,rotY:model.rotation.y}
                //console.log(objM1.x+" "+objM1.z+" "+objM1.rotY)




                requestAnimationFrame(animateModel);
            }
            if(whichBool){
                var camVect = new THREE.Vector3(300, 200, 0);
                var camPos = camVect.applyMatrix4(model.matrixWorld);
                camera.position.x = camPos.x;
                camera.position.y = camPos.y;
                camera.position.z = camPos.z;
                camera.lookAt(model.position);
            }
            animateModel()

            //tutaj funkcja w intervale
            console.log(objM1.x+" "+objM1.z+" "+objM1.rotY)
            //powiedzmy ze wysylasz to co 5 sek na server
            //po czym pobierasz i robisz to:
            //model1.position.x=objM1.x
            //musisz napisac to w dwch miejscach jedno tutaj a drugie w
            //modelu pierwszym na gorze


        });
        //model2
        var tablica2=[]
        var loader2 = new THREE.JSONLoader();
        var model2 = null;
        loader.load('Models/Samurai/Samourai.js', function (geometry, mat) {
            geometry.computeMorphNormals();
            var matNew2 = new THREE.MeshBasicMaterial(
                {
                    map: THREE.ImageUtils.loadTexture ("Models/Samurai/Samourai.jpg"),
                    morphTargets: true,
                    morphNormals: true,
                    specular: 0xffffff,
                    shininess: 60,
                    shading: THREE.SmoothShading,
                    vertexColors: THREE.FaceColors
                });

                model2 = new THREE.MorphAnimMesh(geometry, matNew2 );
                model2.name = "Samurai";
                model2.position.y = -180; // ustaw pozycje modelu
                model2.position.x = -180; // ustaw pozycje modelu
                model2.scale.set(2,2,2); // ustaw skalę modelu
                scene.add(model2);

                model2.parseAnimations();
                for (var key in model2.geometry.animations) {

                    if (key === 'length' || !model2.geometry.animations.hasOwnProperty(key)) continue;
                    tablica2.push(key);
                    console.log(key)
                }

                model2.playAnimation(tablica2[0], 5);

                function animateModel2(){
                    if(boolW2){
                        if(model2.position.x>320){
                            model2.position.x=319.9999
                        }
                        else if(model2.position.x<-300){
                            model2.position.x=-299.9999
                        }
                        else if(model2.position.z>320){
                            model2.position.z=319.9999
                        }
                        else if(model2.position.z<-300){
                            model2.position.z=-299.9999
                        }
                        else{
                            model2.translateX(-2)
                        }
                        if(!whichBool){
                            var camVect = new THREE.Vector3(240, Y, 0);
                            var camPos = camVect.applyMatrix4(model2.matrixWorld);
                            camera.position.x = camPos.x;
                            camera.position.z = camPos.z;
                            camera.lookAt(model2.position);
                        }
                    }
                    if(boolA2){//obracanie
                        model2.rotation.y += 0.05;
                        if(!whichBool){
                            var camVect = new THREE.Vector3(240, Y, 0);
                            var camPos = camVect.applyMatrix4(model2.matrixWorld);
                            camera.position.x = camPos.x;
                            camera.position.z = camPos.z;
                            camera.lookAt(model2.position);
                            camera.lookAt(model2.position);
                        }
                    }
                    if(boolD2){
                        model2.rotation.y -= 0.05;
                        if(!whichBool){
                            var camVect = new THREE.Vector3(240, Y, 0);
                            var camPos = camVect.applyMatrix4(model2.matrixWorld);
                            camera.position.x = camPos.x;
                            camera.position.z = camPos.z;
                            camera.lookAt(model2.position);
                        }
                    }
                    if(boolQ2 && !whichBool){
                        camera.position.y -=5
                        Y=camera.position.y
                        console.log(Y)
                        camera.lookAt(model2.position);
                    }
                    if(boolE2 && !whichBool){
                        camera.position.y +=5
                        Y=camera.position.y
                        camera.lookAt(model2.position);
                    }

                    var delta2 = clock2.getDelta();
                    model2.updateAnimation(delta2 * 1000);

                    //TUTAJ


                    objM2={x:model2.position.x,z:model2.position.z,rotY:model2.rotation.y}

                    requestAnimationFrame(animateModel2);
                }
                if(!whichBool){
                    var camVect = new THREE.Vector3(300, 200, 0);
                    var camPos = camVect.applyMatrix4(model2.matrixWorld);
                    camera.position.x = camPos.x;
                    camera.position.y = camPos.y;
                    camera.position.z = camPos.z;
                    camera.lookAt(model2.position);
                }
                animateModel2()

                var sending = setInterval(function () {
                    if (whichBool) {
                        net.sendPos(objM1)
                    } else {
                        net.sendPos(objM2)
                    }
                }, 1000)





                //tutaj funkcja w intervale
                console.log(objM2.x+" "+objM2.z+" "+objM2.rotY)
                //powiedzmy ze wysylasz to co 5 sek na server
                //po czym pobierasz i robisz to:
                //model2.position.x=objM2.x
                //musisz napisac to w dwch miejscach jedno tutaj a drugie w
                //modelu pierwszym na gorze





            });
            //KEYBOARD
            var h=0
            var a=0
            var d=0
            document.addEventListener("keydown", onKeyDown, false); // naciśnięcie dowolnego klawisza
            function onKeyDown(event) {
                var keyCode = event.which; // kod klawisza
                switch (keyCode) {
                    case 65: //a
                    if (a==0) {
                        if(whichBool){
                            boolA=true
                        }
                        else{
                            boolA2=true
                        }
                            net.keyDowned("a")
                            a++
                    }
                    break;
                    case 87: //w
                    if(h==0){
                        if(whichBool){
                            boolW=true
                            model.playAnimation(tablica[1], 5);
                        }
                        else{
                            boolW2=true
                            model2.playAnimation(tablica2[1], 5);
                        }
                        net.keyDowned("w")
                        h++
                    }
                    break;
                    case 68: //d
                    if (d==0) {
                        if(whichBool){
                            boolD=true
                        }
                        else{
                            boolD2=true
                        }
                            net.keyDowned("d")
                            d++
                    }
                    break;
                    case 81: //q
                    if(whichBool){
                        boolQ=true
                    }
                    else{
                        boolQ2=true
                    }
                    break;
                    case 69: //e
                    if(whichBool){
                        boolE=true
                    }
                    else{
                        boolE2=true
                    }
                    break;
                }
            }

            document.addEventListener("keyup", onKeyUp, false); //zwolnienie dowolnego klawisza
            function onKeyUp(event) {
                var keyCode = event.which; // kod klawisza
                switch (keyCode) {
                    case 65:
                        a=0
                    if(whichBool){
                        boolA=false
                    }
                    else{
                        boolA2=false
                    }
                        net.keyUpped("a")
                    break;
                    case 87:
                    h=0
                    if(whichBool){
                        boolW=false
                        model.playAnimation(tablica[0], 5);
                    }
                    else{
                        boolW2=false
                        model2.playAnimation(tablica2[0], 5);
                    }
                        net.keyUpped("w")
                    break;
                    case 68:
                        d=0
                    if(whichBool){
                        boolD=false
                    }
                    else{
                        boolD2=false
                    }
                        net.keyUpped("d")
                    break;
                    case 81:
                    if(whichBool){
                        boolQ=false
                    }
                    else{
                        boolQ2=false
                    }
                    break;
                    case 69:
                    if(whichBool){
                        boolE=false
                    }
                    else{
                        boolE2=false
                    }
                    break;
                }
            }
            this.keyDowner = function (key) {
                switch (key) {
                    case "w":
                        //console.log("w")
                        if (whichBool) {
                            boolW2 = true
                            model2.playAnimation(tablica2[1], 5);
                        } else {
                            boolW = true
                            model.playAnimation(tablica[1], 5);
                        }
                        break;
                    case "a":
                        if (whichBool) {
                            boolA2 = true
                        } else {
                            boolA = true
                        }
                        //console.log("a")
                        break;
                    case "d":
                        if (whichBool) {
                            boolD2 = true
                        } else {
                            boolD = true
                        }
                        //console.log("d")
                        break;
                    case "s": //just in case kappa
                       // console.log("w")
                        if (whichBool) {
                            boolW2 = true
                            model2.playAnimation(tablica2[1], 5);
                        } else {
                            boolW = true
                            model.playAnimation(tablica[1], 5);
                        }
                        break;
                }
            }
            this.keyUpper = function (key) {
                switch (key) {
                    case "w":
                       // console.log("w")
                        if (whichBool) {
                            boolW2 = false
                            model2.playAnimation(tablica2[0], 5);
                        } else {
                            boolW = false
                            model.playAnimation(tablica[0], 5);
                        }
                        break;
                    case "a":
                        if (whichBool) {
                            boolA2 = false
                        } else {
                            boolA = false
                        }
                        //console.log("a")
                        break;
                    case "d":
                        if (whichBool) {
                            boolD2 = false
                        } else {
                            boolD = false
                        }
                        //console.log("d")
                        break;
                    case "s": //just in case
                        //console.log("w")
                        if (whichBool) {
                            boolW2 = false
                            model2.playAnimation(tablica2[0], 5);
                        } else {
                            boolW = false
                            model.playAnimation(tablica[0], 5);
                        }
                        break;
                }
            }
            this.remaker = function (pos) {
                if (whichBool) {
                    model2.position.x = pos.x;
                    model2.position.z = pos.z;
                    model2.rotation.y = pos.rotY;
                } else {
                    model.position.x = pos.x;
                    model.position.z = pos.z;
                    model.rotation.y = pos.rotY;
                }
            }
        }

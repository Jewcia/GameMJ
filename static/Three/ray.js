function clickRay(obj,stage,scene,lifeCounter,onMouseDown){
    if(obj.userData.a==0){
        if(obj.userData.row==stage.row && obj.userData.column==stage.column){
            var endTime = new Date().getTime();
            var finalTime=(endTime-startTime)/1000
            console.log(finalTime+"seconds") //TIME
            var lost=false;
            win(finalTime,lost,onMouseDown)
            console.log("You Won!")
            obj.material.color.setHex(0x08CC08)
        }else{
            obj.userData.a=2//to not loose lives twice
            obj.material.color.setHex(0xEA093D)//to indicate it was used
            scene.remove( scene.getObjectByName("life"+lifeCounter) );//remove the life block
            lifeCounter--
            if(lifeCounter<0){
                var lost=true;
                var endTime = new Date().getTime();
                var finalTime=(endTime-startTime)/1000
                console.log(finalTime+"seconds") //TIME
                win(finalTime,lost,onMouseDown)
                console.log("You lost")
            }
        }
    }
    else if(obj.userData.a==1){
        obj.userData.a=2//to not loose lives twice
        scene.remove(obj)
        scene.remove( scene.getObjectByName("life"+lifeCounter) );//remove the life block
        lifeCounter--
        if(lifeCounter<0){
            var lost=true;
            var endTime = new Date().getTime();
            var finalTime=(endTime-startTime)/1000
            console.log(finalTime+"seconds") //TIME
            win(finalTime,lost)
            console.log("You lost")
        }
    }
    else if(obj.userData.number==0){

        var index=obj.userData.index//1,2,3 itd
        var type=obj.userData.type//column , row
        obj.material.color.setHex(0xE7E754)//KOLORYSTYKA
        obj.userData.number=1
    }
    else if(obj.userData.number==1){
        var index=obj.userData.index//1,2,3 itd
        var type=obj.userData.type//column , row
        if(obj.userData.type=="row"){//KOLORYSTYKA
            for(var i=1;i<=10;i++){
                var name="row"+i
                scene.getObjectByName(String(name)).material.color.setHex(0xffffff)
                scene.getObjectByName(String(name)).userData.number=0
            }

        }
        else{
            for(var i=1;i<=10;i++){
                var name="column"+i
                scene.getObjectByName(String(name)).material.color.setHex(0xffffff)
                scene.getObjectByName(String(name)).userData.number=0
            }
        }
        obj.material.color.setHex(0x08CC08)
        obj.userData.number=0
    }
    return lifeCounter
}

function setTiles(scene){ //sets the floor
    var x=-288;
    var y=-256;
    var z=-288;
    var o=1;//counter
    for(var i=1;i<=10;i++){
        for(var j=1;j<=10;j++){
            var tile=new createTile()
            tile.name="tile"+i+j
            console.log(tile.name)
            tile.userData = { a:0,row:i,column:j};//winning block
            tile.position.x=x
            tile.position.z=z
            tile.position.y=y
            scene.add(tile);
            z+=66
            o++
        }
        z=-288
        x+=66
    }
}

function setLiveBlocks(scene){//sets life blocks
    var x=-200
    for(var i=0;i<3;i++){
        var liveBlock=new createLiveBlock()
        liveBlock.name="life"+i
        liveBlock.position.x=x
        liveBlock.rotation.x = Math.PI*-2.5;
        liveBlock.rotation.z =- Math.PI;
        liveBlock.position.z=375
        liveBlock.position.y=-250
        x+=200
        scene.add(liveBlock);
    }
}

/*function setHelpBlocks(scene){//sets help blocks
    var x=180
    for(var i=0;i<2;i++){
        var blockHelp=new createHelpBlock()
        blockHelp.name="help"+i
        blockHelp.userData = { a:1,index:i};
        scene.add(blockHelp);
        blockHelp.rotation.x = Math.PI*2.5;
        blockHelp.rotation.z =- Math.PI*2.5;
        blockHelp.position.x=375
        blockHelp.position.y=-250
        blockHelp.position.z=x
        x+=100
    }
}*/

function setTextNumberRows(scene){//sets row numbers
    var x=-320;
    var y=-233;
    var z=-330;
    for(var i=1;i<=10;i++){
        var numberRow=new createTextNumber(i)
        numberRow.userData={number:0,type:"row",index:i}
        numberRow.name="row"+i
        numberRow.position.x=x
        numberRow.position.y=y
        numberRow.position.z=z
        numberRow.rotation.x = -Math.PI*2.5;
        scene.add(numberRow);
        x+=66
    }
}

function setTextNumberColumns(scene){//sets column numbers
    var x=-330;
    var y=-233;
    var z=-270;
    for(var i=1;i<=10;i++){
        var numberColumn=new createTextNumber(i)
        numberColumn.userData={number:0,type:"column",index:i}
        numberColumn.name="column"+i
        numberColumn.rotation.z = Math.PI*2.5;
        numberColumn.rotation.x = -Math.PI*2.5;
        numberColumn.position.x=x
        numberColumn.position.y=y
        numberColumn.position.z=z
        scene.add(numberColumn);
        if(i==9){//liczba dziesięc była za szeroka
            z+=80
        }
        else{
            z+=66
        }
    }
}

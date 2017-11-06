function startS(){
    var w=window.innerWidth-3
    var h=window.innerHeight-3
    var cont=document.getElementById("content")
    var log=document.getElementById("info")
    cont.style.width=w+"px"
    cont.style.height=h+"px"
    cont.style.backgroundColor="#1F3E6D"
    log.style.backgroundColor="rgba(190, 63, 72,0.9)"
    log.style.height=h+"px"
    log.style.width=w-w*1/5+"px"
    window.onresize=function(){//matching the size of the browser
        var w=window.innerWidth
        var h=window.innerHeight
        cont.style.width=w+"px"
        cont.style.height=h+"px"
        log.style.height=h+"px"
        log.style.width=w-w*1/5+"px"
    }
    document.getElementById("li1").addEventListener("click", function () {
        document.getElementById("li2").style.backgroundColor="#A1C322"
        document.getElementById("li3").style.backgroundColor="#A1C322"
        document.getElementById("li4").style.backgroundColor="#A1C322"
        document.getElementById("li5").style.backgroundColor="#A1C322"
        document.getElementById("li6").style.backgroundColor="#A1C322"
        document.getElementById("li1").style.backgroundColor="#DAF478"
        stage=0
    })
    document.getElementById("li2").addEventListener("click", function () {
        document.getElementById("li3").style.backgroundColor="#A1C322"
        document.getElementById("li4").style.backgroundColor="#A1C322"
        document.getElementById("li5").style.backgroundColor="#A1C322"
        document.getElementById("li6").style.backgroundColor="#A1C322"
        document.getElementById("li1").style.backgroundColor="#A1C322"
        document.getElementById("li2").style.backgroundColor="#DAF478"
        stage=1
    })
    document.getElementById("li3").addEventListener("click", function () {
        document.getElementById("li4").style.backgroundColor="#A1C322"
        document.getElementById("li5").style.backgroundColor="#A1C322"
        document.getElementById("li6").style.backgroundColor="#A1C322"
        document.getElementById("li1").style.backgroundColor="#A1C322"
        document.getElementById("li2").style.backgroundColor="#A1C322"
        document.getElementById("li3").style.backgroundColor="#DAF478"
        stage=2
    })
    document.getElementById("li4").addEventListener("click", function () {
        document.getElementById("li5").style.backgroundColor="#A1C322"
        document.getElementById("li6").style.backgroundColor="#A1C322"
        document.getElementById("li1").style.backgroundColor="#A1C322"
        document.getElementById("li2").style.backgroundColor="#A1C322"
        document.getElementById("li3").style.backgroundColor="#A1C322"
        document.getElementById("li4").style.backgroundColor="#DAF478"
        stage=3
    })
    document.getElementById("li5").addEventListener("click", function () {
        document.getElementById("li5").style.backgroundColor="#DAF478"
        document.getElementById("li6").style.backgroundColor="#A1C322"
        document.getElementById("li1").style.backgroundColor="#A1C322"
        document.getElementById("li2").style.backgroundColor="#A1C322"
        document.getElementById("li3").style.backgroundColor="#A1C322"
        document.getElementById("li4").style.backgroundColor="#A1C322"
        stage=4
    })
    document.getElementById("li6").addEventListener("click", function () {
        document.getElementById("li5").style.backgroundColor="#A1C322"
        document.getElementById("li6").style.backgroundColor="#DAF478"
        document.getElementById("li1").style.backgroundColor="#A1C322"
        document.getElementById("li2").style.backgroundColor="#A1C322"
        document.getElementById("li3").style.backgroundColor="#A1C322"
        document.getElementById("li4").style.backgroundColor="#A1C322"
        stage=5
    })
}

function win(time,lost,onMouseDown) {
    document.removeEventListener("mousedown", onMouseDown, true);
    if(!lost){
        net.weWon(time)
    }
    var finish=document.createElement("div");
    finish.style.width=700+"px";
    finish.style.height=80+"%"
    finish.style.border="1px black solid"
    finish.style.backgroundColor="#041E37"
    finish.style.position="absolute"
    finish.style.top=50+"%"
    finish.style.left=50+"%"
    finish.style.transform="translate(-50%,-50%)";
    finish.style.color="#DAF478"
    finish.style.textAlign="center"
    finish.style.fontSize=100+"px"
    finish.style.fontFamily="Monospace"
    if(!lost){
        finish.innerHTML="YOU WON"
    }
    else{
        finish.innerHTML="YOU LOST"
    }
    var cont=document.getElementById("content")
    var but1=document.createElement("button");
    but1.style.width=200+"px"
    but1.style.height=100+"px"
    but1.style.backgroundColor="rgba(190, 63, 72,0.9)"
    but1.style.position="absolute"
    but1.style.top=80+"%"
    but1.style.left=20+"%"
    but1.style.transform="translate(-50%,-50%)";
    but1.style.textAlign="center"
    but1.style.fontSize=20+"px"
    but1.style.fontFamily="Monospace"
    but1.innerHTML="Your Highscores"
    but1.addEventListener("click", function () {
        net.getUserStageLb()
        var finishOuter=document.createElement("div");
        finishOuter.id = "finish2"
        finishOuter.style.width=700+"px";
        finishOuter.style.height=80+"%"
        finishOuter.style.position="absolute"
        finishOuter.style.top=50+"%"
        finishOuter.style.left=50+"%"
        finishOuter.style.transform="translate(-50%,-50%)";
        finishOuter.style.border="1px black solid"
        finishOuter.style.backgroundColor="#3E6781"
        var high=document.createElement("div");
        finishOuter.appendChild(high)
        cont.appendChild(finishOuter)
        high.id = "high2"
        high.style.width=700+"px";
        high.style.height=80+"%"
        high.style.backgroundColor="#3E6781"
        high.style.position="absolute"
        high.style.top=40+"%"
        high.style.left=50+"%"
        high.style.transform="translate(-50%,-50%)";
        high.style.color="#DAF478"
        high.style.textAlign="center"
        high.style.fontSize=100+"px"
        high.style.fontFamily = "Monospace"
        high.innerHTML = "Trwa pobieranie danych"
        high.style.overflow="auto"
    },true)
    var but2=document.createElement("button");
    but2.style.width=200+"px"
    but2.style.height=100+"px"
    but2.style.backgroundColor="rgba(190, 63, 72,0.9)"
    but2.style.position="absolute"
    but2.style.top=80+"%"
    but2.style.left=80+"%"
    but2.style.transform="translate(-50%,-50%)";
    but2.style.textAlign="center"
    but2.style.fontSize=20+"px"
    but2.style.fontFamily="Monospace"
    but2.innerHTML="Highscores"
    but2.addEventListener("click", function () {
        net.getStageLb()
        var finishOuter=document.createElement("div");
        finishOuter.id = "finish1"
        finishOuter.style.width=700+"px";
        finishOuter.style.height=80+"%"
        finishOuter.style.position="absolute"
        finishOuter.style.top=50+"%"
        finishOuter.style.left=50+"%"
        finishOuter.style.transform="translate(-50%,-50%)";
        finishOuter.style.border="1px black solid"
        finishOuter.style.backgroundColor="#43881E"
        var high=document.createElement("div");
        finishOuter.appendChild(high)
        cont.appendChild(finishOuter)
        high.id = "high1"
        high.style.width=700+"px";
        high.style.height=80+"%"
        high.style.backgroundColor="#43881E"
        high.style.position="absolute"
        high.style.top=40+"%"
        high.style.left=50+"%"
        high.style.transform="translate(-50%,-50%)";
        high.style.color="#DAF478"
        high.style.textAlign="center"
        high.style.fontSize=100+"px"
        high.style.fontFamily = "Monospace"
        high.innerHTML = "Trwa pobieranie danych"
        high.style.overflow="auto"
    },true)
    var but4=document.createElement("button");
    but4.style.width=200+"px"
    but4.style.height=100+"px"
    but4.style.backgroundColor="rgba(190, 63, 72,0.9)"
    but4.style.position="absolute"
    but4.style.top=80+"%"
    but4.style.left=50+"%"
    but4.style.transform="translate(-50%,-50%)";
    but4.style.textAlign="center"
    but4.style.fontSize=20+"px"
    but4.style.fontFamily="Monospace"
    but4.innerHTML="Restart"
    but4.addEventListener("click", function () {
        net.resetMe();
    },true)
    var img=document.createElement("img");
    if(!lost){
        img.setAttribute("src", "img/lul.gif");
    }
    else{
        img.setAttribute("src", "img/lost.gif");
    }
    img.setAttribute("width", "304");
    img.setAttribute("height", "304");
    img.style.position="absolute"
    img.style.top=40+"%"
    img.style.left=50+"%"
    img.style.transform="translate(-50%,-50%)";
    finish.appendChild(img)
    finish.appendChild(but1)
    finish.appendChild(but2)
    finish.appendChild(but4)
    cont.appendChild(finish)
}
function writeHigh(scores, ifStage) {
    console.log(scores)
    var high;
    var finishOuter;
    if (ifStage) {
        high = document.getElementById("high1")
        finishOuter= document.getElementById("finish1")
    } else {
        high = document.getElementById("high2")
        finishOuter= document.getElementById("finish2")
    }

    var but3=document.createElement("button");
    but3.style.width=200+"px"
    but3.style.height=100+"px"
    but3.style.backgroundColor="rgba(190, 63, 72,0.9)"
    but3.style.position="absolute"
    but3.style.bottom=0+"%"
    but3.style.left=20+"%"
    but3.style.transform="translate(-50%,-50%)";
    but3.style.textAlign="center"
    but3.style.fontSize=20+"px"
    but3.style.fontFamily="Monospace"
    but3.innerHTML="Back"
    finishOuter.appendChild(but3)
    but3.addEventListener("click",function(){
        finishOuter.parentNode.removeChild(finishOuter);
    },true)

    high.style.fontSize=30+"px"
    high.innerHTML=""
    var table = document.createElement("table")
    high.appendChild(table)
    var tr = document.createElement("tr")
    table.appendChild(tr);
    var th = document.createElement("th")
    tr.appendChild(th)
    th.innerHTML = "Place"
    th = document.createElement("th")
    tr.appendChild(th)
    if (ifStage) {
        th.innerHTML = "User-1"
    } else {
        th.innerHTML = "You"
    }
    th = document.createElement("th")
    tr.appendChild(th)
    th.innerHTML = "User-2"
    th = document.createElement("th")
    tr.appendChild(th)
    th.innerHTML = "Time"
    th = document.createElement("th")
    tr.appendChild(th)
    th.innerHTML = "Stage"
    var cnt=10;
    if (scores.length < 10) {
        cnt=scores.length
    }
    for (var i = 0; i < cnt; i++) {
        var tr = document.createElement("tr")
        table.appendChild(tr);
        var td = document.createElement("td")
        tr.appendChild(td)
        td.innerHTML = i+1
        td = document.createElement("td")
        tr.appendChild(td)
        td.innerHTML = scores[i].user1
        td = document.createElement("td")
        tr.appendChild(td)
        td.innerHTML = scores[i].user2
        td = document.createElement("td")
        tr.appendChild(td)
        td.innerHTML = scores[i].time
        td = document.createElement("td")
        tr.appendChild(td)
        td.innerHTML = parseInt(scores[i].stage)+1
    }
}

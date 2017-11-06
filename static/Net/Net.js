function Net() {
        var client = io();
        var funk=0
        var first=false;
        secondOut = false;
        leaveNoMatter = false
        this.changeFunk=function(das){
            console.log(das)
            funk=das
        }
        client.on("onlogin", function (data) { //when server sends you data back after you tried logging in
                console.log(data);

                switch (data.done) {
                        case 0: //Impossibru now
                            //alert("Złe hasło")
                            break;
                        case 1:
                            alert("Zalogowano")
                            break;
                    case 2:
                        alert("Zły login lub hasło") //changes
                        document.getElementById('Login').disabled = false
                        document.getElementById('Password').disabled = false
                        document.getElementById('start').disabled = false
                        document.getElementById('register').disabled = false
                        break;
                    case 3:
                        alert("Ktoś inny jest zalogowany na tego użytkownika") //changes
                        document.getElementById('Login').disabled = false
                        document.getElementById('Password').disabled = false
                        document.getElementById('start').disabled = false
                        document.getElementById('register').disabled = false
                        break;

                    }
            if (data.done ==1) {
                if (data.nickTwo=="") {
                    alert("Czekaj na 2 gracza")
                    document.getElementById('Login').disabled = true
                    document.getElementById('Password').disabled = true
                    document.getElementById('start').disabled = true
                    document.getElementById('register').disabled = true
                    first = true;
                } else {
                    content.innerHTML=""
                    Main(data.stage, 1)
                    //alert("Grasz z "+data.nickTwo)
                }
            }
        })
        client.on("onregister", function (data) { //when server sends you data back after you tried to register
            switch (data.done) {
                case 0:
                    document.getElementById('Login').disabled = false
                        document.getElementById('Password').disabled = false
                        document.getElementById('start').disabled = false
                        document.getElementById('register').disabled = false
                    alert("Użytkownik o takim loginie już istnieje")
                    break;
                case 1:
                    alert("Zarejestrowano")
                    document.getElementById('Login').disabled = false
                        document.getElementById('Password').disabled = false
                        document.getElementById('start').disabled = false
                        document.getElementById('register').disabled = false
                    break;
            }
        })
        client.on("onconnect", function (data) { //when you connect and server replies for the first time
            console.log(data.clientName)

        })
        client.on("SecondIsIn", function (data) { //when you're the 1st player and the 2nd one is in
            content.innerHTML=""
            Main(data.stage, 0)
            //alert("Grasz z " +data.friend)
        })
        client.on("youClick", function (data) { //when the other player clicked
console.log(funk)
            var block=scene.getObjectByName(data.clicked)
            var count=clickRay(block,stage,scene,lifeCounter,funk)
            lifeCounter=count
        })
        client.on("youDown", function (data) { //when the other player keyDowned
           modelCh.keyDowner(data.whichKey)
        })
        client.on("youUp", function (data) { //when the other player keyUpped
           modelCh.keyUpper(data.whichKey)
        })
        client.on("recPos", function (data) { //when the other player keyUpped
            modelCh.remaker(data.posObj)
        })
        client.on("secondIsOut", function () { //when the other player disconnected
            secondOut = true;
            if (login!="" && !leaveNoMatter) {
                alert("Utracono połączenie z drugim klientem");
                //refresh
                location.reload()
            }

        })
        client.on("recStageUserLb", function (data) {
            var scores = data.scores;
            scores.sort(function (a, b) {
                return parseFloat(a.time) - parseFloat(b.time);
            })
            for (var j = 0; j < scores.length ; j++) {
                //usernumber changing
                if (scores[j].user1 != data.nick) {
                    var help = scores[j].user1;
                    scores[j].user1 = scores[j].user2
                    scores[j].user2 = help
                }
            }
            console.log(scores)
            writeHigh(scores, false)
        })
        client.on("recStageLb", function (data) {
            //console.log(data.scores)
            var scores = data.scores;
            scores.sort(function (a, b) {
                return parseFloat(a.time) - parseFloat(b.time);
            })
            writeHigh(scores, true)

        })
        client.on("getReset", function (data) {
            location.reload();
        })
        this.login = function (log, pass, sage) { //when you login
            client.emit("login", {
                login: log,
                password: pass,
                stage: sage

            })

        }
        this.register = function (log, pass) { //when you register
            client.emit("register", {
                login: log,
                password: pass
            })

        }
        this.sendClicked = function (clicked) { //when you click
            client.emit("iClicked", {
                clicked: clicked
            })

        }
        this.keyDowned = function (key) { //when you keydown
            client.emit("keyDowned", {
                whichKey: key
            })
        }
        this.keyUpped = function (key) { //when you keyup
            client.emit("keyUpped", {
                whichKey: key
            })
        }
        this.sendPos = function (posObj) {
            client.emit("sendPos", {
                posObj: posObj
            })
        }
        this.weWon = function (time) {
            leaveNoMatter = true;
            if (first) {
                client.emit("weWon", {
                    time: time
                })
            } else {
                console.log("drugi wysłał")
            }
        }
        this.getStageLb = function () {
            client.emit("getStageLb", {
            })
        }
        this.getUserLb = function () {
            client.emit("getUserLb", {
            })
        }
        this.getUserStageLb = function () {
            client.emit("getUserStageLb", {
            })
        }
        this.resetMe = function () {
            client.emit("sendReset", {
            })
            location.reload();
        }
}

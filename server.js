var http = require("http");
var fs = require("fs");
var qs = require("querystring")
var socketio = require("socket.io")
var mongoose = require("mongoose")
var Models = require("./mongo/mngSchemas.js")(mongoose)
var Operations = require("./mongo/mngOpers.js")
//mongoose.connect('mongodb://localhost/GameMJ'); //tworzy bazę
mongoose.connect('mongodb://<Jewcia>:<Jewerewcia123>@ds249355.mlab.com:49355/homemj');
var db;
var clients=[];                                     //SERVER-loads the server files, launches the nodejs server, manages socket.io and connects to moongose
var clientCounter = 0;
var stage = "";
var server = http.createServer(function (req, res) {
    switch (req.method) {
        case "GET":
            console.log("żądany przez przeglądarkę adres: " + req.url)
            if (req.url === "/") {
                fs.readFile("static/index.html", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    console.log(req.url)
                    res.end();

                })
            }
            else if (req.url === "/Libs/three.js") {
                fs.readFile("static/Libs/three.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/Interface/startScreen.js") {
                fs.readFile("static/Interface/startScreen.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/Models/Blade/Blade.js") {
                fs.readFile("static/Models/Blade/Blade.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/Models/Blade/Blade.jpg") {
                fs.readFile("static/Models/Blade/Blade.jpg", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/Models/Samurai/Samourai.js") {
                fs.readFile("static/Models/Samurai/Samourai.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/Models/Samurai/Samourai.jpg") {
                fs.readFile("static/Models/Samurai/Samourai.jpg", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/Three/ray.js") {
                fs.readFile("static/Three/ray.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/Three/Model.js") {
                fs.readFile("static/Three/Model.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/Three/Scena.js") {
                fs.readFile("static/Three/Scena.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/Three/Items.js") {
                fs.readFile("static/Three/Items.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/Three/Text.js") {
                fs.readFile("static/Three/Text.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/Three/bigCreations.js") {
                fs.readFile("static/Three/bigCreations.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/font/helvetiker_regular.typeface.js") {
                fs.readFile("static/font/helvetiker_regular.typeface.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/Libs/Socket.js") {
                fs.readFile("static/Libs/Socket.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/Net/Net.js") {
                fs.readFile("static/Net/Net.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/Three/ray.js") {
                fs.readFile("static/Three/ray.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/Three/stages.js") {
                fs.readFile("static/Three/stages.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/img/dead.png") {
                fs.readFile("static/img/dead.png", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'image/png' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/img/wow.jpg") {
                fs.readFile("static/img/wow.jpg", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'image/png' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/img/lost.gif") {
                fs.readFile("static/img/lost.gif", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'image/gif' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/img/lul.gif") {
                fs.readFile("static/img/lul.gif", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'image/gif' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/img/sad.jpg") {
                fs.readFile("static/img/sad.jpg", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'image/png' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }
            else if (req.url === "/img/Question.png") {
                fs.readFile("static/img/Question.png", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'image/png' });
                    res.write(data);
                    console.log(req.url)
                    res.end();
                })
            }

            /*else if (req.url === "/style.css") {
                fs.readFile("style.css", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/css' });
                    res.write(data);
                    res.end();
                })
            }*/
            break;
    }
})
server.listen(3000);
console.log("serwer startuje na porcie 3000 - ten komunikat zobaczysz tylko raz");

function connectToMongo() {

    db = mongoose.connection;

    db.on("error", function (ex) {
        console.log(ex)
    });

    db.once("open", function () {
        console.log("mongo jest podłączone - można wykonywać operacje na bazie");
        opers = new Operations();
        /* admin = new Models.User(
                 {
                     username: "admin",
                     password: "1234admin1234"
                 });
         admin.validate(function (err) {
             console.log(err);
         });*/
        //opers.InsertUser(admin);
        adminData = "YOLO";
        opers.SelectByUsername(Models.User, "admin");
        setTimeout(function () {
            console.log(adminData + " adminData")
            if (adminData == "") {
                insertNewUser("admin", "1234admin1234")
            } else {
                console.log("Admin już jest w bazie")
            }
        }, 1000)
    });

    db.once("close", function () {
        console.log("mongodb zostało odłączone");
    });
}
connectToMongo();

var io = socketio.listen(server)

io.sockets.on("connection", function (client) {
    var login = "";
    var first = false;
    console.log("klient sie podłączył" + client.id)

    client.emit("onconnect", {
        clientName: client.id
    })
    client.on("disconnect", function () {
        console.log("klient się rozłącza")
        if (login != "") {
            clientCounter--;
            var i=0;
            var j = clients.length
            while (clients[i]!=login) {
                i++;
            }
            clients.splice(i, 1)
            if (j==2) {
                client.broadcast.emit("secondIsOut", {})
            }
        }
    })
    client.on("login", function (data) {
        console.log(data.login)
        console.log(data.password)



        //SELECTY MONGO
        opers.LogingCheck(Models.User, data.login, data.password);
        setTimeout(function () {
            var coRobic = 2;
            var users = "";
            if (adminData != "") { //jeśli znaleziono użytkownika (w selectach)

                //  setTimeout(function() {
                // if (true) { //jeśli hasło jest dobre
                login = data.login;
                coRobic = 1;
                clientCounter++;
                clients.push(data.login)
                if (clientCounter == 2) { //jeśli jest to 2. logujący sie użytkownik
                    if (data.login != clients[0]) {
                        client.broadcast.emit("SecondIsIn", {
                            friend: data.login,
                            stage: stage
                        })
                    } else {
                        coRobic = 3
                        clientCounter--;
                    }
                    users = clients[0]
                } else {
                    stage = data.stage;
                    first = true;
                }
                /*  } else { //jesli hasło jest złe
                      coRobic = 0;

                  }*/
                //   }, 1000)
            } else { //jeśli nie ma użytkonwika w bazie
                coRobic = 2;
                //clientCounter++;
            }

            // setTimeout(function() {
            client.emit("onlogin", {
                done: coRobic,
                nickTwo: users,
                stage: stage
            })
            // },1000)

        }, 1000)
    })
    client.on("register", function (data) {
        adminData = "YOLO"
        opers.SelectByUsername(Models.User, data.login)
        setTimeout(function () {
            if (adminData == "") {// nie ma
                //INSERT TAKIEGO USER
                insertNewUser(data.login, data.password)
                coRegRobic = 1
            } else {
                coRegRobic = 0;
            }
            client.emit("onregister", {
                done: coRegRobic,
            })
        }, 1000)
    })
    client.on("iClicked", function (data) { //broadcast emits data to all clients besides the newly created connections
        client.broadcast.emit("youClick", {
                clicked: data.clicked
        })
    })
    client.on("keyDowned", function (data) {
        client.broadcast.emit("youDown", {
                whichKey: data.whichKey
        })
    })
    client.on("keyUpped", function (data) {
        client.broadcast.emit("youUp", {
                whichKey: data.whichKey
        })
    })
    client.on("sendPos", function (data) {
        client.broadcast.emit("recPos", {
            posObj: data.posObj
        })
    })
    client.on("weWon", function (data) {
        row = new Models.Leaderboards(
               {
                   user1: clients[0],
                   user2: clients[1],
                   stage: stage,
                   time: data.time
               });
        opers.InsertLb(row)
    })
    client.on("sendReset", function (data) {
        client.broadcast.emit("getReset", {
        })
    })
    client.on("getStageLb", function (data) {
        stageData = "YOLO"
        opers.SelectByStage(Models.Leaderboards, stage)
        setTimeout(function () {
            client.emit("recStageLb", {
                scores: stageData
            })
        },1000)
    })
    client.on("getUserStageLb", function (data) {
        user1StageData = "YOLO"
        user2StageData = "YOLO"
        console.log(login)
        opers.SelectByUser1andStage(Models.Leaderboards, login, stage)
        opers.SelectByUser2andStage(Models.Leaderboards, login, stage)
        setTimeout(function () {
            var allUSData =user1StageData.concat(user2StageData)
            client.emit("recStageUserLb", {
                scores: allUSData,
                nick: login
            })
        }, 1000)
    })
    /*
    SelectByUser1andStage: function (Model, uname,stgnum) {
            Model.find({ user1:uname, stage: stgnum }, function (err, data) {
                if (err) return console.error(err);
                console.log(data);
                user1StageData = data
            })
        },
        SelectByUser2andStage: function (Model, uname, stgnum) {
            Model.find({ user2: uname, stage: stgnum }, function (err, data) {
                if (err) return console.error(err);
                console.log(data);
                user2StageData = data
            })
        },
        SelectByStage: function (Model, stgnum) {
            Model.find({stage: stgnum}, function (err, data) {
                if (err) return console.error(err);
                console.log(data);
                stageData = data
            })
        },
    */
})

function insertNewUser(login, pass) {
    user = new Models.User(
                {
                    username: login,
                    password: pass
                });
    opers.InsertUser(user)
}

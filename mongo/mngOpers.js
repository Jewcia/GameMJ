module.exports = function () {

    var opers = {

        InsertUser: function (data) {
            data.save(function (error, data, dodanych) {
                console.log("dodano " + data)
            })
        },
       
        SelectByUsername: function (Model, uname) {
            Model.find({ username: uname }, function (err, data) {
                if (err) {
                    return console.error(err);
                }
                console.log(data)
                adminData=data
            })
        },
        LogingCheck: function (Model, uname, pword) {
            Model.find({ username: uname, password: pword }, function (err, data) {
                if (err) {
                    return console.error(err);
                }
                console.log(data)
                adminData = data
            })
        },

        //lb
        InsertLb: function (data) {
            data.save(function (error, data, dodanych) {
                console.log("dodano " + data)
            })
        },
        SelectByUser1: function (Model, uname) {
            Model.find({ user1: uname }, function (err, data) {
                if (err) {
                    return console.error(err);
                }
                console.log(data)
                user1Data = data
            })
        },
        SelectByUser2: function (Model, uname) {
            Model.find({ user2: uname }, function (err, data) {
                if (err) {
                    return console.error(err);
                }
                console.log(data)
                user2Data = data
            })
        },
        SelectByStage: function (Model, stgnum) {
            Model.find({stage: stgnum}, function (err, data) {
                if (err) return console.error(err);
                console.log(data);
                stageData = data
            })
        },
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
        SelectAll: function (Model) {
            Model.find({}, function (err, data) {
                if (err) return console.error(err);
                console.log(data);
                allData = data
            })
        },
        /* SelectAll: function (Model) {
            Model.find({}, function (err, data) {
                if (err) return console.error(err);
                console.log(data);
            })
        },

        */
        /*

        DeleteAll: function (Model) {
            Model.remove(function (err, data) {
                if (err) return console.error(err);
                console.log(data);
            })
        },
        */
    }

    return opers;

}
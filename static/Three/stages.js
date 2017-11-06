function switchStages(o,userCount){
    var o=parseInt(o)
    var stage=0
    switch(o){
        case 0:
            stage={text1:"2x2",text2:"4/2",row:4,column:2,userCount:userCount}
        break;
        case 1:
            stage={text1:"3x2",text2:"4/4",row:6,column:1,userCount:userCount}
        break;
        case 2:
            stage={text1:"1x2",text2:"4x2",row:2,column:8,userCount:userCount}
        break;
        case 3:
            stage={text1:"2x2",text2:"4x1",row:4,column:4,userCount:userCount}
        break;
        case 4:
            stage={text1:"1x3",text2:"4x2",row:3,column:8,userCount:userCount}
        break;
        case 5:
            stage={text1:"3x2",text2:"1x5",row:6,column:5,userCount:userCount}
        break;
    }
    return stage
}

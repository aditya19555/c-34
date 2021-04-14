var ball;
var database;
var pos;
function setup(){
    database=firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,20,20);
    ball.shapeColor = "red";
    //read from database
    database.ref('ball/position').on('value',readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
 database.ref('ball/position').set({
     x: pos.x + x,
     y:pos.y+y,
 })  
}

//create function readPosition
function readPosition(data){
 pos=data.val()  ;
 ball.x = pos.x;
ball.y=pos.y
}



//create function showError

function showError (){

console.log('error')

    
}
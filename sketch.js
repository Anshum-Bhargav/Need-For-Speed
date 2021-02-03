var car,carImg;
var track;
var barrier1,barrier2,barrier3,barrier4,barrier5,barrier6,barrier7,barrier8;
var barrier9,barrier10,barrier11,barrier12,barrier13,barrier14;

var passedImg;
var busted,bustedImg;

var finish;

var gameState = 0;

function preload(){
    track = loadImage("../images/track.jpg");
    carImg = loadImage("../images/car3.png");
    barrierImg = loadImage("../images/barrier.png");
    backgroundImg = loadImage("../images/track.png");
    passedImg = loadImage("../images/Mission passed.png");
    bustedImg = loadImage("../images/busted.png");
}

//track length = -2900

function setup(){
    createCanvas(displayWidth, displayHeight-104);

    finish = createSprite(displayWidth/2,-2900,displayWidth,40);
    finish.visible = false;

    car = createSprite(320,200);
    car.addImage("car",carImg);

    barrier1 = createSprite(320,-500);
    barrier1.addImage("barrier1",barrierImg);
    barrier1.scale=0.4;

    barrier2 = createSprite(520,-500);
    barrier2.addImage("barrier2",barrierImg);
    barrier2.scale=0.4;

    barrier3 = createSprite(520,-700);
    barrier3.addImage("barrier3",barrierImg);
    barrier3.scale=0.4;
    
    barrier4 = createSprite(720,-700);
    barrier4.addImage("barrier4",barrierImg);
    barrier4.scale=0.4;

    barrier5 = createSprite(720,-1200);
    barrier5.addImage("barrier5",barrierImg);
    barrier5.scale=0.4;

    barrier6 = createSprite(920,-1100);
    barrier6.addImage("barrier6",barrierImg);
    barrier6.scale=0.4;

    barrier7 = createSprite(320,-1600);
    barrier7.addImage("barrier2",barrierImg);
    barrier7.scale=0.4;
    
    barrier8 = createSprite(520,-1600);
    barrier8.addImage("barrier2",barrierImg);
    barrier8.scale=0.4;

    barrier9 = createSprite(720,-2000);
    barrier9.addImage("barrier2",barrierImg);
    barrier9.scale=0.4;
    
    barrier10 = createSprite(920,-2000);
    barrier10.addImage("barrier2",barrierImg);
    barrier10.scale=0.4;

    barrier11 = createSprite(520,-2200);
    barrier11.addImage("barrier2",barrierImg);
    barrier11.scale=0.4;

    barrier12 = createSprite(720,-2200);
    barrier12.addImage("barrier2",barrierImg);
    barrier12.scale=0.4;

    barrier13 = createSprite(320,-2700);
    barrier13.addImage("barrier2",barrierImg);
    barrier13.scale=0.4;

    barrier14 = createSprite(520,-2700);
    barrier14.addImage("barrier2",barrierImg);
    barrier14.scale=0.4;
}

function draw(){
    background(backgroundImg);

    image(track, 0,-displayHeight*4.2,displayWidth, displayHeight*5)

    camera.position.x = displayWidth/2;
    camera.position.y = car.y;
 
    if(gameState===0){
        car.velocityY = 0;
        strokeWeight(8)
        stroke("black")
        textSize(40)
        fill("blue")
        text("PRESS UP_ARROW TO START",520,50);

        strokeWeight(8)
        stroke("black")
        textSize(20)
        fill("white")
        text("MISSION: Reach the finish line but avoid the barricading made by the police to stop you",320,400)

        if(keyDown(UP_ARROW)){
            car.velocityY = -10;
            //car.y = car.y-10;
            gameState=1;
        }
    }

    if(gameState===1){
        if(keyIsDown(LEFT_ARROW)){
            car.x = car.x-12;
        }
        if(keyIsDown(RIGHT_ARROW)){
            car.x = car.x+12;
        }
    }

    if(car.isTouching(barrier1)){
        car.velocityY=0;
        busted = createSprite(displayWidth/2,car.y);
        busted.addImage(bustedImg);
        busted.scale = 2;
        gameState=0;
    }
    if(car.isTouching(barrier2)){
        car.velocityY=0;
        busted = createSprite(displayWidth/2,car.y);
        busted.addImage(bustedImg);
        busted.scale = 2;
        gameState=0;
    }
    if(car.isTouching(barrier3)){
        car.velocityY=0;
        busted = createSprite(displayWidth/2,car.y);
        busted.addImage(bustedImg);
        busted.scale = 2;
        gameState=0;
    }
    if(car.isTouching(barrier4)){
        car.velocityY=0;
        busted = createSprite(displayWidth/2,car.y);
        busted.addImage(bustedImg);
        busted.scale = 2;
        gameState=0;
    }
    if(car.isTouching(barrier5)){
        car.velocityY=0;
        busted = createSprite(displayWidth/2,car.y);
        busted.addImage(bustedImg);
        busted.scale = 2;
        gameState=0;
    }
    if(car.isTouching(barrier6)){
        car.velocityY=0;
        busted = createSprite(displayWidth/2,car.y);
        busted.addImage(bustedImg);
        busted.scale = 2;
        gameState=0;
    }
    if(car.isTouching(barrier7)){
        car.velocityY=0;
        busted = createSprite(displayWidth/2,car.y);
        busted.addImage(bustedImg);
        busted.scale = 2;
        gameState=0;
    }
    if(car.isTouching(barrier8)){
        car.velocityY=0;
        busted = createSprite(displayWidth/2,car.y);
        busted.addImage(bustedImg);
        busted.scale = 2;
        gameState=0;
    }
    if(car.isTouching(barrier9)){
        car.velocityY=0;
        busted = createSprite(displayWidth/2,car.y);
        busted.addImage(bustedImg);
        busted.scale = 2;
        gameState=0;
    }
    if(car.isTouching(barrier10)){
        car.velocityY=0;
        busted = createSprite(displayWidth/2,car.y);
        busted.addImage(bustedImg);
        busted.scale = 2;
        gameState=0;
    }
    if(car.isTouching(barrier11)){
        car.velocityY=0;
        busted = createSprite(displayWidth/2,car.y);
        busted.addImage(bustedImg);
        busted.scale = 2;
        gameState=0;
    }
    if(car.isTouching(barrier12)){
        car.velocityY=0;
        busted = createSprite(displayWidth/2,car.y);
        busted.addImage(bustedImg);
        busted.scale = 2;
        gameState=0;
    }
    if(car.isTouching(barrier13)){
        car.velocityY=0;
        busted = createSprite(displayWidth/2,car.y);
        busted.addImage(bustedImg);
        busted.scale = 2;
        gameState=0;
    }
    if(car.isTouching(barrier14)){
        car.velocityY=0;
        busted = createSprite(displayWidth/2,car.y);
        busted.addImage(bustedImg);
        busted.scale = 2;
        gameState=0;
    }
    if(car.isTouching(finish)){
        car.velocityY=0;
        var missionPassed = createSprite(displayWidth/2,car.y);
        missionPassed.addImage(passedImg);
        missionPassed.scale = 4
        missionPassed.depth = track.depth + 1;
        text("Anshum Bhargav",1000,-2000)
        gameState=0;
    }

    

    drawSprites();
}
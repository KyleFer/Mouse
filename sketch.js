
var cat, catImg1, catImg2, catImg3
var mouse, mouseImg1, mouseImage2, mouseImg3
var bg, bgImg


function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png")
    catImg1=loadAnimation("images/cat1.png")
    mouseImg1=loadAnimation("images/mouse1.png")
    catImg2=loadAnimation("images/cat2.png","images/cat3.png")
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3=loadAnimation("images/mouse4.png")
    catImg3=loadAnimation("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600)
    cat.addAnimation("catSleeping",catImg1)
    cat.scale=0.2

    
    mouse= createSprite(200,600)
    mouse.addAnimation("mouseStanding",mouseImg1)
    mouse.scale=0.15

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width- mouse.width)/2){
      cat.addAnimation("happyCat",catImg3);
      cat.changeAnimation("happyCat")
      cat.velocityX=0
      cat.x=300
      cat.scale=0.2

      mouse.addAnimation("happyMouse",mouseImg3)
      mouse.scale=0.15
      mouse.changeAnimation("happyMouse")
        
    }

    drawSprites();
}


function keyPressed(){

if(keyPressed("left_arrow")){
    cat.velocityX=-5
    cat.addAnimation("catRunning",catImg2)
    cat.changeAnimation("catRunning")
    mouse.addAnimation("mouseTeasing",mouseImage2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay=25

}

  //For moving and changing animation write code here


}

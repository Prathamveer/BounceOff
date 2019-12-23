var fixedRect,movingRect;
var object1;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect=createSprite(400,200,80,30);
  fixedRect.shapeColor="green";
  object1=createSprite(200,600,80,30);
  object1.shapeColor="green";
  movingRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect.debug=true;
  object1.velocityY=-3;
  fixedRect.velocityY=3;

} 

function draw() {
  background(0); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  /*if(isTouching(movingRect,object1)){
    object1.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    object1.shapeColor="green";
    movingRect.shapeColor="green";
  }*/
  bounceOff(fixedRect,object1)
  drawSprites();

}

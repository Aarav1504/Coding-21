var fixedRect, movingRect;
var car, wall;
var car1, car2, car3;
var wall1, wall2, wall3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(200, 200, 40, 40);
  car.shapeColor = "blue";
  car.velocityX  = 4;
  wall = createSprite(1000, 200, 20, 100);
  wall.shapeColor = "blue";
  car1 = createSprite(100, 100, 50, 50);
  car1.shapeColor = "green"
  car1.velocityY = 4;
  wall1 = createSprite(100, 600, 110, 50);
  wall1.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect, wall)){
    wall.shapeColor = "red";
    movingRect.shapeColor = "red";
    text("touching", 500, 500);
  }
  else{
    wall.shapeColor = "blue";
    movingRect.shapeColor = "green";
  }
  bounceOff(car1, wall1);
  drawSprites();
}
function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}
else {
  return false
}
}
function bounceOff(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = (-1)* object1.velocityX;
      object2.velocityX = (-1)* object2.velocityX;
    }
     if
      (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = (-1)* object1.velocityY;
      object2.velocityY = (-1)* object2.velocityY;
  }
}
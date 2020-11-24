function setup() {
  createCanvas(1600,400);
  Speed=random(55,90)
  weight=random(400,1500)
   car =createSprite(50, 200, 50, 50);
  car.velocityX=Speed
  car.shapeColor=color("white")
  wall=createSprite(1500,200,60,200)
  wall.shapeColor=color("cyan")
}

function draw() {
  background("black");  
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0
    var deformation=0.5*weight*Speed*Speed/22509
  
  if(deformation>180){
    car.shapeColor=color("green") 
  }
  if(deformation<180 && deformation>100){
    car.shapeColor=color("red")
  }
  if(deformation<100){
    car.shapeColor=color("yellow")
  }
}
  drawSprites();
}
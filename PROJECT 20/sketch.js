var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,800);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,height/2,50,50);
  wall = createSprite(1200,height/2,60,height/2);
  car.velocityX = speed;
}

function draw() {
  background(0,0,0);  

  if(wall.x-car.x < (car.width-wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed *speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
      {
        car.shapeColor=color(230,230,0);
      }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
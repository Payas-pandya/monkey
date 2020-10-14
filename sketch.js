
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=1
var ground
var survivalTime=0

function preload(){ 
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(600,200);
  monkey = createSprite(50, 150, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  monkey.debug = true;
  
  ground = createSprite(400, 180, 1000000000000000000, 5);
  ground.velocityX=-4;
  ground.x = ground.width/2;
  console.log(ground.x)
  ground.debug = true;
}


function draw() {
  background(180);
  
  stroke("white");
  textSize(20);
  fill("white");
  score=Math.ceil(frameCount/frameRate())
  text("score: "+ score, 400, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100, 50);
  
  monkey.collide(ground);
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  drawSprites(); 
  food();
  obstacles();
}


function food () {
  if(frameCount % 80 === 0){
    banana = createSprite(500, 100, 20, 20)
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.y = Math.round(random(100, 120));
    banana.scale = 0.1;
    banana.debug = true;
  }
}


function obstacles() {
  if (frameCount % 300 === 0){
    obstacle = createSprite(400,165,10,40);
    obstacle.velocityX = -4;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    obstacle.debug = true;
    
 }
}
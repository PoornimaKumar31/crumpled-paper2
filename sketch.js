
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1, bin2, bin3;
var ball, ground;
var binImage;

function preload()
{
	binImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Creating the objects
	bin1 = new Dustbin(550,640,20,80);
	bin2 = new Dustbin(610,670,110,20);
	bin3 = new Dustbin(660,640,20,80);
	ball = new Ball(100,580,20)
	ground = new Ground(400,680,800,10)
    
  
}


function draw() {
  
  Engine.update(engine)
  background("white");
  bin1.display();
  bin2.display()
  bin3.display();
  ball.display();
  ground.display();
  imageMode(CENTER)
  image(binImage,605,605,150,150)
  /*if(keyDown("UP_ARROW")) {
	  Body.applyForce(ball.body, ball.body.position,{x:85,y:-85})
  } */
  
  //drawSprites();
 
}
function keyPressed() {
	
	if (keyCode === UP_ARROW) {
		console.log(ball)
	  Matter.Body.applyForce(ball.ball,ball.ball.position,{x:65,y:-85});
  
	}
}





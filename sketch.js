 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function preload()
{
	dustbinImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	myworld = engine.world;
  
  dustbinSprite=createSprite(600,595,200,20);
  dustbinSprite.addImage(dustbinImage);
  dustbinSprite.scale=0.6;
	
   ground1 = new Ground(400,height,800,20);
   ground2 = new Ground(645,640,20,130);
   ground3 = new Ground(540,640,20,130);
	
   //dustbin1 = new dustbin(600,680,200,20);
   //dustbin2 = new dustbin(700,640,20,100);
   //dustbin3 = new dustbin(500,640,20,100);
   paperball1 = new paperball(100,640,30);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);
  
 

  ground1.display()
  ground2.display()
  ground3.display()
  //dustbin1.display()
  //dustbin2.display()
  //dustbin3.display()
  paperball1.display()

  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paperball1.body,paperball1.body.position,{x:140,y:-210});
  }
}





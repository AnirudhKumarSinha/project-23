var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5,{isStatic:true,restitution:0.1});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//creating a red zone
    box1=new Box(307,580,20,100);
	box2=new Box(395,630,200,20);
	box3=new Box(485,580,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  if(keyDown("down"))
  {
	packageBody = Bodies.circle(width/2 , 200 , 5,{isStatic:false,restitution:0.5});
	World.add(world, packageBody);
    

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	//packageBody.restitution=0.3
	//packageBody.isStatic=false
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

  }
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageBody.restitution=0.5
  packageBody.isStatic=false
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}






var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,pack;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var exp,options,op;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	
	rectMode(CENTER);
	
	


	exp=Bodies.rectangle(width/2,200,20,20, {restitution:1, isStatic:true});
	World.add(world,exp);
	
	packageSprite=createSprite(exp.position.x,exp.position.y, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	
	pack= Bodies.circle(width,700,10);
	World.add(world,pack);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  
  background(0);
 
  packageSprite.x= exp.position.x 
  packageSprite.y= exp.position.y 

  if(keyDown("DOWN")){
	 Matter.Body.setStatic(exp,false);
  }
  
  drawSprites();
  ellipseMode(RADIUS);
  ellipse(pack.position.x,pack.position.y,10);
  
  rectMode(CENTER);
  //rect(exp.position.x,exp.position.y,20,20);
}

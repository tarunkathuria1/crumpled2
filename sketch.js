var paperobject,ground1,dustbin1;
var dustbinImage,paperImage;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
//dustbinImage=loadImage("dustbin.png");
//paperImage=loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	paperobject = new paper(200,200,60);


    ground1 = new ground(600,height,1200,20)

	
	//rect1 =createSprite (550,630,20,100)
	//isStatic:true

	//rect2 = createSprite (750,630,20,100)
	//isStatic:true

	//rect3 = createSprite (650,670,200,20)
	//isStatic:true

dustbin1=new dustbin(700,670)
//dustbin2=new dustbin(750,600)
//dustbin3=new dustbin(550,600)


	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  

  
  ground1.display();
  dustbin1.display();
  paperobject.display();


  //keyPress();
  drawSprites();
 
}



function keyPressed(){
	console.log(paperobject)

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperobject.body,paperobject.body.position.y,{x:85,y:-85});
	console.log(paperobject.body.position)
	//paperobject.body.position.y=paperobject.body.position.y-2;
	}
	if (keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paperobject.body,paperobject.body.position.y,{x:-85,y:85});
	//paperobject.body.position.y=paperobject.body.position.y+2;

	}

}
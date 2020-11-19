
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof();

	bob1 = new Bob(275,400,30);
	rope1 = new Rope(bob1.body,roof.body,0);

	bob2 = new Bob(225,400,30);
	rope2 = new Rope(bob2.body,roof.body,-60);

	bob3 = new Bob(325,400,30);
	rope3 = new Rope(bob3.body,roof.body,60);

	bob4 = new Bob(375,400,30);
	rope4 = new Rope(bob4.body,roof.body,120);

	bob5 = new Bob(175,400,30);
	rope5 = new Rope(bob5.body,roof.body,-120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  
  rope1.display();
  bob1.display();
  rope2.display();
  bob2.display();
  rope3.display();
  bob3.display();
  rope4.display();
  bob4.display();
  rope5.display();
  bob5.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Body.applyForce(bob5.body,bob5.body.position,{x:-250,y:100});
	}
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var roof, bob1, bob2, bob3
var bob4, bob5
var bobDiameter = 80
var rope1, rope2, rope3, rope4, rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,600,20);
	bob1 = new Bob(240,500,80)
	bob2 = new Bob(245,500,80)
	bob3 = new Bob(250,500,80)
	bob4 = new Bob(260,500,80)
	bob5 = new Bob(265,500,80)
	console.log(bob5.diameter)
	rope1 = new Rope(bob1.body, roof.body, -bobDiameter*2, 20)
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter*2, 20)
	rope3 = new Rope(bob3.body, roof.body, -bobDiameter*2, 20)
	rope4 = new Rope(bob4.body, roof.body, -bobDiameter*2, 20)
	rope5 = new Rope(bob5.body, roof.body, -bobDiameter*2, 20)


	Engine.run(engine);
  
}


function draw() {
  background(180);
  Engine.update(engine);

  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
  drawSprites();
 
}




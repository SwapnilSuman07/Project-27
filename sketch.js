
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function preload() {
	
}

function setup() {
		createCanvas(800, 700);


		engine = Engine.create();
		world = engine.world;

		//Create the Bodies Here.
		roof=new Roof(400,150,600,20);

		bobObject1=new Bob(200,550,50);
		bobObject2=new Bob(200,550,50);
		bobObject3=new Bob(200,550,50);
		bobObject4=new Bob(200,550,50);
		bobObject5=new Bob(200,550,50);

		rope1=new Rope(bobObject1.body,roof.body);
		rope2=new Rope(bobObject2.body,roof.body);
		rope3=new Rope(bobObject3.body,roof.body);
		rope4=new Rope(bobObject4.body,roof.body);
		rope5=new Rope(bobObject5.body,roof.body);

		Engine.run(engine);
  
}


function draw() {

		rectMode(CENTER);
		ellipseMode(RADIUS);
		background(0);

		roof.display();
		bobObject1.display();
		bobObject2.display();
		bobObject3.display();
		bobObject4.display();
		bobObject5.display();

		rope1.display();
		rope2.display();
		rope3.display();
		rope4.display();
		rope5.display();
		
		drawSprites();
 
}




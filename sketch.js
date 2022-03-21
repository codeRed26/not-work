
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball
var ground;
var left;
var right;
var top_wall;


function preload(){
	
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var ball_options={
		//isStatic:false
		restitution:0.3
		//friction: 0
		//density:1.2
		
	}
	ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

	//Create the Bodies Here.


	Engine.run(engine);
	ball = Bodies.circle(200,100,20,ball_options)
	World.add(world,ball);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(15);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  
  
 
}




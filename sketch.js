const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload(){

}

function setup() {
	createCanvas(windowWidth,windowHeight);
	engine = Engine.create();
	world = engine.world;
	
	var ball_options ={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	var ground_options ={
		isStatic:true
	};
	//Create the Bodies Here.
	ball = Bodies.circle(100,100,30,ball_options);
	World.add(world,ball);
	Engine.run(engine);

	ground = Bodies.rectangle(windowWidth/2,windowHeight - 50,windowWidth,20,ground_options);
	World.add(world,ground);
	leftSide = Bodies.rectangle(windowWidth-400,windowHeight-122,20,120,ground_options)
	World.add(world,leftSide);
	rightSide = Bodies.rectangle(windowWidth-200,windowHeight-122,20,120,ground_options)
	World.add(world,rightSide);

}

function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,30);
  rect(ground.position.x,ground.position.y,windowWidth,20);
  rect(leftSide.position.x,leftSide.position.y,20,120);
  rect(rightSide.position.x,rightSide.position.y,20,120);

  if(keyDown("up_arrow")){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:2,y:-1})
  }

  if(keyDown("down_arrow")){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:-2,y:-1})
  }
  
  drawSprites();
}
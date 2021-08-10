var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic:false,
		restitution:0.7,
		friction:0.5,
		density:1.2
		
	}
	//Create the Bodies Here.
	ball = Bodies.circle(200, 200, 20,ball_options);
	World.add(world, ball);
	ground=Bodies.rectangle(500,495,1000,10,{isStatic:true})
	rect1=Bodies.rectangle(700,440,10,100,{isStatic:true})
	World.add(world,rect1)
	rect2=Bodies.rectangle(900,440,10,100,{isStatic:true})
	World.add(world,rect2)
	World.add(world, ground)
	Engine.run(engine);
	var render = Matter.Render.create({ element:document.body, engine:engine, options: { width:1000, height:500, wireframes:false } }); Matter.Render.run(render);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  rect(ground.position.x,ground.position.y,1000,10)
  rect(rect1.position.x,rect1.position.y,10,100)
  rect(rect2.position.x,rect2.position.y,10,100)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:65,y:-65})
	}
}
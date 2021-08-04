
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wall,rock;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   var rock_options = {
     restitution : 0.2,
     frictionAir:0.01
   }
   var ground_options ={
     isStatic: true
   };
  

rock = Bodies.circle(300,10,10,rock_options);
World.add(world,rock);  
wall = Bodies.rectangle(300,200,100,10,ground_options);
World.add(world,wall)
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(rock.position.x,rock.position.y,10)
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(wall.position.x,wall.position.y,100,10);
}


//Predefined
const Engine = Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies; 
var engine,world; 
var ground, ball ;
function setup() { 
  var canvas= createCanvas(400,400); 
  engine= Engine.create()
  world = engine.world; 
  var groundOption = {
    isStatic: true
  } 
  ground = Bodies.rectangle(groundOption);200,390,200,20
  World.add(world,ground); 
  var ballOption = {
    restitution: 1.0,
  }
  ball = Bodies.circle(200,100,20,ballOption);
  World.add(world,ball);
  console.log(ground);

  // console.log(object.position.x); console.log(object.position.y); 
}

function draw() { 
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  // Goodbye! rect(200,200,50,50); 
  rect(ground.position.x,ground.position.y,400,20); 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}
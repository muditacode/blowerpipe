const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function setup() {
  createCanvas(500,500);
  
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(330,170,80,80);
  blower = new Blower(200, 300, 150, 20);
  blowermouth = new Blowermouth(320, 270, 100, 90);

  button=createButton("click to blow");
  button.position(250,400)
  button.class("blowbutton")
  button.mousePressed(blow);
}

function draw() {
  background("lightblue");
  Engine.update(engine)
  ball.display();
  blower.display();
  blowermouth.display();
  

}
function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})
}
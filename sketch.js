
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var boy, boyImg
var ground, Tree, stone
var Mango1,Mango2,Mango3,Mango4
var gameState = 0

function preload()
{
	boyImg = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(90,500,10,10)
	boy.addImage(boyImg)
	boy.scale = 0.07

	stone = new Stone(55, 460)

	ground = new Ground(400,550,800,20)

	Tree = new tree(620,360)

	Mango1 = new mango(500,161)
	Mango2 = new mango(580,198)
	Mango4 = new mango(630,187)
	Mango3 = new mango(700,203)

	slingshot = new SlingShot(stone.body, boy)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Tree.display()
  Mango1.display()
  Mango2.display()
  Mango3.display()
  Mango4.display()
  ground.display()
  drawSprites();
  slingshot.display()
  stone.display()
  //mouseDragged()
  //mouseReleased()
  //detectcollision()
 
}

function mouseDragged(){
    if(gameState !== "1"){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "1"
}

function detectcollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body, false)
	}
}
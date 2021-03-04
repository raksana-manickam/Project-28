const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stone,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var world,boy;
var stone, chain;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,200,30);
	mango3=new mango(1150,150,30);
	mango4=new mango(1200,250,30);
  mango5=new mango(1000,70,30);
	mango6=new mango(900,250,30);
	mango7=new mango(950,150,30);
	mango8=new mango(1100,240,30);

	treeObj=new tree(1050,580);

	groundObject=new ground(width/2,600,width,75);

  stone = new Stone(240,420,30);
  

	chain = new Chain(stone.body,{x:240, y:420});
	
	Engine.run(engine);

}

function draw() {

  background("lightblue");
  image(boy ,200,340,200,300);
  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stone.display();

  chain.display();

  groundObject.display();

  

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);

  drawSprites();
 
  strokeWeight(0)
  fill("darkgreen");
  textSize(40)
  text('Press space for another chance!', 200, 40);
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
  chain.fly()
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
		chain.attach(stone.body);
	}
}
var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadImage("images/fairy.png");
	bgImg = loadImage("images/starryNight.jpg");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	//fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addImage(fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  
  keyPressed();
  
  text(mouseX+','+mouseY,10,45)
  drawSprites();

}

function keyPressed() {
if(keyDown("RIGHT_ARROW")){
	fairy.x = fairy.x +5;
}

if(keyDown("LEFT_ARROW")){
	fairy.x = fairy.x - 5;
	}

	if(keyDown("DOWN_ARROW")){
		star.velocityY=2;
		}	
if(star.position.y>465){
star.velocityY=0;

}


}
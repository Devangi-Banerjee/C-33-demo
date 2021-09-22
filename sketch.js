
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var bg;
var snow=[] ; 
var snowImg;
var world , engine;

function preload()
{
  bg = loadImage("snow3.jpg");
}


function setup() 
{
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
 
  if(frameCount%50 === 0)
  {
    for(var i=0 ; i<200 ; i++)
    {
       snow.push(new Snow(random(0,800), random(0,800)));
      
    }
  }


}

function draw() 
{

  background(bg);

  Engine.update(engine);
  for(var i=0 ; i<200 ; i++)
  {
    snow[i].showDrop();
    snow[i].updateY();
  }
  drawSprites();
}
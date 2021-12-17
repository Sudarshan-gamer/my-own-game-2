const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var mob1;
var hero1;
//var path1;

function preload() {
 bg = loadImage("bg.png");
}

function setup() {
  createCanvas(1600,900);
  engine = Engine.create();
  world = engine.world;
  
  hero1 = new hero(800,400);
  console.log(World.mouseX);
  //console.log(X);
  mob1 = new mob(random(1600,0),random(0,300));
   
  //path1 = new path1()
  

}
function draw() {
  background(bg);
  
 /* noStroke();
  textSize(20);
  fill("white");
  text("SCORE :" + score, 650, 40);
  text("Press the space key for another chance!", 400, 380);
*/
  Engine.update(engine);
  mob1.show();
  hero1.show();
  stroke("black");

  




}

/*async function getBackgroundImg() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var date = responseJSON.datetime;
  var hour = date.slice(11, 13);
  if(hour>=06 && hour<=19){
      bg = "Sprites/bg.jpg"
  } else {
      bg = "Sprites/bg1.jpg"
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}*/
 Engine = Matter.Engine
 World= Matter.World;
 Bodies = Matter.Bodies;

var engine, world;
var backgroundImg
var ice =[];
var maxSnow = 100
function preload() {
  getBackground();
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world; 

  if(frameCount % 275 === 0){
    for(var i=0; i<maxSnow; i++){
    ice.push(new Snow(random(0,1350), random(0,50)));
    }
    }
  
  
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
}else{
    background("blue")
} 
 Engine.update(engine);

 for(var i = 0;i < maxSnow; i++){
  ice[i].display();
  ice[i].changePosition();
  }
drawSprites();
}

  
  

async function getBackground(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJson = await response.json()
  console.log(responseJson)
  var dateTime = responseJson.datetime
  console.log(dateTime)
  var hour = dateTime.slice(11,13)
  hour1 = dateTime.slice(11,16)
  console.log(hour)
  if(hour>18){
      backgroundImg=loadImage("snow2.jpg")
  }else{
      backgroundImg=loadImage("snow1.jpg")
  }
}

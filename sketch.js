const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 70; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
for(var j = 70; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
  //create 4th row of plinko objects
for(var j=70; j<=width-10; j=j+70)
{
  plinkos.push(new Plinko(j,375));
}

  //create particle objects
 
    
}
 


function draw() {
  background("black");
  textSize(20)
  //createCanvas(800,700);
  //text(mouseX+","+mouseY,200,200);
 
  Engine.update(engine);

  if(frameCount%60===0){
    var particle=new Particle(random(130,400),0,7,random(0,360));
     particles.push(particle);
  }
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
for(var j=0; j<particles.length; j++) {
  particles[j].display();
  }
  ground.display();
  drawSprites();
  }
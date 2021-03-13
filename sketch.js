const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var count = 0;
var particle;
var gameState = "play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }   
}
function mousePressed(){
  if(gameState !== "end"){
    count++;
    particle = new Particle(mouseX,10,10,10);
  }  
}
function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
 ground.display();
  Engine.update(engine);
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
  // if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  // }
 // for (var j = 0; j < particles.length; j++) {
    // particles[j].display();
  // }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
   textSize(22)
   text("Score- "+score, 25,20)
   text("100",340,530)
   text("100",260,530);
   text("100",420,530);
   text("500",180,530);
   text("500",110,530);
   text("500",20,530);
   text("200",500,530);
   text("200",590,530);
   text("200",670,530);
   text("200",740,530);

   if(particle != null) {
    particle.display(); 
    if(particle.body.position.y > 760) {
      if(particle.body.position.x < 300) {
        score = score + 500;  
        particle = null           
      } 
    }
    if(particle.body.position.x> 260){
      if(particle.body.position.x <    420){
        score = score+100
        particle = null
      }
    }
    particle = null
    if(count>=5 ) gameState ="end";
   }    
}

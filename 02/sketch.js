let ypos = 0;
let xpos = 0;
let angle = 0;
let scalar = 100;

function setup() {
  createCanvas(windowWidth, windowHeight)
    background(0);

}

function draw() {


  fill(255);
  
  
  angle += 0.05; 
  
  
 
  ypos = sin(angle) * scalar + height/2;
  xpos = cos(angle) * scalar + width/2;

  scalar += 0.1
  

  ellipse(xpos, ypos, 10,100)
}
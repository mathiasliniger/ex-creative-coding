let ypos = 0;
let xpos = 0;
let angle = 0;
let scalar = 100;

function setup() {
  createCanvas(windowWidth, windowHeight)
    background(0);

}

function draw() {
  let c = cos(0);

  fill(255);
  
  
  //increase by a little bit each frame.
  angle += 0.05; 
  
  
  //https://static.scientificamerican.com/blogs/assets/File/Circle_cos_sin.gif
  ypos = sin(angle) * scalar + height/2;
  xpos = cos(angle) * scalar + width/2;
  
  //spiraling paths if you animate the scalar number!
  scalar += 0.1
  
  
  // Mueve la figura al centro del lienzo
  translate(width / 2, height / 2);
  // Aplica la rotación final
  rotate(c);

  ellipse(xpos, ypos, 10,100)
}
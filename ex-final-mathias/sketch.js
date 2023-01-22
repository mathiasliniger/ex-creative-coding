let screen = 0;


function setup() {
  
  createCanvas(windowWidth, windowHeight)

  rectMode(CENTER)
  // fill(0,255,0)
  
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
  
}

function draw() {

  

  if(screen === 0) {

    main() 
  } else if(screen == 1) {

rasterdead()

  }

  erase()
  // circle(100,100,100)
  noErase()

  
  
}

//cam sans raster
function main() {
  background(255);
  image(capture, 0, 0, width, height);


  //curseur viseur
  noFill()
  circle(mouseX,mouseY,40)
  circle(mouseX,mouseY,250)
  line(mouseX-150, mouseY, mouseX+150, mouseY)
  line(mouseX, mouseY-150, mouseX, mouseY+150)
}

//cam rasterizee
function rasterdead() {
  background(255);

  let gridSize = 50;

  capture.loadPixels();
  for(let y=0; y<capture.height; y+=gridSize){
    for(let x=0; x<capture.width; x+=gridSize){

    let index = (y * capture.width + x) * 4
    let r = capture.pixels[index]
    let dia = map(r,0,255,gridSize,2)
    fill(255,0,0)
    noStroke()
    circle(x,y,dia)


    }

  }

  
}

//changement de cam
function mousePressed() {

 

  if(screen ==0) {
dead()

  }

  
}

function dead() {

  screen = 1

}





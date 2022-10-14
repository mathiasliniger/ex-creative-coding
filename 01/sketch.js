



function setup() {

    createCanvas(windowWidth, windowHeight)
    rectMode(CENTER);
    background(255)

frameRate(5)

}

function draw() {

  let taille
  let taille2
  let taille3
  let taille4


  


  taille = random(400, 500)
  taille2 = random(300, 400)
  taille3 = random(200, 300)
  taille4 = random(100, 200)
    
    noStroke()
    fill(222,156,5)
    rect(width/2, height/2, taille, taille);
    fill(197,106,7)
    rect(width/2, height/1.9, taille2, taille2);
    fill(178,90,11)
    rect(width/2, height/1.8, taille3, taille3);
    fill(167,40,11)
    rect(width/2, height/1.7, taille4, taille4);

// 25, 50 , 80

}

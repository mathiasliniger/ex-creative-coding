/**
 *  EASING REF:
 *  https://easings.net/#
 */

class App {
  constructor() {
    this.pixelRatio = window.devicePixelRatio || 1;
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth * this.pixelRatio;
    this.canvas.height = window.innerHeight * this.pixelRatio;
    this.canvas.style.width = window.innerWidth;
    this.canvas.style.height = window.innerHeight;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.all_blocks = [];
    this.setup();
  }

  setup() {
    // this.circle = new Circle(100, 100, 50, this.ctx);

    // this.ctx.translate(this.width/2, this.height/2)
    this.mouse = { x: 0, y: 0 };
    const blockWidth = Math.ceil((298 / 3) * this.pixelRatio);
    for (let i = 0; i < 3; i++) {
      const block = new Block(
        i * blockWidth,
        900,
        blockWidth,
        window.innerHeight * this.pixelRatio - 1100,
      
        i * 10.8,
        
        this.ctx
        );
        this.all_blocks.push(block);
      }

      const center = {
        x: (window.innerWidth / 2) * this.pixelRatio,
        y: (window.innerHeight / 2) * this.pixelRatio,
      };

 //BODY
 this.body = new Array(
  new body(center.x - 120, center.y - 100,  this.ctx),
 
);

 //EYES
 this.eyes = new Array(
  new Eye(center.x - 120, center.y - 100, 70, this.ctx),
  new Eye(center.x + 120, center.y - 100, 70, this.ctx)
);


      document.addEventListener("mousemove", this.move.bind(this));
      this.draw();
    }
    
    draw() {
      
      // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.all_blocks.forEach((block) => {
        block.draw();
       
      });

      this.body.forEach((body) => {
        body.draw(this.mouse.x, this.mouse.y);
      });
      
      this.eyes.forEach((eye) => {
        eye.draw(this.mouse.x, this.mouse.y);
      });
      
      requestAnimationFrame(this.draw.bind(this));
    }
    
    move(e) {
      this.all_blocks.forEach((block) => {
        if (
          block.checkiftouched(
            e.clientX * this.pixelRatio,
            e.clientY * this.pixelRatio
            )
            ) {
        
        block.reset(e.clientY);
      }
    });
  }
}

window.onload = function () {
  new App();
};

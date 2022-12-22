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
    this.ctx.strokeStyle = "white";
    this.img_file = "./asset/valouz.jpg";
    this.setup();
  }

  setup() {
    // create grid
    this.points = [];
    // pour centrer la grille
    const totalLines = 20 * 100;
    const subdivisions = {
      x: (window.innerWidth / 2) * this.pixelRatio - totalLines / 2,
      y: (window.innerHeight / 2) * this.pixelRatio - totalLines / 2,
    };
    for (let j = 0; j < 100; j++) {
      for (let i = 0; i < 100; i++) {
        this.points.push(
          new Circle(subdivisions.x + i * 20, subdivisions.y + j * 20, 10, this.ctx)
        );
      }
    }
    // load image
    this.img = new Image();
    this.img.onload = () => {
      this.detectPixels();
    };
    this.img.src = this.img_file;
    //
  }

  detectPixels() {
    this.ctx.drawImage(this.img, 0, 0);
    // get image data from canvas
    this.imgData = this.ctx.getImageData(0, 0, this.img.width, this.img.height);
    // get pixel data
    this.pixels = this.imgData.data;
    // get steps for 100 x 100
    this.step = Math.floor(this.img.width / 100);
    // get rgb data for each step pixel in 100 x 100
    this.rgb = [];
    for (let i = 0; i < this.img.height; i += this.step) {
      for (let j = 0; j < this.img.width; j += this.step) {
        let index = (i * this.img.width + j) * 4;
        this.rgb.push({
          r: this.pixels[index],
          g: this.pixels[index + 1],
          b: this.pixels[index + 2],
          a: this.pixels[index + 3],
        });
      }
    }

    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //draw all circle of the grid
    this.points.forEach((circle, index) => {
      const color = this.rgb[index];
      circle.color = `rgb(${color.r}, ${color.g}, ${color.b})`;
      circle.draw();
    });

    for (let i = 0; i < this.totalLines; i++) {
      this.ctx.beginPath();
      for (let j = 0; j < this.subdivisions - 1; j++) {
        const index = i * this.subdivisions + j;
        if (j == 0) {
          this.ctx.moveTo(this.points[index].x, this.points[index].y);
        }
        // replace that line with a quadratic curve
        // this.ctx.lineTo(this.points[index + 1].x, this.points[index + 1].y);
        const cx = (this.points[index].x + this.points[index + 1].x) / 2;
        const cy = (this.points[index].y + this.points[index + 1].y) / 2;
        this.ctx.quadraticCurveTo(
          this.points[index].x,
          this.points[index].y,
          cx,
          cy
        );
      }
      // this.ctx.save();
      // this.ctx.globalCompositeOperation = "destination-out";
      // this.ctx.fill();
      // this.ctx.restore();
      this.ctx.stroke();
      this.ctx.closePath();
    }

    requestAnimationFrame(this.draw.bind(this));
  }
}

window.onload = function () {
  new App();
};

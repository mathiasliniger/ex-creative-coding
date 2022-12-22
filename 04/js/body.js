class body {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;

    this.ctx = ctx;
  }

  // checkiftouched(x, y) {
  //   return (
  //     x > this.position.x &&
  //     x < this.position.x + this.width &&
  //     y > this.position.y &&
  //     y < this.position.y + this.height
  //   );
  // }

  // reset(y) {
  //   this.t = 0;
  //   this.originHeight = y;
  //   this.height = y;
  //   this.originsaturation = 100;
  // }

  //----------------------------------------

  draw(x, y) {
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.fillStyle = "red";
    this.ctx.beginPath();
    
    
    this.ctx.arc(120, 0, 298, 0, Math.PI * 2);
    // this.ctx.arc(-58, 400, 120, 0, Math.PI * 2);
    // this.ctx.arc(120, 400, 120, 0, Math.PI * 2);
    // this.ctx.arc(300, 400, 120, 0, Math.PI * 2);
    // this.ctx.arc(-100, 400, 20, 0, Math.PI * 2);
   this.ctx.rect(-178, 0, 598, 300);

  //  this.ctx.roundRect(-180, 50, 220, 550, 120);
  //  this.ctx.roundRect(20, 50, 220, 550, 120);
  //  this.ctx.roundRect(200, 50, 220, 550, 120);
    // this.ctx.noStroke();
    
    this.ctx.fill();
    
    this.ctx.closePath();

    this.ctx.fillStyle = "black";
    this.ctx.beginPath();
    
    
    
    this.ctx.arc(110, 120, 100, 0, 1 * Math.PI);
    
   
    // this.ctx.noStroke();
    
    this.ctx.fill();
    this.ctx.stroke();
    

    this.ctx.closePath();

    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
    
    
    
    this.ctx.arc(110, 120, 100, 0.9, 0.7 * Math.PI);
    
   
    // this.ctx.noStroke();
    
    this.ctx.fill();
    this.ctx.stroke();
    

    this.ctx.closePath();
    this.ctx.restore();
    
   
  }
}
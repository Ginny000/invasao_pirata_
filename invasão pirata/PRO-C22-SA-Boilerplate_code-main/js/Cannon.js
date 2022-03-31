class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
  }
  display() {
  //código pra criar o topo do canhão
   push()
   rectMode(CENTER)
   rect(this.x, this.y, this.whidth, this.height)
   pop()
   
  //código pra criar a base do canhão
   rect(70, 20, 200, 200);
   noFill()
  }

}

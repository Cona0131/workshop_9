let webcam;
let ballSystem = [];
let scale = 10;

function setup() {
  createCanvas(400, 400);
  createCanvas(400, 400);
  pixelDensity(1);
  webcam = createCapture(VIDEO);
  webcam.size(width / scale, height / scale);
  webcam.hide();
  for(x = 0; x < 200; x++){
    let rx = random(15, width - 15);
    let ry = random(15, height - 15);
    let rr = random(4, 30);
    ballSystem[x] = new Ball(rx, ry, rr);
  }

}

function draw() {
  //background(220);
  //image(webcam, 0, 0);
  //filter(GRAY);
  for(x = 0; x < ballSystem.length; x++){
    ballSystem[x].move();
    ballSystem[x].show();
    ballSystem[x].checkEdges();
  }
 
}

class Ball {

  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move(){
    this.x = this.x + random(-8, 8);
    this.y = this.y + random(-8, 8);
  }

  show(){
    let pX = this.x / scale;
    let pY = this.y / scale;
    let pixelColor = webcam.get(pX, pY);
    fill(pixelColor[0], pixelColor[1], pixelColor[2], 1);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);  
  }
  checkEdges(){
    if (this.x < 15){
      this.x = 15;
    } else if (this.x > width -15) {
      this.x = width - 15;
    }
    if (this.y > height - 15){
      this.y = 15;
    } else if (this.y > height - 15){
      this.y = 15;
    }
  }
}

 
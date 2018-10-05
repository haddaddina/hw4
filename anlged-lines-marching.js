function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}
var changeInX = 4
var startX = 10

function draw() {
  background(255);

  for (var x = startX; x < width + 30; x = x + 10) {
    line(x, height/2, x+100, height/2-75);    
  }
  
  startX = startX + changeInX;
  
  if (startX > width) {
    changeInX = -4;
  }
  
  if (startX < 0) {
    changeInX = 4;
  }
}

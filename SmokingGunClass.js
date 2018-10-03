function setup() {
  createCanvas(400, 400);
for (var i = 0 ; i < 100; i = i + 1 ){
  append(x, 210);
  append(y, random(height));
  append(r, random());
}
}
 
var x = [210];
var y = [290];
var r = [0];


function draw() {
  background(10);
  noStroke();
 for (var i = 0 ; i < 100; i = i + 9 ){
  // draw smokestack
  fill(255);
  rect(195, 400, 35, -100);

  // darker as it gets closer to 0
  push();
  fill(y);
  translate(x[i], y[i]);
  rotate(r[i]);
  rect(-10, -10, 20, 20);
  pop();
  
  // up 3 pixels
  y[i] -= 5;
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r[i] += 0.05
  
  // if reach past the top a bunch
  if (y[i] < -150) {
    y[i] = 290;
  }
 }
}

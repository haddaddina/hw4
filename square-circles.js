function setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  for (var i = 0; i < x.length; i = i + 10){
    rect(x[i], y[i], 1 + (x.length - i), 1 + (y.length - i));
  }

  x = x.slice(-100); // keep the last 50 x values
  y = y.slice(-100); // keep the last 50 y values
}

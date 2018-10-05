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
  
  beginShape(TRIANGLES);
	vertex(30, 75);
	vertex(40, 60);
	vertex(50, 75);
	endShape();

  for (var i = 0; i < x.length; i = i + 10){
    beginShape(TRIANGLES);
	vertex(x[i], y[i]);
  vertex( 20 + (x.length + i), 1 + (y.length - i));
	vertex( 1 + (x.length - i), 1 + (y.length - i));
	endShape();
     }

  x = x.slice(-50); // keep the last 50 x values
  y = y.slice(-50); // keep the last 50 y values
}

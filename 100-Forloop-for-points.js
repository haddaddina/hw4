function setup() {
  createCanvas(400, 400);
	colorMode(HSB, width, height, 100);
}

function draw() {
	var x = random(width);
	var y = random(height);

  // noprotect
  for(var i = 100; i < 10; i+ 100);{
    stroke(x, y, 100);
		point(x, y);
  }
}

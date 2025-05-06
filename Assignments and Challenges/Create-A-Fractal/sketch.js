// Create A Fractal
// Maheen Shahid
// April 17, 2025


function setup() {
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES);
  angle = 0;
}

function draw() {
  background(220);
  rotateY(frameCount * 0.01);
  spiral(0, 0, 1, 0, 100);
}

function spiral(x, y, z, scale, angle){
  if(depth <= 0){
    return;
  }

  push();
  translate(x, y, z);
  sphere(10);
  pop();
}








// Create A Fractal
// Maheen Shahid
// April 17, 2025


function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(220);
  let maxDepth =  map(mouseX, 0, width, -120, 120);
  drawFractal(width/2, height/2, 100, maxDepth);

}

function drawFractal(x, y, size, depth){
  //RECURSIVE CALL
  if(depth > 1){
    push();
    translate(x,y);
    rotate(frameCount);
    fill(random(255),random(255),random(255))
    rect(0,0,size,size);
    pop();
  }

  let newSize = size*0.5; //cut size in half

  // 4 recursive calls in each corner
  drawFractal(x - size, y - size, newSize, depth - 1);
  drawFractal(x + size, y - size, newSize, depth - 1);
  drawFractal(x - size, y + size, newSize, depth - 1);
  drawFractal(x + size, y + size, newSize, depth - 1);
}


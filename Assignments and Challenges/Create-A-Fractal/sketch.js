// Create A Fractal
// Maheen Shahid
// April 17, 2025


function setup() {
  createCanvas(600,600);
  background(0);
  stroke(255);
  drawFractal(150, 150, 300);
}


function drawFractal(x,y,size){
  if(size <10){
    return;
  }

  fill(random(255), random(255), random(255));
  rect(x, y, size, size);

  let newSize = size/3;

  drawFractal(x-newSize, y - newSize, newSize);
  drawFractal(x+ size, y - newSize, newSize);
  drawFractal(x-newSize, y + size, newSize);
  drawFractal(x + size, y + size, newSize);

}

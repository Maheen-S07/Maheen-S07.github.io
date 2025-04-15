// CSS Centering and 3D
// Maheen Shahid
// April 15, 2025

// Look in "style.css" to figure out how to center your fixed screen size.
// Box always drawn at 0,0 (IN WEBGL) which is gonna now be the center of the screen
// unless u translate.

let angle = 5;

function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  lights();
  rotateX(-20);
  rotateY(frameCount);
  fill(100,240,100);
  angle = map(mouseX, 0, width, -120, 120);

  for(let i = 0; i < 360; i += 45){
    push();
    rotateY(i);
    drawBox(30);
    pop();
    
  }
}

function drawBox(size){
  if(size > 3){
    rotateZ(angle);
    translate(size*1.5, 0);
    box(size);

    drawBox(size*0.8);
  }
}

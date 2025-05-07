// Create A Fractal
// Maheen Shahid
// April 17, 2025

//Global Variables
let angle = 0;

function setup() {
  createCanvas(600,600, WEBGL);
  strokeWeight(1);
  noFill();
}

function draw(){
  background(255);

  rotateX(angle);
  rotateY(angle);

  drawCircle(0, 0, width/2, 0);
  // update angle
  angle += 0.1; 
}



function drawCircle(x, y, d){
  //Draw one main circle
  //Draw 8 circles around each circle on the canvas recursively
  //Each circle decreasing in size

  //BASE CASE
  if(d < 10){
    return;
  }
  //Random color for each circle
  stroke(random(255), random(255), random(255));
  push();
  translate(x,y,0);
  sphere(d/2);
  pop();

  let radius = d/2;
  //Recursive Calls
  drawCircle(x + radius, y, radius);
  drawCircle(x - radius, y, radius);
  drawCircle(x, y + radius, radius);
  drawCircle(x, y - radius, radius);
  drawCircle(x + radius, y + radius, radius);
  drawCircle(x - radius, y - radius, radius);
  drawCircle(x - radius, y + radius, radius);
  drawCircle(x + radius, y - radius, radius);
}


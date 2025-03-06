// Transformations Challenge
// Maheen Shahid
// March 6, 2025



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  angleMode(DEGREES);
  translate(200,200);

  rotate(-frameCount);
  circle(0,0,150);



  let numSpoke = map(mouseX,0,width,1,1000);
  let spokeAngle = 360/numSpoke;

  for(let i = 0; i < numSpoke; i++){
    line(0,0,75,0);
    rotate(spokeAngle);
  }
}
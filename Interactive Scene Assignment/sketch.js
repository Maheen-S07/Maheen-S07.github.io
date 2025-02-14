// Interactive Scene Assignment
// Maheen Shahid
// Feb 12, 2025



function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  drawBackground();
  drawCharacter();
}

function drawBackground() {
  fill(230, 224, 158);
  rect(0, 600, windowWidth, 200);
  fill(105, 105, 100);
  triangle(300, 200, 0, 600, 600, 600);
  fill(128, 128, 120);
  triangle(700, 200, 400, 600, 1000, 600);
}

function drawCharacter(){
  fill(207, 85, 74)
  rect(98, 550, 5, 110);
  fill(252, 252, 252);
  circle(100, 510, 90);
}
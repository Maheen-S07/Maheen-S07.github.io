// Interactive Scene Assignment
// Maheen Shahid
// Feb 12, 2025
//

let boxX;
let boxY;

function setup() {
  createCanvas(windowWidth,windowHeight);
  boxX = width/2;
  boxY = height/2;
}

function draw() {
  background(220);
  drawCharacter();
  drawBackground();
}

function drawBackground() {
  fill(200,50, 72);
  rect(boxX, boxY, widowWidth, 50);
}



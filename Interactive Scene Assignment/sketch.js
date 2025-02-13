// Interactive Scene Assignment
// Maheen Shahid
// Feb 12, 2025

//Global Variable Declarations

let boxX;
let boxY;

function setup() {
  createCanvas(1000, 1000);
  boxX = width/2;
  boxY = height/2;
}

function draw() {
  background(220);
  drawBackground();
}

function drawBackground() {
  fill(230, 224, 158);
  rect(0, 600, windowWidth, 200);
  triangle(300, 200, 0, 600, 600, 600);
  fill(105, 105, 100);
  triangle(300, 200, 0, 600, 600, 600);
  triangle(750, 200, 400, 600, 1000, 600);
}
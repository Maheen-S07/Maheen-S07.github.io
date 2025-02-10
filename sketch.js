// Drawing with Shapes Project
// Maheen Shahid
// Feb 10, 2025
//
// Global Variable Declarations

let boxX;
let boxY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  boxX = width/2;
  boxY = height/2;

}

function draw() {
  background(220);
  drawCharacter();
  // drawBox();
}

function drawCharacter(){
  fill(200, 50, 72);
  rect(boxX, boxY, 100, 100, 1000, 1000, 0, 0);
  rect(boxX, boxY + 80, 10, 40);
  rect(boxX + 90, boxY + 80, 10, 40);

}

// function drawBox(){
//   //draw box on the screen
//   fill(255, 155,55);
//   rect(boxX, boxY, 50, 30, 5, 5, 0, 0);
//   rect(boxX, boxY - 50, 30);
// }

// function keyPressed(){
//   if(key === "a"){
//     boxX = 0;
//   }
//   if(key === "b"){
//     boxY = 400;
//   }
//   if(keyCode === ESCAPE){
//     boxX = width * 0.85;  //85% across the screen
//     boxY = height * 0.6;  //60% down the screen
//   }
// }
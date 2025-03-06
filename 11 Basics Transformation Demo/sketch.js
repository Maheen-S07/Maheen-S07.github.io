// Basic Transformations Demo
// Maheen Shahid
// March 6, 2025
// Coordinate System Transformations
// (translate, move, scale)



let originalSpacing = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  drawBasicGrid(220);



  //transformation one: TRANSLATION
  // push();  //makes a new coordinate system on top
  // translate(120,120); //move coordinate system by this amount
  // drawBasicGrid(150);
  // rectangleRed(0,0);

  // pop(); //revert to the previous coordinate system
 

  //transformation two: SCALE
  // push();
  // rectangleRed(40,0);   //50px square

  // //scale:  1: no change      <1: smaller    >1: larger
  // let scaleAmount = 2.5;
  // translate(60,60);
  // scale(scaleAmount);
  // drawBasicGrid(100);
  // rectangleBlue(20,20);
  // pop();



  //transformation three: ROTATION
  //reminder: rotations are measured in radians, not degrees! Functions can help with the conversion...
  angleMode(DEGREES);
  push();
  translate(140,140);
  rotate(frameCount);  //frameCount causes it to automatically rotate
  // always rotates around the origin 
  //drawBasicGrid(150);
  face(0,0);

  pop(); // back to base cooridnate system

  push(); 
  //to rotate and object around itself
  //1. translate to the objects position
  //2. apply the rotation transform
  //3. draw at (0,0);
  rectMode(CENTER);
  translate(mouseX, mouseY);  //always put scale after translate
  scale(2);
  rotate(-frameCount*2);
  rectangleBlue(0,0);


  //Combinations of Transformations

  

}


function face(x, y) {
  //draw a face at x,y
  push();
  translate(x,y);
  ellipseMode(CENTER);
  fill(200,200,0);
  stroke(0);
  ellipse(0,0,80,80);
  fill(90, 140, 30, 220);
  triangle(-20, 20, 20, 20, 0, 30);
  fill(0);
  ellipse(-25,0,10,10);
  ellipse(25,0,10,10);
  strokeWeight(5);
  line(-30,-10,30,-10);
  strokeWeight(1);
  pop();

}

function rectangleRed(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(255, 0, 0, 150);
  rect(x, y, 50, 50);

}

function rectangleBlue(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(0, 0, 255, 150);
  rect(x, y, 50, 50);

}

function drawBasicGrid(shade) {
  //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += 20) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 20) {
    line(0, y, width, y);
  }

  //Draw "X" at the origin
  strokeWeight(3);
  stroke(0);
  line(-5,0,5,0);
  line(0,5,0,-5);
  strokeWeight(1);
}
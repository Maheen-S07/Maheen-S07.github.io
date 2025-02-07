// User Events
// Maheen Shahid
// Feb 7, 205
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//Global Variable Declarations
// Define your globals here.
// You can old store simple/primitive data
// at this point. (no system variable)
let tSize = 10;
let x;  //declaration only

function setup() {
  //runs once, right at the start
  createCanvas(windowWidth, windowHeight);
  x = width/2; //initialization
  rectMode(CENTER);
}

function draw() {
  //runs over and over, running 60 fps
  background(220);
  //print("Current Frame: "+ frameCount);  //console.log
  
  //-------Mouse Section------
  fill("green");  //fill/stroke can use color strings
  textSize(tSize);
  text(mouseX + ", " + mouseY, " " + mouseButton, mouseX, mouseY);

  //--------Keyboard Section --------
  fill (255,200,100);
  square(x, 200, 50, 5);

  if(keyIsDown(LEFT_ARROW)){
    x = x - 5;
    if(x < 0){  // off the edge
      x = width;  //(create a wrap around effect)
      }
  }
  if(keyIsDown(RIGHT_ARROW)){
    x = x + 5;
    if(x > width){
      x = 0;
    }
  }
}
function mousePressed(){
  //this is called Automatically..do NOT call this yourself
  //This is called ONCE PER MOUSE BUTTON PRESS
  tSize = random(5, 100);
}
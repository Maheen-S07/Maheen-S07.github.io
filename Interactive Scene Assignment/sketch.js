// Interactive Scene Assignment
// Maheen Shahid
// Feb 12, 2025


//Global Variable Declaration

let jimX = 100; // starts jim at x = 100

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  drawBackground();
  jimTheCharacter(jimX);

      // Character Movement
      if(keyIsDown(LEFT_ARROW)){
        jimX -= 5;
        if(jimX < 0){  // off the edge
          jimX = 1000;  // create a wrap around effect
          }
      }
      if(keyIsDown(RIGHT_ARROW)){
        jimX += 5;
        if(jimX > 1000){
          jimX = 0;
        }
      }
}

function drawBackground() { // Draws Scenery
  noStroke();
  fill(230, 224, 158);
  rect(0, 600, windowWidth, 200);
  fill(105, 105, 100);
  triangle(300, 200, 0, 600, 600, 600);
  fill(128, 128, 120);
  triangle(700, 200, 400, 600, 1000, 600);
}

function jimTheCharacter(x){ // Draws interactive character
  fill(0, 0, 0)
  rect(x, 553, 5, 110); // moves body at x-position

  fill(207, 85, 74);
  stroke(0, 0, 0);
  noFill();
  strokeWeight(5);
  circle(x, 510, 90); // Head moves with x

  // ARMS
  line(x + 2, 590, x - 13, 650);
  line(x + 4, 590, x + 15, 650);
  // LEGS
  line(x + 2, 660, x - 13, 710);
  line(x + 4, 660, x + 15, 710);

}


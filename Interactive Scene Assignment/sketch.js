// Interactive Scene Assignment
// Maheen Shahid
// Feb 12, 2025


//Global Variable Declaration
let jimX = 100; // starts jim at x = 100
let currentBack = 0 //Default Background

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(209, 238, 240);
  drawBackground();
  jimTheCharacter(jimX);

      // Character Movement
      if(keyIsDown(LEFT_ARROW)){
        jimX -= 5;
        if(jimX < 0){  // off the screen
          jimX = 1000;  
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

  if(currentBack === 0){   // Default Blue Sky
    background(209, 238, 240);
  }

  if(currentBack === 1){   // Sunset
    background(255, 140, 0);
  }

  if(currentBack === 2){   // Night
    background(30, 30, 30);
  }

  if(currentBack === 3){   // Snowy
    background(250, 249, 242);
  }

  fill(232, 200, 42);
  circle(800, 100, 110);

  fill(197, 199, 199);
  rect(0, 600, windowWidth, 200);

  fill(162, 196, 157);
  rect(0, 800, windowWidth, 200);

  fill(105, 105, 100);                     // Mountains
  triangle(300, 200, 0, 600, 600, 600);
  fill(128, 128, 120);                       
  triangle(700, 200, 400, 600, 1000, 600);


  // Name 
  fill('tomato');
  text("Maheen Shahid", 5, 990);
  textSize(25);
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
  line(x + 4, 590 , x + 15, 650);
  // LEGS
  line(x + 2, 660, x - 13, 710);
  line(x + 4, 660, x + 15, 710);

}

function mousePressed(){
  if(mouseButton === CENTER){

      currentBack = (currentBack + 1);  // Changes Background

      if(currentBack > 3){
        currentBack === 0
    }

  }
}


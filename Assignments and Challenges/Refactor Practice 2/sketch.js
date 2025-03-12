//Refactoring Practice
//Maheen Shahid
//March 11, 2025

function setup() {
  createCanvas(480, 270);
}
function draw() {
  background(255);
  stroke(0);
  line(240, 0, 240, 270);
  line(0, 135, 480, 135);
  noStroke();
  fill(0);

  //Deteremine the mouse position
  //Draws black rectangle depending on which quadrant the mouse is in
  if (mouseX < 240 && mouseY < 135) {
    rect(0, 0, 240, 135);
  }
  else if (mouseX > 240 && mouseY < 135) {
    rect(240, 0, 240, 135);
  }
  else if (mouseX < 240 && mouseY > 135) {
    rect(0, 135, 240, 135);
  }
  else if (mouseX > 240 && mouseY > 135) {
    rect(240, 135, 240, 135);
  }
}

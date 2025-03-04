// Drawing with Single Loops
// Maheen Shahid
// Feb 24, 2025


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  gradientBackground();
  circleLine();
}

function gradientBackground(){
  //create a gradient to use as background
  let h = 1;

  //use a loop to draw vertical stack of rectangles
  for(let y = 0; y < height; y+= h){
    noStroke();
    let mappedY = map(y,0,height,0,255);
    // let reversedY = map(y,0,height,255,0);
    fill(mappedY, mappedY, mappedY);
    rect(0, y, width, h);
  }
}

function circleLine(){
  // use a loop (for or while) to draw a line
  // of circles side by side
  let d = 40; // diameter of circle
  let y = height/2;
  let xStart = 0;
  let xEnd = mouseX;  //mouseX

  // Use a loop to do the drawing
  // RESULTS IN A SINGLE IMAGE, NO ANIMATION!
  for(let x = xStart; x <= xEnd; x+=d){
    circle(x, y, d);
  }
}
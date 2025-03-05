// Terrain Generation Project
// Maheen Shahid
// March 5, 2025


let rectWidth = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
}

function generateTerrain(){
  // use a loop to generate and draw
  // several rectangles side to side
  // to look like some 2D terrain
  rectMode(CORNERS);

  for(let x = 0; x < width; x += rectWidth){
    //generate a random height. 
    //change this from using random() to noise()
    let rectHeight = random(50,500); 
    
    //calculate the other corner of our rectangle
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    rect(x, height, x2, y2);
  }
  
  rectMode(CORNER);
}

function draw() {
  // background(220);
  // generateTerrain();
}
// Terrain Generation Project
// Maheen Shahid
// March 5, 2025


let rectWidth = 1;
let noiseOffset = 10;
let noiseSpeed = 0.01; 
let rectHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
  drawFlag();
}

function generateTerrain(){
  // use a loop to generate and draw
  // several rectangles side to side
  // to look like some 2D terrain
  rectMode(CORNERS);

  for(let x = 0; x < width; x += rectWidth){
    //generate a random height. 
    //change this from using random() to noise()
    let rectHeight = noise(noiseOffset);
    rectHeight = map(rectHeight, 0, 1, 50, 800);
    
    //calculate the other corner of our rectangle
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    rect(x, height, x2, y2);

    noiseOffset += noiseSpeed; //move through noise
  }
  
  rectMode(CORNER);
}

function drawFlag(x,y){
  // Draw a flag
  // Places the flag at the highest peak of the terrain

  // let highestPoint = Infinity;
  // let highX;
  // let highY;

  // if(rectHeight > Infinity){
  //   rectHeight = Infinity;
  //   highX = x;
  //   highY = y;
  // }

  fill(0,0,0);
  rect(x,y,5,40);
  rect(x,y,25,20);

}



function draw() {
  //background(220);
  //generateTerrain();
}

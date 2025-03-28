// Terrain Generation Project
// Maheen Shahid
// March 5, 2025


let rectWidth = 1;
let rectHeight;
let noiseOffset = 10;
let noiseSpeed = 0.01; 
let panSpeed = 2; 
let totalHeight = 0;
let averageHeight = 0;
let rectAmount = 0;
let maxX = 0; //highest x point
let maxY = 0; //highest y point



function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNER);
}

function draw() {
  background(255); // Will clear each frame
  generateTerrain();
  noiseOffset += panSpeed * noiseSpeed //Panning 
}

function generateTerrain(){
  // use a loop to generate and draw
  // several rectangles side to side
  // to look like some 2D terrain
  rectMode(CORNERS);
  let offset = noiseOffset; // Starts at the updated offset
  maxY = 0;
  totalHeight = 0;
  rectAmount = 0;

  fill(0); 

  for(let x = 0; x < width; x += rectWidth){
    //generate a random height. 
    rectHeight = noise(offset);
    rectHeight = map(rectHeight, 0, 1, 50, height * 0.9);
    
    //calculate the other corner of our rectangle
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    rect(x, height, x2, y2);

    offset += noiseSpeed; //Shifts noise along the x-axis
    totalHeight += rectHeight;
    rectAmount++; //each time a new rect is created

    if(maxY < rectHeight){
      maxY = rectHeight;
      maxX = x;
    }

  }
  drawFlag(maxX, height - maxY- 40); //Draws flag at highest point 
  averageHeight = totalHeight/ rectAmount;
  averageLine();
}

function drawFlag(x,y){
//Draw a flag
  rectMode(CORNER);
  fill(0,0,0);
  rect(x,y,5,40);
  rect(x,y,25,20);
}

function averageLine(){
  //Line drawn at the average of all heights
  fill(255,0,0);
  rect(0, height - averageHeight, width, 5);
}

function keyPressed(){
  //Allows user to alter rectWidth
  if(keyCode === 39){ //Increase width
      rectWidth += 1;
    }
  else if(keyCode === 37 && rectWidth > 1){ //Decrease width
    rectWidth -= 1;
    }
}


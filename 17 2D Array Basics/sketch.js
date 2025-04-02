// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid = 
[ [0, 60, 120, 180, 240],
[240, 180, 120, 60, 0],
[0, 200, 0, 200, 0]
];

let squareSize = 60;
const NUM_ROWS = 3;
const NUM_COLS = 5;


function renderGrid(){
  // interpret the information in the 2D Array, and draw
  // a grid of colors on the screen to reflect it.
  for(let y = 0; y < NUM_ROWS; y++){
    for(let x = 0; x < NUM_COLS; x++){
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*squareSize, y*squareSize, squareSize);
    }
  }
}

function setup() {
  createCanvas(NUM_COLS * squareSize, NUM_ROWS * squareSize);
}

function getCurrentY(){
  //determine the current row of the mouse position
  let constrainedY = constrain(mouseY, 0, height-1); 
  //constrains if its above width (will return width) or below 0 (will return 0), it will return the either the max or the min
  return floor(constrainedY / squareSize);
}

function getCurrentX(){
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX / squareSize);
}

function checkForMouse(){
  //flip current tile to a random grayscale value
  if(mouseIsPressed){
    let x = getCurrentX();
    let y = getCurrentY();
    grid[y][x] = floor(random(255));
  }
}

function draw() {
  background(220);
  renderGrid();
  checkForMouse();

}

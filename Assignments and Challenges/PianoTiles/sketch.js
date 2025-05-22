// Piano Tiles- Capstone Project
// Maheen Shahid
// May 8, 2025

//Global Variable Declarations
let NUM_ROWS = 4
let NUM_COLS = 4
let rectWidth;
let rectHeight;
let pianoTiles = [];
let scrollY = 0;
let scrollSpeed = 2;
let value = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  setUpSizes();
  randomStart();
}

function draw() {
  background(220);
  drawPiano();
  updateTiles();
}

// ----------- Display and Functionality of Game --------------

function setUpSizes(){
  //Set size of each tile based on size of screen
  //Uses rows/cols to divide
  rectWidth = windowWidth/NUM_COLS;
  rectHeight = windowHeight/NUM_ROWS;
}

function randomStart(){
  //Create the starting rows for the game
  //helps scroll smoothly by adding more tiles
  let totalRows = NUM_ROWS + 2; 
  for(let i = 0; i < totalRows; i++){
    pianoTiles.push(randomRow());
  }
}

function drawPiano(){
  //Render a grid of squares - 4x4
  //Use scrollY to scroll smoothly
  for (let y = 0; y < pianoTiles.length; y++){ 
    for (let x = 0; x < NUM_COLS; x++){
      let tileY = y * rectHeight + scrollY;
      fill(pianoTiles[y][x]); 
      rect(x*rectWidth, tileY -  rectHeight, rectWidth, rectHeight);
    }
  }
  scrollY += scrollSpeed;
}

function updateTiles(){
  //Keep a flow of new rows
  // Check if a full row has passed
  if(scrollY >= rectHeight){
    scrollY -= rectHeight;
    pianoTiles.pop(); //remove bottom row
    pianoTiles.unshift(randomRow()); //add new row
  }
}


function randomRow(){
  //create a row, one black tile and the rest white
  //used for everytime a new row enters
  let row = [];
  let blackTile = floor(random(NUM_COLS)); //Choose random coloumn in the row
  for(let x = 0; x < NUM_COLS; x++){
    if(x === blackTile){
      row.push('black'); // Black tile
  }
    else{
       row.push('white'); // White Tile
  }
 }
  return row;
}

// ------- Touch -----------

function tileTouch(x,y){
  for (let y = 0; y < pianoTiles.length; y++){}
    for (let x = 0; x < NUM_COLS; x++){
      let tileX = x * rectWidth;
      let tileY = y * rectHeight + scrollY - rectHeight;
      //where did we click?
      if(x > tileX && x < tileX + rectWidth && y > tileY && y < tileY + rectHeight){
        let color = pianoTiles[y][x];
        if(color === 'black'){
          pianoTiles[y][x] = 'white';
        }
        else if(color === 'white'){  //clicked the wrong tile
          pianoTiles[y][x] = 'red'
        }
        }

      }

}

function touchStarted(){
  for (let row = 0; y < pianoTiles.length; row++){}
    for (let col = 0; col < NUM_COLS; col++){
      let tileX = col * rectWidth;
      let tileY = row * rectHeight + scrollY - rectHeight;

      //where did we click?
      if(mouseX > tileX && mouseX < tileX + rectWidth && mouseY > tileY && mouseY < tileY + rectHeight){
        let color = pianoTiles[row][col];
        if(color === 'black'){
          pianoTiles[row][col] = 'white';
        }
        else if(color === 'white'){  //clicked the wrong tile
          pianoTiles[row][col] = 'red'
        }
        }

      }
  return false;
}













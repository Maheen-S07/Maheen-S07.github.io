// Piano Tiles- Capstone Project
// Maheen Shahid
// May 8, 2025

let NUM_ROWS = 4
let NUM_COLS = 4
let rectWidth;
let rectHeight;
let pianoTiles = [];
let scrollY = 0;
let scrollSpeed = 2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  setUpSizes();
  randomStart();
}

function draw() {
  background(220);
  drawPiano();
  updateTiles();
  scrollY += scrollSpeed;
}

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
      fill(pianoTiles[row][x]); 
      rect(x*rectWidth, tileY -  rectHeight, rectWidth, rectHeight);
    }
  }
}

function updateTiles(){
  //Keep a flow of new rows
  // Check if
  if(scrollY >= rectHeight){
    scrollY -= rectHeight;
    pianoTiles.pop(); //remove bottom row
    pianoTiles.unshift(randomRow()); //add new row
  }
}


function randomRow(){
  let row = [];
  let blackTile = floor(random(NUM_COLS)); //Choose random coloumn in the row
  for(let x = 0; x < NUM_COLS; x++){
    if(x === blackTile){
      row.push([0,0,0]); // Black tile
  }
    else{
       row.push([255,255,255]); // White Tile
  }
 }
  return row;
}

function shiftTilesDown(){
  pianoTiles.pop(); //remove bottom row
  pianoTiles.unshift(randomRow()); //add new row
}



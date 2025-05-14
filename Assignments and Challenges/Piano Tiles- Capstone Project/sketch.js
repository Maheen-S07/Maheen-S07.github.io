// Piano Tiles- Capstone Project
// Maheen Shahid
// May 8, 2025

let NUM_ROWS = 4
let NUM_COLS = 4
let rectWidth;
let rectHeight;
let currentCol;
let currentRow;
let pianoTiles = [];
let scrollY = 0;
let scrollSpeed = 2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = windowWidth/NUM_COLS;
  rectHeight = windowHeight/NUM_ROWS;
  randomStart();
}

function draw() {
  background(220);
  scrollY += scrollSpeed;
  drawPiano();
}

function drawPiano(){
  //Render a grid of squares - 4x4
  //Equally divided depending on size of screen
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      fill(pianoTiles[y][x]); 
      rect(x*rectWidth, (y*rectHeight + scrollY) % windowHeight - rectHeight, rectWidth, rectHeight);
    }
  }
}

function randomStart(){
  //A different arrangement of tiles everytime
  //Make one random tile from each row black.
  //The black tiles are what the user clicks.
  pianoTiles = [];
  for (let i = 0; i <NUM_ROWS; i ++){
  pianoTiles.push(randomRow());
}
}

function randomRow(){
  //A different arrangement of tiles everytime
  //Make one random tile from each row black.
  //The black tiles are what the user clicks.
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



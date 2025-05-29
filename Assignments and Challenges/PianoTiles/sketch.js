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
let scrollSpeed = 6;


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
  //divide any screen size into 
  //4 equal coloumn and rows.
  rectWidth = windowWidth/NUM_COLS;
  rectHeight = windowHeight/NUM_ROWS;
}

function randomRow(){
  //Choose a random tile to make black 
  //the rest stay white
  let row = [];
  let blackTile = floor(random(NUM_COLS));
  for(let x = 0; x < NUM_COLS; x++){
    if(x === blackTile){
      row.push('black');
    }
  else{
    row.push('white');
    }
  }
  return row;
}

function randomStart(){
  //give a new arrangement of tiles
  //everytime the game is reset.
  let totalRows = NUM_ROWS + 2;
  for(let i = 0; i < totalRows; i ++){
    pianoTiles.push(randomRow());
  }
}

function updateTiles(){
  //keep the tiles going
  //Does not let them stack
  if(scrollY >= rectHeight){
    scrollY -= rectHeight;
    pianoTiles.pop(); // remove row
    pianoTiles.unshift(randomRow()); //make a new row
  }
}

function drawPiano(){
  //render the tiles on the screen 
  for(let y = 0; y < pianoTiles.length; y++){
    for(let x = 0; x < NUM_COLS; x++){
      let tileY = y* rectHeight + scrollY;
      fill(pianoTiles[y][x]);
      rect( x* rectWidth, tileY - rectHeight, rectWidth, rectHeight)
    }
  }
  scrollY += scrollSpeed; //scrolling
}

// -------------- Touch Functions --------------

function touchStarted(){
  //detects what tile was clicked
  //what colour is it?
  for(let row = 0; row < pianoTiles.length; row++){
    for(let col = 0; col < NUM_COLS; col++){
      let tileX = col* rectWidth;
      let tileY = row * rectHeight + scrollY - rectHeight;
      if(mouseX > tileX && mouseX < tileX + rectWidth && mouseY > tileY && mouseY < tileY + rectHeight){ //in bounds?
        if(pianoTiles[row][col] === 'black'){
          pianoTiles[row][col] = 'white';
        }
        else{
          pianoTiles[row][col] = 'red'; //WRONG TILE CLICKED
          scrollSpeed = 0;
        }
      }
    }
  }
  return false; // to avoid any zoom ins or pop ups when on mobile
}











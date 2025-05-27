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
let scrollSpeed = 4;


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
class Tile{
  constructor(col,row,color){
    this.col = col;
    this.row = row;
    this.color = color;
    this.y = row * rectHeight - (rectHeight * 2); //starts a little off screen 
  }

  update(){
    this.y += scrollSpeed;
  }

  draw(){
    let x = this.col * rectWidth
    fill(this.color);
    rect(x,this.y, rectWidth, rectHeight);
  }

  touchAction(){
    if(this.color === 'black'){ //correct tile
      this.color = 'white';
    }
    else if(this.color === 'white'){ //wrong tile
      this.color = 'red';
    }
  }
    

}


function createRow(){
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
    pianoTiles.push(createRow());
  }
}




function updateTiles(){
  //Keep a flow of new rows
  //Check if a full row has passed
  for(let row of pianoTiles){
    for(let tile of row){
      Tile.update();
    }
  }
}

function drawPiano(){
  //Render a grid of squares - 4x4
  //Use scrollY to scroll smoothly
  for (let y = 0; y < pianoTiles.length; y++){ 
    for (let x = 0; x < NUM_COLS; x++){
      let tileY = y * rectHeight + scrollY;
      fill(pianoTiles[y][x]); 
      rect(x*rectWidth, tileY - rectHeight, rectWidth, rectHeight);
    }
  }
  scrollY += scrollSpeed;
}





// ------- Touch -----------

function touchStarted(){
  for (let row = 0; row < pianoTiles.length; row++){}
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













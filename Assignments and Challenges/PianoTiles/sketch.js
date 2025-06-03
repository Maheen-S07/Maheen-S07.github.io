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

let gameState = "menu";


function setup() {
  createCanvas(windowWidth, windowHeight);
  setUpSizes();
  randomStart();
}

function draw() {
  background(220);
  drawPiano();
  updateTiles();
  showMenu();
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
      rect( x* rectWidth, tileY - rectHeight, rectWidth, rectHeight);
    }
  }
  scrollY += scrollSpeed; //scrolling
}

function showMenu(){
  if(gameState === "menu"){ 
    fill(255,255,255);
    rect(0,0,width,height);
    drawMenu();
  }
}

function drawMenu(){
  textAlign(CENTER);
  textSize(100);
  textFont('Verdana');
  strokeWeight(2);
  fill(112, 28, 79);
  text("Tone Tap", width/2, height/3);

  fill(255,255,255);
  rect(width/2 - 150, height/2, 300,50);

  textSize(35);
  strokeWeight(1);
  fill(112, 28, 79);
  text("CHOOSE SONG", width/2, height/2 + 35);

  circle(width/4, height * 0.70, 40);
  circle(width/4, height * 0.85, 40);

  text("SONG 1", width/2, height *0.71);
  text("SONG 2", width/2, height*0.86);

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











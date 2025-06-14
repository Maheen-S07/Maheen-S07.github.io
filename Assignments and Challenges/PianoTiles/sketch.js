// Piano Tiles- Capstone Project
// Maheen Shahid
// May 8, 2025

// GLOBAL VARIABLES
let NUM_ROWS = 4
let NUM_COLS = 4
let rectWidth;
let rectHeight;
let pianoTiles = [];
let scrollY = 0;
let scrollSpeed = 4;
let reason;
let score = 0;
let musicSpiral;

//Starting game
let countdownTime = 3;
let countdownStart;
let gameState = "menu";


function setup() {
  createCanvas(windowWidth, windowHeight);
  setUpSizes();
  randomStart();
}

function draw() {
  background(220);
  gameStates();
}

// ----------- Display and Functionality of Game --------------
function preload(){
  musicSpiral = loadImage("Assets/Spiral.png.png");
}

function gameStates(){
  //Handle what will be shown depending on
  //what state we are i
  if(gameState === "menu"){
    showMenu();
  }
  else if(gameState === "countdown"){
    drawPiano(true); //Show tiles but not moving
    showCountdown();
  }
  else if (gameState === "game"){
    drawPiano(false);
    updateTiles();
  }
  else if(gameState === "restartGame"){
    restartGame();
  }
}

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
  score = 0;
  let totalRows = NUM_ROWS + 2;
  let blankRows = 3; //first 3 rows all white

  for(let i = 0; i < totalRows; i ++){
   if(i >= totalRows - blankRows){
    //push 3 white rows for just the start of the game
    let whiteRows = [];
    for(let c = 0; c < NUM_COLS; c++){
      whiteRows.push('white');
    }
    pianoTiles.push(whiteRows);
   }
   else{
    pianoTiles.push(randomRow()); //normal rows
   }
  }
}
function updateTiles(){
  //keep the tiles going
  //Does not let them stack
  //Check if any black tiles have gone off screen without being tapped
  if(scrollY >= rectHeight){
    scrollY -= rectHeight;
  
  //the tile off screen
  let lastRow = pianoTiles[pianoTiles.length -1];
  for(let col = 0; col < NUM_COLS; col++){
    if(lastRow[col] === 'black'){
      //user forgot a black tile
      lastRow[col] = 'red';
      scrollSpeed = 0; //pause game
      gameState = "restartGame";
      reason = "missed a tile!"
      return;
   }
  }
  pianoTiles.pop(); // remove row
  pianoTiles.unshift(randomRow()); //make a new row
  }
}

function drawPiano(frozen = false){
  //render the tiles on the screen
  for(let y = 0; y < pianoTiles.length; y++){
    for(let x = 0; x < NUM_COLS; x++){
      let tileY = y* rectHeight + scrollY;
      stroke(0);
      strokeWeight(2);
      fill(pianoTiles[y][x]);
      rect( x* rectWidth, tileY - rectHeight, rectWidth, rectHeight);
    }
  }
  if(frozen === false){
    scrollY += scrollSpeed; //scrolling
    fill(0);
    textSize(30);
    textAlign(LEFT, TOP);
    text("Score: " + score, 10,10);
  }
}

function showMenu(){
  //draw the menu when the time is right
  //white out background
  if(gameState === "menu"){
    fill(255,255,255);
    rect(0,0,width,height);
    drawMenu();
  }
}

function drawMenu(){
    //Draws Main Menu...
  //Title and Start button
  background(255);

  //Draw the spiral
  imageMode(CENTER);
  let imgScale = min(width/musicSpiral.width, height/musicSpiral.height)*0.8;
  push();
  translate(width/2, height / 2);
  scale(imgScale);
  image(musicSpiral,0,0);
  pop();


  //Draw title
  textAlign(CENTER);
  textSize(100);
  textFont('Georgia');
  strokeWeight(2);
  fill(145, 112, 197);
  text("Tone", width/2, height/3 - 60);
  text("TAP", width/2, height/3 + 30);

  //Draw Start Button
  fill(255,255,255,180);
  stroke(145,112,197);
  strokeWeight(2);
  rect(width/2 - 150, height/2 + 100, 300,60, 20);

  noStroke();
  textSize(35);
  fill(145, 112, 197);
  text("START", width/2, height/2 + 140);
}

function showCountdown(){
  //Countdown from 3 after the start button is clicked
  //gives user time to prepare
  // 3-2-1.. GO!
  let passedTime = millis() - countdownStart;
  let secondsLeft = countdownTime - floor(passedTime/1000);
  let displayText;

  textAlign(CENTER);
  textSize(100);
  fill(0);
  if(secondsLeft > 0){
    displayText = secondsLeft;
    fill(173, 54, 54);
    text(displayText, width/2, height/2);
  }
  else if(passedTime < (countdownTime + 1) * 1000){ //only show "go" for one second
    displayText = "GO!";
    fill(50, 168, 82);
    text(displayText, width/2, height/2);
  }
  else{
    gameState = "game"; //start the game once go disappears
  }
}

function restartGame(){
  //User did something incorrect
  //restart menu
  //say the reason why they lost

  //GAME OVER
  textAlign(CENTER, CENTER);
  textSize(80);
  fill(255,0,70);
  text("GAME OVER", width/2, height/3);

  //Reason and score
  textSize(32);
  fill(255);
  text("Uh Oh! You " + reason, width/2, height/2 - 20);
  text("Score: " + score, width/2, height *0.54 + 30);

  //Restart Button
  fill(255,50,100,200);
  stroke(255);
  strokeWeight(2);
  rect(width/2 - 125, height *0.7, 250, 60, 20); //glowing pink

  noStroke();
  fill(0);
  textSize(30);
  text("RESTART", width/2, height * 0.7 + 30);
}

// -------------- Touch Functions --------------

function touchStarted(){
  //Are we clicking the start button?
  if(gameState === "menu" && mouseX > width/2 - 150 && mouseX < width/2+ 150 && mouseY > height/2 +100 && mouseY < height/2 + 160){
    gameState = "countdown";
    countdownStart = millis(); //start countdown timer
    return false;
  }

  //Are we clicking the restart button?
  if(gameState === "restartGame"){
    if(mouseX > width/2 - 125 && mouseX < width/2 +125 && mouseY > height *0.7 && mouseY < height * 0.7 + 60){
      pianoTiles = [];
      randomStart();
      scrollSpeed = 4;
      gameState = "menu";
    }
  }
  //detects what tile was clicked
  //what colour is it?
  for(let row = 0; row < pianoTiles.length; row++){
    for(let col = 0; col < NUM_COLS; col++){
      let tileX = col* rectWidth;
      let tileY = row * rectHeight + scrollY - rectHeight;
      if( gameState === "game" && mouseX > tileX && mouseX < tileX + rectWidth && mouseY > tileY && mouseY < tileY + rectHeight){ //in bounds?
        if(pianoTiles[row][col] === 'black'){
          pianoTiles[row][col] = 'white';
          score++;
        }
        else{
          pianoTiles[row][col] = 'red'; //WRONG TILE CLICKED
          scrollSpeed = 0;
          gameState = "restartGame";
          reason = "tapped the wrong tile!"
        }
      }
    }
  }
  return false; // to avoid any zoom ins or pop ups when on mobile
}






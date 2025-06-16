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
let scrollSpeed = 5.5;
let reason;
let score = 0;
let musicCD;
let cdAngle = 0;
let lobbyPlaying = false;
let winnerTimer = 0;
let winner;
let start;

//Starting game
let countdownTime = 3;
let countdownStart;
let gameState = "menu";

//Music Variables
let noteSounds = {};
let buzzSound;
let lobbySong;
let currentNote;
let noteMelody = [ //ODE TO JOY
  "E4", "E4", "F4", "G4", "G4", "F4", "E4", "D4",
  "C4", "C4", "D4", "E4", "E4", "D4", "D4", null,

  "E4", "E4", "F4", "G4", "G4", "F4", "E4", "D4",
  "C4", "C4", "D4", "E4", "D4", "C4", "C4", null,

  "D4", "D4", "E4", "C4", "D4", "E4", "F4", "E4", "C4", "D4",
  "E4", "F4", "E4", "D4", "C4", null,

  "E4", "E4", "F4", "G4", "G4", "F4", "E4", "D4",
  "C4", "C4", "D4", "E4", "D4", "C4", "C4"
    ,"E4", "E4", "F4", "G4", "G4", "F4", "E4", "D4",
  "C4", "C4", "D4", "E4", "E4", "D4", "D4", null,

  "E4", "E4", "F4", "G4", "G4", "F4", "E4", "D4",
  "C4", "C4", "D4", "E4", "D4", "C4", "C4", null,

  "D4", "D4", "E4", "C4", "D4", "E4", "F4", "E4", "C4", "D4",
  "E4", "F4", "E4", "D4", "C4", null,

  "E4", "E4", "F4", "G4", "G4", "F4", "E4", "D4",
  "C4", "C4", "D4", "E4", "D4", "C4", "C4"
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  setUpSizes();
  randomStart();
  currentNote = 0;
}

function draw() {
  background(220);
  gameStates();
}

// ----------- Display and Functionality of Game --------------
function preload(){
  //Piano notes
  noteSounds["C4"] = loadSound("assets/C4.mp3");
  noteSounds["D4"] = loadSound("assets/D4.mp3");
  noteSounds["E4"] = loadSound("assets/E4.mp3");
  noteSounds["F4"] = loadSound("assets/F4.mp3");
  noteSounds["G4"] = loadSound("assets/G4.mp3");

  //buzzer
  buzzSound = loadSound("assets/buzzer.mp3");

  //Lobby Music
  lobbySong = loadSound("assets/lobbyMusic.mp3");

  //Start
  start = loadSound("assets/StartButton.wav");

  //Winner
  winner = loadSound("assets/Winner.wav");

  //CD Image
  musicCD = loadImage("assets/CDPlayer.png");
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
  else if(gameState === "win"){
    drawPiano(false);
    showWin();
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
  if(gameState === "win"){
    for(let row = 0; row < pianoTiles.length; row++){
      for(let col = 0; col < NUM_COLS; col++){
        if(pianoTiles[row][col] === "black"){
          pianoTiles[row][col] = "white";  //no black tiles left
        }
      }
    }
  }
  if(scrollY >= rectHeight){
    scrollY -= rectHeight;
  
  if(scrollSpeed < 12){ //max speed
    scrollSpeed += 0.05; //increase speed slightly overtime
  }

  //the tile off screen
  let lastRow = pianoTiles[pianoTiles.length -1];
  for(let col = 0; col < NUM_COLS; col++){
    if(lastRow[col] === 'black'){
      //user forgot a black tile
      lastRow[col] = 'red';
      scrollSpeed = 0; //pause game
      buzzSound.play();
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
      strokeWeight(1);
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
    if(lobbyPlaying === false){
      lobbySong.loop();
      lobbyPlaying = true;
    }
    fill(255,255,255);
    rect(0,0,width,height);
    drawMenu();
  }
}

function drawMenu(){
  //Draws Main Menu...
  //Title and Start button
  noStroke();
  for(let y =0; y < height; y+= 10){
   let blue = 230 + y * 0.1; //230 -> 255
   let red = 170 + y * 0.1;
   let green = 200 - y *0.1;

   fill(red, green.blue);
   rect(0,y,width,10);
  }

  //Draw the CD rotating
  let imgScale = 0.25;
  imageMode(CENTER);
  push();
  translate(width/2, height/3 - 100);
  rotate(radians(cdAngle));
  scale(imgScale);
  image(musicCD,0,0);
  pop();
  cdAngle += 0.5;


  //Draw title
  textAlign(CENTER);
  textSize(100);
  textFont('Georgia');
  strokeWeight(2);
  fill(145, 112, 197);
  text("Tone", width/2, height/3 + 60);
  text("TAP", width/2, height/3 + 170);

  //Draw Start Button
  fill(255,255,255,180);
  stroke(145,112,197);
  strokeWeight(2);
  rect(width/2 - 150, height/2 + 100, 300,60, 20);

  noStroke();
  textSize(height * 0.05);
  fill(145, 112, 197);
  text("START", width/2, height/2 + 138);

  textSize(min(width, height) * 0.025); //scale based on screen
  text("Song: Ode To Joy - Beethoven", width/2, height * 0.85);
  fill(0);
  textAlign(LEFT);
  textSize(15);
  text("Maheen Shahid", 3, height - 3);
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
  textSize(min(width,height) * 0.12); //based on size of screen
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

// WINNING FUNCTION

function showWin(){
  textAlign(CENTER);
  fill(50,168,82);
  textSize(min(width,height) * 0.12);
  text("YOU WIN!", width/2, height/3);

  textSize(32);
  fill(0);
  text("Score: " + score, width/2, height *0.54 + 30);

  if(!winner.isPlaying()){
    winner.play();
  }

  if(millis() - winnerTimer > 3000){ //3 seconds
    pianoTiles = [];  //reset everything
    randomStart();
    scrollSpeed = 5.5;
    gameState = "menu";
    currentNote = 0;
  }
}

// -------------- Touch Functions --------------

function touchStarted(){
  userStartAudio(); //ensures the sound plays

  //Are we clicking the start button?
  if(gameState === "menu" && 
    mouseX > width/2 - 150 && 
    mouseX < width/2+ 150 &&
     mouseY > height/2 +100 && 
     mouseY < height/2 + 160){
      if(lobbySong.isPlaying()){
        lobbySong.stop();
        lobbyPlaying = false;
      }
    start.play();
    gameState = "countdown";
    countdownStart = millis(); //start countdown timer
    return false;

  }

  //Are we clicking the restart button?
  if(gameState === "restartGame"){
    if(mouseX > width/2 - 125 && 
      mouseX < width/2 +125 &&
       mouseY > height *0.7 &&
        mouseY < height * 0.7 + 60){
      pianoTiles = [];
      randomStart();
      scrollSpeed = 4;
      gameState = "menu";
      currentNote = 0;
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

          //Play next note
          if(currentNote < noteMelody.length){
            let note = noteMelody[currentNote];
            if(note && noteSounds[note]){
              noteSounds[note].play();
            }
            currentNote++;
            //Did the user finish the song?
            if(currentNote >= noteMelody.length){
              gameState = "win";
              winnerTimer = millis();
              scrollSpeed = 3; 
            }
          }
        }
        else{
          pianoTiles[row][col] = 'red'; //WRONG TILE CLICKED
          scrollSpeed = 0;
          buzzSound.play();
          gameState = "restartGame";
          reason = "tapped the wrong tile!"
        }
      }
    }
  }
  return false; // to avoid any zoom ins or pop ups when on mobile
}






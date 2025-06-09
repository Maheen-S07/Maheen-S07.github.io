// Practice for Final Coding Challenge

// Classes and Objects
// Working with images/animations
// Keyboard and mouse interactions


// ----- Global Variables ------
let gorillaIdle = [];
let gorillaSwipe = [];
let spiralImages = [];

//GORILLA RELATED
//have an index variable for each setof pictures or motions
let idleIndex = 0;
let swipeIndex = 0;
let gorillaState = 0; //0 -> idle,  1 -> swipe ... a state varaible where the value stands for something
let gorillaX = 200;

//SPIRAL RELATED
let spiralObjects = [];


function preload(){  //fill arrays with gorilla and spiral images
  //Gorilla Images First   1-6
  for (let i = 1; i <= 6; i++) {
    gorillaIdle.push(loadImage("assets/Gorilla/idle" + i + ".png"));
    gorillaSwipe.push(loadImage("assets/Gorilla/swipe" + i + ".png"));
  }

  //Load Circle Next:   circle00.png  00-15
  for (let i = 0; i <= 15; i++) {
    if (i < 10) {
      spiralImages.push(loadImage("assets/Circle/circle0" + i + ".png"));
    }
    else {
      spiralImages.push(loadImage("assets/Circle/circle" + i + ".png"));
    }
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(0);
  //GORILLA CODE
  moveGorilla();
  drawGorilla();

  //SPIRAL CODE
  for(let i = 0; i < spiralObjects.length; i++){ //loop by index if needing to delete
    let s = spiralObjects[i];
    s.display();
    if(s.active === false){
      spiralObjects.splice(i,1);
    }
  }

  }

function mousePressed(){
  spiralObjects.push(new Spiral(mouseX, mouseY)); //if u wanted a single one do a variable like let new = new spiral etc
                                                  // if you want multiple then create an array above and push it
}

function moveGorilla(){
  if(keyIsPressed && key === 'm'){
    if(mouseX > gorillaX){
      gorillaX += 5;
    }
    else if(mouseX < gorillaX){
      gorillaX -= 5;
    }
    //x : 200       m: 500
  }
}

function keyPressed(){
  //change the state of the gorilla to do the other motion 
  if(key === " "){
    if(gorillaState === 0){
      gorillaState = 1;
    }
    else{
      gorillaState = 0;  
    }
  }
}

function drawGorilla(){
  //render a gorilla at it's position, choosing the correct image for animation playback
  if(gorillaState === 0){//IDLE STATE (0,1,2,3,4,5) because 6 images
    image(gorillaIdle[idleIndex], gorillaX, height/2); //draw the picture every frame so write it before the if statement
    if(frameCount % 10 === 0){
      idleIndex++;
      if(idleIndex > 5){
        idleIndex = 0;
    } 
  }
  }
  else if(gorillaState === 1){ //SWIPE STATE
    image(gorillaSwipe[swipeIndex], gorillaX, height/2);
    if(frameCount % 10 === 0){
      swipeIndex++;
      if(swipeIndex > 5){
        swipeIndex = 0;
      }
    }
  }
}

class Spiral{
  constructor(x,y){ //runs once, each time an objectis made
    this.x = x;
    this.y = y;
    this.currentFrame = 0;
    this.active = true;   //used to makr for deletion 
  }

  //class methhods
  display(){ //0-15 pictures/frames
    if(this.currentFrame > 15){
      this.active = false;
    }
    else{
      image(spiralImages[this.currentFrame], this.x, this.y);
      if(frameCount % 3 === 0){
        this.currentFrame++; 
      }
    }
  }

}
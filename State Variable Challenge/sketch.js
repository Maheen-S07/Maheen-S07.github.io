// State Variable Challenge
// Maheen and Mason
// Feb 27, 2025

let direction = "right";
let x,y;

function setup() {
  createCanvas(1000, 1000);
  x = 0;
  y = 0;
}

function draw() {
  background(220);
  movingBox();

}

function movingBox(){
  fill(0,0,0);
  rect(x,y,50,50);
  move();


}

function move(){
  if (direction === "right"){
    x+=5;
    if(x>width-50){
      direction="down";
    }
  }
  else if(direction === "down"){
    y+=5;
    if(y>height-50){
      direction="left";
    }
  }
  else if(direction === "left"){
    x-=5;
    if(x<0){
      direction="up";
    }
  }
}


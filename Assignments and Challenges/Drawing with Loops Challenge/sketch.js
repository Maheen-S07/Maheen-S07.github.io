// Drawing with loops challenge
// Maheen Shahid
// Feb 24, 2025



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  topRow();
  rightRow();
  bottomRow();
  leftRow();
}

function topRow(){
  let d = 70;
  let y = 0;
  let xStart = 0;
  let xEnd = width;

  for(let x = xStart; x <= xEnd; x+= d){
    circle(x, y, 30);
  }
}

function rightRow(){
  let d = 70;
  let x = width;
  let yStart = 0;
  let yEnd = height;

  for(let y = yStart; y <= yEnd; y+= d){
    circle(x, y, 30);
  }
}

function bottomRow(){
  let d = 70;
  let y = height;
  let xStart = 0;
  let xEnd = width;

  for(let x = xStart; x <= xEnd; x+= d){
    circle(x, y, 30);
  }
}

function leftRow(){
  let d = 70;
  let x = 0;
  let yStart = 0;
  let yEnd = height;

  for(let y = yStart; y <= yEnd; y+= d){
    circle(x, y, 30);
  }
}


// Drawing with nested loops
// Maheen Shahid
// March 7, 2025

let gridSpacing = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  loopReview();
}

function draw() {
  background(220);
  renderGrid();
}

function roundedDist(x1, y1, x2, y2){
  // take two coordinate points and return the distance between, but rounded
  //pythagorean theorm
  let a = abs(x1 -x2);
  let b = abs(y1 - y2);
  let c = sqrt(sq(a)+sq(b));  // sqrt is square root and sq is square
  return round(c);

}

function renderGrid(){
  // use nested loop to draw objects in a grid arrangement
  for(let x = 0; x < width; x += gridSpacing){
    for(let y = 0; y < height; y += gridSpacing){
      circle(x,y,gridSpacing);
      let d = roundedDist(x,y, mouseX,mouseY);
      // set the fill value based on the proximity to mouse
      let alpha = map(d,0,150,255,0);
      if(d < 150){
        fill(50,100,150, alpha); // alpha is transparency of something
        noStroke();
      }
      else{
        fill(255);
      }
      textAlign(CENTER,CENTER);
      text(d,x,y);
    }
  }
}


function loopReview(){
  // quickly recap single and nested loops
  for(let x = 0; x<=40; x = x + 20){
    for(let y= 0; y <= 40; y += 20){

    }
  }
}

// Create A Fractal
// Maheen Shahid
// April 17, 2025


function setup() {
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(220);
}

function drawBox(size){
  if(size > 3){

  }
}

function stringRecursion(str, c) {
  if (c === 0) {
    return str;
  }
  else if (str.slice(0,1) === "c") {
    return stringRecursion(str.slice(1) + "c", c - 1);
  }
  else if (str.slice(0,1) === "o") {
    return stringRecursion(str.slice(1) + "o", c - 2);
  }
  else {
    return stringRecursion(str.slice(1) + "n", c - 1);
  }
}

console.log(stringRecursion("cocoon", 9));

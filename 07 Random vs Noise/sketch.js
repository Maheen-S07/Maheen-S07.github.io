// Random vs Noise
// Maheen Shahid
// Feb 28, 2025

// A look at different ways to use unpredictability in our programs...

let mySeed;
let noiseStart = 5;
let noiseTime;
let noiseSpeed = 0.1;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  mySeed = random(1000);
  //frameRate(5);  slows it down
  //randomNumbers();

}

function draw() {
  noiseTime = noiseStart;
  randomSeed(mySeed);
  background(0);
  randomNumbers();
  noiseNumbers();
  noiseStart += noiseSpeed;
}

function noiseNumbers(){
  //display a line of several numbers
  //generated with noise() function 1-100
  let x = 100;
  while( x<=500){
    let randomNum = noise(noiseTime); //0-1 (normalized)
    randomNum = map(randomNum, 0,1,1,100); // 1-100
    randomNum = round(randomNum);

    fill(140,220,140);
    noStroke();
    circle(x,400,randomNum); // y === height*0.66
    fill(0);
    text(randomNum,x, 400);
    x+= 10;
    noiseTime += noiseSpeed;
  }
}

function randomNumbers(){
  //display a line of several numbers generated
  //with the random() functions.   1 - 100
  // - these should be uniformly distributed.
  let x = 100; 
  while(x <= 500){
    let randomNum = round(random(1,100));
    fill(230, 140, 140); 
    noStroke();
    circle(x,200, randomNum);
    fill(0);
    text(randomNum, x, 200);  // y === height/3 
    x += 50;
  }
}
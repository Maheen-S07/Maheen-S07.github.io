// Round Racers Challenge
// Maheen Shahid
// March 17, 2025

//Global Variables
let racerOne;
let racerTwo;
let racerThree;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  racerOne = new roundRacer(height/3, color(random(255), random(255), random(255)));
  racerTwo = new roundRacer(height/2, color(random(255), random(255), random(255)));
  racerThree = new roundRacer(height, color(random(255), random(255), random(255)));

}

function draw() {
  background(220);
  racerOne.move();
  racerTwo.move();
  racerThree.move();
  display();
}

class roundRacer{

  constructor(yPosition, color){
    this.xPosition = 0;
    this.yPosition = yPosition;
    this.xSpeed = floor(random(3,15));
    this.color = color;

  }


  display(){
    //drawing the roundRacers
    fill(color);
    circle(this.xPosition, yPosition, 20);
  }

  move(){
    this.xPosition += this.xSpeed;
    if(this.xPosition > width){
      this. xPosition = 0;  
    }
  }

  

}

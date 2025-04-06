// Cars Cars Cars!
// Maheen Shahid
// March 21, 2025

// Global Variables
let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // 20 Eastbound Cars
  for( let i = 0; i < 20; i ++){
    let x = random(width);
    let y = random(height/4 + 20, height/4 + 120); //Top half
    let newCar = new Vehicle(x, y, color(random(255), random(255), random(255)));
    newCar.xSpeed = abs(newCar.xSpeed); // always positive -> moving right
    eastbound.push(newCar);
  }

  // 20 Westbound Cars
  for( let i = 0; i < 20; i ++){
    let x = random(width);
    let y = random(height/4 + 180, height/4 + 280); //Bottom half
    let newCar = new Vehicle(x, y, color(random(255), random(255), random(255)));
    newCar.xSpeed = -abs(newCar.xSpeed); // always negative -> moving left
    westbound.push(newCar);
  }
}

function draw() {
  background(220);
  drawRoad();
  for(let car of eastbound){
    car.action();
  }

  for(let car of westbound){
    car.action();
  }
}

function drawRoad(){
  //draws background road
  fill(0,0,0);
  rect(0, height/4, width, 300);
  fill(235, 200, 73);
  for(let x = 0; x <= width; x += 25){
    rect(x, height/2, 15, 5);
  }
}

class Vehicle{
  constructor(x, y, color){
    this.x = x;
    this.y = y;
    this.type = int(random(2));
    this.color = color;
   
    // Determine which way the car moves
    let direction = random([1, -1]);
    this.xSpeed = direction * 5; //

  }

  display(){
    //render the cars on screen
    let x = this.x;
    let y = this.y;

    
    if(this.type === 0){
      // Car
      fill(this.color);
      rect(x, y, 50, 30);
      fill(158, 155, 142);
      //Tires
      rect(x + 2, y + 28, 15, 4);
      rect(x + 33, y + 28, 15, 4);
      rect(x + 2, y - 4, 15, 4);
      rect(x + 33, y - 4, 15, 4);
    }

    if(this.type === 1){
      //Truck
      fill(this.color);
      rect(x, y, 40, 25);
      rect(x + 40, y + 5, 15, 20);
      fill(92, 94, 93);
      circle(x + 10, y + 30, 10);
      circle(x + 50, y + 30, 10);

    }

  }

  move(){
    // Movement of the vehicles on screen
    this.x += this.xSpeed;

    // Wrap around the screen
    if(this.x > width){
      this.x = 0;
    }
    else if(this.x < 0){
      this.x = width;
    }
  }

  speedUp(){
  //Slightly speed up vehicles
    if (this.xSpeed > 0 && this.xSpeed < 15){ 
      this.xSpeed +=1; // Increase moving right
      }
    else if (this.xSpeed < 0 && this.xSpeed > -15){
      this.xSpeed -= 1; // Increase moving left
    }
}


  speedDown(){
  //Slightly slow vehicles down
    //Right moving cars
    if(this.xSpeed > 0){
      this.xSpeed -= 1; 
      if(this.xSpeed < 1){
        this.xSpeed = 1; //Minimum speed of 1
      }
    }
    //Left Moving Cars
    else if(this.xSpeed < 0){
      this.xSpeed += 1;
      if(this.xSpeed > -1){
        this.xSpeed = -1; //Minimum speed of -1
      }
    }
    }

   changeColor(){
  //Assign random colors to each car
    this.color = color(random(255), random(255), random(255));
   }
  

   action(){
    // Main function that calls all other functions
    //ALWAYS
    this.display();
    this.move();

    //1% chance
    if(random(100) < 1){
      this.speedUp();
    }
    if(random(100) < 1){
      this.speedDown();
    }
    if(random(100) < 1){
      this.changeColor();
    }
   }
  }







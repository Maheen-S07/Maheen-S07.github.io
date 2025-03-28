// Cars Cars Cars!
// Maheen Shahid
// March 21, 2025

// Global Variables
let vehicles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
}

function drawRoad(){
  //draws background road

  fill(0,0,0);
  rect(0, height/4, width, 500);
  fill(235, 200, 73);
  for(x = 0; x <= width; x += 25){
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
    if(this.type === 0){
      // Car
      fill(this.color);
      rect(this.x, this.y, 100, 60);
      fill(158, 155, 142);
      //Tires
      rect(this.x +=5, this.y += 55, 30, 8);
      rect(this.x += 65, this.y += 55, 30, 8);
      rect(this.x += 5, this.y -= 10, 30, 8);
      rect(this.x += 65, this.y -= 10, 30, 8);
    }

    if(this.type === 1){
      //Truck
      fill(this.color);
      rect(this.x, this. y, 80, 50);
      rect(this.x += 80, this.y += 10, 30, 40);
      fill(92, 94, 93);
      circle(this.x += 10, this.y += 50, 20);
      circle(this.y += 70, this.y += 50, 20);

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
    if(random(100) <1){ // 1% chance
      if (this.xSpeed > 0 && this.xSpeed < 15){ 
        this.xSpeed +=1; // Increase moving right
        }
      else if (this.xSpeed < 0 && this.xSpeed > -15){
        this.xSpeed -= 1; // Increase moving left
      }
  }

  }

  speedDown(){
    //Slightly slow vehicles down
    if(random(100) <1){ // 1% chance
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
   }

   changeColor(){
    //Assign random colors to each car
    if(random(100) < 1){ //1% chance
      this.color = color(random(255), random(255), random(255));
   }
   }

   action(){
    // Main function that calls all other functions
    this.display();
    this.move();
    this.speedUp();
    this.speedDown();
    this.changeColor();
   }
  }





//display()     renders the vehicle (based on its type property)

// move()    updates the x position based on the xSpeed property. If the vehicle exits the side of the Canvas, wrap around to the opposite side.

// speedUp()    increase xSpeed slightly (up to a max of 15 or -15, depending on direction)

// speedDown()   decrease xSpeed slightly (make sure to not slow down past 0. Vehicles should not be able to change direction)

// changeColor()    give the vehicle a new primary color

// action()   this will be main function for a Vehicle, which will call all of the other functions with the following frequency:

// move()                      every frame
// speedUp()              1% chance to call each frame
// speedDown()       1% chance to call each frame
// changeColor()      1% chance to call each frame
// display()                    every frame
// Before progressing further, I would highly recommend creating one Vehicle type variable and play around with calling .action() on it in draw() to ensure the functionality above is working correctly.
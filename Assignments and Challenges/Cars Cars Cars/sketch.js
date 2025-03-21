// Cars Cars Cars!
// Maheen Shahid
// March 21, 2025



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
    this.type = int(random(0,1));
    this.color = color;
    this.direction = int(random(0,1));
    this.xSpeed = 5;

  }

  display(){
    //render the cars on screen
    if(this.type === 0){
      // Car
      fill(this.color);
      rect(this.x, this.y, 150, 100);
      fill(158, 155, 142);
      //Tires
      rect(this.x, this.y -= 10, 40, 10);
      rect(this.x += 110, this.y -= 10, 40, 10);
      rect(this.x, this.y += 100, 40, 10);
      rect(this.x += 110, this.y += 100, 40, 10);
    }

    if(this.type === 1){
      //Truck
      fill(this.color);
    }

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
//Child Class #1 - Circle
class CircleObj extends AnimatedObject{
    constructor(x,y){
      super(x,y);  //calls parent class's constructor 
      this.size = random(20,40);
    }
    //no mention to move()... it will be same as parents move() function
    display(){ //function override; copies overtop of parent version
      if(dist(this.x, this.y, mouseX, mouseY) < this.size/2){
        fill(255,0,0);
      }
      else{
        fill(255);
      }
      circle(this.x, this.y , this.size);
    }
  }
  
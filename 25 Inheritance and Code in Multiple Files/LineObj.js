// Child Class #2 -  Line
class LineObj extends AnimatedObject{
    constructor(){
      super(random(width), random(height));
    }
  
    move(){ //combo override but also keep some of the parent code
      super.move();  //begins by running parent class move()
      this.x -= 5;
      if(this.x < 0){
        this.x= width;
      }
    }
  
    display(){ //full override
      if(mouseIsPressed){
        strokeWeight(12);
    }
    else{
      strokeWeight(2);
    }
  
    line(this.x, this.y, this.x + 15, this.y);
    }
  }
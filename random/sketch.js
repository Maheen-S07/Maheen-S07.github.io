// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}


function maxTriple(nums) {
  let firstNum = nums[0];
  let middleNum= nums[nums%2];
  let lastNum = nums[nums.length];
  let result;
  
  if(firstNum > middleNum && firstNum > lastNum){
     result = firstNum;
  }
    if(middleNum > firstNum && middleNum > lastNum){
     result = middleNum;
  }
    if(lastNum > middleNum && lastNum > firstNum){
     result = lastNum;
  }
  
  return result;
}
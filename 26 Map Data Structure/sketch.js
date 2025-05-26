// Map and Text Files
// Maheen Shahid
// May 26, 2025

//JS Split and spread syntax

let textFile;
let img;
let rows, cols, grid, colorMap;

function preload(){
  textFile = loadStrings("assets/info.txt");
  img = loadStrings("assets/colorImage.txt")

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //processText();

  //determine the # of rows/cols
  rows = img.length;
  cols = img[0].length;

  //create and populate the 2D array (GRID)
  grid = [];
  for(let i = 0; i < rows; i ++){
    grid.push([...img[i]]);
  }


  //create a map of colours
  colorMap = new Map([
    ["b" , "black"],
    ["w", "white"],
    ["r", "sienna"],
    ["l", "peru"],
    ["p", color(150,150,255)]
  ]);

  renderGrid();
}

function renderGrid(){
  //calculate recctangle sizes
  let cellWidth = width/cols;
  let cellHeight = height/rows;

  //visit each spot in 2D array
  for(let x = 0; x < cols; x++){
    for(let y = 0; y< rows; y++){
      let currentKey = grid[y][x];
      fill(colorMap.get(currentKey));
      noStroke();
      rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);

    }
  }
}

function draw() {
  //background(220);
}

function processText(){  //split() and spread syntax
  print("SPLIT INTO WORDS");
  let splitWords = textFile[0].split(" "); //in the brackets tells it where to split
  print(splitWords);

  print("SPLIT INTO CHARACTERS");
  let splitChars =  textFile[1].split(""); // will seperate every single letter
  print(splitChars);

  print("SPREAD INTO CHARACTERS");
  let spreadChars = [...textFile[2]];
  print(spreadChars);

}

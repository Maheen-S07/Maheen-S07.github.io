let value = 0;

function setup() {
  createCanvas(100, 100);

  describe(
    'A gray square with a black square at its center. The inner square switches color between black and white each time the user stops touching the screen.'
  );
}

function draw() {
  background(200);

  // Style the square.
  fill(value);

  // Draw the square.
  square(25, 25, 50);
}

// Toggle colors when a touch ends.
function touchEnded() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}


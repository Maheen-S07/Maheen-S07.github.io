//Refactoring Practice
//Maheen Shahid
//March 11, 2025

let a, b, c, d;


function setup() {
	createCanvas(windowWidth, windowHeight);
	a = 200; b = 300; c = random(3, 8); d = random(3, 8);
}
function draw() {
	// draws rectangle at random (x,y) position
	m();
	background(80, 80, 80);
	rect(a, b, 250, 75);
}
function m() {
	a += c; b += d;
	if (b >= height - 75 || b <= 0) { 
		d = d * -1; 
	}

	if (a >= width - 250 || a <= 0) {
		 c = c * -1; 
	}
}
function setup() {
  createCanvas(890, 784);
  background(239, 243, 238);
}

function draw() {
  fill(238, 36, 0);
  rect(0, 0, 399, 391);
  
  // Draw line
  // x1, y1, x2, y2
  line(0, 391, 890, 391);
   // Style the line.
  stroke('black');
  strokeWeight(10);

  line(0, 391, 890, 392);

  // Draw line
  // x1, y1, x2, y2
  line(0, 572, 890, 572);
   // Style the line.
  stroke('black');
  strokeWeight(10);

  line(0, 572, 890, 572);
  
  // Draw line
  // x1, y1, x2, y2
  line(399, 0, 399, 890);
   // Style the line.
  stroke('black');
  strokeWeight(10);
  
  line(399, 0, 399, 890);

  fill(253, 213, 0);
  rect(0, 572, 74, 399);

  // Draw line
  // x1, y1, x2, y2
  line(620, 572, 620, 784);
  // Style the line.
  stroke('black');
  strokeWeight(10);

  line(620, 572, 620, 784);

  // Draw line
  // x1, y1, x2, y2
  line(399, 765, 620, 765);
  // Style the line.
  stroke('black');
  strokeWeight(10);

  line(399, 765, 620, 765);

  fill(44, 57, 134);
  noStroke();
  rect(404, 577, 211, 183);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let x = 33;
let y = 33;
let rectWidth = 33;
let rectHeight = 33;
let vectorx = 3;
let vectory = 3;
let c;

function setup() {
  c = createCanvas(400, 400);
  noStroke();
  colorMode(RGB, 400);
  for (let i = 0; i < 400; i++) {
    for (let j = 0; j < 400; j++) {
      stroke(i, j, 10);
      strokeWeight(3);
      point(i, j);
    }
  }
}

function draw() {
  fill(0, 0, 0);
  rect(x, y, rectWidth, rectHeight);

  x += vectorx;
  y += vectory;

  if (x > width || y > height) {
    vectorx = -vectorx + 1;
    vectory = -vectory - 1;
  }

  if (x < 0 || y < 0) {
    vectorx = -vectorx - 1;
    vectory = -vectory + 1;
  }
  
  function mouseClicked() {
    saveCanvas(c, "myCanvas", "jpg");
  }
}

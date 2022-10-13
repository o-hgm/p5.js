let color_out, color_med, color_inf;

function setup() {
  canvas = createCanvas(800, 800);
  canvas.parent('simple-sketch-holder');
  
}
let x = 0;
let y = 0;

let padding = 10;
let size_max = 80;

function draw() {
  size_max = 10;
  padding = 0.15 * size_max;
  size_med = random(0.2*size_max, size_max - padding);
  size_small = random(0.5*size_med, size_med - padding);
  x = random(0, 400);
  y = random(0, 400);

  let pos_x = x + size_max/2;
  let pos_y = y + size_max/2;

  color_out = color(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
  color_med = color(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
  color_inf = color(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
  
  noStroke();
  rectMode(CENTER);
  fill(color_out);
  square(x, y, size_max);
  fill(color_med);
  square(x, y, size_med);
  fill(color_inf);
  square(x, y, size_small);
}

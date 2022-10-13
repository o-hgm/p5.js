function setup() {
  canvas = createCanvas(800, 800);
  canvas.parent('simple-sketch-holder');
  background(255);
  frameRate(25);

}

function draw() {
  delay_x = 0; //PI/8;
  delay_y = 0; //PI/8;
  cicle_scope = 2*PI;
  draw_center_x = width/2;
  draw_center_y = height/2;
  //distance_to_center = 100;
  
  number_steps = 10; // random(10, 20);
  step_increment = random(0.1, 10);
  distance_to_center = random(5, 30) * 10;
  if(frameCount % 10 == 0) {
  r = random(0, 255) * 10; g = random(0, 25) * 10; b = random(0, 25) * 10; a = random(0, 25) * 10;
  fill(r, g, b, a);
    stroke(r,g,b,a);
  }
  for (ellipse_step = random(-1, 1); ellipse_step <= number_steps; ellipse_step += step_increment) {
  ellipse_x = draw_center_x + sin( delay_x + cicle_scope * (ellipse_step/number_steps)) * distance_to_center;
  ellipse_y = draw_center_y + cos( delay_y + cicle_scope * (ellipse_step/number_steps)) * distance_to_center;
  
  ellipse(ellipse_x, ellipse_y,15,15);
  }  
}
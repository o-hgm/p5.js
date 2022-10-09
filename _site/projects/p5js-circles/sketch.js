function setup() {
  canvas = createCanvas(800, 800);
  canvas.parent('simple-sketch-holder');
  background(255);
  frameRate(25);

}

function draw() {
  draw_center_x = width/2;
  draw_center_y = height/2;
  //distance_to_center = 100;
  
  frame_divisor = 20;
  number_steps = 20; // random(10, 20);
  step_increment = 0.5; // random(0.5, 5, 0.5);
  distance_to_center = random(20, 300);

  if (frameCount % frame_divisor == 0) {
    r = random(0, 255); g = random(0, 255); b = random(0, 255); a = random(0, 255);
    fill(r, g, b, a);
    stroke(r,g,b,a);
  }
  for (ellipse_step = 0; ellipse_step <= number_steps; ellipse_step += step_increment) {
  ellipse_x = draw_center_x + sin( ellipse_step * (2*PI/number_steps)) * distance_to_center;
  ellipse_y = draw_center_y + cos( ellipse_step * (2*PI/number_steps)) * distance_to_center;
  
  ellipse(ellipse_x, ellipse_y,10,10);
  }  
}

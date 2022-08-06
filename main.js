function setup() {
  createCanvas(1200, 800);
}

i = 0;
R = 50;
function draw() {
  //background(220);
  colorMode(HSB, 100);
  fill(random(100),random(100), random(100));
  translate(width/2, height/2);
  r = 200;
  x = r*cos(radians(i));
  y = r*sin(radians(i));
  circle(x, y, R);
  i += 5;
  if (R>0){
    R -= 0.08;
  }
}
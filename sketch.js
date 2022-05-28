// Sin and Cosine - An illustration of their path

var orbitX = 400;
var orbitY = 400;
var orbitRadius = 200;
var angle = 0;
var speed = 0.02;

function setup() {
  createCanvas(800, 800);

}

function draw() {
  background(200);
  
  text("An illustration of Sin and Cos",20,50)
  
  fill(255);
  ellipse(400,400,400)

  drawSineAxis()
  drawCosineAxis()
  stroke('#000000');

  var x = orbitX + orbitRadius * cos(angle);
  var y = orbitY + orbitRadius * sin(angle);
  
  //ellipse(orbitX, orbitY, 50, 50);
  ellipse(x, y, 1, 1);
  angle -= speed;

  //triangle
  fill(255);

  line(400,400,x,y); //hypoteneuse
  line(x,y,x,400); //opposite
  line(400,400,x,400); //adjacent
  
  ellipse(150,y,100,100)
  ellipse(x,150,100,100)

  
  // Show Sin, Cos, Tan
  fill(0);
  text("Sin: "+ 
  round(sin(-angle),2),120,y);
  
  text("Cos: "+ 
  round(cos(-angle),2),x-30,150);
}


function drawSineAxis() {
  stroke('#ff812f');
  fill('#ff812f');
  strokeWeight(2);

  line(400, 150, 400, 650);
  triangle(395, 150, 405, 150, 400, 140);

  strokeWeight(1);
  text("Sine", 410, 160)
}

function drawCosineAxis() {
  stroke('#ff812f');
  fill('#ff812f');
  strokeWeight(2);

  line(150, 400, 650, 400);
  triangle(650, 395, 650, 405, 660, 400);

  strokeWeight(1);
  text("Cosine", 610,420)
}

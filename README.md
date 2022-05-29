# sin_cos_orbit
[Simple Illustration](https://benjaminfox1.github.io/sin_cos_orbit/) of Sin and Cos (credit Pythagoras et al)

Thanks to Amed Kino for his addition.

<details>
  <p>
```JavaScript

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

```
  </p>
</details>

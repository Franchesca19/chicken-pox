var bubbles = [];


function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 50; i++) {
    bubbles[i] = {
      x: random(4, width),
      y: random(15, height),
      display: function() {
        stroke(200);
        fill(120);
        ellipse(this.x, this.y, 52, 32);
      },
      move: function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
      }
    }
  }

}

function draw() {
  background(220);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}
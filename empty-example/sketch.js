var BSlider;

function setup() {
  //create a canvas
  canvas=createCanvas(1250, 500);
  //attach it to the sketch-holder on the index.html page
  canvas.parent('sketch-holder');


  BSliderLabel = createP("Orbital Radius of Earth");
  BSliderLabel.position(50,0);
  BSlider = createSlider(0, 350, 35, 0);
  BSlider.position(50,40);
}

function draw() {
  // draw a gray background
  background(50, 80, 100)
  B = BSlider.value();

  push();
  fill(50,80,100);
  stroke(255)
  ellipse(width/4, height/2, B, B);
  pop();

  push();
  fill("orange");
  push()
  fill("white");
  textSize(15);
  text("Sun", width/4 - 13, (height/2) + 30);
  pop();
  ellipse(width/4, height/2, 30, 30);
  pop();


  fill("green");
  ellipse(width/4, height/2 + B/2, 15, 15);
  push()
  fill("white");
  textSize(15);
  text("Earth in December", width/4 - 13 - 40, height/2 + B/2 + 25);
  pop();
  ellipse(width/4, height/2 - B/2, 15, 15);
  push()
  fill("white");
  textSize(15);
  text("Earth in June", width/4 - 13 - 25, height/2 - B/2 - 15);
  pop();

  push();
  fill("yellow");
  translate(width*0.66, height*0.5);
  //rotate(frameCount / -100.0);
  star(0, 0, 15, 35, 5);
  pop();

  push();
  fill("yellow");
  translate(width*0.9, height*0.2);
  //rotate(frameCount / -100.0);
  star1(0, 0, 7.5, 17.5, 5);
  pop();

  push();
  fill("yellow");
  translate(width*0.9, height*0.4);
  //rotate(frameCount / -100.0);
  star2(0, 0, 7.5, 17.5, 5);
  pop();

  push();
  fill("yellow");
  translate(width*0.9, height*0.6);
  //rotate(frameCount / -100.0);
  star3(0, 0, 7.5, 17.5, 5);
  pop();

  push();
  fill("yellow");
  translate(width*0.9, height*0.8);
  //rotate(frameCount / -100.0);
  star4(0, 0, 7.5, 17.5, 5);
  pop();

  push();
  stroke("orange");
  line(width/4, height/2 + B/2, 0.95*width, (-B/(0.7*width))*0.95*width + height/2 + B);
  pop();

  push();
  stroke("red");
  line(width/4, height/2 - B/2, 0.95*width, (B/(0.7*width))*0.95*width + height/2 - B);
  //  line(width/4, height/2 - B/2, width*0.6, height*0.5);
  // 0.5*height + (1200*B - 0.6*B*width)/(0.35*width)
  // (B/(0.7*width))*0.35*width - B
  pop();

}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function star1(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function star2(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function star3(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function star4(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

var hr, min, sec

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  

  stroke("grey");
  fill("white");
  circle(200, 250, 300);
  textSize(25);
  fill("black");
  text("Analog Clock", 100, 50);

  translate(200, 250);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  hrAngle = map(hr, 0, 12, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  secAngle = map(sec, 0, 60, 0, 360);

  push()
  stroke("blue");
  strokeWeight(7);
  rotate(secAngle);
  line(0, 0, 100, 0);
  pop()

  push()
  stroke("green");
  strokeWeight(7);
  rotate(minAngle);
  line(0, 0, 130, 0);
  pop()

  push()
  stroke("purple");
  strokeWeight(7);
  rotate(hrAngle);
  line(0, 0, 80, 0);
  pop()



  console.log(hr);
  //drawSprites();
}
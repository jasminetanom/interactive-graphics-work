/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



var pronouns = ["I", "YOU", "ALL BEINGS"];
var pronoun = pronouns[0];

var adjectives = ["HAPPY", "HEALTHY", "FULFILLED", "AT PEACE"];
var adjective = adjectives[0];

let fontsize = 32;

// variables for large centre flower
var rad = 200;
var xPos = 60+rad/2;
var yPos = -35;
var numLeafs = 13;

// variables for daisy grid
var img;
let gridX = 10;
let gridY = 10;
let grid = [];
let flowers = [];

// variables for https://p5js.org/examples/input-storing-input.html
var num = 60;
var mx = [];
var my = [];

// let inp;

function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position



  fill(248,242,229,200);
  textFont("Futura");
  text('MAY', x, height/2 - 40);
  text(pronoun, x, height/2 - 8);
  text('BE', x, height/2 + 22);
  text(adjective, x, height/2 + 53);

  fill(62,55,56, (255 * sin(frameCount*0.02)));
  textFont("Futura");
  text('MAY', x, height/2 - 40);
  text(pronoun, x, height/2 - 8);
  text('BE', x, height/2 + 22);
  text(adjective, x, height/2 + 53);
}

function preload() {
  img = loadImage("orange-daisy.png");
  leaf = loadImage("leaf.png");
  dog = loadImage("grace-dog-img.png")
}

function setup() {
  var cnv = createCanvas(600, 600);
  // var cnv = createCanvas(windowWidth, windowHeight);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(200,200,169);

  textSize(fontsize);



  // inp = createInput();
  // inp.position(height/2, width/2);
  // inp.input(myInputEvent);

  // make the grid
  for (let i = 0; i < gridX; i++) {
    let thisRow = [];
    for (let j = 0; j < gridY; j++) {
      thisRow.push(0);
    }
    grid.push(thisRow);
  }
  console.log(grid);

  // https://p5js.org/examples/input-storing-input.html
  for (var i = 0; i < num; i++) {
  mx.push(i);
  my.push(i);
}



}

function draw() {

  let rectSizeX = width / gridX;
  let rectSizeY = height / gridY;

  for (let i = 0; i < gridX; i++) {
    for (let j = 0; j < gridY; j++) {
      // stroke(255);

      //filling the grid
      rect(i * rectSizeX, j * rectSizeY,
        rectSizeX, rectSizeY);
      if (mouseX > i * rectSizeX &&
        mouseX < (i * rectSizeX) + rectSizeX &&
        mouseY > j * rectSizeY &&
        mouseY < (j * rectSizeY) + rectSizeY) {
        grid[i][j] = 255;
      }
      //grid[i][j]--;
      if(grid[i][j] === 255) {
        image(img, i*60,j*60,60,60);
      }
    }
  }

  // Cycle through the array, using a different entry on each frame.
  // Using modulo (%) like this is faster than moving all the values over.
  var which = frameCount % num;
  mx[which] = mouseX;
  my[which] = mouseY;

  for (var i = 0; i < num; i++) {
    // which+1 is the smallest (the oldest in the array)
    var index = (which+1 + i) % num;
    fill(184,242,248,120)
    ellipse(mx[index], my[index], i/2, i/2);
  }


  // draw large centre flower

  noStroke();
  for(var i=0;i<numLeafs;i++){
    push();
    fill(248,242,229,220);
    translate(width/2,height/2);
    rotate(radians(i*360/numLeafs));
    arc(xPos,yPos,rad,rad,radians(30),radians(180-30),CHORD);
    arc(xPos,yPos+rad/2,rad,rad,radians(180+30),radians(-30),CHORD);
    pop();
  }


  fill(243,232,163);
  ellipseMode(CENTER);  // Instead of setting ellipseMode to CORNERS
  noStroke();
  ellipse(width/2,height/2,300);

  fill(240,214,145);
  // ellipseMode(CENTER);  // Instead of setting ellipseMode to CORNERS
  // noStroke();
  ellipse(width/2,height/2,250);

  fill(229,162,109, 125);
  // ellipseMode(CENTER);  // Instead of setting ellipseMode to CORNERS
  // noStroke();
  ellipse(width/2,height/2,200);

  // Align the text in the center
  // and run drawWords() in the middle of the canvas
  textAlign(CENTER);
  drawWords(width * 0.5);

  push();
  fill(248,242,229);
  var triHappyA = triangle(20, 20, 20 + 50, 20, 20, 20 + 50);
  var triHealthyA = triangle(600-20-50, 20, 600-20, 20, 600-20, 20+50);
  var triFulfilledA = triangle(20, 600-20, 20, 600-20-50, 20+50, 600-20);
  var triAtPeaceA = triangle(600-20-50, 600-20, 600-20, 600-20, 600-20, 600-20-50);
  pop();

  push();
  fill(243,232,163);
  var triHappyB = triangle(20 + 50, 20 + 50, 20 + 50, 20, 20, 20 + 50);
  var triHealthyB = triangle(600-20-50, 20, 600-20-50, 20+50, 600-20, 20+50);
  var triFulfilledB = triangle(20, 600-20-50, 20 + 50, 600-20-50, 20+50, 600-20);
  var triAtPeaceB = triangle(600-20-50, 600-20, 600-20-50, 600-20-50, 600-20, 600-20-50);
  pop();

  cursor(ARROW);
  var d = dist(mouseX, mouseY, width/2,height/2);

  console.log(d);
  //check to see if the distance is less than the size of the circle
  if(d < 100){
    cursor(HAND);
    push();
    stroke(255);
    fill(62,55,56,20);
    ellipse(width/2,height/2,200);
    pop();
  }

  if(d < 125 && d > 100){
    cursor(HAND);

    // push();
    // stroke(255);
    // noFill();
    // ellipse(width/2,height/2,200);
    // pop();

    push();
    stroke(255);
    fill(62,55,56, 20);
    ellipse(width/2,height/2,250);
    pop();
  }

  if(d < 155 && d > 125){
    cursor(HAND);

    // push();
    // stroke(255);
    // noFill();
    // ellipse(width/2,height/2,250);
    // pop();

    push();
    stroke(255);
    fill(62,55,56, 20);
    ellipse(width/2,height/2,300);
    pop();


  }

  if (mouseX > 20 && mouseX < 20+50  && mouseY > 20 && mouseY < 20+50) {
    cursor(HAND);
    // noFill();
    push();
    stroke(255);
    fill(248,242,229, 125);
    rect(19, 19, 51, 51);
    pop();
  }

  if (mouseX > 600-20-50 && mouseX < 600-20  && mouseY > 20 && mouseY < 20+50) {
    cursor(HAND);

    push();
    stroke(255);
    fill(248,242,229, 125);
    rect(600-20-51, 19, 51, 51);
    pop();
  }

  if (mouseX > 20 && mouseX < 20+50  && mouseY > 600-20-50 && mouseY < 600-20) {
    cursor(HAND);

    push();
    stroke(255);
    fill(248,242,229, 125);
    rect(19, 600-20-51, 51, 51);
    pop();
  }

  if (mouseX > 600-20-50 && mouseX < 600-20  && mouseY > 600-20-50 && mouseY < 600-20) {
    cursor(HAND);

    push();
    stroke(255);
    fill(248,242,229, 125);
    rect(600-20-51, 600-20-51, 51, 51);
    pop();
  }


  if(mouseIsPressed){
    var d = dist(mouseX, mouseY, width/2,height/2);

    console.log(d);
    //check to see if the distance is less than the size of the circle
    if(d < 100){

      pronoun = pronouns[0];
    }

    if(d < 125 && d > 100){
      pronoun = pronouns[1];
    }

    if(d < 155 && d > 125){
      pronoun = pronouns[2];
    }

    if (mouseX > 20 && mouseX < 20+50  && mouseY > 20 && mouseY < 20+50) {
      adjective = adjectives[0];
    }

    if (mouseX > 600-20-50 && mouseX < 600-20  && mouseY > 20 && mouseY < 20+50) {
      adjective = adjectives[1];
    }

    if (mouseX > 20 && mouseX < 20+50  && mouseY > 600-20-50 && mouseY < 600-20) {
      adjective = adjectives[2];
    }

    if (mouseX > 600-20-50 && mouseX < 600-20  && mouseY > 600-20-50 && mouseY < 600-20) {
      adjective = adjectives[3];
    }
  }
  // } else {

  fill(200,200,169);


  // triangle(x1, y1, x2, y2, x3, y3);
  // triangle(x1, y1, x2, y2, x3, y3);
  // triangle(x1, y1, x2, y2, x3, y3);
  // triHappy.mousePressed(showHappy);



}

// function showHappy() {
//   image(dog, 100, 100, 100, 100);
// }

function windowResized() {
  // this function executes everytime the window size changes

  // set the sketch width and height to the 5 pixels less than
  // windowWidth and windowHeight. This gets rid of the scroll bars.
  // resizeCanvas(windowWidth, windowHeight);

  var cnv = createCanvas(600, 600);
  // var cnv = createCanvas(windowWidth, windowHeight);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(200,200,169);
}

// function myInputEvent() {
//   fill(0, 0, 0, 255 * sin(frameCount*0.015));
//   textFont("Futura");
//   text(this.value(), width * 0.5, height/2 - 36);
// }

// //check whenthe mouse is pressed
// function mouseClicked(){
//
//   //mousePressed is a built in p5 function that is run when the mouse is pressed
//
//   //get the distance between the mouse and the center of the circle
//   var d = dist(mouseX, mouseY, width/2,height/2);
//
//   console.log(d);
//   //check to see if the distance is less than the size of the circle
//   if(d < 200){
//     // //do what you want to do, here we
//     // //draw a random square
//     fill(55,255,55);
//     rect(random(windowWidth), random(windowHeight), 50, 50);
//     // fill(0);
//     // drawWords(width * 0.5, 2);
//   }
// }//end mousePressed

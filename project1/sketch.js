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

function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position

  fill(128 + sin(frameCount*0.02) * 128);
  textFont("Futura");
  text('YOU', x, 275);
  text('ARE', x, 305);
  text('BEAUTIFUL', x, 335);
}


let fontsize = 28;

// variables for large centre flower
var rad = 140;
var xPos = 60+rad/2;
var yPos = -35;
var numLeafs = 13;

// variables for daisy grid
var img;
let gridX = 10;
let gridY = 10;
let grid = [];
let flowers = [];

function preload() {
  img = loadImage("orange-daisy.png");
}

function setup() {
  var cnv = createCanvas(600, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(0);

  textSize(fontsize);

  // make the grid
  for (let i = 0; i < gridX; i++) {
    let thisRow = [];
    for (let j = 0; j < gridY; j++) {
      thisRow.push(0);
    }
    grid.push(thisRow);
  }
  console.log(grid);
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

  // draw large centre flower
  fill(248,242,229);
  noStroke();
  for(var i=0;i<numLeafs;i++){
    push();
    translate(width/2,height/2);
    rotate(radians(i*360/numLeafs));
    arc(xPos,yPos,rad,rad,radians(30),radians(180-30),CHORD);
    arc(xPos,yPos+rad/2,rad,rad,radians(180+30),radians(-30),CHORD);
    pop();
  }

  fill(240,214,145);
  ellipseMode(CENTER);  // Set ellipseMode to CORNERS
  noStroke();
  ellipse(width/2,height/2,190);

  // Align the text in the center
  // and run drawWords() in the middle of the canvas
  textAlign(CENTER);
  drawWords(width * 0.5);

  fill(200,200,169);
}

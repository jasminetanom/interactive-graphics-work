// var rad=140;
// var xPos=60+rad/2;
// //var yPos=-35;
// var yPos=-35;
// var numLeafs=11;
//
// function setup(){
//   createCanvas(800,800);
//   background(0);
// }
//
// function draw(){
//   fill(255, 0, 0);
//   rect(400, 400, 100, 100);
//   fill(0, 0, 255);
//   // stroke(127, 63, 120);
//   ellipse(100, 100, 30, 80);
//
//   fill(0, 255, 0);
//   // A triangle
//   triangle(300, 100, 320, 100, 310, 200);
//
//   // A design for a simple flower
//   fill(204, 101, 192, 127);
//   translate(580, 200);
//   noStroke();
//   for (let i = 0; i < 10; i ++) {
//     ellipse(0, 30, 20, 80);
//     rotate(PI/5);
//   }
//
//   fill(0,159,90);
//   for(var i=0;i<numLeafs;i++){
//     push();
//     translate(width/2,height/2);
//     rotate(radians(i*360/numLeafs));
//     arc(xPos,yPos,rad,rad,radians(30),radians(180-30),CHORD);
//    arc(xPos,yPos+rad/2,rad,rad,radians(180+30),radians(-30),CHORD);
//     pop();
//  	}
//
// 	fill(350,230,20);
// 	ellipseMode(CENTER);  // Set ellipseMode to CORNERS
// 	noStroke();
// 	ellipse(width/2,height/2,160);
//
// }

var rad=140;
var xPos=60+rad/2;
//var yPos=-35;
var yPos=-35;
var numLeafs=13;

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

var img;
let gridX = 10;
let gridY = 10;
let grid = [];
let flowers = [];

function preload() {
  img = loadImage("orange-daisy.png");
}

function setup() {
  createCanvas(600, 600);


  // background(200,200,169);
  //making the grid
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


  // background(220);
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
    // ellipseMode(CENTER);  // Set ellipseMode to CORNERS
    noStroke();
    ellipse(width/2,height/2,185);



// Align the text in the center
// and run drawWords() in the middle of the canvas
textAlign(CENTER);
drawWords(width * 0.5);

fill(200,200,169);

}

function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position

  fill(255);
  text('YOU ARE BEAUTIFUL', x, 300);
}

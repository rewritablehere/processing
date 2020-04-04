/*
 * @name Load and Display Image
 * @description Images can be loaded and displayed to the screen at their
 * actual size or any other size.
 * <p><em><span class="small"> To run this example locally, you will need an 
 * image file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">
 * local server</a>.</span></em></p>

 */
let player, playerleft, playerright, playerup, playerdown, x, y, prevx, prevy; // Declare variable 'img'.

var img = [];
var gx = [];
var gy = [];
let moveby = 32;
let adjx = 0, adjy = -13;
let groundx = 32, groundy = 32;
var groundtype = 0;

function setup() {
  createCanvas(1440,813);
  
  for (let i = 0; i < 30; i++) {
      if (groundtype = 0) {
      img[i] = loadImage('assets/ground1.png');
      groundtype = 1;
      } else {
      img[i] = loadImage('assets/ground2.png');
      groundtype = 0;
      } 

    gx[i] = groundx*random(44);
    gy[i] = groundy*random(24);
    
    
  }

  playerleft = loadImage('assets/left.png');
  playerright = loadImage('assets/right.png');
  playerup = loadImage('assets/up.png');
  playerdown = loadImage('assets/down.png');
  background('#F5F5F7');
  x = width/3; y = height/3;
  player = playerright;
 
}

function draw() {
  background('#F5F5F7');
  for (let i = 0; i < (img.length-1); i++) {
  image(img[i], gx[i], gy[i]);
  }
  
  image(player, x, y);
  prevx = x;
  prevy = y;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x = prevx - moveby;
    player = playerleft;
    
  } else if (keyCode === RIGHT_ARROW) {
    x = prevx + moveby;
    player = playerright;

  } else if (keyCode === UP_ARROW) {
    y = prevy - moveby;
    player = playerup;
    
  } else if (keyCode === DOWN_ARROW) {
    y = prevy + moveby;
    player = playerdown;
  } 
}

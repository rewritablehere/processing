/*
 * @name Load and Display Image
 * @description Images can be loaded and displayed to the screen at their
 * actual size or any other size.
 * <p><em><span class="small"> To run this example locally, you will need an 
 * image file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">
 * local server</a>.</span></em></p>

 */
let player, playerleft, playerright, playerup, playerdown, x, y, prevx, prevy; // Declare variable 'img'.

let img1, img2;
let moveby = 32, gx, gy;
let adjx = 0, adjy = -13;
let groundx = 32, groundy = 32;

function setup() {
  createCanvas(1440,813);
  
  
  img1 = loadImage('assets/ground1.png');
  img2 = loadImage('assets/ground2.png');
  playerleft = loadImage('assets/left.png');
  playerright = loadImage('assets/right.png');
  playerup = loadImage('assets/up.png');
  playerdown = loadImage('assets/down.png');
  background('#F5F5F7');
  x = width/3; y = height/3;
  player = playerright;
  gx1 = width/3;
  gy1 = height/3;
  gx2 = width/3 + groundx + adjx;
  gy2 = height/3 + groundy + adjy;  
}

function draw() {
  background('#F5F5F7');
  image(img1, gx1, gy1);
  image(img2, gx2, gy2);
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

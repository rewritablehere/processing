/*
 * @name Load and Display Image
 * @description Images can be loaded and displayed to the screen at their
 * actual size or any other size.
 * <p><em><span class="small"> To run this example locally, you will need an 
 * image file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">
 * local server</a>.</span></em></p>

 */
let img, player, x, y, prevx, prevy; // Declare variable 'img'.
let moveby = 64;

function setup() {
  createCanvas(1440,813);
  img = loadImage('assets/well.jpg');
  player = loadImage('assets/player.png');// Load the image
  background('#F5F5F7');
  x = 0; y = 0;
}

function draw() {
  background('#F5F5F7');
  image(img, 720, 203);
  image(player, x, y);
  prevx = x;
  prevy = y;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x = prevx - moveby;
    
  } else if (keyCode === RIGHT_ARROW) {
    x = prevx + moveby;

  } else if (keyCode === UP_ARROW) {
    y = prevy - moveby;
    
  } else if (keyCode === DOWN_ARROW) {
    y = prevy + moveby;
  } 
}

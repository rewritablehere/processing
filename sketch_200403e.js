let player, playerleft, playerright, playerup, playerdown; 

var img = [];
var gx = [];
var gy = [];
let right = 1, left = 2, up = 3, down = 4;

var playr = {
x:480,
y:271,
px:480,
py:271,
moveby:32,
turnleft : function() {
  player = playerleft;
},
turnright : function() {
  player = playerright;
},
turnup : function() {
  player = playerup;
},
turndown : function() {
  player = playerdown;
},
};

var ground = {
w: 32,
h: 32,
type: 0,
};



function setup() {
  createCanvas(1440,813);
  
  for (let i = 0; i < 30; i++) {

      img[i] = loadImage('assets/ground1.png');

    gx[i] = ground.w*random(44);
    gy[i] = ground.h*random(24);
    
    
  }

  playerleft = loadImage('assets/left.png');
  playerright = loadImage('assets/right.png');
  playerup = loadImage('assets/up.png');
  playerdown = loadImage('assets/down.png');
  background('#F5F5F7');
  playr.turnright();
}

function draw() {
  background('#F5F5F7');
  for (let i = 0; i < (img.length-1); i++) {
  image(img[i], gx[i], gy[i]);
  }
  
  image(player, playr.x, playr.y);
  playr.px = playr.x;
  playr.py = playr.y;

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    playr.x = playr.px - playr.moveby;
    playr.turnleft();
    
  } else if (keyCode === RIGHT_ARROW) {
    playr.x = playr.px + playr.moveby;
    playr.turnright();

  } else if (keyCode === UP_ARROW) {
    playr.y = playr.py - playr.moveby;
    playr.turnup();
    
  } else if (keyCode === DOWN_ARROW) {
    playr.y = playr.y + playr.moveby;
    playr.turndown();
  } 
}

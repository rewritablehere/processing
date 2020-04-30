let playerleft, playerright, playerup, playerdown, px, py;
let left = 'left', right = 'right', up = 'up', down = 'down';
var groundimg = [];


var player = {
    x:64,
    y:64,
    size:64, 
    
    
    display: function(direction) {
      
    px = this.x;
    py = this.y;
    
       switch (direction) {
       case 'left':
            this.x = px - this.size;
            image(playerleft, this.x, this.y); 
            break;
       case 'right':
            this.x = px + this.size;
            image(playerright, this.x, this.y); 
            break;
       case 'up':
            this.y = py - this.size;
            image(playerup, this.x, this.y); 
            break;
       case 'down':
            this.y = py + this.size;
            image(playerdown, this.x, this.y); 
            break;
       }
          
    },
};

var ground = {
    w: 64,
    h: 64,
    
    display: function() {
      for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
      image(groundimg[k], (j*this.w), (k*this.h));
      } 
      }
    },
};

function setup() {

  createCanvas(1440,788);

  for (let i = 0; i < 220; i++) {
  groundimg[i] = loadImage('assets/ground1.png');
  } 

  playerleft = loadImage('assets/left.png');
  playerright = loadImage('assets/right.png');
  playerup = loadImage('assets/up.png');
  playerdown = loadImage('assets/down.png');

  //background('#F5F5F7');
  //ground.display();
  //player.display();
}

function draw() {

}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {

    player.display(left);
    
  } else if (keyCode == RIGHT_ARROW) {
    
    player.display(right);

  } else if (keyCode == UP_ARROW) {
    
    player.display(up);
    
  } else if (keyCode == DOWN_ARROW) {
    
    player.display(down);
  } 
}

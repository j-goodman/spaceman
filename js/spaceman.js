var Sprite = require('./sprite.js');
var sprites = {
  standingRight: require('../sprites/spaceman/standingRight.js'),
  standingForward: require('../sprites/spaceman/standingForward.js'),
  standingBackward: require('../sprites/spaceman/standingBackward.js'),
  walkingRight: require('../sprites/spaceman/walkingRight.js'),
  walkingDown: require('../sprites/spaceman/walkingDown.js'),
  walkingUp: require('../sprites/spaceman/walkingUp.js'),
};

var Spaceman = function () {
  this.pos = {
    x: 12,
    y: 24,
  };
  this.speed = {
    x: 0,
    y: 0,
  };
  this.gap = {
    x: 0,
    y: 0,
  };
  this.tileSize = {
    x: 12,
    y: 6,
  };
  this.sprites = {};
  this.sprites.standingRight = new Sprite (sprites.standingRight);
  this.sprites.standingLeft = new Sprite (sprites.standingRight, 'xflip');
  this.sprites.standingForward = new Sprite (sprites.standingForward);
  this.sprites.standingBackward = new Sprite (sprites.standingBackward);
  this.sprites.walkingRight = new Sprite (sprites.walkingRight);
  this.sprites.walkingLeft = new Sprite (sprites.walkingRight, 'xflip');
  this.sprites.walkingDown = new Sprite (sprites.walkingDown);
  this.sprites.walkingUp = new Sprite (sprites.walkingUp);
  this.sprite = this.sprites.standingForward;
  this.frame = 0;
  this.facing = 'down';
  this.microFrame = 0;
};

Spaceman.prototype.draw = function (screen) {
  this.sprite.draw(screen, this.pos, this.frame);
};

Spaceman.prototype.act = function () {
  this.stopCheck();
  this.setSprite();
};

Spaceman.prototype.stopCheck = function () {
  var indeces = ['x', 'y']; var i; var coord;
  for (i = 0 ; i<2 ; i++) {
    coord = indeces[i];
    this.pos[coord] += this.speed[coord];
    this.gap[coord] += this.speed[coord];
    if (Math.abs(this.gap[coord]) > this.tileSize[coord]) {
      if (
        (this.speed.x > 0 && !this.rightKeyDown) ||
        (this.speed.x < 0 && !this.leftKeyDown)  ||
        (this.speed.y > 0 && !this.downKeyDown)  ||
        (this.speed.y < 0 && !this.upKeyDown)
      )
      this.speed[coord] = 0;
      this.gap[coord] = 0;
    }
  }
};

Spaceman.prototype.walkLateral = function (direction) {
  this.speed.x = 1*direction;
  this.gap.x = 0;
  this.frame = 0;
};

Spaceman.prototype.walkVertical = function (direction) {
  this.speed.y = 1*direction;
  this.gap.y = 0;
  this.frame = 0;
};

Spaceman.prototype.setSprite = function () {
  var frameDelay = 4;
  if (this.speed.x > 0) {
    this.sprite = this.sprites.walkingRight;
    this.facing = 'right';
    this.microFrame = (this.frame+1 > this.sprite.image.length-1) ? 0 : this.microFrame + 1;
  } else if (this.speed.x < 0) {
    this.sprite = this.sprites.walkingLeft;
    this.facing = 'left';
    this.microFrame = (this.frame+1 > this.sprite.image.length-1) ? 0 : this.microFrame + 1;
  } else if (this.speed.y < 0) {
    this.sprite = this.sprites.walkingUp;
    this.facing = 'up';
    this.microFrame = (this.frame+1 > this.sprite.image.length-1) ? 0 : this.microFrame + 1;
  } else if (this.speed.y > 0) {
    this.sprite = this.sprites.walkingDown;
    this.facing = 'down';
    this.microFrame = (this.frame+1 > this.sprite.image.length-1) ? 0 : this.microFrame + 1;
  } else {
    switch (this.facing) {
      case 'right':
        this.sprite = this.sprites.standingRight;
        break;
      case 'left':
        this.sprite = this.sprites.standingLeft;
        break;
      case 'down':
        this.sprite = this.sprites.standingForward;
        var iris; var white;
        if (!Math.floor(Math.random()*120)) {
          iris = this.sprite.image[0][6][3];
          white = this.sprite.image[0][6][4];
          this.sprite.image[0][6][3] = white;
          this.sprite.image[0][7][3] = white;
          this.sprite.image[0][6][4] = iris;
          this.sprite.image[0][7][4] = iris;
          this.sprite.image[0][6][6] = white;
          this.sprite.image[0][7][6] = white;
          this.sprite.image[0][6][7] = iris;
          this.sprite.image[0][7][7] = iris;
        }
        break;
      case 'up':
        this.sprite = this.sprites.standingBackward;
        break;
    }
  }
  this.frame = Math.floor(this.microFrame/frameDelay);
};

module.exports = Spaceman;

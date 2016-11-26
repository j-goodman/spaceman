var Sprite = require('./sprite.js');
var sprites = {
  standingRight: require('../sprites/spaceman/standingRight.js'),
  standingForward: require('../sprites/spaceman/standingForward.js'),
  walking: require('../sprites/spaceman/walking.js'),
};

var Spaceman = function () {
  this.pos = {
    x: 0,
    y: 32,
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
  this.sprites.walkingRight = new Sprite (sprites.walking);
  this.sprites.walkingLeft = new Sprite (sprites.walking, 'xflip');
  this.sprite = this.sprites.standingForward;
  this.frame = 0;
  this.facing = 'down';
  this.microFrame = 0;
};

Spaceman.prototype.draw = function (screen) {
  this.sprite.draw(screen, this.pos, this.frame);
};

Spaceman.prototype.act = function () {
  var indeces = ['x', 'y']; var i; var coord;
  for (i = 0 ; i<2 ; i++) {
    coord = indeces[i];
    this.pos[coord] += this.speed[coord];
    this.gap[coord] += this.speed[coord];
    if (Math.abs(this.gap[coord]) > this.tileSize[coord]) {
      this.speed[coord] = 0;
      this.gap[coord] = 0;
    }
  }
  this.setSprite();
};

Spaceman.prototype.walk = function (direction) {
  this.speed.x = 1*direction;
  this.gap.x = 0;
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
        break;
    }
  }
  this.frame = Math.floor(this.microFrame/frameDelay);
};

module.exports = Spaceman;

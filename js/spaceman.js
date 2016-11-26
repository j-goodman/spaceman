var Sprite = require('./sprite.js');
var sprites = {
  standing: require('../sprites/spaceman/standing.js'),
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
    x: 32,
    y: 16,
  };
  this.tileSize = 32;
  this.sprites = {
    standing: new Sprite (sprites.standing),
    walking_right: new Sprite (sprites.walking),
    walking_left: new Sprite (sprites.walking, 'xflip'),
  };
  this.sprite = this.sprites.standing;
  this.frame = 0;
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
    if (this.gap[coord] > this.tileSize[coord]) {
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
  if (this.speed.x > 0) {
    this.sprite = this.sprites.walking_right;
    this.microFrame = (this.frame+1 > this.sprite.image.length-1) ? 0 : this.microFrame + 1;
  } else if (this.speed.x < 0) {
    this.sprite = this.sprites.walking_left;
    this.microFrame = (this.frame+1 > this.sprite.image.length-1) ? 0 : this.microFrame + 1;
  } else {
    this.sprite = this.sprites.standing;
  }
  this.frame = Math.floor(this.microFrame/4);
};

module.exports = Spaceman;

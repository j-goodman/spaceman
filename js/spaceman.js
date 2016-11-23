var Sprite = require('./sprite.js');
var sprites = {
  standing: require('../sprites/spaceman.js'),
};

var Spaceman = function () {
  this.pos = {
    x: 60,
    y: -24,
  };
  this.sprite = new Sprite (sprites.standing);
};

Spaceman.prototype.draw = function (screen) {
  this.sprite.draw(screen, this.pos);
};

Spaceman.prototype.act = function () {
  if (this.pos.y < 50) {
    this.pos.y += 1;
  }
};

module.exports = Spaceman;

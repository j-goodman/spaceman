var Sprite = require('./sprite.js');
var drawEmpty = require('../drawings/ground.js');

var Square = function (x, y) {
  this.x = x; this.y = y;
  this.content = false;
  this.drawEmpty = drawEmpty;
};

Square.prototype.draw = function (screen) {
  if (this.content) {
    this.content.draw(screen);
  }
};

module.exports = Square;

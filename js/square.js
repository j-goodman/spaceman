var Sprite = require('./sprite.js');
var drawEmpty = require('../drawings/ground.js');

var Square = function (x, y, tile) {
  this.x = x; this.y = y;
  this.tile = tile;
  this.content = false;
  this.drawEmpty = drawEmpty;
  this.surfaceColor = '#6da';
};

Square.prototype.draw = function (screen) {
  if (this.content) {
    this.content.draw(screen);
  }
};

Square.prototype.drawSurface = function (screen) {
  var x; var y;
  for (y=0 ; y<this.tile.squareSize ; y++) {
    for (x=0 ; x<this.width ; x++) {
      if (screen.pixels[pos.y+y] && screen.pixels[pos.y+y][pos.x+x]) {
        screen.pixels[pos.y+y][pos.x+x].hex = this.surfaceColor;
      }
    }
  }
};

module.exports = Square;

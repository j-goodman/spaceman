var Sprite = function (image, effect) {
  this.image = image;
  this.height = this.image[0].length;
  this.width = this.image[0][0].length;
  if (effect === 'xflip') {
    this.xflip();
  }
};

Sprite.prototype.draw = function (screen, pos, frame) {
  var x; var y;
  for (y=0 ; y<this.height ; y++) {
    for (x=0 ; x<this.width ; x++) {
      if (screen.pixels[pos.y+y]) {
      }
      if (this.image[frame][y][x] && screen.pixels[pos.y+y] && screen.pixels[pos.y+y][pos.x+x]) {
        screen.pixels[pos.y+y][pos.x+x].hex = this.image[frame][y][x];
      }
    }
  }
};

Sprite.prototype.xflipRow = function (row) {

};

Sprite.prototype.xflip = function () {
  var i;
  for
};

module.exports = Sprite;

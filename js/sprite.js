var Sprite = function (image, effect) {
  this.image = image;
  this.height = this.image[0].length;
  this.width = this.image[0][0].length;
  if (effect === 'xflip') {
    this.xflip = true;
  }
};

Sprite.prototype.draw = function (screen, pos, frame) {
  var x; var y; var imageX;
  for (y=0 ; y<this.height ; y++) {
    for (x=0 ; x<this.width ; x++) {
      imageX = this.xflip ? this.width - 1 - x : x;
      if (this.image[frame][y][imageX] && screen.pixels[pos.y+y] && screen.pixels[pos.y+y][pos.x+x]) {
        screen.pixels[pos.y+y][pos.x+x].hex = this.image[frame][y][imageX];
      }
    }
  }
};

module.exports = Sprite;

var Sprite = function (image) {
  this.image = image;
  this.height = this.image.length;
  this.width = this.image[0].length;
};

Sprite.prototype.draw = function (screen, pos) {
  var x; var y;
  for (y=0 ; y<this.height ; y++) {
    for (x=0 ; x<this.width ; x++) {
      if (this.image[y][x] && screen.pixels[pos.y+y] && screen.pixels[pos.y+y][pos.x+x]) {
        screen.pixels[pos.y+y][pos.x+x].hex = this.image[y][x];
      }
    }
  }
};

module.exports = Sprite;

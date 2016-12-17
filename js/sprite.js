var Sprite = function (image) {
  this.image = image;
  this.height = this.image[0].length;
  this.width = this.image[0][0].length;
  this.frame = 0;
};

Sprite.prototype.draw = function (leftFootPos, ctx) {
  var x; var y; var pixel = 3;
  var topLeftPos = {
    x: leftFootPos.x,
    y: leftFootPos.y - this.height * pixel,
  };
  for (y=0 ; y<this.height ; y++) {
    for (x=0 ; x<this.width ; x++) {
      if (this.image[this.frame][y][x]) {
        ctx.fillStyle = this.image[this.frame][y][x];
        ctx.fillRect(topLeftPos.x + x * pixel, topLeftPos.y + y * pixel, pixel, pixel);
      }
    }
  }
};

module.exports = Sprite;

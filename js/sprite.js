var Sprite = function (image) {
  this.image = image;
  this.height = this.image[0].length;
  this.width = this.image[0][0].length;
  this.frame = 0;
  this.displayHeight = Math.ceil(this.height / 8);
};

Sprite.prototype.draw = function (leftFootSquare, leftFootPos, ctx) {
  var x; var y; var i; var pixel = 3;
  var topLeftPos = {
    x: leftFootPos.x,
    y: leftFootPos.y - this.height * pixel,
  };
  var square = leftFootSquare;
  for (y=0 ; y<this.height ; y++) {
    for (x=0 ; x<this.width ; x++) {
      if (this.image[this.frame][y][x]) {
        if (this.image[this.frame][y][x] === "clrA") {
          ctx.fillStyle = this.colorA;
        } else if (this.image[this.frame][y][x] === "clrB") {
          ctx.fillStyle = this.colorB;
        } else if (this.image[this.frame][y][x] === "clrC") {
          ctx.fillStyle = this.colorC;
        } else {
          ctx.fillStyle = this.image[this.frame][y][x];
        }
        ctx.fillRect(topLeftPos.x + x * pixel, topLeftPos.y + y * pixel, pixel, pixel);
      }
    }
  }
};

module.exports = Sprite;

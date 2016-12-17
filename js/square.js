var Square = function (x, y) {
  this.x = x;
  this.y = y;
  this.content = false;
  this.dirtColor = '#b79';
};

Square.prototype.render = function (ctx, viewOrigin) {
  ctx.fillStyle = this.dirtColor;
  if (this.content) {
    ctx.fillStyle = '#4ac';
  }
  ctx.fillRect((this.x - viewOrigin.x) * 60, (this.y - viewOrigin.y) * 28 + 142, 60, 28);
  if (this.content.sprite) {
    this.content.sprite.draw({x: (this.x - viewOrigin.x) * 60 + (60 - this.content.sprite.width * 3) / 2, y: (this.y - viewOrigin.y) * 28 + 142 + 15}, ctx);
  }
};

module.exports = Square;

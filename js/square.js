var Square = function (x, y, dirtColor, map) {
  this.x = x;
  this.y = y;
  this.map = map;
  this.content = false;
  this.dirtColor = dirtColor;
};

Square.prototype.renderEmpty = function (ctx, viewOrigin) {
  ctx.fillStyle = this.dirtColor;
  if (this.content) {
    ctx.fillStyle = '#fff';
  }
  ctx.fillRect((this.x - viewOrigin.x) * 60, (this.y - viewOrigin.y) * 28 + 142, 60, 28);
};

Square.prototype.renderContent = function (ctx, viewOrigin) {
  if (this.content.sprite) {
    this.content.sprite.draw({
      x: (this.x - viewOrigin.x) * 60 + (60 - this.content.sprite.width * 3 + this.content.offset.x) / 2,
      y: (this.y - viewOrigin.y) * 28 + 142 + 15 + this.content.offset.y
    }, ctx);
  }
};

module.exports = Square;

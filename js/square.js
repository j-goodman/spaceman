var Utils = require('./utils.js');
var hex = Utils.hex;

var Square = function (x, y, dirtColor, map) {
  this.x = x;
  this.y = y;
  this.map = map;
  this.content = false;
  // this.dirtColor = dirtColor;
  r = 150;
  g = 50;
  b = 70;
  this.dirtColor = hex((Math.random()*255 + r*22)/23,( Math.random()*255 + g*22)/23, (Math.random()*255 + b*22)/23);
};

Square.prototype.renderEmpty = function (ctx, viewOrigin) {
  ctx.fillStyle = this.dirtColor;
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

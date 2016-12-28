var Utils = require('./utils.js');
var hex = Utils.hex;

var Square = function (x, y, dirtHues, map) {
  this.x = x;
  this.y = y;
  this.map = map;
  this.content = false;
  this.dirtHues = dirtHues;
  this.dirtColor = hex(
    (Math.random()*255 + dirtHues.r * 22) / 23,
    (Math.random()*255 + dirtHues.g * 22) / 23,
    (Math.random()*255 + dirtHues.b * 22) / 23
  );
};

Square.prototype.renderEmpty = function (ctx, screenPos) {
  ctx.fillStyle = this.dirtColor;
  ctx.fillRect((screenPos.x) * 60, (screenPos.y) * 28 + 142, 60, 28);
};

Square.prototype.renderContent = function (ctx, screenPos) {
  if (!this.content.offset) {
    this.content.offset = {x: 0, y: 0};
  }
  if (!this.content.yCenter) {
    this.content.yCenter = 0;
  }
  if (this.content.sprite) {
    this.content.sprite.draw(this, {
      x: (screenPos.x) * 60 + (60 - this.content.sprite.width * 3 + this.content.offset.x) / 2,
      y: (screenPos.y) * 28 + 142 + 30 - this.content.yCenter + this.content.offset.y
    }, ctx);
  }
};

Square.prototype.fetch = function (x, y) {
  while (x < 0) { x += 144; }
  while (y < 0) { y += 144; }
  return this.map[y % 144][x % 144];
};

module.exports = Square;

var groundDrawing = require('../drawings/ground.js');

var Ground = function (x, y) {
  this.pos = {
    x: x,
    y: y,
  };
  this.color = '#da3';
  this.drawing = groundDrawing;
};

Ground.prototype.draw = function (screen) {
  this.drawing(screen, this.pos, this.color, this);
};

Ground.prototype.act = function () {
};

module.exports = Ground;

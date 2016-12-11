var Square = require('./square.js');

var Tile = function (width, height, x, y) {
  this.x = x; this.y = y;
  this.width = width; this.height = height;
  this.buildMatrix = function () {
    var matrix; var row; var x; var y;
    matrix = [];
    for (y=0 ; y<this.height ; y++) {
      row = [];
      for (x=0 ; x<this.width ; x++) {
        row.push(new Square (x, y));
      }
      matrix.push(row);
    }
    return matrix;
  };
  this.matrix = this.buildMatrix();
};

Tile.prototype.receiveObject = function (object, x, y) {
  this.matrix[y][x].content = object;
};

module.exports = Tile;

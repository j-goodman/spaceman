var Tile = require('./tile.js');

var Board = function (width, height, tileSize) {
  this.width = width;
  this.height = height;
  this.buildMatrix = function () {
    var matrix; var row; var x; var y;
    matrix = [];
    for (y=0 ; y<this.height ; y++) {
      row = [];
      for (x=0 ; x<this.width ; x++) {
        row.push(new Tile (tileSize, tileSize));
      }
      matrix.push(row);
    }
    return matrix;
  };
  this.matrix = this.buildMatrix();
};

Board.prototype.act = function () {
};

module.exports = Board;

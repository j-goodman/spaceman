var Square = require('./square.js');

var Tile = function (width, height, x, y, screen) {
  this.x = x; this.y = y;
  this.width = width; this.height = height;
  this.objects = [];
  this.squareUpdateQueue = [];
  this.screen = screen;
  this.squareSize = {
    x: 24,
    y: 8,
  };
  this.buildMatrix = function () {
    var matrix; var row; var x; var y;
    matrix = [];
    for (y=0 ; y<this.height ; y++) {
      row = [];
      for (x=0 ; x<this.width ; x++) {
        row.push(new Square (x, y, this));
      }
      matrix.push(row);
    }
    return matrix;
  };
  this.matrix = this.buildMatrix();
};

Tile.prototype.receiveObject = function (object, x, y) {
  this.matrix[y][x].content = object;
  this.objects.push(object);
};

Tile.prototype.init = function () {
  var i;
  for (i=0 ; i<this.objects.length ; i++) {
    this.objects[i].draw(this.screen);
  }
};

Tile.prototype.act = function () {
  var i;
  for (i=0 ; i<this.objects.length ; i++) {
    this.objects[i].act();
  }
};

Tile.prototype.draw = function () {
  var i; var sq;
  for (i=0 ; i<this.squareUpdateQueue.length ; i++) {
    sq = this.squareUpdateQueue[i];
    sq.draw(this.screen);
  }
};

module.exports = Tile;

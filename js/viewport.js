var Viewport = function (planet, x, y) {
  this.origin = {
    x: x,
    y: y,
  };
  this.planet = planet;
  this.squares = [];
  this.populateSquares();
};

Viewport.prototype.populateSquares = function () {
  var x; var y;
  for (y=0 ; y<12 ; y++) {
    this.squares.push([]);
    for (x=0 ; x<12 ; x++) {
      this.squares[y].push(this.planet.map[this.origin.y+y][this.origin.x+x]);
    }
  }
};

Viewport.prototype.render = function (ctx) {
  var x; var y;
  for (y=0 ; y<12 ; y++) {
    for (x=0 ; x<12 ; x++) {
      this.squares[y][x].render(ctx, this.origin);
    }
  }
};

module.exports = Viewport;

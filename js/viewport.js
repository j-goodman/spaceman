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
  var x; var y; var i;
  var objectQueue = [];
  for (y=0 ; y<12 ; y++) {
    for (x=0 ; x<12 ; x++) {
      this.squares[y][x].renderEmpty(ctx, this.origin);
      if (this.squares[y][x].content) {
        objectQueue.push(this.squares[y][x]);
      }
    }
  }
  this.drawSky(ctx, this.planet);
  for (i=0 ; i<objectQueue.length ; i++) {
    objectQueue[i].renderContent(ctx, this.origin);
  }
};

Viewport.prototype.drawSky = function (ctx, planet) {
  var offset;
  for (y=0 ; y<48 ; y++) {
    for (x=0 ; x<240 ; x++) {
      offset = y + planet.time;
      if (offset >= planet.sky.length) {
        offset -= planet.sky.length;
      }
      if (!planet.sky[offset]) {
        console.log('offset: ', offset);
        console.log('sky length: ', planet.sky.length);
      }
      ctx.fillStyle = planet.sky[offset][x];
      ctx.fillRect(x * 3, y * 3, 3, 3);
    }
  }
};

module.exports = Viewport;

var Viewport = function (game, planet, x, y) {
  this.origin = {
    x: x,
    y: y,
  };
  this.game = game;
  this.planet = planet;
  this.squares = [];
  this.upperFringe = [];
  this.lowerFringe = [];
  this.populateSquares();
};

Viewport.prototype.populateSquares = function () {
  var x; var y;
  this.squares = [];
  for (y=0 ; y<12 ; y++) {
    this.squares.push([]);
    for (x=0 ; x<12 ; x++) {
      this.squares[y].push(this.planet.map[0][0].fetch(this.origin.x + x, this.origin.y + y));
    }
  }
  this.populateFringes();
};

Viewport.prototype.populateFringes = function () {
  this.upperFringe = [];
  this.lowerFringe = [];
  var x; var y;
  for (y=0 ; y<5 ; y++) {
    this.upperFringe.push([]);
    this.lowerFringe.push([]);
    for (x=0 ; x<12 ; x++) {
      this.upperFringe[y].push(this.planet.map[0][0].fetch(this.origin.x + x, this.origin.y - y));
      this.lowerFringe[y].push(this.planet.map[0][0].fetch(this.origin.x + x, this.origin.y + 12 + y));
    }
  }
};

Viewport.prototype.render = function (ctx) {
  var x; var y; var i;
  var objectQueue = [];
  this.drawSky(ctx, this.planet);
  this.renderUpperFringe();
  for (y=0 ; y<12 ; y++) {
    for (x=0 ; x<12 ; x++) {
      this.squares[y][x].renderEmpty(ctx, {
        x: x,
        y: y,
      });
      if (this.squares[y][x].content) {
        objectQueue.push({
          square: this.squares[y][x],
          x: x,
          y: y,
        });
      }
    }
  }
  this.renderLowerFringe();
  for (i=0 ; i<objectQueue.length ; i++) {
    objectQueue[i].square.renderContent(ctx, {
      x: objectQueue[i].x,
      y: objectQueue[i].y,
    });
  }
};

Viewport.prototype.renderUpperFringe = function () {
  var x; var y;
  for (y=0 ; y<5 ; y++) {
    for (x=0 ; x<12 ; x++) {
      if (this.upperFringe[y][x].content) {
        this.upperFringe[y][x].renderContent(ctx, {
          x: x,
          y: y,
        });
      }
    }
  }
};

Viewport.prototype.renderLowerFringe = function () {
  var x; var y;
  for (y=0 ; y<5 ; y++) {
    for (x=0 ; x<12 ; x++) {
      if (this.lowerFringe[y][x].content) {
        this.lowerFringe[y][x].renderContent(ctx, {
          x: x,
          y: y + 12,
        });
      }
    }
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
      ctx.fillStyle = planet.sky[offset][x];
      ctx.fillRect(x * 3, y * 3, 3, 3);
    }
  }
};

Viewport.prototype.shift = function (x, y) {
  if (this.shifting) { return null; }
  this.shifting = true;
  var subShift = function () {
    if (this.shiftCount < 12) {
      this.origin.x += x;
      this.origin.y += y;
      if (this.planet.time - y > 0 && this.planet.time - y < 480) {
        this.planet.time -= y;
      }
      this.shiftCount += 1;
    } else {
      if (this.origin.x < 0) {
        this.origin.x += 144;
      } else if (this.origin.y < 0) {
        this.origin.y += 144;
      }
      this.origin.x = this.origin.x % 144;
      this.origin.y = this.origin.y % 144;
      this.shifting = false;
      clearInterval(this.shiftInterval);
    }
    this.populateSquares();
    this.game.render();
  }.bind(this);
  this.shiftCount = 0;
  this.shiftInterval = setInterval(subShift, 32);
};

module.exports = Viewport;

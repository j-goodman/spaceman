var Square = require('./square.js');

var Planet = function () {
  this.map = [];
  this.generate();
};

Planet.prototype.generate = function () {
  var y; var x;
  for (y=0 ; y<144 ; y++) {
    this.map.push([]);
    for (x=0 ; x<144 ; x++) {
      this.map[y].push(new Square (x, y, this.map));
    }
  }
};

module.exports = Planet;

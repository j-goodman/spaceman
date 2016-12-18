var sprite = require('../sprites/spaceship.js');

var Spaceship = function (leftFootSquare) {
  this.sprite = sprite;
  this.square = leftFootSquare;
  this.square.content = this;
  this.name = "Spaceship";
};

module.exports = Spaceship;

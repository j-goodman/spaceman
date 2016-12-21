var sprite = require('../sprites/spaceship.js');
var Utils = require('./utils.js');
var hex = Utils.hex;

var Spaceship = function (leftFootSquare, planet) {
  var i;
  this.sprite = sprite;
  this.sprite.colorA = hex(planet.dirtHues.r - 50, planet.dirtHues.g - 50, planet.dirtHues.b - 50 );
  this.sprite.colorB = hex(planet.dirtHues.r - 20, planet.dirtHues.g - 20, planet.dirtHues.b - 20 );
  this.sprite.colorC = hex(
    (planet.dirtHues.r + 187 * 1.5) / 2.5,
    (planet.dirtHues.g + 102 * 1.5) / 2.5,
    (planet.dirtHues.b + 102 * 1.5) / 2.5
  );
  this.square = leftFootSquare;
  this.square.content = this;
  var blocks = [];
  blocks.push(this.square.fetch(this.square.x, this.square.y));
  blocks.push(this.square.fetch(this.square.x, this.square.y - 1));
  blocks.push(this.square.fetch(this.square.x - 1, this.square.y));
  blocks.push(this.square.fetch(this.square.x + 1, this.square.y - 1));
  blocks.push(this.square.fetch(this.square.x - 1, this.square.y - 1));
  for (i=0 ; i<blocks.length ; i++) {
    if (!blocks[i].content) {
      blocks[i].content = "block";
    }
  }
  this.name = "Spaceship";
};

module.exports = Spaceship;

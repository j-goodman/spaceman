var Square = require('./square.js');
var Utils = require('./utils.js');

var Planet = function () {
  this.map = [];
  this.time = 0;
  this.generate();
};

Planet.prototype.generate = function () {
  var y; var x;

  // Add dirt and squares.
  var balancer = Math.round(Math.random()*255);
  this.dirtHues = {
    r: (50 + Math.round(Math.random()*195) + balancer * 2) / 3,
    g: (30 + Math.round(Math.random()*175) + balancer * 2) / 3,
    b: (50 + Math.round(Math.random()*195) + balancer * 2) / 3,
  };
  this.dirtColor = hex(this.dirtHues.r, this.dirtHues.g, this.dirtHues.b);
  for (y=0 ; y<144 ; y++) {
    this.map.push([]);
    for (x=0 ; x<144 ; x++) {
      this.map[y].push(new Square (x, y, this.dirtHues, this.map));
    }
  }

  // Color sky.
  this.skyHues = {
    r: Math.random() * 2,
    g: Math.random() * 1.8,
    b: Math.random() * 2.2,
  };
  this.sky = this.generateSky();

  // Design rocks.
  this.rocks = {
    height: 20 + Math.random() * 5 - 2.5,
    uniformity: 1.3 + Math.random() * 0.5 - 0.25,
    speckledness: Math.random(),
    outlineHues: {
      r: this.dirtHues.r - 70,
      g: this.dirtHues.g - 70,
      b: this.dirtHues.b - 70,
    },
    mainHues: {
      r: this.dirtHues.r - 40,
      g: this.dirtHues.g - 40,
      b: this.dirtHues.b - 40,
    },
    secondHues: {
      r: this.dirtHues.r - 30,
      g: this.dirtHues.g - 30,
      b: this.dirtHues.b - 30,
    },
  };
};

var hex = Utils.hex;

Planet.prototype.generateSky = function () {
  var sky = []; var x; var y;
  var red = 0; var green = 0; var blue = 0;
  var color = hex(red, green, blue);
  for (y=0 ; y<480 ; y++) {
    sky.push([]);
    if (y > 50 && y < 240) {
      red += this.skyHues.r;
      green += this.skyHues.g;
      blue += this.skyHues.b;
    } else if (y > 240 && y < 430) {
      red -= this.skyHues.r;
      green -= this.skyHues.g;
      blue -= this.skyHues.b;
    }
    color = hex(red, green, blue);
    for (x=0 ; x<240 ; x++) {
      sky[y].push(color);
    }
  }
  return sky;
};

module.exports = Planet;

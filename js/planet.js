var Square = require('./square.js');

var Planet = function () {
  this.map = [];
  this.time = 0;
  this.generate();
};

Planet.prototype.generate = function () {
  var y; var x;
  this.dirtHues = {
    r: Math.round(Math.random()*255),
    g: Math.round(Math.random()*255),
    b: Math.round(Math.random()*255),
  };
  this.dirtColor = hex(this.dirtHues.r, this.dirtHues.g, this.dirtHues.b);
  for (y=0 ; y<144 ; y++) {
    this.map.push([]);
    for (x=0 ; x<144 ; x++) {
      this.map[y].push(new Square (x, y, this.dirtColor, this.map));
    }
  }
  this.skyHues = {
    r: Math.random()*2,
    g: Math.random()*2,
    b: Math.random()*2,
  };
  this.sky = this.generateSky();
};

var hex = function (r, g, b) {
  // r, g, and b are integers between 0 and 255
  var i; var j;
  args = [r, g, b];
  for (j=0 ; j<3 ; j++) {
    if (args[j] > 255) {
      args[j] = 255;
    }
  colors = [
    Math.round(args[0]).toString(16),
    Math.round(args[1]).toString(16),
    Math.round(args[2]).toString(16),
  ];
  }
  for (i=0 ; i<3 ; i++) {
    if (colors[i].length < 2) {
      colors[i] = '0' + colors[i];
    }
  }
  var hexString = '#'+ colors.join('');
  return hexString;
};

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

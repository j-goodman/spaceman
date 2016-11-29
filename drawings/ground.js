var colors = require('../util/colors');

var ground = function (screen, origin, color) {
  var x; var y;
  var width = 12;
  var height = 6;
  var secondColor = colors.addHue(color, 'blue', 32);
  for (x=0 ; x<width ; x++) {
    for (y=0 ; y<height ; y++) {
      screen.pixels[origin.y+y][origin.x+x].hex = color;
      if (!y % 12 && !x % 24) {
        screen.pixels[origin.y+y][origin.x+x].hex = secondColor;
      }
    }
  }
};

module.exports = ground;

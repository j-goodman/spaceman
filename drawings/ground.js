var colors = require('../util/colors');

var ground = function (screen, origin, color, obj) {
  var x; var y;
  var width = 12;
  var height = 6;
  if (!obj.secondColor) {
    obj.secondColor = colors.addHue(color, 'blue', 14);
  }
  for (x=0 ; x<width ; x++) {
    for (y=0 ; y<height ; y++) {
      if (y % 12 || x-6 % 24) {
        screen.pixels[origin.y+y][origin.x+x].hex = color;
      } else {
        screen.pixels[origin.y+y][origin.x+x].hex = obj.secondColor;
      }
    }
  }
};

module.exports = ground;

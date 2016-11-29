var colors = {
  addHue: function (hex, color, amount) {
    var i; var dex;
    if (hex.length === 7) {
      dex = {
        red: parseInt(hex.slice(1,3), 16),
        green: parseInt(hex.slice(3,5), 16),
        blue: parseInt(hex.slice(5,7), 16),
      };
    } else if (hex.length === 4) {
      dex = {
        red: parseInt(hex.slice(1,2), 16),
        green: parseInt(hex.slice(2,3), 16),
        blue: parseInt(hex.slice(3,4), 16),
      };
    }
    dex[color] += amount;
    hex = '#';
    var hues = ['red', 'green', 'blue'];
    for (i=0 ; i<3 ; i++) {
      hue = hues[i];
      dex[hue] = dex[hue].toString(16);
      if (hue.length < 2) { hue = 0+hue; }
      hex += dex[hue];
    }
    if (hex[1]=='0' && hex[3]=='0' && hex[5]=='0') {
      hex = '#'+hex.slice(2,3)+hex.slice(4,5)+hex.slice(6,7);
    }
    return hex;
  }
};

module.exports = colors;

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
    if (dex[color] > 255) { dex[color] = 255; }
    if (dex[color] < 0) { dex[color] = 0; }
    hex = '#';
    var hues = ['red', 'green', 'blue'];
    for (i=0 ; i<3 ; i++) {
      hue = hues[i];
      dex[hue] = dex[hue].toString(16);
      if (dex[hue].length < 2) { dex[hue] = dex[hue]+'0'; }
      hex += dex[hue];
    }
    if (hex[1]=='0' && hex[3]=='0' && hex[5]=='0') {
      hex = '#'+hex.slice(2,3)+hex.slice(4,5)+hex.slice(6,7);
    }
    return hex;
  }
};

module.exports = colors;

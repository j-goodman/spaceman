Utils = {
  hex: function (r, g, b) {
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
    if (hexString.slice(0,1) == "#" && (hexString.length == 4 || hexString.length == 7)) {
      return hexString;
    } else {
      return "#666";
    }
  },
};

module.exports = Utils;

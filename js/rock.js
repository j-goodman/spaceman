var Sprite = require('./sprite.js');
var Utils = require('./utils.js');

var sprite = require('../sprites/rock.js');

var hex = Utils.hex;

var Rock = function (square, masterRock) {
  this.square = square;
  square.content = this;
  this.height = Math.floor(Math.random() * 2) ?
    Math.round(masterRock.height / masterRock.uniformity):
    Math.round(masterRock.height * masterRock.uniformity);
  this.outlineColor = hex(
    masterRock.outlineHues.r,
    masterRock.outlineHues.g,
    masterRock.outlineHues.b
  );
  this.mainColor = hex(
    masterRock.mainHues.r + Math.random() * 60 - 30,
    masterRock.mainHues.g + Math.random() * 60 - 30,
    masterRock.mainHues.b + Math.random() * 60 - 30
  );
  this.secondColor = hex(
    masterRock.secondHues.r + Math.random() * 60 - 30,
    masterRock.secondHues.g + Math.random() * 60 - 30,
    masterRock.secondHues.b + Math.random() * 60 - 30
  );
  // this.sprite = this.generateSprite(masterRock);
  this.sprite = sprite;
  sprite.colorA = this.outlineColor;
  sprite.colorB = this.mainColor;
  sprite.colorC = this.secondColor;
};

// Rock.prototype.generateSprite = function (masterRock) {
//   var image = []; var brush; var x; var y;
//   for (y=0 ; y<this.height ; y++) {
//     image.push([]);
//     for (x=0 ; x<20 ; x++) {
//       image[y].push("");
//     }
//   }
//   var leftBound = 1; var rightBound = 19;
//   for (y=this.height-1 ; y>=0 ; y--) {
//     image[y][leftBound] = this.outlineColor;
//     brush = leftBound + 1;
//     while (brush !== rightBound) {
//       if (Math.floor(Math.random() * 6)) {
//         image[y][brush] = this.mainColor;
//       } else {
//         image[y][brush] = this.secondColor;
//       }
//       brush += 1;
//     }
//     image[y][brush] = this.outlineColor;
//     leftBound += Math.round(Math.random() * 3 - 1.5);
//     rightBound += Math.round(Math.random() * 3 - 1.5);
//     if (leftBound < 0) { leftBound = 1; }
//     if (rightBound > 20) { rightBound = 19; }
//     if (leftBound > rightBound) { leftBound = rightBound - 1; }
//     if (rightBound < leftBound) { rightBound = leftBound + 1; }
//   }
//   return new Sprite ([image]);
// };

module.exports = Rock;

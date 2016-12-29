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
  this.checko = masterRock.outlineHues;
  var lightenA = Math.random() * 60 - 30;
  var lightenB = Math.random() * 60 - 30;
  this.mainColor = hex(
    masterRock.mainHues.r + lightenA,
    masterRock.mainHues.g + lightenA,
    masterRock.mainHues.b + lightenA
  );
  this.secondColor = hex(
    masterRock.secondHues.r + lightenB,
    masterRock.secondHues.g + lightenB,
    masterRock.secondHues.b + lightenB
  );
  this.middleColor = hex(
    (masterRock.mainHues.r + masterRock.secondHues.r) / 2,
    (masterRock.mainHues.g + masterRock.secondHues.g) / 2,
    (masterRock.mainHues.b + masterRock.secondHues.b) / 2
  );
  this.speckledness = masterRock.speckledness;
  this.sprite = this.generateSprite(masterRock);
  this.yCenter = 5;
};

Rock.prototype.generateSprite = function () {
    var image = []; var brush; var x; var y;
    for (y=0 ; y<this.height ; y++) {
      image.push([]);
      for (x=0 ; x<20 ; x++) {
        image[y].push("");
      }
    }
    var leftBound = 1; var rightBound = 19;
    var leftSlope = Math.ceil(Math.random()*6);
    var rightSlope = Math.ceil(Math.random()*6);
    var leftSlopeRelative = leftSlope;
    var rightSlopeRelative = rightSlope;
    for (y=this.height-1 ; y>=0 ; y--) {
      image[y][leftBound] = this.outlineColor;
      brush = leftBound + 1;
      if (leftSlopeRelative === 0) {
        leftSlopeRelative = leftSlope;
        leftBound += 1;
        leftSlope += Math.round(Math.random() * 4 - 2);
      } else {
        leftSlopeRelative -= 1;
      }
      while (brush < rightBound) {
        image[y][brush] = this.mainColor;
        if (!Math.floor(Math.random() * 12 - 12 * this.speckledness)) {
          image[y][brush] = this.secondColor;
          var plusX = Math.round(Math.random() * 2 - 1);
          var plusY = Math.round(Math.random() * 2 - 1);
          if (image[y + plusY] && image[y + plusY][brush + plusX]) {
            image[y + plusY][brush + plusX] = this.middleColor;
          }
        }
        if (y === 0 || y === this.height - 1) {
          image[y][brush] = this.outlineColor;
        }
        brush += 1;
      }
      image[y][rightBound] = this.outlineColor;
      if (rightSlopeRelative === 0) {
        rightSlopeRelative = rightSlope;
        rightBound -= 1;
        rightSlope += Math.round(Math.random() * 4 - 2);
      } else {
        rightSlopeRelative -= 1;
      }
      if (leftBound > rightBound) { leftBound = rightBound - 1; }
      if (rightBound < leftBound) { rightBound = leftBound + 1; }
    }
    return new Sprite ([image]);
};

module.exports = Rock;

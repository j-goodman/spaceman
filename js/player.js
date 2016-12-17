var sprites = {
  standingDown: require('../sprites/player/standingDown'),
};

var Player = function (square) {
  this.square = square;
  this.sprite = sprites.standingDown;
};

module.exports = Player;

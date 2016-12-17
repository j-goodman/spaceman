var sprites = {
  standingDown: require('../sprites/player/standingDown'),
};

var Player = function (GameObject, square) {
  this.game = GameObject;
  this.square = square;
  this.sprite = sprites.standingDown;
  this.setupKeyControls();
  this.leftPressed = false;
  this.upPressed = false;
  this.rightPressed = false;
  this.downPressed = false;
  this.offset = {
    x: 0,
    y: 0,
  };
};

Player.prototype.setupKeyControls = function () {
  window.onkeydown = function (event) {
    switch (event.keyCode) {
      case 37:
        this.leftPressed = true;
        this.walk(-1, 0);
        break;
      case 38:
        this.upPressed = true;
        this.walk(0, -1);
        break;
      case 39:
        this.rightPressed = true;
        this.walk(1, 0);
        break;
      case 40:
        this.downPressed = true;
        this.walk(0, 1);
        break;
    }
  }.bind(this);
  window.onkeyup = function (event) {
    switch (event.keyCode) {
      case 37: this.leftPressed = false; break;
      case 38: this.upPressed = false; break;
      case 39: this.rightPressed = false; break;
      case 40: this.downPressed = false; break;
    }
  }.bind(this);
};

Player.prototype.walk = function (x, y) {

};

Player.prototype.changeSquare = function (x, y) {
  this.square.content = false;
  this.square.map[this.square.y + y][this.square.x + x].content = this;
  this.square = this.square.map[this.square.y + y][this.square.x + x];
  this.game.advance();
};

module.exports = Player;

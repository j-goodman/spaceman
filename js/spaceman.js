var Sprite = require('./sprite.js');
var sprites = {
  standingRight: require('../sprites/spaceman/standingRight.js'),
  standingForward: require('../sprites/spaceman/standingForward.js'),
  standingBackward: require('../sprites/spaceman/standingBackward.js'),
  walkingRight: require('../sprites/spaceman/walkingRight.js'),
  walkingDown: require('../sprites/spaceman/walkingDown.js'),
  walkingUp: require('../sprites/spaceman/walkingUp.js'),
};

var Spaceman = function () {
  this.sprites = {};
  this.sprites.standingRight = new Sprite (sprites.standingRight);
  this.sprites.standingLeft = new Sprite (sprites.standingRight, 'xflip');
  this.sprites.standingForward = new Sprite (sprites.standingForward);
  this.sprites.standingBackward = new Sprite (sprites.standingBackward);
  this.sprites.walkingRight = new Sprite (sprites.walkingRight);
  this.sprites.walkingLeft = new Sprite (sprites.walkingRight, 'xflip');
  this.sprites.walkingDown = new Sprite (sprites.walkingDown);
  this.sprites.walkingUp = new Sprite (sprites.walkingUp);
  this.sprite = this.sprites.standingForward;
  this.frame = 0;
  this.offset = {
    x: 0,
    y: 0,
  };
  this.actionQueue = [];
  this.facing = 'down';
  this.microFrame = 0;
};

Spaceman.prototype.draw = function (screen) {
  this.sprite.draw(screen, {
    x: (this.square.x * this.tile.squareSize.x) + this.offset.x,
    y: (this.square.y * this.tile.squareSize.y) + this.offset.y,
  }, this.frame);
};

Spaceman.prototype.act = function () {
  var i;
  this.setSprite();
  if (this.actionQueue[0]) {
    this.actionQueue.shift()();
  }
};

Spaceman.prototype.updatePosition = function () {
  this.tile.squareUpdateQueue.push(this.square);
};

Spaceman.prototype.walkRight = function (direction) {
  this.walk('x', 1, this.sprites.walkingRight);
};

Spaceman.prototype.walkLeft = function (direction) {
  this.walk('x', -1, this.sprites.walkingLeft);
};

Spaceman.prototype.walkDown = function (direction) {
  this.walk('y', 1, this.sprites.walkingDown);
};

Spaceman.prototype.walkUp = function (direction) {
  this.walk('y', -1, this.sprites.walkingUp);
};

Spaceman.prototype.walk = function (xy, direction, sprite) {
  var i;
  this.updatePosition();
  this.sprite = sprite;
  this.actionQueue = [];
  for (i=0 ; i<this.sprite.image.length/2 ; i++) {
    this.actionQueue.push(function () {
      this.frame += 1;
      this.offset[xy] += (this.tile.squareSize[xy]/this.sprite.image.length)*direction ; i++;
    }.bind(this));
  }
  this.actionQueue.push(function () {
    this.offset[xy] *= -1;
    var oldSquare = this.square;
    if (xy = 'x') {
      this.square = this.tile.matrix[this.square.y][this.square.x + direction];
    } else {
      this.square = this.tile.matrix[this.square.y + direction][this.square.x];
    }
    oldSquare.content = false;
    this.square.content = this;
  }.bind(this));
  for (i=0 ; i<this.sprite.image.length/2 ; i++) {
    this.actionQueue.push(function () {
      this.frame += 1;
      this.offset[xy] += this.tile.squareSize[xy]/this.sprite.image.length ; i++;
    }.bind(this));
  }
  this.actionQueue.push(function () {
    this.updatePosition();
  }.bind(this));
  this.frame = 0;
}

Spaceman.prototype.setSprite = function () {
  var frameDelay = 4;
  var iris; var white;
  // if (!Math.floor(Math.random()*120)) {
  //   iris = this.sprite.image[0][6][3];
  //   white = this.sprite.image[0][6][4];
  //   this.sprite.image[0][6][3] = white;
  //   this.sprite.image[0][7][3] = white;
  //   this.sprite.image[0][6][4] = iris;
  //   this.sprite.image[0][7][4] = iris;
  //   this.sprite.image[0][6][6] = white;
  //   this.sprite.image[0][7][6] = white;
  //   this.sprite.image[0][6][7] = iris;
  //   this.sprite.image[0][7][7] = iris;
  // }
  this.frame = Math.floor(this.microFrame/frameDelay);
};

module.exports = Spaceman;

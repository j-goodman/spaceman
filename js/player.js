var sprites = {
  standingDown: require('../sprites/player/standingDown'),
  standingUp: require('../sprites/player/standingUp'),
  standingRight: require('../sprites/player/standingRight'),
  standingLeft: require('../sprites/player/standingLeft'),
  walkingDown: require('../sprites/player/walkingDown'),
  walkingUp: require('../sprites/player/walkingUp'),
  walkingRight: require('../sprites/player/walkingRight'),
  walkingLeft: require('../sprites/player/walkingLeft'),
};

var Player = function (GameObject, square) {
  this.game = GameObject;
  this.square = square;
  this.sprites = sprites;
  this.sprite = this.sprites.standingDown;
  this.leftPressed = false;
  this.upPressed = false;
  this.rightPressed = false;
  this.downPressed = false;
  this.walking = false;
  this.offset = {
    x: 0,
    y: 0,
  };
  this.name = "Player";
  this.setupKeyControls();
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
  if (this.walking) {
    return null;
  }
  this.bounced = false;
  this.setDirectionalSprite(x, y, 'walking');
  this.walking = true;
  this.squareExit = 0;
  this.squareEnter = 0;
  var animateExit = function () {
    this.squareExit += 1;
    if (this.sprite.frame < this.sprite.image.length - 1) {
      this.sprite.frame += 1;
    } else {
      this.sprite.frame = 0;
    }
    this.offset.x += x*16;
    this.offset.y += y*4;
    this.game.render();
    if (this.squareExit > 3) {
      clearInterval(this.walkInterval);
      this.squareExit = 0;
      this.changeSquare(x, y);
      this.walkInterval = setInterval(animateEnter, 32);
    }
  }.bind(this);
  var animateEnter = function () {
    this.squareEnter += 1;
    if (this.frame < this.sprite.image.length - 1) {
      this.frame += 1;
    } else {
      this.frame = 0;
    }
    if (!this.bounced) {
      this.offset.x += x*16;
      this.offset.y += y*4;
    } else {
      this.offset.x -= x*16;
      this.offset.y -= y*4;
    }
    this.game.render();
    if (this.squareEnter > 3) {
      clearInterval(this.walkInterval);
      this.offset.x = this.offset.y = 0;
      this.walking = false;
      if (!this.checkIfStillWalking(x, y)) {
        this.setDirectionalSprite(x, y, 'standing');
      }
      this.game.render();
    }
  }.bind(this);
  this.checkIfMovingOutsideViewport(x, y);
  this.walkInterval = setInterval(animateExit, 32);
};

Player.prototype.setDirectionalSprite = function (x, y, type) {
  if (x == 1) {
    this.sprite = this.sprites[type + 'Right'];
  } else if (x == -1) {
    this.sprite = this.sprites[type + 'Left'];
  } else if (y == 1) {
    this.sprite = this.sprites[type + 'Down'];
  } else if (y == -1) {
    this.sprite = this.sprites[type + 'Up'];
  }
};

Player.prototype.checkIfMovingOutsideViewport = function (x, y) {
  if (this.square.x + x < this.game.viewport.origin.x) {
    this.game.viewport.shift(-1, 0);
  } else if (this.square.x + x > this.game.viewport.origin.x + 11) {
    this.game.viewport.shift(1, 0);
  } else if (this.square.y + y < this.game.viewport.origin.y) {
    this.game.viewport.shift(0, -1);
  } else if (this.square.y + y > this.game.viewport.origin.y + 11) {
    this.game.viewport.shift(0, 1);
  }
};

Player.prototype.checkIfStillWalking = function (x, y) {
  var walking = false;
  if (x == 1) {
    if (this.rightPressed) {
      this.walk(x, y);
      walking = true;
    }
  } else if (x == -1) {
    if (this.leftPressed) {
      this.walk(x, y);
      walking = true;
    }
  } else if (y == 1) {
    if (this.downPressed) {
      this.walk(x, y);
      walking = true;
    }
  } else if (y == -1) {
    if (this.topPressed) {
      this.walk(x, y);
      walking = true;
    }
  }
  return walking;
};

Player.prototype.changeSquare = function (x, y) {
  var moved = false;
  if (!this.square.fetch(this.square.x + x, this.square.y + y).content) {
    this.offset.x = this.offset.x * -1;
    this.offset.y = this.offset.y * -1;
    this.square.content = false;
    this.square.fetch(this.square.x + x, this.square.y + y).content = this;
    this.square = this.square.fetch(this.square.x + x, this.square.y + y);
    moved = true;
  } else {
    this.bounced = true;
  }
  this.game.advance();
  return moved;
};

module.exports = Player;

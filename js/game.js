console.log('Enter, spaceman.');

// 1. REQUIRE DEPENDENCIES //
var Spaceman = require('./spaceman.js');
var Ground = require('./ground.js');
var Board = require('./board.js');
var Tile = require('./tile.js');
var objects = require('./objects.js');

// 2. INITIALIZE CANVAS //
var initializeCanvas = function () {
  var canvas; var ctx;
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext('2d');
  this.canvas = canvas;
  this.ctx = ctx;
  ctx.globalAlpha = 1;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  window.time = 0;
};

// 3. DEFINE PIXEL //
var Pixel = function (x,y) {
  this.hex = '#000';
  this.x = x;
  this.y = y;
};

// 4. POPULATE PIXELGRAPH //
var screen = {
  x: 180,
  y: 120,
  pixels: [],
};

var populatePixels = function () {
  var x; var y; var ctx; var row;
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  for (y=0 ; y<screen.y ; y++) {
    row = [];
    for (x=0 ; x<screen.x ; x++) {
      row.push(new Pixel (x, y, ctx));
    }
    screen.pixels.push(row);
  }
};

// 5. RENDER PIXELS //
var renderPixels = function () {
  var x; var y; var pixel; var obj;
  for (y=0 ; y<screen.pixels.length ; y++) {
    for (x=0 ; x<screen.pixels[0].length ; x++) {
      pixel = screen.pixels[y][x];
      ctx.fillStyle = pixel.hex;
      ctx.fillRect(pixel.x*4, pixel.y*4, 4, 4);
      // pixel.hex = '#000';
    }
  }
};

// 6. INITIALIZE PLAYER //
var initializePlayer = function () {
  var player = new Spaceman ();
  // Initialize player key controls
  window.onkeydown = function (event) {
    if (event.keyCode === 39) {
      player.walkRight();
      player.rightKeyDown = true;
    } else if (event.keyCode == 37) {
      player.walkLeft();
      player.leftKeyDown = true;
    } else if (event.keyCode == 40) {
      player.walkDown();
      player.downKeyDown = true;
    } else if (event.keyCode == 38) {
      player.walkUp();
      player.upKeyDown = true;
    }
  };
  window.onkeyup = function (event) {
    if (event.keyCode === 39) {
      player.rightKeyDown = false;
    } else if (event.keyCode == 37) {
      player.leftKeyDown = false;
    } else if (event.keyCode == 40) {
      player.downKeyDown = false;
    } else if (event.keyCode == 38) {
      player.upKeyDown = false;
    }
  };
  return player;
};

var initializeBoard = function (player) {
  var board = new Board (6, 6);
  board.matrix[5][5] = new Tile (8, 8, 4, 2, screen);
  board.matrix[5][5].receiveObject(player, 3, 3);
  board.player = player;
  player.board = board.matrix;
  player.tile = board.matrix[5][5];
  player.square = board.matrix[5][5].matrix[3][3];
  board.dealCards();
  return board;
};

// 7. START GAME //
window.onload = function () {
  initializeCanvas();
  populatePixels();
  var player = initializePlayer();
  var board = initializeBoard(player);
  board.player.tile.init();
  window.setInterval(function () {
    player.tile.act();
    player.tile.draw();
    renderPixels();
  }, 36);
};

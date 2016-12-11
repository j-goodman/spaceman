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
      pixel.hex = '#000';
    }
  }
};

// 6. INITIALIZE PLAYER //
var initializePlayer = function () {
  var x;
  for (y=0 ; y<14 ; y++) {
    for (x=0 ; x<15 ; x++) {
      objects.push(new Ground (x*12, 36+y*6), ['terrain']);
    }
  }
  var player = new Spaceman ();
  objects.push(player, ['people']);
  window.onkeydown = function (event) {
    if (event.keyCode === 39) {
      player.walkLateral(1);
      player.rightKeyDown = true;
    } else if (event.keyCode == 37) {
      player.walkLateral(-1);
      player.leftKeyDown = true;
    } else if (event.keyCode == 40) {
      player.walkVertical(1);
      player.downKeyDown = true;
    } else if (event.keyCode == 38) {
      player.walkVertical(-1);
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
  board.matrix[4][2] = new Tile (8, 8);
  board.matrix[4][2].receiveObject(player, 5, 5);
  player.board = board.matrix;
  player.tile = board.matrix[4][2];
  player.square = board.matrix[4][2].matrix[5][5];
  board.dealCards();
  return board;
};

// 7. START GAME //
window.onload = function () {
  initializeCanvas();
  populatePixels();
  var player = initializePlayer();
  var board = initializeBoard(player);
  window.setInterval(function () {
    for (i=0 ; i<objects.all.length ; i++) {
      obj = objects.index[objects.all[i]];
      if (obj.act) { obj.act(); }
      if (obj.draw) { obj.draw(screen); }
    }
    renderPixels();
  }, 36);
};

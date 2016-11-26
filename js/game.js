console.log('Enter, spaceman.');

// 1. REQUIRE DEPENDENCIES //
var Spaceman = require('./spaceman.js');
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
  x: 120,
  y: 80,
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
      ctx.fillRect(pixel.x*6, pixel.y*6, 6, 6);
      pixel.hex = '#000';
    }
  }
};

// 6. INITIALIZE WORLD //
var initializeWorld = function () {
  var player = new Spaceman ();
  objects.push(player, ['people']);
  window.onkeydown = function (event) {
    if (event.keyCode === 39) {
      player.walk(1);
    } else if (event.keyCode == 37) {
      player.walk(-1);
    } else if (event.keyCode == 40) {
      player.facing = 'down';
    }
  };
};

// 7. START GAME //
window.onload = function () {
  initializeCanvas();
  populatePixels();
  initializeWorld();
  window.setInterval(function () {
    for (i=0 ; i<objects.all.length ; i++) {
      obj = objects.index[objects.all[i]];
      if (obj.act) { obj.act(); }
      if (obj.draw) { obj.draw(screen); }
    }
    renderPixels();
  }, 32);
};

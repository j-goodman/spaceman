console.log("Enter, spaceman.");

// 1. REQUIRE DEPENDENCIES //
var Player = require('./player.js');
var Planet = require('./planet.js');
var Square = require('./square.js');
var Viewport = require('./viewport.js');
var Game = {};

// 2. INITIALIZE CANVAS //
var initializeCanvas = function () {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  window.time = 0;
};

// 3. SETUP GAME WORLD //
var setupWorld = function () {
  Game.planet = new Planet ();
  var spawnSquare = Game.planet.map[50][50];
  Game.player = new Player (spawnSquare);
  Game.viewport = new Viewport (Game.planet, 45, 45);
  spawnSquare.content = Game.player;
};

window.onload = function () {
  initializeCanvas();
  setupWorld();
  var interval = function () {
    Game.viewport.render(ctx);
  };
  setInterval(interval, 32);
};

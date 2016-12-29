console.log("Enter, spaceman.");

// 1. REQUIRE DEPENDENCIES //
var Player = require('./player.js');
var Spaceship = require('./spaceship.js');
var Rock = require('./rock.js');
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
  Game.viewport = new Viewport (Game, Game.planet, 0, 0);
  var spawnSquare = {content: true};
  while (spawnSquare.content) {
    spawnSquare = Game.planet.map[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)];
  }
  Game.player = new Player (Game, spawnSquare);
  var spaceshipSquare = {content: true};
  while (spaceshipSquare.content) {
    spaceshipSquare = Game.planet.map[Math.floor(Math.random() * 7 + 2)][Math.floor(Math.random() * 7 + 2)];
  }
  var spaceship = new Spaceship (spaceshipSquare, Game.planet);
  var rockSquare; var rock;
  for (var i=0 ; i<240 ; i++) {
    rockSquare = Game.planet.map[Math.round(Math.random() * 130)][Math.round(Math.random() * 130)];
    if (!rockSquare.content) {
      rock = new Rock (rockSquare, Game.planet.rocks);
    }
  }
  spawnSquare.content = Game.player;
};

// 4. DEFINE GAME FUNCTIONS //
Game.advance = function () {
  this.viewport.render(ctx);
  this.planet.time += 1;
  if (this.planet.time > 480) {
    this.planet.time = 0;
  }
};

Game.render = function () {
  this.viewport.render(ctx);
};

window.onload = function () {
  initializeCanvas();
  setupWorld();
  Game.advance();
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	console.log("Enter, spaceman.");
	
	// 1. REQUIRE DEPENDENCIES //
	var Player = __webpack_require__(3);
	var Planet = __webpack_require__(1);
	var Square = __webpack_require__(2);
	var Viewport = __webpack_require__(4);
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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Square = __webpack_require__(2);
	
	var Planet = function () {
	  this.map = [];
	  this.generate();
	};
	
	Planet.prototype.generate = function () {
	  var y; var x;
	  for (y=0 ; y<144 ; y++) {
	    this.map.push([]);
	    for (x=0 ; x<144 ; x++) {
	      this.map[y].push(new Square (x, y));
	    }
	  }
	};
	
	module.exports = Planet;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var Square = function (x, y) {
	  this.x = x;
	  this.y = y;
	  this.content = false;
	  this.dirtColor = '#b79';
	};
	
	Square.prototype.render = function (ctx, viewOrigin) {
	  ctx.fillStyle = this.dirtColor;
	  if (this.content) {
	    ctx.fillStyle = '#4ac';
	  }
	  ctx.fillRect((this.x - viewOrigin.x) * 60, (this.y - viewOrigin.y) * 28 + 142, 60, 28);
	  if (this.content.sprite) {
	    this.content.sprite.draw({x: (this.x - viewOrigin.x) * 60 + (60 - this.content.sprite.width * 3) / 2, y: (this.y - viewOrigin.y) * 28 + 142 + 15}, ctx);
	  }
	};
	
	module.exports = Square;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var sprites = {
	  standingDown: __webpack_require__(5),
	};
	
	var Player = function (square) {
	  this.square = square;
	  this.sprite = sprites.standingDown;
	};
	
	module.exports = Player;


/***/ },
/* 4 */
/***/ function(module, exports) {

	var Viewport = function (planet, x, y) {
	  this.origin = {
	    x: x,
	    y: y,
	  };
	  this.planet = planet;
	  this.squares = [];
	  this.populateSquares();
	};
	
	Viewport.prototype.populateSquares = function () {
	  var x; var y;
	  for (y=0 ; y<12 ; y++) {
	    this.squares.push([]);
	    for (x=0 ; x<12 ; x++) {
	      this.squares[y].push(this.planet.map[this.origin.y+y][this.origin.x+x]);
	    }
	  }
	};
	
	Viewport.prototype.render = function (ctx) {
	  var x; var y;
	  for (y=0 ; y<12 ; y++) {
	    for (x=0 ; x<12 ; x++) {
	      this.squares[y][x].render(ctx, this.origin);
	    }
	  }
	};
	
	module.exports = Viewport;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Sprite = __webpack_require__(6);
	
	var image = [
	[
	[""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/],
	[""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/],
	[""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff","#fff",""/**/,""/**/,""/**/],
	[""/**/,"#fff",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#fff",""/**/,""/**/],
	["#fff",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#fff",""/**/],
	["#fff",""/**/,""/**/,"#720","#720","#720","#720","#720",""/**/,""/**/,"#fff",""/**/],
	["#fff",""/**/,""/**/,"#fff","#478","#720","#fff","#478",""/**/,""/**/,"#fff",""/**/],
	["#fff",""/**/,"#620","#fff","#478","#720","#fff","#478","#620",""/**/,"#fff",""/**/],
	["#fff",""/**/,"#520","#720","#720","#520","#720","#720","#520",""/**/,"#fff",""/**/],
	["#fff",""/**/,""/**/,"#720","#520","#520","#520","#720",""/**/,""/**/,"#fff",""/**/],
	[""/**/,"#fff",""/**/,""/**/,"#720","#720","#720",""/**/,""/**/,"#fff",""/**/,""/**/],
	[""/**/,""/**/,"#fff","#fff","#fff","#88f","#fff","#fff","#fff",""/**/,""/**/,""/**/],
	[""/**/,"#88f","#fff","#fff","#fff","#88f","#fff","#fff","#fff","#88f",""/**/,""/**/],
	["#88f","#fff","#fff","#fff","#fff","#88f","#fff","#fff","#fff","#fff","#88f",""/**/],
	["#88f","#fff","#88f","#fff","#fff","#88f","#fff","#fff","#88f","#fff","#88f",""/**/],
	["#88f","#fff","#88f","#fff","#fff","#88f","#fff","#fff","#88f","#fff","#88f",""/**/],
	["#88f","#fff","#88f","#fff","#fff","#88f","#fff","#fff","#88f","#fff","#88f",""/**/],
	["#88f","#88f","#88f","#fff","#fff","#88f","#fff","#fff","#88f","#88f","#88f",""/**/],
	[""/**/,""/**/,"#88f","#fff","#fff","#88f","#fff","#fff","#88f",""/**/,""/**/,""/**/],
	[""/**/,""/**/,"#88f","#fff","#88f",""/**/,"#88f","#fff","#88f",""/**/,""/**/,""/**/],
	[""/**/,""/**/,"#88f","#fff","#88f",""/**/,"#88f","#fff","#88f",""/**/,""/**/,""/**/],
	[""/**/,""/**/,"#88f","#fff","#88f",""/**/,"#88f","#fff","#88f",""/**/,""/**/,""/**/],
	[""/**/,""/**/,"#88f","#fff","#88f",""/**/,"#88f","#fff","#88f",""/**/,""/**/,""/**/],
	[""/**/,""/**/,"#88f","#88f","#88f",""/**/,"#88f","#88f","#88f",""/**/,""/**/,""/**/]
	]
	];
	
	var sprite = new Sprite (image);
	
	module.exports = sprite;


/***/ },
/* 6 */
/***/ function(module, exports) {

	var Sprite = function (image) {
	  this.image = image;
	  this.height = this.image[0].length;
	  this.width = this.image[0][0].length;
	  this.frame = 0;
	};
	
	Sprite.prototype.draw = function (leftFootPos, ctx) {
	  var x; var y; var pixel = 3;
	  var topLeftPos = {
	    x: leftFootPos.x,
	    y: leftFootPos.y - this.height * pixel,
	  };
	  for (y=0 ; y<this.height ; y++) {
	    for (x=0 ; x<this.width ; x++) {
	      if (this.image[this.frame][y][x]) {
	        ctx.fillStyle = this.image[this.frame][y][x];
	        ctx.fillRect(topLeftPos.x + x * pixel, topLeftPos.y + y * pixel, pixel, pixel);
	      }
	    }
	  }
	};
	
	module.exports = Sprite;


/***/ }
/******/ ]);
//# sourceMappingURL=spaceman.js.map
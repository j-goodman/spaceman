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

	console.log('Enter, spaceman.');
	
	// 1. REQUIRE DEPENDENCIES //
	var Spaceman = __webpack_require__(1);
	var objects = __webpack_require__(4);
	
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
	};
	
	// 7. START GAME //
	window.onload = function () {
	  initializeCanvas();
	  populatePixels();
	  initializeWorld();
	  window.setInterval(function () {
	    for (i=0 ; i<objects.all.length ; i++) {
	      obj = objects.index[objects.all[i]];
	      if (obj.draw) { obj.draw(screen); }
	      if (obj.act) { obj.act(); }
	    }
	    renderPixels();
	  }, 32);
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Sprite = __webpack_require__(2);
	var sprites = {
	  standing: __webpack_require__(3),
	};
	
	var Spaceman = function () {
	  this.pos = {
	    x: 60,
	    y: -24,
	  };
	  this.sprite = new Sprite (sprites.standing);
	};
	
	Spaceman.prototype.draw = function (screen) {
	  this.sprite.draw(screen, this.pos);
	};
	
	Spaceman.prototype.act = function () {
	  if (this.pos.y < 50) {
	    this.pos.y += 1;
	  }
	};
	
	module.exports = Spaceman;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var Sprite = function (image) {
	  this.image = image;
	  this.height = this.image.length;
	  this.width = this.image[0].length;
	};
	
	Sprite.prototype.draw = function (screen, pos) {
	  var x; var y;
	  for (y=0 ; y<this.height ; y++) {
	    for (x=0 ; x<this.width ; x++) {
	      if (this.image[y][x] && screen.pixels[pos.y+y] && screen.pixels[pos.y+y][pos.x+x]) {
	        screen.pixels[pos.y+y][pos.x+x].hex = this.image[y][x];
	      }
	    }
	  }
	};
	
	module.exports = Sprite;


/***/ },
/* 3 */
/***/ function(module, exports) {

	var s;
	s=[[''/**/,''/**/,''/**/,''/**/,''/**/,''/**/,''/**/,''/**/,''/**/,''/**/,''/**/,''/**/],
	   [''/**/,''/**/,''/**/,''/**/,''/**/,''/**/,''/**/,''/**/,''/**/,''/**/,''/**/,''/**/],
	   [''/**/,''/**/,'#fff','#fff','#fff','#fff','#fff','#fff',''/**/,''/**/,''/**/,''/**/],
	   [''/**/,'#fff',''/**/,''/**/,''/**/,''/**/,''/**/,''/**/,'#fff',''/**/,''/**/,''/**/],
	   ['#fff',''/**/,''/**/,''/**/,''/**/,''/**/,''/**/,''/**/,''/**/,'#fff',''/**/,''/**/],
	   ['#fff',''/**/,''/**/,'#720','#720','#720','#720',''/**/,''/**/,'#fff',''/**/,''/**/],
	   ['#fff',''/**/,''/**/,'#720','#fff','#478','#720',''/**/,''/**/,'#fff',''/**/,''/**/],
	   ['#fff',''/**/,''/**/,'#720','#fff','#478','#720','#720',''/**/,'#fff',''/**/,''/**/],
	   ['#fff',''/**/,''/**/,'#720','#720','#720','#720','#720',''/**/,'#fff',''/**/,''/**/],
	   ['#fff',''/**/,''/**/,'#720','#720','#720','#720',''/**/,''/**/,'#fff',''/**/,''/**/],
	   [''/**/,'#fff',''/**/,'#720','#720',''/**/,''/**/,''/**/,'#fff',''/**/,''/**/,''/**/],
	   [''/**/,''/**/,'#fff','#fff','#fff','#fff','#fff','#fff',''/**/,''/**/,''/**/,''/**/],
	   [''/**/,''/**/,'#fff','#88f','#fff','#fff','#fff',''/**/,''/**/,''/**/,''/**/,''/**/],
	   [''/**/,''/**/,'#fff','#88f','#fff','#88f','#fff',''/**/,''/**/,''/**/,''/**/,''/**/],
	   [''/**/,''/**/,'#fff','#88f','#fff','#88f','#fff',''/**/,''/**/,''/**/,''/**/,''/**/],
	   [''/**/,''/**/,'#fff','#88f','#fff','#88f','#fff',''/**/,''/**/,''/**/,''/**/,''/**/],
	   [''/**/,''/**/,'#fff','#88f','#fff','#88f','#fff',''/**/,''/**/,''/**/,''/**/,''/**/],
	   [''/**/,''/**/,'#fff','#88f','#fff','#88f','#fff',''/**/,''/**/,''/**/,''/**/,''/**/],
	   [''/**/,''/**/,'#fff','#88f','#88f','#fff','#fff',''/**/,''/**/,''/**/,''/**/,''/**/],
	   [''/**/,''/**/,''/**/,'#fff','#fff','#fff',''/**/,''/**/,''/**/,''/**/,''/**/,''/**/],
	   [''/**/,''/**/,''/**/,'#88f','#88f','#88f',''/**/,''/**/,''/**/,''/**/,''/**/,''/**/],
	   [''/**/,''/**/,''/**/,'#88f','#fff','#88f',''/**/,''/**/,''/**/,''/**/,''/**/,''/**/],
	   [''/**/,''/**/,''/**/,'#88f','#fff','#88f',''/**/,''/**/,''/**/,''/**/,''/**/,''/**/],
	   [''/**/,''/**/,''/**/,'#88f','#88f','#88f',''/**/,''/**/,''/**/,''/**/,''/**/,''/**/]];
	module.exports = s;


/***/ },
/* 4 */
/***/ function(module, exports) {

	var Objects;
	
	Objects = {
	  index: {},
	  people: [],
	  all: [],
	  count: -1,
	};
	
	Objects.push = function (obj, classes) {
	  var oo;
	  this.count++;
	  this.index[this.count] = obj;
	  obj.id = this.count;
	  this.all.push(obj.id);
	  for (oo=0 ; oo<classes.length ; oo++) {
	    this[classes[oo]].push(obj.id);
	  }
	};
	
	module.exports = Objects;


/***/ }
/******/ ]);
//# sourceMappingURL=spaceman.js.map
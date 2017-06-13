/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var audioPath = "demo1Assets/audio/";
var picsPath = "demo1Assets/pics/";
var customConfig = {
	pics: {
		cloud: {
			key: "cloud",
			url: picsPath + "cloud.jpg"
		},
		city1: {
			key: "city1",
			url: picsPath + "city1.png"
		},
		city2: {
			key: "city2",
			url: picsPath + "city2.png"
		},
		ground: {
			key: "ground",
			url: picsPath + "ground.png"
		},
		playerBody: {
			key: "pink",
			url: picsPath + "pink.png",
			defaultKey: "playerBody",
			defaultUrl: picsPath + "playerBody.png"
		},
		playerBullet: {
			key: "pink",
			url: picsPath + "pink.png",
			defaultKey: "playerBullet",
			defaultUrl: picsPath + "playerBullet.png"
		},
		enemyBody: {
			key: "pink",
			url: picsPath + "pink.png",
			defaultKey: "enemyBody",
			defaultUrl: picsPath + "enemyBody.png"
		},
		enemyBullet: {
			key: "pink",
			url: picsPath + "pink.png",
			defaultKey: "enemyBullet",
			defaultUrl: picsPath + "enemyBullet.png"
		},
		tree: {
			key: "pink",
			url: picsPath + "pink.png",
			defaultKey: "tree",
			defaultUrl: picsPath + "tree.png"
		},
		pink: {
			key: "pink",
			url: picsPath + "pink.png"
		},
		go: {
			key: "go",
			url: picsPath + "go.png"
		},
		replay: {
			key: "replay",
			url: picsPath + "replay.png"
		}
	},
	audio: {
		playerShot: {
			key: "playerShot",
			url: audioPath + "playerShot.mp3"
		},
		playerExplode: {
			key: "playerExplode",
			url: audioPath + "playerExplode.mp3"
		},
		enemyShot: {
			key: "enemyShot",
			url: audioPath + "enemyShot.wav"
		},
		enemyExplode: {
			key: "enemyExplode",
			url: audioPath + "enemyExplode.wav"
		},
		hitGround: {
			key: "hitGround",
			url: audioPath + "hitGround.mp3",
			url1: audioPath + "hitGround.ogg"
		}
	},
	flag: {
		onDown: false,
		canMove: false,
		checkStop: false,
		emergency: false
	},
	common: {
		enemyTreeX: 600,
		scrollSpeed: -5
	}

};

exports.default = customConfig;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _customConfig = __webpack_require__(0);

var _customConfig2 = _interopRequireDefault(_customConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //import Phaser from "phaser";


var Boot = function (_Phaser$State) {
	_inherits(Boot, _Phaser$State);

	function Boot() {
		_classCallCheck(this, Boot);

		return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).apply(this, arguments));
	}

	_createClass(Boot, [{
		key: "preload",
		value: function preload() {
			this.game.state.backgroundColor = 0x213456;
			this.load.image(_customConfig2.default.pics.go.key, _customConfig2.default.pics.go.url);
		}
	}, {
		key: "create",
		value: function create() {
			//this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			//this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
			this.scale.pageAlignHorizontally = true;
			this.scale.refresh();
			//this.game.scale.onOrientationChange.add(this.resize, this);
			//this.scale.forcePortrait = true;
			//this.scale.forceLandscape = true;
			this.state.start("Preload");
			console.log(this.scale.pageAlignHorizontally);
			console.log(this.game.width);
			console.log(this.game.camera.width);
		}
	}, {
		key: "resize",
		value: function resize() {
			if (this.game.scale.isLandscape) {
				//console.log("contentW0: "+document.getElementById('content').style.width, "\ncontentH0: "+document.getElementById('content').style.width);
				//document.getElementById('content').style.width = document.body.clientWidth + 'px';
				//document.getElementById('content').style.height = document.body.clientHeight + 'px';
				//this.game.scale.setGameSize(this.game.width+100, this.game.height);
				//console.log(this.game.width, this.game.height);
				//console.log("isLandscape");
				//console.log("W: "+document.body.clientWidth, "H: "+document.body.clientHeight);
				//console.log("contentW: "+document.getElementById('content').style.width, "\ncontentH: "+document.getElementById('content').style.width);
			} else if (this.game.scale.isPortrait) {
				//console.log("contentW0: "+document.getElementById('content').style.width, "\ncontentH0: "+document.getElementById('content').style.width);
				//console.log(this.game.width, this.game.height);
				//document.getElementById('content').style.width = document.body.clientWidth + 'px';
				//document.getElementById('content').style.height = document.body.clientHeight + 'px';
				//console.log("isPortrait");
				//console.log("W: "+document.body.clientWidth, "H: "+document.body.clientHeight);
				//console.log("contentW: "+document.getElementById('content').style.width, "\ncontentH: "+document.getElementById('content').style.width);
			}
		}
	}]);

	return Boot;
}(Phaser.State);

exports.default = Boot;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _customConfig = __webpack_require__(0);

var _customConfig2 = _interopRequireDefault(_customConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //import Phaser from "phaser";


var Menu = function (_Phaser$State) {
	_inherits(Menu, _Phaser$State);

	function Menu() {
		_classCallCheck(this, Menu);

		var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this));

		_this.flagShowBtnStart = true;
		return _this;
	}

	_createClass(Menu, [{
		key: "create",
		value: function create() {
			//console.log("menu create");
			this.btnStart = this.add.button(this.game.world.centerX, this.game.world.centerY, _customConfig2.default.pics.go.key, this.startGame, this);
			this.btnStart.anchor.set(0.5);
			this.btnStart.scale.set(0.5);
			this.btnStart.visible = this.flagShowBtnStart;

			this.btnReplay = this.add.button(this.game.world.centerX, this.game.world.centerY + 100, _customConfig2.default.pics.replay.key, this.startGame, this);
			this.btnReplay.anchor.set(0.5);
			this.btnReplay.scale.set(0.5);
			this.btnReplay.visible = !this.flagShowBtnStart;
			this.game.add.tween(this.btnStart.scale).to({ x: 0.6, y: 0.6 }, 1000, Phaser.Easing.BounceInOut, true, 0, -1, true);
			this.game.add.tween(this.btnReplay.scale).to({ x: 0.6, y: 0.6 }, 1000, Phaser.Easing.BounceInOut, true, 0, -1, true);
		}
	}, {
		key: "startGame",
		value: function startGame() {
			//console.log("menu start play");
			this.state.start("Play");
			this.flagShowBtnStart = false;
			//console.log("menu finish starting play");
		}
	}]);

	return Menu;
}(Phaser.State);

exports.default = Menu;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _customConfig = __webpack_require__(0);

var _customConfig2 = _interopRequireDefault(_customConfig);

var _player = __webpack_require__(6);

var _player2 = _interopRequireDefault(_player);

var _enemy = __webpack_require__(5);

var _enemy2 = _interopRequireDefault(_enemy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //import Phaser from "phaser";


var Play = function (_Phaser$State) {
	_inherits(Play, _Phaser$State);

	function Play() {
		_classCallCheck(this, Play);

		return _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).apply(this, arguments));
	}

	_createClass(Play, [{
		key: "create",
		value: function create() {
			this.game.physics.startSystem(Phaser.Physics.ARCADE);
			this.game.stage.backgroundColor = '#a8e6ff';

			this.cloud = this.add.tileSprite(0, 0, 2079, 851, 'cloud');
			this.cloud.fixedToCamera = true;
			this.city1 = this.add.tileSprite(0, 0, 1798, 359, 'city1');
			this.city1.position.set(0, this.game.world.height - this.city1.height + 50);
			this.city1.fixedToCamera = true;
			//this.city2 = this.add.tileSprite(0,0,1353,580,'city2');
			this.city2 = this.add.tileSprite(0, 0, 1500, 580, 'city2');
			this.city2.position.set(0, this.game.world.height - this.city2.height + 70);
			this.city2.fixedToCamera = true;
			this.ground = this.add.tileSprite(0, 0, 1000, 32, "ground");
			this.ground.scale.set(2);
			this.ground.position.set(0, this.game.world.height - this.ground.height * 2);
			this.game.physics.arcade.enable(this.ground);
			this.ground.body.immovable = true;
			this.ground.body.allowGravity = false;

			this.setEnemyTreeX();
			this.player = new _player2.default(this.game, this.game.width * 0.22, this.game.world.centerY, null, this.ground);
			this.enemy = new _enemy2.default(this.game, _customConfig2.default.common.enemyTreeX, 0, this.player, this.ground);
			this.player.setEnemy(this.enemy);
			this.enemy.setEnemyLaunchSpeed(this.player.playerBody.x, this.enemy.enemyBody.x);
		}
	}, {
		key: "goFullScreen",
		value: function goFullScreen() {
			this.game.scale.pageAlignHorizontally = true;
			this.game.scale.pageAlignVertically = true;
			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		}

		/*
  setEnemyTreeX(){
  	if(customConfig.common.enemyTreeX < this.game.camera.width*0.75 && this.game.camera.width*0.75 < customConfig.common.enemyTreeX+250){
  customConfig.common.enemyTreeX = this.game.camera.width*0.75;	
  console.log("setEnemyTreeX if-----------")		;
  //customConfig.common.enemyTreeX = this.game.camera.width*0.75+this.game.rnd.realInRange(-200, 200);			
  }else if(customConfig.common.enemyTreeX+250 <= this.game.camera.width*0.75){
  customConfig.common.enemyTreeX += 250;
  console.log("setEnemyTreeX else------------")
  //customConfig.common.enemyTreeX += 250+this.game.rnd.realInRange(-300, 300);
  }
  }
  */

	}, {
		key: "setEnemyTreeX",
		value: function setEnemyTreeX() {
			if (_customConfig2.default.common.enemyTreeX < this.game.camera.width * 0.75) {
				_customConfig2.default.common.enemyTreeX = this.game.camera.width * 0.75;
			}
		}
	}, {
		key: "update",
		value: function update() {
			this.player.update();
			this.enemy.update();
			this.cloud.autoScroll(_customConfig2.default.common.scrollSpeed * 10, 0);
			if (_customConfig2.default.flag.canMove) {
				this.city1.autoScroll(_customConfig2.default.common.scrollSpeed * 20, 0);
				this.city2.autoScroll(_customConfig2.default.common.scrollSpeed * 30, 0);
				this.ground.autoScroll(_customConfig2.default.common.scrollSpeed * 40, 0);
				this.enemy.enemyTree.body.velocity.x = _customConfig2.default.common.scrollSpeed * 80;
				this.enemy.enemyBody.body.velocity.x = _customConfig2.default.common.scrollSpeed * 80;
				if (this.enemy.enemyTree.x + this.enemy.enemyTree.width / 2 < this.game.camera.x) {
					this.enemy.enemyTree.reset(this.game.camera.x + this.game.camera.width + this.enemy.enemyTree.width, this.ground.y);
					this.enemy.enemyTree.scale.set(this.game.rnd.realInRange(0.12, 0.2), this.game.rnd.realInRange(0.2, 1.3));
					this.enemy.enemyBody.revive();
					this.enemy.enemyBody.position.set(this.enemy.enemyTree.x, this.enemy.enemyTree.y - this.enemy.enemyTree.height - this.enemy.enemyBody.height / 2);
					this.enemy.reviveEnemyBullet();
					_customConfig2.default.flag.checkStop = true;
					console.log("reset tree");
				}
				if (_customConfig2.default.flag.checkStop) {
					this.setEnemyTreeX();
					this.enemy.setEnemyLaunchSpeed(this.player.playerBody.x, this.enemy.enemyBody.x);
					if (this.enemy.enemyTree.x < _customConfig2.default.common.enemyTreeX + this.game.rnd.between(-30, 50)) {
						_customConfig2.default.flag.canMove = false;
						_customConfig2.default.flag.checkStop = false;
						this.city1.stopScroll();
						this.city2.stopScroll();
						this.ground.stopScroll();
						this.enemy.enemyTree.body.velocity.x = 0;
						this.enemy.enemyBody.body.velocity.x = 0;
						this.player.flagCoolDown = true;
					}
				}
			}
		}
	}, {
		key: "render",
		value: function render() {
			this.game.debug.text(this.enemy.enemyBody.x - this.player.playerBody.x, 20, 20);
			this.game.debug.text("enemy.launchSpeed:" + this.enemy.launchSpeed, 20, 40);
			this.game.debug.text("emergency:" + _customConfig2.default.flag.emergency, 20, 60);
			this.game.debug.text("gW:" + this.game.width, 20, 80);
			this.game.debug.text("gH:" + this.game.height, 20, 100);
			this.game.debug.text("gw/gh ratio:" + this.game.width / this.game.height, 20, 120);
			this.game.debug.text("cW:" + document.body.clientWidth, 20, 150);
			this.game.debug.text("cH:" + document.body.clientHeight, 20, 170);
			this.game.debug.text("cW/cH:" + document.body.clientWidth / document.body.clientHeight, 20, 190);
			this.game.debug.text("customConfig.treeX" + _customConfig2.default.common.enemyTreeX, 20, 300);
			this.game.debug.text("enemyBody.X" + this.enemy.enemyBody.x, 20, 320);
		}
	}]);

	return Play;
}(Phaser.State);

exports.default = Play;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _customConfig = __webpack_require__(0);

var _customConfig2 = _interopRequireDefault(_customConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //import Phaser from "phaser";


var Preload = function (_Phaser$State) {
	_inherits(Preload, _Phaser$State);

	function Preload() {
		_classCallCheck(this, Preload);

		return _possibleConstructorReturn(this, (Preload.__proto__ || Object.getPrototypeOf(Preload)).apply(this, arguments));
	}

	_createClass(Preload, [{
		key: "init",
		value: function init() {
			//console.log(this.game.cache._cache);

		}
	}, {
		key: "preload",
		value: function preload() {
			console.log("preload preload");
			//this.loaderBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, customConfig.pics.go.key);
			//this.loaderBar.anchor.setTo(0.5);
			//this.load.setPreloadSprite(this.loaderBar);
			this.textProgress = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "loading ...\n", { fill: "#ff0000", fontSize: 20 });
			this.textProgress.anchor.set(0.5);
			this.load.onFileComplete.add(this.fileComplete, this);
			this.load.onLoadComplete.add(this.loadComplete, this);
			console.log("preload preloadSprite");

			this.load.image(_customConfig2.default.pics.cloud.key, _customConfig2.default.pics.cloud.url);
			this.load.image(_customConfig2.default.pics.city1.key, _customConfig2.default.pics.city1.url);
			this.load.image(_customConfig2.default.pics.city2.key, _customConfig2.default.pics.city2.url);
			this.load.image(_customConfig2.default.pics.pink.key, _customConfig2.default.pics.pink.url);
			this.load.image(_customConfig2.default.pics.ground.key, _customConfig2.default.pics.ground.url);
			this.load.image(_customConfig2.default.pics.go.key, _customConfig2.default.pics.go.url);
			this.load.image(_customConfig2.default.pics.replay.key, _customConfig2.default.pics.replay.url);

			this.load.audio(_customConfig2.default.audio.enemyExplode.key, _customConfig2.default.audio.enemyExplode.url);
			this.load.audio(_customConfig2.default.audio.enemyShot.key, _customConfig2.default.audio.enemyShot.url);
			this.load.audio(_customConfig2.default.audio.playerExplode.key, _customConfig2.default.audio.playerExplode.url);
			this.load.audio(_customConfig2.default.audio.playerShot.key, _customConfig2.default.audio.playerShot.url);
			this.load.audio(_customConfig2.default.audio.hitGround.key, [_customConfig2.default.audio.hitGround.url, _customConfig2.default.audio.hitGround.url1]);
			console.log("preload finish preload");
			console.log(this.game.cache._cache);
		}
	}, {
		key: "create",
		value: function create() {
			console.log("preload create");
			//console.log(this.game.cache._cache);
			//this.state.start("Menu");
			console.log("preload finish create");
		}
	}, {
		key: "fileComplete",
		value: function fileComplete(progress) {
			this.textProgress.text = "loading ...\n" + progress + "%";
		}
	}, {
		key: "loadComplete",
		value: function loadComplete() {
			this.state.start("Menu");
		}
	}]);

	return Preload;
}(Phaser.State);

exports.default = Preload;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _customConfig = __webpack_require__(0);

var _customConfig2 = _interopRequireDefault(_customConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Enemy = function (_Phaser$Sprite) {
	_inherits(Enemy, _Phaser$Sprite);

	function Enemy(_game, _x, _y, _player, _ground) {
		_classCallCheck(this, Enemy);

		var _this = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, _game, _x, _y, _player, _ground));

		_this.game = _game;
		_this.x = _x;
		_this.y = _y;
		_this.player = _player;
		_this.ground = _ground;
		_this.enemyTree;
		_this.enemyBody;
		_this.enemyBullet;

		_this.launchSpeed = 800;
		_this.flagEnemyHoldBullet = true;
		_this.flagEnemyBulletMissedPlayer = false;

		_this.enemyTree = _this.game.add.sprite(0, 0, _customConfig2.default.pics.tree.key);
		_this.enemyTree.anchor.set(0.5, 1);
		//this.enemyTree.scale.set(0.15, 0.3+this.game.rnd.realInRange(0, 0.7));
		_this.enemyTree.scale.set(0.15, 0.3 + _this.game.rnd.realInRange(0, 1.2));
		_this.game.physics.arcade.enable(_this.enemyTree);
		_this.enemyTree.body.immovable = true; //穿透
		_this.enemyTree.body.allowGravity = false;
		//this.enemyTree.body.gravity.y = 200;

		_this.enemyTree.position.set(_this.x, _this.ground.y);

		_this.enemyBody = _this.game.add.sprite(0, 0, _customConfig2.default.pics.enemyBody.key);
		_this.enemyBody.anchor.set(0.5);
		_this.enemyBody.scale.set(0.1, 0.2);
		_this.game.physics.arcade.enable(_this.enemyBody);
		_this.enemyBody.body.allowGravity = true;
		_this.enemyBody.body.gravity.y = 500;
		_this.enemyBody.position.set(_this.enemyTree.x, _this.enemyTree.y - _this.enemyTree.height - _this.enemyBody.height / 2);

		_this.enemyBullet = _this.game.add.sprite(0, 0, _customConfig2.default.pics.enemyBullet.key);
		_this.enemyBullet.anchor.set(0, 0.5);
		_this.enemyBullet.scale.set(0.15, 0.01);
		_this.enemyBullet.angle = -180;
		_this.game.physics.arcade.enable(_this.enemyBullet);
		_this.enemyBullet.body.allowGravity = false;
		_this.enemyBullet.body.gravity.y = 500;
		_this.enemyBullet.checkWorldBounds = true;
		_this.enemyBullet.events.onOutOfBounds.add(_this.enemyBulletOutOfBounds, _this);
		_this.enemyBullet.position.set(_this.enemyBody.x, _this.enemyBody.y - _this.enemyBody.height / 2);

		_this.fxPlayerExplode = _this.game.add.audio(_customConfig2.default.audio.playerExplode.key);
		_this.fxEnemyShot = _this.game.add.audio(_customConfig2.default.audio.enemyShot.key);
		_this.fxHitGround = _this.game.add.audio(_customConfig2.default.audio.hitGround.key);
		console.log("new enemy");
		return _this;
	}

	_createClass(Enemy, [{
		key: "update",
		value: function update() {
			//this.game.physics.arcade.collide(this.enemyTree, this.ground);
			this.game.physics.arcade.collide(this.enemyBody, this.enemyTree);
			this.game.physics.arcade.collide(this.enemyBody, this.ground, this.enemyBodyHitGround, null, this);
			this.game.physics.arcade.collide(this.enemyBullet, this.player.playerBody, this.enemyBulletHitPlayerBody, null, this);
			this.game.physics.arcade.collide(this.enemyBullet, this.ground, this.enemyBulletHitGround, null, this);

			this.enemyBody.x = this.enemyTree.x;
			this.enemyBody.y = this.enemyTree.y - this.enemyTree.height - this.enemyBody.height / 2;
			if (this.flagEnemyHoldBullet) {
				this.enemyBullet.x = this.enemyBody.x;
				this.enemyBullet.y = this.enemyBody.y;
				if (_customConfig2.default.flag.emergency) {
					this.enemyBullet.rotation = this.game.physics.arcade.angleBetween(this.enemyBullet, this.player.playerBody);
				} else {
					this.enemyBullet.rotation = this.game.physics.arcade.angleBetween(this.enemyBullet, this.player.playerBody) + 0.2;
				}
			} else {
				if (!_customConfig2.default.flag.emergency) {
					this.changeAngle(-8);
				}
			}
			if (this.player.flagPlayerBulletMissedEnemy) {
				this.enemyLaunch();
			}
		}
	}, {
		key: "enemyBodyHitGround",
		value: function enemyBodyHitGround(enemyBody, ground) {
			if (this.flagEnemyHoldBullet) {
				enemyBody.position.set(this.enemyTree.x, this.enemyTree.y - this.enemyTree.height - this.enemyBody.height / 2);
				console.log("enemyBodyHitGround");
			}
		}
	}, {
		key: "enemyBulletHitPlayerBody",
		value: function enemyBulletHitPlayerBody(enemyBullet, playerBody) {
			enemyBullet.kill();
			playerBody.kill();
			this.player.playerBullet.kill();
			this.flagEnemyBulletMissedPlayer = false;
			if (_customConfig2.default.flag.emergency) {
				_customConfig2.default.flag.emergency = false;
			}
			this.fxPlayerExplode.play();
			this.game.time.events.add(200, this.gameOver, this);
			console.log("enemyBulletHitPlayerBody");
		}
	}, {
		key: "enemyBulletHitGround",
		value: function enemyBulletHitGround(enemyBullet, ground) {
			if (this.flagEnemyHoldBullet) {
				return;
			}
			this.flagEnemyBulletMissedPlayer = true;
			enemyBullet.kill();
			this.game.time.events.add(100, this.reviveEnemyBullet, this);
			_customConfig2.default.flag.emergency = true;
			this.fxHitGround.play();
			console.log("enemyBodyHitGround");
		}
	}, {
		key: "enemyLaunch",
		value: function enemyLaunch() {
			if (this.flagEnemyHoldBullet) {
				if (!_customConfig2.default.flag.emergency) {
					this.enemyBullet.rotation = this.game.physics.arcade.angleBetween(this.enemyBullet, this.player.playerBody) + 0.2;
					this.game.physics.arcade.velocityFromRotation(this.enemyBullet.rotation, this.launchSpeed, this.enemyBullet.body.velocity);
					this.enemyBullet.body.allowGravity = true;
				} else {
					this.enemyBullet.rotation = this.game.physics.arcade.angleBetween(this.enemyBullet, this.player.playerBody);
					this.game.physics.arcade.velocityFromRotation(this.enemyBullet.rotation, this.launchSpeed, this.enemyBullet.body.velocity);
					this.enemyBullet.body.allowGravity = false;
					console.log("emergency launch");
				}
				this.flagEnemyHoldBullet = false; //不加的话，转弯也要朝向player
				this.fxEnemyShot.play();
				console.log("enemyLaunch");
			}
		}
	}, {
		key: "enemyBulletOutOfBounds",
		value: function enemyBulletOutOfBounds(enemyBullet) {
			if (this.flagEnemyHoldBullet) {
				console.log("enemyBulletOutOfBounds, but,,,");
				return;
			}
			this.enemyBullet.kill();
			this.flagEnemyBulletMissedPlayer = true; //
			this.game.time.events.add(100, this.reviveEnemyBullet, this);
			_customConfig2.default.flag.emergency = true;
			this.fxHitGround.play();
			console.log("enemyBulletOutOfBounds");
		}
	}, {
		key: "reviveEnemyBullet",
		value: function reviveEnemyBullet() {
			this.enemyBullet.reset(this.enemyBody.x, this.enemyBody.y);
			this.enemyBullet.angle = -180;
			this.enemyBullet.body.allowGravity = false;
			this.flagEnemyHoldBullet = true;
			this.flagEnemyBulletMissedPlayer = false; //
			console.log("reviveEnemyBullet");
		}
	}, {
		key: "changeAngle",
		value: function changeAngle(p) {
			this.enemyBullet.rotation += p * 0.001;
		}
	}, {
		key: "gameOver",
		value: function gameOver() {
			this.game.state.start("Menu");
			console.log("gameOver");
		}
	}, {
		key: "setEnemyLaunchSpeed",
		value: function setEnemyLaunchSpeed(playerX, enemyX) {
			if (enemyX - playerX < 500) {
				this.launchSpeed = 750;
			} else {
				this.launchSpeed = 750 + (enemyX - playerX - 500) / 500 * 400;
				//this.launchSpeed =750+ (enemyX - playerX-500)/500*100;
			}
		}
	}]);

	return Enemy;
}(Phaser.Sprite);

exports.default = Enemy;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _customConfig = __webpack_require__(0);

var _customConfig2 = _interopRequireDefault(_customConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Phaser$Sprite) {
	_inherits(Player, _Phaser$Sprite);

	function Player(_game, _x, _y, _enemy, _ground) {
		_classCallCheck(this, Player);

		//Phaser.Sprite.call(this, _game, _x, _y);
		var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, _game, _x, _y, _enemy, _ground));

		_this.game = _game;
		_this.x = _x;
		_this.y = _y;
		_this.ground = _ground;
		_this.enemy = _enemy;
		_this.enemy;
		_this.playerBody;
		_this.playerBullet;

		_this.launchSpeed = 800;
		_this.flagRotate = -1;
		_this.flagPlayerHoldBullet = true;
		_this.flagPlayerBulletMissedEnemy = false;
		_this.flagCoolDown = true;

		_this.playerBody = _this.game.add.sprite(0, 0, _customConfig2.default.pics.playerBody.key);
		_this.playerBody.anchor.set(0.5);
		_this.playerBody.scale.set(0.1, 0.2);
		_this.playerBody.position.set(_this.x, _this.ground.y - 100);
		_this.game.physics.arcade.enable(_this.playerBody);
		_this.playerBody.body.gravity.y = 200;
		//this.playerBody.body.immovable = true;//穿透
		_this.playerBody.getPlayer = _this.getPlayer;
		//this.playerBody.checkWorldBounds = true;
		//this.playerBody.events.onOutOfBounds.add(this.playerBodyOutOfBounds, this);

		_this.playerBullet = _this.game.add.sprite(_this.playerBody.x, _this.playerBody.y, _customConfig2.default.pics.playerBullet.key);
		_this.playerBullet.anchor.set(0, 0.5);
		_this.playerBullet.scale.set(0.15, 0.01);
		_this.playerBullet.tint = 0xff0000;
		_this.game.physics.arcade.enable(_this.playerBullet);
		_this.playerBullet.body.gravity.y = 500;
		_this.playerBullet.body.allowGravity = false;
		_this.playerBullet.checkWorldBounds = true;
		_this.playerBullet.events.onOutOfBounds.add(_this.playerBulletOutOfBounds, _this);

		_this.game.input.onDown.add(_this.eventOnKeyDown, _this);
		_this.game.input.onUp.add(_this.eventOnKeyUp, _this);

		_this.fxPlayerShot = _this.game.add.audio(_customConfig2.default.audio.playerShot.key);
		_this.fxEnemyExplode = _this.game.add.audio(_customConfig2.default.audio.enemyExplode.key);
		_this.fxHitGround = _this.game.add.audio(_customConfig2.default.audio.hitGround.key);
		return _this;
	}

	_createClass(Player, [{
		key: "update",
		value: function update() {
			this.game.physics.arcade.collide(this.playerBody, this.ground, this.playerBodyHitGround, null, this);
			this.game.physics.arcade.collide(this.playerBullet, this.enemy.enemyBody, this.playerBulletHitEnemy, null, this);
			this.game.physics.arcade.collide(this.playerBullet, this.ground, this.playerBulletHitGround, null, this);
			if (this.flagPlayerHoldBullet) {
				this.playerBullet.x = this.playerBody.x;
				this.playerBullet.y = this.playerBody.y;
				if (_customConfig2.default.flag.onDown && this.flagCoolDown) {
					this.changeAngle(12 * this.flagRotate);
					if (this.playerBullet.angle < -90) {
						this.flagRotate = -this.flagRotate;
					}
					if (this.playerBullet.angle > 0) {
						this.flagRotate = -this.flagRotate;
					}
				}
			} else {
				this.changeAngle(11);
			}
			if (this.enemy.flagEnemyBulletMissedPlayer) {
				this.revivePlayerBullet();
				this.flagCoolDown = true;
			}
		}
	}, {
		key: "getPlayer",
		value: function getPlayer() {
			return this;
		}
	}, {
		key: "eventOnKeyDown",
		value: function eventOnKeyDown() {
			if (_customConfig2.default.flag.onDown) {
				console.log("eventOnKeyDown return!!!");
				return;
			}
			_customConfig2.default.flag.onDown = true;
			console.log("eventOnKeyDown");
		}
	}, {
		key: "eventOnKeyUp",
		value: function eventOnKeyUp() {
			if (_customConfig2.default.flag.onDown) {
				_customConfig2.default.flag.onDown = false;
				if (this.flagPlayerHoldBullet) {
					this.PlayerLaunch();
					//this.flagPlayerHoldBullet = false;
				}
				console.log("eventOnKeyUp");
			}
		}
	}, {
		key: "changeAngle",
		value: function changeAngle(p) {
			this.playerBullet.rotation += p * 0.001;
		}
	}, {
		key: "PlayerLaunch",
		value: function PlayerLaunch() {
			if (this.flagPlayerHoldBullet && this.flagCoolDown) {
				this.game.physics.arcade.velocityFromAngle(this.playerBullet.angle, this.launchSpeed, this.playerBullet.body.velocity);
				this.playerBullet.body.allowGravity = true;
				this.flagPlayerHoldBullet = false;
				this.flagCoolDown = false;
				this.fxPlayerShot.play();
				console.log("PlayerLaunch");
			}
		}
	}, {
		key: "playerBodyHitGround",
		value: function playerBodyHitGround(playerBody, ground) {
			playerBody.body.allowGravity = false;
			console.log("playerBodyHitGround");
		}
	}, {
		key: "playerBulletHitEnemy",
		value: function playerBulletHitEnemy(playerBullet, enemyBody) {
			playerBullet.kill();
			enemyBody.kill();
			this.enemy.enemyBullet.kill();
			this.revivePlayerBullet();
			_customConfig2.default.flag.canMove = true;
			if (_customConfig2.default.flag.emergency) {
				_customConfig2.default.flag.emergency = false;
			}
			this.fxEnemyExplode.play();
			console.log("playerBulletHitEnemy");
		}
	}, {
		key: "playerBulletHitGround",
		value: function playerBulletHitGround(playerBullet, ground) {
			if (this.flagPlayerHoldBullet) {
				return;
			}
			playerBullet.kill();
			this.flagPlayerBulletMissedEnemy = true;
			this.enemy.enemyLaunch();
			this.fxHitGround.play();
			console.log("playerBulletHitGround");
		}
	}, {
		key: "playerBulletOutOfBounds",
		value: function playerBulletOutOfBounds(playerBullet) {
			if (this.flagPlayerHoldBullet) {
				return;
			}
			playerBullet.kill();
			this.flagPlayerBulletMissedEnemy = true;
			this.enemy.enemyLaunch();
			this.fxHitGround.play();
			console.log("playerBulletOutOfBounds");
		}
	}, {
		key: "revivePlayerBullet",
		value: function revivePlayerBullet() {
			if (this.playerBullet.alive == true) {
				return;
			}
			this.playerBullet.reset(this.playerBody.x, this.playerBody.y);
			this.playerBullet.angle = 0;
			this.playerBullet.body.allowGravity = false;
			this.flagPlayerHoldBullet = true;
			this.flagPlayerBulletMissedEnemy = false;
			console.log("revivePlayerBullet");
		}
	}, {
		key: "setEnemy",
		value: function setEnemy(enemy) {
			this.enemy = enemy;
			console.log("setEnemy");
		}
	}, {
		key: "render",
		value: function render() {
			this.game.debug.text("flagPlayerHoldBullet: " + this.flagPlayerHoldBullet, 20, this.game.world.height - 20);
			this.game.debug.text("flagPlayerBulletMissedEnemy: " + this.flagPlayerBulletMissedEnemy, 20, this.game.world.height - 40);
			this.game.debug.text("this.playerBullet.alive: " + this.playerBullet.alive, 20, 60);
			this.game.debug.body(this.playerBody);
			this.game.debug.body(this.playerBullet);
		}
	}]);

	return Player;
}(Phaser.Sprite);

exports.default = Player;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _boot = __webpack_require__(1);

var _boot2 = _interopRequireDefault(_boot);

var _preload = __webpack_require__(4);

var _preload2 = _interopRequireDefault(_preload);

var _menu = __webpack_require__(2);

var _menu2 = _interopRequireDefault(_menu);

var _play = __webpack_require__(3);

var _play2 = _interopRequireDefault(_play);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Phaser from "phaser";
var gameBestWidth = 800;
var gameBestHeight = 600;

/*
var gameBestRatio = gameBestWidth / gameBestHeight;
// Get viewport ratio.
var viewport_w = window.innerWidth;
var viewport_h = window.innerHeight;
var viewportRatio = viewport_w / viewport_h;
var content = document.getElementById("content");
if(gameBestRatio > viewportRatio){
    // take viewport height as base value
    content.style.width  = viewport_w + "px";
    content.style.height = (viewport_w / gameBestRatio) + "px";
} else if(gameBestRatio < viewportRatio){
    // take viewport width as base value
    content.style.height = viewport_h + "px";
    content.style.width  = (viewport_h * gameBestRatio) + "px";
} 
*/
//-----------------------------------------------------------

/*
var game;
var flage;
goPC();
function goPC(){
	var userAgentInfo = navigator.userAgent;
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
	flage = true;

	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0){ 
			flage = false;
			break; 
		}
	}
  return flage;
}
if(flage){
  game = new Phaser.Game(800,592,Phaser.AUTO,'content');
}else{
  game = new Phaser.Game(Math.floor(window.innerWidth/16)*16,Math.floor(window.innerHeight/16)*16,Phaser.AUTO,'content');
}
*/
//----------------------------------------------------------------

/*
isLandscape, 
onOrientationChange()
screenOrientation
setResizeCallback()
setUserScale()
*/

//var gameBestRatio = gameBestWidth / gameBestHeight;
/*
var viewport_w = window.innerWidth;
var viewport_h = window.innerHeight;
var viewportRatio = viewport_w / viewport_h;

var content = document.getElementById("content");

if(gameBestRatio > viewportRatio){
    // take viewport height as base value
    content.style.width  = viewport_w + "px";
    content.style.height = (viewport_w / gameBestRatio) + "px";
} else if(gameBestRatio < viewportRatio){
    // take viewport width as base value
    content.style.height = viewport_h + "px";
    content.style.width  = (viewport_h * gameBestRatio) + "px";
} 
*/
//-------------------------------------------------------
//document.getElementById('content').style.width = document.body.clientWidth + 'px';
//document.getElementById('content').style.height = document.body.clientHeight + 'px';
var gameBestRatio = document.body.clientWidth / document.body.clientHeight;
if (gameBestRatio < 1) {
  gameBestRatio = 1 / gameBestRatio;
}
if (gameBestRatio < 1.2) {
  gameBestRatio = 1.2;
} else if (gameBestRatio > 2.5) {
  gameBestRatio = 2.5;
}
console.log("w:" + document.body.clientWidth, "\nH:" + document.body.clientHeight);
console.log("ratio:" + gameBestRatio);
document.getElementById('content').style.width = document.body.clientWidth + 'px';
document.getElementById('content').style.height = document.body.clientHeight + 'px';
gameBestWidth = gameBestHeight * gameBestRatio;
var game = new Phaser.Game(gameBestWidth, gameBestHeight, Phaser.CANVAS, "content");
game.state.add("Boot", _boot2.default);
game.state.add("Preload", _preload2.default);
game.state.add("Menu", _menu2.default);
game.state.add("Play", _play2.default);
game.state.start("Boot");

/*
game.scale.onOrientationChange.add(resizeCallback, game.scale);
resizeCallback = function(){
	if(game.scale.isLandscape){
		console.log("resizeCallback2, is Landscape");
		//setUserScale()
	}
}
*/

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
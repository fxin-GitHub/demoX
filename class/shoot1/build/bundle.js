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
var assetsPath = "demo1Assets/";
var customConfig = {
	cloud: {
		key: "cloud",
		url: assetsPath + "cloud.jpg"
	},
	city1: {
		key: "city1",
		url: assetsPath + "city1.png"
	},
	city2: {
		key: "city2",
		url: assetsPath + "city2.png"
	},
	ground: {
		key: "ground",
		url: assetsPath + "ground.png"
	},
	playerBody: {
		key: "pink",
		url: assetsPath + "pink.png",
		defaultKey: "playerBody",
		defaultUrl: assetsPath + "playerBody.png"
	},
	playerBullet: {
		key: "pink",
		url: assetsPath + "pink.png",
		defaultKey: "playerBullet",
		defaultUrl: assetsPath + "playerBullet.png"
	},
	enemyBody: {
		key: "pink",
		url: assetsPath + "pink.png",
		defaultKey: "enemyBody",
		defaultUrl: assetsPath + "enemyBody.png"
	},
	enemyBullet: {
		key: "pink",
		url: assetsPath + "pink.png",
		defaultKey: "enemyBullet",
		defaultUrl: assetsPath + "enemyBullet.png"
	},
	tree: {
		key: "pink",
		url: assetsPath + "pink.png",
		defaultKey: "tree",
		defaultUrl: assetsPath + "tree.png"
	},
	pink: {
		key: "pink",
		url: assetsPath + "pink.png"
	},
	go: {
		key: "go",
		url: assetsPath + "go.png"
	},
	replay: {
		key: "replay",
		url: assetsPath + "replay.png"
	},
	flag: {
		onDown: false,
		canMove: false,
		checkStop: false
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
			//console.log("boot preload");
			this.game.state.backgroundColor = 0x213456;
			this.load.image(_customConfig2.default.go.key, _customConfig2.default.go.url);
			//console.log("boot finish preload");
		}
	}, {
		key: "create",
		value: function create() {
			//console.log("boot create");
			this.state.start("Preload");
			//console.log("boot finish create");
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
			this.btnStart = this.add.button(this.game.world.centerX, this.game.world.centerY, _customConfig2.default.go.key, this.startGame, this);
			this.btnStart.anchor.set(0.5);
			this.btnStart.scale.set(0.5);
			this.btnStart.visible = this.flagShowBtnStart;

			this.btnReplay = this.add.button(this.game.world.centerX, this.game.world.centerY + 100, _customConfig2.default.replay.key, this.startGame, this);
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
			this.city1 = this.add.tileSprite(0, 300, 1798, 359, 'city1');
			this.city1.fixedToCamera = true;
			this.city2 = this.add.tileSprite(0, 100, 1353, 580, 'city2');
			this.city2.fixedToCamera = true;
			this.ground = this.add.tileSprite(0, 0, 1000, 32, "ground");
			this.ground.scale.set(2);
			this.ground.position.set(0, this.game.world.height - this.ground.height * 2);
			this.game.physics.arcade.enable(this.ground);
			this.ground.body.immovable = true;
			this.ground.body.allowGravity = false;

			this.player = new _player2.default(this.game, 180, this.game.world.centerY + 200, null, this.ground);
			this.enemy = new _enemy2.default(this.game, _customConfig2.default.common.enemyTreeX, 0, this.player, this.ground);
			this.player.setEnemy(this.enemy);
			/*
   this.keys = this.game.input.keyboard.addKeys({newPlayer:Phaser.Keyboard.P, newEnemy:Phaser.Keyboard.ONE});
   this.keys.newPlayer.onDown.add(this.keyEvents, this);
   this.keys.newEnemy.onDown.add(this.keyEvents, this);
   */
		}

		/*
  keyEvents(key){
  	switch(key.keyCode){
  		case Phaser.Keyboard.P:
  			this.newPlayer = new Player(this.game, 200, 200, this.enemy, this.ground);
  			break;
  		case Phaser.Keyboard.ONE:
  			this.newEnemy = new Enemy(this.game, 400, 200, this.player, this.ground);
  			break;
  	}
  }
  */

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
				this.enemy.enemyTree.body.velocity.x = _customConfig2.default.common.scrollSpeed * 65;
				if (this.enemy.enemyTree.x + this.enemy.enemyTree.width / 2 < this.game.camera.x) {
					this.enemy.enemyTree.reset(this.game.camera.x + this.game.camera.width + this.enemy.enemyTree.width, this.ground.y);
					this.enemy.enemyTree.scale.set(this.game.rnd.realInRange(0.1, 0.2), this.game.rnd.realInRange(0.5, 0.8));
					this.enemy.enemyBody.revive();
					this.enemy.enemyBody.position.set(this.enemy.enemyTree.x, this.enemy.enemyTree.y - this.enemy.enemyTree.height - this.enemy.enemyBody.height / 2);
					this.enemy.reviveEnemyBullet();
					_customConfig2.default.flag.checkStop = true;
					console.log("reset tree");
				}
				if (_customConfig2.default.flag.checkStop) {
					if (this.enemy.enemyTree.x < _customConfig2.default.common.enemyTreeX + this.game.rnd.between(-30, 30)) {
						_customConfig2.default.flag.canMove = false;
						_customConfig2.default.flag.checkStop = false;
						this.city1.stopScroll();
						this.city2.stopScroll();
						this.ground.stopScroll();
						this.enemy.enemyTree.body.velocity.x = 0;
						this.enemy.enemyBody.x = this.enemy.enemyTree.x;
						this.player.flagCoolDown = true;
					}
				}
			}
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
		key: "preload",
		value: function preload() {
			console.log("preload preload");
			//this.preloadSprite = this.add.sprite(this.game.world.centerX, this.game.world.centerY, customConfig.go.key);
			//this.preloadSprite.anchor.set(0.5);
			//this.preloadSprite.scale.set(0.5);
			//this.load.setPreloadSprite(this.preloadSprite);
			console.log("preload preloadSprite");

			this.load.image(_customConfig2.default.cloud.key, _customConfig2.default.cloud.url);
			this.load.image(_customConfig2.default.city1.key, _customConfig2.default.city1.url);
			this.load.image(_customConfig2.default.city2.key, _customConfig2.default.city2.url);
			this.load.image(_customConfig2.default.pink.key, _customConfig2.default.pink.url);
			this.load.image(_customConfig2.default.ground.key, _customConfig2.default.ground.url);
			this.load.image(_customConfig2.default.go.key, _customConfig2.default.go.url);
			this.load.image(_customConfig2.default.replay.key, _customConfig2.default.replay.url);
			console.log("preload finish preload");
		}
	}, {
		key: "create",
		value: function create() {
			console.log("preload create");
			//console.log(this.game.cache._cache);
			this.state.start("Menu");
			console.log("preload finish create");
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

		_this.launchSpeed = 750;
		_this.flagEnemyHoldBullet = true;
		_this.flagEnemyBulletMissedPlayer = false;

		_this.enemyTree = _this.game.add.sprite(0, 0, _customConfig2.default.tree.key);
		_this.enemyTree.anchor.set(0.5, 1);
		_this.enemyTree.scale.set(0.15, 0.7);
		_this.game.physics.arcade.enable(_this.enemyTree);
		//this.enemyTree.body.immovable = true; //穿透
		_this.enemyTree.body.allowGravity = false;
		_this.enemyTree.body.gravity.y = 200;
		_this.enemyTree.position.set(_this.x, _this.ground.y);

		_this.enemyBody = _this.game.add.sprite(0, 0, _customConfig2.default.enemyBody.key);
		_this.enemyBody.anchor.set(0.5);
		_this.enemyBody.scale.set(0.1, 0.2);
		_this.game.physics.arcade.enable(_this.enemyBody);
		_this.enemyBody.body.allowGravity = true;
		_this.enemyBody.body.gravity.y = 200;
		_this.enemyBody.position.set(_this.enemyTree.x, _this.enemyTree.y - _this.enemyTree.height - _this.enemyBody.height / 2);

		_this.enemyBullet = _this.game.add.sprite(0, 0, _customConfig2.default.enemyBullet.key);
		_this.enemyBullet.anchor.set(0, 0.5);
		_this.enemyBullet.scale.set(0.15, 0.01);
		_this.enemyBullet.angle = -180;
		_this.game.physics.arcade.enable(_this.enemyBullet);
		_this.enemyBullet.body.allowGravity = false;
		_this.enemyBullet.body.gravity.y = 500;
		_this.enemyBullet.checkWorldBounds = true;
		_this.enemyBullet.events.onOutOfBounds.add(_this.enemyBulletOutOfBounds, _this);
		_this.enemyBullet.position.set(_this.enemyBody.x, _this.enemyBody.y - _this.enemyBody.height / 2);
		console.log("new enemy");
		return _this;
	}

	_createClass(Enemy, [{
		key: "update",
		value: function update() {
			this.game.physics.arcade.collide(this.enemyTree, this.ground);
			this.game.physics.arcade.collide(this.enemyBody, this.enemyTree);
			this.game.physics.arcade.collide(this.enemyBody, this.ground, this.enemyBodyHitGround, null, this);
			this.game.physics.arcade.collide(this.enemyBullet, this.player.playerBody, this.enemyBulletHitPlayerBody, null, this);
			this.game.physics.arcade.collide(this.enemyBullet, this.ground, this.enemyBulletHitGround, null, this);

			this.enemyBody.x = this.enemyTree.x;
			this.enemyBody.y = this.enemyTree.y - this.enemyTree.height - this.enemyBody.height / 2;
			if (this.flagEnemyHoldBullet) {
				this.enemyBullet.x = this.enemyBody.x;
				this.enemyBullet.y = this.enemyBody.y;
				this.enemyBullet.rotation = this.game.physics.arcade.angleBetween(this.enemyBullet, this.player.playerBody) + 0.2;
			} else {
				this.changeAngle(-1.1);
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
			this.gameOver();
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
			console.log("enemyBodyHitGround");
		}
	}, {
		key: "enemyLaunch",
		value: function enemyLaunch() {
			if (this.flagEnemyHoldBullet) {
				this.enemyBullet.rotation = this.game.physics.arcade.angleBetween(this.enemyBullet, this.player.playerBody) + 0.2;
				this.game.physics.arcade.velocityFromRotation(this.enemyBullet.rotation, this.launchSpeed, this.enemyBullet.body.velocity);
				this.enemyBullet.body.allowGravity = true;
				this.flagEnemyHoldBullet = false; //不加的话，转弯也要朝向player
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
			this.enemyBullet.rotation += p * 0.01;
		}
	}, {
		key: "gameOver",
		value: function gameOver() {
			this.game.state.start("Menu");
			console.log("gameOver");
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

		_this.launchSpeed = 750;
		_this.flagRotate = -1;
		_this.flagPlayerHoldBullet = true;
		_this.flagPlayerBulletMissedEnemy = false;
		_this.flagCoolDown = true;

		_this.playerBody = _this.game.add.sprite(_this.x, _this.y, _customConfig2.default.playerBody.key);
		_this.playerBody.anchor.set(0.5);
		_this.playerBody.scale.set(0.1, 0.2);
		_this.game.physics.arcade.enable(_this.playerBody);
		_this.playerBody.body.gravity.y = 200;
		//this.playerBody.body.immovable = true;//穿透
		_this.playerBody.getPlayer = _this.getPlayer;

		_this.playerBullet = _this.game.add.sprite(_this.playerBody.x, _this.playerBody.y, _customConfig2.default.playerBullet.key);
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
					this.changeAngle(1 * this.flagRotate);
					if (this.playerBullet.angle < -90) {
						this.flagRotate = -this.flagRotate;
					}
					if (this.playerBullet.angle > 0) {
						this.flagRotate = -this.flagRotate;
					}
				}
			} else {
				this.changeAngle(1.2);
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
			this.playerBullet.rotation += p * 0.01;
		}
	}, {
		key: "PlayerLaunch",
		value: function PlayerLaunch() {
			if (this.flagPlayerHoldBullet && this.flagCoolDown) {
				this.game.physics.arcade.velocityFromAngle(this.playerBullet.angle, this.launchSpeed, this.playerBullet.body.velocity);
				this.playerBullet.body.allowGravity = true;
				this.flagPlayerHoldBullet = false;
				this.flagCoolDown = false;
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
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "...");
game.state.add("Boot", _boot2.default);
game.state.add("Preload", _preload2.default);
game.state.add("Menu", _menu2.default);
game.state.add("Play", _play2.default);
game.state.start("Boot");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
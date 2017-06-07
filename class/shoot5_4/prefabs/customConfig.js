var assetsPath = "demo1Assets/";
var customConfig = {
	cloud: {
		key: "cloud",
		url: assetsPath+"cloud.jpg"
	},
	city1: {
		key: "city1",
		url: assetsPath+"city1.png"
	},
	city2: {
		key: "city2",
		url: assetsPath+"city2.png"
	},
	ground: {
		key: "ground",
		url: assetsPath+"ground.png"
	},
	playerBody: {
		key: "pink",
		url: assetsPath+"pink.png",
		defaultKey: "playerBody",
		defaultUrl: assetsPath+"playerBody.png"
	},
	playerBullet: {
		key: "pink",
		url: assetsPath+"pink.png",
		defaultKey: "playerBullet",
		defaultUrl: assetsPath+"playerBullet.png"
	},
	enemyBody: {
		key: "pink",
		url: assetsPath+"pink.png",
		defaultKey: "enemyBody",
		defaultUrl: assetsPath+"enemyBody.png"
	},
	enemyBullet: {
		key: "pink",
		url: assetsPath+"pink.png",
		defaultKey: "enemyBullet",
		defaultUrl: assetsPath+"enemyBullet.png"
	},
	tree: {
		key: "pink",
		url: assetsPath+"pink.png",
		defaultKey: "tree",
		defaultUrl: assetsPath+"tree.png"
	},
	pink: {
		key: "pink",
		url: assetsPath+"pink.png"
	},
	go: {
		key: "go",
		url: assetsPath+"go.png"
	},
	replay: {
		key: "replay",
		url: assetsPath+"replay.png"
	},
	flag: {
		onDown: false,
		canMove: false,
		checkStop: false,
	},
	common: {
		enemyTreeX: 600,
		scrollSpeed: -5
	}

};

export default customConfig;

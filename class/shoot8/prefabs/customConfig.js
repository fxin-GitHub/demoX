var audioPath = "demo1Assets/audio/";
var picsPath = "demo1Assets/pics/"
var customConfig = {
		pics:{
			cloud: {
				key: "cloud",
				url: picsPath+"cloud.jpg"
			},
			city1: {
				key: "city1",
				url: picsPath+"city1.png"
			},
			city2: {
				key: "city2",
				url: picsPath+"city2.png"
			},
			ground: {
				key: "ground",
				url: picsPath+"ground.png"
			},
			playerBody: {
				key: "pink",
				url: picsPath+"pink.png",
				defaultKey: "playerBody",
				defaultUrl: picsPath+"playerBody.png"
			},
			playerBullet: {
				key: "pink",
				url: picsPath+"pink.png",
				defaultKey: "playerBullet",
				defaultUrl: picsPath+"playerBullet.png"
			},
			enemyBody: {
				key: "pink",
				url: picsPath+"pink.png",
				defaultKey: "enemyBody",
				defaultUrl: picsPath+"enemyBody.png"
			},
			enemyBullet: {
				key: "pink",
				url: picsPath+"pink.png",
				defaultKey: "enemyBullet",
				defaultUrl: picsPath+"enemyBullet.png"
			},
			tree: {
				key: "pink",
				url: picsPath+"pink.png",
				defaultKey: "tree",
				defaultUrl: picsPath+"tree.png"
			},
			pink: {
				key: "pink",
				url: picsPath+"pink.png"
			},
			go: {
				key: "go",
				url: picsPath+"go.png"
			},
			replay: {
				key: "replay",
				url: picsPath+"replay.png"
			}
		},
		audio:{
			playerShot:{
				key: "playerShot",
				url: audioPath+"playerShot.mp3"
			},
			playerExplode:{
				key: "playerExplode",
				url: audioPath+"playerExplode.mp3"
			},
			enemyShot: {
				key: "enemyShot",
				url: audioPath+"enemyShot.wav"
			},
			enemyExplode:{
				key: "enemyExplode",
				url: audioPath+"enemyExplode.wav"
			},
			hitGround:{
				key: "hitGround",
				url: audioPath+"hitGround.mp3",
				url1: audioPath+"hitGround.ogg"
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

export default customConfig;

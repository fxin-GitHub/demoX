//import Phaser from "phaser";
import customConfig from "../prefabs/customConfig";

class Preload extends Phaser.State{
	init(){
		//console.log(this.game.cache._cache);
		
	}

	preload(){
		console.log("preload preload");
		//this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'go');
        //this.loaderBar.anchor.setTo(0.5);
        //this.load.setPreloadSprite(this.loaderBar);
		console.log("preload preloadSprite");

		this.load.image(customConfig.pics.cloud.key, customConfig.pics.cloud.url);
		this.load.image(customConfig.pics.city1.key, customConfig.pics.city1.url);
		this.load.image(customConfig.pics.city2.key, customConfig.pics.city2.url);
		this.load.image(customConfig.pics.pink.key, customConfig.pics.pink.url);
		this.load.image(customConfig.pics.ground.key, customConfig.pics.ground.url);
		this.load.image(customConfig.pics.go.key, customConfig.pics.go.url);
		this.load.image(customConfig.pics.replay.key, customConfig.pics.replay.url);

		this.load.audio(customConfig.audio.enemyExplode.key, customConfig.audio.enemyExplode.url);
		this.load.audio(customConfig.audio.enemyShot.key, customConfig.audio.enemyShot.url);
		this.load.audio(customConfig.audio.playerExplode.key, customConfig.audio.playerExplode.url);
		this.load.audio(customConfig.audio.playerShot.key, customConfig.audio.playerShot.url);
		this.load.audio(customConfig.audio.hitGround.key, [customConfig.audio.hitGround.url, customConfig.audio.hitGround.url1]);
		console.log("preload finish preload");
	}
	
	create(){
		console.log("preload create");
		//console.log(this.game.cache._cache);
		this.state.start("Menu");
		console.log("preload finish create");
	}
}

export default Preload
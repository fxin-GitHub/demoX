//import Phaser from "phaser";
import customConfig from "../prefabs/customConfig";

class Preload extends Phaser.State{
	preload(){
		//console.log("preload preload");
		this.preloadSprite = this.add.sprite(this.game.world.centerX, this.game.world.centerY, customConfig.go.key);
		this.preloadSprite.anchor.set(0.5);
		this.preloadSprite.scale.set(0.5);
		this.load.setPreloadSprite(this.preloadSprite);
		
		this.load.image(customConfig.cloud.key, customConfig.cloud.url);
		this.load.image(customConfig.city1.key, customConfig.city1.url);
		this.load.image(customConfig.city2.key, customConfig.city2.url);
		this.load.image(customConfig.pink.key, customConfig.pink.url);
		this.load.image(customConfig.ground.key, customConfig.ground.url);
		this.load.image(customConfig.go.key, customConfig.go.url);
		this.load.image(customConfig.replay.key, customConfig.replay.url);
		//console.log("preload finish preload");
	}
	
	create(){
		//console.log("preload create");
		//console.log(this.game.cache._cache);
		this.state.start("Menu");
		//console.log("preload finish create");
	}
}

export default Preload
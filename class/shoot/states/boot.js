//import Phaser from "phaser";
import customConfig from "../prefabs/customConfig";

class Boot extends Phaser.State{
	preload(){
		//console.log("boot preload");
		this.game.state.backgroundColor = 0x213456;
		this.load.image(customConfig.go.key, customConfig.go.url);
		//console.log("boot finish preload");
	}

	create(){
		//console.log("boot create");
		this.state.start("Preload");
		//console.log("boot finish create");
	}
}

export default Boot;

//import Phaser from "phaser";
import customConfig from "../prefabs/customConfig";

class Menu extends Phaser.State{
	create(){
		//console.log("menu create");
		this.btnStart = this.add.button(this.game.world.centerX, this.game.world.centerY, customConfig.go.key, this.startGame, this);
		this.btnStart.anchor.set(0.5);
		this.btnStart.scale.set(0.5);

		this.btnReplay = this.add.button(this.game.world.centerX, this.game.world.centerY+200, customConfig.replay.key, this.startGame, this);
		this.btnReplay.anchor.set(0.5);
		this.btnReplay.scale.set(0.5);
		//console.log("menu finish create");
	}

	startGame(){
		//console.log("menu start play");
		this.state.start("Play");
		//console.log("menu finish starting play");
	}
}

export default Menu;
//import Phaser from "phaser";
import customConfig from "../prefabs/customConfig";

class Menu extends Phaser.State{
	constructor(){
		super();
		this.flagShowBtnStart = true;
	}

	create(){
		//console.log("menu create");
		this.btnStart = this.add.button(this.game.world.centerX, this.game.world.centerY, customConfig.pics.go.key, this.startGame, this);
		this.btnStart.anchor.set(0.5);
		this.btnStart.scale.set(0.5);
		this.btnStart.visible = this.flagShowBtnStart;

		this.btnReplay = this.add.button(this.game.world.centerX, this.game.world.centerY+100, customConfig.pics.replay.key, this.startGame, this);
		this.btnReplay.anchor.set(0.5);
		this.btnReplay.scale.set(0.5);
		this.btnReplay.visible = !this.flagShowBtnStart;
		this.game.add.tween(this.btnStart.scale).to({x:0.6, y:0.6}, 1000, Phaser.Easing.BounceInOut, true, 0, -1, true);
		this.game.add.tween(this.btnReplay.scale).to({x: 0.6, y:0.6}, 1000, Phaser.Easing.BounceInOut, true, 0, -1, true);

		this.time.events.add(200, this.startGame, this);
	}

	startGame(){
		//console.log("menu start play");
		this.state.start("Play");
		this.flagShowBtnStart = false;
		//console.log("menu finish starting play");
	}
}

export default Menu;
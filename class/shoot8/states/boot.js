//import Phaser from "phaser";
import customConfig from "../prefabs/customConfig";

class Boot extends Phaser.State{
	preload(){
		this.game.state.backgroundColor = 0x213456;
		this.load.image(customConfig.pics.go.key, customConfig.pics.go.url);
	}

	create(){
		//this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		//this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
	    this.scale.pageAlignHorizontally =  true;
	    this.scale.refresh();
		//this.game.scale.onOrientationChange.add(this.resize, this);
		//this.scale.forcePortrait = true;
		//this.scale.forceLandscape = true;
		this.state.start("Preload");
		console.log(this.scale.pageAlignHorizontally);
		console.log(this.game.width);
		console.log(this.game.camera.width);
	}

	resize(){
		if(this.game.scale.isLandscape){
			//console.log("contentW0: "+document.getElementById('content').style.width, "\ncontentH0: "+document.getElementById('content').style.width);
			//document.getElementById('content').style.width = document.body.clientWidth + 'px';
			//document.getElementById('content').style.height = document.body.clientHeight + 'px';
			//this.game.scale.setGameSize(this.game.width+100, this.game.height);
			//console.log(this.game.width, this.game.height);
			//console.log("isLandscape");
			//console.log("W: "+document.body.clientWidth, "H: "+document.body.clientHeight);
			//console.log("contentW: "+document.getElementById('content').style.width, "\ncontentH: "+document.getElementById('content').style.width);
		}else if(this.game.scale.isPortrait){
			//console.log("contentW0: "+document.getElementById('content').style.width, "\ncontentH0: "+document.getElementById('content').style.width);
			//console.log(this.game.width, this.game.height);
			//document.getElementById('content').style.width = document.body.clientWidth + 'px';
			//document.getElementById('content').style.height = document.body.clientHeight + 'px';
			//console.log("isPortrait");
			//console.log("W: "+document.body.clientWidth, "H: "+document.body.clientHeight);
			//console.log("contentW: "+document.getElementById('content').style.width, "\ncontentH: "+document.getElementById('content').style.width);
		}
	}
}

export default Boot;

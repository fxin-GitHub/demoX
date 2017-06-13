//import Phaser from "phaser";
import customConfig from "../prefabs/customConfig";
import Player from "../prefabs/player";
import Enemy from "../prefabs/enemy";

class Play extends Phaser.State{
	create(){		
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.stage.backgroundColor = '#a8e6ff';

		this.cloud = this.add.tileSprite(0,0,2079,851,'cloud');
	    this.cloud.fixedToCamera = true;
	    this.city1 = this.add.tileSprite(0,0,1798,359,'city1');
	    this.city1.position.set(0, this.game.world.height-this.city1.height+50);
	    this.city1.fixedToCamera = true;
	    //this.city2 = this.add.tileSprite(0,0,1353,580,'city2');
	    this.city2 = this.add.tileSprite(0,0,1500,580,'city2');
	    this.city2.position.set(0, this.game.world.height-this.city2.height+70);
	    this.city2.fixedToCamera = true;
	    this.ground = this.add.tileSprite(0, 0, 1000, 32, "ground");
	    this.ground.scale.set(2);
	    this.ground.position.set(0, this.game.world.height-this.ground.height*2);
	    this.game.physics.arcade.enable(this.ground);
	    this.ground.body.immovable = true;
	    this.ground.body.allowGravity = false; 

	    this.setEnemyTreeX();
	    this.player = new Player(this.game, this.game.width*0.22, this.game.world.centerY,null, this.ground);
	    this.enemy = new Enemy(this.game, customConfig.common.enemyTreeX, 0, this.player, this.ground);
	    this.player.setEnemy(this.enemy);
	    this.enemy.setEnemyLaunchSpeed(this.player.playerBody.x, this.enemy.enemyBody.x);
	}

	goFullScreen(){
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

    setEnemyTreeX(){
    	if(customConfig.common.enemyTreeX < this.game.camera.width*0.75 ){
			customConfig.common.enemyTreeX = this.game.camera.width*0.75;	
		}
    }

	update(){
		this.player.update();
		this.enemy.update();
		this.cloud.autoScroll(customConfig.common.scrollSpeed*10, 0);
		if(customConfig.flag.canMove){
			this.city1.autoScroll(customConfig.common.scrollSpeed*20, 0);
			this.city2.autoScroll(customConfig.common.scrollSpeed*30, 0);
			this.ground.autoScroll(customConfig.common.scrollSpeed*40, 0);
			this.enemy.enemyTree.body.velocity.x = customConfig.common.scrollSpeed*80;
			this.enemy.enemyBody.body.velocity.x = customConfig.common.scrollSpeed*80;
			if(this.enemy.enemyTree.x+this.enemy.enemyTree.width/2 <this.game.camera.x){
				this.enemy.enemyTree.reset(this.game.camera.x+this.game.camera.width+this.enemy.enemyTree.width, this.ground.y);
				this.enemy.enemyTree.scale.set(this.game.rnd.realInRange(0.12, 0.2), this.game.rnd.realInRange(0.2, 1.3));
				this.enemy.enemyBody.revive();
				this.enemy.enemyBody.position.set(this.enemy.enemyTree.x, 
					this.enemy.enemyTree.y-this.enemy.enemyTree.height-this.enemy.enemyBody.height/2);
				this.enemy.reviveEnemyBullet();
				customConfig.flag.checkStop = true;
				console.log("reset tree");
			}
			if(customConfig.flag.checkStop){
				this.setEnemyTreeX();
				this.enemy.setEnemyLaunchSpeed(this.player.playerBody.x, this.enemy.enemyBody.x);
				if(this.enemy.enemyTree.x<customConfig.common.enemyTreeX+this.game.rnd.between(-30, 50)){
					customConfig.flag.canMove = false;
					customConfig.flag.checkStop = false;
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

	render(){
		this.game.debug.text(this.enemy.enemyBody.x-this.player.playerBody.x, 20, 20);
		this.game.debug.text("enemy.launchSpeed:"+this.enemy.launchSpeed, 20, 40);
		this.game.debug.text("emergency:"+customConfig.flag.emergency, 20, 60);
		this.game.debug.text("gW:"+this.game.width, 20, 80);
		this.game.debug.text("gH:"+this.game.height, 20, 100);
		this.game.debug.text("gw/gh ratio:"+this.game.width/this.game.height, 20, 120);
		this.game.debug.text("cW:"+document.body.clientWidth, 20, 150);
		this.game.debug.text("cH:"+document.body.clientHeight, 20, 170);
		this.game.debug.text("cW/cH:"+document.body.clientWidth/document.body.clientHeight, 20, 190);
		this.game.debug.text("customConfig.treeX"+customConfig.common.enemyTreeX, 20, 300);
		this.game.debug.text("enemyBody.X"+this.enemy.enemyBody.x, 20, 320);
	}
}

export default Play;
import customConfig from "./customConfig";

class Player extends Phaser.Sprite{
 	constructor(_game, _x, _y, _enemy, _ground){
 		super(_game, _x, _y, _enemy, _ground);
		//Phaser.Sprite.call(this, _game, _x, _y);
		this.game = _game;
		this.x = _x;
		this.y = _y;
		this.ground = _ground;
		this.enemy = _enemy;
		this.enemy;
		this.playerBody;
		this.playerBullet;

		this.launchSpeed = 800;
		this.flagRotate = -1;
		this.flagPlayerHoldBullet = true;
		this.flagPlayerBulletMissedEnemy = false;
		this.flagCoolDown = true;

		this.playerBody = this.game.add.sprite(0, 0, customConfig.pics.playerBody.key);
		this.playerBody.anchor.set(0.5);
		this.playerBody.scale.set(0.1, 0.2);
		this.playerBody.position.set(this.x, this.ground.y-100);
		this.game.physics.arcade.enable(this.playerBody);
		this.playerBody.body.gravity.y = 200;
		//this.playerBody.body.immovable = true;//穿透
		this.playerBody.getPlayer = this.getPlayer;
		//this.playerBody.checkWorldBounds = true;
		//this.playerBody.events.onOutOfBounds.add(this.playerBodyOutOfBounds, this);

		this.playerBullet = this.game.add.sprite(this.playerBody.x, this.playerBody.y, customConfig.pics.playerBullet.key);
		this.playerBullet.anchor.set(0, 0.5);
		this.playerBullet.scale.set(0.15, 0.01);
		this.playerBullet.tint = 0xff0000;
		this.game.physics.arcade.enable(this.playerBullet);
		this.playerBullet.body.gravity.y = 500;
		this.playerBullet.body.allowGravity = false;
		this.playerBullet.checkWorldBounds = true;
		this.playerBullet.events.onOutOfBounds.add(this.playerBulletOutOfBounds, this);

		this.game.input.onDown.add(this.eventOnKeyDown, this);
		this.game.input.onUp.add(this.eventOnKeyUp, this);	

		this.fxPlayerShot = this.game.add.audio(customConfig.audio.playerShot.key);
	    this.fxEnemyExplode = this.game.add.audio(customConfig.audio.enemyExplode.key);
	    this.fxHitGround = this.game.add.audio(customConfig.audio.hitGround.key);
	}

	update(){
		this.game.physics.arcade.collide(this.playerBody, this.ground, this.playerBodyHitGround, null, this);
		this.game.physics.arcade.collide(this.playerBullet, this.enemy.enemyBody, this.playerBulletHitEnemy, null, this);
		this.game.physics.arcade.collide(this.playerBullet, this.ground, this.playerBulletHitGround, null, this);
		if(this.flagPlayerHoldBullet){
			this.playerBullet.x = this.playerBody.x;
			this.playerBullet.y = this.playerBody.y;
			if(customConfig.flag.onDown && this.flagCoolDown){
				this.changeAngle(12*this.flagRotate);
				if(this.playerBullet.angle <-90){
					this.flagRotate = -this.flagRotate;
				}
				if(this.playerBullet.angle >0){
					this.flagRotate = -this.flagRotate;
				}
			}
		}else{
			this.changeAngle(11);
		}
		if(this.enemy.flagEnemyBulletMissedPlayer){
			this.revivePlayerBullet();
			this.flagCoolDown = true;
		}
	}

	getPlayer(){
		return this;
	}

	eventOnKeyDown(){
		if(customConfig.flag.onDown){
			console.log("eventOnKeyDown return!!!");
			return;
		}
		customConfig.flag.onDown = true;
		console.log("eventOnKeyDown");
	}

	eventOnKeyUp(){
		if(customConfig.flag.onDown){
			customConfig.flag.onDown = false;
			if(this.flagPlayerHoldBullet){
				this.PlayerLaunch();
				//this.flagPlayerHoldBullet = false;
			}
			console.log("eventOnKeyUp");
		}
	}

	changeAngle(p){
		this.playerBullet.rotation += p*0.001;
	}

	PlayerLaunch(){
		if(this.flagPlayerHoldBullet && this.flagCoolDown){
			this.game.physics.arcade.velocityFromAngle(this.playerBullet.angle, this.launchSpeed, this.playerBullet.body.velocity);
			this.playerBullet.body.allowGravity = true;
			this.flagPlayerHoldBullet = false;
			this.flagCoolDown = false;
			this.fxPlayerShot.play();
			console.log("PlayerLaunch");
		}
	}

	playerBodyHitGround(playerBody, ground){
		playerBody.body.allowGravity = false;
		console.log("playerBodyHitGround");
	}

	playerBulletHitEnemy(playerBullet, enemyBody){
		playerBullet.kill();
		enemyBody.kill();
		this.enemy.enemyBullet.kill();
		this.revivePlayerBullet();
		customConfig.flag.canMove = true;
		if(customConfig.flag.emergency){
			customConfig.flag.emergency = false;
		}
		this.fxEnemyExplode.play();
		console.log("playerBulletHitEnemy");
	}

	playerBulletHitGround(playerBullet, ground){
		if(this.flagPlayerHoldBullet){
			return;
		}
		playerBullet.kill();
		this.flagPlayerBulletMissedEnemy = true;
		this.enemy.enemyLaunch();
		this.fxHitGround.play();
		console.log("playerBulletHitGround");
	}

	playerBulletOutOfBounds(playerBullet){
		if(this.flagPlayerHoldBullet){
			return;
		}
		playerBullet.kill();
		this.flagPlayerBulletMissedEnemy = true;
		this.enemy.enemyLaunch();
		this.fxHitGround.play();
		console.log("playerBulletOutOfBounds");
	}

	revivePlayerBullet(){
		if(this.playerBullet.alive == true){
			return;
		}
		this.playerBullet.reset(this.playerBody.x, this.playerBody.y);
		this.playerBullet.angle = 0;
		this.playerBullet.body.allowGravity = false;
		this.flagPlayerHoldBullet = true;
		this.flagPlayerBulletMissedEnemy = false;
		console.log("revivePlayerBullet");
	}

	setEnemy(enemy){
		this.enemy = enemy;
		console.log("setEnemy");
	}

	render(){
		this.game.debug.text("flagPlayerHoldBullet: "+this.flagPlayerHoldBullet, 20, this.game.world.height-20);
		this.game.debug.text("flagPlayerBulletMissedEnemy: "+this.flagPlayerBulletMissedEnemy, 20, this.game.world.height-40);
		this.game.debug.text("this.playerBullet.alive: "+this.playerBullet.alive, 20, 60);
		this.game.debug.body(this.playerBody);
		this.game.debug.body(this.playerBullet);
	}
}

export default Player;
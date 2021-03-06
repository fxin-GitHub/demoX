import customConfig from "./customConfig";

class Enemy extends Phaser.Sprite{
	constructor(_game, _x, _y, _player, _ground){
		super(_game, _x, _y, _player, _ground);
		this.game = _game;
		this.x = _x;
		this.y = _y;
		this.player = _player;
		this.ground = _ground;
		this.enemyTree;
		this.enemyBody;
		this.enemyBullet;

		this.launchSpeed = 800;
		this.flagEnemyHoldBullet = true;
		this.flagEnemyBulletMissedPlayer = false;

		this.enemyTree = this.game.add.sprite(0, 0, customConfig.pics.tree.key);
		this.enemyTree.anchor.set(0.5, 1);
		//this.enemyTree.scale.set(0.15, 0.3+this.game.rnd.realInRange(0, 0.7));
		this.enemyTree.scale.set(0.15, 0.3+this.game.rnd.realInRange(0, 1.2));
		this.game.physics.arcade.enable(this.enemyTree);
		this.enemyTree.body.immovable = true; //穿透
		this.enemyTree.body.allowGravity = false;
		//this.enemyTree.body.gravity.y = 200;

		this.enemyTree.position.set(this.x, this.ground.y);

		this.enemyBody = this.game.add.sprite(0, 0, customConfig.pics.enemyBody.key);
		this.enemyBody.anchor.set(0.5);
		this.enemyBody.scale.set(0.1, 0.2);
		this.game.physics.arcade.enable(this.enemyBody);
		this.enemyBody.body.allowGravity = true;
		this.enemyBody.body.gravity.y = 500;
		this.enemyBody.position.set(this.enemyTree.x, this.enemyTree.y-this.enemyTree.height-this.enemyBody.height/2);

		this.enemyBullet = this.game.add.sprite(0, 0, customConfig.pics.enemyBullet.key);
		this.enemyBullet.anchor.set(0, 0.5);
		this.enemyBullet.scale.set(0.15, 0.01);
		this.enemyBullet.angle = -180;
		this.game.physics.arcade.enable(this.enemyBullet);
		this.enemyBullet.body.allowGravity = false;
		this.enemyBullet.body.gravity.y = 500;
		this.enemyBullet.checkWorldBounds = true;
		this.enemyBullet.events.onOutOfBounds.add(this.enemyBulletOutOfBounds, this);
		this.enemyBullet.position.set(this.enemyBody.x, this.enemyBody.y-this.enemyBody.height/2);

	    this.fxPlayerExplode = this.game.add.audio(customConfig.audio.playerExplode.key);
	    this.fxEnemyShot = this.game.add.audio(customConfig.audio.enemyShot.key);
	    this.fxHitGround = this.game.add.audio(customConfig.audio.hitGround.key);
		console.log("new enemy");
	}

	update(){
		//this.game.physics.arcade.collide(this.enemyTree, this.ground);
		this.game.physics.arcade.collide(this.enemyBody, this.enemyTree);
		this.game.physics.arcade.collide(this.enemyBody, this.ground, this.enemyBodyHitGround, null ,this);
		this.game.physics.arcade.collide(this.enemyBullet, this.player.playerBody, this.enemyBulletHitPlayerBody, null, this);
		this.game.physics.arcade.collide(this.enemyBullet, this.ground, this.enemyBulletHitGround, null, this);

		this.enemyBody.x = this.enemyTree.x;
		this.enemyBody.y = this.enemyTree.y-this.enemyTree.height-this.enemyBody.height/2;
		if(this.flagEnemyHoldBullet){
			this.enemyBullet.x = this.enemyBody.x;
			this.enemyBullet.y = this.enemyBody.y;
			if(customConfig.flag.emergency){
				this.enemyBullet.rotation = this.game.physics.arcade.angleBetween(this.enemyBullet, this.player.playerBody);
			}else{
				this.enemyBullet.rotation = this.game.physics.arcade.angleBetween(this.enemyBullet, this.player.playerBody)+0.2;
			}
		}else{
			if(!customConfig.flag.emergency){
				this.changeAngle(-8);
			}
		}
		if(this.player.flagPlayerBulletMissedEnemy){
			this.enemyLaunch();
		}
	}

	enemyBodyHitGround(enemyBody, ground){
		if(this.flagEnemyHoldBullet){
			enemyBody.position.set(this.enemyTree.x, this.enemyTree.y-this.enemyTree.height-this.enemyBody.height/2);
			console.log("enemyBodyHitGround");
		}
	}

	enemyBulletHitPlayerBody(enemyBullet, playerBody){
		enemyBullet.kill();
		playerBody.kill();
		this.player.playerBullet.kill();
		this.flagEnemyBulletMissedPlayer = false;
		if(customConfig.flag.emergency){
			customConfig.flag.emergency = false;
		}
		this.fxPlayerExplode.play();
		this.game.time.events.add(200, this.gameOver, this);
		console.log("enemyBulletHitPlayerBody");
	}

	enemyBulletHitGround(enemyBullet, ground){
		if(this.flagEnemyHoldBullet){
			return;
		}
		this.flagEnemyBulletMissedPlayer = true;
		enemyBullet.kill();
		this.game.time.events.add(100, this.reviveEnemyBullet, this);
		customConfig.flag.emergency = true;
		this.fxHitGround.play();
		console.log("enemyBodyHitGround");
	}

	enemyLaunch(){
		if(this.flagEnemyHoldBullet){
			if(!customConfig.flag.emergency){
				this.enemyBullet.rotation = this.game.physics.arcade.angleBetween(this.enemyBullet, this.player.playerBody)+0.2;
				this.game.physics.arcade.velocityFromRotation(this.enemyBullet.rotation, this.launchSpeed, this.enemyBullet.body.velocity);
				this.enemyBullet.body.allowGravity = true;
			}else{
				this.enemyBullet.rotation = this.game.physics.arcade.angleBetween(this.enemyBullet, this.player.playerBody);
				this.game.physics.arcade.velocityFromRotation(this.enemyBullet.rotation, this.launchSpeed, this.enemyBullet.body.velocity);
				this.enemyBullet.body.allowGravity = false;
				console.log("emergency launch");
			}
			this.flagEnemyHoldBullet = false;	//不加的话，转弯也要朝向player
			this.fxEnemyShot.play();
			console.log("enemyLaunch");
		}
	}

	enemyBulletOutOfBounds(enemyBullet){
		if(this.flagEnemyHoldBullet){
			console.log("enemyBulletOutOfBounds, but,,,")
			return;
		}
		this.enemyBullet.kill();
		this.flagEnemyBulletMissedPlayer = true;//
		this.game.time.events.add(100, this.reviveEnemyBullet, this);
		customConfig.flag.emergency = true;
		this.fxHitGround.play();
		console.log("enemyBulletOutOfBounds");
	}

	reviveEnemyBullet(){
		this.enemyBullet.reset(this.enemyBody.x, this.enemyBody.y);
		this.enemyBullet.angle = -180;
		this.enemyBullet.body.allowGravity = false;
		this.flagEnemyHoldBullet = true;
		this.flagEnemyBulletMissedPlayer = false;//
		console.log("reviveEnemyBullet");
	}

	changeAngle(p){
		this.enemyBullet.rotation += p*0.001;
	}

	gameOver(){
		this.game.state.start("Menu");
		console.log("gameOver");
	}

	setEnemyLaunchSpeed(playerX, enemyX){
		if(enemyX-playerX < 500){
			this.launchSpeed = 750;
		}else{
			this.launchSpeed =750+ (enemyX - playerX-500)/500*400;
			//this.launchSpeed =750+ (enemyX - playerX-500)/500*100;
		}
		
	}
	
}

export default Enemy;
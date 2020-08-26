class Scene2 extends Phaser.Scene{
  constructor(){
    super("playGame");
  }

  create(){
    this.apple = this.add.image(config.width/2 - 50, config.height/2, "apple");
    
    this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});

    this.player = this.physics.add.image(config.width/2, config.height/2, "player");
    this.player.setScale(1.5);


  }
  update(){
    this.moveSnake();
  }

  
  moveSnake() {
    this.player.setVelocity(0);

    if(this.cursorKeys.left.isDown){
      this.player.setVelocityX(-gameSettings.playerSpeed);
    }else if(this.cursorKeys.right.isDown){
      this.player.setVelocityX(gameSettings.playerSpeed);
    }

    if(this.cursorKeys.up.isDown){
      this.player.setVelocityY(-gameSettings.playerSpeed);
    }else if(this.cursorKeys.down.isDown){
      this.player.setVelocityY(gameSettings.playerSpeed);
    }
    }

  // resetSnakePos(player){
  //     player.y = 0;
  //     player.x = player.x;;
  // }

    
}

  
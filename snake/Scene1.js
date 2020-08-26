class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }

    preload(){
        this.load.image("player", "player.png");
        this.load.image("apple", "apple.png");
    }

    create() {
        var snake;
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");

    }
    
  }
  
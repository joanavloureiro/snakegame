var gameSettings = {
    playerSpeed: 200,
    maxPowerups: 2,
    powerUpVel: 50,
  }

var config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    backgroundColor: '#bfcc00',
    parent: 'phaser-example',
    scene: [Scene1, Scene2]
};

//  Direction consts
var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;

var game = new Phaser.Game(config);
  
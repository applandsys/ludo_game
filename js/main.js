const displayWidth = window.innerWidth ;
const displayHeight = window.innerHeight ;
var config = {
    type: Phaser.AUTO,
    width: displayWidth,
    height: displayHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: [boardscene]
};

var game = new Phaser.Game(config);

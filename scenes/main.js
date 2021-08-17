const displayWidth = window.innerWidth ;
const displayHeight = window.innerHeight ;
//const displayWidth = 412;
//const displayHeight = 732 ;
var config = {
    type: Phaser.AUTO,
    width: displayWidth,
    height: displayHeight,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    backgroundColor: 0x220889,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: [signup,lobbyscene,boardscene]
};


var game = new Phaser.Game(config);



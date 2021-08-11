var sprite ;

class boardscene extends Phaser.Scene{

    constructor() {
        super('boardscene')
    }


    
//guti_init_post[0].x = 300;

        preload(){
            this.objects = {};

            this.load.image('board', 'assets/board.jpg');
            this.load.image('zero_dice', 'assets/zero.png');


            this.load.spritesheet('dice_role', 'assets/dice-roll.png', {
                frameWidth: 197,
                frameHeight: 198
                });

            this.load.image('red_guti', 'assets/red.png');
            this.load.image('green_guti', 'assets/green.png');
            this.load.image('blue_guti', 'assets/blue.png');
            this.load.image('yellow_guti', 'assets/yellow.png');

        }

        create (){
            const board = this.add.image((displayWidth/2),(displayHeight/2), 'board');
            //board.anchor.setTo(0);
            board.setOrigin(0.5,0.5);
            board.setScale(3,3);

            this.zero_dice = this.add.image((displayWidth/2),(displayHeight/2), 'zero_dice').setInteractive();

            sprite = this.add.sprite(200,200, 'dice_role').setOrigin(0.5,0.5);
           
            this.frames = this.anims.generateFrameNumbers('dice_role', { start: 0, end: 6 });

            sprite.anims.create({
                key: 'rolling',
                frames: this.frames,
                frameRate: 20,
                repeat: 0,
                hideOnComplete: true

            });

           // this.sprite.anims.play('rolling', true);
                   
              
            var i =1;
            this.zero_dice.on('pointerdown', function (pointer) {
                
               console.log("fuck");
                sprite.setPosition(700,500);
                sprite.anims.play('rolling', false);
                i++;
            });



            this.red_guti1 = this.add.image((displayWidth/2)-320,(displayHeight/2)-200, 'red_guti').setOrigin(0.5,0.5).setInteractive();
            this.red_guti2 = this.add.image((displayWidth/2)-320,(displayHeight/2)-320, 'red_guti').setOrigin(0.5,0.5);
            this.red_guti3 = this.add.image((displayWidth/2)-200,(displayHeight/2)-320, 'red_guti').setOrigin(0.5,0.5);
            this.red_guti4 = this.add.image((displayWidth/2)-200,(displayHeight/2)-200, 'red_guti').setOrigin(0.5,0.5);

            this.green_guti1 = this.add.image((displayWidth/2)+200,(displayHeight/2)-320, 'green_guti').setOrigin(0.5,0.5);
            this.green_guti2 = this.add.image((displayWidth/2)+320,(displayHeight/2)-320, 'green_guti').setOrigin(0.5,0.5);
            this.green_guti3 = this.add.image((displayWidth/2)+320,(displayHeight/2)-200, 'green_guti').setOrigin(0.5,0.5);
            this.green_guti4 = this.add.image((displayWidth/2)+200,(displayHeight/2)-200, 'green_guti').setOrigin(0.5,0.5);

            this.blue_guti1 = this.add.image((displayWidth/2)-200,(displayHeight/2)+320, 'blue_guti').setOrigin(0.5,0.5);
            this.blue_guti2 = this.add.image((displayWidth/2)-320,(displayHeight/2)+320, 'blue_guti').setOrigin(0.5,0.5);
            this.blue_guti3 = this.add.image((displayWidth/2)-320,(displayHeight/2)+200, 'blue_guti').setOrigin(0.5,0.5);
            this.blue_guti4 = this.add.image((displayWidth/2)-200,(displayHeight/2)+200, 'blue_guti').setOrigin(0.5,0.5);

            this.yellow_guti1 = this.add.image((displayWidth/2)+200,(displayHeight/2)+320, 'yellow_guti').setOrigin(0.5,0.5);
            this.yellow_guti2 = this.add.image((displayWidth/2)+320,(displayHeight/2)+320, 'yellow_guti').setOrigin(0.5,0.5);
            this.yellow_guti3 = this.add.image((displayWidth/2)+320,(displayHeight/2)+200, 'yellow_guti').setOrigin(0.5,0.5);
            this.yellow_guti4 = this.add.image((displayWidth/2)+200,(displayHeight/2)+200, 'yellow_guti').setOrigin(0.5,0.5);
            



            // var i= 1;
           // setInterval(function(){    sprite.anims.play('rolling', true);  }, 10000);

        }

        update(time, delta){
             
        }

       

    

}



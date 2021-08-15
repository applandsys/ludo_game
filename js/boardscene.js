
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
            
            this.load.image('dice_1', 'assets/one.png');
            this.load.image('dice_2', 'assets/two.png');
            this.load.image('dice_3', 'assets/three.png');
            this.load.image('dice_4', 'assets/four.png');
            this.load.image('dice_5', 'assets/five.png');
            this.load.image('dice_6', 'assets/six.png');
     

            this.load.image('dice_placeholder','assets/dice_placeholder.png');

            this.load.audio('dice_role_sound', 'assets/sound/dice_roll.mp3');

        }

        create (){
            const board = this.add.image((displayWidth/2),(displayHeight/2), 'board');
            //board.anchor.setTo(0);
            board.setOrigin(0.5,0.5);
            board.setScale(3,3);

            this.zero_dice_player_one = this.add.image((displayWidth/2)-300,(displayHeight/2)+550, 'zero_dice').setInteractive();
            this.zero_dice_player_two = this.add.image((displayWidth/2)+300,(displayHeight/2)-550, 'zero_dice').setInteractive();
           
            
            this.sprite ='';
          
            this.random_number  = Phaser.Math.Between(1, 6);

            this.zero_dice_player_one.on('pointerdown',  function(pointer){

                this.random_number  = Phaser.Math.Between(1, 6);

                this.sound.play('dice_role_sound');
                this.sprite = this.add.sprite((displayWidth/2)-300,(displayHeight/2)+550, 'dice_role').setOrigin(0.5,0.5);
                this.frames = this.anims.generateFrameNumbers('dice_role', { start: 0, end: 6 });
                this.sprite.anims.create({
                    key: 'rolling',
                    frames: this.frames,
                    frameRate: 20,
                    repeat: 0,
                    hideOnComplete: true     
                });
                this.sprite.anims.play('rolling', false);

                this.sprite.on('animationcomplete', function (anim, frame) {
                    this.dice_postion = this.add.image((displayWidth/2)-300,(displayHeight/2)+550,'dice_'+this.random_number);
                }, this);
    

            } ,this);

            


          
          // Player 1 //  
          this.blue_guti1 = this.add.image(player1GutiPos[0].x,player1GutiPos[0].y, 'blue_guti').setOrigin(0.5,0.5);
          this.blue_guti2 = this.add.image((displayWidth/2)-320,(displayHeight/2)+320, 'blue_guti').setOrigin(0.5,0.5);
          this.blue_guti3 = this.add.image((displayWidth/2)-320,(displayHeight/2)+200, 'blue_guti').setOrigin(0.5,0.5);
          this.blue_guti4 = this.add.image((displayWidth/2)-200,(displayHeight/2)+200, 'blue_guti').setOrigin(0.5,0.5);

         // Player 2//
          this.green_guti1 = this.add.image((displayWidth/2)+200,(displayHeight/2)-320, 'green_guti').setOrigin(0.5,0.5);
          this.green_guti2 = this.add.image((displayWidth/2)+320,(displayHeight/2)-320, 'green_guti').setOrigin(0.5,0.5);
          this.green_guti3 = this.add.image((displayWidth/2)+320,(displayHeight/2)-200, 'green_guti').setOrigin(0.5,0.5);
          this.green_guti4 = this.add.image((displayWidth/2)+200,(displayHeight/2)-200, 'green_guti').setOrigin(0.5,0.5);

         // Player 3// 
            this.red_guti1 = this.add.image((displayWidth/2)-320,(displayHeight/2)-200, 'red_guti').setOrigin(0.5,0.5).setInteractive();
            this.red_guti2 = this.add.image((displayWidth/2)-320,(displayHeight/2)-320, 'red_guti').setOrigin(0.5,0.5);
            this.red_guti3 = this.add.image((displayWidth/2)-200,(displayHeight/2)-320, 'red_guti').setOrigin(0.5,0.5);
            this.red_guti4 = this.add.image((displayWidth/2)-200,(displayHeight/2)-200, 'red_guti').setOrigin(0.5,0.5);

        // Player 4 //  
            this.yellow_guti1 = this.add.image((displayWidth/2)+200,(displayHeight/2)+320, 'yellow_guti').setOrigin(0.5,0.5);
            this.yellow_guti2 = this.add.image((displayWidth/2)+320,(displayHeight/2)+320, 'yellow_guti').setOrigin(0.5,0.5);
            this.yellow_guti3 = this.add.image((displayWidth/2)+320,(displayHeight/2)+200, 'yellow_guti').setOrigin(0.5,0.5);
            this.yellow_guti4 = this.add.image((displayWidth/2)+200,(displayHeight/2)+200, 'yellow_guti').setOrigin(0.5,0.5);
            

            // var i= 1;
           // setInterval(function(){    sprite.anims.play('rolling', true);  }, 10000);

           //this.player_one_dice_placeholder =  this.add.image((displayWidth/2)-300,(displayHeight/2)+550,'dice_placeholder');
		   


		   
		/*    setInterval(function(){ 

				$.ajax({
						type:'POST',
						url:"http://localhost/ludo_backend/api/player_create",
						data:{"action":"player_create"},
						dataType: 'json',
						success: function(data){		
							console.log(data);
						},
						error: function(data){
							
						}
						
				});
				
		   }, 300); */
		   

        }


        update(time, delta){
        
          // realtime update
        }

    

    

}


/*


this.sprite = this.add.sprite(200,200, 'dice_role').setOrigin(0.5,0.5);
       
           this.frames = this.anims.generateFrameNumbers('dice_role', { start: 0, end: 6 });

           this.sprite.anims.create({
               key: 'rolling',
               frames: this.frames,
               frameRate: 20,
               repeat: 0,
               hideOnComplete: true

           });
            this.sprite.anims.play('rolling', false);



*/
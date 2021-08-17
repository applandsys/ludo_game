
class lobbyscene extends Phaser.Scene{

    constructor() {
        super('lobbyscene');
    }

    preload(){
        this.load.image('start_game', 'assets/start_game.png');
    }

    create(){
        this.start_game_button = this.add.image((displayWidth/2),(displayHeight/2), 'start_game').setInteractive();

        this.start_game_button.on('pointerdown',  function(pointer){

            this.scene.start('boardscene', ['apatotokisuna']);

            this.player_id = player_data.player_id;

            $.ajax({
                type:'POST',
                url: BASE_URL+"api/room_create",
                data:{"action":"room_create","player_id":this.player_id},
                dataType: 'json',
                success: function(data){
                    player_data.player_position= data.player_position;
                    player_data.player_room= data.player_room;
                   // localStorage.setItem("player_position", data.player_position);  
                   // localStorage.setItem("player_room", data.player_room);
                    console.log(player_data);
                     
                },
                error: function(data){
                    console.log(data);

                }    
            });


        } ,this);

    }
    
    update(){
        
    }

}    
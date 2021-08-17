var game_state = {play_status:null,dice_number:null,piece_number:null,piece_position:null,activity_seen:null};

var i =1;

setInterval(function(){ 
    
    $.ajax({
        type:'POST',
        url: BASE_URL+"api/game_state",
        data:{"action":"game_state","player_id":player_data.player_id},
        dataType: 'json',
        success: function(data){	
          //  console.log(data); 
            if(data.count >= 1){
                game_state.play_status = data.activity[0].type;
                game_state.dice_number = data.activity[0].dice_number;
                game_state.activity_seen = 'pending';
            } 
        },
        error: function(data){
            
        }    
    });


}, 5000);



//https://phaser.io/examples/v2/buttons/disable-button-on-click
// https://phaser.io/examples/v3/view/game-objects/images/image-alpha
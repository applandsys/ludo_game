const BASE_URL = "http://localhost/ludo_backend/"; 

var player1GutiPos = [ {x : (displayWidth/2)-200 , y: (displayHeight/2)+320} ]; 

var player_data = {player_id: 0, player_name: 0, player_position: 0, player_room: 0};
    player_data.player_id = localStorage.getItem("player_id");
    player_data.player_name = localStorage.getItem("player_name");

console.log(player_data);

if(player_data.player_id==0 || player_data.player_id==null){
    
    $.ajax({
        type:'POST',
        url: BASE_URL+"api/player_create",
        data:{"action":"player_create"},
        dataType: 'json',
        success: function(data){		
            localStorage.setItem("player_id", data.player_id);  
            localStorage.setItem("player_name", data.player_name);
            
            alert("Player Created");
             
        },
        error: function(data){
            
        }    
    });
}



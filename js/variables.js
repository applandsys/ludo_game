const BASE_URL = "http://localhost/ludo_backend/"; 
//const BASE_URL = "https://xenodochial-lederberg.13-213-40-35.plesk.page/ludo_backend/"; 

var player1GutiPos = [ {x : (displayWidth/2)-200 , y: (displayHeight/2)+320} ]; 

var player_data = {player_id: 0, player_name: 0, player_position: 0, player_room: 0};

   // var player_id_storage = localStorage.getItem("player_id");
   // var player_name_storage = localStorage.getItem("player_id");
   // var player_position_storage = localStorage.getItem("player_id");
   // var player_room_storage = localStorage.getItem("player_id");

  //  player_data.player_id = player_id_storage;
  //  player_data.player_name = player_name_storage;
  //  player_data.player_position = player_position_storage;
  //  player_data.player_room = player_room_storage;

$.ajax({
    type:'POST',
    url: BASE_URL+"api/player_create",
    data:{"action":"player_create"},
    dataType: 'json',
    success: function(data){	
        player_data.player_id = data.player_id;	
        player_data.player_name = data.player_name;	
       // localStorage.setItem("player_id", data.player_id);  
      //  localStorage.setItem("player_name", data.player_name);   
    },
    error: function(data){
        
    }    
});
/*
if(player_id_storage==null || player_name_storage ==null){
    
    $.ajax({
        type:'POST',
        url: BASE_URL+"api/player_create",
        data:{"action":"player_create"},
        dataType: 'json',
        success: function(data){	
            player_data.player_id = data.player_id;	
            player_data.player_name = data.player_name;	
           // localStorage.setItem("player_id", data.player_id);  
          //  localStorage.setItem("player_name", data.player_name);   
        },
        error: function(data){
            
        }    
    });
}
*/




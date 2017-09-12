$(document).ready(function() {  
    $.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=mistople&api_key=7add53b32ae79212c3b44ba511d1abde&limit=1&format=json&callback=?", function(json) {  
        var html = '';  
        var item = json.recenttracks.track[0];  
        html += "<p><a href=" + item.url + " target='_blank'>" + item.name +"</a></p>";    
        $('#song').append(html); 
    });  
});  
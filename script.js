// function buttonclk(watch)
// {
// 	console.log(watch);
// 	window.open("https://www.youtube.com/watch?v="+watch);
// }




$("#search").click(function(){
   	
   	var str=$("#searchTerm").val();
    console.log(str);
    var url="https://www.googleapis.com/youtube/v3/search?part=snippet&q="+str+"&type=video&key=AIzaSyCf8CAWh-Ow1_Zjq20kyxsS0xaQQHZ2ZXw&maxResults=10";
	$.getJSON(url,function(data) {
   
    var arrayofsearch = data.items;
    console.log(arrayofsearch);

    var html = "<table border=2 cellspacing=2 cellpadding=5><tr><th><b>Thumbnail</b></th><th><b>Title</b></th><th><b>Link</b></th></tr>";
 
        for(var i=0;i<arrayofsearch.length;i++){
        // console.log(arrayofsearch[i].snippet.thumbnails.default.url);	
            html += "<tr><td><img src='"+arrayofsearch[i].snippet.thumbnails.default.url+"'</td><td>"+arrayofsearch[i].snippet.title+"</td><td><a href=\"https://www.youtube.com/watch?v="+arrayofsearch[i].id.videoId+"\" target=_new class=\"btn btn-primary\">Play video</a></td></tr>";
        
        }
 
        html += "</table>";
        
        $("#data").html(html); 
    
    
 });
})



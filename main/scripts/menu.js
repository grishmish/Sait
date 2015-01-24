var width = $(window).width();
var height = $(window).height();

$( "#menubar" ).buttonset().find("label").css("width",width*0.0825);
$("#home").click(function(){
	window.location = "main.html";
});
$("#movies").click(function(){
	window.location = "movie.html";
});
$("#tv").click(function(){
	window.location = "tv.html";
});
$("#novels").click(function(){
	window.location = "novel.html";
});
$("#games").click(function(){
	window.location = "game.html";
});
$("#characters").click(function(){
	window.location = "char.html";
});
$("#about").click(function(){
	window.location = "about.html";
});

$("#contactus").click(function(){
	window.location = "contactus.html";
});

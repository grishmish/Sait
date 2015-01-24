$("#sith").hover(function(){
	$(this).css("width","30%");
	$(this).css('cursor', 'pointer');
	$(this).css("margin-left","5%");
},function(){
	$(this).css("width","25%");


	$(this).css("margin-left","10%");
});

$("#jedi").hover(function(){
	$(this).css("width","30%");
	$(this).css('cursor', 'pointer');
	$(this).css("margin-left","0%");
},function(){
	$(this).css("width","27%");

	$(this).css("margin-left","15%");
});
$("#edno").hover(function(){
	$(this).css("width","70%");
	$(this).css('cursor', 'pointer');
	$(this).css("margin-left","41%");
},function(){
	$(this).css("width","60%");

	$(this).css("margin-left","46%");
});
$("#sith").click(function(){
	window.location = "http://starwars.wikia.com/wiki/Dark_side_of_the_Force";

});

$("#jedi").click(function(){
	window.location = "http://starwars.wikia.com/wiki/Light_side_of_the_Force";

});

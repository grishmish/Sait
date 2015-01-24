var shit = 0;
$('#main').children('div').each(function () {
    shit+=$(this).height(); 
});
if(shit>$("#main").height()){
	$("#main").css("height",shit+screen.height*0.2)

}
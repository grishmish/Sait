var width = $(window).width();
var height = $(window).height();
$(window).height(2500)
$("#header").css("position","fixed");
var headerWidth = width*0.79;
var headerHeight= height*0.06;
$("#header").css("width",headerWidth);
$("#header").css("height",headerHeight);
$("#header").css("left",(width-headerWidth)/2);
$("#header").css("right",(width-headerWidth)/2);
$("#header").css("display","inline");
$("#header").css("top",0);

$("#menu").css("display","inline");
$("#menu").css("top",headerHeight);
$("#menu").css("left",0.1675*width);
$("#menu").css("position","fixed");
$("#menu").css("width",width*0.665);
$("#menu").css("height",height*0.02);

$("#main").css("top",headerHeight+30);
$("#main").css("left",0.1675*width);
$("#main").css("position","relative");
$("#main").css("display","inline");
$("#main").css("width",width*0.665);

$("#main").css("right",0.1675*width);

$("#footer").css("bottom",0);
$("#footer").css("position","relative");
$("#footer").css("display","inline");

$("#mainer").css("width",width*0.665);

$("#mainer div").css("width",width*0.6);
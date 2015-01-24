var width = screen.width;
var height = screen.height;
$("#header").css("position","fixed");
var headerWidth = width*0.75;
var headerHeight= height*0.13;
$("#header").css("width",headerWidth);
$("#header").css("height",headerHeight);
$("#logo").css("width",headerWidth);
$("#logo").css("height",headerHeight);
$("#header").css("left",(width-headerWidth)/2);
$("#header").css("right",(width-headerWidth)/2);
$("#header").css("top",0);

$("#main").css("background-image","url(images\/background.jpg\") center ");

$("#menu").css("display","inline");
$("#menu").css("top",headerHeight);
$("#menu").css("left",0.1675*width);
$("#menu").css("position","fixed");
$("#menu").css("width",width*0.665);
$("#menu").css("height",height*0.02);

$("#main").css("top",headerHeight+40);
$("#main").css("left",0.1675*width);
$("#main").css("width",width*0.665);
$("#main").css("height",1000);
$("#main").css("right",0.1675*width);

$("#main").css("margin-bottom",50);
$("#main").css("background-image","url(images\/bacgr2.png\")");

$("#main div").css("width",width*0.58);
$("#main div").css("margin-left",width*0.04);
$("#main div").css("margin-top",height*0.03);
$(".video").css("width",0.496*width)
$(".video").css("height",0.279*width)
$(".video iframe").css("width",0.9*0.496*width)
$(".video iframe").css("height",0.9*0.279*width)
var x = $(document).height();
$("#footer").css("top", x+200);
$("#footer").css("left", width*0.4);
$("#footer").css("right", width*0.4);








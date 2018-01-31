console.log("test");

var c = document.getElementById("myCanvas1");
var	ctx = c.getContext('2d')

var WIDTH = 600;
var HEIGHT = 400;

//coordinates and movement
var x,y;
var mx, my;

//draw shape
function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.strokeStyle = "navy";
	ctx.stroke();
	ctx.fillStyle ="cyan"
	ctx.fill();              
}

//inisialize animtion
functon init(){
	x = 300;
	y = 200;
	mx = 3;
	my= 4
	return setInterval(draw,20);
}

function draw(){
circle (x,y,30)
}

init();

































































































































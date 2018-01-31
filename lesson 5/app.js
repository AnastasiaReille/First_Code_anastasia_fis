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
function init(){
	x = 300;
	y = 200;
	mx = 3;
	my= 4
	x2 = 400;
	y2 = 100;
	mx2 = 4;
	my2= 3;


	return setInterval(draw,20);
}

function draw(){
	clear();
circle (x,y,30);
circle2 (x2,y2,30);



//bounce
if(x+ mx  < 0 || x+mx >WIDTH){
	mx= -mx;
}
if(y+ my < 0|| y+my> HEIGHT){
	my = -my;
}

//update x and y
x = x + mx;
y =  y + my;

//bounce
if(x2+ mx2  < 0 || x2+mx2 >WIDTH){
	mx2= -mx2;
}
if(y2+ my2 < 0|| y2+my2> HEIGHT){
	my2 = -my2;
}

//update x and y
x2 = x2 + mx2;
y2 =  y2 + my2;
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}


init();


var x2,y2;
var mx2,my2;

//draw shape2
function circle2(x2,y2,r){
	ctx.beginPath();
	ctx.arc(x2,y2,r,0,6.28);
	ctx.closePath();
	ctx.strokeStyle = "navy";
	ctx.stroke();
	ctx.fillStyle ="cyan"
	ctx.fill();              
}

































































































































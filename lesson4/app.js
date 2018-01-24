console.log("test");

var c = document.getElementById("myCanvas1");
var	ctx = c.getContext('2d');

// var img	=new Image();
// img.src = 'pic.jpg';

// img.onload = function(){
// 	ctx.drawImage(img,100,100,150,150);
// }


// var img2	=new Image();
// img2.src = 'keepcalm.png';

// img2.onload = function(){
// 	ctx.drawImage(img2,30,30,100,100);
// }

var img	=new Image();
img.src = 'person.png';

img.onload = function(){
	ctx.drawImage(img,210,210,100,100);
}
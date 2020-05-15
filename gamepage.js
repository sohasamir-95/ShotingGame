//login
var ok=document.querySelector('#nameinfo');
var txt=localStorage.getItem('sm')
ok.innerText=txt;
//player
var objImage;
var bulletObj = [];//bullet
function init() {
	objImage = document.getElementById("image2");
	objImage.style.position = 'absolute';
	objImage.style.left = '0px';
	objImage.style.bottom = '70px';

}
divObjects = document.getElementById("createBlocks");
function getKeyAndMove(e) {
	var key_code = e.which || e.keyCode;
	switch (key_code) {
		case 37: //left arrow key
			moveLeft();
			break;

		case 39: //right arrow key
			moveRight();
			break;
		case 32: //space
 			bulletObj = document.createElement("IMG");
			bulletObj.setAttribute("src", "images/bullet.png");
			bulletObj.setAttribute("id", "dot")
			divObjects.appendChild(bulletObj);
			bulletUp();
			break;

	}
}
//bullet
function bulletUp() {
	move = 0;
	//var res=divObjects.lastElementChild
	setInterval(function () {
		bulletObj.style.top = "510px";
		bulletObj.style.left=objImage.style.left;

		move += 20;
		bulletObj.style.top = parseInt(bulletObj.style.top) - move + 'px';
		if(bulletObj.x<=12||bulletObj.x>=52)
		{		
		for(var i=1;i<=15;i++)
		{
		  document.images[i].style.visibility='hidden';
		}
		}

		else if(bulletObj.x<=52||bulletObj.x>=92)
		{
			for(var i=16;i<=31;i++)
		{
		  document.images[i].style.visibility='hidden';
		}
		if(bananas.left==bulletObj.left)
		{
			for(var i=1;i<=15;i++)
			{
			document.bananas.style.visibility='hidden';
		}
	}
		}
		
		
	}, 100);

}
function moveLeft() {
	objImage.style.left = parseInt(objImage.style.left) - 5 + 'px';
	//bulletObj.style.left=parseInt(objImage.style.left)-5 +'px'
}
function moveRight() {
	objImage.style.left = parseInt(objImage.style.left) + 5 + 'px';
	//bulletObj.style.left=parseInt(objImage.style.left)+5 +'px';
}
window.onload = init;
//blocks
	var bananas;
	var count=0;
	var  blockId=setInterval(function(){

	for(var i=0;i<15;i++)
	{
	 bananas=document.createElement("IMG");
	 bananas.setAttribute("src", "images/banana.jfif");
	 bananas.setAttribute("id","block");
	 divObjects.appendChild(bananas);
	}
	count++;
	if(count==11)
	{
		clearInterval(blockId);
	
       //check when elemnets touch monkey
		var res=divObjects.lastElementChild

		if(res.y<objImage.y)
		{
		    alert("gameOver");
		count--;
		document.location.href="homepage.html";
		}
		
	}
	},2000);

	//timer

var time = document.getElementById("time");
time.innerText = 0;
var counter = 0;
setInterval(function () {
	time.innerText = counter
	counter++;
	
	if(counter==120)
		{
			alert("game over");
		}
}, 1000);


/*
trObject=document.createElement("tr");
tablOb=document.getElementById("createBlocks")
setInterval(function(){
for(var i=0;i<12;i++)
{
    bananas=document.createElement("IMG");
	bananas.setAttribute("src", "images/banana.jfif");
	tdObject=document.createElement("td");
	bananas.setAttribute("width", "40");
	bananas.setAttribute("height", "40");
	bananas.setAttribute("id","block");
	trObject.appendChild(bananas);
	tdObject.appendChild(trObject);
}
//tablOb.appendChild(tdObject);

},1000);*/


//bullet

// divObjects=document.getElementById("createBlocks");
// bulletObj=document.createElement("IMG");
// bulletObj.setAttribute("src","images/bullet.png");
// bulletObj.setAttribute("id","dot")
// divObjects.appendChild(bulletObj);









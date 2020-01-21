// JavaScript Document

//Responsive Navbar

function myFunction(){
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav"){
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}


var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction2() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

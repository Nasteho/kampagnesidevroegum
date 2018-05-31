function Scroll(){
var img = document.querySelector("#img-one");
var ypos = window.pageYOffset;
if(ypos > 550 && ypos < 950) {
img.style.opacity = "1";
}
else{
	img.style.opacity = "0";
	}
}
	window.addEventListener("scroll",Scroll);

  function Scroll2(){
  var img2 = document.querySelector("#img-two");
  var ypos = window.pageYOffset;
  if(ypos > 1300 && ypos < 1700) {
  img2.style.opacity = "1";
  }
  else{
  	img2.style.opacity = "0";
  	}
  }
  	window.addEventListener("scroll",Scroll2);

    function Scroll3(){
    var img3 = document.querySelector("#img-three");
    var ypos = window.pageYOffset;
    if(ypos > 2000 && ypos < 2500) {
    img3.style.opacity = "1";
    }
    else{
      img3.style.opacity = "0";
      }
    }
      window.addEventListener("scroll",Scroll3);


      function Scroll4(){
      var img4 = document.querySelector("#img-four");
      var ypos = window.pageYOffset;
      if(ypos > 2800 && ypos < 3100) {
      img4.style.opacity = "1";
      }
      else{
        img4.style.opacity = "0";
        }
      }
        window.addEventListener("scroll",Scroll4);
/***************************************/

function slideUp(){
var headline = document.querySelector("#footer-headline");
var ypos = window.pageYOffset;
if(ypos > 3300 ) {
headline.style.opacity = "1";
}
else{
  headline.style.opacity = "0";
  }
}
  window.addEventListener("scroll",slideUp);

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
    if(ypos > 2600 && ypos < 3200) {
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
      if(ypos > 3500 && ypos < 4800) {
      img4.style.opacity = "1";
      }
      else{
        img4.style.opacity = "0";
        }
      }
        window.addEventListener("scroll",Scroll4);
/***************************************/

/*function slideUp(){
var headline = document.querySelector("#footer-headline");
var ypos = window.pageYOffset;
if(ypos > 3550 ) {
      headline.style.opacity = "1";
      headline.classList.add("animation");
}
else{
  headline.classList.remove("animation");
  headline.style.opacity = "0";
  }
}
  window.addEventListener("scroll",slideUp);
*/
  function bounceIn () {
    var phone = document.querySelector("#img-five");
    var ypos = window.pageYOffset;
    if(ypos > 4200 ) {
          phone.classList.add("animationtwo");
    }
  }

window.addEventListener("scroll",bounceIn);



var btn = document.querySelector('#btn');

btn.addEventListener("click", function(event) {
  if (event.target == btn)
  window.scrollTo({
      "behavior": "smooth",
      "top": 0
  }); });

  var btn2 = document.querySelector('#btn2');
  var sec = document.querySelector('#section-two');
  var pos = sec.offsetTop;
  btn2.addEventListener("click", function(event) {
    if (event.target == btn2)
    window.scrollTo({
        "behavior": "smooth",
        "top": pos
    }); });

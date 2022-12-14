// navbar
document.querySelector('.header__burger').addEventListener('click', function() {
  var menu = document.querySelector('.header__nav');
  var burger = document.querySelector('.header__burger');
  var overlay = document.querySelector('.overlay');
  
  if (burger.classList.contains("header__burger-active")) {
    menu.classList.remove("header__open");
    burger.classList.remove("header__burger-active");
    overlay.classList.remove("overlay__open");
  } else {
    menu.classList.add("header__open");
    burger.classList.add("header__burger-active");
    overlay.classList.add("overlay__open");
  }
  
  overlay.addEventListener('click', () => {
    menu.classList.remove('header__open');
    burger.classList.remove('header__burger-active');
    overlay.classList.remove('overlay__open');
  });
})


// accordion
var accordion = document.getElementsByClassName("popular__accordion");
var i;

for (i = 0; i < accordion.length; i++) {
	accordion[i].onclick = function() {
    this.classList.toggle("popular__active");
    var popular__panel = this.nextElementSibling;
    if (popular__panel.style.maxHeight){
		popular__panel.style.maxHeight = null;
		popular__panel.style.margin = null;
    } else {
		popular__panel.style.maxHeight = popular__panel.scrollHeight + "px";
		popular__panel.style.margin = "15px 0 0";
    } 
  }
}
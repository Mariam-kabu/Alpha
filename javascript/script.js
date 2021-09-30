// overlay menu - responsive
const menuBar = document.querySelector('.toggle-bar');
const overlayMenu = document.querySelector('.overlay-menu');
const overlayLogo =document.querySelector('.toggle-logo');
let menuOpen = false;
menuBar.addEventListener('click', ()=>{
  if(!menuOpen){
    overlayMenu.classList.add('open');
    overlayMenu.classList.remove('closed');
    menuOpen = true;
  }
});
overlayLogo.addEventListener('click', ()=>{
  if(menuOpen){
    overlayMenu.classList.add('closed');
    overlayMenu.classList.remove('open');
    menuOpen = false;
  }
});

const parentList = document.querySelectorAll(".overlay-li");
parentList.forEach(div => {
  var presentList = div.querySelector(".oli-div");
  var hiddenList = div.querySelector(".child-oul");
  var arrow = div.querySelector(".oli-arrow");
  let childList = false;
  presentList.addEventListener('click', ()=>{
    if(hiddenList.style.display == 'block'){
      hiddenList.style.display = 'none';
      childList = false;
      arrow.classList.remove('dropDown');
    }else{
      hiddenList.style.display = 'block';
      childList = true;
      arrow.classList.add('dropDown');
    }
  })
});


// main page first slider
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}


// main page - double slider
var Index = 1;
displaySlides(Index);

// Thumbnail image controls
function currentPage(a) {
    displaySlides(Index = a);
  }
  
  function displaySlides(a) {
    var x;
    var slide = document.getElementsByClassName("douSlides");
    var dot = document.getElementsByClassName("douDot");
    if (a > slide.length) {Index = 1}
    if (a < 1) {Index = slide.length}
    for (x = 0; x < slide.length; x++) {
        slide[x].style.display = "none";
    }
    for (x = 0; x < dot.length; x++) {
        dot[x].className = dot[x].className.replace(" activate", "");
    }
    slide[Index-1].style.display = "block";
    dot[Index-1].className += " activate";
  }

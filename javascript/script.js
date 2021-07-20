// main page first slider
var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
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


// company page
const year = document.querySelectorAll('.year');
year.forEach(function(date, key){
  date.addEventListener('click', function(){
    date.classList.add("opend");
    year.forEach(function(time, Index){
      if (key != index){
        time.classList.remove('opend');
      }
    })
  })
})

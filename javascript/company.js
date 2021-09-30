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


// company page
const divParent = document.querySelectorAll(".ddi-parent");
divParent.forEach(div => {
    var presentChild = div.querySelector(".drop-down-info-container");
    var hiddenChild = div.querySelector(".drop-down-information");
    presentChild.addEventListener('click', () => {
        if (hiddenChild.style.display == 'block') {
            hiddenChild.style.display = 'none';
        } else {
            hiddenChild.style.display = 'block';
        }
    })
});

var yearBox = document.getElementById("yearDiv");
var date =document.getElementsByClassName(".year");
for(var i=0; i<date.length; i++){
    date[i].addEventListener("click", function(){
        var current = document.getElementsByClassName(".active");
        current[0].className = current[0].className.replace(" .active", "");
        this.className += " .active";
    });
}

const element = document.querySelectorAll(".year");
element.forEach(function(x, key){
    x.addEventListener('click', function(){
        x.classList.add("open");
        element.forEach(function(z, index){
            if(key != index){
                z.classList.remove("open");
            }
        })
    })
})
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

// drop down list

const presentInsu = document.querySelector(".insuli-box");
const hiddenInsu = document.querySelector(".insuli-dropdown-box");
let Insu = false;
presentInsu.addEventListener('click', ()=>{
  if(!Insu){
    presentInsu.classList.add('open');
    hiddenInsu.classList.add('open');
    Insu = true;
  }else{
    presentInsu.classList.remove('open');
    hiddenInsu.classList.remove('open');
    Insu = false;
  }
})
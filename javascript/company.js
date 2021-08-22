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
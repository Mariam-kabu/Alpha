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
const year = document.querySelectorAll('.element');
        element.forEach(function(el, key){                
            el.addEventListener('click', function () {
                el.classList.add("opened");
                    
                element.forEach(function(ell, index){
                    if(key !== index) {
                        ell.classList.remove('opened');
                    }
                });
            });
        });
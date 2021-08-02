const ddiParent = document.querySelectorAll('.ddi-parent');
        ddiParent.forEach(function(el, key){                
            el.addEventListener('click', function () {
                el.classList.add("drop-down");
                    
                ddiParent.forEach(function(ell, index){
                    if(key !== index) {
                        ell.classList.remove('drop-down');
                    }
                });
            });
        });
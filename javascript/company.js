const divParent = document.querySelectorAll('.ddi-parent');​
divParent.forEach(div => {
    var presentChild = div.querySelector('.drop-down-info-container');
    var hiddenChild = div.querySelector('.drop-down-information');​
    presentChild.addEventListener('click', () => {
        if (hiddenChild.style.display == 'block') {
            hiddenChild.style.display = 'none';
        } else {
            hiddenChild.style.display = 'block';
        }
    })
});
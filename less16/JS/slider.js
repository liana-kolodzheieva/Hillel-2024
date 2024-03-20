let slideIMG = document.querySelectorAll('.slide');
let curent = 0;
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');

function reset() {
    for (let i = 0; i < slideIMG.length; i++){
        slideIMG[i].style.display = 'none';
    }
}
function startSliderInit() {
    reset();
    slideIMG[current].style.display = 'block';
}


function slideLeft() {
    reset();
    slideIMG[current - 1].style.display = 'block';
    current--;
}
arrowLeft.addEventListener('click', function(){
    slideLeft();
})
startSliderInit();


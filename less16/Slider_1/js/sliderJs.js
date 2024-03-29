let sliderImg = document.querySelectorAll('.slide');
let current = 2;
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');

function reset() {
   for (let i = 0; i < sliderImg.length; i++){
      sliderImg[i].style.display = 'none';
   }
}

// Ініціалізація слайдера

function startSliderInit() {
   reset();
   sliderImg[current].style.display = 'block';
}

// Функція для відображення попереднього зображення після натискання на ліву стрілку
function slideLeft() {
   reset();
   sliderImg[current - 1].style.display = 'block';
   current--;
}

// Подія натискання на ліву стрілку
arrowLeft.addEventListener('click', function () {
   if (current === 0) {
      current = sliderImg.length; // якщо був 1 слайд, то ми повинні встановити індикатор на 1 більше ніж номер останнього елементу масиву тобто його довжину 
   }
   slideLeft();
});

// Функція для відображення наступного зображення після натискання на праву стрілку

function slideRight() {
   reset();
   sliderImg[current + 1].style.display = 'block';
   current++;
}
// Подія натискання на праву стрілку

arrowRight.addEventListener('click', function () {
   if (current === sliderImg.length - 1) {
      current = -1;
   }
   slideRight();
})

startSliderInit();
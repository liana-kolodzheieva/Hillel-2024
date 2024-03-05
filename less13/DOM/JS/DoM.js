// __Selectors
// console.log(document.getElementById('my-form'));
// const form = document.getElementById('my-form');
// console.log(form);
// console.log(document.getElementsByClassName('container'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('#my-form'));
// console.log(document.querySelector('h1'));
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');

// items.forEach((item) => {
//    console.log(item);
// })

// -----Change interface
// const ul = document.querySelector('.items');
// ul.remove();

// const ul = document.querySelector('.items');
// // ul.lastElementChild.remove();
// // ul.firstElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].textContent = 'Ben';
// ul.lastElementChild.innerHTML = '<h1>World</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'green';

/*========== EventListner =========== */

const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
   e.preventDefault();
   console.log('click');
   console.log(e.target);
   document.querySelector('#my-form').style.background = '#ccc';
   document.querySelector('body').classList.add('bg-dark');
})
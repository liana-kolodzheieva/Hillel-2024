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

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//    e.preventDefault();
//    console.log('click');
//    console.log(e.target);
//    document.querySelector('#my-form').style.background = '#ccc';
//    document.querySelector('body').classList.add('bg-dark');
//    document.querySelector('.items').lastElementChild.innerHTML = '<h2>Item3 Change</h2>'
// });

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// myForm.addEventListener('sumbit', onSubmit);
// function onSubmit(e) {
//    e.preventDefault();
//    // console.log(nameInput.value);
//    if (nameInput.value === '' || emailInput.value === '') {
//       // alert('Пуста форма!');
//       msg.classList.add('error');
//       msg.innerHTML = 'Пуста форма!';

//       setInterval(() => {
//          msg.classList.remove('error');
//          msg.innerHTML = '';
//       }, 1500);
//    } else {
//       // console.log(nameInput.value);

//       const li = document.createElement('li');
//       li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

//       userList.appendChild(li);

//       nameInput.value = '';
//       emailInput.value = '';
//    }
// }
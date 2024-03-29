let myList = document.querySelectorAll('li');

for (let i = 0; i < myList.length; i++){
   let span = document.createElement('span'),
      txt = document.createTextNode('\u00D7');
   span.className = 'close';
   span.appendChild(txt);
   myList[i].appendChild(span);
}

let close = document.querySelectorAll('.close');

for (let i = 0; i < close.length; i++){
   close[i].onclick = function () {
      let liClose = this.parentElement;
      // liClose.style.display = 'none';
      liClose.remove();
   } 
}

let list = document.querySelector('#my-list');
list.addEventListener('click', function (e) {
   if (e.target.tagName === 'LI') { 
      e.target.classList.toggle('checked');
   }
}, false);

function newElement() {
   console.log('click addBTN!');
   let li = document.createElement('li'),
      inputValue = document.querySelector('#header-input').value,
      txt = document.createTextNode(inputValue);
   
   if (inputValue === '') {
      alert('Ви нічого не ввели в форму!');
   } else {
      li.appendChild(txt);
      document.querySelector('#my-list').appendChild(li);
      document.querySelector('#header-input').value = '';
   }

   let span = document.createElement('span'),
      txtLi = document.createTextNode('\u00D7');
   span.className = 'close';
   span.appendChild(txtLi);
   li.appendChild(span);

   let closeNew = document.querySelectorAll('.close');

   for (let i = 0; i < closeNew.length; i++){
   closeNew[i].onclick = function () {
      let liClose = this.parentElement;
      // liClose.style.display = 'none';
      liClose.remove();
   } 
}
}
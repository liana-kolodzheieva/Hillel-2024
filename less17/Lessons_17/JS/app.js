let myList = document.querySelectorAll('li');

for (let i = 0; i < myList.length; i++){
   let span = document.createElement('span'),
      txt = document.createTextNode('\u00D7');
   span.className = 'close';
   span.appendChild(txt);
   myList[i].appendChild(span);
}
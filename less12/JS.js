// Умовні оператори ?: та ??

// [Первий операнд - умова] ? [другий операнд] : [третій операнд]

const a3 = 3;
const b3 = 2;
const resul1t = a3 > b3 ? a3 : b3;
console.log(resul1t);

const a = 3;
const b = 2;
const result = a < b ? a - b : a + b;
console.log(result);

// [лівий операнд] ?? [правий операнд]

const result1 = 'hello' ?? 'world';
console.log(result1);

const result2 = 0 ?? 'world';
console.log(result2);

const result3 = '' ?? 'world';
console.log(result3);

const result4 = true ?? false;
console.log(result4);

const result5 = null ?? 'not null';
console.log(result5);

const hello = 'Hi JS';
const message = null;
const result6 = message ?? hello;
console.log(result6);

// ___________ Умовні конструкції_________________

// ___________ конструкція if_________________

const income = 100;
if (income < 50) {
   console.log('Дохід більше 50');
}

if (income > 30) console.log('Більше 30!');

if (income > 30)
   console.log('Більше 40!');

const age = 15;
if (income > 50 && age > 14) {

   console.log('Дохід більше 50');
   console.log('Вік більше 14');
}

let variable = null;
if (variable) {
   console.log(`Змінна variable 1 має значення: ${variable}`)
}

if (variable !== undefined && variable !== null) {
   console.log(`Змінна variable 2 має значення : ${variable}`)
}

/*
if(умова){
   дії, якщо виконується умова (істина)
} else{
   дії, якщо не виконується умова (хибна)
}
*/

const a1 = 50;
if (a1 > 50) {
   console.log('змінна більше 50');
} else if (a1 === 50) {
   console.log('змінна дорівнює 50');
} else {
   console.log('змінна менше 50');
}

const b2 = 400;
if (b < 200) {

   console.log('від 0 до 200');
} else if (b2 >= 200 && b2 < 300) {
   
   console.log('від 200 до 300');
} else if (b2 >= 300 && b2 <= 400) {

   console.log('від 300 до 400');
} else {

   console.log('більше 400');
}

//  ___________ конструкція switch_________________

const c1 = 20;
switch (c1) {
   case 100:
      console.log(`c1 = ${c}`);
      break;
   case 200:
      console.log(`c2 = ${c}`);
      break;
   case 300:
      console.log(`c3 = ${c}`);
      break;
   default:
      console.log('case не підійшов');
      break;
}

const c = 100;
switch (c) {
   case 100:
   case 200:
      console.log(`c1 = ${c1} || c2 = ${c1}`);
      break;
   case 300:
      console.log(`c3 = ${c1}`);
      break;
   default:
      console.log('case не підійшов');
      break;
}

// -----------------------Arrays--------------------------
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apple', 'orange', 'pears', 10, true];

console.log(fruits[1]);
fruits[4] = 'grapes';
fruits.push('mango');
fruits.unshift('strawberries');
fruits.pop();
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('strawberries'));
console.log(fruits);


// -----------------------Цикли--------------------------

for (let index = 0; index < array.length; index++) {
    const element = array[index];   
   
}

for (let i = 1; i <= 5; i++) {
   
   console.log(i);  
   
}
console.log('Кінець циклу.');

for (let i = 10; i > 5; i--) {
   
   console.log(i);
   
}
console.log('Кінець циклу.');

for (let i = 0; i < 10; i+=2) {
   
   console.log(i);
   
}
console.log('Кінець циклу.');

let i = 0;
for (; i< 60;) {
   console.log(i);
   i += 10;
}

for (let i = 1, j = 1; i < 5, j < 4; i++, j++){
   console.log(i + j);
}
// 1: i = 1, j = 1; i + j = 2
// 2: i = 2, j = 2; i + j = 4
// 3: i = 3, j = 3; i + j = 6

for(let i = 1; i <= 5; i++) {
   for (let j = 1; j <= 5; j++){
      console.log(i * j);
   }
}
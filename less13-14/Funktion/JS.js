// // ____________while______________

// let i = 6;
// while (i<=5) {
//    console.log(i);
//    i+=2;
// }

// // ____________do while______________

// let i1 = 0;
// do {
//    console.log(i1);
//    i += 1; // i = i + 1;
// } while (i1 <= 5);

// // ____________Continue break______________

// for (let i2 = 1; i <= 10; i2++){
//    if (i2 === 5) break;
//    console.log(i2);
// }

// for (let i3 = 1; i3 <= 10; i3++){
//    if (i3 === 5) continue;  
//    console.log(i3);
// }

// ____________for in______________

const person1 = { name: 'Tom', age: 11 };
for (prop in person1){
   console.log(prop);
}

// ____________for of______________

const text = "Hello World";
for (ch of text) {
   console.log(ch);
}

const people = ["Tom", "Bill", "Sara"];
for (person of people) {
   console.log(person);
}

// ----------------- Function -------------

function addNums(num1, num2) {
   console.log(num1 + num2);
}
addNums(20, 2);

addNums(3, 5);

function addNum1(num1, num2) {
   return num1 + num2;
}

let result = addNum1(1, 2);
console.log(result);
console.log(addNum1(50, 20));

const addNum2 = (num1 = 0, num2 = 0) => {
   return num1 + num2;
}
console.log(addNum2(2, 3));

const addNum3 = (num1 = 1, num2 = 1) => console.log(num1 + num2);
 
addNum3(20, 33);

// _-_-_-_ Object _-_-_-_

const person = {
   firstName: 'Nick',
   lastName: 'Cell',
   age: 22,
   hobbies: ['music', 'movies', 'sport'],
   address: {
      street: '33 avenue st',
      city: 'Rnurcks',
      state: 'Yard'
   }
}
console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.address.street);
console.log(person.hobbies[1]);

const todosam = [
   {
      id: 1,
      text: 'go home',
      completed: true
   },
   {
      id: 2,
      text: 'go meeting',
      completed: true
   },
   {
      id: 3,
      text: 'go app',
      completed: false
   }
];

todosam.forEach(function (todo) {
   console.log(todo.text);
});

const todoText = todosam.map(function (todo) {
   return todo.text;
});
console.log(todoText);

const todoCompleted = todosam.filter(function (todo) {
   return todo.completed === true;
});

console.log(todoCompleted);


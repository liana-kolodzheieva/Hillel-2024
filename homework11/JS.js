
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Помилка: Ділення на нуль";
    } else {
        return x / y;
    }
}

function calculate(operation, x, y) {
    switch(operation) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
        default:
            return "Неправильна операція";
    }
}

let operation = prompt("Введіть операцію (+, -, *, /):");
let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));
console.log("Результат:", calculate(operation, num1, num2));
